
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(66) 3421-8824",
      description: "Segunda a sexta, 7h às 18h",
      action: "tel:6634218824"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "(66) 99678-1284",
      description: "Atendimento rápido e personalizado",
      action: "https://wa.me/5566996781284"
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "admleibniz@gmail.com",
      description: "Resposta em até 24 horas",
      action: "mailto:admleibniz@gmail.com"
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Avenida Paulista, 720",
      description: "Parque Sagrada Família, Rondonópolis - MT",
      action: "https://maps.google.com/?q=Avenida+Paulista+720+Rondonópolis+MT"
    }
  ];

  const schedules = [
    { day: "Segunda à Sexta", time: "7h às 18h" },
    { day: "Sábado", time: "7h às 12h" },
    { day: "Domingo", time: "Fechado" }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-background via-muted/30 to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Entre em Contato
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Estamos prontos para atendê-lo e esclarecer todas as suas dúvidas sobre nossa instituição de ensino.
            </p>
          </div>

          {/* Contact Cards Grid - Using same styling as main page */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Localização */}
            <div className="bg-white rounded-3xl p-6 shadow-2xl relative transform hover:scale-105 transition-transform duration-300">
              <div className="absolute -top-6 left-6">
                <div className="bg-blue-500 rounded-2xl p-4 shadow-lg">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="pt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Localização</h3>
                <div className="text-gray-600 text-sm leading-relaxed space-y-1 mb-4">
                  <p>Avenida Paulista, 720</p>
                  <p>Parque Sagrada Família</p>
                  <p>Rondonópolis - MT, 78735-223</p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  onClick={() => window.open("https://maps.google.com/?q=Avenida+Paulista+720+Rondonópolis+MT", '_blank')}
                >
                  Ver no Mapa
                </Button>
              </div>
            </div>

            {/* Telefone */}
            <div className="bg-white rounded-3xl p-6 shadow-2xl relative transform hover:scale-105 transition-transform duration-300">
              <div className="absolute -top-6 left-6">
                <div className="bg-green-500 rounded-2xl p-4 shadow-lg">
                  <Phone className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="pt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Telefone</h3>
                <div className="text-gray-600 text-sm leading-relaxed space-y-2 mb-4">
                  <a href="tel:6634218824" className="flex items-center hover:text-primary transition-colors">
                    <Phone className="h-3 w-3 mr-2" />
                    (66) 3421-8824
                  </a>
                  <p className="text-xs text-gray-500">Segunda a sexta, 7h às 18h</p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  onClick={() => window.location.href = "tel:6634218824"}
                >
                  Ligar Agora
                </Button>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-white rounded-3xl p-6 shadow-2xl relative transform hover:scale-105 transition-transform duration-300">
              <div className="absolute -top-6 left-6">
                <div className="bg-green-500 rounded-2xl p-4 shadow-lg">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="pt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">WhatsApp</h3>
                <div className="text-gray-600 text-sm leading-relaxed space-y-2 mb-4">
                  <a href="https://wa.me/5566996781284" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors">
                    <MessageCircle className="h-3 w-3 mr-2" />
                    (66) 99678-1284
                  </a>
                  <p className="text-xs text-gray-500">Atendimento rápido e personalizado</p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  onClick={() => {
                    const message = encodeURIComponent("Olá! Gostaria de saber mais informações sobre o Colégio Leibniz.");
                    window.open(`https://wa.me/5566996781284?text=${message}`, '_blank');
                  }}
                >
                  Enviar Mensagem
                </Button>
              </div>
            </div>

            {/* E-mail */}
            <div className="bg-white rounded-3xl p-6 shadow-2xl relative transform hover:scale-105 transition-transform duration-300">
              <div className="absolute -top-6 left-6">
                <div className="bg-blue-500 rounded-2xl p-4 shadow-lg">
                  <Mail className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="pt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">E-mail</h3>
                <div className="text-gray-600 text-sm leading-relaxed space-y-2 mb-4">
                  <a href="mailto:admleibniz@gmail.com" className="flex items-center hover:text-primary transition-colors">
                    <Mail className="h-3 w-3 mr-2" />
                    admleibniz@gmail.com
                  </a>
                  <p className="text-xs text-gray-500">Resposta em até 24 horas</p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  onClick={() => window.location.href = "mailto:admleibniz@gmail.com?subject=Informações sobre o Colégio Leibniz"}
                >
                  Enviar E-mail
                </Button>
              </div>
            </div>
          </div>

          {/* Hours Section - Using same styling as main page */}
          <div className="bg-white rounded-3xl p-6 shadow-2xl relative transform hover:scale-105 transition-transform duration-300">
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

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-primary/5 rounded-2xl p-8 md:p-12 border border-primary/20">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Pronto para Conhecer o Leibniz?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Agende uma visita e conheça de perto nossa infraestrutura, metodologia e toda a excelência que oferecemos.
              </p>
              <Button size="lg" className="px-8 py-3 text-lg">
                Agendar Visita
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
