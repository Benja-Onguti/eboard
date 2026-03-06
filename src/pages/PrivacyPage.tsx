import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Shield,
  Lock,
  Eye,
  FileText,
  CheckCircle,
  AlertCircle,
  Download,
  Mail,
  Phone,
  Globe,
  Clock,
  HardDrive,
  Users,
  Server,
  Key,
  Database,
  Cloud,
  Smartphone,
  Laptop,
  Cookie,
  FileSearch,
  UserCheck,
  Trash2,
  RefreshCw,
  ExternalLink,
  ChevronRight,
  Calendar,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs';
import { ROUTES } from '@/config/routes';
import { siteConfig } from '@/config/siteConfig';

// Last updated date
const LAST_UPDATED = 'March 1, 2025';
const EFFECTIVE_DATE = 'March 1, 2025';

// Table of contents items
const tocItems = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'information-collect', title: 'Information We Collect' },
  { id: 'how-we-use', title: 'How We Use Your Information' },
  { id: 'sharing', title: 'Information Sharing' },
  { id: 'security', title: 'Data Security' },
  { id: 'retention', title: 'Data Retention' },
  { id: 'your-rights', title: 'Your Rights' },
  { id: 'cookies', title: 'Cookies & Tracking' },
  { id: 'children', title: "Children's Privacy" },
  { id: 'international', title: 'International Transfers' },
  { id: 'changes', title: 'Changes to Policy' },
  { id: 'contact', title: 'Contact Us' },
];

// Data collection categories
const dataCollection = [
  {
    category: 'Account Information',
    items: [
      'Name and contact information (email, phone, address)',
      'Account credentials and authentication data',
      'Organization details and role',
      'Profile preferences and settings',
    ],
    icon: Users,
  },
  {
    category: 'Meeting Data',
    items: [
      'Meeting agendas, minutes, and materials',
      'Attendance records and participation data',
      'Voting records and decisions',
      'Comments and annotations',
    ],
    icon: FileText,
  },
  {
    category: 'Document Data',
    items: [
      'Uploaded documents and files',
      'Document metadata and version history',
      'Access logs and audit trails',
      'Shared links and permissions',
    ],
    icon: FileSearch,
  },
  {
    category: 'Technical Data',
    items: [
      'IP address and device information',
      'Browser type and operating system',
      'Usage patterns and analytics',
      'Cookie and tracking data',
    ],
    icon: Server,
  },
  {
    category: 'Communication Data',
    items: [
      'Support tickets and correspondence',
      'Newsletter preferences',
      'In-app messages and notifications',
      'Email communications',
    ],
    icon: Mail,
  },
];

// Data usage purposes
const dataUsage = [
  {
    purpose: 'Service Delivery',
    description: 'To provide and maintain our board management services',
    examples: ['Account management', 'Meeting hosting', 'Document storage'],
  },
  {
    purpose: 'Improvement & Analytics',
    description: 'To understand usage patterns and improve our platform',
    examples: ['Feature usage analysis', 'Performance monitoring', 'User experience research'],
  },
  {
    purpose: 'Communication',
    description: 'To communicate with you about your account and our services',
    examples: ['Service updates', 'Support responses', 'Product announcements'],
  },
  {
    purpose: 'Security & Compliance',
    description: 'To protect your data and meet legal obligations',
    examples: ['Fraud prevention', 'Audit trails', 'Regulatory compliance'],
  },
  {
    purpose: 'Legal Obligations',
    description: 'To comply with applicable laws and regulations',
    examples: ['FOI compliance', 'Record keeping', 'Legal requests'],
  },
];

// Third-party sharing
const thirdPartySharing = [
  {
    category: 'Service Providers',
    entities: [
      'Cloud hosting (AWS)',
      'Email services (SendGrid)',
      'Analytics (Google Analytics)',
      'Customer support (Zendesk)',
    ],
    purpose: 'To help us deliver and improve our services',
  },
  {
    category: 'Integrations',
    entities: ['Microsoft Teams', 'Zoom', 'Google Workspace', 'Slack'],
    purpose: 'To provide seamless integration with your existing tools',
  },
  {
    category: 'Legal Compliance',
    entities: ['Regulatory authorities', 'Law enforcement', 'Legal process'],
    purpose: 'To comply with legal obligations and valid legal requests',
  },
];

