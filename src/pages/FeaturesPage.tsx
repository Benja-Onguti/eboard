import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Shield,
  Brain,
  FileText,
  CheckCircle,
  ArrowRight,
  Users,
  Plug,
  Settings,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ROUTES } from '@/config/routes';

const features = [
  {
    id: 'ai-capabilities',
    icon: Brain,
    title: 'AI Capabilities',
    tagline: 'Powered by Google Gemini and Google Cloud',
    description:
      'Leverage cutting-edge AI to transform how your board works. From transcription to summarization, our AI capabilities save time and improve accuracy.',
    benefits: [
      'Speech to Text – Transcribe meetings, minutes, and dictation',
      'Text to Speech – Listen to documents on the go',
      'AI Summarisation – Concise summaries of board packs (100+ page reports)',
    ],
    features: [
      'Speech to Text',
      'Text to Speech',
      'AI Summarisation',
      'Powered by Google Gemini',
      'Google Cloud Integration',
    ],
    image: '/images/features/ai-capabilities.jpg',
    gradient: 'from-purple-600 to-pink-600',
    link: '/features/ai-capabilities',
    badge: 'New',
    stats: { value: '95%', label: 'Time saved on documentation' },
  },
  {
    id: 'meeting-management',
    icon: Calendar,
    title: 'Meeting & Agenda Management',
    tagline: 'Streamline your entire meeting workflow',
    description:
      'From scheduling to minutes, automate every aspect of your board meetings with powerful management tools.',
    benefits: [
      'Agenda Builder – Drag-and-drop tool for creating and publishing agendas',
      'Minute Builder – Records decisions, actions, and discussions',
      'Meeting Scheduling & Governance',
      'Video conferencing integration (Zoom & Teams)',
      'Pre-meeting preparation metrics',
    ],
    features: [
      'Agenda Builder',
      'Minute Builder',
      'Meeting Scheduling',
      'Video Conferencing',
      'Pre-meeting Metrics',
    ],
    image: '/images/features/meeting-management.jpg',
    gradient: 'from-blue-600 to-indigo-600',
    link: ROUTES.MARKETING.MEETING_MANAGEMENT,
    stats: { value: '70%', label: 'Faster prep time' },
  },
  {
    id: 'committee-management',
    icon: Users,
    title: 'Committee Management',
    tagline: 'Organize and manage all your committees',
    description:
      'Efficiently manage unlimited committees with dedicated spaces for each group, complete with member tracking and custom branding.',
    benefits: [
      'Unlimited committees',
      'Dedicated committee libraries',
      'Membership register & history',
      'Cover page per committee',
    ],
    features: [
      'Unlimited Committees',
      'Committee Libraries',
      'Membership Register',
      'Cover Pages',
      'Committee Analytics',
    ],
    image: '/images/features/committee-management.jpg',
    gradient: 'from-green-600 to-teal-600',
    link: '/features/committee-management',
    stats: { value: '100%', label: 'Committee visibility' },
  },
  {
    id: 'document-features',
    icon: FileText,
    title: 'Document & Pack Features',
    tagline: 'Complete document management solution',
    description:
      'Manage all your board documents with powerful features including signing, surveys, and cloning capabilities.',
    benefits: [
      'All file types supported',
      'Document signing',
      'Forms & surveys (powered by Orbeon Forms)',
      'Clone any agenda',
      'Votes & resolutions',
    ],
    features: [
      'All File Types',
      'Document Signing',
      'Forms & Surveys',
      'Clone Agenda',
      'Votes & Resolutions',
    ],
    image: '/images/features/document-features.jpg',
    gradient: 'from-orange-600 to-red-600',
    link: ROUTES.MARKETING.DOCUMENT_MANAGEMENT,
    stats: { value: '50+', label: 'File types supported' },
  },
  {
    id: 'security',
    icon: Shield,
    title: 'Security',
    tagline: 'Military-grade protection for your data',
    description:
      'Protect your board documents with enterprise-grade security built on the Microsoft Enterprise Framework.',
    benefits: [
      'Military-grade encryption built on the Microsoft Enterprise Framework',
      'Two-factor authentication (2FA)',
      'Activity tracking and background audit logs',
      'Role-based document access',
    ],
    features: [
      'Military-grade Encryption',
      'Two-Factor Authentication',
      'Activity Tracking',
      'Audit Logs',
      'Role-based Access',
    ],
    image: '/images/features/security.jpg',
    gradient: 'from-slate-600 to-gray-600',
    link: ROUTES.PLATFORM.SECURITY,
    stats: { value: '99.99%', label: 'Uptime SLA' },
  },
  {
    id: 'integrations',
    icon: Settings,
    title: 'Integrations & Support',
    tagline: 'Connect with your favorite tools',
    description:
      'Seamlessly integrate with your existing tools and get unlimited training and support with every plan.',
    benefits: [
      'SharePoint, email, calendar, and task management integrations',
      'Unlimited training and support included in every plan',
      'Self-hosted or cloud-hosted options',
    ],
    features: [
      'SharePoint Integration',
      'Email & Calendar Sync',
      'Task Management',
      'Unlimited Training',
      'Flexible Hosting',
    ],
    image: '/images/features/integrations.jpg',
    gradient: 'from-cyan-600 to-blue-600',
    link: ROUTES.PLATFORM.INTEGRATIONS,
    stats: { value: '24/7', label: 'Support available' },
  },
];

