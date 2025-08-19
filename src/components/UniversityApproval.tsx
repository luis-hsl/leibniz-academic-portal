import { Target, TrendingUp, Users, GraduationCap } from "lucide-react";
const UniversityApproval = () => {
  const backgroundImage = "/lovable-uploads/42661bf5-74d2-4f7b-992f-48770e566cb3.png";
  return <section className="py-16 md:py-20 relative bg-dark-blue text-off-white overflow-hidden" style={{
    backgroundImage: `linear-gradient(hsl(var(--dark-blue) / 0.9), hsl(var(--dark-blue) / 0.9)), url('${backgroundImage}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'scroll'
  }}>
      {/* Elementos gráficos de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute top-20 left-10 opacity-10" width="100" height="100" viewBox="0 0 100 100">
          <path d="M20,50 Q50,20 80,50 T140,50" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
        <svg className="absolute bottom-20 right-10 opacity-10" width="120" height="120" viewBox="0 0 120 120">
          <path d="M20,60 Q60,20 100,60 T180,60" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Texto à esquerda */}
            <div className="space-y-6">
              <div className="inline-block bg-energy-yellow/20 backdrop-blur-sm rounded-full px-4 py-2 border border-energy-yellow/30">
                <span className="text-sm font-semibold text-energy-yellow">Resultados Comprovados</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-off-white leading-tight">Aprovação nas Melhores U</h2>
              
              <p className="text-xl text-off-white/80 leading-relaxed">
                O DNA do colégio Leibniz é focado na metodologia de alta performance, que prepara o aluno para os grandes desafios da vida e para os maiores e melhores universidades do País.
              </p>
            </div>

            {/* Cards à direita */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1: Metodologia Focada */}
              <div className="bg-off-white rounded-3xl p-6 shadow-2xl relative transform hover:scale-105 transition-transform duration-300">
                <div className="absolute -top-6 left-6">
                  <div className="bg-digital-blue rounded-2xl p-4 shadow-lg">
                    <Target className="h-8 w-8 text-off-white" />
                  </div>
                </div>
                <div className="pt-8">
                  <h3 className="text-xl font-bold text-dark-blue mb-3">Metodologia Focada</h3>
                  <p className="text-dark-blue/70 text-sm leading-relaxed">
                    O DNA do colégio Leibniz é focado na metodologia de alta performance, que prepara o aluno para os grandes desafios da vida e para as maiores e melhores universidades do País.
                  </p>
                </div>
              </div>

              {/* Card 2: Simulados e Avaliações */}
              <div className="bg-off-white rounded-3xl p-6 shadow-2xl relative transform hover:scale-105 transition-transform duration-300">
                <div className="absolute -top-6 left-6">
                  <div className="bg-energy-yellow rounded-2xl p-4 shadow-lg">
                    <TrendingUp className="h-8 w-8 text-dark-blue" />
                  </div>
                </div>
                <div className="pt-8">
                  <h3 className="text-xl font-bold text-dark-blue mb-3">Simulados e Avaliações</h3>
                  <p className="text-dark-blue/70 text-sm leading-relaxed">
                    Avaliações de aprendizagens semanais que prepara o aluno para adquirir a alta performance nos resultados. Relatório de Desempenho do aluno, mostra os indicadores de desempenho dos resultados por disciplina, facilitando diagnosticar as dificuldades e aprimorar os níveis de conhecimentos. Simulados totalmente preparados para os grandes desafios do ENEM e vestibulares isolados.
                  </p>
                </div>
              </div>

              {/* Card 3: Suporte Individualizado */}
              <div className="bg-off-white rounded-3xl p-6 shadow-2xl relative transform hover:scale-105 transition-transform duration-300">
                <div className="absolute -top-6 left-6">
                  <div className="bg-digital-cyan rounded-2xl p-4 shadow-lg">
                    <Users className="h-8 w-8 text-dark-blue" />
                  </div>
                </div>
                <div className="pt-8">
                  <h3 className="text-xl font-bold text-dark-blue mb-3">Suporte Individualizado</h3>
                  <p className="text-dark-blue/70 text-sm leading-relaxed">
                    Oferecemos orientação vocacional, planos de estudo personalizados e suporte socioemocional para lidar com a pressão dos exames.
                  </p>
                </div>
              </div>

              {/* Card 4: Professores Especialistas */}
              <div className="bg-off-white rounded-3xl p-6 shadow-2xl relative transform hover:scale-105 transition-transform duration-300">
                <div className="absolute -top-6 left-6">
                  <div className="bg-dark-blue rounded-2xl p-4 shadow-lg">
                    <GraduationCap className="h-8 w-8 text-off-white" />
                  </div>
                </div>
                <div className="pt-8">
                  <h3 className="text-xl font-bold text-dark-blue mb-3">Professores Especialistas</h3>
                  <p className="text-dark-blue/70 text-sm leading-relaxed">
                    Nossa equipe é formada por professores com vasta experiência em pré-vestibular, focados em estratégias de prova e aprovação.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default UniversityApproval;