
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-blue text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-3 mb-4">
              <img 
                src="/lovable-uploads/e9344ceb-6cab-42df-be96-aaa83c07f556.png" 
                alt="Colégio Leibniz" 
                className="h-10 sm:h-12 w-auto"
              />
            </div>
            <p className="text-white/90 text-xs sm:text-sm leading-relaxed font-montserrat">
              Mais de 21 anos de experiência em educação de qualidade, 
              preparando alunos para o sucesso acadêmico e pessoal com excelência e dedicação.
            </p>
          </div>

          {/* Mapa do Site */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 font-montserrat text-energy-yellow">
              Mapa do Site
            </h4>
            <ul className="space-y-1 sm:space-y-2 font-montserrat">
              <li>
                <a href="/" className="text-white/90 hover:text-white transition-colors text-xs sm:text-sm hover:underline py-1 block min-h-[44px] flex items-center justify-center sm:justify-start touch-target">
                  Início
                </a>
              </li>
              <li>
                <a href="/sobre-nos" className="text-white/90 hover:text-white transition-colors text-xs sm:text-sm hover:underline py-1 block min-h-[44px] flex items-center justify-center sm:justify-start touch-target">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="/o-colegio" className="text-white/90 hover:text-white transition-colors text-xs sm:text-sm hover:underline py-1 block min-h-[44px] flex items-center justify-center sm:justify-start touch-target">
                  O Colégio
                </a>
              </li>
              <li>
                <a href="/niveis-ensino" className="text-white/90 hover:text-white transition-colors text-xs sm:text-sm hover:underline py-1 block min-h-[44px] flex items-center justify-center sm:justify-start touch-target">
                  Níveis de Ensino
                </a>
              </li>
              <li>
                <a href="/dependencias" className="text-white/90 hover:text-white transition-colors text-xs sm:text-sm hover:underline py-1 block min-h-[44px] flex items-center justify-center sm:justify-start touch-target">
                  Dependências
                </a>
              </li>
              <li>
                <a href="/contato" className="text-white/90 hover:text-white transition-colors text-xs sm:text-sm hover:underline py-1 block min-h-[44px] flex items-center justify-center sm:justify-start touch-target">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Informações de Contato */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 font-montserrat text-energy-yellow">
              Contato
            </h4>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm font-montserrat">
              <div className="flex items-start justify-center sm:justify-start space-x-2 py-1">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mt-1 flex-shrink-0 text-energy-yellow" />
                <span className="text-white text-center sm:text-left">
                  Av. Paulista, 720<br />
                  Parque Sagrada Família<br />
                  Rondonópolis - MT, 78735-223
                </span>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-2 py-1 min-h-[44px] touch-target">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-energy-yellow" />
                <span className="text-white">(66) 3421-8824</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-2 py-1 min-h-[44px] touch-target">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-energy-yellow" />
                <span className="text-white">(66) 99678-1284</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-2 py-1 min-h-[44px] touch-target">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-energy-yellow" />
                <span className="text-white">admleibniz@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 font-montserrat text-energy-yellow">
              Redes Sociais
            </h4>
            <div className="flex space-x-2 sm:space-x-3 mb-4 sm:mb-6 justify-center sm:justify-start">
              <a 
                href="https://www.facebook.com/share/16ZqmDKz7N/?mibextid=wwXIfr" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 rounded-full bg-energy-yellow hover:bg-energy-yellow/90 transition-all duration-300 hover:scale-110 min-h-[44px] min-w-[44px] flex items-center justify-center touch-target"
                aria-label="Facebook do Colégio Leibniz"
              >
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5 text-dark-blue" />
              </a>
              <a 
                href="https://www.instagram.com/colegio.leibniz?igsh=bHZpa2tzMHZwYm41" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 rounded-full bg-energy-yellow hover:bg-energy-yellow/90 transition-all duration-300 hover:scale-110 min-h-[44px] min-w-[44px] flex items-center justify-center touch-target"
                aria-label="Instagram do Colégio Leibniz"
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5 text-dark-blue" />
              </a>
              <a 
                href="#" 
                className="p-2 sm:p-3 rounded-full bg-energy-yellow hover:bg-energy-yellow/90 transition-all duration-300 hover:scale-110 min-h-[44px] min-w-[44px] flex items-center justify-center touch-target"
                aria-label="YouTube do Colégio Leibniz"
              >
                <Youtube className="h-4 w-4 sm:h-5 sm:w-5 text-dark-blue" />
              </a>
            </div>
            
            <div className="text-xs sm:text-sm font-montserrat text-center sm:text-left">
              <p className="mb-1 text-white font-semibold">Funcionamento:</p>
              <p className="text-white/90">Segunda à sexta: 7h às 23h</p>
              <p className="text-white/90">Sábado: 7h às 18h</p>
              <p className="text-white/90">Domingo: Fechado</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/90 text-xs sm:text-sm font-montserrat text-center md:text-left">
              © {currentYear} Colégio Leibniz. Todos os direitos reservados.
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 font-montserrat">
              <a href="#" className="text-white/80 text-xs sm:text-sm hover:text-white transition-colors hover:underline text-center py-2 min-h-[44px] flex items-center justify-center touch-target">
                Política de Privacidade
              </a>
              <a href="#" className="text-white/80 text-xs sm:text-sm hover:text-white transition-colors hover:underline text-center py-2 min-h-[44px] flex items-center justify-center touch-target">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
