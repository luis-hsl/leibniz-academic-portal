
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Carolina Silva",
      course: "Medicina - UFMT",
      text: "O Colégio Leibniz foi fundamental na minha aprovação. Os professores são excepcionais e o material do Sistema Bernoulli é completo e atualizado.",
      year: "2023"
    },
    {
      name: "João Pedro Santos",
      course: "Engenharia - UFSCar",
      text: "A metodologia do colégio me preparou não só para o vestibular, mas para a vida acadêmica. Gratidão eterna por todo apoio recebido.",
      year: "2023"
    },
    {
      name: "Maria Eduarda Costa",
      course: "Direito - UNEMAT",
      text: "Encontrei no Leibniz mais que uma escola, encontrei uma família. O acompanhamento individual fez toda a diferença na minha aprovação.",
      year: "2022"
    },
    {
      name: "Gabriel Oliveira",
      course: "Odontologia - UFMT",
      text: "Os simulados e as aulas de revisão foram essenciais. O Colégio Leibniz tem os melhores professores de Rondonópolis.",
      year: "2022"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Histórias de Sucesso</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossos alunos são nossa maior conquista. Veja os depoimentos de quem realizou o sonho da aprovação.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-lg hover-scale">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <Quote className="h-8 w-8 text-blue-300 mb-4" />
                  
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-red-600 font-semibold">{testimonial.course}</p>
                    <p className="text-sm text-gray-500">Aprovado em {testimonial.year}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Statistics */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold text-red-600">95%</h3>
              <p className="text-gray-600">Taxa de Aprovação</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-600">1000+</h3>
              <p className="text-gray-600">Alunos Aprovados</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-green-600">50+</h3>
              <p className="text-gray-600">Universidades</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-purple-600">21</h3>
              <p className="text-gray-600">Anos de Tradição</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
