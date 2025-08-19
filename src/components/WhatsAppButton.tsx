
import WhatsAppIcon from "./WhatsAppIcon";
import { trackWhatsAppConversion } from "./Analytics";

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    trackWhatsAppConversion();
    
    const message = encodeURIComponent("Olá, gostaria de falar com um atendente agora para tirar algumas dúvidas. Pode me ajudar?");
    window.open(`https://wa.me/5566996781284?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 bg-digital-cyan hover:bg-digital-cyan/90 text-white p-4 rounded-full shadow-lg z-50 transition-all duration-300 hover:scale-110 no-print will-change-transform"
      aria-label="Falar no WhatsApp"
    >
      <WhatsAppIcon className="h-6 w-6 text-white" />
    </button>
  );
};

export default WhatsAppButton;
