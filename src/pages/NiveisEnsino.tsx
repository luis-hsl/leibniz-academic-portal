
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import EducationLevels from "@/components/EducationLevels";

const NiveisEnsino = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-white">Níveis de Ensino</h1>
            <p className="text-xl leading-relaxed text-white">
              Do Ensino Infantil aos Preparatórios para Vestibulares, oferecemos educação de excelência em todos os níveis.
            </p>
          </div>
        </div>
      </section>

      <EducationLevels />
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default NiveisEnsino;
