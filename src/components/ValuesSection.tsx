import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, BookOpen, Users, Lightbulb, Shield } from "lucide-react";

const ValuesSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Humanização",
      description: "Valorizamos o desenvolvimento integral do ser humano, priorizando valores éticos e morais em nossa educação."
    },
    {
      icon: Target,
      title: "Excelência",
      description: "Buscamos constantemente a excelência acadêmica e pedagógica em todos os nossos processos educacionais."
    },
    {
      icon: BookOpen,
      title: "Conhecimento",
      description: "Promovemos o amor pelo conhecimento e a curiosidade científica como pilares fundamentais da educação."
    },
    {
      icon: Users,
      title: "Colaboração",
      description: "Incentivamos o trabalho em equipe e a construção coletiva do conhecimento entre alunos e professores."
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Integramos tecnologia e metodologias modernas para potencializar o processo de ensino-aprendizagem."
    },
    {
      icon: Shield,
      title: "Responsabilidade",
      description: "Formamos cidadãos conscientes de seus direitos e deveres na sociedade contemporânea."
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 font-montserrat">
              Nossos Valores
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-montserrat">
              Os princípios que norteiam nossa missão educacional e nos tornam referência em educação de qualidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="group hover-scale shadow-lg hover:shadow-2xl transition-all duration-500 border-0">
                  <CardContent className="p-6 md:p-8 text-center h-full flex flex-col">
                    <div className="bg-primary/10 p-6 md:p-8 rounded-full w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="h-10 w-10 md:h-12 md:w-12 text-primary" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 font-montserrat">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed font-montserrat flex-1">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;