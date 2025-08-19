import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface PageCTAProps {
  title?: string;
  buttonText?: string;
  buttonAction?: () => void;
  backgroundImage?: string;
}

const PageCTA = ({ 
  title = "Quer conhecer de perto nossa estrutura?",
  buttonText = "AGENDE UMA VISITA",
  buttonAction,
  backgroundImage
}: PageCTAProps) => {
  const handleDefaultAction = () => {
    // Scroll to contact form or open WhatsApp
    const whatsappNumber = "5511999999999";
    const message = encodeURIComponent("Olá! Gostaria de agendar uma visita ao Colégio Leibniz.");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const ctaStyle = backgroundImage 
    ? {
        backgroundImage: `linear-gradient(hsl(var(--dark-blue) / 0.85), hsl(var(--dark-blue) / 0.85)), url('${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      }
    : {};

  return (
    <section 
      className={`py-16 md:py-20 lg:py-24 ${backgroundImage ? 'text-off-white' : 'bg-dark-blue text-off-white'}`}
      style={ctaStyle}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-off-white text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            {title}
          </h2>
          
          {/* CTA Button */}
          <Button 
            size="lg"
            onClick={buttonAction || handleDefaultAction}
            variant="energy"
            className="font-bold px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Calendar className="mr-3 h-6 w-6" />
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PageCTA;