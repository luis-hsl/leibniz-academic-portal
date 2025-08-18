
import PageLayout from "@/components/layout/PageLayout";
import DependencyGrid from "@/components/DependencyGrid";
import SEOHead from "@/components/SEOHead";
import OptimizedAnalytics from "@/components/OptimizedAnalytics";
import ResourcePreloader from "@/components/ResourcePreloader";

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
    "/lovable-uploads/2bb3816c-b3fb-4e1e-9cfd-d800a82711cd.png",
    "/lovable-uploads/de3ef360-e9dc-4aa3-b7da-5ccc786b5302.png"
  ];


  return (
    <>
      <SEOHead 
        title="Nossas Dependências - Colégio Leibniz"
        description="Conheça os espaços modernos e equipados do Colégio Leibniz que proporcionam a melhor experiência educacional para nossos alunos."
        keywords="dependências, infraestrutura, laboratórios, biblioteca, colégio leibniz"
      />
      <ResourcePreloader criticalImages={criticalImages} />
      <OptimizedAnalytics />
      
      <PageLayout
        title="Dependências"
        heroBackgroundImage="/lovable-uploads/b6f2e52f-1522-45ea-9c01-14ed7c201373.png"
        breadcrumb="INÍCIO"
        seoDescription="Conheça os espaços modernos e equipados do Colégio Leibniz que proporcionam a melhor experiência educacional para nossos alunos."
        seoKeywords="dependências, infraestrutura, laboratórios, biblioteca, colégio leibniz"
      >
        {/* Tour Virtual Interativo */}
        <DependencyGrid />
      </PageLayout>
    </>
  );
};

export default Dependencias;
