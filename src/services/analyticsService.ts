declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

type EventParams = {
  action: string;
  category: string;
  label?: string;
  value?: number;
  [key: string]: unknown;
};

class AnalyticsService {
  private initialized = false;

  init(measurementId: string): void {
    if (this.initialized) return;

    // Load Google Analytics
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', measurementId);

    this.initialized = true;
  }

  pageView(path: string): void {
    if (!this.initialized || !window.gtag) return;

    window.gtag('config', import.meta.env.VITE_GA_MEASUREMENT_ID, {
      page_path: path,
    });
  }

  event({ action, category, label, value, ...rest }: EventParams): void {
    if (!this.initialized || !window.gtag) return;

    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
      ...rest,
    });
  }

  // Custom events for EBoard
  trackDemoBooking(userType: string): void {
    this.event({
      action: 'demo_booking',
      category: 'conversion',
      label: userType,
    });
  }

  trackContactFormSubmission(organizationType: string): void {
    this.event({
      action: 'contact_form_submission',
      category: 'engagement',
      label: organizationType,
    });
  }

  trackFeatureView(featureName: string): void {
    this.event({
      action: 'feature_view',
      category: 'engagement',
      label: featureName,
    });
  }

  trackSolutionView(solutionName: string): void {
    this.event({
      action: 'solution_view',
      category: 'engagement',
      label: solutionName,
    });
  }
}

export const analyticsService = new AnalyticsService();
