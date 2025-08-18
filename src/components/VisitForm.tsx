

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
    <section 
      id="agendar" 
      className="relative py-20 md:py-24 lg:py-32 min-h-screen flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 51, 102, 0.85), rgba(0, 51, 102, 0.95)), url('/lovable-uploads/42661bf5-74d2-4f7b-992f-48770e566cb3.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Título e Texto Centralizado */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Dê o primeiro passo para um futuro de excelência
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Agende uma visita para conhecer nossa estrutura e conversar com a equipe pedagógica
            </p>
          </div>

          {/* Formulário com Glassmorphism */}
          <div 
            className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 md:p-12 shadow-2xl"
            style={{
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome Completo */}
              <div className="text-left">
                <Label htmlFor="name" className="text-white font-semibold text-lg mb-2 block">
                  Nome Completo do Responsável *
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Digite seu nome completo"
                  required
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-white focus:bg-white/25 transition-all duration-300"
                />
              </div>

              {/* E-mail e Telefone */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-left">
                  <Label htmlFor="email" className="text-white font-semibold text-lg mb-2 block">
                    E-mail *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="seu@email.com"
                    required
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-white focus:bg-white/25 transition-all duration-300"
                  />
                </div>
                <div className="text-left">
                  <Label htmlFor="phone" className="text-white font-semibold text-lg mb-2 block">
                    Telefone/WhatsApp *
                  </Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="(66) 99999-9999"
                    required
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-white focus:bg-white/25 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Nível de Interesse */}
              <div className="text-left">
                <Label htmlFor="level" className="text-white font-semibold text-lg mb-2 block">
                  Série/Nível de Interesse *
                </Label>
                <Select value={formData.level} onValueChange={(value) => handleInputChange("level", value)}>
                  <SelectTrigger className="bg-white/20 border-white/30 text-white focus:border-white focus:bg-white/25 transition-all duration-300">
                    <SelectValue placeholder="Selecione o nível pretendido" className="text-white/70" />
                  </SelectTrigger>
                  <SelectContent className="bg-white/95 backdrop-blur-lg border-white/30">
                    <SelectItem value="infantil">Ensino Infantil</SelectItem>
                    <SelectItem value="fundamental1">Fundamental I</SelectItem>
                    <SelectItem value="fundamental2">Fundamental II</SelectItem>
                    <SelectItem value="medio">Ensino Médio</SelectItem>
                    <SelectItem value="preparatorio">Preparatório ENEM/Vestibular</SelectItem>
                    <SelectItem value="extracurricular">Cursos Extracurriculares</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Data e Horário */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-left">
                  <Label className="text-white font-semibold text-lg mb-2 block">
                    Data Preferencial
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal bg-white/20 border-white/30 text-white hover:bg-white/25 focus:border-white transition-all duration-300",
                          !formData.date && "text-white/70"
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
                    <PopoverContent className="w-auto p-0 z-50 bg-white/95 backdrop-blur-lg border-white/30" align="start">
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
                    <p className="text-sm text-red-300 mt-1">
                      Não atendemos aos domingos. Por favor, escolha outro dia.
                    </p>
                  )}
                </div>

                <div className="text-left">
                  <Label htmlFor="time" className="text-white font-semibold text-lg mb-2 block">
                    Horário Preferencial
                  </Label>
                  <Select 
                    value={formData.time} 
                    onValueChange={(value) => handleInputChange("time", value)}
                    disabled={!formData.date || dayOfWeek === 0}
                  >
                    <SelectTrigger className="bg-white/20 border-white/30 text-white focus:border-white focus:bg-white/25 transition-all duration-300 disabled:opacity-50">
                      <SelectValue placeholder="Selecione o horário" className="text-white/70" />
                    </SelectTrigger>
                    <SelectContent className="z-50 bg-white/95 backdrop-blur-lg border-white/30">
                      {timeOptions.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {formData.date && dayOfWeek === 6 && (
                    <p className="text-xs text-white/70 mt-1">
                      <strong>Sábado:</strong> 07:00 às 12:00
                    </p>
                  )}
                  {formData.date && dayOfWeek >= 1 && dayOfWeek <= 5 && (
                    <p className="text-xs text-white/70 mt-1">
                      <strong>Seg-Sex:</strong> 7h às 18h
                    </p>
                  )}
                </div>
              </div>

              {/* Botão de Envio - Destaque Visual */}
              <div className="pt-6">
                <Button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-accent/90 text-primary text-xl py-6 font-bold tracking-wide uppercase shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
                  style={{
                    background: '#fec10e',
                    color: '#003366'
                  }}
                >
                  🎯 🎯 Agendar Minha Visita
                </Button>
              </div>
            </form>
          </div>

          {/* Informações de Contato Resumidas */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/90">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>(66) 99678-1284</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>Seg-Sex: 7h às 18h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitForm;

