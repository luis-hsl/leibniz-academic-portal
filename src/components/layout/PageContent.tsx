import { ReactNode } from "react";
import OptimizedImage from "@/components/OptimizedImage";

interface PageContentProps {
  title: string;
  content: ReactNode;
  image: string;
  imageAlt: string;
  reverseLayout?: boolean;
}

const PageContent = ({ title, content, image, imageAlt, reverseLayout = false }: PageContentProps) => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`grid lg:grid-cols-5 gap-12 lg:gap-16 items-center ${reverseLayout ? 'lg:grid-flow-col-dense' : ''}`}>
            {/* Content Column - 60% width (3/5) */}
            <div className={`lg:col-span-3 space-y-6 ${reverseLayout ? 'lg:order-2' : ''}`}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight font-montserrat">
                {title}
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <div className="text-lg text-muted-foreground leading-relaxed space-y-4 font-montserrat">
                  {content}
                </div>
              </div>
            </div>

            {/* Image Column - 40% width (2/5) */}
            <div className={`lg:col-span-2 ${reverseLayout ? 'lg:order-1' : ''}`}>
              <div className="relative">
                <OptimizedImage
                  src={image}
                  alt={imageAlt}
                  width={500}
                  height={600}
                  className="w-full h-auto rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageContent;