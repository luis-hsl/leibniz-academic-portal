import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from "lucide-react";

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  dataVisita: string;
  horario: string;
  mensagem: string;
}

const VisitForm = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    telefone: "",
    dataVisita: "",
    horario: "",
    mensagem: ""
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nome || !formData.email || !formData.telefone || !formData.dataVisita || !formData.horario) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    const message = `Olá! Gostaria de agendar uma visita ao Colégio Leibniz.

Nome: ${formData.nome}
Email: ${formData.email}
Telefone: ${formData.telefone}
Data preferida: ${formData.dataVisita}
Horário: ${formData.horario}
${formData.mensagem ? `Mensagem: ${formData.mensagem}` : ''}`;

    const whatsappUrl = `https://wa.me/5566996781284?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast.success("Redirecionando para WhatsApp...");
    
    // Reset form
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      dataVisita: "",
      horario: "",
      mensagem: ""
    });
  };

  // Get tomorrow's date for min date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 font-montserrat">
              Agende Sua Visita
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-montserrat">
              Venha conhecer de perto nossa infraestrutura e metodologia. Agende sua visita e descubra por que somos referência em educação.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="shadow-2xl border-0">
              <CardHeader className="text-center bg-gradient-to-r from-primary to-secondary text-white rounded-t-lg">
                <CardTitle className="text-2xl md:text-3xl font-bold font-montserrat">
                  Formulário de Agendamento
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="nome" className="text-foreground font-medium flex items-center gap-2">
                        <User className="h-4 w-4" />
                        Nome Completo *
                      </Label>
                      <Input
                        id="nome"
                        type="text"
                        value={formData.nome}
                        onChange={(e) => handleInputChange("nome", e.target.value)}
                        className="mt-2"
                        placeholder="Digite seu nome completo"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-foreground font-medium flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="mt-2"
                        placeholder="Digite seu email"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="telefone" className="text-foreground font-medium flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Telefone/WhatsApp *
                    </Label>
                    <Input
                      id="telefone"
                      type="tel"
                      value={formData.telefone}
                      onChange={(e) => handleInputChange("telefone", e.target.value)}
                      className="mt-2"
                      placeholder="(66) 99999-9999"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="dataVisita" className="text-foreground font-medium flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Data Preferida *
                      </Label>
                      <Input
                        id="dataVisita"
                        type="date"
                        value={formData.dataVisita}
                        onChange={(e) => handleInputChange("dataVisita", e.target.value)}
                        className="mt-2"
                        min={minDate}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="horario" className="text-foreground font-medium flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Horário *
                      </Label>
                      <select
                        id="horario"
                        value={formData.horario}
                        onChange={(e) => handleInputChange("horario", e.target.value)}
                        className="mt-2 w-full border border-input rounded-md px-3 py-2 focus:border-ring focus:ring-ring focus:outline-none"
                        required
                      >
                        <option value="">Selecione o horário</option>
                        <option value="08:00">08:00</option>
                        <option value="09:00">09:00</option>
                        <option value="10:00">10:00</option>
                        <option value="11:00">11:00</option>
                        <option value="14:00">14:00</option>
                        <option value="15:00">15:00</option>
                        <option value="16:00">16:00</option>
                        <option value="17:00">17:00</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="mensagem" className="text-foreground font-medium flex items-center gap-2">
                      <MessageSquare className="h-4 w-4" />
                      Mensagem (Opcional)
                    </Label>
                    <Textarea
                      id="mensagem"
                      value={formData.mensagem}
                      onChange={(e) => handleInputChange("mensagem", e.target.value)}
                      className="mt-2"
                      placeholder="Deixe uma mensagem adicional (opcional)"
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 text-lg"
                  >
                    Agendar Visita
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitForm;