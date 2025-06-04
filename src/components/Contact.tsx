
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section 
      id="contato" 
      className="section-padding relative"
      style={{
        background: 'linear-gradient(135deg, #8B1538 0%, #4A154B 50%, #1e3a8a 100%)'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Entre em Contato
          </h2>
          <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto">
            Estamos prontos para atendê-lo e esclarecer todas as suas dúvidas sobre nossa metodologia de ensino.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Localização */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <MapPin className="h-8 w-8 text-yellow-300 mr-3" />
              <h3 className="text-xl font-semibold text-white">Localização</h3>
            </div>
            <div className="space-y-2 text-white">
              <p className="text-white">Avenida Paulista, 720</p>
              <p className="text-white">Parque Sagrada Família</p>
              <p className="text-white">Rondonópolis - MT, 78735-223</p>
            </div>
          </div>

          {/* Contatos */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <Phone className="h-8 w-8 text-green-300 mr-3" />
              <h3 className="text-xl font-semibold text-white">Contatos</h3>
            </div>
            <div className="space-y-3 text-white">
              <a 
                href="tel:6634218824" 
                className="flex items-center hover:text-yellow-300 transition-colors text-white"
              >
                <Phone className="h-4 w-4 mr-2" />
                (66) 3421-8824
              </a>
              <a 
                href="https://wa.me/5566996781284" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center hover:text-green-300 transition-colors text-white"
              >
                <Phone className="h-4 w-4 mr-2" />
                (66) 99678-1284
              </a>
              <a 
                href="mailto:admleibniz@gmail.com"
                className="flex items-center hover:text-blue-300 transition-colors text-white"
              >
                <Mail className="h-4 w-4 mr-2" />
                admleibniz@gmail.com
              </a>
            </div>
          </div>

          {/* Horário de Funcionamento */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <Clock className="h-8 w-8 text-blue-300 mr-3" />
              <h3 className="text-xl font-semibold text-white">Horário de Funcionamento</h3>
            </div>
            <div className="space-y-2 text-white">
              <p className="text-white">Segunda à sexta: 7h às 23h</p>
              <p className="text-white">Sábado: 7h às 18h</p>
              <p className="text-white">Domingo: Fechado</p>
            </div>
          </div>
        </div>

        {/* Mapa */}
        <div className="mt-12 sm:mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-6 text-center text-white">Nossa Localização</h3>
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.234567890123!2d-54.63456789012345!3d-16.46789012345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDI4JzA0LjQiUyA1NMKwMzgnMDQuNCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Colégio Leibniz"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
