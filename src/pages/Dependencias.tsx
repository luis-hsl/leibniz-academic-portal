
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import DependencySection from "@/components/DependencySection";
import DependenciasHero from "@/components/DependenciasHero";
import SEOHead from "@/components/SEOHead";
import OptimizedAnalytics from "@/components/OptimizedAnalytics";
import ResourcePreloader from "@/components/ResourcePreloader";
import {
  areaExternaImages,
  roboticsImages,
  cantinaImages,
  laboratorisFisicaQuimicaImages,
  laboratorioTecnologiaImages,
  bibliotecaImages,
  auditoriumImages
} from "@/data/dependenciasData";

const Dependencias = () => {
  // Critical images for preloading (first WebP images from first sections)
  const criticalImages = [
    "/lovable-uploads/49d1f717-adb4-4cee-98b6-0e7803b500b6.png",
    "/lovable-uploads/8b589287-247a-4b10-8999-fa49984ee71c.png",
    "/lovable-uploads/e0091d38-7b95-4e2c-9841-17f48704f260.png",
    "/lovable-uploads/fdc61607-18f2-4a6f-bb10-f9fc789fa308.png",
    "/lovable-uploads/480f5b7f-09dc-44f8-8194-ce89873e4bc5.png",
    "/lovable-uploads/b45ba521-606f-4128-ac56-ab88f1be1367.png",
    "/lovable-uploads/7f4cf9fe-e5d3-4a66-a280-65719107a386.png",
    "/lovable-uploads/fb58d3be-9ca7-4e97-b4ed-7070e2d61682.png",
    "/lovable-uploads/908428ad-b9c7-4b07-9ed0-1705cc71810a.png",
    "/lovable-uploads/2bb3816c-b3fb-4e1e-9cfd-d800a82711cd.png"
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

      <DependencySection
        title="Laboratório de Robótica"
        description="Nosso laboratório de robótica oferece um ambiente inovador onde os alunos desenvolvem habilidades em programação, engenharia e trabalho em equipe. Com kits educacionais modernos e tecnologia de ponta, promovemos o aprendizado STEAM de forma prática e divertida."
        images={roboticsImages}
        bgColor="bg-gray-50"
      />

      <DependencySection
        title="Cantina do Ensino Fundamental I e II"
        description="Nossa cantina oferece um ambiente amplo, moderno e acolhedor onde os alunos podem fazer suas refeições com conforto e segurança. Com design colorido e funcional, o espaço conta com mesas organizadas, boa iluminação e um balcão de atendimento que garante praticidade no dia a dia escolar."
        images={cantinaImages}
        bgColor="bg-orange-50"
      />

      <DependencySection
        title="Laboratório de Física e Química"
        description="Nosso laboratório de física e química está equipado com modernos instrumentos científicos, microscópios de alta qualidade, modelos anatômicos detalhados e materiais para experimentos práticos. Este espaço permite que os alunos explorem conceitos científicos através da experimentação hands-on, desenvolvendo o pensamento crítico e a curiosidade científica."
        images={laboratorisFisicaQuimicaImages}
        bgColor="bg-green-50"
      />

      <DependencySection
        title="Laboratório de Tecnologia e Robótica"
        description="Nosso laboratório de tecnologia oferece um ambiente moderno e colorido, equipado com computadores de última geração e laptops para desenvolvimento de projetos tecnológicos. Com mobiliário ergonômico e design inspirador, este espaço promove a aprendizagem digital e prepara os alunos para os desafios do futuro, desenvolvendo competências em programação, design e inovação tecnológica."
        images={laboratorioTecnologiaImages}
        bgColor="bg-purple-50"
      />

      <DependencySection
        title="Biblioteca do Ensino Fundamental II e Médio"
        description="Nossa biblioteca oferece um ambiente tranquilo e organizado, especialmente projetado para estudantes do Ensino Fundamental II e Médio. Com mesas individuais de estudo, cadeiras coloridas e ergonômicas, ambiente climatizado e um acervo completo de materiais didáticos, proporcionamos o espaço ideal para leitura, pesquisa e desenvolvimento acadêmico dos nossos alunos."
        images={bibliotecaImages}
        bgColor="bg-indigo-50"
      />

      <DependencySection
        title="Auditório do Fundamental II"
        description="Nosso auditório é um espaço amplo e moderno, especialmente projetado para eventos, apresentações e atividades educacionais do Ensino Fundamental II. Com capacidade para grande número de estudantes, sistema de projeção avançado e cadeiras confortáveis, oferecemos o ambiente ideal para palestras, cerimônias, apresentações teatrais e eventos acadêmicos que enriquecem a experiência educacional dos nossos alunos."
        images={auditoriumImages}
        bgColor="bg-teal-50"
      />

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Dependencias;
