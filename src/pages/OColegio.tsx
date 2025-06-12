
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Building, Trophy, BookOpen, Play } from "lucide-react";

const OColegio = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-white">O Colégio</h1>
            <p className="text-xl leading-relaxed text-white">
              Infraestrutura moderna, metodologia inovadora e ambiente acolhedor para o desenvolvimento integral dos nossos alunos.
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Play className="h-8 w-8 text-red-600" />
                <h2 className="text-4xl font-bold text-gray-900">Vídeo Institucional</h2>
              </div>
              <p className="text-xl text-gray-600">
                Conheça mais sobre o Colégio Leibniz através do nosso vídeo institucional
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/07a2eF2caOo"
                  title="Vídeo Institucional - Colégio Leibniz"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Colégio Leibniz - Excelência em Educação
                </h3>
                <p className="text-gray-600">
                  Descubra nossa metodologia de ensino, infraestrutura moderna e o comprometimento 
                  com a formação integral dos nossos alunos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossa Infraestrutura</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Espaços modernos e equipamentos de última geração para proporcionar a melhor experiência educacional.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="hover-scale shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Salas Modernas</h3>
                  <p className="text-gray-600">Salas climatizadas com tecnologia audiovisual avançada.</p>
                </CardContent>
              </Card>

              <Card className="hover-scale shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Laboratórios</h3>
                  <p className="text-gray-600">Laboratórios de ciências e informática totalmente equipados.</p>
                </CardContent>
              </Card>

              <Card className="hover-scale shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Trophy className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Quadra Esportiva</h3>
                  <p className="text-gray-600">Espaço completo para atividades físicas e esportivas.</p>
                </CardContent>
              </Card>

              <Card className="hover-scale shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Building className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Biblioteca</h3>
                  <p className="text-gray-600">Acervo rico e ambiente propício para estudos.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default OColegio;
