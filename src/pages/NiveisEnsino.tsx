
import { useEffect } from "react";
import PageLayout from "@/components/layout/PageLayout";
import PageContent from "@/components/layout/PageContent";
import ImageGallery from "@/components/layout/ImageGallery";
import EducationLevelCards from "@/components/EducationLevelCards";

const NiveisEnsino = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Imagens para a galeria dos níveis de ensino
  const educationImages = [
    {
      src: "/lovable-uploads/4470caf6-adf0-4120-9419-9d5dafe58eb4.png",
      alt: "Ensino Infantil",
      caption: "Ensino Infantil"
    },
    {
      src: "/lovable-uploads/49d1f717-adb4-4cee-98b6-0e7803b500b6.png",
      alt: "Ensino Fundamental I",
      caption: "Ensino Fundamental I"
    },
    {
      src: "/lovable-uploads/4e7cac39-b935-4776-b7e1-c143aba0a331.png",
      alt: "Ensino Fundamental II",
      caption: "Ensino Fundamental II"
    },
    {
      src: "/lovable-uploads/4f312db7-f2f6-44a1-a91e-24eb6e23ea95.png",
      alt: "Ensino Médio",
      caption: "Ensino Médio"
    },
    {
      src: "/lovable-uploads/515ba1f1-7740-43ba-a854-6403931cb17b.png",
      alt: "Preparatório para Vestibulares",
      caption: "Preparatório"
    },
    {
      src: "/lovable-uploads/5814f72e-8902-454f-ade2-817bb032b306.png",
      alt: "Atividades extracurriculares",
      caption: "Atividades Extras"
    }
  ];

  const contentText = (
    <>
      <p>
        O Colégio Leibniz oferece uma educação completa e de excelência para todas as fases 
        do desenvolvimento educacional, desde o Ensino Infantil até os cursos preparatórios 
        para vestibulares e ENEM.
      </p>
      <p>
        Nossa proposta pedagógica é cuidadosamente estruturada para cada nível de ensino, 
        respeitando as características e necessidades específicas de cada faixa etária, 
        sempre priorizando o desenvolvimento integral do aluno.
      </p>
      <p>
        Com metodologias modernas e professores altamente qualificados, preparamos nossos 
        estudantes não apenas para os desafios acadêmicos, mas também para a vida, formando 
        cidadãos críticos, criativos e responsáveis.
      </p>
    </>
  );

  return (
    <PageLayout
      title="Níveis de Ensino"
      heroBackgroundImage="/lovable-uploads/590184c3-c7d0-4201-ae5d-e44a878d985b.png"
      breadcrumb="INÍCIO"
      seoDescription="Conheça os níveis de ensino do Colégio Leibniz: do Ensino Infantil aos preparatórios para vestibulares, educação de excelência em todas as fases."
      seoKeywords="níveis de ensino, ensino infantil, fundamental, médio, preparatório, vestibular, educação"
    >
      {/* Conteúdo Principal */}
      <PageContent
        title="Educação para Toda Vida"
        content={contentText}
        image="/lovable-uploads/5a719721-a1be-4350-a778-bf16da792606.png"
        imageAlt="Estudantes do Colégio Leibniz"
      />

      {/* Cards dos Níveis de Ensino */}
      <EducationLevelCards />

      {/* Galeria de Imagens */}
      <ImageGallery
        title="Nossos Níveis de Ensino"
        images={educationImages}
        gridCols={3}
      />
    </PageLayout>
  );
};

export default NiveisEnsino;
