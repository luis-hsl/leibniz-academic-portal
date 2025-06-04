
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import About from "@/components/About";

const SobreNos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-white">Sobre o Colégio Leibniz</h1>
            <p className="text-xl leading-relaxed text-white">
              Conheça nossa história, missão e os valores que nos guiam na formação de cidadãos preparados para o futuro.
            </p>
          </div>
        </div>
      </section>

      <About />
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SobreNos;
