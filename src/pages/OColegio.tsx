import PageLayout from "@/components/layout/PageLayout";
import PageContent from "@/components/layout/PageContent";
import ImageGallery from "@/components/layout/ImageGallery";
import InstitutionalVideo from "@/components/InstitutionalVideo";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Building, Trophy, BookOpen } from "lucide-react";

const OColegio = () => {
  // Imagens para a galeria
  const galleryImages = [
    {
      src: "/lovable-uploads/2784febf-3d6e-4519-a30c-fc0df6826ec8.png",
      alt: "Fachada do Colégio Leibniz",
      caption: "Fachada Principal"
    },
    {
      src: "/lovable-uploads/29b2ff3c-66d9-4e32-91ea-59d1ccaa7c34.png",
      alt: "Sala de aula moderna",
      caption: "Salas Modernas"
    },
    {
      src: "/lovable-uploads/2f1f5d03-9300-4d9c-a7a0-f3c7c3fd695e.png",
      alt: "Laboratório de ciências",
      caption: "Laboratórios"
    },
    {
      src: "/lovable-uploads/36d3fb86-af9f-4488-ba40-4154b1e5d209.png",
      alt: "Biblioteca do colégio",
      caption: "Biblioteca"
    },
    {
      src: "/lovable-uploads/3eeb7c0e-e277-4ed2-80d2-fa502cd40936.png",
      alt: "Quadra esportiva",
      caption: "Quadra Esportiva"
    },
    {
      src: "/lovable-uploads/4223a8e5-5cbb-4352-bff7-fad5d0c7d664.png",
      alt: "Área de convivência",
      caption: "Área de Convivência"
    }
  ];

  const contentText = (
    <>
      <p>
        O Colégio Leibniz se destaca pela sua infraestrutura moderna e metodologia inovadora, 
        proporcionando um ambiente acolhedor e estimulante para o desenvolvimento integral dos 
        nossos alunos.
      </p>
      <p>
        Nossos espaços foram cuidadosamente planejados para oferecer a melhor experiência 
        educacional, combinando tecnologia de ponta com ambientes inspiradores que favorecem 
        o aprendizado e o crescimento pessoal de cada estudante.
      </p>
      <p>
        Com uma equipe de profissionais qualificados e uma proposta pedagógica diferenciada, 
        formamos cidadãos preparados para os desafios do futuro, sempre priorizando valores 
        éticos e excelência acadêmica.
      </p>
    </>
  );

  return (
    <PageLayout
      title="O Colégio"
      heroBackgroundImage="/lovable-uploads/42661bf5-74d2-4f7b-992f-48770e566cb3.png"
      breadcrumb="INÍCIO"
      seoDescription="Conheça o Colégio Leibniz: infraestrutura moderna, metodologia inovadora e ambiente acolhedor para o desenvolvimento integral dos alunos."
      seoKeywords="colégio leibniz, infraestrutura, metodologia, educação, escola"
    >
      {/* Conteúdo Principal */}
      <PageContent
        title="Nossa Infraestrutura"
        content={contentText}
        image="/lovable-uploads/2784febf-3d6e-4519-a30c-fc0df6826ec8.png"
        imageAlt="Fachada do Colégio Leibniz"
      />

      {/* Video Section */}
      <InstitutionalVideo size="large" />

      {/* Infrastructure Cards Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
                Nossos Diferenciais
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Espaços modernos e equipamentos de última geração para proporcionar a melhor experiência educacional.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
              <Card className="hover-scale shadow-lg hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="bg-blue-100 p-6 md:p-8 rounded-full w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 flex items-center justify-center">
                    <BookOpen className="h-10 w-10 md:h-12 md:w-12 text-blue-600" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Salas Modernas</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">Salas climatizadas com tecnologia audiovisual avançada.</p>
                </CardContent>
              </Card>

              <Card className="hover-scale shadow-lg hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="bg-green-100 p-6 md:p-8 rounded-full w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 flex items-center justify-center">
                    <Users className="h-10 w-10 md:h-12 md:w-12 text-green-600" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Laboratórios</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">Laboratórios de ciências e informática totalmente equipados.</p>
                </CardContent>
              </Card>

              <Card className="hover-scale shadow-lg hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="bg-red-100 p-6 md:p-8 rounded-full w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 flex items-center justify-center">
                    <Trophy className="h-10 w-10 md:h-12 md:w-12 text-red-600" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Quadra Esportiva</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">Espaço completo para atividades físicas e esportivas.</p>
                </CardContent>
              </Card>

              <Card className="hover-scale shadow-lg hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="bg-purple-100 p-6 md:p-8 rounded-full w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 flex items-center justify-center">
                    <Building className="h-10 w-10 md:h-12 md:w-12 text-purple-600" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Biblioteca</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">Acervo rico e ambiente propício para estudos.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria de Imagens */}
      <ImageGallery
        title="Conheça Nossos Espaços"
        images={galleryImages}
        gridCols={3}
      />
    </PageLayout>
  );
};

export default OColegio;
