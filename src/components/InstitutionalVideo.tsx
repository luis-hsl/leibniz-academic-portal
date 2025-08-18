
import { useState } from "react";
import { Play } from "lucide-react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface InstitutionalVideoProps {
  size?: "small" | "large";
  className?: string;
}

const InstitutionalVideo = ({ size = "large", className = "" }: InstitutionalVideoProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const scrollToVisitForm = () => {
    const visitFormSection = document.getElementById('agendar');
    if (visitFormSection) {
      visitFormSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const isSmall = size === "small";

  return (
    <>
      <section className={`py-16 md:py-20 lg:py-24 ${isSmall ? 'bg-white' : 'bg-gray-50'} ${className}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`${isSmall ? 'max-w-3xl' : 'max-w-5xl'} mx-auto`}>
            <div className="text-center mb-12 md:mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Play className={`${isSmall ? 'h-6 w-6' : 'h-8 w-8'} text-red-600`} />
                <h2 className={`${isSmall ? 'text-2xl md:text-3xl' : 'text-3xl md:text-4xl lg:text-5xl'} font-bold text-gray-900`}>
                  Vídeo Institucional
                </h2>
              </div>
              <p className={`${isSmall ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'} text-gray-600 max-w-3xl mx-auto leading-relaxed`}>
                Conheça mais sobre o Colégio Leibniz através do nosso vídeo institucional
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-3xl transition-all duration-500 transform hover:scale-105" onClick={openModal}>
              <div className="aspect-video relative group">
                <iframe
                  src="https://www.youtube.com/embed/07a2eF2caOo"
                  title="Vídeo Institucional - Colégio Leibniz"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full pointer-events-none"
                ></iframe>
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="bg-red-600 rounded-full p-6 md:p-8 group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-8 w-8 md:h-12 md:w-12 text-white fill-current" />
                  </div>
                </div>
              </div>
              {!isSmall && (
                <div className="p-6 md:p-8 lg:p-10">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    Colégio Leibniz - Excelência em Educação
                  </h3>
                  <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                    Descubra nossa metodologia de ensino, infraestrutura moderna e o comprometimento 
                    com a formação integral dos nossos alunos.
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Modal for full-screen video */}
      <Dialog open={isModalOpen} onOpenChange={closeModal}>
        <DialogContent className="max-w-7xl w-full h-[90vh] p-0 bg-black/95 border-none">
          <DialogClose className="absolute right-4 top-4 z-50 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-white bg-black/50 hover:bg-black/70 p-3">
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </DialogClose>
          
          <div className="aspect-video h-full">
            <iframe
              src="https://www.youtube.com/embed/07a2eF2caOo?autoplay=1"
              title="Vídeo Institucional - Colégio Leibniz"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default InstitutionalVideo;
