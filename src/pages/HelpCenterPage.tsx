import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Search,
  FileText,
  Calendar,
  Shield,
  Settings,
  MessageSquare,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ROUTES } from '@/config/routes';

const categories = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'Set up your account and first board meeting',
    icon: FileText,
    articleCount: 12,
  },
  {
    id: 'meetings',
    title: 'Meetings & Agendas',
    description: 'Schedule, manage, and run effective meetings',
    icon: Calendar,
    articleCount: 18,
  },
  {
    id: 'documents',
    title: 'Documents & Files',
    description: 'Upload, organize, and secure board documents',
    icon: FileText,
    articleCount: 15,
  },
  {
    id: 'security',
    title: 'Security & Compliance',
    description: 'Protect your data and meet regulations',
    icon: Shield,
    articleCount: 10,
  },
  {
    id: 'account',
    title: 'Account & Billing',
    description: 'Manage your account, users, and subscription',
    icon: Settings,
    articleCount: 8,
  },
  {
    id: 'integrations',
    title: 'Integrations',
    description: 'Connect with Zoom, Teams, and more',
    icon: MessageSquare,
    articleCount: 7,
  },
];

const faqs = [
  {
    question: 'How long does it take to set up my account?',
    answer: 'Most organizations are up and running within 15 minutes. Our guided onboarding walks you through the setup process step by step.',
  },
  {
    question: 'Can I invite board members with different permission levels?',
    answer: 'Yes! You can assign roles like Admin, Editor, Viewer, and custom permissions to control exactly what each member can access and do.',
  },
  {
    question: 'Is my data secure and compliant?',
    answer: 'Absolutely. We use AES-256 encryption, are ISO 27001 certified, SOC 2 Type II compliant, and GDPR ready.',
  },
  {
    question: 'What happens to my data if I cancel my subscription?',
    answer: 'You can export all your data before cancellation. We retain data for 30 days after cancellation for recovery, then it is permanently deleted.',
  },
  {
    question: 'Does EBoard integrate with Zoom and Microsoft Teams?',
    answer: 'Yes! EBoard seamlessly integrates with Zoom, Microsoft Teams, Google Meet, and Webex for virtual meetings.',
  },
  {
    question: 'Can I get dedicated support for my organization?',
    answer: 'Enterprise plans include a dedicated account manager and priority 24/7 support. All plans include email and chat support.',
  },
];

export const HelpCenterPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Help Center - EBoard Solutions</title>
        <meta
          name="description"
          content="Get help with EBoard's board management platform. Find guides, FAQs, and support resources."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-28 pb-12 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              How can we help you?
            </h1>
            <p className="text-gray-600 mb-6">
              Find answers, guides, and tutorials to make the most of EBoard.
            </p>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for articles and FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-5 hover:shadow-md transition cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center text-primary-600 flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{category.title}</h3>
                        <p className="text-sm text-gray-500 mb-2">{category.description}</p>
                        <span className="text-xs text-gray-400">{category.articleCount} articles</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between p-4 text-left"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    <ChevronRight
                      className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                        openFaq === index ? 'rotate-90' : ''
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-4 pb-4 text-gray-600 border-t border-gray-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Still need help?</h2>
          <p className="text-primary-100 mb-6">
            Our support team is available 24/7 to assist you.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to={ROUTES.COMPANY.CONTACT}>
              <Button size="lg" variant="secondary" className="bg-white text-primary-600">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HelpCenterPage;