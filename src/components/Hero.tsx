
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
          <div className="mb-8 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 animate-fade-in leading-tight text-white">
              <span className="text-yellow-300 block mb-2 md:mb-4">Reconhecimento e Excelência</span>
              no Colégio Leibniz
            </h1>
            
            <div className="text-lg sm:text-xl md:text-2xl lg:text-2xl mb-8 text-blue-100 animate-fade-in leading-relaxed px-4 sm:px-6 lg:px-0 max-w-5xl mx-auto">
              <p className="mb-4 font-semibold text-yellow-200">1º lugar no ENEM em Rondonópolis</p>
              <p className="mb-4 font-semibold text-yellow-200">6º lugar entre as melhores escolas do Mato Grosso</p>
              <p className="mb-6 font-semibold text-yellow-200">A única escola de Rondonópolis entre as 15 melhores do estado</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12 px-4 sm:px-6 lg:px-0 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl md:text-2xl font-bold text-yellow-300 mb-3">Formação de Líderes</h3>
              <p className="text-blue-100 text-base md:text-lg">Transformamos estudantes em líderes preparados para os grandes desafios do futuro.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl md:text-2xl font-bold text-yellow-300 mb-3">Proposta Pedagógica Inovadora</h3>
              <p className="text-blue-100 text-base md:text-lg">Nosso ensino é baseado nas mais avançadas pesquisas nacionais e internacionais.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl md:text-2xl font-bold text-yellow-300 mb-3">Aprovação nas Melhores Universidades</h3>
              <p className="text-blue-100 text-base md:text-lg">Aqui, você conquista sua vaga nas maiores e mais respeitadas universidades do país.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl md:text-2xl font-bold text-yellow-300 mb-3">Alto Desempenho Acadêmico</h3>
              <p className="text-blue-100 text-base md:text-lg">Uma escola de resultados extraordinários e de alto impacto.</p>
            </div>
          </div>

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
