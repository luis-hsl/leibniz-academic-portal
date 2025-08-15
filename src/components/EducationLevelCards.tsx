import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";

interface EducationLevel {
  id: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  formTitle: string;
}

const educationLevels: EducationLevel[] = [
  {
    id: "infantil",
    tag: "1º e 2º período",
    title: "Educação Infantil",
    description: "Onde a descoberta começa: um ambiente lúdico, seguro e acolhedor para os primeiros passos.",
    image: "/lovable-uploads/60dbf953-fb29-438f-8a97-93e962d46866.png",
    formTitle: "Inscrição - Educação Infantil"
  },
  {
    id: "fundamental1",
    tag: "1º ao 5º ano",
    title: "Ensino Fundamental I",
    description: "Construindo bases sólidas para o futuro com projetos que transformam curiosidade em conhecimento.",
    image: "/lovable-uploads/78452bc1-cd1b-41f2-91f3-7ecd2f5524ec.png",
    formTitle: "Inscrição - Ensino Fundamental I"
  },
  {
    id: "fundamental2",
    tag: "6º ao 9º ano",
    title: "Ensino Fundamental II",
    description: "Desenvolvendo autonomia e pensamento crítico para expandir horizontes e superar desafios.",
    image: "/lovable-uploads/6fa7cd08-32f1-4b8c-969c-48611147486a.png",
    formTitle: "Inscrição - Ensino Fundamental II"
  },
  {
    id: "medio",
    tag: "1ª à 3ª série",
    title: "Ensino Médio",
    description: "Preparação de alta performance para os vestibulares mais concorridos e para um futuro de sucesso.",
    image: "/lovable-uploads/672ec9c8-05c1-4a0f-aa67-a819cb1cfd85.png",
    formTitle: "Inscrição - Ensino Médio"
  },
  {
    id: "pre-vestibular",
    tag: "Preparatório",
    title: "Pré-Vestibular",
    description: "Metodologia intensiva e foco total para garantir a sua aprovação nos vestibulares mais exigentes.",
    image: "/lovable-uploads/0aa66751-7776-4c66-8fd4-d50f118ce754.png",
    formTitle: "Inscrição - Pré-Vestibular"
  },
  {
    id: "extracurriculares",
    tag: "Atividades",
    title: "Cursos Extracurriculares",
    description: "Desenvolva novos talentos e paixões com cursos de esportes, artes, tecnologia e idiomas.",
    image: "/lovable-uploads/4470caf6-adf0-4120-9419-9d5dafe58eb4.png",
    formTitle: "Inscrição - Cursos Extracurriculares"
  }
];

interface FormData {
  nomeResponsavel: string;
  email: string;
  telefone: string;
  nomeAluno: string;
  turno: string;
}

