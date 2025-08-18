
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#003366' }} className="text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/e9344ceb-6cab-42df-be96-aaa83c07f556.png" 
                alt="Colégio Leibniz" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-white/90 text-sm leading-relaxed font-montserrat">
              Mais de 21 anos de experiência em educação de qualidade, 
              preparando alunos para o sucesso acadêmico e pessoal com excelência e dedicação.
            </p>
          </div>

          {/* Mapa do Site */}
          <div>
            <h4 className="text-lg font-bold mb-4 font-montserrat" style={{ color: '#fec10e' }}>
              Mapa do Site
            </h4>
            <ul className="space-y-2 font-montserrat">
              <li>
                <a href="/" className="text-white/90 hover:text-white transition-colors text-sm hover:underline">
                  Início
                </a>
              </li>
              <li>
                <a href="/sobre-nos" className="text-white/90 hover:text-white transition-colors text-sm hover:underline">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="/o-colegio" className="text-white/90 hover:text-white transition-colors text-sm hover:underline">
                  O Colégio
                </a>
              </li>
              <li>
                <a href="/niveis-ensino" className="text-white/90 hover:text-white transition-colors text-sm hover:underline">
                  Níveis de Ensino
                </a>
              </li>
              <li>
                <a href="/dependencias" className="text-white/90 hover:text-white transition-colors text-sm hover:underline">
                  Dependências
                </a>
              </li>
              <li>
                <a href="/contato" className="text-white/90 hover:text-white transition-colors text-sm hover:underline">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Informações de Contato */}
          <div>
            <h4 className="text-lg font-bold mb-4 font-montserrat" style={{ color: '#fec10e' }}>
              Contato
            </h4>
            <div className="space-y-3 text-sm font-montserrat">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" style={{ color: '#fec10e' }} />
                <span className="text-white/90">
                  Av. Paulista, 720<br />
                  Parque Sagrada Família<br />
                  Rondonópolis - MT, 78735-223
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" style={{ color: '#fec10e' }} />
                <span className="text-white/90">(66) 3421-8824</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" style={{ color: '#fec10e' }} />
                <span className="text-white/90">(66) 99678-1284</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" style={{ color: '#fec10e' }} />
                <span className="text-white/90">admleibniz@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div>
            <h4 className="text-lg font-bold mb-4 font-montserrat" style={{ color: '#fec10e' }}>
              Redes Sociais
            </h4>
            <div className="flex space-x-3 mb-6">
              <a 
                href="https://www.facebook.com/share/16ZqmDKz7N/?mibextid=wwXIfr" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: '#fec10e' }}
                aria-label="Facebook do Colégio Leibniz"
              >
                <Facebook className="h-5 w-5" style={{ color: '#003366' }} />
              </a>
              <a 
                href="https://www.instagram.com/colegio.leibniz?igsh=bHZpa2tzMHZwYm41" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: '#fec10e' }}
                aria-label="Instagram do Colégio Leibniz"
              >
                <Instagram className="h-5 w-5" style={{ color: '#003366' }} />
              </a>
              <a 
                href="#" 
                className="p-3 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: '#fec10e' }}
                aria-label="YouTube do Colégio Leibniz"
              >
                <Youtube className="h-5 w-5" style={{ color: '#003366' }} />
              </a>
            </div>
            
            <div className="text-xs text-white/80 font-montserrat">
              <p className="mb-1">Horário de Funcionamento:</p>
              <p>Seg-Sex: 7h às 18h</p>
              <p>Sáb: 7h às 12h</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/90 text-sm font-montserrat">
              © {currentYear} Colégio Leibniz. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 font-montserrat">
              <a href="#" className="text-white/80 text-sm hover:text-white transition-colors hover:underline">
                Política de Privacidade
              </a>
              <a href="#" className="text-white/80 text-sm hover:text-white transition-colors hover:underline">
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
