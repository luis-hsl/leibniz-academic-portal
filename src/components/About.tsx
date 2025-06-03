
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Sobre o Colégio Leibniz</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Uma instituição comprometida com a excelência educacional e o desenvolvimento integral dos nossos alunos.
            </p>
          </div>

          {/* História */}
          <div className="mb-12 sm:mb-16">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-red-600 mb-4">Nossa História</h3>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
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
            <Card className="bg-blue-600 text-white hover-scale">
              <CardContent className="p-4 sm:p-6 text-center">
                <Target className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4 text-yellow-300" />
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Missão</h3>
                <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
                  Oferecer educação de qualidade e alta performance, preparando alunos 
                  para os desafios acadêmicos e da vida.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-green-600 text-white hover-scale">
              <CardContent className="p-4 sm:p-6 text-center">
                <Eye className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4 text-yellow-300" />
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Visão</h3>
                <p className="text-green-100 text-sm sm:text-base leading-relaxed">
                  Ser referência no ensino de qualidade, com foco em aprovações 
                  em universidades de excelência.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-red-600 text-white hover-scale">
              <CardContent className="p-4 sm:p-6 text-center">
                <Heart className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4 text-yellow-300" />
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Valores</h3>
                <p className="text-red-100 text-sm sm:text-base leading-relaxed">
                  Excelência, respeito, integridade, inovação e empatia 
                  norteiam todas as nossas ações.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-purple-600 text-white hover-scale">
              <CardContent className="p-4 sm:p-6 text-center">
                <Lightbulb className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4 text-yellow-300" />
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Metodologia</h3>
                <p className="text-purple-100 text-sm sm:text-base leading-relaxed">
                  Sistema Bernoulli de Ensino com metodologias inovadoras 
                  e corpo docente especializado.
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
