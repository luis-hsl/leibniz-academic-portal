
import { Button } from "@/components/ui/button";
import { trackVisitConversion, trackAttendantConversion } from "@/components/Analytics";
import { useEffect } from "react";

const Hero = () => {
  const heroBackgroundImage = "/lovable-uploads/de8be048-fb1c-4f6c-a24a-d1e77df57761.png";

  useEffect(() => {
    // Preload hero background image with high priority
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = heroBackgroundImage;
    link.fetchPriority = 'high';
    document.head.appendChild(link);

    return () => {
      const existingLink = document.querySelector(`link[href="${heroBackgroundImage}"]`);
      if (existingLink) {
        existingLink.remove();
      }
    };
  }, []);

  const openWhatsAppVisit = () => {
    trackVisitConversion();
    const message = encodeURIComponent("Olá, tenho interesse em agendar uma visita ao Colégio Leibniz. Pode me ajudar?");
    window.open(`https://wa.me/5566996781284?text=${message}`, "_blank");
  };

  const openWhatsApp = () => {
    trackAttendantConversion();
    const message = encodeURIComponent("Olá, gostaria de falar com um atendente agora para tirar algumas dúvidas. Pode me ajudar?");
    window.open(`https://wa.me/5566996781284?text=${message}`, "_blank");
  };

  return (
    <section 
      id="inicio" 
      className="relative text-white py-12 sm:py-16 md:py-20 min-h-screen flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${heroBackgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in leading-tight text-white">
            Prepare-se para o 
            <span className="text-yellow-300 block mt-2">Sucesso Acadêmico</span>
            no Colégio Leibniz
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-blue-100 animate-fade-in leading-relaxed px-4 sm:px-0">
            Sistema Bernoulli de Ensino, tradição e referência em vestibulares e preparatórios para o ENEM.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4 sm:px-0">
            <Button 
              onClick={openWhatsAppVisit}
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 hover-scale w-full sm:w-auto"
            >
              Agende uma Visita
            </Button>
            <Button 
              onClick={openWhatsApp}
              variant="outline"
              size="lg"
              className="border-white bg-white text-black hover:bg-gray-100 hover:text-black text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
            >
              Fale com um Atendente
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
