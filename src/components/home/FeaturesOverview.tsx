import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ROUTES } from '@/config/routes';

// Feature data structure
interface Feature {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  benefits: string[];
  gradient: string;
  lightIcon?: React.ElementType;
  stats?: {
    value: string;
    label: string;
  };
  link: string;
  isNew?: boolean;
  isPopular?: boolean;
}

// Features data
const features: Feature[] = [
  {
    id: 'meeting-management',
    icon: Calendar,
    lightIcon: Clock,
    title: 'Meeting Management',
    description:
      'Streamline your entire meeting workflow from scheduling to minutes with AI-powered automation.',
    benefits: [
      'AI-powered scheduling that finds the perfect time for all members',
      'Digital agenda builder with drag-and-drop simplicity',
      'Automated board pack assembly with one-click distribution',
      'Real-time collaboration and annotations during meetings',
      'AI-generated minutes with action item tracking',
    ],
    gradient: 'from-blue-600 to-indigo-600',
    stats: {
      value: '70%',
      label: 'Faster meeting prep',
    },
    link: ROUTES.MARKETING.MEETING_MANAGEMENT,
    isPopular: true,
  },
  {
    id: 'document-security',
    icon: Shield,
    lightIcon: Lock,
    title: 'Bank-Level Security',
    description:
      'Enterprise-grade encryption and compliance with complete audit trails for sensitive board materials.',
    benefits: [
      'AES-256 encryption for all documents at rest and in transit',
      'Granular role-based access controls',
      'Complete audit logs of all document activity',
      'ISO 27001, SOC 2, and GDPR compliant',
      'Automated redaction for FOI requests',
    ],
    gradient: 'from-purple-600 to-pink-600',
    stats: {
      value: '99.9%',
      label: 'Uptime SLA',
    },
    link: ROUTES.PLATFORM.SECURITY,
  },
  {
    id: 'ai-minutes',
    icon: Brain,
    lightIcon: Zap,
    title: 'AI-Powered Minutes',
    description:
      'Let artificial intelligence capture decisions, actions, and key discussion points automatically.',
    benefits: [
      'Real-time transcription with speaker identification',
      'Automatic extraction of decisions and action items',
      'Smart summaries of key discussion points',
      'Searchable meeting transcripts',
      'Integration with task management systems',
    ],
    gradient: 'from-green-600 to-teal-600',
    stats: {
      value: '5min',
      label: 'Average setup time',
    },
    link: ROUTES.MARKETING.AI_MINUTES,
    isNew: true,
  },
  {
    id: 'document-hub',
    icon: FileText,
    lightIcon: FileSearch,
    title: 'Central Document Hub',
    description:
      'Secure, version-controlled repository for all board documents with powerful search and organization.',
    benefits: [
      'Centralized storage for all board materials',
      'Version control with complete history',
      'Full-text search across all documents',
      'Smart folders and automated organization',
      'Offline access for mobile users',
    ],
    gradient: 'from-orange-600 to-red-600',
    stats: {
      value: '10K+',
      label: 'Documents stored',
    },
    link: ROUTES.MARKETING.DOCUMENT_MANAGEMENT,
  },
  {
    id: 'e-signatures',
    icon: PenTool,
    lightIcon: Download,
    title: 'E-Signatures',
    description:
      'Legally binding electronic signatures with multi-party workflows and complete audit trails.',
    benefits: [
      'Compliant with ESIGN, UETA, and eIDAS regulations',
      'Multi-party signing workflows with automated reminders',
      'Complete audit trail of every signature',
      'Mobile-friendly signing experience',
      'Integration with document management',
    ],
    gradient: 'from-pink-600 to-rose-600',
    link: ROUTES.MARKETING.E_SIGNATURES,
  },
  {
    id: 'public-sites',
    icon: Globe,
    lightIcon: Users,
    title: 'Public Meeting Sites',
    description:
      'Publish agendas, documents, and minutes to public-facing archives with one click.',
    benefits: [
      'FOI-compliant public archives',
      'Customizable public portals with your branding',
      'Automated document redaction tools',
      'Meeting live-streaming integration',
      'Transparency and accountability metrics',
    ],
    gradient: 'from-cyan-600 to-blue-600',
    stats: {
      value: '100%',
      label: 'FOI compliance',
    },
    link: ROUTES.MARKETING.PUBLIC_SITES,
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

export const FeatureOverview: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFeature, setActiveFeature] = React.useState<string>(features[0].id);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge variant="primary" className="mb-4">
            Platform Features
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Everything you need for{' '}
            <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              modern governance
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Streamline board meetings, enhance security, and drive better decisions with our
            comprehensive platform.
          </p>
        </motion.div>

        {/* Feature Navigation Tabs (Mobile/Tablet) */}
        <div className="lg:hidden mb-8 overflow-x-auto pb-4">
          <div className="flex space-x-2 min-w-max">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  activeFeature === feature.id
                    ? `bg-gradient-to-r ${feature.gradient} text-white shadow-lg`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <feature.icon className="w-4 h-4 inline-block mr-2" />
                {feature.title}
              </button>
            ))}
          </div>
        </div>

        {/* Main Feature Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Feature List (Desktop) */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="hidden lg:block space-y-4"
          >
            {features.map((feature) => {
              const Icon = feature.icon;
              const isActive = activeFeature === feature.id;

              return (
                <motion.div
                  key={feature.id}
                  variants={itemVariants}
                  onClick={() => setActiveFeature(feature.id)}
                  className={`cursor-pointer transition-all duration-300 ${
                    isActive ? 'scale-105' : 'hover:scale-102'
                  }`}
                >
                  <Card
                    variant={isActive ? 'elevated' : 'default'}
                    className={`relative overflow-hidden group ${
                      isActive ? `ring-2 ring-primary-500 ring-offset-2` : ''
                    }`}
                  >
                    {feature.isNew && (
                      <div className="absolute top-4 right-4">
                        <Badge variant="primary" size="sm">
                          New
                        </Badge>
                      </div>
                    )}

                    <div className="flex items-start space-x-4">
                      {/* Icon with gradient background */}
                      <div
                        className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} p-0.5`}
                      >
                        <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                          <Icon className="w-7 h-7 text-gray-900" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                          {feature.stats && (
                            <div className="text-right">
                              <span className="text-lg font-bold text-primary-600">
                                {feature.stats.value}
                              </span>
                              <p className="text-xs text-gray-500">{feature.stats.label}</p>
                            </div>
                          )}
                        </div>
                        <p className="text-gray-600 text-sm line-clamp-2">{feature.description}</p>
                      </div>

                      {/* Active indicator */}
                      {isActive && (
                        <motion.div
                          layoutId="activeFeature"
                          className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-primary-600 rounded-r-full"
                        />
                      )}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right Column - Active Feature Details */}
          <motion.div
            key={activeFeature}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-24"
          >
            {features.map((feature) => {
              if (feature.id !== activeFeature) return null;

              const Icon = feature.icon;
              const LightIcon = feature.lightIcon || Zap;

              return (
                <Card key={feature.id} variant="elevated" className="overflow-hidden">
                  {/* Hero Section */}
                  <div className={`bg-gradient-to-r ${feature.gradient} p-8 text-white`}>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      {feature.stats && (
                        <div className="text-right">
                          <div className="text-3xl font-bold">{feature.stats.value}</div>
                          <div className="text-sm text-white/80">{feature.stats.label}</div>
                        </div>
                      )}
                    </div>

                    <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-lg text-white/90">{feature.description}</p>
                  </div>

                  {/* Benefits List */}
                  <div className="p-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <LightIcon className="w-5 h-5 text-primary-600 mr-2" />
                      Key capabilities
                    </h4>

                    <ul className="space-y-4 mb-8">
                      {feature.benefits.map((benefit, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start group"
                        >
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-3 group-hover:scale-110 transition">
                            <CheckCircle className="w-4 h-4" />
                          </span>
                          <span className="text-gray-700">{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <Link to={feature.link}>
                        <Button
                          size="lg"
                          rightIcon={<ArrowRight className="w-5 h-5" />}
                          className={`bg-gradient-to-r ${feature.gradient} text-white border-0 hover:opacity-90`}
                        >
                          Learn more
                        </Button>
                      </Link>
                      <Link to={ROUTES.DEMO.INDEX}>
                        <Button size="lg" variant="outline">
                          See it in action
                        </Button>
                      </Link>
                    </div>

                    {/* Related Features */}
                    {index !== features.length - 1 && (
                      <div className="mt-8 pt-8 border-t border-gray-200">
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                          Explore next
                        </h4>
                        <div className="flex items-center justify-between">
                          <button
                            onClick={() => {
                              const currentIndex = features.findIndex(
                                (f) => f.id === activeFeature
                              );
                              const nextIndex = (currentIndex + 1) % features.length;
                              setActiveFeature(features[nextIndex].id);
                            }}
                            className="text-primary-600 hover:text-primary-700 font-medium flex items-center group"
                          >
                            {
                              features[
                                (features.findIndex((f) => f.id === activeFeature) + 1) %
                                  features.length
                              ].title
                            }
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" />
                          </button>
                          <span className="text-sm text-gray-400">
                            {features.findIndex((f) => f.id === activeFeature) + 1} /{' '}
                            {features.length}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">Ready to see all features in action?</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to={ROUTES.DEMO.INDEX}>
              <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Schedule a demo
              </Button>
            </Link>
            <Link to={ROUTES.PLATFORM.FEATURES}>
              <Button size="lg" variant="outline">
                View all features
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Additional styled components if needed
export const FeatureCardSkeleton: React.FC = () => (
  <Card className="animate-pulse">
    <div className="flex items-start space-x-4">
      <div className="w-14 h-14 bg-gray-200 rounded-xl" />
      <div className="flex-1 space-y-3">
        <div className="h-5 bg-gray-200 rounded w-1/3" />
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-2/3" />
      </div>
    </div>
  </Card>
);
