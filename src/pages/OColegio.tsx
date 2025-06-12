import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import InstitutionalVideo from "@/components/InstitutionalVideo";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Building, Trophy, BookOpen } from "lucide-react";

const OColegio = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Sem título principal */}
      <section className="bg-gradient-to-r from-red-600 to-purple-600 text-white py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-white px-4 sm:px-0">
              Infraestrutura moderna, metodologia inovadora e ambiente acolhedor para o desenvolvimento integral dos nossos alunos.
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <InstitutionalVideo size="large" />

      {/* Infrastructure Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
                Espaços modernos e equipamentos de última geração para proporcionar a melhor experiência educacional.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
              <Card className="hover-scale shadow-lg hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="bg-blue-100 p-6 md:p-8 rounded-full w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 flex items-center justify-center">
                    <BookOpen className="h-10 w-10 md:h-12 md:w-12 text-blue-600" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Salas Modernas</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">Salas climatizadas com tecnologia audiovisual avançada.</p>
                </CardContent>
              </Card>

              <Card className="hover-scale shadow-lg hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="bg-green-100 p-6 md:p-8 rounded-full w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 flex items-center justify-center">
                    <Users className="h-10 w-10 md:h-12 md:w-12 text-green-600" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Laboratórios</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">Laboratórios de ciências e informática totalmente equipados.</p>
                </CardContent>
              </Card>

              <Card className="hover-scale shadow-lg hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="bg-red-100 p-6 md:p-8 rounded-full w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 flex items-center justify-center">
                    <Trophy className="h-10 w-10 md:h-12 md:w-12 text-red-600" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Quadra Esportiva</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">Espaço completo para atividades físicas e esportivas.</p>
                </CardContent>
              </Card>

              <Card className="hover-scale shadow-lg hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="bg-purple-100 p-6 md:p-8 rounded-full w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 flex items-center justify-center">
                    <Building className="h-10 w-10 md:h-12 md:w-12 text-purple-600" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Biblioteca</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">Acervo rico e ambiente propício para estudos.</p>
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
