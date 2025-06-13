
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { trackFormSubmission } from "@/components/OptimizedAnalytics";

interface EducationLevel {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  gradient: string;
  image: string;
  ageRange: string;
}

interface FormData {
  nome: string;
  telefone: string;
  dataVisita: string;
  horarioVisita: string;
  turno: string;
}

interface EducationLevelCardProps {
  level: EducationLevel;
}

const EducationLevelCard = ({ level }: EducationLevelCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    telefone: "",
    dataVisita: "",
    horarioVisita: "",
    turno: ""
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nome || !formData.telefone || !formData.dataVisita || !formData.horarioVisita || !formData.turno) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    setIsSubmitting(true);

    try {
      trackFormSubmission(`education_level_visit_${level.id}`);

      const message = `Olá, gostaria de agendar uma visita ao colégio!

Nível de Ensino: ${level.title}
Nome Completo: ${formData.nome}
Telefone: ${formData.telefone}
Data da Visita: ${formData.dataVisita}
Horário da Visita: ${formData.horarioVisita}
Turno Desejado: ${formData.turno}`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/5566996781284?text=${encodedMessage}`;

      window.open(whatsappUrl, "_blank");

      setFormData({
        nome: "",
        telefone: "",
        dataVisita: "",
        horarioVisita: "",
        turno: ""
      });
      
      setIsFlipped(false);
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      alert("Erro ao enviar. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Define posicionamento específico para cada nível de ensino para focar nos rostos
  const getImagePosition = () => {
    switch (level.id) {
      case "infantil":
        return "center top"; // Foca na parte superior central para capturar rostos das crianças
      case "fundamental1":
        return "center 20%"; // Ajusta para focar nos rostos dos estudantes
      case "fundamental2":
        return "center 25%"; // Posiciona para capturar bem os rostos
      case "medio":
        return "center 30%"; // Foca nos rostos dos estudantes do ensino médio
      default:
        return "center center";
    }
  };

  return (
    <div className="perspective-1000 w-full h-[650px] relative">
      <div 
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front Side */}
        <Card className="absolute inset-0 w-full h-full backface-hidden bg-white border-0 shadow-lg overflow-hidden rounded-xl">
          <div className="relative h-full flex flex-col">
            {/* Large Image Section */}
            <div className="h-80 overflow-hidden relative">
              <img 
                src={level.image} 
                alt={`Estudantes de ${level.title} - ${level.ageRange}`}
                className="w-full h-full object-cover"
                style={{ objectPosition: getImagePosition() }}
              />
              <div className="absolute top-4 left-4 bg-gray-600 bg-opacity-80 text-white px-3 py-1 rounded-full text-xs font-medium">
                {level.ageRange}
              </div>
            </div>
            
            {/* Content Section */}
            <div className="flex-1 flex flex-col justify-between p-6 bg-white">
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-3 leading-tight">{level.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{level.description}</p>
              </div>
              
              <Button
                onClick={() => setIsFlipped(true)}
                className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105"
                size="lg"
              >
                FAÇA A INSCRIÇÃO →
              </Button>
            </div>
          </div>
        </Card>

        {/* Back Side */}
        <Card className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-white border-0 shadow-lg rounded-xl">
          <div className="h-full flex flex-col p-6 overflow-hidden">
            <div className="flex items-center justify-between mb-4 flex-shrink-0">
              <h4 className="text-xl font-bold text-blue-900">Agendar Visita</h4>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsFlipped(false)}
                className="text-gray-500 hover:text-gray-700 p-2 h-auto rounded-full hover:bg-gray-100"
              >
                ✕
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="nivel" className="text-sm font-semibold text-gray-700">
                    Nível de Ensino
                  </Label>
                  <Input
                    id="nivel"
                    type="text"
                    value={level.title}
                    readOnly
                    className="bg-gray-50 text-gray-600 text-sm h-10 border-gray-200"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="nome" className="text-sm font-semibold text-gray-700">
                    Nome Completo *
                  </Label>
                  <Input
                    id="nome"
                    type="text"
                    value={formData.nome}
                    onChange={(e) => handleInputChange("nome", e.target.value)}
                    placeholder="Digite seu nome completo"
                    className="w-full text-sm h-10 border-gray-200 focus:border-teal-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefone" className="text-sm font-semibold text-gray-700">
                    Telefone (com DDD) *
                  </Label>
                  <Input
                    id="telefone"
                    type="tel"
                    value={formData.telefone}
                    onChange={(e) => handleInputChange("telefone", e.target.value)}
                    placeholder="(65) 99999-9999"
                    className="w-full text-sm h-10 border-gray-200 focus:border-teal-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label htmlFor="dataVisita" className="text-sm font-semibold text-gray-700">
                      Data da Visita *
                    </Label>
                    <Input
                      id="dataVisita"
                      type="date"
                      value={formData.dataVisita}
                      onChange={(e) => handleInputChange("dataVisita", e.target.value)}
                      className="w-full text-sm h-10 border-gray-200 focus:border-teal-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="horarioVisita" className="text-sm font-semibold text-gray-700">
                      Horário *
                    </Label>
                    <Input
                      id="horarioVisita"
                      type="time"
                      value={formData.horarioVisita}
                      onChange={(e) => handleInputChange("horarioVisita", e.target.value)}
                      className="w-full text-sm h-10 border-gray-200 focus:border-teal-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="turno" className="text-sm font-semibold text-gray-700">
                    Turno Desejado *
                  </Label>
                  <Select value={formData.turno} onValueChange={(value) => handleInputChange("turno", value)}>
                    <SelectTrigger className="w-full h-10 text-sm border-gray-200 focus:border-teal-500">
                      <SelectValue placeholder="Selecione o turno" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="manha">Manhã</SelectItem>
                      <SelectItem value="tarde">Tarde</SelectItem>
                      <SelectItem value="noite">Noite</SelectItem>
                      <SelectItem value="integral">Integral</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold mt-6 h-11 text-sm rounded-lg"
                >
                  {isSubmitting ? "Enviando..." : "AGENDAR VISITA"}
                </Button>
              </form>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default EducationLevelCard;
