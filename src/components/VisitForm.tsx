

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
    <section id="agendar" className="section-padding bg-gradient-to-br from-red-600 to-blue-800">
      <div className="container-custom">
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

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="shift">Turno Desejado</Label>
                      <Select value={formData.shift} onValueChange={(value) => handleInputChange("shift", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="manha">Manhã</SelectItem>
                          <SelectItem value="tarde">Tarde</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Data Preferencial</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
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
                        <PopoverContent className="w-auto p-0 z-50" align="start">
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
                        <p className="text-sm text-red-600 mt-1">
                          Não atendemos aos domingos. Por favor, escolha outro dia.
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="time">Horário Preferencial</Label>
                      <Select 
                        value={formData.time} 
                        onValueChange={(value) => handleInputChange("time", value)}
                        disabled={!formData.date || dayOfWeek === 0}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o horário" />
                        </SelectTrigger>
                        <SelectContent className="z-50">
                          {timeOptions.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {formData.date && dayOfWeek === 6 && (
                        <p className="text-xs text-gray-600 mt-1">
                          <strong>Sábado disponível:</strong> 07:00 às 12:00
                        </p>
                      )}
                      {formData.date && dayOfWeek >= 1 && dayOfWeek <= 5 && (
                        <p className="text-xs text-gray-600 mt-1">
                          <strong>Seg-Sex:</strong> 7h às 18h
                        </p>
                      )}
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
                    <h3 className="text-xl font-bold text-white">Localização</h3>
                  </div>
                  <p className="text-white">
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
                    <h3 className="text-xl font-bold text-white">Contatos</h3>
                  </div>
                  <div className="space-y-2 text-white">
                    <p className="text-white">📞 (66) 3421-8824</p>
                    <p className="text-white">📱 (66) 99678-1284</p>
                    <p className="text-white">✉️ admleibniz@gmail.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm text-white border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="h-6 w-6 text-yellow-300" />
                    <h3 className="text-xl font-bold text-white">Horário de Funcionamento</h3>
                  </div>
                  <div className="space-y-1 text-white">
                    <p className="text-white">Segunda a Sexta: 7h às 18h</p>
                    <p className="text-white">Sábado: 7h às 12h</p>
                    <p className="text-white">Domingo: Fechado</p>
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

