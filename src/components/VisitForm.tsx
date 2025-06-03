
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const VisitForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    level: "",
    shift: "",
    date: "",
    time: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.phone || !formData.level) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the data to a backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Visita agendada com sucesso!",
      description: "Entraremos em contato em breve para confirmar sua visita.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      level: "",
      shift: "",
      date: "",
      time: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="agendar" className="py-20 bg-gradient-to-br from-red-600 to-blue-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Agende Sua Visita</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Venha conhecer nossa estrutura, metodologia e equipe. Agende uma visita personalizada e descubra por que somos referência em educação.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form */}
            <Card className="shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Formulário de Agendamento</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Digite seu nome completo"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Telefone/WhatsApp *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="(66) 99999-9999"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="level">Nível Pretendido *</Label>
                      <Select value={formData.level} onValueChange={(value) => handleInputChange("level", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o nível" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="infantil">Ensino Infantil</SelectItem>
                          <SelectItem value="fundamental1">Fundamental I</SelectItem>
                          <SelectItem value="fundamental2">Fundamental II</SelectItem>
                          <SelectItem value="medio">Ensino Médio</SelectItem>
                          <SelectItem value="preparatorio">Preparatório ENEM/Vestibular</SelectItem>
                          <SelectItem value="extracurricular">Cursos Extracurriculares</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="shift">Turno Desejado</Label>
                      <Select value={formData.shift} onValueChange={(value) => handleInputChange("shift", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="manha">Manhã</SelectItem>
                          <SelectItem value="tarde">Tarde</SelectItem>
                          <SelectItem value="noite">Noite</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="date">Data Preferencial</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange("date", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="time">Horário Preferencial</Label>
                      <Input
                        id="time"
                        type="time"
                        value={formData.time}
                        onChange={(e) => handleInputChange("time", e.target.value)}
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-3"
                  >
                    Confirmar Visita
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="bg-white/10 backdrop-blur-sm text-white border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <MapPin className="h-6 w-6 text-yellow-300" />
                    <h3 className="text-xl font-bold">Localização</h3>
                  </div>
                  <p className="text-blue-100">
                    Avenida Paulista, 720<br />
                    Parque Sagrada Família<br />
                    Rondonópolis - MT, 78735-223
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm text-white border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Phone className="h-6 w-6 text-yellow-300" />
                    <h3 className="text-xl font-bold">Contatos</h3>
                  </div>
                  <div className="space-y-2 text-blue-100">
                    <p>📞 (66) 3421-8824</p>
                    <p>📱 (66) 99678-1284</p>
                    <p>✉️ admleibniz@gmail.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm text-white border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="h-6 w-6 text-yellow-300" />
                    <h3 className="text-xl font-bold">Horário de Funcionamento</h3>
                  </div>
                  <div className="space-y-1 text-blue-100">
                    <p>Segunda a Sexta: 7h às 22h</p>
                    <p>Sábado: 7h às 12h</p>
                    <p>Domingo: Fechado</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitForm;
