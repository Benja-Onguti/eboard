import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Shield,
  Brain,
  FileText,
  Globe,
  PenTool,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Zap,
  Lock,
  FileSearch,
  MessageSquare,
  Vote,
  Download,
  BookOpen,
  BarChart,
  Bell,
  Settings,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ROUTES } from '@/config/routes';

const features = [
  {
    id: 'meeting-management',
    icon: Calendar,
    title: 'Meeting Management',
    tagline: 'Streamline your entire meeting workflow',
    description:
      'From scheduling to minutes, automate every aspect of your board meetings with AI-powered tools.',
    benefits: [
      'AI-powered scheduling that finds the perfect time for all members across time zones',
      'Digital agenda builder with drag-and-drop simplicity and time allocations',
      'Automated board pack assembly with one-click distribution',
      'Real-time collaboration and annotations during meetings',
      'AI-generated minutes with action item tracking and summaries',
    ],
    features: [
      'Smart Scheduling',
      'Agenda Builder',
      'Board Pack Assembly',
      'Real-time Collaboration',
      'Minutes Generation',
    ],
    image: '/images/features/meeting-management.jpg',
    gradient: 'from-blue-600 to-indigo-600',
    link: ROUTES.MARKETING.MEETING_MANAGEMENT,
    stats: { value: '70%', label: 'Faster prep time' },
  },
  {
    id: 'document-security',
    icon: Shield,
    title: 'Bank-Level Security',
    tagline: 'Enterprise-grade protection for sensitive materials',
    description:
      'Protect your board documents with military-grade encryption and complete compliance certifications.',
    benefits: [
      'AES-256 encryption for all documents at rest and in transit',
      'Granular role-based access controls with permissions',
      'Complete audit logs of all document activity',
      'ISO 27001, SOC 2, and GDPR compliant infrastructure',
      'Automated redaction tools for FOI requests',
    ],
    features: [
      'End-to-End Encryption',
      'Access Control',
      'Audit Trails',
      'Compliance Certifications',
      'Auto-Redaction',
    ],
    image: '/images/features/security.jpg',
    gradient: 'from-purple-600 to-pink-600',
    link: ROUTES.PLATFORM.SECURITY,
    stats: { value: '99.9%', label: 'Uptime SLA' },
  },
  {
    id: 'ai-minutes',
    icon: Brain,
    title: 'AI-Powered Minutes',
    tagline: 'Never miss a moment with AI assistance',
    description:
      'Let artificial intelligence capture decisions, actions, and key discussion points automatically.',
    benefits: [
      'Real-time transcription with speaker identification',
      'Automatic extraction of decisions and action items',
      'Smart summaries of key discussion points',
      'Searchable meeting transcripts with timestamps',
      'Integration with task management systems',
    ],
    features: [
      'Live Transcription',
      'Decision Extraction',
      'Smart Summaries',
      'Searchable Transcripts',
      'Task Integration',
    ],
    image: '/images/features/ai-minutes.jpg',
    gradient: 'from-green-600 to-teal-600',
    link: ROUTES.MARKETING.AI_MINUTES,
    badge: 'New',
    stats: { value: '5min', label: 'Setup time' },
  },
  {
    id: 'document-hub',
    icon: FileText,
    title: 'Central Document Hub',
    tagline: 'Secure, version-controlled repository',
    description:
      'Store, manage, and share board documents with powerful search and organization features.',
    benefits: [
      'Centralized storage for all board materials',
      'Version control with complete history and restore',
      'Full-text search across all documents with filters',
      'Smart folders and automated organization',
      'Offline access for mobile users',
    ],
    features: [
      'Central Storage',
      'Version Control',
      'Full-Text Search',
      'Smart Organization',
      'Offline Access',
    ],
    image: '/images/features/document-hub.jpg',
    gradient: 'from-orange-600 to-red-600',
    link: ROUTES.MARKETING.DOCUMENT_MANAGEMENT,
    stats: { value: '10K+', label: 'Documents' },
  },
  {
    id: 'e-signatures',
    icon: PenTool,
    title: 'E-Signatures',
    tagline: 'Legally binding digital signatures',
    description:
      'Execute documents with legally binding electronic signatures that comply with global standards.',
    benefits: [
      'Compliant with ESIGN, UETA, and eIDAS regulations',
      'Multi-party signing workflows with automated reminders',
      'Complete audit trail of every signature and action',
      'Mobile-friendly signing experience',
      'Integration with document management',
    ],
    features: [
      'Legal Compliance',
      'Multi-Party Workflows',
      'Audit Trails',
      'Mobile Signing',
      'Document Integration',
    ],
    image: '/images/features/esignatures.jpg',
    gradient: 'from-pink-600 to-rose-600',
    link: ROUTES.MARKETING.E_SIGNATURES,
    stats: { value: '100%', label: 'Compliant' },
  },
  {
    id: 'public-sites',
    icon: Globe,
    title: 'Public Meeting Sites',
    tagline: 'Transparent public meeting portals',
    description:
      'Publish agendas, documents, and minutes to public-facing archives with one click.',
    benefits: [
      'FOI-compliant public archives',
      'Customizable public portals with your branding',
      'Automated document redaction tools',
      'Meeting live-streaming integration',
      'Transparency and accountability metrics',
    ],
    features: [
      'Public Archives',
      'FOI Compliance',
      'Custom Portals',
      'Redaction Tools',
      'Live Streaming',
    ],
    image: '/images/features/public-sites.jpg',
    gradient: 'from-cyan-600 to-blue-600',
    link: ROUTES.MARKETING.PUBLIC_SITES,
    stats: { value: '100%', label: 'Compliance' },
  },
  {
    id: 'voting',
    icon: Vote,
    title: 'Voting & Approvals',
    tagline: 'Streamlined decision-making',
    description:
      'Conduct secure votes and approvals with complete audit trails and real-time results.',
    benefits: [
      'Secure electronic voting with anonymity options',
      'Customizable approval workflows',
      'Real-time results tabulation',
      'Complete audit trail of all votes',
      'Integration with meeting minutes',
    ],
    features: [
      'Electronic Voting',
      'Approval Workflows',
      'Real-Time Results',
      'Audit Trails',
      'Minutes Integration',
    ],
    image: '/images/features/voting.jpg',
    gradient: 'from-indigo-600 to-purple-600',
    link: '/features/voting',
  },
  {
    id: 'analytics',
    icon: BarChart,
    title: 'Governance Analytics',
    tagline: 'Data-driven insights',
    description:
      'Gain valuable insights into board activities, attendance, and decision-making patterns.',
    benefits: [
      'Board attendance and engagement metrics',
      'Decision tracking and outcomes analysis',
      'Meeting efficiency scores',
      'Document access analytics',
      'Custom report generation',
    ],
    features: [
      'Engagement Metrics',
      'Decision Tracking',
      'Efficiency Scores',
      'Access Analytics',
      'Custom Reports',
    ],
    image: '/images/features/analytics.jpg',
    gradient: 'from-emerald-600 to-green-600',
    link: '/features/analytics',
  },
  {
    id: 'integrations',
    icon: Settings,
    title: 'Integrations',
    tagline: 'Connect your existing tools',
    description:
      'Seamlessly integrate with your favorite tools including Zoom, Teams, Google Workspace, and more.',
    benefits: [
      'Zoom and Microsoft Teams integration',
      'Google Workspace and Office 365 sync',
      'Slack notifications and updates',
      'Calendar integrations (Google, Outlook, iCal)',
      'API access for custom integrations',
    ],
    features: [
      'Video Conferencing',
      'Calendar Sync',
      'Slack Integration',
      'Office 365',
      'API Access',
    ],
    image: '/images/features/integrations.jpg',
    gradient: 'from-slate-600 to-gray-600',
    link: ROUTES.PLATFORM.INTEGRATIONS,
  },
];

