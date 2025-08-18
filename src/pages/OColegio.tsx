import PageLayout from "@/components/layout/PageLayout";
import PageContent from "@/components/layout/PageContent";
import InstitutionalVideo from "@/components/InstitutionalVideo";
import ValuesSection from "@/components/ValuesSection";
import VisitForm from "@/components/VisitForm";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Building, Trophy, BookOpen } from "lucide-react";

const OColegio = () => {
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
        title="Nossa História e Missão"
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 font-montserrat">
                Nossos Diferenciais
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-montserrat">
                Espaços modernos e equipamentos de última geração para proporcionar a melhor experiência educacional.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
              <Card className="hover-scale shadow-lg hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="bg-primary/10 p-6 md:p-8 rounded-full w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 flex items-center justify-center">
                    <BookOpen className="h-10 w-10 md:h-12 md:w-12 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 font-montserrat">Salas Modernas</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed font-montserrat">Salas climatizadas com tecnologia audiovisual avançada.</p>
                </CardContent>
              </Card>

              <Card className="hover-scale shadow-lg hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="bg-secondary/20 p-6 md:p-8 rounded-full w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 flex items-center justify-center">
                    <Users className="h-10 w-10 md:h-12 md:w-12 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 font-montserrat">Laboratórios</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed font-montserrat">Laboratórios de ciências e informática totalmente equipados.</p>
                </CardContent>
              </Card>

              <Card className="hover-scale shadow-lg hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="bg-accent/20 p-6 md:p-8 rounded-full w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 flex items-center justify-center">
                    <Trophy className="h-10 w-10 md:h-12 md:w-12 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 font-montserrat">Quadra Esportiva</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed font-montserrat">Espaço completo para atividades físicas e esportivas.</p>
                </CardContent>
              </Card>

              <Card className="hover-scale shadow-lg hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="bg-muted p-6 md:p-8 rounded-full w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 flex items-center justify-center">
                    <Building className="h-10 w-10 md:h-12 md:w-12 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 font-montserrat">Biblioteca</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed font-montserrat">Acervo rico e ambiente propício para estudos.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Valores */}
      <ValuesSection />

      {/* Formulário de Agendamento de Visita */}
      <VisitForm />
    </PageLayout>
  );
};

export default OColegio;
