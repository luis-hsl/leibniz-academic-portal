
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

  // Combine all dependency images into one array
  const allDependencyImages = [
    // Área Externa
    ...areaExternaImages,
    // Robótica
    ...roboticsImages,
    // Cantina
    ...cantinaImages,
    // Laboratórios de Física e Química
    ...laboratorisFisicaQuimicaImages,
    // Laboratório de Tecnologia
    ...laboratorioTecnologiaImages,
    // Biblioteca
    ...bibliotecaImages,
    // Auditório
    ...auditoriumImages,
    // Corredor do Fundamental II
    ...fundamental2CorridorImages
  ].filter(image => 
    // Remove as imagens especificadas pelo usuário
    !image.title.toLowerCase().includes('infraestrutura completa') &&
    !image.title.toLowerCase().includes('design e conforto')
  );

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Conheça Nosso Colégio</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Infraestrutura moderna e ambiente acolhedor para o desenvolvimento integral dos nossos alunos. Explore nossas instalações, laboratórios, biblioteca, auditório e espaços educacionais.
            </p>
          </div>

          <Carousel
            setApi={setApi}
            className="w-full max-w-5xl mx-auto relative"
            opts={{
              align: "center",
              loop: true,
              skipSnaps: false,
              dragFree: true,
            }}
          >
            <CarouselContent className="-ml-1 sm:-ml-2 md:-ml-4">
              {allDependencyImages.map((image, index) => (
                <CarouselItem key={index} className="pl-1 sm:pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="p-1 sm:p-2">
                    <div className="relative rounded-lg overflow-hidden shadow-lg transition-transform duration-300 bg-white">
                      <OptimizedImage
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
                        width={400}
                        height={300}
                        priority={index < 6} // First 6 images get priority
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 sm:p-4">
                        <h3 className="text-white font-semibold text-sm sm:text-base md:text-lg leading-tight">
                          {image.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation arrows - visible on all screen sizes */}
            <CarouselPrevious className="absolute -left-2 sm:-left-4 md:-left-8 lg:-left-12 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-2 border-gray-200 hover:border-gray-300 shadow-lg w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
            <CarouselNext className="absolute -right-2 sm:-right-4 md:-right-8 lg:-right-12 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-2 border-gray-200 hover:border-gray-300 shadow-lg w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
          </Carousel>

          {/* Mobile indicators and instructions */}
          <div className="flex flex-col items-center mt-6 sm:mt-8 space-y-3">
            {/* Dots indicator for mobile */}
            <div className="flex justify-center space-x-2 sm:hidden">
              {allDependencyImages.slice(0, 5).map((_, index) => (
                <div 
                  key={index}
                  className="w-2 h-2 rounded-full bg-gray-300"
                />
              ))}
              <span className="text-xs text-gray-500 ml-2">+{allDependencyImages.length - 5}</span>
            </div>
            
            {/* Touch instructions for mobile */}
            <div className="text-center sm:hidden">
              <p className="text-sm text-gray-500 px-4">
                👈 Deslize para ver mais imagens 👉
              </p>
              <p className="text-xs text-gray-400 mt-1 px-4">
                Use as setas ou arraste para navegar pelas fotos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollegeGallery;
