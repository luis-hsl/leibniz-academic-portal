
import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import EducationLevelsSection from "@/components/EducationLevelsSection";
import UniversityApproval from "@/components/UniversityApproval";
import InstitutionalVideo from "@/components/InstitutionalVideo";
import FAQ from "@/components/FAQ";
import VisitForm from "@/components/VisitForm";
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
    "/lovable-uploads/825becfd-61dd-46b2-9e4b-4b5b3ac801fb.png", // Hero background image
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
      <EducationLevelsSection />
      <UniversityApproval />
      <InstitutionalVideo size="small" />
      <FAQ />
      <VisitForm />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
