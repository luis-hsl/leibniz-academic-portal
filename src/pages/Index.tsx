import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import EducationLevelCards from "@/components/EducationLevelCards";
import UniversityApproval from "@/components/UniversityApproval";
import InstitutionalVideo from "@/components/InstitutionalVideo";
import VisitForm from "@/components/VisitForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-off-white">
      <Header />
      <Hero />
      <InstitutionalVideo size="small" />
      <EducationLevelCards />
      <UniversityApproval />
      <About />
      <VisitForm />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;