import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  title: string;
  backgroundImage: string;
  breadcrumb?: string;
}

const PageHero = ({ title, backgroundImage, breadcrumb = "INÍCIO" }: PageHeroProps) => {
  return (
    <section 
      className="relative py-20 md:py-24 lg:py-32 text-white overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 51, 102, 0.7), rgba(0, 51, 102, 0.7)), url('${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Breadcrumbs */}
          <div className="flex items-center justify-center mb-6 text-blue-200">
            <span className="text-sm font-medium uppercase tracking-wider">{breadcrumb}</span>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-sm font-medium uppercase tracking-wider text-white">{title}</span>
          </div>
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide leading-tight text-white">
            {title}
          </h1>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-20 left-10 opacity-10" width="100" height="100" viewBox="0 0 100 100">
          <path d="M20,50 Q50,20 80,50 T140,50" stroke="white" strokeWidth="2" fill="none" />
        </svg>
        <svg className="absolute bottom-20 right-10 opacity-10" width="120" height="120" viewBox="0 0 120 120">
          <path d="M20,60 Q60,20 100,60 T180,60" stroke="white" strokeWidth="2" fill="none" />
        </svg>
      </div>
    </section>
  );
};

export default PageHero;