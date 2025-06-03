
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Lightbulb, Users, Award, BookOpen } from "lucide-react";

const SobreNos = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-red-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Sobre o Colégio Leibniz</h1>
            <p className="text-xl leading-relaxed">
              Uma instituição comprometida com a excelência educacional e o desenvolvimento integral dos nossos alunos desde 2019.
            </p>
          </div>
        </div>
      </section>

      {/* História */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold text-red-600 mb-6">Nossa História</h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Fundado em 2019, o Colégio Leibniz nasceu da fusão com a Vest Plus Cursos, 
                  trazendo mais de 21 anos de experiência educacional. Nossa instituição 
                  representa a união entre tradição pedagógica e inovação metodológica, 
                  sempre com foco na excelência acadêmica e no desenvolvimento humano.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Ao longo dos anos, construímos uma reputação sólida baseada na qualidade 
                  do ensino, no cuidado com cada aluno e na preparação eficaz para os 
                  principais vestibulares do país, incluindo o ENEM.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossos Pilares</h2>
              <p className="text-xl text-gray-600">Os valores que norteiam todas as nossas ações</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-blue-600 text-white hover:scale-105 transition-transform">
                <CardContent className="p-6 text-center">
                  <Target className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
                  <h3 className="text-xl font-bold mb-3">Missão</h3>
                  <p className="text-blue-100">
                    Oferecer educação de qualidade e alta performance, preparando alunos 
                    para os desafios acadêmicos e da vida.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-green-600 text-white hover:scale-105 transition-transform">
                <CardContent className="p-6 text-center">
                  <Eye className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
                  <h3 className="text-xl font-bold mb-3">Visão</h3>
                  <p className="text-green-100">
                    Ser referência no ensino de qualidade, com foco em aprovações 
                    em universidades de excelência.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-red-600 text-white hover:scale-105 transition-transform">
                <CardContent className="p-6 text-center">
                  <Heart className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
                  <h3 className="text-xl font-bold mb-3">Valores</h3>
                  <p className="text-red-100">
                    Excelência, respeito, integridade, inovação e empatia 
                    norteiam todas as nossas ações.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-purple-600 text-white hover:scale-105 transition-transform">
                <CardContent className="p-6 text-center">
                  <Lightbulb className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
                  <h3 className="text-xl font-bold mb-3">Metodologia</h3>
                  <p className="text-purple-100">
                    Sistema Bernoulli de Ensino com metodologias inovadoras 
                    e corpo docente especializado.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossos Diferenciais</h2>
              <p className="text-xl text-gray-600">O que nos torna únicos na educação</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="shadow-lg">
                <CardContent className="p-8 text-center">
                  <Users className="h-16 w-16 mx-auto mb-4 text-blue-600" />
                  <h3 className="text-xl font-bold mb-4">Corpo Docente Qualificado</h3>
                  <p className="text-gray-600">
                    Professores especialistas e experientes, dedicados ao sucesso de cada aluno.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-8 text-center">
                  <Award className="h-16 w-16 mx-auto mb-4 text-green-600" />
                  <h3 className="text-xl font-bold mb-4">Resultados Comprovados</h3>
                  <p className="text-gray-600">
                    Altos índices de aprovação nos principais vestibulares e ENEM.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-8 text-center">
                  <BookOpen className="h-16 w-16 mx-auto mb-4 text-red-600" />
                  <h3 className="text-xl font-bold mb-4">Metodologia Inovadora</h3>
                  <p className="text-gray-600">
                    Sistema Bernoulli aliado a práticas pedagógicas modernas e eficazes.
                  </p>
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

export default SobreNos;
