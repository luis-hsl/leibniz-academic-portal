
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

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/50">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <info.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {info.title}
                  </h3>
                  <p className="text-lg font-medium text-primary mb-2">
                    {info.content}
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    {info.description}
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                    onClick={() => window.open(info.action, '_blank')}
                  >
                    Entrar em Contato
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Hours Section */}
          <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border/50 shadow-lg">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Horário de Funcionamento
              </h3>
              <p className="text-muted-foreground">
                Nossos horários de atendimento para melhor atendê-lo
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {schedules.map((schedule, index) => (
                <div key={index} className="text-center p-6 bg-background/50 rounded-xl border border-border/30">
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {schedule.day}
                  </h4>
                  <p className="text-primary font-medium text-lg">
                    {schedule.time}
                  </p>
                </div>
              ))}
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
