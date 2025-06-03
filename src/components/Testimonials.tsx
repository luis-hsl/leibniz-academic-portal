
import { Card, CardContent } from "@/components/ui/card";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, Quote } from "lucide-react";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [api, setApi] = useState<any>();

  // Auto-play functionality
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [api]);

  const testimonials = [
    {
      name: "Giovana Orsi Thum",
      course: "Medicina",
      university: "FAMP - GO",
      year: "3º ano em - 2024",
      text: "O Colégio Leibniz foi fundamental na minha aprovação em Medicina. A dedicação dos professores e a qualidade do ensino fizeram toda a diferença.",
      image: "/lovable-uploads/3eeb7c0e-e277-4ed2-80d2-fa502cd40936.png"
    },
    {
      name: "Matheus Cláudio",
      course: "Direito",
      university: "UFMT / 6º lugar",
      year: "2º ano em - 2023",
      text: "Consegui a aprovação em 6º lugar no curso de Direito da UFMT. O Leibniz me deu toda a base necessária para alcançar esse resultado.",
      image: "/lovable-uploads/cd4e09f3-0765-415c-b018-59d5dffc9698.png"
    },
    {
      name: "Luan Miyata",
      course: "Engenharia de Software",
      university: "UFR UFMS",
      year: "3º ano em - 2023",
      text: "A metodologia do Colégio Leibniz me preparou perfeitamente para os desafios do vestibular. Hoje curso Engenharia de Software na UFMS.",
      image: "/lovable-uploads/43c34112-dd8d-4178-83c9-299688722356.png"
    },
    {
      name: "Anna Clara Fengler",
      course: "Medicina",
      university: "FAMP - GO",
      year: "3º ano em - 2024",
      text: "Realizar o sonho de cursar Medicina foi possível graças ao excelente preparo que recebi no Colégio Leibniz.",
      image: "/lovable-uploads/5b4f42a7-4972-4f23-b843-e49d4adf1303.png"
    },
    {
      name: "Ana Clara Souza Pavoni",
      course: "Medicina",
      university: "UNINOVE - SP",
      year: "3º ano em - 2023",
      text: "O suporte e a qualidade de ensino do Leibniz foram essenciais para minha aprovação em Medicina na UNINOVE.",
      image: "/lovable-uploads/1f5a261a-6444-4793-baa6-afa4956dd5e9.png"
    },
    {
      name: "Gabriela Pagnussat",
      course: "Medicina",
      university: "Barão de Mauá - SP",
      year: "3º ano em - 2023",
      text: "Hoje estou realizando meu sonho de ser médica graças ao excelente preparo que tive no Colégio Leibniz.",
      image: "/lovable-uploads/ded2dc00-13ab-4eb8-a346-987b7d93d086.png"
    },
    {
      name: "José Victor Polizel",
      course: "Agronomia",
      university: "2º lugar na UNIFV",
      year: "Preparatório 2024",
      text: "Conquistei o 2º lugar no vestibular de Agronomia. O Colégio Leibniz me deu toda a preparação necessária para esse sucesso.",
      image: "/lovable-uploads/6b5df189-e011-4283-9be5-bfd59aff2d24.png"
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

          <Carousel
            setApi={setApi}
            className="w-full max-w-5xl mx-auto"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-white shadow-lg hover-scale h-full">
                    <CardContent className="p-6">
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      
                      <Quote className="h-6 w-6 text-blue-300 mb-3" />
                      
                      <p className="text-gray-700 mb-4 leading-relaxed italic text-sm">
                        "{testimonial.text}"
                      </p>
                      
                      <div className="border-t pt-4 flex items-center gap-3">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-blue-200"
                        />
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                          <p className="text-red-600 font-semibold text-sm">{testimonial.course}</p>
                          <p className="text-blue-600 text-xs">{testimonial.university}</p>
                          <p className="text-xs text-gray-500">{testimonial.year}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>

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
