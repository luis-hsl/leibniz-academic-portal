
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section 
      id="contato" 
      className="relative py-20 md:py-24 lg:py-32"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 51, 102, 0.85), rgba(0, 51, 102, 0.95)), url('/lovable-uploads/2784febf-3d6e-4519-a30c-fc0df6826ec8.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            Entre em Contato
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para atendê-lo e esclarecer todas as suas dúvidas sobre nossa metodologia de ensino.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {/* Localização */}
          <div 
            className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 shadow-2xl"
            style={{
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}
          >
            <div className="flex items-center mb-6">
              <MapPin className="h-8 w-8 text-accent mr-4" style={{ color: '#fec10e' }} />
              <h3 className="text-xl font-semibold text-white">Localização</h3>
            </div>
            <div className="space-y-3 text-white">
              <p>Avenida Paulista, 720</p>
              <p>Parque Sagrada Família</p>
              <p>Rondonópolis - MT, 78735-223</p>
            </div>
          </div>

          {/* Contatos */}
          <div 
            className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 shadow-2xl"
            style={{
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}
          >
            <div className="flex items-center mb-6">
              <Phone className="h-8 w-8 text-accent mr-4" style={{ color: '#fec10e' }} />
              <h3 className="text-xl font-semibold text-white">Contatos</h3>
            </div>
            <div className="space-y-4 text-white">
              <a 
                href="tel:6634218824" 
                className="flex items-center hover:text-accent transition-colors duration-300"
                style={{ '--hover-color': '#fec10e' } as React.CSSProperties}
              >
                <Phone className="h-4 w-4 mr-3" />
                (66) 3421-8824
              </a>
              <a 
                href="https://wa.me/5566996781284" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center hover:text-accent transition-colors duration-300"
                style={{ '--hover-color': '#fec10e' } as React.CSSProperties}
              >
                <Phone className="h-4 w-4 mr-3" />
                (66) 99678-1284
              </a>
              <a 
                href="mailto:admleibniz@gmail.com"
                className="flex items-center hover:text-accent transition-colors duration-300"
                style={{ '--hover-color': '#fec10e' } as React.CSSProperties}
              >
                <Mail className="h-4 w-4 mr-3" />
                admleibniz@gmail.com
              </a>
            </div>
          </div>

          {/* Horário de Funcionamento */}
          <div 
            className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 shadow-2xl md:col-span-2 lg:col-span-1"
            style={{
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}
          >
            <div className="flex items-center mb-6">
              <Clock className="h-8 w-8 text-accent mr-4" style={{ color: '#fec10e' }} />
              <h3 className="text-xl font-semibold text-white">Funcionamento</h3>
            </div>
            <div className="space-y-3 text-white">
              <p>Segunda à sexta: 7h às 23h</p>
              <p>Sábado: 7h às 18h</p>
              <p>Domingo: Fechado</p>
            </div>
          </div>
        </div>

        {/* Mapa com Glassmorphism */}
        <div 
          className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 shadow-2xl"
          style={{
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)'
          }}
        >
          <h3 className="text-2xl font-semibold mb-8 text-center text-white">Nossa Localização</h3>
          <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.234567890123!2d-54.644722!3d-16.469167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939dcabd6a3f5c1f%3A0x7f8b5d2c1e4a3b6d!2sAv.%20Paulista%2C%20720%20-%20Parque%20Sagrada%20Fam%C3%ADlia%2C%20Rondon%C3%B3polis%20-%20MT%2C%2078735-223!5e0!3m2!1spt-BR!2sbr!4v1704067200000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Colégio Leibniz - Avenida Paulista, 720, Rondonópolis - MT"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
