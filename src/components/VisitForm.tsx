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

const collegeImage = "/lovable-uploads/c3071e40-1c77-41ef-b48b-82cc6db2fdfa.png";

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
      className="py-16 md:py-20 relative text-white overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${collegeImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll'
      }}
    >
      {/* Elementos gráficos de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute top-20 left-10 opacity-10" width="100" height="100" viewBox="0 0 100 100">
          <path d="M20,50 Q50,20 80,50 T140,50" stroke="white" strokeWidth="2" fill="none" />
        </svg>
        <svg className="absolute bottom-20 right-10 opacity-10" width="120" height="120" viewBox="0 0 120 120">
          <path d="M20,60 Q60,20 100,60 T180,60" stroke="white" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Cards do formulário - aparecem primeiro no mobile */}
            <div className="space-y-6 order-1 lg:order-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Card 1: Informações do Responsável */}
                <div className="bg-white rounded-3xl p-6 shadow-2xl relative transform hover:scale-105 transition-transform duration-300">
                  <div className="absolute -top-6 left-6">
                    <div className="bg-green-500 rounded-2xl p-4 shadow-lg">
                      <User className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="pt-8 space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Seus Dados</h3>
                    
                    <div>
                      <Label htmlFor="nome" className="text-primary font-semibold text-sm font-montserrat" style={{ color: '#003366' }}>
                        Nome Completo do Responsável
                      </Label>
                      <Input
                        id="nome"
                        type="text"
                        value={formData.nome}
                        onChange={(e) => handleInputChange("nome", e.target.value)}
                        className="mt-1 border-gray-200 focus:border-primary focus:ring-primary"
                        placeholder="Digite seu nome completo"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email" className="text-primary font-semibold text-sm font-montserrat" style={{ color: '#003366' }}>
                          E-mail do Responsável
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="mt-1 border-gray-200 focus:border-primary focus:ring-primary"
                          placeholder="seu@email.com"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="telefone" className="text-primary font-semibold text-sm font-montserrat" style={{ color: '#003366' }}>
                          Telefone/WhatsApp do Responsável
                        </Label>
                        <Input
                          id="telefone"
                          type="tel"
                          value={formData.telefone}
                          onChange={(e) => handleInputChange("telefone", e.target.value)}
                          className="mt-1 border-gray-200 focus:border-primary focus:ring-primary"
                          placeholder="(66) 99999-9999"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2: Interesse do Aluno */}
                <div className="bg-white rounded-3xl p-6 shadow-2xl relative transform hover:scale-105 transition-transform duration-300">
                  <div className="absolute -top-6 left-6">
                    <div className="bg-yellow-500 rounded-2xl p-4 shadow-lg">
                      <GraduationCap className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="pt-8 space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Nível de Interesse</h3>
                    
                    <div>
                      <Label htmlFor="nivelPretendido" className="text-primary font-semibold text-sm font-montserrat" style={{ color: '#003366' }}>
                        Série/Nível de Interesse do Aluno
                      </Label>
                      <Select value={formData.nivelPretendido} onValueChange={(value) => handleInputChange("nivelPretendido", value)}>
                        <SelectTrigger className="mt-1 border-gray-200 focus:border-primary focus:ring-primary">
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
                </div>

                {/* Card 3: Agendamento */}
                <div className="bg-white rounded-3xl p-6 shadow-2xl relative transform hover:scale-105 transition-transform duration-300">
                  <div className="absolute -top-6 left-6">
                    <div className="bg-blue-500 rounded-2xl p-4 shadow-lg">
                      <CalendarLucide className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="pt-8 space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Sua Visita</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-primary font-semibold text-sm font-montserrat" style={{ color: '#003366' }}>
                          Data Preferencial para Visita
                        </Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal mt-1 border-gray-200 focus:border-primary",
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
                        <Label htmlFor="horarioPreferencial" className="text-primary font-semibold text-sm font-montserrat" style={{ color: '#003366' }}>
                          Horário Preferencial para Visita
                        </Label>
                        <Select value={formData.horarioPreferencial} onValueChange={(value) => handleInputChange("horarioPreferencial", value)}>
                          <SelectTrigger className="mt-1 border-gray-200 focus:border-primary focus:ring-primary">
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
                    </div>
                  </div>
                </div>

                {/* Botão Final */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    className="w-full bg-secondary hover:bg-secondary/90 text-primary font-bold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    CONFIRMAR AGENDAMENTO
                  </Button>
                </div>
              </form>
            </div>

            {/* Texto e informações de contato - aparecem depois no mobile */}
            <div className="space-y-6 order-2 lg:order-1">
              <div className="inline-block bg-secondary backdrop-blur-sm rounded-full px-4 py-2 border border-secondary/30">
                <span className="text-sm font-semibold text-primary">Agende uma Visita</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight font-montserrat">
                Dê o primeiro passo para um futuro de excelência
              </h2>
              
              <p className="text-xl text-blue-100 leading-relaxed">
                Preencha os campos ao lado para agendar sua visita. Nossa equipe entrará em contato para confirmar todos os detalhes.
              </p>

              {/* Cards de informações de contato */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {/* Localização */}
                <div className="bg-white rounded-3xl p-6 shadow-2xl relative transform hover:scale-105 transition-transform duration-300">
                  <div className="absolute -top-6 left-6">
                    <div className="bg-blue-500 rounded-2xl p-4 shadow-lg">
                      <MapPin className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="pt-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Localização</h3>
                    <div className="text-gray-600 text-sm leading-relaxed space-y-1">
                      <p>Avenida Paulista, 720</p>
                      <p>Parque Sagrada Família</p>
                      <p>Rondonópolis - MT, 78735-223</p>
                    </div>
                  </div>
                </div>

                {/* Contatos */}
                <div className="bg-white rounded-3xl p-6 shadow-2xl relative transform hover:scale-105 transition-transform duration-300">
                  <div className="absolute -top-6 left-6">
                    <div className="bg-green-500 rounded-2xl p-4 shadow-lg">
                      <Phone className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="pt-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Contatos</h3>
                    <div className="text-gray-600 text-sm leading-relaxed space-y-2">
                      <a href="tel:6634218824" className="flex items-center hover:text-primary transition-colors">
                        <Phone className="h-3 w-3 mr-2" />
                        (66) 3421-8824
                      </a>
                      <a href="https://wa.me/5566996781284" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors">
                        <Phone className="h-3 w-3 mr-2" />
                        (66) 99678-1284
                      </a>
                      <a href="mailto:admleibniz@gmail.com" className="flex items-center hover:text-primary transition-colors">
                        <Mail className="h-3 w-3 mr-2" />
                        admleibniz@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Horário de Funcionamento */}
                <div className="bg-white rounded-3xl p-6 shadow-2xl relative transform hover:scale-105 transition-transform duration-300 md:col-span-2">
                  <div className="absolute -top-6 left-6">
                    <div className="bg-yellow-500 rounded-2xl p-4 shadow-lg">
                      <Clock className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="pt-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Horário de Funcionamento</h3>
                    <div className="text-gray-600 text-sm leading-relaxed space-y-1">
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
      </div>
    </section>
  );
};

export default VisitForm;