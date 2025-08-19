import { useState } from "react";
import { QrCode, Trophy, ExternalLink } from "lucide-react";
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
              className="w-14 h-14 md:w-16 md:h-16 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group border border-white/20"
            >
              <Trophy className="w-6 h-6 md:w-7 md:h-7 text-dark-blue group-hover:text-energy-yellow transition-colors" />
            </button>
          </TooltipTrigger>
          <TooltipContent side="left" className="bg-white text-dark-blue border border-gray-200 shadow-lg max-w-[200px]">
            <p className="font-medium">Veja Nossas Conquistas</p>
          </TooltipContent>
        </Tooltip>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="sm:max-w-lg w-[95%] mx-auto">
            <DialogHeader className="pb-4">
              <DialogTitle className="text-center text-dark-blue text-xl md:text-2xl font-montserrat leading-tight">
                🏆 Colégio Leibniz - Destaque no ENEM
              </DialogTitle>
            </DialogHeader>
            <div className="flex flex-col items-center space-y-6 pt-2">
              <p className="text-muted-foreground text-center text-sm md:text-base leading-relaxed px-2 max-w-md">
                Escaneie o QR Code para ler a matéria completa sobre nossa conquista no ranking do ENEM em Rondonópolis.
              </p>
              
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-sm border">
                <img
                  src="/lovable-uploads/17d5550a-5150-4174-a68f-60f64f75db19.png"
                  alt="QR Code - Conquistas do Colégio Leibniz"
                  className="w-44 h-44 md:w-52 md:h-52 mx-auto"
                />
              </div>
              
              <div className="flex items-center gap-3 text-muted-foreground bg-gray-50 px-4 py-3 rounded-lg">
                <QrCode className="w-5 h-5" />
                <span className="text-sm md:text-base font-medium">
                  Use a câmera do seu celular
                </span>
              </div>
              
              
              <div className="flex flex-col gap-3 w-full mt-2">
                <Button 
                  onClick={() => {
                    window.open('https://primeirahora.com.br/colegio-leibniz-e-destaque-no-enem-e-lidera-ranking-entre-escolas-de-rondonopolis/#:~:text=No%20ranking%20estadual%2C%20o%20Leibniz,protagonismo%20na%20educa%C3%A7%C3%A3o%20mato%2Dgrossense.', '_blank');
                  }}
                  className="w-full py-3 text-base font-medium bg-energy-yellow hover:bg-energy-yellow/90 text-dark-blue"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Ler Matéria Online
                </Button>
                
                <Button 
                  onClick={() => setIsOpen(false)}
                  variant="outline"
                  className="w-full py-3 text-base font-medium"
                >
                  Fechar
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </TooltipProvider>
  );
};

export default QRBadge;