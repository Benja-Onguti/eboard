import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  organization: z.string().min(2, 'Organization name is required'),
  organizationType: z.enum(['education', 'government', 'ngo', 'corporate', 'other']),
  phone: z.string().optional(),
  boardSize: z.string().optional(),
  interest: z.array(z.string()).min(1, 'Please select at least one area of interest'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  preferredDate: z.string().optional(),
});

export const demoFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  organization: z.string().min(2, 'Organization name is required'),
  organizationType: z.enum(['education', 'government', 'ngo', 'corporate', 'other']),
  phone: z.string().optional(),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  focusArea: z.array(z.string()).optional(),
});

export const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  name: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type DemoFormData = z.infer<typeof demoFormSchema>;
export type NewsletterFormData = z.infer<typeof newsletterSchema>;