// Security measures
const securityMeasures = [
  {
    icon: Lock,
    title: 'Encryption',
    description: 'AES-256 encryption for data at rest and TLS 1.3 for data in transit',
  },
  {
    icon: Key,
    title: 'Access Control',
    description: 'Role-based access controls and multi-factor authentication',
  },
  {
    icon: Shield,
    title: 'Certifications',
    description: 'ISO 27001, SOC 2 Type II, and GDPR compliant',
  },
  {
    icon: Eye,
    title: 'Monitoring',
    description: '24/7 security monitoring and intrusion detection',
  },
  {
    icon: Database,
    title: 'Backups',
    description: 'Regular encrypted backups with geographic redundancy',
  },
  {
    icon: HardDrive,
    title: 'Data Centers',
    description: 'SOC 3 certified data centers with 24/7 physical security',
  },
];

// Data retention periods
const retentionPeriods = [
  {
    type: 'Account Data',
    period: 'Duration of account + 30 days',
    reason: 'To allow for account reactivation',
  },
  { type: 'Meeting Records', period: '7 years', reason: 'Legal and compliance requirements' },
  { type: 'Audit Logs', period: '7 years', reason: 'Security and compliance' },
  { type: 'Support Tickets', period: '3 years', reason: 'Customer service and improvement' },
  { type: 'Analytics Data', period: '26 months', reason: 'Product improvement' },
  { type: 'Deleted Data', period: '90 days', reason: 'Recovery and backup purposes' },
];

// Cookie categories
const cookieCategories = [
  {
    name: 'Essential Cookies',
    description: 'Required for basic site functionality',
    examples: ['Authentication', 'Security', 'Session management'],
    required: true,
  },
  {
    name: 'Functional Cookies',
    description: 'Enhance site functionality and preferences',
    examples: ['Language preferences', 'Region selection', 'Accessibility settings'],
    required: false,
  },
  {
    name: 'Analytics Cookies',
    description: 'Help us understand how visitors use our site',
    examples: ['Page views', 'Click tracking', 'User behavior'],
    required: false,
  },
  {
    name: 'Marketing Cookies',
    description: 'Used for targeted advertising and marketing',
    examples: ['Ad personalization', 'Campaign tracking', 'Social media integration'],
    required: false,
  },
];

