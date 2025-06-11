
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
    }, 4000); // Increased from 3s to 4s for better UX

    return () => clearInterval(interval);
  }, [api]);

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
    },
    {
      name: "Ana Clara Souza Pavoni",
      image: "/lovable-uploads/1f5a261a-6444-4793-baa6-afa4956dd5e9.png"
    },
    {
      name: "Gabriela Pagnussat",
      image: "/lovable-uploads/ded2dc00-13ab-4eb8-a346-987b7d93d086.png"
    },
    {
      name: "José Victor Polizel",
      image: "/lovable-uploads/6b5df189-e011-4283-9be5-bfd59aff2d24.png"
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
            <CarouselContent className="-ml-2 md:-ml-4">
              {studentImages.map((student, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/3 lg:basis-1/4">
                  <div className="p-1 sm:p-2">
                    <OptimizedImage
                      src={student.image}
                      alt={student.name}
                      className="w-full h-auto rounded-lg shadow-lg hover-scale transition-transform duration-300"
                      width={300}
                      height={400}
                      priority={index < 4} // Preload first 4 images
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                    />
                    <p className="text-center mt-2 text-xs sm:text-sm text-gray-600 font-medium">{student.name}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-12" />
            <CarouselNext className="hidden sm:flex -right-12" />
          </Carousel>

          {/* Statistics */}
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
