
import { useState } from "react";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const studentPortals = [
    { name: "Portal Bernoulli", url: "https://mb4.bernoulli.com.br/login" },
    { name: "Portal do Professor", url: "https://www.sponteeducacional.net.br/" },
    { name: "Portal do Aluno", url: "https://portal.sponteeducacional.net.br/Default.aspx" },
    { name: "Portal Redação", url: "https://app.redacaonline.com.br/colegio-leibniz/aluno/login" }
  ];

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
              <Link to="/">
                <img 
                  src="/lovable-uploads/4f312db7-f2f6-44a1-a91e-24eb6e23ea95.png" 
                  alt="Colégio Leibniz" 
                  className="h-16 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-red-600 transition-colors">
                Início
              </Link>
              <Link to="/sobre-nos" className="text-gray-700 hover:text-red-600 transition-colors">
                Sobre Nós
              </Link>
              <Link to="/niveis-ensino" className="text-gray-700 hover:text-red-600 transition-colors">
                Níveis de Ensino
              </Link>
              <Link to="/o-colegio" className="text-gray-700 hover:text-red-600 transition-colors">
                O Colégio
              </Link>
              <Link to="/contato" className="text-gray-700 hover:text-red-600 transition-colors">
                Contato
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="hidden md:flex items-center space-x-1">
                    <span>Área do Aluno</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  {studentPortals.map((portal) => (
                    <DropdownMenuItem key={portal.name} asChild>
                      <a href={portal.url} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                        {portal.name}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

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
                <Link to="/" className="text-left text-gray-700 hover:text-red-600 py-2" onClick={() => setIsMenuOpen(false)}>
                  Início
                </Link>
                <Link to="/sobre-nos" className="text-left text-gray-700 hover:text-red-600 py-2" onClick={() => setIsMenuOpen(false)}>
                  Sobre Nós
                </Link>
                <Link to="/niveis-ensino" className="text-left text-gray-700 hover:text-red-600 py-2" onClick={() => setIsMenuOpen(false)}>
                  Níveis de Ensino
                </Link>
                <Link to="/o-colegio" className="text-left text-gray-700 hover:text-red-600 py-2" onClick={() => setIsMenuOpen(false)}>
                  O Colégio
                </Link>
                <Link to="/contato" className="text-left text-gray-700 hover:text-red-600 py-2" onClick={() => setIsMenuOpen(false)}>
                  Contato
                </Link>
                
                {/* Mobile Student Portals */}
                <div className="pt-2 border-t">
                  <p className="text-sm text-gray-500 mb-2">Área do Aluno:</p>
                  {studentPortals.map((portal) => (
                    <a 
                      key={portal.name}
                      href={portal.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block text-left text-gray-700 hover:text-red-600 py-1 pl-4 text-sm"
                    >
                      {portal.name}
                    </a>
                  ))}
                </div>

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