export const PrivacyPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('policy');
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    functional: false,
    analytics: false,
    marketing: false,
  });

  const handleDownloadPDF = () => {
    // In a real implementation, this would download a PDF
    alert('Privacy policy PDF would download here');
  };

  return (
    <>
      <Helmet>
        <title>Privacy Policy - EBoard Solutions</title>
        <meta
          name="description"
          content="EBoard Solutions' privacy policy. Learn how we collect, use, and protect your personal information."
        />
        <meta property="og:title" content="Privacy Policy - EBoard Solutions" />
        <meta
          property="og:description"
          content="Learn how EBoard Solutions protects your privacy."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom text-center">
          <Badge variant="primary" className="mb-4">
            Privacy Policy
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Your privacy is our <span className="text-primary-600">priority</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We are committed to protecting your personal information and being transparent about how
            we collect, use, and safeguard your data.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              variant="outline"
              onClick={handleDownloadPDF}
              leftIcon={<Download className="w-4 h-4" />}
            >
              Download PDF
            </Button>
            <Link to={ROUTES.LEGAL.COMPLIANCE}>
              <Button variant="ghost" rightIcon={<ExternalLink className="w-4 h-4" />}>
                View Compliance Overview
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

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Table of Contents - Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-4">On this page</h3>
                <nav className="space-y-2">
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

                {/* Quick Contact */}
                <Card className="mt-8 bg-primary-50 border-primary-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Questions?</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Our Data Protection Officer is here to help.
                  </p>
                  <a
                    href={`mailto:privacy@eboard-solutions.com`}
                    className="text-primary-600 font-medium hover:underline text-sm block mb-2"
                  >
                    privacy@eboard-solutions.com
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
              <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-2">
                  <TabsTrigger value="policy">Full Policy</TabsTrigger>
                  <TabsTrigger value="summary">Summary</TabsTrigger>
                </TabsList>
              </Tabs>

              {/* Full Policy View */}
              {activeTab === 'policy' && (
                <div className="space-y-12">
                  {/* Introduction */}
                  <section id="introduction">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                    <p className="text-gray-600 mb-4">
                      EBoard Solutions Inc. ("EBoard," "we," "us," or "our") is committed to
                      protecting your privacy. This Privacy Policy explains how we collect, use,
                      disclose, and safeguard your information when you use our board management
                      platform, website, and related services (collectively, the "Services").
                    </p>
                    <p className="text-gray-600 mb-4">
                      We adhere to global privacy standards including GDPR, CCPA/CPRA, and other
                      applicable regulations. This policy applies to all users of our Services,
                      including board members, administrators, and visitors to our public websites.
                    </p>
                    <p className="text-gray-600">
                      By using our Services, you consent to the data practices described in this
                      policy. If you do not agree with any part of this policy, please do not use
                      our Services.
                    </p>
                  </section>

                  {/* Information We Collect */}
                  <section id="information-collect">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      2. Information We Collect
                    </h2>

                    <div className="space-y-6">
                      {dataCollection.map((category, index) => {
                        const Icon = category.icon;
                        return (
                          <Card key={index} className="bg-gray-50 border-gray-200">
                            <div className="flex items-center mb-3">
                              <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mr-3">
                                <Icon className="w-4 h-4" />
                              </div>
                              <h3 className="font-semibold text-gray-900">{category.category}</h3>
                            </div>
                            <ul className="list-disc pl-10 space-y-1">
                              {category.items.map((item, i) => (
                                <li key={i} className="text-sm text-gray-600">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </Card>
                        );
                      })}
                    </div>

                    <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div className="flex items-start">
                        <AlertCircle className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-yellow-800 mb-1">
                            Sensitive Information
                          </h4>
                          <p className="text-sm text-yellow-700">
                            We do not intentionally collect sensitive information (such as social
                            security numbers, financial account information, or biometric data)
                            unless explicitly provided as part of board materials. If you upload
                            such information, it is protected with the same security measures.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* How We Use Information */}
                  <section id="how-we-use">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      3. How We Use Your Information
                    </h2>

                    <div className="space-y-4">
                      {dataUsage.map((usage, index) => (
                        <Card key={index}>
                          <h3 className="font-semibold text-gray-900 mb-2">{usage.purpose}</h3>
                          <p className="text-sm text-gray-600 mb-2">{usage.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {usage.examples.map((example, i) => (
                              <Badge key={i} variant="secondary" size="sm">
                                {example}
                              </Badge>
                            ))}
                          </div>
                        </Card>
                      ))}
                    </div>
                  </section>

                  {/* Information Sharing */}
                  <section id="sharing">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      4. Information Sharing
                    </h2>

                    <p className="text-gray-600 mb-4">
                      We do not sell your personal information. We only share information as
                      described below:
                    </p>

                    {thirdPartySharing.map((category, index) => (
                      <Card key={index} className="mb-4">
                        <h3 className="font-semibold text-gray-900 mb-2">{category.category}</h3>
                        <p className="text-sm text-gray-600 mb-2">{category.purpose}</p>
                        <div className="flex flex-wrap gap-2">
                          {category.entities.map((entity, i) => (
                            <Badge key={i} variant="secondary" size="sm">
                              {entity}
                            </Badge>
                          ))}
                        </div>
                      </Card>
                    ))}

                    <p className="text-sm text-gray-500 mt-4">
                      We may also share information when required by law, to protect our rights, or
                      in the context of a business transaction (such as a merger or acquisition).
                    </p>
                  </section>

                  {/* Data Security */}
                  <section id="security">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>

                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      {securityMeasures.map((measure, index) => {
                        const Icon = measure.icon;
                        return (
                          <Card key={index} className="flex items-start">
                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mr-3 flex-shrink-0">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900">{measure.title}</h3>
                              <p className="text-sm text-gray-600">{measure.description}</p>
                            </div>
                          </Card>
                        );
                      })}
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-start">
                        <Shield className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-green-800 mb-1">
                            Security Certifications
                          </h4>
                          <p className="text-sm text-green-700">
                            We maintain ISO 27001 certification and undergo annual SOC 2 Type II
                            audits. Our security practices are regularly reviewed by third-party
                            auditors.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Data Retention */}
                  <section id="retention">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Retention</h2>

                    <p className="text-gray-600 mb-4">
                      We retain your information for as long as necessary to provide our Services
                      and comply with legal obligations.
                    </p>

                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">
                              Data Type
                            </th>
                            <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">
                              Retention Period
                            </th>
                            <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">
                              Reason
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {retentionPeriods.map((item, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                              <td className="p-3 border border-gray-200 text-sm text-gray-900">
                                {item.type}
                              </td>
                              <td className="p-3 border border-gray-200 text-sm text-gray-600">
                                {item.period}
                              </td>
                              <td className="p-3 border border-gray-200 text-sm text-gray-600">
                                {item.reason}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Your Rights */}
                  <section id="your-rights">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights</h2>

                    <p className="text-gray-600 mb-4">
                      Depending on your location, you may have the following rights regarding your
                      personal information:
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      {[
                        {
                          right: 'Right to Access',
                          description: 'Request a copy of your personal information',
                        },
                        {
                          right: 'Right to Rectification',
                          description: 'Correct inaccurate or incomplete information',
                        },
                        {
                          right: 'Right to Deletion',
                          description: 'Request deletion of your personal information',
                        },
                        {
                          right: 'Right to Restrict Processing',
                          description: 'Limit how we use your information',
                        },
                        {
                          right: 'Right to Data Portability',
                          description: 'Receive your data in a portable format',
                        },
                        {
                          right: 'Right to Object',
                          description: 'Object to certain processing activities',
                        },
                      ].map((item, index) => (
                        <Card key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <div>
                            <h3 className="font-semibold text-gray-900">{item.right}</h3>
                            <p className="text-sm text-gray-600">{item.description}</p>
                          </div>
                        </Card>
                      ))}
                    </div>

                    <p className="text-gray-600 mb-4">
                      To exercise these rights, please contact our Data Protection Officer at{' '}
                      <a
                        href="mailto:privacy@eboard-solutions.com"
                        className="text-primary-600 hover:underline"
                      >
                        privacy@eboard-solutions.com
                      </a>
                      .
                    </p>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-800 mb-2">GDPR & CCPA Compliance</h4>
                      <p className="text-sm text-blue-700">
                        For EU residents: We process data under GDPR with legitimate interest and
                        consent bases. For California residents: We comply with CCPA/CPRA and do not
                        sell personal information.
                      </p>
                    </div>
                  </section>

                  {/* Cookies & Tracking */}
                  <section id="cookies">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      8. Cookies & Tracking Technologies
                    </h2>

                    <p className="text-gray-600 mb-4">
                      We use cookies and similar technologies to enhance your experience and
                      understand usage patterns.
                    </p>

                    <div className="space-y-4 mb-6">
                      {cookieCategories.map((cookie, index) => (
                        <Card key={index} className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center">
                              <h3 className="font-semibold text-gray-900">{cookie.name}</h3>
                              {cookie.required && (
                                <Badge variant="primary" size="sm" className="ml-2">
                                  Required
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{cookie.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {cookie.examples.map((example, i) => (
                                <Badge key={i} variant="secondary" size="sm">
                                  {example}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="ml-4">
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={
                                  cookie.required
                                    ? true
                                    : cookiePreferences[
                                        cookie.name
                                          .toLowerCase()
                                          .replace(' ', '') as keyof typeof cookiePreferences
                                      ]
                                }
                                disabled={cookie.required}
                                onChange={(e) => {
                                  const key = cookie.name
                                    .toLowerCase()
                                    .replace(' ', '') as keyof typeof cookiePreferences;
                                  setCookiePreferences((prev) => ({
                                    ...prev,
                                    [key]: e.target.checked,
                                  }));
                                }}
                              />
                              <div
                                className={`w-11 h-6 rounded-full peer peer-focus:ring-2 peer-focus:ring-primary-300 ${
                                  cookie.required
                                    ? 'bg-primary-300'
                                    : 'bg-gray-200 peer-checked:bg-primary-600'
                                }`}
                              >
                                <div
                                  className={`absolute top-0.5 left-0.5 bg-white rounded-full h-5 w-5 transition-transform ${
                                    cookie.required ||
                                    cookiePreferences[
                                      cookie.name
                                        .toLowerCase()
                                        .replace(' ', '') as keyof typeof cookiePreferences
                                    ]
                                      ? 'transform translate-x-5'
                                      : ''
                                  }`}
                                />
                              </div>
                            </label>
                          </div>
                        </Card>
                      ))}
                    </div>

                    <Link to={ROUTES.LEGAL.COOKIES}>
                      <Button variant="outline" size="sm">
                        Manage Cookie Preferences
                      </Button>
                    </Link>
                  </section>

                  {/* Children's Privacy */}
                  <section id="children">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>

                    <p className="text-gray-600">
                      Our Services are not intended for individuals under the age of 16. We do not
                      knowingly collect personal information from children. If you become aware that
                      a child has provided us with personal information, please contact us
                      immediately.
                    </p>
                  </section>

                  {/* International Transfers */}
                  <section id="international">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      10. International Data Transfers
                    </h2>

                    <p className="text-gray-600 mb-4">
                      We are based in the United States but serve customers worldwide. Your
                      information may be transferred to and processed in countries other than your
                      own.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <Card>
                        <h3 className="font-semibold text-gray-900 mb-2">Data Center Regions</h3>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm">
                            <Globe className="w-4 h-4 text-primary-600 mr-2" />
                            <span>North America (Virginia, Oregon)</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <Globe className="w-4 h-4 text-primary-600 mr-2" />
                            <span>Europe (Frankfurt, Ireland)</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <Globe className="w-4 h-4 text-primary-600 mr-2" />
                            <span>Asia Pacific (Singapore, Tokyo)</span>
                          </div>
                        </div>
                      </Card>

                      <Card>
                        <h3 className="font-semibold text-gray-900 mb-2">Transfer Mechanisms</h3>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            <span>EU-U.S. Data Privacy Framework</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            <span>Standard Contractual Clauses</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            <span>Binding Corporate Rules</span>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </section>

                  {/* Changes to Policy */}
                  <section id="changes">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      11. Changes to This Policy
                    </h2>

                    <p className="text-gray-600 mb-4">
                      We may update this Privacy Policy from time to time. When we make material
                      changes, we will notify you through the Services or by email at least 30 days
                      before the changes take effect.
                    </p>

                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Last updated: {LAST_UPDATED}</span>
                    </div>
                  </section>

                  {/* Contact Us */}
                  <section id="contact">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>

                    <p className="text-gray-600 mb-6">
                      If you have questions about this Privacy Policy or our data practices, please
                      contact:
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <Card>
                        <h3 className="font-semibold text-gray-900 mb-3">
                          Data Protection Officer
                        </h3>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Mail className="w-4 h-4 text-primary-600 mr-2" />
                            <a
                              href="mailto:privacy@eboard-solutions.com"
                              className="text-primary-600 hover:underline"
                            >
                              privacy@eboard-solutions.com
                            </a>
                          </div>
                          <div className="flex items-center">
                            <Phone className="w-4 h-4 text-primary-600 mr-2" />
                            <a href="tel:+18885551234" className="text-primary-600 hover:underline">
                              +1 (888) 555-1234
                            </a>
                          </div>
                        </div>
                      </Card>

                      <Card>
                        <h3 className="font-semibold text-gray-900 mb-3">Postal Address</h3>
                        <p className="text-sm text-gray-600">
                          EBoard Solutions Inc.
                          <br />
                          Attn: Data Protection Officer
                          <br />
                          123 Innovation Drive
                          <br />
                          San Francisco, CA 94105
                          <br />
                          United States
                        </p>
                      </Card>
                    </div>
                  </section>
                </div>
              )}

              {/* Summary View */}
              {activeTab === 'summary' && (
                <div className="space-y-8">
                  <Card className="bg-primary-50 border-primary-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Privacy at a Glance</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">
                          We <strong>do not sell</strong> your personal information
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">
                          We use <strong>AES-256 encryption</strong> for all data
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">
                          We are <strong>ISO 27001 certified</strong> and SOC 2 compliant
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">
                          You can <strong>access, correct, or delete</strong> your data anytime
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">
                          We comply with <strong>GDPR, CCPA, and other global regulations</strong>
                        </span>
                      </li>
                    </ul>
                  </Card>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <div className="flex items-center mb-3">
                        <Shield className="w-5 h-5 text-primary-600 mr-2" />
                        <h3 className="font-semibold text-gray-900">Your Rights</h3>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Right to access your data</li>
                        <li>• Right to correct your data</li>
                        <li>• Right to delete your data</li>
                        <li>• Right to data portability</li>
                        <li>• Right to opt out of marketing</li>
                      </ul>
                    </Card>

                    <Card>
                      <div className="flex items-center mb-3">
                        <HardDrive className="w-5 h-5 text-primary-600 mr-2" />
                        <h3 className="font-semibold text-gray-900">Data Retention</h3>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Account data: active + 30 days</li>
                        <li>• Meeting records: 7 years</li>
                        <li>• Audit logs: 7 years</li>
                        <li>• Analytics: 26 months</li>
                      </ul>
                    </Card>

                    <Card>
                      <div className="flex items-center mb-3">
                        <Cookie className="w-5 h-5 text-primary-600 mr-2" />
                        <h3 className="font-semibold text-gray-900">Cookies</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        We use essential, functional, and analytics cookies. You can manage
                        preferences in cookie settings.
                      </p>
                      <Link
                        to={ROUTES.LEGAL.COOKIES}
                        className="text-primary-600 text-sm hover:underline"
                      >
                        Manage Cookies →
                      </Link>
                    </Card>

                    <Card>
                      <div className="flex items-center mb-3">
                        <Mail className="w-5 h-5 text-primary-600 mr-2" />
                        <h3 className="font-semibold text-gray-900">Contact DPO</h3>
                      </div>
                      <a
                        href="mailto:privacy@eboard-solutions.com"
                        className="text-primary-600 text-sm hover:underline block mb-1"
                      >
                        privacy@eboard-solutions.com
                      </a>
                      <p className="text-sm text-gray-600">Response within 72 hours</p>
                    </Card>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-800 mb-2">📋 Summary</h4>
                    <p className="text-sm text-yellow-700">
                      This summary provides an overview. For complete details, please review our
                      full Privacy Policy above. In case of any discrepancy, the full policy
                      prevails.
                    </p>
                  </div>
                </div>
              )}

              {/* Download Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Download Privacy Policy</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="outline" leftIcon={<Download className="w-4 h-4" />}>
                    PDF Version
                  </Button>
                  <Button variant="outline" leftIcon={<Download className="w-4 h-4" />}>
                    Text Version
                  </Button>
                  <Link to={ROUTES.LEGAL.GDPR}>
                    <Button variant="ghost" rightIcon={<ExternalLink className="w-4 h-4" />}>
                      GDPR Information
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
                title: 'Terms of Service',
                link: ROUTES.LEGAL.TERMS,
                description: 'Our terms and conditions',
              },
              {
                title: 'Cookie Policy',
                link: ROUTES.LEGAL.COOKIES,
                description: 'How we use cookies',
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
              {
                title: 'Subprocessors',
                link: ROUTES.LEGAL.SUBPROCESSORS,
                description: 'Third-party subprocessors',
              },
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
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have privacy questions?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our Data Protection Officer is available to address any concerns about your personal
            information.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to={ROUTES.COMPANY.CONTACT}>
              <Button size="lg">Contact DPO</Button>
            </Link>
            <Link to={ROUTES.RESOURCES.FAQ}>
              <Button size="lg" variant="outline">
                View Privacy FAQs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
