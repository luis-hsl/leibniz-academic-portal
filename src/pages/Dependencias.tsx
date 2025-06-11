
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

  const cafeteriaImages = [
    {
      src: "/lovable-uploads/62af054d-f4c7-4390-97c5-5d01fae9cd02.png",
      alt: "Vista geral da cantina do colégio",
      title: "Cantina - Vista Geral"
    },
    {
      src: "/lovable-uploads/29b2ff3c-66d9-4e32-91ea-59d1ccaa7c34.png",
      alt: "Área de convivência da cantina",
      title: "Área de Convivência"
    },
    {
      src: "/lovable-uploads/a442947a-aec8-4b15-a88a-0fd80eb13319.png",
      alt: "Espaço da cantina com mesas",
      title: "Área de Alimentação"
    },
    {
      src: "/lovable-uploads/5cce79ec-901e-4fec-bacb-26dd7f1da01f.png",
      alt: "Vista lateral da cantina",
      title: "Vista Lateral da Cantina"
    },
    {
      src: "/lovable-uploads/fd22cc08-a2d0-4fe0-a710-65bdba10521b.png",
      alt: "Interior da cantina",
      title: "Interior da Cantina"
    }
  ];

  const laboratoryImages = [
    {
      src: "/lovable-uploads/16a1f204-d542-4654-83c4-55b68c82078e.png",
      alt: "Modelo anatômico no laboratório",
      title: "Modelos Anatômicos"
    },
    {
      src: "/lovable-uploads/31600a44-501e-4d74-b12c-31dac2d684b5.png",
      alt: "Equipamentos do laboratório de ciências",
      title: "Equipamentos Científicos"
    },
    {
      src: "/lovable-uploads/6adde15a-4b00-40b7-ae8a-0f6f9794083d.png",
      alt: "Vista completa do laboratório",
      title: "Laboratório de Ciências"
    },
    {
      src: "/lovable-uploads/b29218f7-e48d-4349-a4e0-ed1c1d8ece4d.png",
      alt: "Microscópio e equipamentos de laboratório",
      title: "Microscópios e Equipamentos"
    },
    {
      src: "/lovable-uploads/0f62b73d-0e16-4787-b968-7c26a7a95d88.png",
      alt: "Laboratório completo com esqueleto e equipamentos",
      title: "Laboratório Completo"
    }
  ];

  const roboticsLabImages = [
    {
      src: "/lovable-uploads/2a0bab9b-519e-479e-8b46-e0237fa78fdb.png",
      alt: "Laboratório de informática com notebooks",
      title: "Laboratório de Informática"
    },
    {
      src: "/lovable-uploads/7423a40c-6f3d-4d7d-9973-21c7a3c1a901.png",
      alt: "Espaço de tecnologia e robótica",
      title: "Espaço de Tecnologia"
    },
    {
      src: "/lovable-uploads/e7862eb8-26ca-4bd7-a8c8-762e82f81567.png",
      alt: "Notebooks para atividades de programação",
      title: "Estação de Programação"
    },
    {
      src: "/lovable-uploads/0de370e3-e936-4ab4-aaea-bf29a0cb4302.png",
      alt: "Mesa colaborativa com notebooks",
      title: "Mesa Colaborativa"
    },
    {
      src: "/lovable-uploads/bb09e5fc-f8d4-40c8-8cf7-b5321f19558a.png",
      alt: "Área de trabalho em grupo",
      title: "Área de Trabalho em Grupo"
    }
  ];

  const libraryImages = [
    {
      src: "/lovable-uploads/4c024769-a9ce-4393-95fe-6c9dd3ec9a67.png",
      alt: "Área de estudos da biblioteca",
      title: "Área de Estudos"
    },
    {
      src: "/lovable-uploads/f790d44d-4a8f-4a7c-905e-58638b0e5c20.png",
      alt: "Mesas de estudo individuais",
      title: "Mesas de Estudo Individuais"
    },
    {
      src: "/lovable-uploads/7d8ad68e-8e97-44bf-8b31-5206a130bb7c.png",
      alt: "Espaço de leitura e pesquisa",
      title: "Espaço de Leitura"
    },
    {
      src: "/lovable-uploads/744f47e2-d92b-4c6d-869a-19832c9137b2.png",
      alt: "Área de estudos com acervo",
      title: "Área de Estudos com Acervo"
    },
    {
      src: "/lovable-uploads/ff8ae830-5570-4d92-91dc-a628d9a5ea07.png",
      alt: "Vista geral da biblioteca",
      title: "Vista Geral da Biblioteca"
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

      {/* Robotics Lab Section */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Laboratório de Robótica e Informática</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Espaços modernos equipados com tecnologia de ponta para desenvolver habilidades em programação e robótica.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {roboticsLabImages.map((image, index) => (
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

      {/* Library Section */}
      <section className="py-20 bg-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Biblioteca</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Um ambiente tranquilo e organizado para estudos, pesquisas e desenvolvimento do hábito da leitura.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {libraryImages.map((image, index) => (
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

      {/* Cafeteria Section */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Cantina</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ambiente acolhedor e moderno para alimentação e convivência dos estudantes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cafeteriaImages.map((image, index) => (
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

      {/* Laboratory Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Laboratório de Química e Física</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Laboratórios totalmente equipados para experimentos e estudos práticos de ciências.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {laboratoryImages.map((image, index) => (
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