export const FeaturesPage: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = React.useState(features[0]);

  return (
    <>
      <Helmet>
        <title>Features - EBoard Solutions</title>
        <meta
          name="description"
          content="Explore EBoard's comprehensive governance features: meeting management, document security, AI minutes, e-signatures, and more."
        />
        <meta property="og:title" content="Features - EBoard Solutions" />
        <meta
          property="og:description"
          content="Explore EBoard's comprehensive governance features for modern boards."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-8 pb-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom text-center">
          <Badge variant="primary" className="mb-4">
            Platform Features
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Powerful features for{' '}
            <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              modern governance
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Everything you need to streamline board meetings, enhance security, and drive better
            decisions—all in one platform.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to={ROUTES.DEMO.INDEX}>
              <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                See it in action
              </Button>
            </Link>
            <Link to={ROUTES.COMPANY.CONTACT}>
              <Button size="lg" variant="outline">
                Talk to sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Navigation */}
      <section className="sticky top-20 bg-white border-b border-gray-200 z-30 py-4">
        <div className="container-custom">
          <div className="flex overflow-x-auto hide-scrollbar">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setSelectedFeature(feature)}
                className={`flex items-center px-4 py-2 mx-1 rounded-lg whitespace-nowrap transition ${
                  selectedFeature.id === feature.id
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <feature.icon className="w-4 h-4 mr-2" />
                {feature.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Feature Detail */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            key={selectedFeature.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${selectedFeature.gradient} text-white mb-6`}
                >
                  <selectedFeature.icon className="w-8 h-8" />
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedFeature.title}</h2>

                <p className="text-xl text-primary-600 font-medium mb-4">
                  {selectedFeature.tagline}
                </p>

                <p className="text-gray-600 text-lg mb-8">{selectedFeature.description}</p>

                {/* Stats if available */}
                {selectedFeature.stats && (
                  <div className="bg-gray-50 rounded-xl p-6 mb-8">
                    <div className="text-3xl font-bold text-primary-600 mb-1">
                      {selectedFeature.stats.value}
                    </div>
                    <div className="text-sm text-gray-500">{selectedFeature.stats.label}</div>
                  </div>
                )}

                {/* Benefits */}
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Key benefits:</h3>
                <ul className="space-y-3 mb-8">
                  {selectedFeature.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Feature tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedFeature.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex gap-4">
                  <Link to={selectedFeature.link}>
                    <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                      Learn more
                    </Button>
                  </Link>
                  <Link to={ROUTES.DEMO.INDEX}>
                    <Button size="lg" variant="outline">
                      See demo
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="relative rounded-2xl shadow-2xl overflow-hidden">
                  <img
                    src={selectedFeature.image}
                    alt={selectedFeature.title}
                    className="w-full h-auto"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-tr ${selectedFeature.gradient} opacity-10`}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Features Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Explore all features
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card
                  variant="elevated"
                  className={`h-full cursor-pointer ${
                    selectedFeature.id === feature.id ? 'ring-2 ring-primary-500' : ''
                  }`}
                  onClick={() => setSelectedFeature(feature)}
                >
                  <div className="flex items-start mb-4">
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mr-3`}
                    >
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-sm text-gray-500 line-clamp-2">{feature.tagline}</p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 line-clamp-3">{feature.description}</p>

                  {feature.badge && (
                    <Badge variant="primary" size="sm" className="mt-4">
                      {feature.badge}
                    </Badge>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to experience these features?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            See how EBoard can transform your board meetings with a personalized demo.
          </p>
          <Link to={ROUTES.DEMO.INDEX}>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary-600 hover:bg-gray-100"
            >
              Book Your Demo
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};
