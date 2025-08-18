import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  nivelPretendido: string;
  turnoDesejado: string;
  dataPreferencial: Date | undefined;
  horarioPreferencial: string;
}

const VisitForm = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    telefone: "",
    nivelPretendido: "",
    turnoDesejado: "",
    dataPreferencial: undefined,
    horarioPreferencial: ""
  });

  const handleInputChange = (field: keyof FormData, value: string | Date | undefined) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nome || !formData.email || !formData.telefone || !formData.nivelPretendido) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    const message = `Olá! Gostaria de agendar uma visita ao Colégio Leibniz.

Nome: ${formData.nome}
Email: ${formData.email}
Telefone: ${formData.telefone}
Nível Pretendido: ${formData.nivelPretendido}
${formData.turnoDesejado ? `Turno Desejado: ${formData.turnoDesejado}` : ''}
${formData.dataPreferencial ? `Data Preferencial: ${format(formData.dataPreferencial, "dd/MM/yyyy")}` : ''}
${formData.horarioPreferencial ? `Horário Preferencial: ${formData.horarioPreferencial}` : ''}`;

    const whatsappUrl = `https://wa.me/5566996781284?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast.success("Redirecionando para WhatsApp...");
    
    // Reset form
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      nivelPretendido: "",
      turnoDesejado: "",
      dataPreferencial: undefined,
      horarioPreferencial: ""
    });
  };

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
            <Card className="shadow-2xl border-0 bg-card">
              <CardHeader className="text-center bg-gradient-to-r from-primary to-secondary text-white rounded-t-lg pb-6">
                <CardTitle className="text-2xl md:text-3xl font-bold font-montserrat text-primary-foreground">
                  Formulário de Agendamento
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="nome" className="text-foreground font-medium">
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
                      <Label htmlFor="email" className="text-foreground font-medium">
                        E-mail *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="mt-2"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="telefone" className="text-foreground font-medium">
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

                    <div>
                      <Label htmlFor="nivelPretendido" className="text-foreground font-medium">
                        Nível Pretendido *
                      </Label>
                      <Select value={formData.nivelPretendido} onValueChange={(value) => handleInputChange("nivelPretendido", value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Selecione o nível" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="educacao-infantil">Educação Infantil</SelectItem>
                          <SelectItem value="ensino-fundamental-1">Ensino Fundamental I</SelectItem>
                          <SelectItem value="ensino-fundamental-2">Ensino Fundamental II</SelectItem>
                          <SelectItem value="ensino-medio">Ensino Médio</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="turnoDesejado" className="text-foreground font-medium">
                      Turno Desejado
                    </Label>
                    <Select value={formData.turnoDesejado} onValueChange={(value) => handleInputChange("turnoDesejado", value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="matutino">Matutino</SelectItem>
                        <SelectItem value="vespertino">Vespertino</SelectItem>
                        <SelectItem value="integral">Integral</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-foreground font-medium">
                      Data Preferencial
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal mt-2",
                            !formData.dataPreferencial && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.dataPreferencial ? (
                            format(formData.dataPreferencial, "dd/MM/yyyy")
                          ) : (
                            <span>Selecione uma data</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={formData.dataPreferencial}
                          onSelect={(date) => handleInputChange("dataPreferencial", date)}
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div>
                    <Label htmlFor="horarioPreferencial" className="text-foreground font-medium">
                      Horário Preferencial
                    </Label>
                    <Select value={formData.horarioPreferencial} onValueChange={(value) => handleInputChange("horarioPreferencial", value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Selecione o horário" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="08:00">08:00</SelectItem>
                        <SelectItem value="09:00">09:00</SelectItem>
                        <SelectItem value="10:00">10:00</SelectItem>
                        <SelectItem value="11:00">11:00</SelectItem>
                        <SelectItem value="14:00">14:00</SelectItem>
                        <SelectItem value="15:00">15:00</SelectItem>
                        <SelectItem value="16:00">16:00</SelectItem>
                        <SelectItem value="17:00">17:00</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 text-lg"
                  >
                    Confirmar Visita
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