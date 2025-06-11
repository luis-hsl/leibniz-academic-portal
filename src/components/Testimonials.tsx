import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import OptimizedImage from "./OptimizedImage";

const Testimonials = () => {
  const [api, setApi] = useState<any>();

  // Auto-play functionality
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
      name: "Matheus Cláudio",
      image: "/lovable-uploads/cd4e09f3-0765-415c-b018-59d5dffc9698.png",
      course: "MEDICINA",
      university: "UNIDERP - Campo Grande",
      year: "2023"
    },
    {
      name: "Luan Miyata",
      image: "/lovable-uploads/43c34112-dd8d-4178-83c9-299688722356.png",
      course: "MEDICINA",
      university: "UNIMAR - Universidade de Marília",
      year: "2023"
    },
    {
      name: "Anna Clara Fengler",
      image: "/lovable-uploads/5b4f42a7-4972-4f23-b843-e49d4adf1303.png",
      course: "MEDICINA",
      university: "Universidade de Vassouras - RJ",
      year: "2023"
    }
  ];

  return (
    <section id="depoimentos" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in">
            <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Alunos Aprovados
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Histórias de Superação e <span className="text-green-600">Dedicação</span>
            </h2>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              em Nossa Instituição
            </h3>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
              Conheça alguns dos nossos alunos que realizaram o sonho da aprovação nas melhores universidades.
            </p>
          </div>

          <Carousel
            setApi={setApi}
            className="w-full max-w-6xl mx-auto"
            opts={{
              align: "center",
              loop: true,
              skipSnaps: false,
              dragFree: false,
            }}
          >
            <CarouselContent className="-ml-2 sm:-ml-4 md:-ml-6">
              {studentImages.map((student, index) => (
                <CarouselItem key={index} className="pl-2 sm:pl-4 md:pl-6 basis-auto">
                  <div className="p-2 sm:p-3 md:p-4">
                    <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-slide-up group"
                         style={{ animationDelay: `${index * 0.1}s` }}>
                      <OptimizedImage
                        src={student.image}
                        alt={`${student.name} - ${student.course} - ${student.university}`}
                        className="transition-transform duration-700 group-hover:scale-110"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-8 lg:-left-12 hover:scale-110 transition-transform duration-200" />
            <CarouselNext className="hidden md:flex -right-8 lg:-right-12 hover:scale-110 transition-transform duration-200" />
          </Carousel>

          <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 text-center">
            {[
              { value: "95%", label: "Taxa de Aprovação", color: "text-red-600" },
              { value: "1000+", label: "Alunos Aprovados", color: "text-blue-600" },
              { value: "50+", label: "Universidades", color: "text-green-600" },
              { value: "21", label: "Anos de Tradição", color: "text-purple-600" }
            ].map((stat, index) => (
              <div key={index} 
                   className="p-3 sm:p-4 md:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                   style={{ animationDelay: `${index * 0.1 + 0.5}s` }}>
                <h3 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold ${stat.color} transition-transform duration-300 hover:scale-110`}>
                  {stat.value}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
