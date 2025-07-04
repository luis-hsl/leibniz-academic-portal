import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import type { CarouselApi } from "@/components/ui/carousel";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";
import OptimizedAnalytics from "@/components/OptimizedAnalytics";

const AlunosAprovados = () => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  // Imagens dos alunos aprovados
  const studentImages = [
    {
      name: "Giovana Orsi Thum",
      image: "/lovable-uploads/3eeb7c0e-e277-4ed2-80d2-fa502cd40936.png",
      course: "MEDICINA",
      university: "UFMT",
      year: "2023"
    },
    {
      name: "Nicolas Da Matta",
      image: "/lovable-uploads/cd4e09f3-0765-415c-b018-59d5dffc9698.png",
      course: "MEDICINA",
      university: "UFMT",
      year: "2023"
    },
    {
      name: "Beatriz Teodoro",
      image: "/lovable-uploads/4e7cac39-b935-4776-b7e1-c143aba0a331.png",
      course: "MEDICINA",
      university: "UNIC",
      year: "2023"
    },
    {
      name: "Thayná Marinho",
      image: "/lovable-uploads/cf73da90-9069-4857-a1c6-6417668d6778.png",
      course: "MEDICINA",
      university: "UNIC",
      year: "2023"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Alunos Aprovados - Colégio Leibniz"
        description="Conheça alguns dos nossos alunos que realizaram o sonho da aprovação nas melhores universidades do país."
        keywords="alunos aprovados, medicina, vestibular, universidades, colégio leibniz"
      />
      <OptimizedAnalytics />
      <Header />
      
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in">
              <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Alunos Aprovados
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4">
                Histórias de Superação e <span className="text-green-600">Dedicação</span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                em Nossa Instituição
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
                Conheça alguns dos nossos alunos que realizaram o sonho da aprovação nas melhores universidades.
              </p>
            </div>

            <Carousel 
              setApi={setApi}
              className="w-full max-w-7xl mx-auto"
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {studentImages.map((student, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border border-gray-200">
                      <CardContent className="p-0">
                        <div className="relative">
                          <img 
                            src={student.image}
                            alt={`${student.name} - Aprovado em ${student.course} na ${student.university}`}
                            className="w-full h-48 sm:h-56 md:h-64 object-cover object-top"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white">
                            <h3 className="text-sm sm:text-base font-bold mb-1">{student.name}</h3>
                            <div className="text-xs sm:text-sm">
                              <div className="font-semibold text-yellow-300">{student.course}</div>
                              <div className="opacity-90">{student.university} - {student.year}</div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:block">
                <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg border-2 border-gray-200 hover:bg-gray-50 hover:border-red-300 transition-all duration-300" />
                <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg border-2 border-gray-200 hover:bg-gray-50 hover:border-red-300 transition-all duration-300" />
              </div>
              <div className="text-center mt-4 md:hidden">
                <p className="text-xs text-gray-400 mt-1 px-4">
                  Use as setas ou arraste para navegar pelas fotos
                </p>
              </div>
            </Carousel>

            <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
              {[
                { value: "95%", label: "Taxa de Aprovação", color: "text-red-600" },
                { value: "1000+", label: "Alunos Aprovados", color: "text-blue-600" },
                { value: "50+", label: "Universidades", color: "text-green-600" },
                { value: "21", label: "Anos de Tradição", color: "text-purple-600" }
              ].map((stat, index) => (
                <div key={index} 
                     className="p-4 sm:p-6 md:p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                     style={{ animationDelay: `${index * 0.1 + 0.5}s` }}>
                  <h3 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ${stat.color} transition-transform duration-300 hover:scale-110`}>
                    {stat.value}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 font-medium mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AlunosAprovados;