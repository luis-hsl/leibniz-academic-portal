
import { useEffect, lazy, Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

// Lazy load do componente não crítico
const EducationLevels = lazy(() => import("@/components/EducationLevels"));

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

      <Suspense fallback={
        <div className="py-20 text-center">
          <div className="animate-pulse bg-gray-200 h-8 w-48 mx-auto mb-4 rounded"></div>
          <div className="animate-pulse bg-gray-200 h-4 w-96 mx-auto rounded"></div>
        </div>
      }>
        <EducationLevels />
      </Suspense>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default NiveisEnsino;
