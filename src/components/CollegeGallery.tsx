
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
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [api]);

  const collegeImages = [
    // Fachada do colégio
    {
      src: "/lovable-uploads/e184216c-7a3a-4233-9e6b-25748975871f.png",
      alt: "Fachada do Colégio Leibniz"
    },
    {
      src: "/lovable-uploads/bc48ba2d-00f3-4d05-8eaa-c6a90fac82e2.png",
      alt: "Vista externa do Colégio Leibniz"
    },
    {
      src: "/lovable-uploads/3fce4e95-adc0-4137-88a7-07d5fc5d853a.png",
      alt: "Fachada lateral do Colégio Leibniz"
    },
    {
      src: "/lovable-uploads/1e70538d-2aaa-4cdf-a14a-fb6bba03dbff.png",
      alt: "Entrada principal do Colégio Leibniz"
    },
    {
      src: "/lovable-uploads/43fb40dd-018a-40da-b5ac-a9161820b532.png",
      alt: "Vista geral do Colégio Leibniz"
    },
    // Laboratório de robótica
    {
      src: "/lovable-uploads/744f47e2-d92b-4c6d-869a-19832c9137b2.png",
      alt: "Laboratório de Robótica - Atividade em grupo"
    },
    {
      src: "/lovable-uploads/ff8ae830-5570-4d92-91dc-a628d9a5ea07.png",
      alt: "Laboratório de Robótica - Estudantes trabalhando"
    },
    {
      src: "/lovable-uploads/7423a40c-6f3d-4d7d-9973-21c7a3c1a901.png",
      alt: "Laboratório de Robótica - Mesa de trabalho"
    },
    {
      src: "/lovable-uploads/e7862eb8-26ca-4bd7-a8c8-762e82f81567.png",
      alt: "Laboratório de Robótica - Equipamentos"
    },
    {
      src: "/lovable-uploads/0de370e3-e936-4ab4-aaea-bf29a0cb4302.png",
      alt: "Laboratório de Robótica - Ambiente geral"
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
    {
      src: "/lovable-uploads/7d8ad68e-8e97-44bf-8b31-5206a130bb7c.png",
      alt: "Biblioteca - Mesa de leitura"
    },
    {
      src: "/lovable-uploads/2a0bab9b-519e-479e-8b46-e0237fa78fdb.png",
      alt: "Biblioteca - Ambiente de estudos"
    },
    {
      src: "/lovable-uploads/4c024769-a9ce-4393-95fe-6c9dd3ec9a67.png",
      alt: "Biblioteca - Vista geral"
    },
    // Atividades de robótica
    {
      src: "/lovable-uploads/b3723d45-a264-4843-b4d0-972b4248ed48.png",
      alt: "Robótica Educacional - Montagem de projetos"
    },
    {
      src: "/lovable-uploads/1c627c8b-a33f-40a7-8874-7251974f84f8.png",
      alt: "Robótica Educacional - Estudantes programando"
    },
    {
      src: "/lovable-uploads/d198bf33-8762-4383-8e14-11d19c41c264.png",
      alt: "Robótica Educacional - Trabalho em equipe"
    },
    {
      src: "/lovable-uploads/404e6516-885c-4a75-b6d0-63bcf2ae99dd.png",
      alt: "Robótica Educacional - Projeto em desenvolvimento"
    },
    {
      src: "/lovable-uploads/fffef8c8-7333-47c0-bb87-e8d611ef31ad.png",
      alt: "Robótica Educacional - Apresentação de projeto"
    },
    {
      src: "/lovable-uploads/6d28cb0b-afec-4460-8d5a-6bc12f427982.png",
      alt: "Robótica Educacional - Atividade prática"
    },
    {
      src: "/lovable-uploads/76fd015e-3b13-4dad-ac69-2a64077cd6ac.png",
      alt: "Robótica Educacional - Mesa de trabalho"
    },
    {
      src: "/lovable-uploads/edc952d5-b9be-4538-8ab1-518de9bfea74.png",
      alt: "Robótica Educacional - Construção de robôs"
    },
    {
      src: "/lovable-uploads/0efe3d3e-ae28-406d-909f-5e3005b0b790.png",
      alt: "Robótica Educacional - Programação"
    },
    {
      src: "/lovable-uploads/abf107dd-1170-4195-920d-7c3fb16dc74c.png",
      alt: "Robótica Educacional - Resultado final"
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
    {
      src: "/lovable-uploads/ddddefe2-e093-407d-84b9-afa08a8e5921.png",
      alt: "Auditório - Plateia"
    },
    {
      src: "/lovable-uploads/54c661a9-afc2-42a8-9e6b-97449b09c464.png",
      alt: "Auditório - Vista lateral"
    },
    {
      src: "/lovable-uploads/cff685be-0b22-48b2-8d79-757fa809f3f5.png",
      alt: "Auditório - Sistema de som e imagem"
    },
    // Corredor do Fundamental 2
    {
      src: "/lovable-uploads/aca46dea-1ef5-4fcb-a765-f2b73ee37a19.png",
      alt: "Corredor Fundamental 2 - Vista principal"
    },
    {
      src: "/lovable-uploads/5a719721-a1be-4350-a778-bf16da792606.png",
      alt: "Corredor Fundamental 2 - Área de circulação"
    },
    {
      src: "/lovable-uploads/a463fe68-c2d3-4f63-bfb2-5883d43bbe5e.png",
      alt: "Corredor Fundamental 2 - Entrada das salas"
    },
    {
      src: "/lovable-uploads/7e951399-c37f-4736-9f36-46470bb77e0f.png",
      alt: "Corredor Fundamental 2 - Ambiente escolar"
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
                        priority={index === 0}
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
