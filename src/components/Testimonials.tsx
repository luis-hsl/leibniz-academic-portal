
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

  // Dados dos alunos aprovados com mais detalhes
  const studentImages = [
    {
      name: "Giovana Orsi Thum",
      image: "/lovable-uploads/3eeb7c0e-e277-4ed2-80d2-fa502cd40936.png",
      course: "MEDICINA",
      university: "UFMT",
      year: "2023",
      color: "bg-gradient-to-br from-pink-400 to-red-500"
    },
    {
      name: "Matheus Cláudio",
      image: "/lovable-uploads/cd4e09f3-0765-415c-b018-59d5dffc9698.png",
      course: "MEDICINA",
      university: "UNIDERP - Campo Grande",
      year: "2023",
      color: "bg-gradient-to-br from-blue-400 to-blue-600"
    },
    {
      name: "Luan Miyata",
      image: "/lovable-uploads/43c34112-dd8d-4178-83c9-299688722356.png",
      course: "MEDICINA",
      university: "UNIMAR - Universidade de Marília",
      year: "2023",
      color: "bg-gradient-to-br from-green-400 to-green-600"
    },
    {
      name: "Anna Clara Fengler",
      image: "/lovable-uploads/5b4f42a7-4972-4f23-b843-e49d4adf1303.png",
      course: "MEDICINA",
      university: "Universidade de Vassouras - RJ",
      year: "2023",
      color: "bg-gradient-to-br from-purple-400 to-purple-600"
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
                <CarouselItem key={index} className="pl-2 sm:pl-4 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div className="p-1 sm:p-2 md:p-3">
                    <div className={`${student.color} rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 h-full relative overflow-hidden group animate-slide-up`}
                         style={{ animationDelay: `${index * 0.1}s` }}>
                      
                      {/* Padrão de fundo decorativo com animação */}
                      <div className="absolute inset-0 opacity-10 transition-opacity duration-300 group-hover:opacity-20">
                        <div className="absolute top-4 right-4 w-16 h-16 sm:w-20 sm:h-20 border-4 border-white rounded-full transition-transform duration-500 group-hover:rotate-45"></div>
                        <div className="absolute bottom-4 left-4 w-12 h-12 sm:w-16 sm:h-16 border-4 border-white rounded-full transition-transform duration-500 group-hover:-rotate-45"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-32 sm:h-32 border-4 border-white rounded-full transition-transform duration-700 group-hover:scale-110"></div>
                      </div>
                      
                      {/* Header com logo */}
                      <div className="relative z-10 text-center mb-4 transition-transform duration-300 group-hover:scale-105">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center">
                            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full"></div>
                          </div>
                          <span className="text-white font-bold text-sm sm:text-lg">Colégio Leibniz</span>
                        </div>
                        <div className="bg-black text-yellow-400 px-2 py-1 sm:px-3 sm:py-1 rounded-full inline-block font-bold text-xs sm:text-sm transform -rotate-3 transition-transform duration-300 group-hover:rotate-0">
                          APROVADO!
                        </div>
                      </div>

                      {/* Nome do aluno */}
                      <div className="relative z-10 text-center mb-4 transition-transform duration-300 group-hover:scale-105">
                        <div className="bg-yellow-400 text-black px-2 py-1 sm:px-3 sm:py-1 rounded-lg inline-block font-bold text-xs sm:text-sm mb-2 shadow-md">
                          {student.name.toUpperCase()}
                        </div>
                        <div className="text-white text-xs opacity-90">
                          {student.year}
                        </div>
                      </div>

                      {/* Foto do aluno com dimensionamento responsivo */}
                      <div className="relative z-10 flex justify-center mb-4">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:border-yellow-300">
                          <OptimizedImage
                            src={student.image}
                            alt={student.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            width={128}
                            height={128}
                            priority={index === 0}
                            sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, (max-width: 1024px) 112px, 128px"
                          />
                        </div>
                      </div>

                      {/* Curso */}
                      <div className="relative z-10 text-center mb-4 transition-transform duration-300 group-hover:scale-105">
                        <div className="bg-red-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-black text-lg sm:text-xl md:text-2xl lg:text-3xl shadow-lg transform rotate-1 transition-transform duration-300 group-hover:rotate-0">
                          {student.course}
                        </div>
                      </div>

                      {/* Universidade */}
                      <div className="relative z-10 text-center transition-transform duration-300 group-hover:scale-105">
                        <div className="bg-blue-600 text-white px-2 py-2 sm:px-3 sm:py-2 rounded-lg font-bold text-xs sm:text-sm shadow-md">
                          {student.university}
                        </div>
                      </div>
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
