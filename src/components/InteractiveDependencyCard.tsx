import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import OptimizedImage from "./OptimizedImage";

interface ImageData {
  src: string;
  alt: string;
  title: string;
}

interface InteractiveDependencyCardProps {
  title: string;
  description: string;
  images: ImageData[];
  className?: string;
}

const InteractiveDependencyCard = ({ 
  title, 
  description, 
  images, 
  className = "" 
}: InteractiveDependencyCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const mainImage = images[0];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      {/* Main Card */}
      <div
        className={`group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${className}`}
        onClick={() => setIsExpanded(true)}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${mainImage.src}')` }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-white text-xl font-bold font-montserrat mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-white/80 text-sm">
            Clique para explorar
          </p>
        </div>

        {/* Hover indicator */}
        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-2 h-2 bg-white rounded-full" />
        </div>
      </div>

      {/* Expanded Modal */}
      {isExpanded && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full h-[85vh] max-h-[90vh] bg-white rounded-2xl overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid lg:grid-cols-2 h-full max-h-[90vh]">
              {/* Image Section */}
              <div className="relative bg-gray-100 h-full">
                <OptimizedImage
                  src={images[currentImageIndex].src}
                  alt={images[currentImageIndex].alt}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Image Navigation */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Image Counter */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                      {currentImageIndex + 1} / {images.length}
                    </div>
                  </>
                )}
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col justify-center overflow-auto">
                <h2 className="text-3xl font-bold text-primary mb-6 font-montserrat">
                  {title}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {description}
                </p>

                {/* Image Thumbnails */}
                {images.length > 1 && (
                  <div className="grid grid-cols-4 gap-2">
                    {images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`aspect-square rounded-lg overflow-hidden ${
                          index === currentImageIndex ? 'ring-2 ring-primary' : ''
                        }`}
                      >
                        <OptimizedImage
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InteractiveDependencyCard;