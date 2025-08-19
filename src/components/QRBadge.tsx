import { useState } from "react";
import { QrCode, Trophy } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const QRBadge = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <TooltipProvider>
      <div className="absolute top-4 right-4 md:top-5 md:right-5 z-10">
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={() => setIsOpen(true)}
              className="w-12 h-12 md:w-[60px] md:h-[60px] bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            >
              <Trophy className="w-5 h-5 md:w-6 md:h-6 text-dark-blue group-hover:text-energy-yellow transition-colors" />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Veja Nossas Conquistas</p>
          </TooltipContent>
        </Tooltip>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-center text-dark-blue text-xl font-montserrat">
                🏆 Colégio Leibniz - Destaque no ENEM
              </DialogTitle>
            </DialogHeader>
            <div className="flex flex-col items-center space-y-4 pt-4">
              <p className="text-muted-foreground text-center text-sm leading-relaxed px-2">
                Escaneie o QR Code para ler a matéria completa sobre nossa conquista no ranking do ENEM em Rondonópolis.
              </p>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <img
                  src="/lovable-uploads/17d5550a-5150-4174-a68f-60f64f75db19.png"
                  alt="QR Code - Conquistas do Colégio Leibniz"
                  className="w-40 h-40 md:w-48 md:h-48 mx-auto"
                />
              </div>
              
              <div className="flex gap-2 pt-2">
                <QrCode className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">
                  Use a câmera do seu celular
                </span>
              </div>
              
              <Button 
                onClick={() => setIsOpen(false)}
                variant="outline"
                className="w-full mt-4"
              >
                Fechar
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </TooltipProvider>
  );
};

export default QRBadge;