
import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import EducationLevels from "@/components/EducationLevels";
import EducationLevelsSection from "@/components/EducationLevelsSection";
import InstitutionalVideo from "@/components/InstitutionalVideo";
import CollegeGallery from "@/components/CollegeGallery";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import VisitForm from "@/components/VisitForm";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import OptimizedAnalytics from "@/components/OptimizedAnalytics";
import SEOHead from "@/components/SEOHead";
import LightErrorMonitoringComponent from "@/components/LightErrorMonitoring";
import ResourcePreloader from "@/components/ResourcePreloader";
import "../styles/flip-animation.css";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Define critical images for preloading
  const highPriorityImages = [
    "/lovable-uploads/5240b651-94e6-47c3-bac5-2a30ba1e16e3.png", // New hero background
    "/lovable-uploads/e184216c-7a3a-4233-9e6b-25748975871f.png", // First college image
    "/lovable-uploads/3eeb7c0e-e277-4ed2-80d2-fa502cd40936.png"  // First testimonial image
  ];

  const criticalImages = [
    "/lovable-uploads/bc48ba2d-00f3-4d05-8eaa-c6a90fac82e2.png", // Second college image
    "/lovable-uploads/cd4e09f3-0765-415c-b018-59d5dffc9698.png", // Second testimonial
    "/lovable-uploads/744f47e2-d92b-4c6d-869a-19832c9137b2.png"  // Lab image
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead />
      <ResourcePreloader 
        highPriorityImages={highPriorityImages}
        criticalImages={criticalImages}
      />
      <OptimizedAnalytics />
      <LightErrorMonitoringComponent />
      <Header />
      <Hero />
      <About />
      <InstitutionalVideo size="small" />
      <EducationLevels />
      <EducationLevelsSection />
      <CollegeGallery />
      <FAQ />
      <Testimonials />
      <VisitForm />
      <Blog />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
