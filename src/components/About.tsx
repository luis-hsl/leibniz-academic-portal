
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sobre o Colégio Leibniz</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma instituição comprometida com a excelência educacional e o desenvolvimento integral dos nossos alunos.
            </p>
          </div>

          {/* História */}
          <div className="mb-16">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-red-600 mb-4">Nossa História</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Fundado em 2019, o Colégio Leibniz nasceu da fusão com a Vest Plus Cursos, 
                  trazendo mais de 21 anos de experiência educacional. Nossa instituição 
                  representa a união entre tradição pedagógica e inovação metodológica, 
                  sempre com foco na excelência acadêmica e no desenvolvimento humano.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Missão, Visão e Valores */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-blue-600 text-white hover-scale">
              <CardContent className="p-6 text-center">
                <Target className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
                <h3 className="text-xl font-bold mb-3">Missão</h3>
                <p className="text-blue-100">
                  Oferecer educação de qualidade e alta performance, preparando alunos 
                  para os desafios acadêmicos e da vida.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-green-600 text-white hover-scale">
              <CardContent className="p-6 text-center">
                <Eye className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
                <h3 className="text-xl font-bold mb-3">Visão</h3>
                <p className="text-green-100">
                  Ser referência no ensino de qualidade, com foco em aprovações 
                  em universidades de excelência.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-red-600 text-white hover-scale">
              <CardContent className="p-6 text-center">
                <Heart className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
                <h3 className="text-xl font-bold mb-3">Valores</h3>
                <p className="text-red-100">
                  Excelência, respeito, integridade, inovação e empatia 
                  norteiam todas as nossas ações.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-purple-600 text-white hover-scale">
              <CardContent className="p-6 text-center">
                <Lightbulb className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
                <h3 className="text-xl font-bold mb-3">Metodologia</h3>
                <p className="text-purple-100">
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
