
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Users, BookOpen, Award, Clock, MapPin, Phone, Mail } from "lucide-react";

const OColegio = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">O Colégio Leibniz</h1>
            <p className="text-xl leading-relaxed">
              Conheça nossa estrutura, metodologia e tudo que oferecemos para proporcionar a melhor educação.
            </p>
          </div>
        </div>
      </section>

      {/* Infraestrutura */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Estrutura Completa</h2>
              <p className="text-xl text-gray-600">Ambiente preparado para o melhor aprendizado</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="shadow-lg hover:scale-105 transition-transform">
                <CardContent className="p-8 text-center">
                  <Building className="h-16 w-16 mx-auto mb-4 text-blue-600" />
                  <h3 className="text-xl font-bold mb-4">Salas Modernas</h3>
                  <p className="text-gray-600">
                    Salas climatizadas com equipamentos audiovisuais de última geração.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:scale-105 transition-transform">
                <CardContent className="p-8 text-center">
                  <BookOpen className="h-16 w-16 mx-auto mb-4 text-green-600" />
                  <h3 className="text-xl font-bold mb-4">Biblioteca</h3>
                  <p className="text-gray-600">
                    Acervo completo e ambiente de estudos silencioso e aconchegante.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:scale-105 transition-transform">
                <CardContent className="p-8 text-center">
                  <Users className="h-16 w-16 mx-auto mb-4 text-purple-600" />
                  <h3 className="text-xl font-bold mb-4">Laboratórios</h3>
                  <p className="text-gray-600">
                    Laboratórios de ciências e informática totalmente equipados.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Sistema Bernoulli</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Utilizamos o renomado Sistema Bernoulli de Ensino, reconhecido nacionalmente 
                  pela excelência em preparação para vestibulares e ENEM.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Award className="h-6 w-6 text-green-500 mr-3 mt-1" />
                    <span className="text-gray-700">Material didático atualizado e completo</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-6 w-6 text-green-500 mr-3 mt-1" />
                    <span className="text-gray-700">Metodologia comprovadamente eficaz</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-6 w-6 text-green-500 mr-3 mt-1" />
                    <span className="text-gray-700">Simulados regulares e análise de desempenho</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-6 w-6 text-green-500 mr-3 mt-1" />
                    <span className="text-gray-700">Acompanhamento pedagógico individualizado</span>
                  </li>
                </ul>
              </div>
              <Card className="bg-blue-50 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">Por que Bernoulli?</h3>
                  <p className="text-gray-700 mb-4">
                    O Sistema Bernoulli é reconhecido como um dos melhores métodos de ensino 
                    do Brasil, com resultados excepcionais em aprovações.
                  </p>
                  <p className="text-gray-700">
                    Nossa parceria garante que nossos alunos tenham acesso ao que há de 
                    melhor em educação preparatória.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Informações Gerais */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Informações Gerais</h2>
              <p className="text-xl text-gray-600">Tudo que você precisa saber sobre o Colégio Leibniz</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Localização</h3>
                      <p className="text-gray-600">
                        Avenida Paulista, 720<br />
                        Parque Sagrada Família<br />
                        Rondonópolis - MT, 78735-223
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Horários</h3>
                      <div className="space-y-1 text-gray-600">
                        <p>Segunda a Sexta: 7h às 22h</p>
                        <p>Sábado: 7h às 12h</p>
                        <p>Domingo: Fechado</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Contatos</h3>
                      <div className="space-y-1 text-gray-600">
                        <p>📞 (66) 3421-8824</p>
                        <p>📱 (66) 99678-1284</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">E-mail</h3>
                      <p className="text-gray-600">admleibniz@gmail.com</p>
                    </div>
                  </div>
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
