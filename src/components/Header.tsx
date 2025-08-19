import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { useIsMobile } from "@/hooks/use-mobile";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const isMobile = useIsMobile();
  const location = useLocation();

  const navigation = [
    { name: "Início", href: "/" },
    { name: "O Colégio", href: "/o-colegio" },
    { name: "Dependências", href: "/dependencias" },
    { name: "Contato", href: "/contato" },
  ];

  const desktopNavigation = navigation.filter(item => 
    item.name !== "Contato"
  );


  const openWhatsApp = () => {
    const message = encodeURIComponent("Olá, gostaria de falar com um atendente agora para tirar algumas dúvidas. Pode me ajudar?");
    window.open(`https://wa.me/5566996781284?text=${message}`, "_blank");
  };


  const isActive = (href: string) => {
    if (href === "/" && location.pathname === "/") return true;
    if (href !== "/" && location.pathname.startsWith(href)) return true;
    return false;
  };

  if (isMobile) {
    return (
      <header className="bg-dark-blue text-off-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <Link to="/" className="flex items-center flex-shrink-0">
              <img 
                src="/lovable-uploads/e9344ceb-6cab-42df-be96-aaa83c07f556.png" 
                alt="Colégio Leibniz Logo" 
                className="h-10 sm:h-12 w-auto object-contain"
                loading="eager"
                width="120"
                height="48"
              />
            </Link>
            
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Button
                onClick={openWhatsApp}
                size="sm"
                variant="energy"
                className="text-xs px-2 py-2 sm:px-3 sm:py-2 flex-shrink-0 transition-all duration-300 hover:scale-105 hover:shadow-md min-h-[40px] touch-target"
              >
                WhatsApp
              </Button>
              
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="p-2 flex-shrink-0 min-h-[40px] min-w-[40px] touch-target text-off-white border-off-white/30">
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-64 sm:w-72">
                  <nav className="flex flex-col space-y-4 mt-8">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`text-lg font-medium transition-colors hover:text-accent py-3 px-2 min-h-[44px] flex items-center touch-target ${
                          isActive(item.href) ? 'text-accent' : 'text-foreground'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="bg-dark-blue text-off-white shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex justify-between items-center h-16 md:h-18 lg:h-20 xl:h-22">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/e9344ceb-6cab-42df-be96-aaa83c07f556.png" 
              alt="Colégio Leibniz Logo" 
              className="h-12 md:h-14 lg:h-16 xl:h-18 w-auto transition-transform duration-300 hover:scale-105"
            />
          </Link>
          
          <nav className="hidden md:flex space-x-4 lg:space-x-6 xl:space-x-8 font-montserrat">
            {desktopNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm lg:text-base xl:text-lg font-semibold transition-all duration-300 relative pb-1 px-2 py-2 min-h-[44px] flex items-center touch-target ${
                  isActive(item.href) 
                    ? 'text-accent after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent after:rounded-full' 
                    : 'text-off-white/90 hover:text-accent hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-accent hover:after:rounded-full hover:after:transition-all hover:after:duration-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center space-x-3">
            <Button
              onClick={openWhatsApp}
              variant="energy"
              className="font-montserrat font-semibold px-3 md:px-4 lg:px-6 py-2 md:py-3 lg:py-4 text-xs md:text-sm lg:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg transform min-h-[44px] touch-target"
            >
              <span className="hidden sm:inline">Fale Conosco</span>
              <span className="sm:hidden">Contato</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
