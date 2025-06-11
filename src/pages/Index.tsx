
import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import EducationLevels from "@/components/EducationLevels";
import CollegeGallery from "@/components/CollegeGallery";
import SpecificContactForms from "@/components/SpecificContactForms";
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

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SEOHead />
      <OptimizedAnalytics />
      <LightErrorMonitoringComponent />
      <Header />
      <Hero />
      <About />
      <EducationLevels />
      <CollegeGallery />
      <SpecificContactForms />
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
