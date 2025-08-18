
import { useEffect } from "react";
import PageLayout from "@/components/layout/PageLayout";
import PageContent from "@/components/layout/PageContent";
import ImageGallery from "@/components/layout/ImageGallery";
import About from "@/components/About";

const SobreNos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Imagens para a galeria sobre nós
  const aboutImages = [
    {
      src: "/lovable-uploads/5cce79ec-901e-4fec-bacb-26dd7f1da01f.png",
      alt: "História do Colégio Leibniz",
      caption: "Nossa História"
    },
    {
      src: "/lovable-uploads/60dbf953-fb29-438f-8a97-93e962d46866.png",
      alt: "Equipe pedagógica",
      caption: "Nossa Equipe"
    },
    {
      src: "/lovable-uploads/672ec9c8-05c1-4a0f-aa67-a819cb1cfd85.png",
      alt: "Valores do colégio",
      caption: "Nossos Valores"
    },
    {
      src: "/lovable-uploads/6df16631-7252-490e-b8e6-57043df4375f.png",
      alt: "Missão educacional",
      caption: "Nossa Missão"
    },
    {
      src: "/lovable-uploads/6fa7cd08-32f1-4b8c-969c-48611147486a.png",
      alt: "Visão de futuro",
      caption: "Nossa Visão"
    },
    {
      src: "/lovable-uploads/7164d697-742e-4ac2-8dcc-63701e0bf01d.png",
      alt: "Comunidade escolar",
      caption: "Nossa Comunidade"
    }
  ];

  const contentText = (
    <>
      <p>
        O Colégio Leibniz nasceu do sonho de oferecer uma educação transformadora, 
        que prepara os estudantes não apenas para os desafios acadêmicos, mas também 
        para a vida em sociedade, formando cidadãos críticos, éticos e responsáveis.
      </p>
      <p>
        Nossa trajetória é marcada pela busca constante da excelência educacional, 
        sempre mantendo o foco no desenvolvimento integral do ser humano. Acreditamos 
        que cada aluno é único e possui potencialidades que devem ser descobertas e 
        desenvolvidas através de uma educação personalizada e humanizada.
      </p>
      <p>
        Com uma equipe de profissionais qualificados e uma infraestrutura moderna, 
        construímos um ambiente de aprendizagem inspirador, onde tradição e inovação 
        se encontram para formar as futuras gerações.
      </p>
    </>
  );

  return (
    <PageLayout
      title="Sobre Nós"
      heroBackgroundImage="/lovable-uploads/744f47e2-d92b-4c6d-869a-19832c9137b2.png"
      breadcrumb="INÍCIO"
      seoDescription="Conheça nossa história, missão e os valores que nos guiam na formação de cidadãos preparados para o futuro."
      seoKeywords="sobre nós, história, missão, valores, colégio leibniz, educação"
    >
      {/* Conteúdo Principal */}
      <PageContent
        title="Nossa História e Missão"
        content={contentText}
        image="/lovable-uploads/78452bc1-cd1b-41f2-91f3-7ecd2f5524ec.png"
        imageAlt="Colégio Leibniz - História e tradição"
      />

      {/* Componente About existente */}
      <About />

      {/* Galeria de Imagens */}
      <ImageGallery
        title="Conheça Nossa Trajetória"
        images={aboutImages}
        gridCols={3}
      />
    </PageLayout>
  );
};

export default SobreNos;
