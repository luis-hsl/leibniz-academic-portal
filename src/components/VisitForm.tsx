import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon, User, Mail, Phone, GraduationCap, Calendar as CalendarLucide, Clock, MapPin } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const collegeImage = "/lovable-uploads/e2ec3aed-4bbb-45da-a345-58cbe979381b.png";

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
    <section 
      id="agendar"
      className="py-16 md:py-20 relative text-off-white overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(hsl(var(--dark-blue) / 0.6), hsl(var(--dark-blue) / 0.6)), url('${collegeImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll'
      }}
    >
      {/* Elementos gráficos de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute top-20 left-10 opacity-10" width="100" height="100" viewBox="0 0 100 100">
          <path d="M20,50 Q50,20 80,50 T140,50" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
        <svg className="absolute bottom-20 right-10 opacity-10" width="120" height="120" viewBox="0 0 120 120">
          <path d="M20,60 Q60,20 100,60 T180,60" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Texto - aparece primeiro no mobile */}
            <div className="space-y-6 order-1 lg:order-1">
              <div className="inline-block bg-energy-yellow/20 backdrop-blur-sm rounded-full px-4 py-2 border border-energy-yellow/30">
                <span className="text-sm font-semibold text-energy-yellow">Agende uma Visita</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-off-white leading-tight font-montserrat">
                Dê o primeiro passo para um futuro de excelência
              </h2>
              
              <p className="text-xl text-off-white/80 leading-relaxed">
                Preencha os campos ao lado para agendar sua visita. Nossa equipe entrará em contato para confirmar todos os detalhes.
              </p>
            </div>

            {/* Cards do formulário - aparecem depois no mobile */}
            <div className="space-y-6 order-2 lg:order-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Card 1: Informações do Responsável */}
                <div className="bg-off-white rounded-3xl p-6 shadow-2xl relative transform hover:scale-105 transition-transform duration-300">
                  <div className="absolute -top-6 left-6">
                    <div className="bg-digital-cyan rounded-2xl p-4 shadow-lg">
                      <User className="h-8 w-8 text-dark-blue" />
                    </div>
                  </div>
                  <div className="pt-8 space-y-4">
                    <h3 className="text-xl font-bold text-dark-blue mb-4">Seus Dados</h3>
                    
                    <div>
                      <Label htmlFor="nome" className="text-dark-blue font-semibold text-sm font-montserrat">
                        Nome Completo do Responsável
                      </Label>
                      <Input
                        id="nome"
                        type="text"
                        value={formData.nome}
                        onChange={(e) => handleInputChange("nome", e.target.value)}
                        className="mt-1 border-dark-blue/20 focus:border-digital-blue focus:ring-digital-blue text-gray-900"
                        placeholder="Digite seu nome completo"
                        required
                        style={{ color: '#011044' }}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email" className="text-dark-blue font-semibold text-sm font-montserrat">
                          E-mail do Responsável
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="mt-1 border-dark-blue/20 focus:border-digital-blue focus:ring-digital-blue text-gray-900"
                          placeholder="seu@email.com"
                          required
                          style={{ color: '#011044' }}
                        />
                      </div>

                      <div>
                        <Label htmlFor="telefone" className="text-dark-blue font-semibold text-sm font-montserrat">
                          Telefone/WhatsApp do Responsável
                        </Label>
                        <Input
                          id="telefone"
                          type="tel"
                          value={formData.telefone}
                          onChange={(e) => handleInputChange("telefone", e.target.value)}
                          className="mt-1 border-dark-blue/20 focus:border-digital-blue focus:ring-digital-blue text-gray-900"
                          placeholder="(66) 99999-9999"
                          required
                          style={{ color: '#011044' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2: Interesse do Aluno */}
                <div className="bg-off-white rounded-3xl p-6 shadow-2xl relative transform hover:scale-105 transition-transform duration-300">
                  <div className="absolute -top-6 left-6">
                    <div className="bg-energy-yellow rounded-2xl p-4 shadow-lg">
                      <GraduationCap className="h-8 w-8 text-dark-blue" />
                    </div>
                  </div>
                  <div className="pt-8 space-y-4">
                    <h3 className="text-xl font-bold text-dark-blue mb-4">Nível de Interesse</h3>
                    
                    <div>
                      <Label htmlFor="nivelPretendido" className="text-dark-blue font-semibold text-sm font-montserrat">
                        Série/Nível de Interesse do Aluno
                      </Label>
                      <Select value={formData.nivelPretendido} onValueChange={(value) => handleInputChange("nivelPretendido", value)}>
                        <SelectTrigger className="mt-1 border-dark-blue/20 focus:border-digital-blue focus:ring-digital-blue text-gray-900" style={{ color: '#011044' }}>
                          <SelectValue placeholder="Selecione o nível" />
                        </SelectTrigger>
                        <SelectContent className="bg-white text-gray-900">
                          <SelectItem value="educacao-infantil">Educação Infantil</SelectItem>
                          <SelectItem value="ensino-fundamental-1">Ensino Fundamental I</SelectItem>
                          <SelectItem value="ensino-fundamental-2">Ensino Fundamental II</SelectItem>
                          <SelectItem value="ensino-medio">Ensino Médio</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Card 3: Agendamento */}
                <div className="bg-off-white rounded-3xl p-6 shadow-2xl relative transform hover:scale-105 transition-transform duration-300">
                  <div className="absolute -top-6 left-6">
                    <div className="bg-digital-blue rounded-2xl p-4 shadow-lg">
                      <CalendarLucide className="h-8 w-8 text-off-white" />
                    </div>
                  </div>
                  <div className="pt-8 space-y-4">
                    <h3 className="text-xl font-bold text-dark-blue mb-4">Sua Visita</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-dark-blue font-semibold text-sm font-montserrat">
                          Data Preferencial para Visita
                        </Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal mt-1 border-dark-blue/20 focus:border-digital-blue text-gray-900",
                                !formData.dataPreferencial && "text-gray-500"
                              )}
                              style={{ color: '#011044' }}
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
                        <Label htmlFor="horarioPreferencial" className="text-dark-blue font-semibold text-sm font-montserrat">
                          Horário Preferencial para Visita
                        </Label>
                        <Select value={formData.horarioPreferencial} onValueChange={(value) => handleInputChange("horarioPreferencial", value)}>
                          <SelectTrigger className="mt-1 border-dark-blue/20 focus:border-digital-blue focus:ring-digital-blue text-gray-900" style={{ color: '#011044' }}>
                            <SelectValue placeholder="Selecione o horário" />
                          </SelectTrigger>
                          <SelectContent className="bg-white text-gray-900">
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
                    </div>
                  </div>
                </div>

                {/* Botão Final */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    variant="energy"
                    className="w-full font-bold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    CONFIRMAR AGENDAMENTO
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Cards de informações de contato - aparecem abaixo do formulário */}
          <div className="max-w-7xl mx-auto mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Localização */}
              <div className="bg-off-white rounded-3xl p-6 shadow-2xl relative transform hover:scale-105 transition-transform duration-300">
                <div className="absolute -top-6 left-6">
                  <div className="bg-digital-blue rounded-2xl p-4 shadow-lg">
                    <MapPin className="h-8 w-8 text-off-white" />
                  </div>
                </div>
                <div className="pt-8">
                  <h3 className="text-xl font-bold text-dark-blue mb-3">Localização</h3>
                  <div className="text-dark-blue/70 text-sm leading-relaxed space-y-1">
                    <p>Avenida Paulista, 720</p>
                    <p>Parque Sagrada Família</p>
                    <p>Rondonópolis - MT, 78735-223</p>
                  </div>
                </div>
              </div>

              {/* Contatos */}
              <div className="bg-off-white rounded-3xl p-6 shadow-2xl relative transform hover:scale-105 transition-transform duration-300">
                <div className="absolute -top-6 left-6">
                  <div className="bg-digital-cyan rounded-2xl p-4 shadow-lg">
                    <Phone className="h-8 w-8 text-dark-blue" />
                  </div>
                </div>
                <div className="pt-8">
                  <h3 className="text-xl font-bold text-dark-blue mb-3">Contatos</h3>
                  <div className="text-dark-blue/70 text-sm leading-relaxed space-y-2">
                    <a href="tel:6634218824" className="flex items-center hover:text-dark-blue transition-colors">
                      <Phone className="h-3 w-3 mr-2" />
                      (66) 3421-8824
                    </a>
                    <a href="https://wa.me/5566996781284" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-dark-blue transition-colors">
                      <Phone className="h-3 w-3 mr-2" />
                      (66) 99678-1284
                    </a>
                    <a href="mailto:admleibniz@gmail.com" className="flex items-center hover:text-dark-blue transition-colors">
                      <Mail className="h-3 w-3 mr-2" />
                      admleibniz@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Horário de Funcionamento */}
              <div className="bg-off-white rounded-3xl p-6 shadow-2xl relative transform hover:scale-105 transition-transform duration-300 md:col-span-2 lg:col-span-1">
                <div className="absolute -top-6 left-6">
                  <div className="bg-energy-yellow rounded-2xl p-4 shadow-lg">
                    <Clock className="h-8 w-8 text-dark-blue" />
                  </div>
                </div>
                <div className="pt-8">
                  <h3 className="text-xl font-bold text-dark-blue mb-3">Horário de Funcionamento</h3>
                  <div className="text-dark-blue/70 text-sm leading-relaxed space-y-1">
                    <p>Segunda à Sexta: 7h às 18h</p>
                    <p>Sábado: 7h às 12h</p>
                    <p>Domingo: Fechado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitForm;