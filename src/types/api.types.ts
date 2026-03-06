export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
  status: number;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
  reference?: string;
}

export interface NewsletterResponse {
  success: boolean;
  message: string;
}

export interface DemoBookingResponse {
  success: boolean;
  bookingUrl?: string;
  message: string;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}
