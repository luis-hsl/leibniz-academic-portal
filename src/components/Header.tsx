import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-blue-900 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Phone className="h-4 w-4 mr-1" />
              (66) 3421-8824
            </span>
            <span className="flex items-center">
              <Mail className="h-4 w-4 mr-1" />
              admleibniz@gmail.com
            </span>
          </div>
          <div className="hidden md:block">
            <span>WhatsApp: (66) 99678-1284</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/4f312db7-f2f6-44a1-a91e-24eb6e23ea95.png" 
                alt="Colégio Leibniz" 
                className="h-20 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <button onClick={() => scrollToSection("inicio")} className="text-gray-700 hover:text-red-600 transition-colors">
                Início
              </button>
              <button onClick={() => scrollToSection("sobre")} className="text-gray-700 hover:text-red-600 transition-colors">
                Sobre
              </button>
              <button onClick={() => scrollToSection("ensino")} className="text-gray-700 hover:text-red-600 transition-colors">
                Níveis de Ensino
              </button>
              <button onClick={() => scrollToSection("depoimentos")} className="text-gray-700 hover:text-red-600 transition-colors">
                Depoimentos
              </button>
              <button onClick={() => scrollToSection("blog")} className="text-gray-700 hover:text-red-600 transition-colors">
                Blog
              </button>
              <button onClick={() => scrollToSection("contato")} className="text-gray-700 hover:text-red-600 transition-colors">
                Contato
              </button>
            </nav>

            <div className="flex items-center space-x-4">
              <Button 
                onClick={() => scrollToSection("agendar")}
                className="bg-red-600 hover:bg-red-700 text-white hidden md:block"
              >
                Agende uma Visita
              </Button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 border-t pt-4">
              <div className="flex flex-col space-y-2">
                <button onClick={() => scrollToSection("inicio")} className="text-left text-gray-700 hover:text-red-600 py-2">
                  Início
                </button>
                <button onClick={() => scrollToSection("sobre")} className="text-left text-gray-700 hover:text-red-600 py-2">
                  Sobre
                </button>
                <button onClick={() => scrollToSection("ensino")} className="text-left text-gray-700 hover:text-red-600 py-2">
                  Níveis de Ensino
                </button>
                <button onClick={() => scrollToSection("depoimentos")} className="text-left text-gray-700 hover:text-red-600 py-2">
                  Depoimentos
                </button>
                <button onClick={() => scrollToSection("blog")} className="text-left text-gray-700 hover:text-red-600 py-2">
                  Blog
                </button>
                <button onClick={() => scrollToSection("contato")} className="text-left text-gray-700 hover:text-red-600 py-2">
                  Contato
                </button>
                <Button 
                  onClick={() => scrollToSection("agendar")}
                  className="bg-red-600 hover:bg-red-700 text-white mt-2"
                >
                  Agende uma Visita
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
