import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import OptimizedImage from "./OptimizedImage";
import {
  areaExternaImages,
  roboticsImages,
  cantinaImages,
  laboratorisFisicaQuimicaImages,
  laboratorioTecnologiaImages,
  bibliotecaImages,
  auditoriumImages,
  fundamental2CorridorImages
} from "@/data/dependenciasData";

const CollegeGallery = () => {
  const [api, setApi] = useState<any>();

  // Auto-play functionality
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  // Combine all dependency images into one array - prioritizing external area images
  const allDependencyImages = [
    ...areaExternaImages,
    ...roboticsImages,
    ...cantinaImages,
    ...laboratorisFisicaQuimicaImages,
    ...laboratorioTecnologiaImages,
    ...bibliotecaImages,
    ...auditoriumImages,
    ...fundamental2CorridorImages
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Conheça Nosso Colégio</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
              Infraestrutura moderna e ambiente acolhedor para o desenvolvimento integral dos nossos alunos. Explore nossas instalações, laboratórios, biblioteca, auditório e espaços educacionais.
            </p>
          </div>

          <Carousel
            setApi={setApi}
            className="w-full max-w-6xl mx-auto relative"
            opts={{
              align: "center",
              loop: true,
              skipSnaps: false,
              dragFree: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {allDependencyImages.map((image, index) => (
                <CarouselItem key={`${image.title}-${index}`} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="relative rounded-xl overflow-hidden shadow-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl bg-white">
                      <OptimizedImage
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover"
                        width={400}
                        height={300}
                        priority={index < 8}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 md:p-6">
                        <h3 className="text-white font-semibold text-lg md:text-xl lg:text-2xl leading-tight">
                          {image.title}
                        </h3>
                        <p className="text-white/70 text-sm md:text-base mt-2">
                          {index + 1} de {allDependencyImages.length}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation arrows - melhorados para mobile */}
            <CarouselPrevious className="absolute -left-4 md:-left-8 lg:-left-16 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-2 border-gray-200 hover:border-gray-300 shadow-xl w-12 h-12 md:w-16 md:h-16" />
            <CarouselNext className="absolute -right-4 md:-right-8 lg:-right-16 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-2 border-gray-200 hover:border-gray-300 shadow-xl w-12 h-12 md:w-16 md:h-16" />
          </Carousel>

          {/* Mobile indicators and instructions */}
          <div className="flex flex-col items-center mt-8 md:mt-12 space-y-4">
            {/* Dots indicator for mobile */}
            <div className="flex justify-center space-x-2 md:hidden">
              {allDependencyImages.slice(0, 5).map((_, index) => (
                <div 
                  key={index}
                  className="w-3 h-3 rounded-full bg-gray-300"
                />
              ))}
              <span className="text-sm text-gray-500 ml-3">+{allDependencyImages.length - 5}</span>
            </div>
            
            {/* Touch instructions for mobile */}
            <div className="text-center md:hidden px-4">
              <p className="text-base text-gray-600 font-medium">
                👈 Deslize para ver mais imagens 👉
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Use as setas ou arraste para navegar pelas fotos
              </p>
              <p className="text-sm text-gray-600 mt-2 font-medium">
                Total: {allDependencyImages.length} imagens
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollegeGallery;
