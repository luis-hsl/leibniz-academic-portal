
import { useState } from "react";
import { ChevronDown, ChevronRight, MessageCircle, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface FAQItem {
  question: string;
  answer: string;
  relatedAction?: {
    text: string;
    action: () => void;
  };
}

interface FAQCategory {
  title: string;
  icon: React.ReactNode;
  items: FAQItem[];
}

const FAQ = () => {
  const [openCategory, setOpenCategory] = useState<number | null>(0);
  const [openItem, setOpenItem] = useState<string | null>(null);

  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5566996781284?text=${encodedMessage}`, "_blank");
  };

  const openWhatsAppVisit = () => {
    openWhatsApp("Olá, tenho interesse em agendar uma visita ao Colégio Leibniz. Pode me ajudar?");
  };

  const categories: FAQCategory[] = [
    {
      title: "Processo de Matrícula",
      icon: <Calendar className="h-5 w-5" />,
      items: [
        {
          question: "Quando abrem as matrículas para o próximo ano?",
          answer: "As matrículas para o próximo ano letivo abrem geralmente em outubro/novembro. Oferecemos descontos especiais para matrículas antecipadas e temos processo de matrícula online para maior comodidade das famílias.",
          relatedAction: {
            text: "Receber informações sobre matrícula",
            action: () => openWhatsApp("Olá! Gostaria de receber informações sobre o processo de matrícula e datas disponíveis.")
          }
        },
        {
          question: "Quais documentos são necessários para a matrícula?",
          answer: "Para efetuar a matrícula são necessários: histórico escolar, certidão de nascimento, CPF do aluno e responsável, RG dos responsáveis, comprovante de residência, carteira de vacinação (educação infantil), e declaração de transferência (se aplicável).",
          relatedAction: {
            text: "Esclarecer dúvidas sobre documentação",
            action: () => openWhatsApp("Olá! Tenho dúvidas sobre a documentação necessária para matrícula.")
          }
        },
        {
          question: "Existe processo seletivo?",
          answer: "Para alguns níveis de ensino realizamos avaliação diagnóstica para melhor acompanhamento pedagógico. Este processo não é eliminatório, mas nos ajuda a entender as necessidades específicas de cada estudante para oferecer o melhor suporte.",
          relatedAction: {
            text: "Agendar avaliação diagnóstica",
            action: () => openWhatsApp("Olá! Gostaria de agendar uma avaliação diagnóstica para meu filho(a).")
          }
        },
        {
          question: "Posso transferir meu filho durante o ano letivo?",
          answer: "Sim, aceitamos transferências durante o ano letivo, sujeito à disponibilidade de vagas. Nossa equipe pedagógica faz um acompanhamento especial para facilitar a adaptação do estudante ao nosso método de ensino."
        }
      ]
    },
    {
      title: "Metodologia de Ensino",
      icon: <MessageCircle className="h-5 w-5" />,
      items: [
        {
          question: "O que é o Sistema Bernoulli de Ensino?",
          answer: "O Sistema Bernoulli é uma metodologia reconhecida nacionalmente, com material didático atualizado, plataforma digital integrada e foco na preparação para vestibulares e ENEM. Combina tradição pedagógica com inovação tecnológica para garantir excelência no aprendizado.",
          relatedAction: {
            text: "Conhecer mais sobre a metodologia",
            action: () => openWhatsAppVisit()
          }
        },
        {
          question: "Como funcionam as aulas online e presenciais?",
          answer: "Oferecemos ensino híbrido com aulas presenciais como base e plataforma digital complementar. Os alunos têm acesso a videoaulas, exercícios online, simulados e acompanhamento personalizado através da plataforma Bernoulli."
        },
        {
          question: "Qual é a carga horária das aulas?",
          answer: "A carga horária varia por nível: Educação Infantil (4h/dia), Fundamental I (4-5h/dia), Fundamental II (5-6h/dia), Ensino Médio (6-7h/dia). Preparatórios têm horários específicos em turnos manhã, tarde ou noite."
        },
        {
          question: "Como é feito o acompanhamento pedagógico?",
          answer: "Realizamos acompanhamento contínuo através de avaliações regulares, relatórios de desempenho, reuniões com pais, plantões de dúvidas e orientação vocacional. Cada aluno tem um plano de desenvolvimento personalizado."
        }
      ]
    },
    {
      title: "Valores e Pagamento",
      icon: <MessageCircle className="h-5 w-5" />,
      items: [
        {
          question: "Quais são os valores das mensalidades?",
          answer: "Os valores variam conforme o nível de ensino e são competitivos no mercado. Oferecemos descontos para irmãos, matrículas antecipadas e pagamento à vista. Entre em contato para receber nossa tabela de preços atualizada.",
          relatedAction: {
            text: "Solicitar tabela de preços",
            action: () => openWhatsApp("Olá! Gostaria de receber a tabela de preços atualizada das mensalidades.")
          }
        },
        {
          question: "Quais formas de pagamento são aceitas?",
          answer: "Aceitamos pagamento via boleto bancário, cartão de crédito, débito automático e PIX. Oferecemos facilidades de pagamento e parcelamento especiais para algumas situações."
        },
        {
          question: "Existe desconto para irmãos?",
          answer: "Sim! Oferecemos desconto progressivo para irmãos matriculados: 5% para o segundo filho, 10% para o terceiro, e condições especiais para famílias com mais filhos na escola."
        },
        {
          question: "O material didático está incluso?",
          answer: "O material didático do Sistema Bernoulli está incluso na mensalidade, incluindo livros impressos, acesso à plataforma digital, apostilas complementares e materiais para atividades práticas."
        }
      ]
    },
    {
      title: "Atividades Extracurriculares",
      icon: <MessageCircle className="h-5 w-5" />,
      items: [
        {
          question: "Quais atividades extracurriculares são oferecidas?",
          answer: "Oferecemos diversas atividades: esportes (futsal, vôlei, basquete), artes (teatro, música, dança), idiomas (inglês, espanhol), robótica, xadrez, e projetos científicos. As atividades variam conforme a faixa etária."
        },
        {
          question: "As atividades extracurriculares têm custo adicional?",
          answer: "Algumas atividades estão incluídas na mensalidade, outras têm custo adicional. Oferecemos pacotes promocionais para múltiplas atividades e descontos especiais para alunos da escola."
        },
        {
          question: "Como faço para inscrever meu filho nas atividades?",
          answer: "As inscrições são feitas diretamente na secretaria ou através do nosso portal online. Disponibilizamos cronograma de atividades no início de cada semestre para facilitar a escolha das famílias."
        }
      ]
    },
    {
      title: "Políticas da Escola",
      icon: <MessageCircle className="h-5 w-5" />,
      items: [
        {
          question: "Qual é a política de faltas e reposições?",
          answer: "Seguimos a legislação educacional brasileira (máximo 25% de faltas). Oferecemos aulas de reposição para faltas justificadas e temos plantões de dúvidas para apoio aos estudos. Casos especiais são analisados individualmente."
        },
        {
          question: "Como funciona o sistema de avaliações?",
          answer: "Utilizamos avaliação contínua com provas bimestrais, trabalhos, seminários e atividades práticas. O sistema Bernoulli inclui simulados regulares preparatórios para ENEM e vestibulares, com feedback detalhado de desempenho."
        },
        {
          question: "Qual é a política de uso de dispositivos eletrônicos?",
          answer: "Permitimos uso de dispositivos para fins educacionais com supervisão. Temos política clara sobre uso de celulares e tablets, priorizando o foco nos estudos e convivência social saudável."
        },
        {
          question: "Como é feita a comunicação escola-família?",
          answer: "Mantemos comunicação através de agenda digital, aplicativo próprio, reuniões periódicas, relatórios de desempenho e contato direto com coordenação pedagógica. Os pais acompanham o desenvolvimento em tempo real."
        }
      ]
    }
  ];

  const toggleCategory = (index: number) => {
    setOpenCategory(openCategory === index ? null : index);
    setOpenItem(null);
  };

  const toggleItem = (categoryIndex: number, itemIndex: number) => {
    const itemId = `${categoryIndex}-${itemIndex}`;
    setOpenItem(openItem === itemId ? null : itemId);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre o Colégio Leibniz. 
            Não encontrou o que procura? Entre em contato conosco!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {categories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="mb-4 shadow-md">
              <div
                className="p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => toggleCategory(categoryIndex)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-red-600">{category.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                  </div>
                  {openCategory === categoryIndex ? (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              </div>

              {openCategory === categoryIndex && (
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="border-l-2 border-gray-200 pl-4">
                        <button
                          className="text-left w-full"
                          onClick={() => toggleItem(categoryIndex, itemIndex)}
                        >
                          <h4 className="text-md font-medium text-gray-800 hover:text-red-600 transition-colors">
                            {item.question}
                          </h4>
                        </button>
                        
                        {openItem === `${categoryIndex}-${itemIndex}` && (
                          <div className="mt-3 space-y-3">
                            <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                            {item.relatedAction && (
                              <Button
                                onClick={item.relatedAction.action}
                                className="bg-red-600 hover:bg-red-700 text-white text-sm"
                                size="sm"
                              >
                                {item.relatedAction.text}
                              </Button>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Não encontrou a resposta que procurava?</p>
          <Button
            onClick={() => openWhatsApp("Olá! Tenho uma dúvida que não encontrei nas perguntas frequentes.")}
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Falar com um Atendente
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
