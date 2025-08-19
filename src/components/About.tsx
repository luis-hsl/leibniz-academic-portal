
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-12 sm:py-16 md:py-20 bg-off-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-blue mb-4">Sobre o Colégio Leibniz</h2>
            <p className="text-lg sm:text-xl text-dark-blue/80 max-w-3xl mx-auto leading-relaxed">
              Uma instituição comprometida com a excelência educacional e o desenvolvimento integral dos nossos alunos.
            </p>
          </div>

          {/* História */}
          <div className="mb-12 sm:mb-16">
            <Card className="bg-off-white shadow-lg">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-dark-blue mb-4">Nossa História</h3>
                <p className="text-dark-blue/80 leading-relaxed text-base sm:text-lg">
                  Fundado em 2019, o Colégio Leibniz nasceu da fusão com a Vest Plus Cursos, 
                  trazendo mais de 21 anos de experiência educacional. Nossa instituição 
                  representa a união entre tradição pedagógica e inovação metodológica, 
                  sempre com foco na excelência acadêmica e no desenvolvimento humano.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Missão, Visão e Valores */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <Card className="bg-dark-blue text-off-white hover-scale border border-digital-blue/20">
              <CardContent className="p-4 sm:p-6 text-center">
                <Target className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4 text-energy-yellow" />
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-off-white">Formação de Líderes</h3>
                <p className="text-off-white/80 text-sm sm:text-base leading-relaxed">
                  Transformamos estudantes em líderes preparados para os grandes desafios do futuro.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-dark-blue text-off-white hover-scale border border-digital-blue/20">
              <CardContent className="p-4 sm:p-6 text-center">
                <Eye className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4 text-energy-yellow" />
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-off-white">Visão</h3>
                <p className="text-off-white/80 text-sm sm:text-base leading-relaxed">
                  Ser referência no ensino de qualidade, com foco em aprovações 
                  em universidades de excelência.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-dark-blue text-off-white hover-scale border border-digital-blue/20">
              <CardContent className="p-4 sm:p-6 text-center">
                <Heart className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4 text-energy-yellow" />
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-off-white">Valores</h3>
                <p className="text-off-white/80 text-sm sm:text-base leading-relaxed">
                  Excelência, respeito, integridade, inovação e empatia 
                  norteiam todas as nossas ações.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-dark-blue text-off-white hover-scale border border-digital-blue/20">
              <CardContent className="p-4 sm:p-6 text-center">
                <Lightbulb className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4 text-energy-yellow" />
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-off-white">Proposta Pedagógica Inovadora</h3>
                <p className="text-off-white/80 text-sm sm:text-base leading-relaxed">
                  Nosso ensino é baseado nas mais avançadas pesquisas nacionais e internacionais.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
