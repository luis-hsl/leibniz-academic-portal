
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { X } from "lucide-react";
import OptimizedImage from "./OptimizedImage";

interface ImageModalProps {
  src: string;
  alt: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

const ImageModal = ({ src, alt, title, isOpen, onClose }: ImageModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full p-0 bg-black/95 border-none">
        <DialogClose className="absolute right-4 top-4 z-50 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-white bg-black/50 hover:bg-black/70 p-2">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
        
        <div className="relative">
          <OptimizedImage
            src={src}
            alt={alt}
            className="w-auto h-auto max-w-full max-h-[80vh] object-contain mx-auto"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <h3 className="text-white text-xl font-semibold">{title}</h3>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;
