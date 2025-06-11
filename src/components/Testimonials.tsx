
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
    <section id="depoimentos" className="py-12 sm:py-16 md:py-20 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Nossos Alunos Aprovados</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Conheça alguns dos nossos alunos que realizaram o sonho da aprovação nas melhores universidades.
            </p>
          </div>

          <Carousel
            setApi={setApi}
            className="w-full max-w-5xl mx-auto"
            opts={{
              align: "center",
              loop: true,
              skipSnaps: false,
              dragFree: false,
            }}
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {studentImages.map((student, index) => (
                <CarouselItem key={index} className="pl-4 md:pl-6 basis-1/2 md:basis-1/3 lg:basis-1/3">
                  <div className="p-2 sm:p-3">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                      <div className="flex-1 flex items-center justify-center bg-gray-50">
                        <OptimizedImage
                          src={student.image}
                          alt={student.name}
                          className="w-full h-80 sm:h-96 md:h-[400px] lg:h-[500px] object-contain"
                          width={400}
                          height={500}
                          priority={index === 0}
                          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 33vw, 33vw"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-800 leading-tight text-center">
                          {student.name}
                        </h3>
                        <div className="mt-3 text-center">
                          <span className="px-4 py-2 bg-red-100 text-red-700 text-sm font-medium rounded-full inline-block">
                            APROVADO
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-12" />
            <CarouselNext className="hidden sm:flex -right-12" />
          </Carousel>

          <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
            <div className="p-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-red-600">95%</h3>
              <p className="text-gray-600 text-sm sm:text-base">Taxa de Aprovação</p>
            </div>
            <div className="p-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-600">1000+</h3>
              <p className="text-gray-600 text-sm sm:text-base">Alunos Aprovados</p>
            </div>
            <div className="p-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-green-600">50+</h3>
              <p className="text-gray-600 text-sm sm:text-base">Universidades</p>
            </div>
            <div className="p-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-purple-600">21</h3>
              <p className="text-gray-600 text-sm sm:text-base">Anos de Tradição</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
