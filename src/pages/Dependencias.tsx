
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import OptimizedImage from "@/components/OptimizedImage";
import { Card, CardContent } from "@/components/ui/card";

const Dependencias = () => {
  const exteriorImages = [
    {
      src: "/lovable-uploads/e184216c-7a3a-4233-9e6b-25748975871f.png",
      alt: "Fachada do Colégio Leibniz",
      title: "Fachada Principal"
    },
    {
      src: "/lovable-uploads/bc48ba2d-00f3-4d05-8eaa-c6a90fac82e2.png",
      alt: "Vista externa do Colégio Leibniz",
      title: "Vista Externa"
    },
    {
      src: "/lovable-uploads/3fce4e95-adc0-4137-88a7-07d5fc5d853a.png",
      alt: "Fachada lateral do Colégio Leibniz",
      title: "Fachada Lateral"
    },
    {
      src: "/lovable-uploads/1e70538d-2aaa-4cdf-a14a-fb6bba03dbff.png",
      alt: "Entrada principal do Colégio Leibniz",
      title: "Entrada Principal"
    },
    {
      src: "/lovable-uploads/43fb40dd-018a-40da-b5ac-a9161820b532.png",
      alt: "Vista geral do Colégio Leibniz",
      title: "Vista Geral"
    }
  ];

  const activityImages = [
    {
      src: "/lovable-uploads/cf73da90-9069-4857-a1c6-6417668d6778.png",
      alt: "Atividades com blocos de montar",
      title: "Atividades Lúdicas"
    },
    {
      src: "/lovable-uploads/f35e233f-387d-4720-8125-06b62238c93d.png",
      alt: "Projeto educacional com tecnologia",
      title: "Tecnologia Educacional"
    },
    {
      src: "/lovable-uploads/dbf03d17-eb84-4ba0-8fde-39c0efb382bc.png",
      alt: "Atividades de robótica",
      title: "Robótica Educacional"
    },
    {
      src: "/lovable-uploads/285522b2-b6c8-4b77-9656-1832cd7b74fe.png",
      alt: "Sala de atividades interativas",
      title: "Atividades Interativas"
    },
    {
      src: "/lovable-uploads/06505cf8-0420-4a4b-bb7d-a29359c05e65.png",
      alt: "Estudantes em atividade colaborativa",
      title: "Aprendizado Colaborativo"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-white">Nossas Dependências</h1>
            <p className="text-xl leading-relaxed text-white">
              Conheça os espaços modernos e equipados que proporcionam a melhor experiência educacional para nossos alunos.
            </p>
          </div>
        </div>
      </section>

      {/* Exterior Images Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Estrutura Externa</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nossa infraestrutura moderna e bem localizada oferece um ambiente seguro e acolhedor.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {exteriorImages.map((image, index) => (
                <Card key={index} className="hover-scale shadow-lg">
                  <CardContent className="p-0">
                    <OptimizedImage
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900">{image.title}</h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Atividades Educacionais</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Espaços dedicados ao desenvolvimento de habilidades através de atividades práticas e inovadoras.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activityImages.map((image, index) => (
                <Card key={index} className="hover-scale shadow-lg">
                  <CardContent className="p-0">
                    <OptimizedImage
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900">{image.title}</h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Dependencias;
