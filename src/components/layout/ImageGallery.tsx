import { useState } from "react";
import OptimizedImage from "@/components/OptimizedImage";
import ImageModal from "@/components/ImageModal";

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageGalleryProps {
  title: string;
  images: GalleryImage[];
  gridCols?: 3 | 4;
}

const ImageGallery = ({ title, images, gridCols = 3 }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (imageSrc: string, index: number) => {
    setSelectedImage(imageSrc);
    setSelectedImageIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const gridColsClass = gridCols === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-2 lg:grid-cols-3';

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight font-montserrat">
              {title}
            </h2>
          </div>

          {/* Image Grid */}
          <div className={`grid grid-cols-1 ${gridColsClass} gap-6 md:gap-8`}>
            {images.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => handleImageClick(image.src, index)}
              >
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  priority={index < 4} // Priorize first 4 images
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <p className="text-white font-semibold text-lg font-montserrat">
                      {image.caption || image.alt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          isOpen={true}
          onClose={handleCloseModal}
          src={selectedImage}
          alt={images[selectedImageIndex]?.alt || "Imagem"}
          title={images[selectedImageIndex]?.caption || images[selectedImageIndex]?.alt || "Imagem"}
        />
      )}
    </section>
  );
};

export default ImageGallery;