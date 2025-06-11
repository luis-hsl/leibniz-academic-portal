
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
    { name: "Sobre Nós", href: "/sobre-nos" },
    { name: "O Colégio", href: "/o-colegio" },
    { name: "Níveis de Ensino", href: "/niveis-ensino" },
    { name: "Dependências", href: "/dependencias" },
    { name: "Blog", href: "/blog" },
    { name: "Contato", href: "/contato" },
  ];

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
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/70f51f89-d453-407b-b95c-5310164445ea.png" 
                alt="Colégio Leibniz Logo" 
                className="h-10 w-auto"
              />
            </Link>
            
            <div className="flex items-center space-x-2">
              <Button 
                onClick={openWhatsApp}
                size="sm"
                className="bg-green-600 hover:bg-green-700 text-white text-xs px-3 py-2"
              >
                WhatsApp
              </Button>
              
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="p-2">
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-64">
                  <nav className="flex flex-col space-y-4 mt-8">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`text-lg font-medium transition-colors hover:text-red-600 ${
                          isActive(item.href) ? 'text-red-600' : 'text-gray-900'
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
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/70f51f89-d453-407b-b95c-5310164445ea.png" 
              alt="Colégio Leibniz Logo" 
              className="h-10 lg:h-12 w-auto"
            />
          </Link>
          
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm lg:text-base font-medium transition-colors hover:text-red-600 ${
                  isActive(item.href) ? 'text-red-600' : 'text-gray-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <Button 
            onClick={openWhatsApp}
            className="bg-green-600 hover:bg-green-700 text-white font-medium px-4 lg:px-6 py-2 lg:py-3 text-sm lg:text-base"
          >
            Fale Conosco
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
