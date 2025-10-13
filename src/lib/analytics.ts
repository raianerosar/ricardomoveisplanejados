// Extensão do tipo Window para incluir gtag e fbq
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
    fbq?: (
      command: string,
      event: string,
      parameters?: Record<string, unknown>
    ) => void;
  }
}

// Configurações de Analytics - Substitua pelos IDs reais quando disponíveis
export const ANALYTICS_CONFIG = {
  // Google Analytics ID - substitua por seu GA4 ID real (ex: G-XXXXXXXXXX)
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || '',
  
  // Facebook Pixel ID - substitua por seu Pixel ID real
  facebookPixelId: process.env.NEXT_PUBLIC_FB_PIXEL_ID || '',
};

// Funções utilitárias para tracking de eventos
export const trackFormSubmission = (formType: string) => {
  // Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submit', {
      event_category: 'engagement',
      event_label: formType,
    });
  }
  
  // Facebook Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: formType,
    });
  }
};

export const trackButtonClick = (buttonName: string, section: string) => {
  // Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click', {
      event_category: 'ui_interaction',
      event_label: `${section}_${buttonName}`,
    });
  }
  
  // Facebook Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'ViewContent', {
      content_name: buttonName,
      content_category: section,
    });
  }
};

export const trackPageView = (pageName: string) => {
  // Google Analytics (já é feito automaticamente)
  
  // Facebook Pixel para páginas específicas
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView', {
      content_name: pageName,
    });
  }
};