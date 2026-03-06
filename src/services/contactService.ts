import { apiService } from './api';
import { ContactFormData, ContactFormResponse } from '@/types/form.types';

export const contactService = {
  async submitContactForm(data: ContactFormData): Promise<ContactFormResponse> {
    try {
      const response = await apiService.post<ContactFormResponse>('/contact', data);

      if (response.data) {
        return response.data;
      }

      throw new Error('No data received');
    } catch (error) {
      console.error('Contact form submission error:', error);
      throw error;
    }
  },

  async subscribeNewsletter(
    email: string,
    name?: string
  ): Promise<{ success: boolean; message: string }> {
    try {
      const response = await apiService.post('/newsletter', { email, name });

      if (response.data) {
        return {
          success: true,
          message: 'Successfully subscribed to newsletter',
        };
      }

      throw new Error('Failed to subscribe');
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      throw error;
    }
  },

  async requestDemo(
    data: Partial<ContactFormData>
  ): Promise<{ success: boolean; bookingUrl?: string }> {
    try {
      const response = await apiService.post('/demo/request', data);

      if (response.data) {
        return {
          success: true,
          bookingUrl: (response.data as any).bookingUrl,
        };
      }

      throw new Error('Failed to request demo');
    } catch (error) {
      console.error('Demo request error:', error);
      throw error;
    }
  },
};
