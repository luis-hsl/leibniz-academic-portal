
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import DependencySection from "@/components/DependencySection";
import SEOHead from "@/components/SEOHead";
import OptimizedAnalytics from "@/components/OptimizedAnalytics";

const Dependencias = () => {
  const exteriorImages = [
    {
      src: "/lovable-uploads/e184216c-7a3a-4233-9e6b-25748975871f.png",
      alt: "Fachada do Colégio Leibniz",
      title: "Fachada Principal"
    },
    {
      src: "/lovable-uploads/bc48ba2d-00f3-4d05-8eaa-c6a90fac82e2.png",
      alt: "Vista externa do Colégio Leibniz",
      title: "Vista Externa"
    },
    {
      src: "/lovable-uploads/3fce4e95-adc0-4137-88a7-07d5fc5d853a.png",
      alt: "Fachada lateral do Colégio Leibniz",
      title: "Fachada Lateral"
    },
    {
      src: "/lovable-uploads/1e70538d-2aaa-4cdf-a14a-fb6bba03dbff.png",
      alt: "Entrada principal do Colégio Leibniz",
      title: "Entrada Principal"
    },
    {
      src: "/lovable-uploads/43fb40dd-018a-40da-b5ac-a9161820b532.png",
      alt: "Vista geral do Colégio Leibniz",
      title: "Vista Geral"
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
      src: "/lovable-uploads/2a0bab9b-519e-479e-8b46-e0237fa78fdb.png",
      alt: "Laboratório de informática com notebooks",
      title: "Laboratório de Informática"
    },
    {
      src: "/lovable-uploads/7423a40c-6f3d-4d7d-9973-21c7a3c1a901.png",
      alt: "Espaço de tecnologia e robótica",
      title: "Espaço de Tecnologia"
    },
    {
      src: "/lovable-uploads/e7862eb8-26ca-4bd7-a8c8-762e82f81567.png",
      alt: "Notebooks para atividades de programação",
      title: "Estação de Programação"
    },
    {
      src: "/lovable-uploads/0de370e3-e936-4ab4-aaea-bf29a0cb4302.png",
      alt: "Mesa colaborativa com notebooks",
      title: "Mesa Colaborativa"
    },
    {
      src: "/lovable-uploads/bb09e5fc-f8d4-40c8-8cf7-b5321f19558a.png",
      alt: "Área de trabalho em grupo",
      title: "Área de Trabalho em Grupo"
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
      src: "/lovable-uploads/62af054d-f4c7-4390-97c5-5d01fae9cd02.png",
      alt: "Vista geral da cantina do colégio",
      title: "Cantina - Vista Geral"
    },
    {
      src: "/lovable-uploads/29b2ff3c-66d9-4e32-91ea-59d1ccaa7c34.png",
      alt: "Área de convivência da cantina",
      title: "Área de Convivência"
    },
    {
      src: "/lovable-uploads/a442947a-aec8-4b15-a88a-0fd80eb13319.png",
      alt: "Espaço da cantina com mesas",
      title: "Área de Alimentação"
    }
  ];

  const laboratoryImages = [
    {
      src: "/lovable-uploads/16a1f204-d542-4654-83c4-55b68c82078e.png",
      alt: "Modelo anatômico no laboratório",
      title: "Modelos Anatômicos"
    },
    {
      src: "/lovable-uploads/31600a44-501e-4d74-b12c-31dac2d684b5.png",
      alt: "Equipamentos do laboratório de ciências",
      title: "Equipamentos Científicos"
    },
    {
      src: "/lovable-uploads/6adde15a-4b00-40b7-ae8a-0f6f9794083d.png",
      alt: "Vista completa do laboratório",
      title: "Laboratório de Ciências"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Nossas Dependências - Colégio Leibniz"
        description="Conheça os espaços modernos e equipados do Colégio Leibniz que proporcionam a melhor experiência educacional para nossos alunos."
        keywords="dependências, infraestrutura, laboratórios, biblioteca, colégio leibniz"
      />
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
        description="Espaços modernos equipados com tecnologia de ponta para desenvolver habilidades em programação e robótica."
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
        description="Ambiente acolhedor e moderno para alimentação e convivência dos estudantes."
        images={cafeteriaImages}
        bgColor="bg-orange-50"
      />

      <DependencySection
        title="Laboratório de Química e Física"
        description="Laboratórios totalmente equipados para experimentos e estudos práticos de ciências."
        images={laboratoryImages}
        bgColor="bg-green-50"
      />

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Dependencias;
