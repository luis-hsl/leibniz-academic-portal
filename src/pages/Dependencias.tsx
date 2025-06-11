
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import DependencySection from "@/components/DependencySection";
import DependenciasHero from "@/components/DependenciasHero";
import SEOHead from "@/components/SEOHead";
import OptimizedAnalytics from "@/components/OptimizedAnalytics";
import ResourcePreloader from "@/components/ResourcePreloader";
import {
  auditoriumImages,
  fundamental2CorridorImages,
  roboticsImages
} from "@/data/dependenciasData";

const Dependencias = () => {
  // Critical images for preloading (first PNG images from first sections)
  const criticalImages = [
    "/lovable-uploads/6df16631-7252-490e-b8e6-57043df4375f.png",
    "/lovable-uploads/f026aed9-f96e-450d-bb0c-222bbcfea1ed.png",
    "/lovable-uploads/947a0e74-eed4-4678-b5d1-461afe061b68.png"
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
        title="Auditório"
        description="Espaço moderno e confortável para apresentações, palestras e eventos educacionais e culturais."
        images={auditoriumImages}
        bgColor="bg-red-50"
      />

      <DependencySection
        title="Corredor do Fundamental 2"
        description="Espaços amplos e organizados que proporcionam um ambiente acolhedor para os estudantes do Ensino Fundamental 2."
        images={fundamental2CorridorImages}
        bgColor="bg-yellow-50"
      />

      <DependencySection
        title="Robótica Educacional"
        description="Nossos estudantes desenvolvem habilidades do futuro através de atividades práticas de robótica, programação e tecnologia educacional, trabalhando com blocos LEGO educacionais, tablets e projetos colaborativos que estimulam a criatividade, lógica e resolução de problemas."
        images={roboticsImages}
        bgColor="bg-gradient-to-r from-blue-50 to-cyan-50"
      />

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Dependencias;
