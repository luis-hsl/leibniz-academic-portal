
import { useEffect } from "react";
import PageLayout from "@/components/layout/PageLayout";
import PageContent from "@/components/layout/PageContent";
import EducationLevelCards from "@/components/EducationLevelCards";

const NiveisEnsino = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

    </PageLayout>
  );
};

export default NiveisEnsino;
