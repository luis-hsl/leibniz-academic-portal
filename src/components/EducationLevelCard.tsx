
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
      // Track form submission
      trackFormSubmission(`education_level_visit_${level.id}`);

      // Create WhatsApp message
      const message = `Olá, gostaria de agendar uma visita ao colégio!

Nível de Ensino: ${level.title}
Nome Completo: ${formData.nome}
Telefone: ${formData.telefone}
Data da Visita: ${formData.dataVisita}
Horário da Visita: ${formData.horarioVisita}
Turno Desejado: ${formData.turno}`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/5566996781284?text=${encodedMessage}`;

      // Open WhatsApp
      window.open(whatsappUrl, "_blank");

      // Reset form and flip back
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

  return (
    <div className="perspective-1000 w-full h-[500px] relative">
      <div 
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front Side */}
        <Card className={`absolute inset-0 w-full h-full backface-hidden ${level.gradient} border-0 shadow-xl overflow-hidden`}>
          <div className="relative h-full flex flex-col text-white">
            {/* Image Section */}
            <div className="h-48 overflow-hidden relative">
              <img 
                src={level.image} 
                alt={`Estudantes de ${level.title} - ${level.ageRange}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            
            {/* Content Section */}
            <div className="flex-1 flex flex-col justify-between p-6">
              <div className="text-center">
                <div className="text-4xl mb-2">{level.icon}</div>
                <h3 className="text-xl font-bold mb-2">{level.title}</h3>
                <p className="text-sm text-white/90 leading-relaxed mb-2">{level.ageRange}</p>
                <p className="text-sm text-white/80 leading-relaxed">{level.description}</p>
              </div>
              
              <Button
                onClick={() => setIsFlipped(true)}
                className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-105 mt-4"
                size="lg"
              >
                Agendar Visita
              </Button>
            </div>
          </div>
        </Card>

        {/* Back Side */}
        <Card className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-white border-0 shadow-xl">
          <div className="h-full flex flex-col p-4 overflow-hidden">
            <div className="flex items-center justify-between mb-3 flex-shrink-0">
              <h4 className="text-lg font-semibold text-gray-800">Agendar Visita</h4>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsFlipped(false)}
                className="text-gray-500 hover:text-gray-700 p-1 h-auto"
              >
                ✕
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto">
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="space-y-1">
                  <Label htmlFor="nivel" className="text-xs font-medium">
                    Nível de Ensino
                  </Label>
                  <Input
                    id="nivel"
                    type="text"
                    value={level.title}
                    readOnly
                    className="bg-gray-50 text-gray-600 text-sm h-8"
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="nome" className="text-xs font-medium">
                    Nome Completo *
                  </Label>
                  <Input
                    id="nome"
                    type="text"
                    value={formData.nome}
                    onChange={(e) => handleInputChange("nome", e.target.value)}
                    placeholder="Digite seu nome completo"
                    className="w-full text-sm h-8"
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="telefone" className="text-xs font-medium">
                    Telefone (com DDD) *
                  </Label>
                  <Input
                    id="telefone"
                    type="tel"
                    value={formData.telefone}
                    onChange={(e) => handleInputChange("telefone", e.target.value)}
                    placeholder="(65) 99999-9999"
                    className="w-full text-sm h-8"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <Label htmlFor="dataVisita" className="text-xs font-medium">
                      Data da Visita *
                    </Label>
                    <Input
                      id="dataVisita"
                      type="date"
                      value={formData.dataVisita}
                      onChange={(e) => handleInputChange("dataVisita", e.target.value)}
                      className="w-full text-sm h-8"
                    />
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="horarioVisita" className="text-xs font-medium">
                      Horário *
                    </Label>
                    <Input
                      id="horarioVisita"
                      type="time"
                      value={formData.horarioVisita}
                      onChange={(e) => handleInputChange("horarioVisita", e.target.value)}
                      className="w-full text-sm h-8"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <Label htmlFor="turno" className="text-xs font-medium">
                    Turno Desejado *
                  </Label>
                  <Select value={formData.turno} onValueChange={(value) => handleInputChange("turno", value)}>
                    <SelectTrigger className="w-full h-8 text-sm">
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
                  className="w-full bg-red-600 hover:bg-red-700 text-white mt-4 h-9 text-sm"
                >
                  {isSubmitting ? "Enviando..." : "Agendar"}
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
