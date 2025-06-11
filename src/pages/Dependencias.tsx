
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import DependencySection from "@/components/DependencySection";
import DependenciasHero from "@/components/DependenciasHero";
import SEOHead from "@/components/SEOHead";
import OptimizedAnalytics from "@/components/OptimizedAnalytics";
import ResourcePreloader from "@/components/ResourcePreloader";
import {
  exteriorImages,
  auditoriumImages,
  fundamental2CorridorImages,
  roboticsImages,
  roboticsLabImages,
  technologyLabImages,
  libraryImages,
  cafeteriaImages,
  laboratoryImages
} from "@/data/dependenciasData";

const Dependencias = () => {
  // Critical images for preloading (first 3 images from first section)
  const criticalImages = [
    "/lovable-uploads/af862d6b-0e89-43bc-9100-4955d3958008.png",
    "/lovable-uploads/9b4349e8-2668-497c-9e72-df6bc6962ec9.png",
    "/lovable-uploads/234c1ebb-2420-49b2-abe6-c8ed4ea8107f.png"
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
        title="Estrutura Externa"
        description="Nossa infraestrutura moderna e bem localizada oferece um ambiente seguro e acolhedor."
        images={exteriorImages}
        bgColor="bg-white"
      />

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
        description="Nossos estudantes desenvolvem habilidades do futuro através de atividades práticas de robótica, programação e tecnologia educacional."
        images={roboticsImages}
        bgColor="bg-gradient-to-r from-blue-50 to-cyan-50"
      />

      <DependencySection
        title="Laboratório de Robótica e Informática"
        description="Espaços modernos equipados com tecnologia de ponta para desenvolver habilidades em programação e robótica através de atividades práticas com blocos educacionais e tablets."
        images={roboticsLabImages}
        bgColor="bg-purple-50"
      />

      <DependencySection
        title="Laboratório de Tecnologia e Informática"
        description="Ambiente moderno e colorido equipado com laptops e mobiliário ergonômico, proporcionando espaços colaborativos e individuais para o aprendizado de tecnologia e informática."
        images={technologyLabImages}
        bgColor="bg-cyan-50"
      />

      <DependencySection
        title="Biblioteca"
        description="Um ambiente tranquilo e organizado para estudos, pesquisas e desenvolvimento do hábito da leitura."
        images={libraryImages}
        bgColor="bg-indigo-50"
      />

      <DependencySection
        title="Cantina"
        description="Ambiente acolhedor e moderno para alimentação e convivência dos estudantes do Fundamental 1 e 2, com pátio coberto amplo e bem iluminado."
        images={cafeteriaImages}
        bgColor="bg-orange-50"
      />

      <DependencySection
        title="Laboratório de Química e Física"
        description="Laboratório completo equipado com modelos anatômicos, microscópios profissionais, vidrarias e materiais didáticos para experimentos práticos em química, física e biologia."
        images={laboratoryImages}
        bgColor="bg-green-50"
      />

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Dependencias;
