
import { Button } from "@/components/ui/button";
import { trackVisitConversion, trackAttendantConversion } from "@/components/Analytics";
import { useEffect } from "react";

const Hero = () => {
  const heroBackgroundImage = "/lovable-uploads/825becfd-61dd-46b2-9e4b-4b5b3ac801fb.png";

  useEffect(() => {
    // Preload hero background image with high priority
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = heroBackgroundImage;
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
      className="relative text-white py-16 md:py-20 lg:py-24 min-h-screen flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${heroBackgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 animate-fade-in leading-tight text-white">
            Prepare-se para o 
            <span className="text-yellow-300 block mt-2 md:mt-4">Sucesso Acadêmico</span>
            no Colégio Leibniz
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 md:mb-12 text-blue-100 animate-fade-in leading-relaxed px-4 sm:px-6 lg:px-0 max-w-4xl mx-auto">
            Sistema Bernoulli de Ensino, tradição e referência em vestibulares e preparatórios para o ENEM.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-12 md:mb-16 px-4 sm:px-6 lg:px-0">
            <Button 
              onClick={openWhatsAppVisit}
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 hover-scale w-full sm:w-auto min-h-[56px]"
            >
              Agende uma Visita
            </Button>
            <Button 
              onClick={openWhatsApp}
              variant="outline"
              size="lg"
              className="border-2 border-white bg-white text-black hover:bg-gray-100 hover:text-black text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 w-full sm:w-auto min-h-[56px]"
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
