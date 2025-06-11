
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import OptimizedImage from "./OptimizedImage";

const CollegeGallery = () => {
  const [api, setApi] = useState<any>();

  // Auto-play functionality
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000); // Increased from 4s to 5s for better image loading

    return () => clearInterval(interval);
  }, [api]);

  // Reduced and optimized college images array - showing only the most important ones first
  const collegeImages = [
    // Fachada do colégio - most important
    {
      src: "/lovable-uploads/e184216c-7a3a-4233-9e6b-25748975871f.png",
      alt: "Fachada do Colégio Leibniz",
      priority: true
    },
    {
      src: "/lovable-uploads/bc48ba2d-00f3-4d05-8eaa-c6a90fac82e2.png",
      alt: "Vista externa do Colégio Leibniz",
      priority: true
    },
    // Laboratório de robótica - high priority
    {
      src: "/lovable-uploads/744f47e2-d92b-4c6d-869a-19832c9137b2.png",
      alt: "Laboratório de Robótica - Atividade em grupo"
    },
    {
      src: "/lovable-uploads/ff8ae830-5570-4d92-91dc-a628d9a5ea07.png",
      alt: "Laboratório de Robótica - Estudantes trabalhando"
    },
    // Biblioteca
    {
      src: "/lovable-uploads/bb09e5fc-f8d4-40c8-8cf7-b5321f19558a.png",
      alt: "Biblioteca - Área de estudos"
    },
    {
      src: "/lovable-uploads/f790d44d-4a8f-4a7c-905e-58638b0e5c20.png",
      alt: "Biblioteca - Estantes e livros"
    },
    // Auditório
    {
      src: "/lovable-uploads/93122a4c-90de-43d7-8075-925e0d78bffd.png",
      alt: "Auditório - Vista frontal"
    },
    {
      src: "/lovable-uploads/264df6ba-afd7-4ec7-a3d0-b05c4489b4ee.png",
      alt: "Auditório - Palco e projeção"
    },
    // Additional important spaces
    {
      src: "/lovable-uploads/3fce4e95-adc0-4137-88a7-07d5fc5d853a.png",
      alt: "Fachada lateral do Colégio Leibniz"
    },
    {
      src: "/lovable-uploads/1e70538d-2aaa-4cdf-a14a-fb6bba03dbff.png",
      alt: "Entrada principal do Colégio Leibniz"
    },
    {
      src: "/lovable-uploads/aca46dea-1ef5-4fcb-a765-f2b73ee37a19.png",
      alt: "Corredor Fundamental 2 - Vista principal"
    },
    {
      src: "/lovable-uploads/b3723d45-a264-4843-b4d0-972b4248ed48.png",
      alt: "Robótica Educacional - Montagem de projetos"
    }
  ];

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
              dragFree: false,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {collegeImages.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/2">
                  <div className="p-1 sm:p-2">
                    <div className="relative rounded-lg overflow-hidden shadow-lg hover-scale transition-transform duration-300">
                      <OptimizedImage
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-64 sm:h-80 md:h-96 object-cover"
                        width={600}
                        height={400}
                        priority={image.priority || index < 2} // Preload first 2 images or marked as priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-12" />
            <CarouselNext className="hidden sm:flex -right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CollegeGallery;
