import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";
import PageHero from "./PageHero";
import PageCTA from "./PageCTA";

interface PageLayoutProps {
  title: string;
  heroBackgroundImage: string;
  breadcrumb?: string;
  children: ReactNode;
  seoDescription?: string;
  seoKeywords?: string;
  showCTA?: boolean;
  ctaTitle?: string;
  ctaButtonText?: string;
  ctaButtonAction?: () => void;
  ctaBackgroundImage?: string;
}

const PageLayout = ({
  title,
  heroBackgroundImage,
  breadcrumb,
  children,
  seoDescription,
  seoKeywords,
  showCTA = true,
  ctaTitle,
  ctaButtonText,
  ctaButtonAction,
  ctaBackgroundImage
}: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-off-white">
      {seoDescription && (
        <SEOHead 
          title={`${title} - Colégio Leibniz`}
          description={seoDescription}
          keywords={seoKeywords}
        />
      )}
      
      <Header />
      
      <PageHero 
        title={title}
        backgroundImage={heroBackgroundImage}
        breadcrumb={breadcrumb}
      />
      
      <main>
        {children}
      </main>
      
      {showCTA && (
        <PageCTA 
          title={ctaTitle}
          buttonText={ctaButtonText}
          buttonAction={ctaButtonAction}
          backgroundImage={ctaBackgroundImage}
        />
      )}
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PageLayout;