
import { icons } from "lucide-react";

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/5566996781284", "_blank");
  };

  const WhatsAppIcon = icons["whatsapp"];

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-all duration-300 hover:scale-110"
      aria-label="Falar no WhatsApp"
    >
      <WhatsAppIcon className="h-6 w-6" />
    </button>
  );
};

export default WhatsAppButton;
