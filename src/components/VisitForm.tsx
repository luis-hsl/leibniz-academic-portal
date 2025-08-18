

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Calendar, Clock, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { trackVisitConversion } from "@/components/Analytics";
import { cn } from "@/lib/utils";

const VisitForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    level: "",
    shift: "",
    date: null as Date | null,
    time: ""
  });

  // Get minimum date (January 1, 2025)
  const getMinDate = () => {
    const today = new Date();
    const year2025 = new Date(2025, 0, 1);
    return today > year2025 ? today.toISOString().split('T')[0] : year2025.toISOString().split('T')[0];
  };

  // Generate time options based on selected date
  const getTimeOptions = () => {
    if (!formData.date) return [];
    
    const selectedDate = formData.date;
    const dayOfWeek = selectedDate.getDay(); // 0 = Sunday, 6 = Saturday
    
    let timeOptions = [];
    
    if (dayOfWeek === 6) { // Saturday
      // Saturday: 07:00 to 12:00
      for (let hour = 7; hour <= 12; hour++) {
        for (let minute = 0; minute < 60; minute += 30) {
          if (hour === 12 && minute > 0) break; // Stop at 12:00
          const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
          timeOptions.push(time);
        }
      }
    } else if (dayOfWeek >= 1 && dayOfWeek <= 5) { // Monday to Friday
      // Monday to Friday: 07:00 to 18:00
      for (let hour = 7; hour <= 18; hour++) {
        for (let minute = 0; minute < 60; minute += 30) {
          if (hour === 18 && minute > 0) break; // Stop at 18:00
          const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
          timeOptions.push(time);
        }
      }
    } else {
      // Sunday - no available times
      return [];
    }
    
    return timeOptions;
  };

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

    // Track conversion
    trackVisitConversion();

    // Create detailed WhatsApp message with all form data
    const detailedMessage = `Olá, tenho interesse em agendar uma visita ao Colégio Leibniz. Seguem meus dados:

📝 *Dados Pessoais:*
• Nome: ${formData.name}
• Email: ${formData.email}
• Telefone: ${formData.phone}

🎓 *Informações Acadêmicas:*
• Nível pretendido: ${formData.level}${formData.shift ? `\n• Turno desejado: ${formData.shift}` : ''}

📅 *Agendamento:*${formData.date ? `\n• Data preferencial: ${formData.date.toLocaleDateString('pt-BR')}` : ''}${formData.time ? `\n• Horário preferencial: ${formData.time}` : ''}

Aguardo retorno para confirmar a visita. Obrigado!`;

    const encodedMessage = encodeURIComponent(detailedMessage);
    window.open(`https://wa.me/5566996781284?text=${encodedMessage}`, "_blank");
    
    toast({
      title: "Redirecionando para WhatsApp!",
      description: "Você será direcionado para o WhatsApp para finalizar o agendamento.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      level: "",
      shift: "",
      date: null,
      time: ""
    });
  };

  const handleInputChange = (field: string, value: string | Date | null) => {
    setFormData(prev => {
      const newData = {
        ...prev,
        [field]: value
      };
      
      // Reset time when date changes
      if (field === 'date') {
        newData.time = '';
      }
      
      return newData;
    });
  };

  const timeOptions = getTimeOptions();
  const selectedDate = formData.date;
  const dayOfWeek = selectedDate ? selectedDate.getDay() : null;

  // Get minimum date for the calendar (today or January 1, 2025)
  const getMinCalendarDate = () => {
    const today = new Date();
    const year2025 = new Date(2025, 0, 1);
    return today > year2025 ? today : year2025;
  };

  // Disable invalid dates (weekends and past dates)
  const isDateDisabled = (date: Date) => {
    const minDate = getMinCalendarDate();
    const dayOfWeek = date.getDay();
    
    // Disable past dates and Sundays
    return date < minDate || dayOfWeek === 0;
  };

  return (
    <section id="agendar" className="py-16 md:py-20 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* Coluna da Esquerda - Contexto e Confiança (40%) */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
                Dê o primeiro passo para um futuro de excelência
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Agende uma visita para conhecer de perto nossa estrutura, conversar com nossa equipe pedagógica e sentir a energia do Colégio Leibniz. Estamos prontos para receber sua família!
              </p>
              
              {/* Imagem opcional */}
              <div className="hidden lg:block">
                <img
                  src="/lovable-uploads/42661bf5-74d2-4f7b-992f-48770e566cb3.png"
                  alt="Equipe pedagógica do Colégio Leibniz"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
              
              {/* Informações de contato para mobile */}
              <div className="lg:hidden space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">(66) 99678-1284</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Seg-Sex: 7h às 18h | Sáb: 7h às 12h</span>
                </div>
              </div>
            </div>

            {/* Coluna da Direita - Formulário (60%) */}
            <div className="lg:col-span-3">
              <Card className="shadow-2xl border-0 bg-background">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Linha 1: Nome Completo (100%) */}
                    <div>
                      <Label htmlFor="name" className="text-primary font-semibold">
                        Nome Completo do Responsável *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Digite seu nome completo"
                        required
                        className="mt-2 border-border focus:border-primary"
                      />
                    </div>

                    {/* Linha 2: E-mail (50%) e Telefone (50%) */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email" className="text-primary font-semibold">
                          E-mail *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="seu@email.com"
                          required
                          className="mt-2 border-border focus:border-primary"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-primary font-semibold">
                          Telefone/WhatsApp *
                        </Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="(66) 99999-9999"
                          required
                          className="mt-2 border-border focus:border-primary"
                        />
                      </div>
                    </div>

                    {/* Linha 3: Série/Nível de Interesse (100%) */}
                    <div>
                      <Label htmlFor="level" className="text-primary font-semibold">
                        Série/Nível de Interesse *
                      </Label>
                      <Select value={formData.level} onValueChange={(value) => handleInputChange("level", value)}>
                        <SelectTrigger className="mt-2 border-border focus:border-primary">
                          <SelectValue placeholder="Selecione o nível pretendido" />
                        </SelectTrigger>
                        <SelectContent className="bg-background border-border">
                          <SelectItem value="infantil">Ensino Infantil</SelectItem>
                          <SelectItem value="fundamental1">Fundamental I</SelectItem>
                          <SelectItem value="fundamental2">Fundamental II</SelectItem>
                          <SelectItem value="medio">Ensino Médio</SelectItem>
                          <SelectItem value="preparatorio">Preparatório ENEM/Vestibular</SelectItem>
                          <SelectItem value="extracurricular">Cursos Extracurriculares</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Linha 4: Data Preferencial (50%) e Horário (50%) */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-primary font-semibold">
                          Data Preferencial
                        </Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal mt-2 border-border focus:border-primary",
                                !formData.date && "text-muted-foreground"
                              )}
                            >
                              <Calendar className="mr-2 h-4 w-4" />
                              {formData.date ? (
                                formData.date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })
                              ) : (
                                <span>Selecione uma data</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0 z-50 bg-background border-border" align="start">
                            <CalendarComponent
                              mode="single"
                              selected={formData.date || undefined}
                              onSelect={(date) => handleInputChange("date", date || null)}
                              disabled={isDateDisabled}
                              initialFocus
                              weekStartsOn={0}
                              className={cn("p-3 pointer-events-auto")}
                              formatters={{
                                formatCaption: (month: Date) => month.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' }),
                                formatWeekdayName: (date: Date) => date.toLocaleDateString('pt-BR', { weekday: 'short' })
                              }}
                              labels={{
                                labelMonthDropdown: () => "Mês",
                                labelYearDropdown: () => "Ano",
                                labelNext: () => "Próximo mês",
                                labelPrevious: () => "Mês anterior"
                              }}
                            />
                          </PopoverContent>
                        </Popover>
                        {dayOfWeek === 0 && formData.date && (
                          <p className="text-sm text-destructive mt-1">
                            Não atendemos aos domingos. Por favor, escolha outro dia.
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="time" className="text-primary font-semibold">
                          Horário Preferencial
                        </Label>
                        <Select 
                          value={formData.time} 
                          onValueChange={(value) => handleInputChange("time", value)}
                          disabled={!formData.date || dayOfWeek === 0}
                        >
                          <SelectTrigger className="mt-2 border-border focus:border-primary">
                            <SelectValue placeholder="Selecione o horário" />
                          </SelectTrigger>
                          <SelectContent className="z-50 bg-background border-border">
                            {timeOptions.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {formData.date && dayOfWeek === 6 && (
                          <p className="text-xs text-muted-foreground mt-1">
                            <strong>Sábado:</strong> 07:00 às 12:00
                          </p>
                        )}
                        {formData.date && dayOfWeek >= 1 && dayOfWeek <= 5 && (
                          <p className="text-xs text-muted-foreground mt-1">
                            <strong>Seg-Sex:</strong> 7h às 18h
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Botão de Envio */}
                    <Button 
                      type="submit" 
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6 font-bold tracking-wide uppercase shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Agendar Minha Visita
                    </Button>
                  </form>
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

