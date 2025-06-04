
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

  const openWhatsAppVisit = () => {
    const message = encodeURIComponent("Olá, tenho interesse em agendar uma visita ao Colégio Leibniz. Pode me ajudar?");
    window.open(`https://wa.me/5566996781284?text=${message}`, "_blank");
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
      <div className="bg-blue-900 text-white py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-sm font-medium">
          <div className="flex items-center space-x-6">
            <span className="flex items-center hover:text-blue-200 transition-colors">
              <Phone className="h-4 w-4 mr-2" />
              <strong>(66) 3421-8824</strong>
            </span>
            <span className="flex items-center hover:text-blue-200 transition-colors">
              <Mail className="h-4 w-4 mr-2" />
              <strong>admleibniz@gmail.com</strong>
            </span>
          </div>
          <div className="hover:text-blue-200 transition-colors">
            <span className="font-semibold">WhatsApp: (66) 99678-1284</span>
          </div>
        </div>
      </div>

      {/* Main header - Now sticky */}
      <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/" className="hover:opacity-80 transition-opacity">
                <img 
                  src="/lovable-uploads/4f312db7-f2f6-44a1-a91e-24eb6e23ea95.png" 
                  alt="Colégio Leibniz" 
                  className="h-12 sm:h-16 lg:h-18 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation - Enhanced typography */}
            <nav className="hidden lg:flex space-x-8 xl:space-x-10">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-red-600 transition-colors duration-300 font-semibold text-base xl:text-lg relative group"
              >
                Início
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                to="/sobre-nos" 
                className="text-gray-700 hover:text-red-600 transition-colors duration-300 font-semibold text-base xl:text-lg relative group"
              >
                Sobre Nós
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                to="/niveis-ensino" 
                className="text-gray-700 hover:text-red-600 transition-colors duration-300 font-semibold text-base xl:text-lg relative group"
              >
                Níveis de Ensino
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                to="/o-colegio" 
                className="text-gray-700 hover:text-red-600 transition-colors duration-300 font-semibold text-base xl:text-lg relative group"
              >
                O Colégio
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                to="/blog" 
                className="text-gray-700 hover:text-red-600 transition-colors duration-300 font-semibold text-base xl:text-lg relative group"
              >
                Blog
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                to="/contato" 
                className="text-gray-700 hover:text-red-600 transition-colors duration-300 font-semibold text-base xl:text-lg relative group"
              >
                Contato
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </nav>

            <div className="flex items-center space-x-3 sm:space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="hidden md:flex items-center space-x-2 text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-3 font-semibold border-2 hover:bg-gray-50 transition-all duration-300"
                  >
                    <span>Área do Aluno</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 z-50">
                  {studentPortals.map((portal) => (
                    <DropdownMenuItem key={portal.name} asChild>
                      <a 
                        href={portal.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="cursor-pointer font-medium hover:bg-gray-100 transition-colors"
                      >
                        {portal.name}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Button 
                onClick={openWhatsAppVisit}
                className="bg-red-600 hover:bg-red-700 text-white hidden md:block text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 font-bold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Agende uma Visita
              </Button>

              {/* Mobile menu button - Enhanced */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-3 rounded-md hover:bg-gray-100 transition-colors duration-300"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-gray-700" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation - Enhanced responsiveness */}
          {isMenuOpen && (
            <nav className="lg:hidden mt-6 pb-6 border-t pt-6 bg-white">
              <div className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  className="text-left text-gray-700 hover:text-red-600 py-3 text-lg font-semibold border-b border-gray-100 hover:bg-gray-50 px-2 rounded transition-all duration-300" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Início
                </Link>
                <Link 
                  to="/sobre-nos" 
                  className="text-left text-gray-700 hover:text-red-600 py-3 text-lg font-semibold border-b border-gray-100 hover:bg-gray-50 px-2 rounded transition-all duration-300" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sobre Nós
                </Link>
                <Link 
                  to="/niveis-ensino" 
                  className="text-left text-gray-700 hover:text-red-600 py-3 text-lg font-semibold border-b border-gray-100 hover:bg-gray-50 px-2 rounded transition-all duration-300" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Níveis de Ensino
                </Link>
                <Link 
                  to="/o-colegio" 
                  className="text-left text-gray-700 hover:text-red-600 py-3 text-lg font-semibold border-b border-gray-100 hover:bg-gray-50 px-2 rounded transition-all duration-300" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  O Colégio
                </Link>
                <Link 
                  to="/blog" 
                  className="text-left text-gray-700 hover:text-red-600 py-3 text-lg font-semibold border-b border-gray-100 hover:bg-gray-50 px-2 rounded transition-all duration-300" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link 
                  to="/contato" 
                  className="text-left text-gray-700 hover:text-red-600 py-3 text-lg font-semibold border-b border-gray-100 hover:bg-gray-50 px-2 rounded transition-all duration-300" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contato
                </Link>
                
                {/* Mobile Top Bar Info - Enhanced */}
                <div className="pt-4 border-t border-gray-200 md:hidden">
                  <h3 className="text-gray-900 font-bold text-lg mb-3">Fale Conosco</h3>
                  <div className="flex flex-col space-y-3 text-base text-gray-600">
                    <a 
                      href="tel:6634218824"
                      className="flex items-center hover:text-red-600 transition-colors p-2 hover:bg-gray-50 rounded"
                    >
                      <Phone className="h-5 w-5 mr-3 text-red-600" />
                      <strong>(66) 3421-8824</strong>
                    </a>
                    <a 
                      href="mailto:admleibniz@gmail.com"
                      className="flex items-center hover:text-red-600 transition-colors p-2 hover:bg-gray-50 rounded"
                    >
                      <Mail className="h-5 w-5 mr-3 text-red-600" />
                      <strong>admleibniz@gmail.com</strong>
                    </a>
                    <a 
                      href="https://wa.me/5566996781284"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 font-bold hover:text-green-700 transition-colors p-2 hover:bg-gray-50 rounded"
                    >
                      WhatsApp: (66) 99678-1284
                    </a>
                  </div>
                </div>
                
                {/* Mobile Student Portals - Enhanced */}
                <div className="pt-4 border-t border-gray-200">
                  <h3 className="text-gray-900 font-bold text-lg mb-3">Área do Aluno</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {studentPortals.map((portal) => (
                      <a 
                        key={portal.name}
                        href={portal.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block text-left text-gray-700 hover:text-red-600 py-3 pl-4 text-base font-medium hover:bg-gray-50 rounded transition-all duration-300 border border-gray-200"
                      >
                        {portal.name}
                      </a>
                    ))}
                  </div>
                </div>

                <Button 
                  onClick={openWhatsAppVisit}
                  className="bg-red-600 hover:bg-red-700 text-white mt-6 w-full py-4 text-lg font-bold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
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
