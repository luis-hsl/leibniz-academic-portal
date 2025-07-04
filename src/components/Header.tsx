import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isStudentAreaOpen, setIsStudentAreaOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  const navigation = [
    { name: "Início", href: "/" },
    { name: "Sobre Nós", href: "/sobre-nos" },
    { name: "O Colégio", href: "/o-colegio" },
    { name: "Níveis de Ensino", href: "/niveis-ensino" },
    { name: "Dependências", href: "/dependencias" },
    { name: "Alunos Aprovados", href: "/alunos-aprovados" },
    { name: "Conheça Nosso Colégio", href: "/conheca-nosso-colegio" },
    { name: "Blog", href: "/blog" },
    { name: "Contato", href: "/contato" },
  ];

  const desktopNavigation = navigation.filter(item => 
    item.name !== "Blog" && item.name !== "Contato" && item.name !== "Alunos Aprovados" && item.name !== "Conheça Nosso Colégio"
  );

  const studentAreaOptions = [
    { name: "Portal Bernoulli", url: "https://mb4.bernoulli.com.br/login", color: "bg-green-600 hover:bg-green-700 text-white" },
    { name: "Portal do Professor", url: "https://www.sponteeducacional.net.br/", color: "bg-blue-600 hover:bg-blue-700 text-white" },
    { name: "Portal do Aluno", url: "https://portal.sponteeducacional.net.br/vest", color: "bg-red-600 hover:bg-red-700 text-white" },
    { name: "Portal Redação", url: "https://app.redacaonline.com.br/colegio-leibniz/aluno/login", color: "bg-yellow-600 hover:bg-yellow-700 text-white" },
  ];

  const openWhatsApp = () => {
    const message = encodeURIComponent("Olá, gostaria de falar com um atendente agora para tirar algumas dúvidas. Pode me ajudar?");
    window.open(`https://wa.me/5566996781284?text=${message}`, "_blank");
  };

  const openStudentPortal = (url: string) => {
    window.open(url, "_blank");
    setIsStudentAreaOpen(false);
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
            <Link to="/" className="flex items-center flex-shrink-0">
              <img 
                src="/lovable-uploads/70f51f89-d453-407b-b95c-5310164445ea.png" 
                alt="Colégio Leibniz Logo" 
                className="h-12 w-auto object-contain"
                loading="eager"
                width="120"
                height="48"
              />
            </Link>
            
            <div className="flex items-center space-x-2">
              <Popover open={isStudentAreaOpen} onOpenChange={setIsStudentAreaOpen}>
                <PopoverTrigger asChild>
                  <Button 
                    size="sm"
                    className="bg-red-600 text-white text-xs px-2 py-2 flex-shrink-0 flex items-center gap-1"
                  >
                    Área do Aluno
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-56 p-2">
                  <div className="flex flex-col space-y-2">
                    {studentAreaOptions.map((option) => (
                      <Button
                        key={option.name}
                        className={`justify-start text-sm h-auto py-2 px-3 transition-all duration-300 ${option.color}`}
                        onClick={() => openStudentPortal(option.url)}
                      >
                        {option.name}
                      </Button>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
              
              <Button 
                onClick={openWhatsApp}
                size="sm"
                className="bg-green-600 hover:bg-green-700 active:bg-green-800 text-white text-xs px-2 py-2 flex-shrink-0 transition-all duration-300 hover:scale-105 hover:shadow-md"
              >
                WhatsApp
              </Button>
              
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="p-2 flex-shrink-0">
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
              className="h-16 lg:h-20 w-auto"
            />
          </Link>
          
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {desktopNavigation.map((item) => (
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
          
          <div className="flex items-center space-x-3">
            <Popover open={isStudentAreaOpen} onOpenChange={setIsStudentAreaOpen}>
              <PopoverTrigger asChild>
                <Button 
                  className="bg-red-600 text-white font-medium px-4 lg:px-6 py-3 lg:py-4 text-sm lg:text-base flex items-center gap-2"
                >
                  Área do Aluno
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isStudentAreaOpen ? 'rotate-180' : ''}`} />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-64 p-2 shadow-xl border-0 bg-white">
                <div className="flex flex-col space-y-2">
                  {studentAreaOptions.map((option) => (
                    <Button
                      key={option.name}
                      className={`justify-start text-sm h-auto py-3 px-3 transition-all duration-300 ${option.color}`}
                      onClick={() => openStudentPortal(option.url)}
                    >
                      {option.name}
                    </Button>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
            
            <Button 
              onClick={openWhatsApp}
              className="bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-medium px-4 lg:px-6 py-3 lg:py-4 text-sm lg:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
            >
              Fale Conosco
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