const EducationLevelCards = () => {
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());
  const [formData, setFormData] = useState<{ [key: string]: FormData }>({});

  const handleCardFlip = (levelId: string) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(levelId)) {
        newSet.delete(levelId);
      } else {
        newSet.add(levelId);
      }
      return newSet;
    });
  };

  const handleInputChange = (levelId: string, field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [levelId]: {
        ...prev[levelId],
        [field]: value
      }
    }));
  };

  const handleFormSubmit = (levelId: string, levelTitle: string) => {
    const data = formData[levelId];
    if (!data?.nomeResponsavel || !data?.email || !data?.telefone || !data?.nomeAluno || !data?.turno) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    const message = `Olá! Gostaria de fazer a inscrição para ${levelTitle}.
    
Nome do Responsável: ${data.nomeResponsavel}
Email: ${data.email}
Telefone: ${data.telefone}
Nome do Aluno: ${data.nomeAluno}
Turno: ${data.turno}`;

    const whatsappUrl = `https://wa.me/556534234097?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast.success("Redirecionando para WhatsApp...");
    
    // Reset form and flip back
    setFormData(prev => ({ 
      ...prev, 
      [levelId]: { 
        nomeResponsavel: "", 
        email: "", 
        telefone: "", 
        nomeAluno: "", 
        turno: "" 
      }
    }));
    handleCardFlip(levelId);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-6">
              Níveis de Ensino
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Do Ensino Infantil aos Preparatórios para Vestibulares, oferecemos educação de excelência em todos os níveis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationLevels.map((level) => (
              <div key={level.id} className="perspective-1000">
                <div 
                  className={`transform-style-preserve-3d transition-transform duration-700 relative h-[580px] ${
                    flippedCards.has(level.id) ? 'rotate-y-180' : ''
                  } ${!flippedCards.has(level.id) ? 'hover:scale-105' : ''}`}
                >
                  {/* Frente do Card */}
                  <div className="backface-hidden absolute inset-0 bg-white rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.1)] hover:shadow-xl transition-shadow duration-300">
                    {/* Imagem */}
                    <div className="relative h-64">
                      <img 
                        src={level.image} 
                        alt={level.title}
                        className="w-full h-full object-cover rounded-t-2xl"
                        loading="lazy"
                      />
                    </div>
                    
                    {/* Área de Conteúdo */}
                    <div className="bg-white p-6 flex flex-col" style={{ height: 'calc(580px - 256px)' }}>
                      {/* Tag de Período */}
                      <div className="inline-block bg-[#fec10e] text-[#003366] px-3 py-1.5 rounded-[20px] text-sm font-semibold mb-4 self-start font-montserrat">
                        {level.tag}
                      </div>
                      
                      {/* Título */}
                      <h3 className="text-[28px] font-bold text-[#003366] mb-2 font-montserrat leading-tight">
                        {level.title}
                      </h3>
                      
                      {/* Texto Descritivo */}
                      <p className="text-base text-[#333333] leading-[1.6] mb-auto font-montserrat font-normal flex-1">
                        {level.description}
                      </p>
                      
                      {/* Botão CTA */}
                      <Button
                        onClick={() => handleCardFlip(level.id)}
                        className="w-full bg-[#fec10e] text-[#003366] hover:bg-[#fec10e]/90 px-6 py-[14px] rounded-lg uppercase font-bold text-sm transition-all duration-300 text-center font-montserrat mt-auto"
                        type="button"
                      >
                        Faça a Inscrição
                      </Button>
                    </div>
                  </div>

                  {/* Verso do Card - Formulário */}
                  <div className="backface-hidden rotate-y-180 absolute inset-0 bg-white rounded-2xl shadow-lg p-6 flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-bold text-[#003366]">
                        {level.formTitle}
                      </h3>
                      <Button
                        onClick={() => handleCardFlip(level.id)}
                        variant="ghost"
                        size="sm"
                        className="text-[#003366] hover:bg-[#003366]/10"
                      >
                        <ArrowLeft className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="flex-1 space-y-3 overflow-y-auto">
                      <div>
                        <Label htmlFor={`nomeResponsavel-${level.id}`} className="text-[#333333] font-medium">
                          Nome do Responsável *
                        </Label>
                        <Input
                          id={`nomeResponsavel-${level.id}`}
                          type="text"
                          value={formData[level.id]?.nomeResponsavel || ""}
                          onChange={(e) => handleInputChange(level.id, "nomeResponsavel", e.target.value)}
                          className="mt-1 border-gray-300 focus:border-[#003366] focus:ring-[#003366]"
                          placeholder="Digite o nome do responsável"
                        />
                      </div>

                      <div>
                        <Label htmlFor={`email-${level.id}`} className="text-[#333333] font-medium">
                          Email *
                        </Label>
                        <Input
                          id={`email-${level.id}`}
                          type="email"
                          value={formData[level.id]?.email || ""}
                          onChange={(e) => handleInputChange(level.id, "email", e.target.value)}
                          className="mt-1 border-gray-300 focus:border-[#003366] focus:ring-[#003366]"
                          placeholder="Digite seu email"
                        />
                      </div>

                      <div>
                        <Label htmlFor={`telefone-${level.id}`} className="text-[#333333] font-medium">
                          Telefone/WhatsApp *
                        </Label>
                        <Input
                          id={`telefone-${level.id}`}
                          type="tel"
                          value={formData[level.id]?.telefone || ""}
                          onChange={(e) => handleInputChange(level.id, "telefone", e.target.value)}
                          className="mt-1 border-gray-300 focus:border-[#003366] focus:ring-[#003366]"
                          placeholder="(65) 99999-9999"
                        />
                      </div>

                      <div>
                        <Label htmlFor={`nomeAluno-${level.id}`} className="text-[#333333] font-medium">
                          Nome do Aluno *
                        </Label>
                        <Input
                          id={`nomeAluno-${level.id}`}
                          type="text"
                          value={formData[level.id]?.nomeAluno || ""}
                          onChange={(e) => handleInputChange(level.id, "nomeAluno", e.target.value)}
                          className="mt-1 border-gray-300 focus:border-[#003366] focus:ring-[#003366]"
                          placeholder="Digite o nome do aluno"
                        />
                      </div>

                      <div>
                        <Label htmlFor={`turno-${level.id}`} className="text-[#333333] font-medium">
                          Turno *
                        </Label>
                        <select
                          id={`turno-${level.id}`}
                          value={formData[level.id]?.turno || ""}
                          onChange={(e) => handleInputChange(level.id, "turno", e.target.value)}
                          className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:border-[#003366] focus:ring-[#003366] focus:outline-none"
                        >
                          <option value="">Selecione o turno</option>
                          <option value="matutino">Matutino</option>
                          <option value="vespertino">Vespertino</option>
                          <option value="integral">Integral</option>
                        </select>
                      </div>

                    </div>

                    <Button
                      onClick={() => handleFormSubmit(level.id, level.title)}
                      className="w-full bg-[#fec10e] text-[#003366] hover:bg-[#fec10e]/90 font-semibold py-3 mt-6"
                    >
                      Enviar Inscrição
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationLevelCards;