import InteractiveDependencyCard from "./InteractiveDependencyCard";
import {
  areaExternaImages,
  roboticsImages,
  cantinaImages,
  laboratorisFisicaQuimicaImages,
  laboratorioTecnologiaImages,
  bibliotecaImages,
  auditoriumImages,
  fundamental2CorridorImages
} from "@/data/dependenciasData";

const dependencies = [
  {
    title: "Área Externa",
    description: "Nossa área externa foi projetada para oferecer um ambiente acolhedor e moderno, com amplos espaços verdes, paisagismo cuidadoso e uma arquitetura que reflete nossa identidade educacional. Um espaço que inspira o aprendizado desde o primeiro olhar.",
    images: areaExternaImages
  },
  {
    title: "Laboratório de Robótica",
    description: "Nosso laboratório de robótica oferece um ambiente inovador onde os alunos desenvolvem habilidades em programação, engenharia e trabalho em equipe. Com kits educacionais modernos e tecnologia de ponta, promovemos o aprendizado STEAM de forma prática e divertida.",
    images: roboticsImages
  },
  {
    title: "Cantina",
    description: "Nossa cantina oferece um ambiente amplo, moderno e acolhedor onde os alunos podem fazer suas refeições com conforto e segurança. Com design colorido e funcional, o espaço conta com mesas organizadas, boa iluminação e um balcão de atendimento que garante praticidade no dia a dia escolar.",
    images: cantinaImages
  },
  {
    title: "Laboratório de Ciências",
    description: "Nosso laboratório de física e química está equipado com modernos instrumentos científicos, microscópios de alta qualidade, modelos anatômicos detalhados e materiais para experimentos práticos. Este espaço permite que os alunos explorem conceitos científicos através da experimentação hands-on.",
    images: laboratorisFisicaQuimicaImages
  },
  {
    title: "Laboratório de Tecnologia",
    description: "Nosso laboratório de tecnologia oferece um ambiente moderno e colorido, equipado com computadores de última geração e laptops para desenvolvimento de projetos tecnológicos. Com mobiliário ergonômico e design inspirador, este espaço promove a aprendizagem digital e prepara os alunos para os desafios do futuro.",
    images: laboratorioTecnologiaImages
  },
  {
    title: "Biblioteca",
    description: "Nossa biblioteca oferece um ambiente tranquilo e organizado, especialmente projetado para estudantes do Ensino Fundamental II e Médio. Com mesas individuais de estudo, cadeiras coloridas e ergonômicas, ambiente climatizado e um acervo completo de materiais didáticos.",
    images: bibliotecaImages
  },
  {
    title: "Auditório",
    description: "Nosso auditório é um espaço amplo e moderno, especialmente projetado para eventos, apresentações e atividades educacionais. Com capacidade para grande número de estudantes, sistema de projeção avançado e cadeiras confortáveis, oferecemos o ambiente ideal para palestras e eventos acadêmicos.",
    images: auditoriumImages
  },
  {
    title: "Corredores e Convivência",
    description: "Nossos corredores são espaços amplos e bem organizados, projetados para facilitar a circulação dos estudantes. Com armários individuais, áreas de convivência com mesas de ping pong, painéis informativos e uma arquitetura moderna, criamos um ambiente que promove a socialização e o bem-estar.",
    images: fundamental2CorridorImages
  }
];

const DependencyGrid = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 font-montserrat">
              Nossa Infraestrutura
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              O Colégio Leibniz possui uma infraestrutura moderna e completa, cuidadosamente 
              planejada para oferecer o melhor ambiente de aprendizado para nossos alunos.
            </p>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full font-semibold">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              {dependencies.length} Ambientes Únicos para Explorar
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {dependencies.map((dependency, index) => (
              <InteractiveDependencyCard
                key={index}
                title={dependency.title}
                description={dependency.description}
                images={dependency.images}
                className="animate-fade-in"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DependencyGrid;