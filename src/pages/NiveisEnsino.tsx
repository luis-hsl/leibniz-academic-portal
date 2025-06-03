
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Baby, BookOpen, GraduationCap, Trophy, Palette, Clock, Users, Target } from "lucide-react";

const NiveisEnsino = () => {
  const levels = [
    {
      icon: Baby,
      title: "Ensino Infantil",
      description: "Ambiente acolhedor com metodologias lúdicas para desenvolvimento integral das crianças.",
      color: "bg-pink-500",
      details: "Atividades que estimulam criatividade, coordenação motora e habilidades sociais.",
      features: [
        "Atividades lúdicas e educativas",
        "Desenvolvimento da coordenação motora",
        "Estímulo à criatividade",
        "Socialização e trabalho em equipe"
      ]
    },
    {
      icon: BookOpen,
      title: "Ensino Fundamental I e II",
      description: "Abordagens pedagógicas dinâmicas, promovendo habilidades cognitivas e socioemocionais.",
      color: "bg-blue-500",
      details: "Base sólida para o desenvolvimento acadêmico e pessoal dos estudantes.",
      features: [
        "Currículo completo e atualizado",
        "Metodologias ativas de aprendizagem",
        "Desenvolvimento socioemocional",
        "Preparação para o Ensino Médio"
      ]
    },
    {
      icon: GraduationCap,
      title: "Ensino Médio",
      description: "Foco no conhecimento acadêmico e desenvolvimento pessoal, preparando para o ENEM e vestibulares.",
      color: "bg-green-500",
      details: "Preparação intensiva com metodologia Bernoulli para os principais vestibulares.",
      features: [
        "Sistema Bernoulli de Ensino",
        "Preparação para ENEM e vestibulares",
        "Orientação vocacional",
        "Simulados regulares"
      ]
    },
    {
      icon: Trophy,
      title: "Preparatório ENEM/Vestibulares",
      description: "Metodologias inovadoras e corpo docente especializado para máxima performance.",
      color: "bg-red-500",
      details: "Simulados, revisões intensivas e acompanhamento personalizado.",
      features: [
        "Simulados semanais",
        "Revisões intensivas",
        "Acompanhamento individualizado",
        "Foco em aprovação"
      ]
    },
    {
      icon: Palette,
      title: "Cursos Extracurriculares",
      description: "Variedade de opções para desenvolvimento de paixões e habilidades complementares.",
      color: "bg-purple-500",
      details: "Artes, esportes, idiomas e atividades culturais para formação integral.",
      features: [
        "Atividades artísticas",
        "Práticas esportivas",
        "Idiomas estrangeiros",
        "Projetos culturais"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Níveis de Ensino</h1>
            <p className="text-xl leading-relaxed">
              Do Ensino Infantil aos Preparatórios para Vestibulares, oferecemos educação de excelência em todos os níveis.
            </p>
          </div>
        </div>
      </section>

      {/* Níveis de Ensino */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-12">
              {levels.map((level, index) => (
                <Card key={index} className="shadow-lg border-0 overflow-hidden">
                  <div className="grid lg:grid-cols-2">
                    <CardHeader className={`${level.color} text-white p-8 lg:p-12`}>
                      <div className="flex items-center space-x-4 mb-6">
                        <level.icon className="h-12 w-12" />
                        <CardTitle className="text-3xl">{level.title}</CardTitle>
                      </div>
                      <p className="text-lg opacity-90 mb-6">
                        {level.description}
                      </p>
                      <p className="italic opacity-80">
                        {level.details}
                      </p>
                    </CardHeader>
                    <CardContent className="p-8 lg:p-12">
                      <h4 className="text-xl font-bold text-gray-900 mb-6">Características:</h4>
                      <ul className="space-y-3">
                        {level.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <Target className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
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

export default NiveisEnsino;
