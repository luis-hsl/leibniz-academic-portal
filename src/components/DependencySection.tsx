
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
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">{title}</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              {description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {images.map((image, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="p-0">
                  <OptimizedImage
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={256}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-t-lg"
                    priority={index < 3}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="p-3 sm:p-4">
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">{image.title}</h3>
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
