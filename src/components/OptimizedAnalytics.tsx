
import { useEffect } from 'react';

// Configuração simplificada do Google Analytics
const GOOGLE_ANALYTICS_ID = 'G-ZXK4Z9SHTX';
const GOOGLE_TAG_ID = 'AW-17141679234';

const OptimizedAnalytics = () => {
  useEffect(() => {
    // Só carregar em produção
    if (process.env.NODE_ENV !== 'production') return;

    // Carregar scripts de forma otimizada e lazy
    const loadAnalytics = () => {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`;
      document.head.appendChild(script);

      // Configurar gtag de forma mais leve
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      
      gtag('js', new Date());
      gtag('config', GOOGLE_ANALYTICS_ID, {
        send_page_view: true,
        transport_type: 'beacon'
      });
      gtag('config', GOOGLE_TAG_ID);

      window.gtag = gtag;
    };

    // Carregar analytics após o page load para não bloquear renderização
    if (document.readyState === 'complete') {
      loadAnalytics();
    } else {
      window.addEventListener('load', loadAnalytics);
    }

  }, []);

  return null;
};

// Funções de tracking otimizadas
export const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && window.gtag && process.env.NODE_ENV === 'production') {
    window.gtag('event', eventName, {
      event_category: 'engagement',
      send_to: GOOGLE_ANALYTICS_ID,
      ...parameters
    });
  }
};

export const trackFormConversion = () => {
  if (typeof window !== 'undefined' && window.gtag && process.env.NODE_ENV === 'production') {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-17141679234/PkufCLzAvtMaEIKJ5e0_'
    });
  }
};

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
  trackFormConversion();
};

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export default OptimizedAnalytics;
