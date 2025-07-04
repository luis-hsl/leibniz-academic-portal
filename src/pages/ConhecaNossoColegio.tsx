import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";
import OptimizedAnalytics from "@/components/OptimizedAnalytics";

const ConhecaNossoColegio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    {
      src: "/lovable-uploads/e184216c-7a3a-4233-9e6b-25748975871f.png",
      alt: "Fachada principal do Colégio Leibniz",
      title: "Fachada Principal",
      description: "Nossa imponente entrada principal que acolhe todos os alunos diariamente"
    },
    {
      src: "/lovable-uploads/bc48ba2d-00f3-4d05-8eaa-c6a90fac82e2.png",
      alt: "Área externa e jardins do colégio",
      title: "Área Externa",
      description: "Amplos espaços verdes para recreação e atividades ao ar livre"
    },
    {
      src: "/lovable-uploads/744f47e2-d92b-4c6d-869a-19832c9137b2.png",
      alt: "Laboratório de ciências moderno",
      title: "Laboratório de Ciências",
      description: "Equipamentos modernos para experimentos e aprendizado prático"
    },
    {
      src: "/lovable-uploads/4f312db7-f2f6-44a1-a91e-24eb6e23ea95.png",
      alt: "Sala de aula equipada com tecnologia",
      title: "Sala de Aula",
      description: "Ambientes climatizados e tecnológicos para o melhor aprendizado"
    },
    {
      src: "/lovable-uploads/5a719721-a1be-4350-a778-bf16da792606.png",
      alt: "Biblioteca com acervo completo",
      title: "Biblioteca",
      description: "Acervo completo e ambiente de estudos silencioso"
    },
    {
      src: "/lovable-uploads/a6ce93cf-11cd-4356-b75f-6824b92f3a06.png",
      alt: "Auditório para eventos e apresentações",
      title: "Auditório",
      description: "Espaço para eventos, palestras e apresentações culturais"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Conheça Nosso Colégio - Colégio Leibniz"
        description="Infraestrutura moderna e ambiente acolhedor para o desenvolvimento integral dos nossos alunos. Explore nossas instalações, laboratórios, biblioteca e auditório."
        keywords="infraestrutura, instalações, laboratórios, biblioteca, auditório, colégio leibniz"
      />
      <OptimizedAnalytics />
      <Header />
      
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Conheça Nosso Colégio
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
                Infraestrutura moderna e ambiente acolhedor para o desenvolvimento integral dos nossos alunos. 
                Explore nossas instalações, laboratórios, biblioteca, auditório e espaços educacionais.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {images.map((image, index) => (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white"
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {image.title}
                      </h3>
                      <p className="text-sm opacity-90 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 md:mt-20 bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Nossa Infraestrutura
                </h2>
                <p className="text-lg text-gray-600">
                  Espaços pensados para proporcionar a melhor experiência educacional
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Salas Climatizadas",
                    description: "Ambiente confortável para o aprendizado",
                    icon: "🏫"
                  },
                  {
                    title: "Laboratórios Modernos",
                    description: "Equipamentos de última geração",
                    icon: "🔬"
                  },
                  {
                    title: "Biblioteca Completa",
                    description: "Acervo atualizado e espaço de estudos",
                    icon: "📚"
                  },
                  {
                    title: "Auditório",
                    description: "Para eventos e apresentações",
                    icon: "🎭"
                  },
                  {
                    title: "Áreas de Convivência",
                    description: "Espaços para socialização",
                    icon: "🌳"
                  },
                  {
                    title: "Segurança Total",
                    description: "Monitoramento 24h",
                    icon: "🔒"
                  }
                ].map((feature, index) => (
                  <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ConhecaNossoColegio;