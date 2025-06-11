

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import DependencySection from "@/components/DependencySection";
import SEOHead from "@/components/SEOHead";
import OptimizedAnalytics from "@/components/OptimizedAnalytics";
import ResourcePreloader from "@/components/ResourcePreloader";

const Dependencias = () => {
  const exteriorImages = [
    {
      src: "/lovable-uploads/af862d6b-0e89-43bc-9100-4955d3958008.png",
      alt: "Fachada principal do Colégio Leibniz",
      title: "Fachada Principal"
    },
    {
      src: "/lovable-uploads/9b4349e8-2668-497c-9e72-df6bc6962ec9.png",
      alt: "Vista lateral da estrutura do Colégio Leibniz",
      title: "Vista Lateral"
    },
    {
      src: "/lovable-uploads/234c1ebb-2420-49b2-abe6-c8ed4ea8107f.png",
      alt: "Entrada principal do Colégio Leibniz",
      title: "Entrada Principal"
    },
    {
      src: "/lovable-uploads/9c845d4f-e5ef-4be4-8d88-454847ec7bda.png",
      alt: "Fachada frontal com logo do Colégio Leibniz",
      title: "Fachada com Logo"
    }
  ];

  const auditoriumImages = [
    {
      src: "/lovable-uploads/ddddefe2-e093-407d-84b9-afa08a8e5921.png",
      alt: "Auditório durante apresentação",
      title: "Auditório - Apresentação"
    },
    {
      src: "/lovable-uploads/54c661a9-afc2-42a8-9e6b-97449b09c464.png",
      alt: "Vista ampla do auditório",
      title: "Vista Ampla do Auditório"
    }
  ];

  const fundamental2CorridorImages = [
    {
      src: "/lovable-uploads/a463fe68-c2d3-4f63-bfb2-5883d43bbe5e.png",
      alt: "Corredor do Fundamental 2",
      title: "Corredor Principal"
    },
    {
      src: "/lovable-uploads/7e951399-c37f-4736-9f36-46470bb77e0f.png",
      alt: "Área de convivência do Fundamental 2",
      title: "Área de Convivência"
    },
    {
      src: "/lovable-uploads/aca46dea-1ef5-4fcb-a765-f2b73ee37a19.png",
      alt: "Entrada do Fundamental 2",
      title: "Entrada do Fundamental 2"
    },
    {
      src: "/lovable-uploads/5a719721-a1be-4350-a778-bf16da792606.png",
      alt: "Espaço de convivência completo",
      title: "Espaço de Convivência"
    }
  ];

  const roboticsImages = [
    {
      src: "/lovable-uploads/b3723d45-a264-4843-b4d0-972b4248ed48.png",
      alt: "Estudantes trabalhando com projetos de robótica",
      title: "Projetos de Robótica"
    },
    {
      src: "/lovable-uploads/76fd015e-3b13-4dad-ac69-2a64077cd6ac.png",
      alt: "Atividades de programação e robótica",
      title: "Programação e Robótica"
    },
    {
      src: "/lovable-uploads/1c627c8b-a33f-40a7-8874-7251974f84f8.png",
      alt: "Trabalho colaborativo em robótica",
      title: "Trabalho Colaborativo"
    },
    {
      src: "/lovable-uploads/edc952d5-b9be-4538-8ab1-518de9bfea74.png",
      alt: "Estudantes em atividade de robótica educacional",
      title: "Robótica Educacional"
    },
    {
      src: "/lovable-uploads/d198bf33-8762-4383-8e14-11d19c41c264.png",
      alt: "Criança com jogo educacional",
      title: "Jogos Educacionais"
    },
    {
      src: "/lovable-uploads/0efe3d3e-ae28-406d-909f-5e3005b0b790.png",
      alt: "Atividades em grupo de robótica",
      title: "Atividades em Grupo"
    }
  ];

  const roboticsLabImages = [
    {
      src: "/lovable-uploads/217e1761-9771-4e0e-abf5-3e0d84202460.png",
      alt: "Estudantes trabalhando com blocos de construção e tablet",
      title: "Atividades com Blocos LEGO"
    },
    {
      src: "/lovable-uploads/cc1f4e03-f73f-46d6-99e2-57db9dfbfa3a.png",
      alt: "Trabalho colaborativo com tecnologia educacional",
      title: "Programação e Construção"
    },
    {
      src: "/lovable-uploads/64a37913-63fb-4430-aea1-d1b8e5246f0b.png",
      alt: "Desenvolvimento de projetos de robótica",
      title: "Projetos de Robótica"
    },
    {
      src: "/lovable-uploads/ef57bdc4-306d-4419-bf60-3195f5452cf3.png",
      alt: "Atividades educacionais com blocos e tablet",
      title: "Aprendizado Digital"
    },
    {
      src: "/lovable-uploads/20a589dd-e1bd-4dcb-9d9a-6ed05abcfd4f.png",
      alt: "Estudantes em equipe trabalhando com robótica",
      title: "Trabalho em Equipe"
    },
    {
      src: "/lovable-uploads/c18f8e5f-bc6c-4a00-a957-3b15732f2c18.png",
      alt: "Colaboração em projetos de tecnologia educacional",
      title: "Tecnologia Educacional"
    }
  ];

  const libraryImages = [
    {
      src: "/lovable-uploads/4c024769-a9ce-4393-95fe-6c9dd3ec9a67.png",
      alt: "Área de estudos da biblioteca",
      title: "Área de Estudos"
    },
    {
      src: "/lovable-uploads/f790d44d-4a8f-4a7c-905e-58638b0e5c20.png",
      alt: "Mesas de estudo individuais",
      title: "Mesas de Estudo Individuais"
    },
    {
      src: "/lovable-uploads/7d8ad68e-8e97-44bf-8b31-5206a130bb7c.png",
      alt: "Espaço de leitura e pesquisa",
      title: "Espaço de Leitura"
    },
    {
      src: "/lovable-uploads/744f47e2-d92b-4c6d-869a-19832c9137b2.png",
      alt: "Área de estudos com acervo",
      title: "Área de Estudos com Acervo"
    },
    {
      src: "/lovable-uploads/ff8ae830-5570-4d92-91dc-a628d9a5ea07.png",
      alt: "Vista geral da biblioteca",
      title: "Vista Geral da Biblioteca"
    }
  ];

  const cafeteriaImages = [
    {
      src: "/lovable-uploads/947f79fe-f4d4-4f24-aec1-0704879100d2.png",
      alt: "Pátio coberto da cantina com mesas e bancos",
      title: "Pátio Coberto - Vista 1"
    },
    {
      src: "/lovable-uploads/bc6da1a4-5a47-45e2-b0b4-e12a8125329a.png",
      alt: "Área ampla da cantina com vista completa",
      title: "Pátio Coberto - Vista 2"
    },
    {
      src: "/lovable-uploads/a522d74e-f638-462b-994b-48eb15ae3563.png",
      alt: "Espaço da cantina com mesas e área de lanche",
      title: "Área de Alimentação"
    },
    {
      src: "/lovable-uploads/fa442d9f-bb20-4911-9779-d77fb9f77121.png",
      alt: "Vista da cantina com bancos e área de convivência",
      title: "Área de Convivência"
    },
    {
      src: "/lovable-uploads/06f48c7a-4292-4d0c-846f-32e41b8a8905.png",
      alt: "Espaço completo da cantina com iluminação moderna",
      title: "Espaço Completo"
    },
    {
      src: "/lovable-uploads/4e211de7-a47a-45fe-9533-2010f9447a81.png",
      alt: "Vista lateral da cantina com decoração temática",
      title: "Vista Lateral"
    }
  ];

  const laboratoryImages = [
    {
      src: "/lovable-uploads/c9bb821a-68e3-4d82-aaae-2dc132ee706f.png",
      alt: "Modelo anatômico detalhado com órgãos e sistemas",
      title: "Modelos Anatômicos Completos"
    },
    {
      src: "/lovable-uploads/1ac225fc-f303-46bf-b9f4-f335627d9bd8.png",
      alt: "Modelo do olho humano para estudos de anatomia",
      title: "Modelo do Olho Humano"
    },
    {
      src: "/lovable-uploads/97d5f54d-71d6-4ab4-b7cb-bc50a36712e9.png",
      alt: "Laboratório completo com esqueleto, modelos e microscópio",
      title: "Laboratório de Ciências"
    },
    {
      src: "/lovable-uploads/b746d8cf-8be9-4b7f-88ed-79f822ea4331.png",
      alt: "Bancada do laboratório com microscópio e materiais científicos",
      title: "Bancada de Experimentos"
    },
    {
      src: "/lovable-uploads/b84fb48b-b3fc-4b7f-b75d-3220360f85b1.png",
      alt: "Vista ampla do laboratório com todos os equipamentos",
      title: "Vista Geral do Laboratório"
    },
    {
      src: "/lovable-uploads/a6ce93cf-11cd-4356-b75f-6824b92f3a06.png",
      alt: "Microscópio profissional com tubos de ensaio",
      title: "Microscópio e Vidrarias"
    },
    {
      src: "/lovable-uploads/eba9432f-aee4-4815-97b2-cac86e13794a.png",
      alt: "Equipamentos científicos organizados na bancada",
      title: "Equipamentos Científicos"
    }
  ];

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
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-purple-600 text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">Nossas Dependências</h1>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white px-4 sm:px-0">
              Conheça os espaços modernos e equipados que proporcionam a melhor experiência educacional para nossos alunos.
            </p>
          </div>
        </div>
      </section>

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

