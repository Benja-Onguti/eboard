import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

// Form schema
const contactSchema = z.object({
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

type ContactFormData = z.infer<typeof contactSchema>;

const interestOptions = [
  'Meeting Management',
  'Document Security',
  'AI-Powered Minutes',
  'E-Signatures',
  'Surveys & Forms',
  'Public Meeting Sites',
];

const organizationTypes = [
  { value: 'education', label: 'Educational Institution' },
  { value: 'government', label: 'Government / Public Sector' },
  { value: 'ngo', label: 'NGO / Nonprofit' },
  { value: 'corporate', label: 'Corporate / Enterprise' },
  { value: 'other', label: 'Other' },
];

export const ContactPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      interest: [],
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Here you would send data to your backend
      console.log('Form data:', data);

      setSubmitStatus('success');
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - EBoard Solutions</title>
        <meta
          name="description"
          content="Get in touch with EBoard Solutions. Request a demo, ask questions, or learn more about our governance platform."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in <span className="text-primary-600">touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about EBoard? Our team is here to help you transform your board meetings.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              <Card variant="elevated" className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mr-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold">Email Us</h3>
                </div>
                <p className="text-gray-600 mb-2">General inquiries:</p>
                <a
                  href="mailto:info@matrixsystems.co.ke"
                  className="text-primary-600 hover:underline"
                >
                  info@matrixsystems.co.ke
                </a>
                <p className="text-gray-600 mt-4 mb-2">Sales:</p>
                <a
                  href="mailtoinfo@matrixsystems.co.ke"
                  className="text-primary-600 hover:underline"
                >
                  info@matrixsystems.co.ke
                </a>
              </Card>

              <Card variant="elevated" className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mr-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold">Call Us</h3>
                </div>
                <p className="text-gray-600 mb-2">Kenya :</p>
                <a href="tel:+254721779429" className="text-primary-600 hover:underline">
                  (+254) 721 779 429
                </a>
                <p className="text-gray-600 mt-4 mb-2">International:</p>
                <a href="tel:+254721779429" className="text-primary-600 hover:underline">
                  (+254) 721 779 429
                </a>
              </Card>

              <Card variant="elevated" className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mr-4">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold">Support Hours</h3>
                </div>
                <p className="text-gray-600">Monday - Friday: 24/7</p>
                <p className="text-gray-600">Saturday - Sunday: 9am - 5pm EST</p>
                <p className="text-gray-500 text-sm mt-2">
                  Emergency support available 24/7 for enterprise clients
                </p>
              </Card>

              <Card variant="elevated" className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mr-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold">Visit Us</h3>
                </div>
                <p className="text-gray-600">Matrix Vision Systems</p>
                <p className="text-gray-600">BSK Village, Westlands, Nairobi</p>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card variant="elevated" className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center text-green-800"
                  >
                    <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                    Thank you for contacting us! We'll respond within 24 hours.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center text-red-800"
                  >
                    <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                    Something went wrong. Please try again or call us directly.
                  </motion.div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        {...register('name')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="John Smith"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        {...register('email')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="john@organization.org"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Organization */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Organization Name *
                    </label>
                    <input
                      type="text"
                      {...register('organization')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Lincoln School District"
                    />
                    {errors.organization && (
                      <p className="mt-1 text-sm text-red-600">{errors.organization.message}</p>
                    )}
                  </div>

                  {/* Organization Type & Phone */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Organization Type *
                      </label>
                      <select
                        {...register('organizationType')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Select type</option>
                        {organizationTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                      {errors.organizationType && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.organizationType.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number (optional)
                      </label>
                      <input
                        type="tel"
                        {...register('phone')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Board Size */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Board/Committee Size (optional)
                    </label>
                    <input
                      type="number"
                      {...register('boardSize')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Approximate number of members"
                    />
                  </div>

                  {/* Areas of Interest */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Areas of Interest *
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {interestOptions.map((option) => (
                        <label key={option} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            value={option}
                            {...register('interest')}
                            className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                          />
                          <span className="text-sm text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                    {errors.interest && (
                      <p className="mt-1 text-sm text-red-600">{errors.interest.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message / Questions *
                    </label>
                    <textarea
                      rows={5}
                      {...register('message')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Tell us about your governance needs and how we can help..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Preferred Demo Date */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Demo Date (optional)
                    </label>
                    <input
                      type="date"
                      {...register('preferredDate')}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    fullWidth
                    isLoading={isSubmitting}
                    rightIcon={<Send className="w-5 h-5" />}
                  >
                    Send Message
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    We'll respond within 24 hours with customized information for your organization
                    type.
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
