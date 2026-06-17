import React, { useState } from 'react';
import { SEOHead } from '@/components/seo/SEOHead';
import { getSeoConfig, defaultStructuredData } from '@/config/seoConfig';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  organization: z.string().min(2, 'Organization name is required'),
  organizationType: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const organizationTypes = [
  { value: 'education', label: 'Education' },
  { value: 'government', label: 'Government' },
  { value: 'ngo', label: 'Nonprofit' },
  { value: 'corporate', label: 'Corporate' },
  { value: 'other', label: 'Other' },
];

export const ContactPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Form data:', data);
      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const seo = getSeoConfig('contact');
  const structuredData = defaultStructuredData;

  return (
    <>
      <SEOHead seo={seo} structuredData={structuredData} />

      <section className="py-2 bg-gray-50 min-h-screen flex items-center">
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 w-full max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="primary" className="mb-3">Get in Touch</Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Let's start a conversation</h1>
            <p className="text-gray-600">Have questions about Kikao360? Our team is ready to help.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-6">
            {/* Left Column - Contact Info */}
            <div className="lg:col-span-4 space-y-6">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                <Card className="p-5 bg-gradient-to-br from-primary-600 to-primary-700 text-white h-full">
                  <h2 className="text-lg font-bold mb-5">Contact Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0"><Mail className="w-4 h-4" /></div>
                      <div><p className="text-xs text-primary-200">Email</p><a href="mailto:info@matrixsystems.co.ke" className="text-sm font-medium hover:underline">info@matrixsystems.co.ke</a></div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0"><Phone className="w-4 h-4" /></div>
                      <div><p className="text-xs text-primary-200">Phone</p><a href="tel:+254721779429" className="text-sm font-medium hover:underline">+254 721 779 429</a></div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0"><MapPin className="w-4 h-4" /></div>
                      <div><p className="text-xs text-primary-200">Location</p><p className="text-sm font-medium">BSK Village, Westlands</p><p className="text-xs text-primary-200">Nairobi, Kenya</p></div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0"><Clock className="w-4 h-4" /></div>
                      <div><p className="text-xs text-primary-200">Support Hours</p><p className="text-sm font-medium">24/7 Availability</p></div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                <Card className="p-0 overflow-hidden h-40">
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-center"><MapPin className="w-7 h-7 text-gray-400 mx-auto mb-2" /><p className="text-sm text-gray-500">Westlands, Nairobi</p></div>
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Right Column - Contact Form */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="lg:col-span-8">
              <Card className="p-6">
                <div className="mb-5"><h2 className="text-xl font-bold text-gray-900 mb-1">Send us a message</h2><p className="text-sm text-gray-500">Fill out the form below and we'll get back to you within 24 hours.</p></div>

                {submitStatus === 'success' && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-5 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center text-green-800">
                    <CheckCircle className="w-4 h-4 mr-3" /><div><p className="font-medium text-sm">Message sent!</p></div>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-5 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center text-red-800">
                    <AlertCircle className="w-4 h-4 mr-3" /><div><p className="font-medium text-sm">Something went wrong</p></div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
                      <input type="text" {...register('name')} className={`w-full px-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition ${errors.name ? 'border-red-500' : 'border-gray-300'}`} placeholder="Your name" />
                      {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
                      <input type="email" {...register('email')} className={`w-full px-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition ${errors.email ? 'border-red-500' : 'border-gray-300'}`} placeholder="you@company.com" />
                      {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Organization <span className="text-red-500">*</span></label>
                      <input type="text" {...register('organization')} className={`w-full px-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition ${errors.organization ? 'border-red-500' : 'border-gray-300'}`} placeholder="Your organization" />
                      {errors.organization && <p className="mt-1 text-xs text-red-600">{errors.organization.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Organization Type</label>
                      <select {...register('organizationType')} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none">
                        <option value="">Select type</option>
                        {organizationTypes.map((type) => <option key={type.value} value={type.value}>{type.label}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message <span className="text-red-500">*</span></label>
                    <textarea rows={4} {...register('message')} className={`w-full px-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition resize-none ${errors.message ? 'border-red-500' : 'border-gray-300'}`} placeholder="How can we help you?" />
                    {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>}
                  </div>

                  <div className="flex items-center justify-between pt-3">
                    <p className="text-xs text-gray-500"><span className="text-red-500">*</span> Required fields</p>
                    <Button type="submit" size="lg" isLoading={isSubmitting} rightIcon={<Send className="w-4 h-4" />}>Send Message</Button>
                  </div>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
