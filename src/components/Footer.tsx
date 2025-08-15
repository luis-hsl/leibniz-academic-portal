
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/70f51f89-d453-407b-b95c-5310164445ea.png" 
                alt="Colégio Leibniz" 
                className="h-10 w-10"
              />
              <div>
                <h3 className="text-xl font-bold text-red-400">Colégio Leibniz</h3>
                <p className="text-sm text-gray-300">Excelência em Educação</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Mais de 21 anos de experiência em educação de qualidade, 
              preparando alunos para o sucesso acadêmico e pessoal.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-red-400">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-300 hover:text-white transition-colors">Início</a></li>
              <li><a href="#sobre" className="text-gray-300 hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#ensino" className="text-gray-300 hover:text-white transition-colors">Níveis de Ensino</a></li>
              <li><a href="#depoimentos" className="text-gray-300 hover:text-white transition-colors">Depoimentos</a></li>
              <li><a href="#blog" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Education Levels */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-red-400">Níveis de Ensino</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">Ensino Infantil</li>
              <li className="text-gray-300">Fundamental I e II</li>
              <li className="text-gray-300">Ensino Médio</li>
              <li className="text-gray-300">Preparatório ENEM</li>
              <li className="text-gray-300">Cursos Extracurriculares</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-red-400">Contato</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-red-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Av. Paulista, 720<br />
                  Rondonópolis - MT
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-red-400" />
                <span className="text-gray-300">(66) 3421-8824</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-red-400" />
                <span className="text-gray-300">admleibniz@gmail.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3 text-red-400">Redes Sociais</h5>
              <div className="flex space-x-3">
                <a 
                  href="https://www.facebook.com/share/16ZqmDKz7N/?mibextid=wwXIfr" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors"
                  aria-label="Facebook do Colégio Leibniz"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a 
                  href="https://www.instagram.com/colegio.leibniz?igsh=bHZpa2tzMHZwYm41" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition-colors"
                  aria-label="Instagram do Colégio Leibniz"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="#" className="bg-red-600 p-2 rounded-full hover:bg-red-700 transition-colors">
                  <Youtube className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {currentYear} Colégio Leibniz. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">
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
