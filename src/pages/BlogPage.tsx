
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Blog from "@/components/Blog";

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Sem título principal */}
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl leading-relaxed text-white">
              Fique por dentro das novidades, dicas educacionais e conquistas da nossa comunidade escolar.
            </p>
          </div>
        </div>
      </section>

      <Blog />
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogPage;
