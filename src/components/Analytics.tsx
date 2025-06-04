
import { useEffect } from 'react';

// Configuração do Google Analytics 4 e Google Tag Manager
const GOOGLE_TAG_MANAGER_ID = 'GTM-XXXXXXX'; // Substitua pelo seu ID do GTM se tiver
const GOOGLE_ANALYTICS_ID = 'G-ZXK4Z9SHTX'; // ID fornecido pelo usuário
const GOOGLE_TAG_ID = 'AW-17141679234'; // Google Tag ID

const Analytics = () => {
  useEffect(() => {
    // Google Tag Manager (opcional - apenas se tiver um ID válido)
    if (GOOGLE_TAG_MANAGER_ID !== 'GTM-XXXXXXX') {
      const gtmScript = document.createElement('script');
      gtmScript.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GOOGLE_TAG_MANAGER_ID}');
      `;
      document.head.appendChild(gtmScript);
    }

    // Google Analytics 4
    const ga4Script = document.createElement('script');
    ga4Script.async = true;
    ga4Script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`;
    document.head.appendChild(ga4Script);

    // Google Tag (AW)
    const googleTagScript = document.createElement('script');
    googleTagScript.async = true;
    googleTagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`;
    document.head.appendChild(googleTagScript);

    const configScript = document.createElement('script');
    configScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      
      // Configurar Google Analytics
      gtag('config', '${GOOGLE_ANALYTICS_ID}', {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: true
      });
      
      // Configurar Google Tag
      gtag('config', '${GOOGLE_TAG_ID}');
    `;
    document.head.appendChild(configScript);

    // Track custom events
    window.gtag = window.gtag || function() {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(arguments);
    };

    return () => {
      // Cleanup scripts if component unmounts
      const scripts = document.querySelectorAll('script[src*="googletagmanager"], script[src*="gtag"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  return (
    <>
      {/* Google Tag Manager (noscript) - apenas se tiver um ID válido */}
      {GOOGLE_TAG_MANAGER_ID !== 'GTM-XXXXXXX' && (
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GOOGLE_TAG_MANAGER_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
      )}
    </>
  );
};

// Função para rastrear eventos customizados
export const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'engagement',
      event_label: parameters.label || '',
      value: parameters.value || 0,
      ...parameters
    });
  }
};

// Eventos específicos do site
export const trackWhatsAppClick = (source: string) => {
  trackEvent('whatsapp_click', {
    event_category: 'contact',
    event_label: source,
    source: source
  });
};

export const trackFormSubmission = (formType: string) => {
  trackEvent('form_submission', {
    event_category: 'lead_generation',
    event_label: formType,
    form_type: formType
  });
};

export const trackVisitRequest = (source: string) => {
  trackEvent('visit_request', {
    event_category: 'conversion',
    event_label: source,
    source: source
  });
};

export const trackPageView = (pageName: string) => {
  trackEvent('page_view', {
    event_category: 'navigation',
    event_label: pageName,
    page_name: pageName
  });
};

// Declaração de tipos para TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export default Analytics;
