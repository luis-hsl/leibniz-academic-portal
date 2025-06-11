
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

  // Reduced to only 4 most important student testimonials for faster loading
  const studentImages = [
    {
      name: "Giovana Orsi Thum",
      image: "/lovable-uploads/3eeb7c0e-e277-4ed2-80d2-fa502cd40936.png"
    },
    {
      name: "Matheus Cláudio",
      image: "/lovable-uploads/cd4e09f3-0765-415c-b018-59d5dffc9698.png"
    },
    {
      name: "Luan Miyata",
      image: "/lovable-uploads/43c34112-dd8d-4178-83c9-299688722356.png"
    },
    {
      name: "Anna Clara Fengler",
      image: "/lovable-uploads/5b4f42a7-4972-4f23-b843-e49d4adf1303.png"
    }
  ];

  return (
    <section id="depoimentos" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-blue-50">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Nossos Alunos Aprovados
            </h2>
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
                    <div className="bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                      <div className="flex-1 flex items-center justify-center bg-gray-50">
                        <OptimizedImage
                          src={student.image}
                          alt={student.name}
                          className="w-full h-64 sm:h-80 md:h-96 lg:h-[450px] xl:h-[500px] object-contain"
                          width={450}
                          height={550}
                          priority={index === 0}
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />
                      </div>
                      <div className="p-3 sm:p-4 md:p-6">
                        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-800 leading-tight text-center mb-2 sm:mb-3">
                          {student.name}
                        </h3>
                        <div className="text-center">
                          <span className="px-3 sm:px-4 py-1 sm:py-2 bg-red-100 text-red-700 text-xs sm:text-sm font-medium rounded-full inline-block">
                            APROVADO
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-8 lg:-left-12" />
            <CarouselNext className="hidden md:flex -right-8 lg:-right-12" />
          </Carousel>

          <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 text-center">
            <div className="p-3 sm:p-4 md:p-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-red-600">95%</h3>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg">Taxa de Aprovação</p>
            </div>
            <div className="p-3 sm:p-4 md:p-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600">1000+</h3>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg">Alunos Aprovados</p>
            </div>
            <div className="p-3 sm:p-4 md:p-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-green-600">50+</h3>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg">Universidades</p>
            </div>
            <div className="p-3 sm:p-4 md:p-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-purple-600">21</h3>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg">Anos de Tradição</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
