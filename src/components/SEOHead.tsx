
import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEOHead = ({ 
  title = "Colégio Leibniz",
  description = "Prepare-se para o Sucesso Acadêmico no Colégio Leibniz, tradição e referência em vestibulares e preparatórios para o ENEM.",
  keywords = "colégio, leibniz, ensino, vestibular, enem, educação, escola, preparatório",
  image = "/lovable-uploads/4f312db7-f2f6-44a1-a91e-24eb6e23ea95.png",
  url = typeof window !== 'undefined' ? window.location.href : '',
  type = "website"
}: SEOHeadProps) => {
  
  useEffect(() => {
    // Atualizar título
    document.title = title;
    
    // Atualizar meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let tag = document.querySelector(selector) as HTMLMetaElement;
      
      if (!tag) {
        tag = document.createElement('meta');
        if (property) {
          tag.setAttribute('property', name);
        } else {
          tag.setAttribute('name', name);
        }
        document.head.appendChild(tag);
      }
      
      tag.setAttribute('content', content);
    };

    // Meta tags básicas
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'Colégio Leibniz');
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:site_name', 'Colégio Leibniz', true);

    // Twitter tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);

    // Structured Data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "Colégio Leibniz",
      "alternateName": "Excelência em Educação",
      "description": description,
      "url": url,
      "logo": image,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Cidade",
        "addressRegion": "Estado",
        "addressCountry": "BR"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+55-XX-XXXXX-XXXX",
        "contactType": "admissions"
      }
    };

    // Adicionar structured data
    let ldScript = document.querySelector('script[type="application/ld+json"]');
    if (!ldScript) {
      ldScript = document.createElement('script');
      ldScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(ldScript);
    }
    ldScript.textContent = JSON.stringify(structuredData);

  }, [title, description, keywords, image, url, type]);

  return null;
};

export default SEOHead;
