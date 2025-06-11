
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
            className="w-full max-w-5xl mx-auto"
            opts={{
              align: "center",
              loop: true,
              skipSnaps: false,
              dragFree: true,
            }}
          >
            <CarouselContent className="-ml-1 sm:-ml-2 md:-ml-4">
              {allDependencyImages.map((image, index) => (
                <CarouselItem key={index} className="pl-1 sm:pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/2">
                  <div className="p-1 sm:p-2">
                    <div className="relative rounded-lg overflow-hidden shadow-lg transition-transform duration-300">
                      <OptimizedImage
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
                        width={600}
                        height={400}
                        priority={index < 3} // First 3 images get priority
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 sm:p-4">
                        <h3 className="text-white font-semibold text-xs sm:text-sm md:text-base">
                          {image.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 sm:-left-8 md:-left-12" />
            <CarouselNext className="-right-4 sm:-right-8 md:-right-12" />
          </Carousel>

          {/* Mobile touch indicators */}
          <div className="flex justify-center mt-4 sm:hidden">
            <p className="text-sm text-gray-500 text-center px-4">
              👈 Deslize para ver mais imagens 👉
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollegeGallery;
