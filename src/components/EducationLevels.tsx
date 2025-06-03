
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Baby, BookOpen, GraduationCap, Trophy, Palette } from "lucide-react";

const EducationLevels = () => {
  const levels = [
    {
      icon: Baby,
      title: "Ensino Infantil",
      description: "Ambiente acolhedor com metodologias lúdicas para desenvolvimento integral das crianças.",
      color: "bg-pink-500",
      details: "Atividades que estimulam criatividade, coordenação motora e habilidades sociais."
    },
    {
      icon: BookOpen,
      title: "Ensino Fundamental I e II",
      description: "Abordagens pedagógicas dinâmicas, promovendo habilidades cognitivas e socioemocionais.",
      color: "bg-blue-500",
      details: "Base sólida para o desenvolvimento acadêmico e pessoal dos estudantes."
    },
    {
      icon: GraduationCap,
      title: "Ensino Médio",
      description: "Foco no conhecimento acadêmico e desenvolvimento pessoal, preparando para o ENEM e vestibulares.",
      color: "bg-green-500",
      details: "Preparação intensiva com metodologia Bernoulli para os principais vestibulares."
    },
    {
      icon: Trophy,
      title: "Preparatório ENEM/Vestibulares",
      description: "Metodologias inovadoras e corpo docente especializado para máxima performance.",
      color: "bg-red-500",
      details: "Simulados, revisões intensivas e acompanhamento personalizado."
    },
    {
      icon: Palette,
      title: "Cursos Extracurriculares",
      description: "Variedade de opções para desenvolvimento de paixões e habilidades complementares.",
      color: "bg-purple-500",
      details: "Artes, esportes, idiomas e atividades culturais para formação integral."
    }
  ];

  return (
    <section id="ensino" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Níveis de Ensino</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Do Ensino Infantil aos Preparatórios para Vestibulares, oferecemos educação de excelência em todos os níveis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {levels.map((level, index) => (
              <Card key={index} className="hover-scale shadow-lg border-0 overflow-hidden">
                <CardHeader className={`${level.color} text-white`}>
                  <div className="flex items-center space-x-3">
                    <level.icon className="h-8 w-8" />
                    <CardTitle className="text-xl">{level.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {level.description}
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    {level.details}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationLevels;
