import { apiService } from './api';

interface EmailOptions {
  to: string;
  subject: string;
  template: string;
  data: Record<string, unknown>;
}

export const emailService = {
  async sendEmail(options: EmailOptions): Promise<boolean> {
    try {
      const response = await apiService.post('/email/send', options);
      return response.status === 200;
    } catch (error) {
      console.error('Email sending failed:', error);
      return false;
    }
  },

  async sendWelcomeEmail(email: string, name: string): Promise<boolean> {
    return this.sendEmail({
      to: email,
      subject: 'Welcome to EBoard Solutions',
      template: 'welcome',
      data: { name },
    });
  },

  async sendDemoConfirmation(
    email: string,
    name: string,
    date: string,
    time: string
  ): Promise<boolean> {
    return this.sendEmail({
      to: email,
      subject: 'Your EBoard Demo Confirmation',
      template: 'demo-confirmation',
      data: { name, date, time },
    });
  },

  async sendContactAutoReply(email: string, name: string): Promise<boolean> {
    return this.sendEmail({
      to: email,
      subject: 'Thank you for contacting EBoard Solutions',
      template: 'contact-autoreply',
      data: { name },
    });
  },

  async sendNewsletterConfirmation(email: string): Promise<boolean> {
    return this.sendEmail({
      to: email,
      subject: 'Welcome to EBoard Newsletter',
      template: 'newsletter-welcome',
      data: { email },
    });
  },
};
