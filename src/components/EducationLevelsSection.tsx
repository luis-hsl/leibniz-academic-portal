
import EducationLevelCard from "./EducationLevelCard";

const EducationLevelsSection = () => {
  const educationLevels = [
    {
      id: "infantil",
      title: "Educação Infantil",
      description: "Um olhar contextualizado para a criança de hoje. Incentivo à curiosidade e à exploração, estimulando o desenvolvimento socioemocional e linguístico e o prazer da descoberta.",
      icon: "🎨",
      color: "bg-pink-500",
      gradient: "bg-gradient-to-br from-pink-500 via-rose-400 to-pink-600",
      image: "/lovable-uploads/2f1f5d03-9300-4d9c-a7a0-f3c7c3fd695e.png",
      ageRange: "1º e 2º período"
    },
    {
      id: "fundamental1",
      title: "Ensino Fundamental I",
      description: "Explorar e descobrir com curiosidade e interesse. Atividades mais estruturadas e significativas para estimular a capacidade de expressão verbal e textual, a interpretação de texto e a formação de leitores.",
      icon: "📚",
      color: "bg-blue-500",
      gradient: "bg-gradient-to-br from-blue-500 via-blue-400 to-blue-600",
      image: "/lovable-uploads/4e7cac39-b935-4776-b7e1-c143aba0a331.png",
      ageRange: "1º ao 5º ano"
    },
    {
      id: "fundamental2",
      title: "Ensino Fundamental II",
      description: "Novos desafios e uma visão crítica do mundo. Momento de desenvolver a análise crítica, o raciocínio lógico e uma visão global e cidadã, numa aprendizagem significativa para o futuro.",
      icon: "🎓",
      color: "bg-green-500",
      gradient: "bg-gradient-to-br from-green-500 via-emerald-400 to-green-600",
      image: "/lovable-uploads/4223a8e5-5cbb-4352-bff7-fad5d0c7d664.png",
      ageRange: "6º ao 9º ano"
    },
    {
      id: "medio",
      title: "Ensino Médio",
      description: "Quando estudante escolhe qual caminho seguir. Os alunos revisitam conhecimentos aplicados à vida e à realidade deles, se preparando para vestibulares nacionais e internacionais.",
      icon: "🏆",
      color: "bg-red-500",
      gradient: "bg-gradient-to-br from-red-500 via-red-400 to-red-600",
      image: "/lovable-uploads/0702ee38-f1ff-4936-9d81-1fdc3adfa8db.png",
      ageRange: "1ª a 3ª série"
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-block bg-teal-100 text-teal-700 px-6 py-3 rounded-full text-sm font-semibold mb-6">
              Agende Sua Visita
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-900 mb-6">
              Conheça Nossos <span className="text-teal-600">Níveis de Ensino</span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Do Ensino Infantil aos Preparatórios para Vestibulares, oferecemos educação de excelência em todos os níveis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10">
            {educationLevels.map((level) => (
              <EducationLevelCard key={level.id} level={level} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4 text-lg">
              Clique em "Faça a Inscrição" em qualquer card para preencher o formulário
            </p>
            <div className="inline-flex items-center space-x-3 text-base text-gray-500">
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
