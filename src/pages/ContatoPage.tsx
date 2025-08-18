
import { useEffect } from "react";
import PageLayout from "@/components/layout/PageLayout";
import Contact from "@/components/Contact";

const ContatoPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout
      title="Contato"
      heroBackgroundImage="/lovable-uploads/bc48ba2d-00f3-4d05-8eaa-c6a90fac82e2.png"
      breadcrumb="INÍCIO"
      seoDescription="Entre em contato com o Colégio Leibniz. Estamos prontos para atendê-lo e esclarecer todas as suas dúvidas sobre nossa instituição."
      seoKeywords="contato, colégio leibniz, telefone, endereço, email"
      showCTA={false}
    >
      {/* Map Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
                Nossa Localização
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Visite-nos e conheça nossa infraestrutura de perto. Estamos localizados em uma região privilegiada e de fácil acesso.
              </p>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.8577289764996!2d-47.88162962378982!3d-15.794913884880952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3a4b8b0b8b8b%3A0x8b8b8b8b8b8b8b8b!2sCol%C3%A9gio%20Leibniz!5e0!3m2!1spt!2sbr!4v1635786547547!5m2!1spt!2sbr"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Colégio Leibniz"
              />
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </PageLayout>
  );
};

export default ContatoPage;
