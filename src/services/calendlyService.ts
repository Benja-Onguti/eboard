interface CalendlyEventDetails {
  event: string;
  payload: {
    email: string;
    name: string;
    scheduling_url: string;
    event_type_name: string;
    event_start_time: string;
    event_end_time: string;
  };
}

class CalendlyService {
  private widgetUrl: string;

  constructor() {
    this.widgetUrl =
      import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/eboard-solutions/demo';
  }

  getWidgetUrl(prefill?: Record<string, string>): string {
    const url = new URL(this.widgetUrl);

    if (prefill) {
      Object.entries(prefill).forEach(([key, value]) => {
        url.searchParams.set(`prefill_${key}`, value);
      });
    }

    return url.toString();
  }

  initializeWidget(
    elementId: string,
    options?: {
      prefill?: { name?: string; email?: string };
      utm?: Record<string, string>;
      hideLandingPageDetails?: boolean;
    }
  ): void {
    const element = document.getElementById(elementId);

    if (!element) return;

    // Calendly will be loaded via script
    if (window.Calendly) {
      window.Calendly.initInlineWidget({
        url: this.getWidgetUrl(options?.prefill),
        parentElement: element,
        prefill: options?.prefill,
        utm: options?.utm,
        hideLandingPageDetails: options?.hideLandingPageDetails,
      });
    }
  }

  // Track events for analytics
  onEventScheduled(callback: (details: CalendlyEventDetails) => void): void {
    if (typeof window !== 'undefined') {
      window.addEventListener('message', (e) => {
        if (e.data.event && e.data.event.indexOf('calendly') === 0) {
          callback(e.data as CalendlyEventDetails);
        }
      });
    }
  }
}

declare global {
  interface Window {
    Calendly: any;
  }
}

export const calendlyService = new CalendlyService();