export const FeaturesPage: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = React.useState(features[0]);

  // Helper function to render benefit with proper formatting
  const renderBenefit = (benefit: string) => {
    // Check if benefit has a colon (for features with specific names)
    if (benefit.includes(' – ')) {
      const [title, description] = benefit.split(' – ');
      return (
        <span className="text-gray-700">
          <span className="font-semibold text-gray-900">{title}</span> – {description}
        </span>
      );
    }
    return <span className="text-gray-700">{benefit}</span>;
  };

  return (
    <>
      <Helmet>
        <title>Features - EBoard Solutions</title>
        <meta
          name="description"
          content="Explore EBoard's comprehensive governance features: AI capabilities, meeting management, committee management, document features, security, and integrations."
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
          <div className="flex overflow-x-auto hide-scrollbar gap-2 justify-center flex-wrap">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setSelectedFeature(feature)}
                className={`flex items-center px-4 py-2 rounded-lg whitespace-nowrap transition ${
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
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Key capabilities:</h3>
                <ul className="space-y-3 mb-8">
                  {selectedFeature.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                      {renderBenefit(benefit)}
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
                    onError={(e) => {
                      e.currentTarget.src = `https://placehold.co/600x400/${selectedFeature.gradient.split(' ')[0].replace('from-', '').replace('-600', '')}/ffffff?text=${selectedFeature.title.replace(/ /g, '+')}`;
                    }}
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
                  className={`h-full cursor-pointer transition-all duration-300 hover:shadow-xl ${
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
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                        {feature.badge && (
                          <Badge variant="primary" size="sm">
                            {feature.badge}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-500 line-clamp-2">{feature.tagline}</p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 line-clamp-3 mb-3">{feature.description}</p>

                  {/* Show first 3 benefits as preview */}
                  <div className="mt-2">
                    {feature.benefits.slice(0, 2).map((benefit, idx) => (
                      <div key={idx} className="text-xs text-gray-500 flex items-center mt-1">
                        <div className="w-1 h-1 bg-primary-400 rounded-full mr-2" />
                        <span className="truncate">{benefit.substring(0, 60)}...</span>
                      </div>
                    ))}
                  </div>

                  {feature.stats && (
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <div className="text-xs text-gray-400">
                        <span className="font-semibold text-primary-600">
                          {feature.stats.value}
                        </span>{' '}
                        {feature.stats.label}
                      </div>
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Highlights */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything you need in one platform
            </h2>
            <p className="text-xl text-gray-600">
              From AI-powered tools to enterprise-grade security, EBoard has you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mb-4">
                <Brain className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">AI-Powered</h3>
              <p className="text-gray-600 text-sm">
                Speech to text, text to speech, and AI summarization powered by Google Gemini
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Military-Grade Security</h3>
              <p className="text-gray-600 text-sm">
                Built on Microsoft Enterprise Framework with 2FA and audit logs
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mb-4">
                <Plug className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Seamless Integrations</h3>
              <p className="text-gray-600 text-sm">
                Connect with SharePoint, email, calendar, and task management tools
              </p>
            </div>
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
          <div className="flex flex-wrap gap-4 justify-center">
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
        </div>
      </section>
    </>
  );
};

export default FeaturesPage;
