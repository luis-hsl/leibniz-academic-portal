
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import EducationLevels from "@/components/EducationLevels";
import SpecificContactForms from "@/components/SpecificContactForms";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import VisitForm from "@/components/VisitForm";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Analytics from "@/components/Analytics";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Analytics />
      <Header />
      <Hero />
      <About />
      <EducationLevels />
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
