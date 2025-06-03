
import WhatsAppIcon from "./WhatsAppIcon";

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Olá, gostaria de falar com um atendente agora para tirar algumas dúvidas. Pode me ajudar?");
    window.open(`https://wa.me/5566996781284?text=${message}`, "_blank");
  };

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
