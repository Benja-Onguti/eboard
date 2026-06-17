import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/seo/SEOHead';
import { getSeoConfig, defaultStructuredData } from '@/config/seoConfig';
import { motion } from 'framer-motion';
import {
  Shield,
  AlertCircle,
  CheckCircle,
  Download,
  Mail,
  Phone,
  Calendar,
  Lock,
  CreditCard,
  RefreshCw,
  ExternalLink,
  ChevronRight,
  Ban,
  AlertTriangle,
  Gavel,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import { ROUTES } from '@/config/routes';
import { siteConfig } from '@/config/siteConfig';

// Last updated date
const LAST_UPDATED = 'March 1, 2025';
const EFFECTIVE_DATE = 'March 1, 2025';

// Table of contents items
const tocItems = [
  { id: 'agreement', title: '1. Agreement to Terms' },
  { id: 'eligibility', title: '2. Eligibility' },
  { id: 'accounts', title: '3. Accounts & Registration' },
  { id: 'services', title: '4. Description of Services' },
  { id: 'fees', title: '5. Fees & Payments' },
  { id: 'subscriptions', title: '6. Subscriptions & Cancellation' },
  { id: 'content', title: '7. User Content' },
  { id: 'conduct', title: '8. Acceptable Use' },
  { id: 'intellectual-property', title: '9. Intellectual Property' },
  { id: 'confidentiality', title: '10. Confidentiality' },
  { id: 'privacy', title: '11. Privacy & Data Protection' },
  { id: 'third-party', title: '12. Third-Party Services' },
  { id: 'termination', title: '13. Termination' },
  { id: 'disclaimers', title: '14. Disclaimers' },
  { id: 'limitation', title: '15. Limitation of Liability' },
  { id: 'indemnification', title: '16. Indemnification' },
  { id: 'arbitration', title: '17. Dispute Resolution' },
  { id: 'governing-law', title: '18. Governing Law' },
  { id: 'changes', title: '19. Changes to Terms' },
  { id: 'contact', title: '20. Contact Information' },
];

// Key terms summary
const keyTerms = [
  {
    icon: CreditCard,
    title: 'Subscription Plans',
    description: 'Monthly or annual billing with 14-day free trial',
    details: 'Cancel anytime, prorated refunds for annual plans',
  },
  {
    icon: Lock,
    title: 'Data Ownership',
    description: 'You retain all rights to your content',
    details: 'We only access data to provide services',
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Enterprise-grade security with encryption',
    details: 'We protect your data with industry standards',
  },
  {
    icon: Ban,
    title: 'Acceptable Use',
    description: 'No illegal or harmful activities',
    details: 'Violations may result in account termination',
  },
  {
    icon: Gavel,
    title: 'Dispute Resolution',
    description: 'Arbitration agreement (opt-out available)',
    details: '30-day opt-out period after acceptance',
  },
  {
    icon: RefreshCw,
    title: 'Cancellation',
    description: 'Cancel anytime with 30-day notice',
    details: 'Data export available upon request',
  },
];

// Prohibited activities
const prohibitedActivities = [
  {
    category: 'Illegal Activities',
    items: [
      'Violating any applicable laws or regulations',
      'Engaging in fraud, money laundering, or terrorist financing',
      'Distributing illegal or harmful content',
    ],
  },
  {
    category: 'Security Violations',
    items: [
      'Unauthorized access to other accounts',
      'Attempting to breach security measures',
      'Introducing malware or malicious code',
      'Denial of service attacks',
    ],
  },
  {
    category: 'Content Restrictions',
    items: [
      'Uploading infringing or unauthorized content',
      'Sharing confidential information without permission',
      'Posting defamatory or harassing material',
      'Distributing spam or unsolicited communications',
    ],
  },
  {
    category: 'Service Abuse',
    items: [
      'Exceeding reasonable usage limits',
      'Automated scraping or data mining',
      'Interfering with service operations',
      'Impersonating others',
    ],
  },
];

// Fee structure
const feeStructure = [
  { plan: 'Essential', billing: 'Monthly', price: '$299', features: 'Up to 10 members' },
  {
    plan: 'Essential',
    billing: 'Annual',
    price: '$249',
    features: 'Up to 10 members, 2 months free',
  },
  { plan: 'Professional', billing: 'Monthly', price: '$599', features: 'Up to 25 members' },
  {
    plan: 'Professional',
    billing: 'Annual',
    price: '$499',
    features: 'Up to 25 members, 2 months free',
  },
  { plan: 'Enterprise', billing: 'Custom', price: 'Contact Sales', features: 'Unlimited members' },
];

// Termination reasons
const terminationReasons = [
  {
    reason: 'By You',
    description:
      'You may cancel your account at any time through your account settings or by contacting support.',
    notice: '30 days notice for annual plans',
  },
  {
    reason: 'By Us (Cause)',
    description:
      'We may terminate or suspend your account immediately for violations of these terms.',
    notice: 'No prior notice required for serious violations',
  },
  {
    reason: 'By Us (Convenience)',
    description: 'We may terminate your account with 30 days notice for business reasons.',
    notice: '30 days advance notice',
  },
  {
    reason: 'Non-payment',
    description: 'Accounts with past due balances may be suspended or terminated.',
    notice: '7 days notice before suspension',
  },
];

// Disclaimer highlights
const disclaimerHighlights = [
  'Services provided "AS IS" without warranties',
  'No guarantee of uninterrupted or error-free service',
  'We may modify or discontinue features with notice',
  'Third-party integrations subject to their own terms',
  'Data backup is your responsibility',
  'We are not liable for unauthorized access beyond our control',
];

// Limitation of liability caps
const liabilityCaps = [
  { jurisdiction: 'General', cap: 'Total fees paid in last 12 months' },
  { jurisdiction: 'California', cap: 'Greater of $100 or fees paid in last 12 months' },
  { jurisdiction: 'EU Countries', cap: 'Foreseeable damages only' },
  { jurisdiction: 'Other Jurisdictions', cap: 'As required by applicable law' },
];

export const TermsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('terms');
  const [acknowledged, setAcknowledged] = useState(false);

  const seo = getSeoConfig('terms');
  const structuredData = defaultStructuredData;

  const handleDownloadPDF = () => {
    // In a real implementation, this would download a PDF
    alert('Terms of Service PDF would download here');
  };

  const handleAcceptTerms = () => {
    // In a real implementation, this would record acceptance
    alert('Terms acceptance recorded');
  };

  return (
    <>
      <SEOHead seo={seo} structuredData={structuredData} />

      {/* Hero Section */}
      <section className="pb-16 bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom text-center">
          <Badge variant="primary" className="mb-4">
            Terms of Service
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our commitment to <span className="text-primary-600">fairness</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            These terms govern your use of Kikao360 Solutions' platform and services. Please read them
            carefully before accessing or using our services.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              variant="outline"
              onClick={handleDownloadPDF}
              leftIcon={<Download className="w-4 h-4" />}
            >
              Download PDF
            </Button>
            <Link to={ROUTES.LEGAL.PRIVACY}>
              <Button variant="ghost" rightIcon={<ExternalLink className="w-4 h-4" />}>
                View Privacy Policy
              </Button>
            </Link>
          </div>

          <div className="mt-8 text-sm text-gray-500">
            <span>Last Updated: {LAST_UPDATED}</span>
            <span className="mx-4">•</span>
            <span>Effective: {EFFECTIVE_DATE}</span>
          </div>
        </div>
      </section>

      {/* Key Terms Summary */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Key Terms at a Glance
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyTerms.map((term, index) => {
              const Icon = term.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:border-primary-200">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mr-3">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-semibold text-gray-900">{term.title}</h3>
                    </div>
                    <p className="text-sm text-gray-900 mb-2">{term.description}</p>
                    <p className="text-xs text-gray-500">{term.details}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Acceptance Checkbox */}
          <div className="mt-8 p-6 bg-primary-50 rounded-2xl border border-primary-100">
            <label className="flex items-start cursor-pointer">
              <input
                type="checkbox"
                className="mt-1 mr-3 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                checked={acknowledged}
                onChange={(e) => setAcknowledged(e.target.checked)}
              />
              <div>
                <span className="text-sm font-medium text-gray-900">
                  I acknowledge that I have read and agree to these Terms of Service
                </span>
                <p className="text-xs text-gray-500 mt-1">
                  By checking this box, you confirm that you have read, understood, and agree to be
                  bound by these terms. If you are accepting on behalf of an organization, you
                  represent that you have authority to bind that organization.
                </p>
              </div>
            </label>
            {acknowledged && (
              <div className="mt-4 flex justify-end">
                <Button onClick={handleAcceptTerms} size="sm">
                  Confirm Acceptance
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Table of Contents - Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-4">On this page</h3>
                <nav className="space-y-2 max-h-[600px] overflow-y-auto pr-4">
                  {tocItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="flex items-center text-sm text-gray-600 hover:text-primary-600 transition py-1"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <ChevronRight className="w-3 h-3 mr-2 flex-shrink-0" />
                      {item.title}
                    </a>
                  ))}
                </nav>

                {/* Quick Help */}
                <Card className="mt-8 bg-primary-50 border-primary-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Need help?</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Our team is here to answer questions about our terms.
                  </p>
                  <a
                    href={`mailto:legal@eboard-solutions.com`}
                    className="text-primary-600 font-medium hover:underline text-sm block mb-2"
                  >
                    legal@eboard-solutions.com
                  </a>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-primary-600 font-medium hover:underline text-sm"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </Card>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-3">
              <Tabs
                defaultValue="terms"
                value={activeTab}
                onValueChange={setActiveTab}
                className="mb-8"
              >
                <TabsList className="grid w-full max-w-md grid-cols-2">
                  <TabsTrigger value="terms">Full Terms</TabsTrigger>
                  <TabsTrigger value="summary">Summary</TabsTrigger>
                </TabsList>
              </Tabs>

              {/* Full Terms View */}
              {activeTab === 'terms' && (
                <div className="space-y-12">
                  {/* 1. Agreement to Terms */}
                  <section id="agreement">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
                    <p className="text-gray-600 mb-4">
                      These Terms of Service ("Terms") constitute a legally binding agreement
                      between you (whether individually or on behalf of an entity) and EBoard
                      Solutions Inc. ("EBoard," "we," "us," or "our") governing your access to and
                      use of the EBoard board management platform, website, and related services
                      (collectively, the "Services").
                    </p>
                    <p className="text-gray-600 mb-4">
                      By accessing or using the Services, you agree to be bound by these Terms. If
                      you do not agree to all of these Terms, you may not access or use the
                      Services.
                    </p>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <div className="flex items-start">
                        <AlertCircle className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-yellow-800 mb-1">Important</h4>
                          <p className="text-sm text-yellow-700">
                            These terms contain an arbitration agreement that requires you to
                            resolve disputes with us on an individual basis rather than through
                            class actions. Please review Section 17 (Dispute Resolution) carefully.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* 2. Eligibility */}
                  <section id="eligibility">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Eligibility</h2>
                    <p className="text-gray-600 mb-4">
                      By using the Services, you represent and warrant that:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                      <li>You are at least 18 years of age</li>
                      <li>You have the legal capacity to enter into binding contracts</li>
                      <li>
                        If you are accepting on behalf of an organization, you have authority to
                        bind that organization
                      </li>
                      <li>You are not located in a country subject to U.S. trade sanctions</li>
                      <li>You are not on any U.S. government restricted parties list</li>
                    </ul>
                  </section>

                  {/* 3. Accounts & Registration */}
                  <section id="accounts">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      3. Accounts & Registration
                    </h2>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      3.1 Account Creation
                    </h3>
                    <p className="text-gray-600 mb-4">
                      To use certain features of the Services, you must register for an account. You
                      agree to provide accurate, current, and complete information and to update it
                      as necessary.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      3.2 Account Security
                    </h3>
                    <p className="text-gray-600 mb-4">
                      You are responsible for maintaining the confidentiality of your account
                      credentials and for all activities that occur under your account. You must
                      notify us immediately of any unauthorized use.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      3.3 Organization Accounts
                    </h3>
                    <p className="text-gray-600 mb-4">
                      For organizational accounts, the named administrator has the authority to
                      manage users, assign roles, and control access. The organization is
                      responsible for its users' compliance with these Terms.
                    </p>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-start">
                        <Shield className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-blue-800 mb-1">
                            Multi-Factor Authentication
                          </h4>
                          <p className="text-sm text-blue-700">
                            We strongly recommend enabling multi-factor authentication for all
                            accounts to enhance security.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* 4. Description of Services */}
                  <section id="services">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      4. Description of Services
                    </h2>
                    <p className="text-gray-600 mb-4">
                      EBoard provides a cloud-based board management platform that includes features
                      such as:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                      <li>Meeting scheduling and management</li>
                      <li>Document storage and sharing</li>
                      <li>Collaboration tools and messaging</li>
                      <li>Voting and approvals</li>
                      <li>Meeting minutes and transcripts</li>
                      <li>Analytics and reporting</li>
                    </ul>
                    <p className="text-gray-600">
                      We may modify, update, or discontinue features with reasonable notice. Service
                      levels are defined in our Service Level Agreement (SLA), available upon
                      request.
                    </p>
                  </section>

                  {/* 5. Fees & Payments */}
                  <section id="fees">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Fees & Payments</h2>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      5.1 Subscription Fees
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Fees for the Services are as set forth on our pricing page. We reserve the
                      right to change fees with 30 days notice. Continued use after fee changes
                      constitutes acceptance.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">5.2 Payment Terms</h3>
                    <p className="text-gray-600 mb-4">
                      Fees are due in advance and are non-refundable except as expressly provided.
                      We accept major credit cards, PayPal, and wire transfers for annual enterprise
                      plans.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">5.3 Taxes</h3>
                    <p className="text-gray-600 mb-4">
                      You are responsible for all taxes associated with your use of the Services. If
                      we are required to collect taxes, they will be added to your invoice.
                    </p>

                    <div className="overflow-x-auto mt-4">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">
                              Plan
                            </th>
                            <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">
                              Billing
                            </th>
                            <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">
                              Price
                            </th>
                            <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">
                              Features
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {feeStructure.map((item, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                              <td className="p-3 border border-gray-200 text-sm text-gray-900">
                                {item.plan}
                              </td>
                              <td className="p-3 border border-gray-200 text-sm text-gray-600">
                                {item.billing}
                              </td>
                              <td className="p-3 border border-gray-200 text-sm text-gray-600">
                                {item.price}
                              </td>
                              <td className="p-3 border border-gray-200 text-sm text-gray-600">
                                {item.features}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* 6. Subscriptions & Cancellation */}
                  <section id="subscriptions">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      6. Subscriptions & Cancellation
                    </h2>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">6.1 Free Trial</h3>
                    <p className="text-gray-600 mb-4">
                      We offer a 14-day free trial. At the end of the trial, you will be
                      automatically converted to a paid subscription unless you cancel before the
                      trial ends.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      6.2 Subscription Terms
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Subscriptions automatically renew until cancelled. You may cancel at any time
                      through your account settings. Cancellation will be effective at the end of
                      the current billing period.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">6.3 Refunds</h3>
                    <p className="text-gray-600 mb-4">
                      Monthly subscriptions are non-refundable. Annual subscriptions may receive a
                      prorated refund for the unused portion if cancelled within the first 30 days.
                      Enterprise contracts are subject to their own terms.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">6.4 Data Export</h3>
                    <p className="text-gray-600 mb-4">
                      Upon cancellation, you may export your data for 30 days. After that period,
                      your data may be permanently deleted in accordance with our data retention
                      policy.
                    </p>
                  </section>

                  {/* 7. User Content */}
                  <section id="content">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">7. User Content</h2>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">7.1 Ownership</h3>
                    <p className="text-gray-600 mb-4">
                      You retain all ownership rights to your content. We do not claim ownership
                      over your materials.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      7.2 License to Provide Services
                    </h3>
                    <p className="text-gray-600 mb-4">
                      By uploading content, you grant us a worldwide, royalty-free license to host,
                      store, and process your content solely to provide the Services. This license
                      ends when you delete your content or close your account.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      7.3 Your Responsibilities
                    </h3>
                    <p className="text-gray-600 mb-4">
                      You represent that you have all rights necessary to upload your content and
                      that it does not violate any laws or third-party rights. You are solely
                      responsible for your content.
                    </p>
                  </section>

                  {/* 8. Acceptable Use */}
                  <section id="conduct">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Acceptable Use</h2>

                    <p className="text-gray-600 mb-4">
                      You agree not to engage in any prohibited activities, including:
                    </p>

                    {prohibitedActivities.map((category, index) => (
                      <Card key={index} className="mb-4">
                        <h3 className="font-semibold text-gray-900 mb-2">{category.category}</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          {category.items.map((item, i) => (
                            <li key={i} className="text-sm text-gray-600">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </Card>
                    ))}

                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
                      <div className="flex items-start">
                        <Ban className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-red-800 mb-1">Violations</h4>
                          <p className="text-sm text-red-700">
                            Violation of these acceptable use terms may result in immediate
                            suspension or termination of your account without notice.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* 9. Intellectual Property */}
                  <section id="intellectual-property">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      9. Intellectual Property
                    </h2>

                    <p className="text-gray-600 mb-4">
                      The Services, including their code, design, features, and branding, are owned
                      by Kikao360 Solutions Inc. and protected by intellectual property laws. You may
                      not:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                      <li>Copy, modify, or create derivative works of the Services</li>
                      <li>Reverse engineer, decompile, or disassemble the Services</li>
                      <li>Remove or alter any proprietary notices</li>
                      <li>Use our trademarks without written permission</li>
                      <li>Resell or sublicense access to the Services</li>
                    </ul>
                  </section>

                  {/* 10. Confidentiality */}
                  <section id="confidentiality">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Confidentiality</h2>

                    <p className="text-gray-600 mb-4">
                      Both parties may have access to confidential information. Confidential
                      information includes non-public data, business strategies, and technical
                      information. Each party agrees to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                      <li>Use confidential information only for purposes of these Terms</li>
                      <li>Protect confidential information with reasonable care</li>
                      <li>
                        Not disclose confidential information to third parties without consent
                      </li>
                      <li>Return or destroy confidential information upon request</li>
                    </ul>
                  </section>

                  {/* 11. Privacy & Data Protection */}
                  <section id="privacy">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      11. Privacy & Data Protection
                    </h2>

                    <p className="text-gray-600 mb-4">
                      Our collection and use of personal information is governed by our Privacy
                      Policy. We process data in accordance with applicable data protection laws.
                      Key principles include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                      <li>We only process data as necessary to provide Services</li>
                      <li>We implement appropriate security measures</li>
                      <li>We provide data subject rights mechanisms</li>
                      <li>We maintain GDPR, CCPA, and other compliance programs</li>
                    </ul>
                    <p className="text-gray-600">
                      A Data Processing Agreement (DPA) is available for customers who need it.
                    </p>
                  </section>

                  {/* 12. Third-Party Services */}
                  <section id="third-party">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      12. Third-Party Services
                    </h2>

                    <p className="text-gray-600 mb-4">
                      The Services may integrate with third-party services (e.g., Zoom, Microsoft
                      Teams, Google Workspace). We are not responsible for these third-party
                      services. Your use of third-party services is subject to their own terms.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="secondary">Zoom</Badge>
                      <Badge variant="secondary">Microsoft Teams</Badge>
                      <Badge variant="secondary">Google Workspace</Badge>
                      <Badge variant="secondary">Slack</Badge>
                      <Badge variant="secondary">Salesforce</Badge>
                    </div>
                  </section>

                  {/* 13. Termination */}
                  <section id="termination">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Termination</h2>

                    <div className="space-y-4">
                      {terminationReasons.map((item, index) => (
                        <Card key={index}>
                          <h3 className="font-semibold text-gray-900 mb-1">{item.reason}</h3>
                          <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                          <p className="text-xs text-gray-500">Notice: {item.notice}</p>
                        </Card>
                      ))}
                    </div>

                    <p className="text-gray-600 mt-4">
                      Upon termination, your right to access the Services ceases immediately.
                      Sections that by their nature should survive termination (including
                      intellectual property, limitation of liability, and dispute resolution) will
                      survive.
                    </p>
                  </section>

                  {/* 14. Disclaimers */}
                  <section id="disclaimers">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Disclaimers</h2>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                      <p className="text-gray-800 font-semibold mb-4">
                        THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF
                        ANY KIND.
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        {disclaimerHighlights.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                      <p className="text-gray-600 mt-4 text-sm">
                        TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS
                        OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                        PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                      </p>
                    </div>
                  </section>

                  {/* 15. Limitation of Liability */}
                  <section id="limitation">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      15. Limitation of Liability
                    </h2>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-4">
                      <p className="text-gray-800 font-semibold mb-4">
                        TO THE MAXIMUM EXTENT PERMITTED BY LAW:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                        <li>
                          WE ARE NOT LIABLE FOR INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES
                        </li>
                        <li>
                          OUR TOTAL LIABILITY IS LIMITED TO THE AMOUNT YOU PAID IN THE LAST 12
                          MONTHS
                        </li>
                        <li>WE ARE NOT LIABLE FOR DATA LOSS OR UNAUTHORIZED ACCESS</li>
                      </ul>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Liability Caps by Jurisdiction
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">
                              Jurisdiction
                            </th>
                            <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">
                              Liability Cap
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {liabilityCaps.map((item, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                              <td className="p-3 border border-gray-200 text-sm text-gray-900">
                                {item.jurisdiction}
                              </td>
                              <td className="p-3 border border-gray-200 text-sm text-gray-600">
                                {item.cap}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* 16. Indemnification */}
                  <section id="indemnification">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Indemnification</h2>

                    <p className="text-gray-600 mb-4">
                      You agree to indemnify and hold harmless Kikao360 Solutions Inc., its
                      affiliates, and their respective officers, directors, employees, and agents
                      from any claims, damages, losses, liabilities, costs, and expenses arising out
                      of:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Your use of the Services</li>
                      <li>Your violation of these Terms</li>
                      <li>Your content or materials</li>
                      <li>Your violation of any third-party rights</li>
                    </ul>
                  </section>

                  {/* 17. Dispute Resolution */}
                  <section id="arbitration">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      17. Dispute Resolution
                    </h2>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      17.1 Informal Resolution
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Before filing any claim, you agree to attempt to resolve disputes informally
                      by contacting us at legal@eboard-solutions.com. We will attempt to resolve the
                      dispute within 60 days.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      17.2 Arbitration Agreement
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Any dispute not resolved informally will be resolved by binding individual
                      arbitration under the American Arbitration Association rules. Arbitration will
                      be conducted in San Francisco, California, unless otherwise agreed.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      17.3 Class Action Waiver
                    </h3>
                    <p className="text-gray-600 mb-4">
                      YOU AGREE TO RESOLVE DISPUTES ON AN INDIVIDUAL BASIS AND WAIVE THE RIGHT TO
                      PARTICIPATE IN CLASS ACTIONS OR CLASS ARBITRATIONS.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">17.4 Opt-Out</h3>
                    <p className="text-gray-600 mb-4">
                      You may opt out of this arbitration agreement within 30 days of accepting
                      these Terms by emailing legal@eboard-solutions.com with your full name and
                      clear statement of opt-out.
                    </p>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <div className="flex items-start">
                        <Gavel className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-yellow-800 mb-1">Important</h4>
                          <p className="text-sm text-yellow-700">
                            This arbitration agreement affects your legal rights. Please review it
                            carefully.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* 18. Governing Law */}
                  <section id="governing-law">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">18. Governing Law</h2>

                    <p className="text-gray-600 mb-4">
                      These Terms are governed by the laws of the State of Delaware, without regard
                      to its conflict of laws principles. The United Nations Convention on Contracts
                      for the International Sale of Goods does not apply.
                    </p>
                    <p className="text-gray-600">
                      For EU customers, nothing in these Terms reduces your rights under mandatory
                      consumer protection laws.
                    </p>
                  </section>

                  {/* 19. Changes to Terms */}
                  <section id="changes">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">19. Changes to Terms</h2>

                    <p className="text-gray-600 mb-4">
                      We may modify these Terms from time to time. When we make material changes, we
                      will notify you through the Services or by email at least 30 days before the
                      changes take effect.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Your continued use of the Services after the effective date constitutes
                      acceptance of the modified Terms.
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Last updated: {LAST_UPDATED}</span>
                    </div>
                  </section>

                  {/* 20. Contact Information */}
                  <section id="contact">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      20. Contact Information
                    </h2>

                    <p className="text-gray-600 mb-6">
                      For questions about these Terms, please contact:
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <Card>
                        <h3 className="font-semibold text-gray-900 mb-3">Legal Department</h3>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Mail className="w-4 h-4 text-primary-600 mr-2" />
                            <a
                              href="mailto:info@matrixsystems.co.ke"
                              className="text-primary-600 hover:underline"
                            >
                              info@matrixsystems.co.ke
                            </a>
                          </div>
                          <div className="flex items-center">
                            <Phone className="w-4 h-4 text-primary-600 mr-2" />
                            <a
                              href="tel:+254721779429"
                              className="text-primary-600 hover:underline"
                            >
                              +2547-21 779 429
                            </a>
                          </div>
                        </div>
                      </Card>

                      <Card>
                        <h3 className="font-semibold text-gray-900 mb-3">Postal Address</h3>
                        <p className="text-sm text-gray-600">
                          EBoard Solutions Inc.
                          <br />
                          Attn: Legal Department
                          <br />
                          B.S.K. Village, Muguga Green, Westlands,
                          <br />
                          6030 - 00200 Nairobi,
                          <br />
                          Kenya
                        </p>
                      </Card>
                    </div>

                    <Card className="mt-4">
                      <h3 className="font-semibold text-gray-900 mb-2">DMCA Agent</h3>
                      <p className="text-sm text-gray-600">
                        For copyright infringement claims under the Digital Millennium Copyright
                        Act, contact our designated agent at info@matrixsystems.co.ke.
                      </p>
                    </Card>
                  </section>
                </div>
              )}

              {/* Summary View */}
              {activeTab === 'summary' && (
                <div className="space-y-8">
                  <Card className="bg-primary-50 border-primary-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Terms at a Glance</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>14-day free trial</strong> - No credit card required
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>Cancel anytime</strong> - Prorated refunds for annual plans
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>You own your data</strong> - We only access to provide services
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>Security first</strong> - AES-256 encryption, Enterprise Security
                        </span>
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>Arbitration agreement</strong> - Class action waiver (opt-out
                          available)
                        </span>
                      </li>
                    </ul>
                  </Card>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <h3 className="font-semibold text-gray-900 mb-3">Your Rights</h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Access and export your data</li>
                        <li>• Cancel anytime</li>
                        <li>• Request data deletion</li>
                        <li>• Object to processing</li>
                        <li>• Receive service updates</li>
                      </ul>
                    </Card>

                    <Card>
                      <h3 className="font-semibold text-gray-900 mb-3">Your Responsibilities</h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Provide accurate information</li>
                        <li>• Maintain account security</li>
                        <li>• Comply with laws</li>
                        <li>• No prohibited activities</li>
                        <li>• Pay applicable fees</li>
                      </ul>
                    </Card>

                    <Card>
                      <h3 className="font-semibold text-gray-900 mb-3">Service Commitment</h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• 99.9% uptime SLA</li>
                        <li>• 24/7 security monitoring</li>
                        <li>• Regular backups</li>
                        <li>• GDPR/CCPA compliance</li>
                        <li>• Enterprise support</li>
                      </ul>
                    </Card>

                    <Card>
                      <h3 className="font-semibold text-gray-900 mb-3">Limitations</h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Services "AS IS"</li>
                        <li>• Liability limited to fees paid</li>
                        <li>• No consequential damages</li>
                        <li>• 30-day claims period</li>
                      </ul>
                    </Card>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-800 mb-2">📋 Summary</h4>
                    <p className="text-sm text-yellow-700">
                      This summary provides an overview. For complete details, please review our
                      full Terms of Service above. In case of any discrepancy, the full terms
                      prevail.
                    </p>
                  </div>
                </div>
              )}

              {/* Download Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Download Terms of Service</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="outline" leftIcon={<Download className="w-4 h-4" />}>
                    PDF Version
                  </Button>
                  <Button variant="outline" leftIcon={<Download className="w-4 h-4" />}>
                    Text Version
                  </Button>
                  <Link to={ROUTES.LEGAL.DPA}>
                    <Button variant="ghost" rightIcon={<ExternalLink className="w-4 h-4" />}>
                      Data Processing Agreement
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Legal Pages */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h3 className="text-xl font-bold text-center text-gray-900 mb-8">
            Related Legal Information
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              {
                title: 'Privacy Policy',
                link: ROUTES.LEGAL.PRIVACY,
                description: 'How we handle your data',
              },
              {
                title: 'Cookie Policy',
                link: ROUTES.LEGAL.COOKIES,
                description: 'Our use of cookies',
              },
              {
                title: 'GDPR Compliance',
                link: ROUTES.LEGAL.GDPR,
                description: 'EU data protection',
              },
              {
                title: 'Security',
                link: ROUTES.LEGAL.SECURITY,
                description: 'Our security practices',
              },
              { title: 'DPA', link: ROUTES.LEGAL.DPA, description: 'Data Processing Agreement' },
              { title: 'SLA', link: ROUTES.LEGAL.SLA, description: 'Service Level Agreement' },
            ].map((item, index) => (
              <Link key={index} to={item.link}>
                <Card className="h-full hover:border-primary-200 group">
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Questions about our terms?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our legal team is available to address any questions about these terms.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to={ROUTES.COMPANY.CONTACT}>
              <Button size="lg">Contact Legal</Button>
            </Link>
            <Link to={ROUTES.RESOURCES.FAQ}>
              <Button size="lg" variant="outline">
                View Legal FAQs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
