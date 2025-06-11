
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import DependencySection from "@/components/DependencySection";
import DependenciasHero from "@/components/DependenciasHero";
import SEOHead from "@/components/SEOHead";
import OptimizedAnalytics from "@/components/OptimizedAnalytics";
import ResourcePreloader from "@/components/ResourcePreloader";
import {
  areaExternaImages
} from "@/data/dependenciasData";

const Dependencias = () => {
  // Critical images for preloading (first WebP images from first sections)
  const criticalImages = [
    "/lovable-uploads/49d1f717-adb4-4cee-98b6-0e7803b500b6.png",
    "/lovable-uploads/8b589287-247a-4b10-8999-fa49984ee71c.png",
    "/lovable-uploads/e0091d38-7b95-4e2c-9841-17f48704f260.png"
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Nossas Dependências - Colégio Leibniz"
        description="Conheça os espaços modernos e equipados do Colégio Leibniz que proporcionam a melhor experiência educacional para nossos alunos."
        keywords="dependências, infraestrutura, laboratórios, biblioteca, colégio leibniz"
      />
      <ResourcePreloader criticalImages={criticalImages} />
      <OptimizedAnalytics />
      <Header />
      
      <DependenciasHero />

      <DependencySection
        title="Área Externa do Colégio"
        description="Nossa área externa foi projetada para oferecer um ambiente acolhedor e moderno, com amplos espaços verdes, paisagismo cuidadoso e uma arquitetura que reflete nossa identidade educacional. Um espaço que inspira o aprendizado desde o primeiro olhar."
        images={areaExternaImages}
        bgColor="bg-blue-50"
      />

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Dependencias;
