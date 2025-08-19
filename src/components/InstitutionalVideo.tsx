import { useState } from "react";
import { Play } from "lucide-react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
interface InstitutionalVideoProps {
  size?: "small" | "large";
  className?: string;
}
const InstitutionalVideo = ({
  size = "large",
  className = ""
}: InstitutionalVideoProps) => {
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
  return <>
      

      {/* Modal for full-screen video */}
      <Dialog open={isModalOpen} onOpenChange={closeModal}>
        <DialogContent className="max-w-7xl w-full h-[90vh] p-0 bg-black/95 border-none">
          <DialogClose className="absolute right-4 top-4 z-50 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-white bg-black/50 hover:bg-black/70 p-3">
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </DialogClose>
          
          <div className="aspect-video h-full">
            <iframe src="https://www.youtube.com/embed/07a2eF2caOo?autoplay=1" title="Vídeo Institucional - Colégio Leibniz" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full"></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </>;
};
export default InstitutionalVideo;