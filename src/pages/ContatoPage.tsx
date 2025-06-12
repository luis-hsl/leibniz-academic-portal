
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Contact from "@/components/Contact";

const ContatoPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Sem título principal */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl leading-relaxed">
              Estamos prontos para atendê-lo. Entre em contato conosco e tire todas as suas dúvidas.
            </p>
          </div>
        </div>
      </section>

      <Contact />
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ContatoPage;
