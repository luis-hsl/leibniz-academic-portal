import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Trophy } from "lucide-react";

const UniversityApproval = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-green-600 to-green-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 md:mb-12">
            <GraduationCap className="h-16 w-16 md:h-20 md:w-20 mx-auto mb-6 text-white" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Aprovação nas Melhores Universidades
            </h2>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Aqui, você conquista sua vaga nas maiores e mais respeitadas universidades do país.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover-scale">
              <CardContent className="p-6 text-center">
                <Trophy className="h-12 w-12 mx-auto mb-4 text-white" />
                <h3 className="text-xl font-bold text-white mb-3">Universidades Federais</h3>
                <p className="text-green-100">
                  Aprovações em UFMT, UFMS, UFG, UnB e outras instituições federais de prestígio.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover-scale">
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 mx-auto mb-4 text-white" />
                <h3 className="text-xl font-bold text-white mb-3">Universidades Privadas</h3>
                <p className="text-green-100">
                  Conquistas em PUC, Mackenzie, FGV e outras renomadas instituições privadas.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover-scale">
              <CardContent className="p-6 text-center">
                <GraduationCap className="h-12 w-12 mx-auto mb-4 text-white" />
                <h3 className="text-xl font-bold text-white mb-3">Cursos Concorridos</h3>
                <p className="text-green-100">
                  Medicina, Direito, Engenharia, Odontologia e outros cursos de alta concorrência.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniversityApproval;