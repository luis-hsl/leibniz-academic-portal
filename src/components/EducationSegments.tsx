
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Users, BookOpen, GraduationCap, Target } from "lucide-react";
import EducationSegmentForm from "./EducationSegmentForm";

interface EducationSegment {
  id: string;
  title: string;
  icon: any;
  description: string;
  image: string;
  highlights?: string[];
}

const educationSegments: EducationSegment[] = [
  {
    id: "infantil",
    title: "Educação Infantil",
    icon: Users,
    description: "Desenvolvimento motor, cognitivo e social com muito acolhimento e ludicidade.",
    image: "/lovable-uploads/3eeb7c0e-e277-4ed2-80d2-fa502cd40936.png",
  },
  {
    id: "fundamental1",
    title: "Ensino Fundamental I",
    icon: BookOpen,
    description: "Alfabetização e descobertas em um ambiente criativo e seguro.",
    image: "/lovable-uploads/e184216c-7a3a-4233-9e6b-25748975871f.png",
  },
  {
    id: "fundamental2", 
    title: "Ensino Fundamental II",
    icon: GraduationCap,
    description: "Aprofundamento do conhecimento e construção do pensamento crítico.",
    image: "/lovable-uploads/bc48ba2d-00f3-4d05-8eaa-c6a90fac82e2.png",
  },
  {
    id: "medio",
    title: "Ensino Médio",
    icon: Target,
    description: "Foco total em ENEM e vestibulares, com simulados, orientação profissional e rotina de alta performance.",
    image: "/lovable-uploads/744f47e2-d92b-4c6d-869a-19832c9137b2.png",
    highlights: ["Simulados", "Aulas intensivas", "Apoio psicopedagógico", "Orientação profissional"]
  },
];

const EducationSegments = () => {
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

  const handleCardFlip = (segmentId: string) => {
    setFlippedCard(flippedCard === segmentId ? null : segmentId);
  };

  const handleBackToFront = () => {
    setFlippedCard(null);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 to-red-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Segmentos de Ensino
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Do acolhimento na Educação Infantil à excelência no ENEM. 
              Descubra o segmento ideal para seu filho e agende uma conversa conosco.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {educationSegments.map((segment) => {
              const IconComponent = segment.icon;
              const isFlipped = flippedCard === segment.id;
              
              return (
                <div
                  key={segment.id}
                  className="group perspective-1000 h-[480px] sm:h-[520px]"
                >
                  <div 
                    className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                      isFlipped ? 'rotate-y-180' : ''
                    }`}
                  >
                    {/* Front Side */}
                    <Card className="absolute inset-0 w-full h-full backface-hidden cursor-pointer hover:shadow-xl transition-all duration-300 border-2 hover:border-red-200">
                      <CardContent className="p-0 h-full flex flex-col">
                        {/* Image Section */}
                        <div className="relative h-48 sm:h-52 overflow-hidden rounded-t-lg">
                          <img
                            src={segment.image}
                            alt={segment.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-3">
                            <IconComponent className="w-6 h-6 text-red-600" />
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="flex-1 p-6 flex flex-col justify-between">
                          <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                              {segment.title}
                            </h3>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                              {segment.description}
                            </p>
                            
                            {/* Highlights for Ensino Médio */}
                            {segment.highlights && (
                              <div className="mb-4">
                                <p className="text-sm font-semibold text-red-600 mb-2">Destaques:</p>
                                <div className="flex flex-wrap gap-2">
                                  {segment.highlights.map((highlight, index) => (
                                    <span
                                      key={index}
                                      className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full"
                                    >
                                      {highlight}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>

                          <Button
                            onClick={() => handleCardFlip(segment.id)}
                            className="w-full bg-red-600 hover:bg-red-700 text-white"
                          >
                            Quero Saber Mais
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Back Side - Form */}
                    <Card className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 border-2 border-red-200">
                      <CardContent className="p-6 h-full flex flex-col">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                          <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                            {segment.title}
                          </h3>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={handleBackToFront}
                            className="text-gray-500 hover:text-gray-700"
                          >
                            <ArrowLeft className="w-4 h-4" />
                          </Button>
                        </div>

                        {/* Form */}
                        <div className="flex-1">
                          <EducationSegmentForm
                            segment={segment.title}
                            onSuccess={handleBackToFront}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSegments;
