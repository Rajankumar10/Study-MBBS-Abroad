export function trackEvent(eventName: string, properties?: Record<string, any>) {
  // Google Analytics
  if (window.gtag) {
    window.gtag('event', eventName, properties);
  }
  
  // Facebook Pixel
  if (window.fbq) {
    window.fbq('track', eventName, properties);
  }
}

// Add type definitions for analytics
declare global {
  interface Window {
    gtag: (
      command: string,
      eventName: string,
      properties?: Record<string, any>
    ) => void;
    fbq: (
      command: string,
      eventName: string,
      properties?: Record<string, any>
    ) => void;
  }
}
