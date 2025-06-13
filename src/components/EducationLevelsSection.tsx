
import EducationLevelCard from "./EducationLevelCard";

const EducationLevelsSection = () => {
  const educationLevels = [
    {
      id: "infantil",
      title: "Educação Infantil",
      description: "Ambiente acolhedor com metodologias lúdicas para desenvolvimento integral das crianças de 2 a 5 anos.",
      icon: "🎨",
      color: "bg-pink-500",
      gradient: "bg-gradient-to-br from-pink-500 via-rose-400 to-pink-600"
    },
    {
      id: "fundamental1",
      title: "Ensino Fundamental I",
      description: "Abordagens pedagógicas dinâmicas para crianças do 1º ao 5º ano, promovendo habilidades cognitivas e socioemocionais.",
      icon: "📚",
      color: "bg-blue-500",
      gradient: "bg-gradient-to-br from-blue-500 via-blue-400 to-blue-600"
    },
    {
      id: "fundamental2",
      title: "Ensino Fundamental II",
      description: "Preparação sólida para o ensino médio, desenvolvendo o pensamento crítico e autonomia dos estudantes do 6º ao 9º ano.",
      icon: "🎓",
      color: "bg-green-500",
      gradient: "bg-gradient-to-br from-green-500 via-emerald-400 to-green-600"
    },
    {
      id: "medio",
      title: "Ensino Médio (Foco ENEM e Vestibulares)",
      description: "Metodologia Bernoulli e preparação intensiva para os principais vestibulares e ENEM, com foco na aprovação.",
      icon: "🏆",
      color: "bg-red-500",
      gradient: "bg-gradient-to-br from-red-500 via-red-400 to-red-600"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Agende Sua Visita
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Conheça Nossos <span className="text-red-600">Níveis de Ensino</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore cada modalidade de ensino e agende uma visita para conhecer nossa metodologia e estrutura de perto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {educationLevels.map((level) => (
              <EducationLevelCard key={level.id} level={level} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Clique em "Agendar Visita" em qualquer card para preencher o formulário
            </p>
            <div className="inline-flex items-center space-x-2 text-sm text-gray-500">
              <span>💡</span>
              <span>Após o preenchimento, você será redirecionado para o WhatsApp</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationLevelsSection;
