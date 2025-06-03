
import { Button } from "@/components/ui/button";
import { Star, Award, Users, BookOpen } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/5566996781284", "_blank");
  };

  return (
    <section 
      id="inicio" 
      className="relative text-white py-20"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/lovable-uploads/2784febf-3d6e-4519-a30c-fc0df6826ec8.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Prepare-se para o 
            <span className="text-yellow-300 block">Sucesso Acadêmico</span>
            no Colégio Leibniz
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in">
            Sistema Bernoulli de Ensino, tradição e referência em vestibulares e preparatórios para o ENEM.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={() => scrollToSection("agendar")}
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-4 hover-scale"
            >
              Agende uma Visita
            </Button>
            <Button 
              onClick={openWhatsApp}
              variant="outline"
              size="lg"
              className="border-white text-black bg-white text-lg px-8 py-4"
            >
              Fale com um Atendente
            </Button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-yellow-300" />
              </div>
              <h3 className="text-2xl font-bold">21+</h3>
              <p className="text-blue-100">Anos de Experiência</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-green-300" />
              </div>
              <h3 className="text-2xl font-bold">1000+</h3>
              <p className="text-blue-100">Alunos Aprovados</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-blue-300" />
              </div>
              <h3 className="text-2xl font-bold">5</h3>
              <p className="text-blue-100">Níveis de Ensino</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-8 w-8 text-yellow-300" />
              </div>
              <h3 className="text-2xl font-bold">95%</h3>
              <p className="text-blue-100">Taxa de Aprovação</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
