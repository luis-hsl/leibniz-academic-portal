
import { Card, CardContent } from "@/components/ui/card";
import OptimizedImage from "./OptimizedImage";

interface ImageData {
  src: string;
  alt: string;
  title: string;
}

interface DependencySectionProps {
  title: string;
  description: string;
  images: ImageData[];
  bgColor?: string;
}

const DependencySection = ({ title, description, images, bgColor = "bg-white" }: DependencySectionProps) => {
  return (
    <section className={`py-12 sm:py-16 md:py-20 ${bgColor}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">{title}</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              {description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {images.map((image, index) => (
              <Card key={index} 
                    className="shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden group animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <div className="aspect-[4/3] relative">
                      <OptimizedImage
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        width={400}
                        height={300}
                        priority={index < 3}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6 bg-white transition-all duration-300 group-hover:bg-gray-50">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-red-600">
                      {image.title}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DependencySection;
