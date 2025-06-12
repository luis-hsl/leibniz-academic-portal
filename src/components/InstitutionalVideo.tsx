
import { useState } from "react";
import { Play } from "lucide-react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface InstitutionalVideoProps {
  size?: "small" | "large";
  className?: string;
}

const InstitutionalVideo = ({ size = "large", className = "" }: InstitutionalVideoProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const isSmall = size === "small";

  return (
    <>
      <section className={`py-12 ${isSmall ? 'bg-white' : 'bg-gray-50'} ${className}`}>
        <div className="container mx-auto px-4">
          <div className={`${isSmall ? 'max-w-2xl' : 'max-w-4xl'} mx-auto`}>
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Play className={`${isSmall ? 'h-6 w-6' : 'h-8 w-8'} text-red-600`} />
                <h2 className={`${isSmall ? 'text-2xl' : 'text-4xl'} font-bold text-gray-900`}>
                  Vídeo Institucional
                </h2>
              </div>
              <p className={`${isSmall ? 'text-lg' : 'text-xl'} text-gray-600`}>
                Conheça mais sobre o Colégio Leibniz através do nosso vídeo institucional
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-300" onClick={openModal}>
              <div className="aspect-video relative group">
                <iframe
                  src="https://www.youtube.com/embed/07a2eF2caOo"
                  title="Vídeo Institucional - Colégio Leibniz"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full pointer-events-none"
                ></iframe>
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="bg-red-600 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-8 w-8 text-white fill-current" />
                  </div>
                </div>
              </div>
              {!isSmall && (
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Colégio Leibniz - Excelência em Educação
                  </h3>
                  <p className="text-gray-600">
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
        <DialogContent className="max-w-6xl w-full p-0 bg-black/95 border-none">
          <DialogClose className="absolute right-4 top-4 z-50 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-white bg-black/50 hover:bg-black/70 p-2">
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </DialogClose>
          
          <div className="aspect-video">
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
