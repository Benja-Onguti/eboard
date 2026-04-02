import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
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
  ChevronRight,
  Zap,
  Lock,
  FileSearch,
  MessageSquare,
  Vote,
  BarChart,
  Play,
  AlertCircle,
  Award,
  Layers,
  Share2,
  Database,
  Cloud,
  Smartphone,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs';
import { ROUTES } from '@/config/routes';

// Feature data structure
interface FeatureDetail {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  icon: React.ElementType;
  image: string;
  video?: string;
  benefits: {
    title: string;
    description: string;
    icon: React.ElementType;
  }[];
  features: {
    title: string;
    description: string;
    icon?: React.ElementType;
  }[];
  useCases: {
    title: string;
    description: string;
    industry: string;
  }[];
  stats: {
    value: string;
    label: string;
    icon?: React.ElementType;
  }[];
  integrations: string[];
  security: {
    encryption: string;
    compliance: string[];
    certifications: string[];
  };
  faq: {
    question: string;
    answer: string;
  }[];
  relatedFeatures: {
    id: string;
    name: string;
    icon: React.ElementType;
    description: string;
  }[];
  demoVideo?: string;
  caseStudy?: {
    title: string;
    quote: string;
    author: string;
    role: string;
    company: string;
    link: string;
  };
  pricing?: {
    included: boolean;
    plan?: string;
  };
}

// Mock data for all features
const featureDetails: Record<string, FeatureDetail> = {
  'meeting-management': {
    id: 'meeting-management',
    name: 'Meeting Management',
    tagline: 'Streamline your entire meeting workflow',
    description:
      'From scheduling to minutes, manage every aspect of your board meetings in one secure platform.',
    longDescription:
      'Meeting Management transforms how boards prepare for, conduct, and follow up on meetings. With AI-powered scheduling, collaborative agenda building, automated board pack assembly, and intelligent minute-taking, you can reduce meeting preparation time by up to 70% while improving engagement and decision quality.',
    icon: Calendar,
    image: '/images/features/meeting-management-detail.jpg',
    video: '/videos/meeting-management-demo.mp4',
    benefits: [
      {
        title: 'AI-Powered Scheduling',
        description:
          'Automatically find the perfect meeting time across time zones with smart scheduling that learns member preferences.',
        icon: Zap,
      },
      {
        title: 'Collaborative Agendas',
        description:
          'Build agendas together with drag-and-drop simplicity, real-time comments, and version tracking.',
        icon: Layers,
      },
      {
        title: 'Automated Board Packs',
        description:
          'One-click assembly of board packs with automatic document compilation and distribution.',
        icon: Database,
      },
      {
        title: 'Intelligent Minutes',
        description:
          'AI-generated minutes that capture decisions, actions, and key discussion points in real-time.',
        icon: Brain,
      },
    ],
    features: [
      {
        title: 'Smart Scheduling',
        description:
          'AI-powered scheduling that finds the perfect time for all members across time zones, with calendar integration (Google, Outlook, iCal).',
        icon: Clock,
      },
      {
        title: 'Agenda Builder',
        description:
          'Drag-and-drop interface for building comprehensive agendas with time allocations, attachments, and presenter assignments.',
        icon: FileText,
      },
      {
        title: 'Board Pack Assembly',
        description:
          'Automatically compile documents, reports, and presentations into a single board book with automatic pagination and bookmarking.',
        icon: Layers,
      },
      {
        title: 'Real-time Collaboration',
        description:
          'Live document editing, annotations, and discussions during meetings with threaded comments and @mentions.',
        icon: MessageSquare,
      },
      {
        title: 'Minutes Generation',
        description:
          'AI-powered minutes that capture decisions, action items, and key discussion points with speaker attribution.',
        icon: Brain,
      },
      {
        title: 'Action Tracking',
        description:
          'Automated action item tracking with assignment, due dates, and progress monitoring.',
        icon: CheckCircle,
      },
      {
        title: 'Meeting Analytics',
        description:
          'Insights into meeting effectiveness, attendance patterns, and decision velocity.',
        icon: BarChart,
      },
      {
        title: 'Mobile Access',
        description: 'Full meeting functionality on iOS and Android devices with offline access.',
        icon: Smartphone,
      },
    ],
    useCases: [
      {
        title: 'Board of Directors Meetings',
        description:
          'Streamline quarterly board meetings with automated board packs and real-time collaboration.',
        industry: 'Corporate',
      },
      {
        title: 'Committee Meetings',
        description:
          'Manage sub-committee meetings with focused agendas and targeted document sharing.',
        industry: 'All Industries',
      },
      {
        title: 'Annual General Meetings',
        description:
          'Handle large-scale meetings with voting, presentations, and attendee management.',
        industry: 'All Industries',
      },
      {
        title: 'Emergency Board Meetings',
        description:
          'Quickly convene urgent meetings with instant notifications and rapid document assembly.',
        industry: 'All Industries',
      },
    ],
    stats: [
      {
        value: '70%',
        label: 'Faster meeting prep',
        icon: Zap,
      },
      {
        value: '45%',
        label: 'Higher engagement',
        icon: Users,
      },
      {
        value: '100%',
        label: 'Audit-ready records',
        icon: Award,
      },
      {
        value: '50K+',
        label: 'Meetings hosted',
        icon: Calendar,
      },
    ],
    integrations: ['Google Calendar', 'Microsoft Outlook', 'Zoom', 'Microsoft Teams', 'Dropbox'],
    security: {
      encryption: 'AES-256 encryption for all data at rest and in transit',
      compliance: ['SOC 2 Type II', 'ISO 27001', 'GDPR', 'HIPAA (available)'],
      certifications: [
        'Enterprise-grade security',
        'Role-based access control',
        'Complete audit trails',
        'Single sign-on (SSO)',
      ],
    },
    faq: [
      {
        question: 'How long does it take to set up my first meeting?',
        answer:
          'Most users can schedule and prepare their first meeting within 15 minutes. Our intuitive interface requires no training, and we provide guided onboarding to help you get started quickly.',
      },
      {
        question: 'Can board members access meeting materials offline?',
        answer:
          'Yes, all meeting materials can be downloaded for offline access. The mobile app automatically syncs when connectivity is restored.',
      },
      {
        question: 'How are meeting minutes secured?',
        answer:
          'Meeting minutes are encrypted with AES-256 and stored with complete version history. Access is controlled by role-based permissions, and all views and edits are logged in the audit trail.',
      },
      {
        question: 'Can I integrate with my existing calendar?',
        answer:
          'Yes, EBoard integrates seamlessly with Google Calendar, Microsoft Outlook, and iCal. Meeting invitations and reminders sync automatically.',
      },
    ],
    relatedFeatures: [
      {
        id: 'document-security',
        name: 'Document Security',
        icon: Shield,
        description: 'Enterprise-grade encryption and compliance',
      },
      {
        id: 'ai-minutes',
        name: 'AI Minutes',
        icon: Brain,
        description: 'Automated minute-taking with AI',
      },
      {
        id: 'voting',
        name: 'Voting & Approvals',
        icon: Vote,
        description: 'Secure electronic voting',
      },
    ],
    caseStudy: {
      title: 'Lincoln School District',
      quote:
        'EBoard reduced our board meeting prep time from two weeks to two days. Our members actually enjoy using the platform.',
      author: 'Dr. Sarah Chen',
      role: 'Board Chair',
      company: 'Lincoln School District',
      link: '/case-studies/lincoln-school-district',
    },
    pricing: {
      included: true,
      plan: 'All plans include Meeting Management',
    },
  },
  'document-security': {
    id: 'document-security',
    name: 'Document Security',
    tagline: 'Bank-level security for sensitive board materials',
    description:
      'Protect your board documents with military-grade encryption, granular access controls, and complete audit trails.',
    longDescription:
      'Document Security provides enterprise-grade protection for all your board materials. With AES-256 encryption, role-based access control, and comprehensive audit logging, you can ensure that sensitive information remains confidential while maintaining compliance with regulations like GDPR, HIPAA, and SOX.',
    icon: Shield,
    image: '/images/features/security-detail.jpg',
    benefits: [
      {
        title: 'AES-256 Encryption',
        description: 'Military-grade encryption for all documents at rest and in transit.',
        icon: Lock,
      },
      {
        title: 'Granular Access Control',
        description: 'Role-based permissions with folder and document-level controls.',
        icon: Users,
      },
      {
        title: 'Complete Audit Trails',
        description: 'Every view, edit, and share is logged with timestamp and user information.',
        icon: FileSearch,
      },
      {
        title: 'Compliance Ready',
        description: 'ISO 27001, SOC 2, GDPR, and HIPAA compliant infrastructure.',
        icon: Award,
      },
    ],
    features: [
      {
        title: 'End-to-End Encryption',
        description:
          'AES-256 encryption for all data at rest and in transit, with secure key management.',
        icon: Lock,
      },
      {
        title: 'Role-Based Access',
        description: 'Granular permissions at folder, document, and even page level.',
        icon: Users,
      },
      {
        title: 'Audit Logging',
        description: 'Complete visibility into who accessed what, when, and from where.',
        icon: FileSearch,
      },
      {
        title: 'Watermarking',
        description: 'Dynamic watermarks with user information to prevent unauthorized sharing.',
        icon: Share2,
      },
      {
        title: 'DRM Protection',
        description: 'Prevent downloading, printing, or forwarding of sensitive documents.',
        icon: Shield,
      },
      {
        title: 'Auto-Redaction',
        description: 'Automatically redact sensitive information for FOI requests.',
        icon: AlertCircle,
      },
    ],
    useCases: [
      {
        title: 'Confidential Board Materials',
        description:
          'Protect sensitive financial reports, strategic plans, and executive communications.',
        industry: 'All Industries',
      },
      {
        title: 'M&A Due Diligence',
        description: 'Secure document rooms for merger and acquisition activities.',
        industry: 'Corporate',
      },
      {
        title: 'FOI Compliance',
        description: 'Automatically manage public records requests with redaction tools.',
        industry: 'Government',
      },
      {
        title: 'Regulatory Compliance',
        description: 'Maintain audit-ready records for regulatory inspections.',
        industry: 'Financial, Healthcare',
      },
    ],
    stats: [
      {
        value: '99.9%',
        label: 'Uptime SLA',
        icon: Cloud,
      },
      {
        value: '100%',
        label: 'Compliance rate',
        icon: Award,
      },
      {
        value: '0',
        label: 'Security breaches',
        icon: Shield,
      },
      {
        value: '10+',
        label: 'Certifications',
        icon: CheckCircle,
      },
    ],
    integrations: [
      'Microsoft Information Protection',
      'Google DLP',
      'Box Shield',
      'Dropbox Business',
      'SharePoint',
      'Okta',
      'Microsoft Azure AD',
      'OneLogin',
    ],
    security: {
      encryption: 'AES-256 encryption with HSM key management',
      compliance: ['ISO 27001', 'SOC 2 Type II', 'GDPR', 'HIPAA', 'FedRAMP (available)'],
      certifications: ['ISO 27001 Certified', 'SOC 2 Type II', 'GDPR Compliant', 'HIPAA Eligible'],
    },
    faq: [
      {
        question: 'What encryption standards do you use?',
        answer:
          'We use AES-256 encryption for all data at rest and TLS 1.3 for data in transit. Encryption keys are managed in hardware security modules (HSM).',
      },
      {
        question: 'Can I control who sees specific documents?',
        answer:
          'Yes, you can set permissions at the folder, document, and even page level. You can also set expiration dates for access and require additional authentication for sensitive documents.',
      },
      {
        question: 'Do you have compliance certifications?',
        answer:
          'Yes, we are ISO 27001 certified, SOC 2 Type II compliant, and GDPR ready. We also offer HIPAA compliance for healthcare organizations and FedRAMP for government agencies.',
      },
      {
        question: 'How long are audit logs retained?',
        answer:
          'Audit logs are retained for 7 years (or longer for enterprise customers) and are tamper-proof to ensure compliance with regulatory requirements.',
      },
    ],
    relatedFeatures: [
      {
        id: 'meeting-management',
        name: 'Meeting Management',
        icon: Calendar,
        description: 'Streamline your entire meeting workflow',
      },
      {
        id: 'e-signatures',
        name: 'E-Signatures',
        icon: PenTool,
        description: 'Legally binding digital signatures',
      },
      {
        id: 'public-sites',
        name: 'Public Sites',
        icon: Globe,
        description: 'Transparent public meeting portals',
      },
    ],
    pricing: {
      included: false,
      plan: 'Included in all plans',
    },
  },
  'ai-minutes': {
    id: 'ai-minutes',
    name: 'AI-Powered Minutes',
    tagline: 'Never miss a moment with AI assistance',
    description:
      'Let artificial intelligence capture decisions, actions, and key discussion points automatically.',
    longDescription:
      'AI Minutes revolutionizes meeting documentation by automatically capturing, transcribing, and summarizing your board meetings. With real-time transcription, speaker identification, and intelligent extraction of decisions and action items, you can focus on the discussion while we handle the documentation.',
    icon: Brain,
    image: '/images/features/ai-minutes-detail.jpg',
    video: '/videos/ai-minutes-demo.mp4',
    benefits: [
      {
        title: 'Real-time Transcription',
        description: 'Live transcription with speaker identification and timestamping.',
        icon: FileText,
      },
      {
        title: 'Smart Summaries',
        description: 'AI-generated summaries of key discussion points and decisions.',
        icon: Zap,
      },
      {
        title: 'Action Item Extraction',
        description: 'Automatic identification and tracking of action items.',
        icon: CheckCircle,
      },
      {
        title: 'Searchable Archive',
        description: 'Full-text search across all meeting transcripts and minutes.',
        icon: FileSearch,
      },
    ],
    features: [
      {
        title: 'Live Transcription',
        description: 'Real-time transcription with 95%+ accuracy and speaker identification.',
        icon: FileText,
      },
      {
        title: 'Smart Summaries',
        description: 'AI-generated executive summaries of key decisions and discussions.',
        icon: Brain,
      },
      {
        title: 'Action Tracking',
        description: 'Automatic extraction and assignment of action items with due dates.',
        icon: CheckCircle,
      },
      {
        title: 'Decision Log',
        description: 'Centralized log of all board decisions with context and voting results.',
        icon: Vote,
      },
      {
        title: 'Searchable Archive',
        description:
          'Full-text search across all meetings with filters by date, topic, or participant.',
        icon: FileSearch,
      },
      {
        title: 'Multi-language Support',
        description: 'Transcription and translation in over 30 languages.',
        icon: Globe,
      },
    ],
    useCases: [
      {
        title: 'Board Meetings',
        description: 'Automatically capture formal board meetings with accurate minutes.',
        industry: 'All Industries',
      },
      {
        title: 'Committee Meetings',
        description: 'Track sub-committee discussions and recommendations.',
        industry: 'All Industries',
      },
      {
        title: 'Annual General Meetings',
        description: 'Document AGM proceedings with speaker attribution.',
        industry: 'Corporate',
      },
      {
        title: 'Public Hearings',
        description: 'Maintain accurate records of public testimony and discussions.',
        industry: 'Government',
      },
    ],
    stats: [
      {
        value: '95%',
        label: 'Transcription accuracy',
        icon: Brain,
      },
      {
        value: '5min',
        label: 'Average setup time',
        icon: Clock,
      },
      {
        value: '30+',
        label: 'Languages supported',
        icon: Globe,
      },
      {
        value: '50K+',
        label: 'Minutes generated',
        icon: FileText,
      },
    ],
    integrations: ['Zoom', 'Microsoft Teams', 'Google Meet', 'Webex'],
    security: {
      encryption: 'End-to-end encryption for all audio and transcripts',
      compliance: ['GDPR compliant', 'HIPAA compliant', 'Data residency options'],
      certifications: ['ISO 27001', 'SOC 2 Type II', 'GDPR'],
    },
    faq: [
      {
        question: 'How accurate is the transcription?',
        answer:
          "Our AI achieves over 95% accuracy in ideal conditions, with speaker identification and punctuation. Accuracy improves over time as the system learns your board's terminology and speaker patterns.",
      },
      {
        question: 'Can I edit the AI-generated minutes?',
        answer:
          'Yes, you can review and edit all AI-generated content before finalizing. The system tracks all edits for transparency.',
      },
      {
        question: 'Does it work with virtual meetings?',
        answer:
          'Yes, AI Minutes integrates seamlessly with Zoom, Teams, Google Meet, and other virtual meeting platforms. It captures both in-person and virtual discussions.',
      },
      {
        question: 'How are recordings stored?',
        answer:
          'Meeting recordings are encrypted and stored securely. You can set retention policies and control who has access to recordings.',
      },
    ],
    relatedFeatures: [
      {
        id: 'meeting-management',
        name: 'Meeting Management',
        icon: Calendar,
        description: 'Streamline your entire meeting workflow',
      },
      {
        id: 'voting',
        name: 'Voting & Approvals',
        icon: Vote,
        description: 'Secure electronic voting',
      },
      {
        id: 'document-security',
        name: 'Document Security',
        icon: Shield,
        description: 'Enterprise-grade protection',
      },
    ],
    caseStudy: {
      title: 'Torres Industries',
      quote:
        'AI Minutes saves our executive team at least 10 hours per month. The accuracy is remarkable, and the action item tracking ensures nothing falls through the cracks.',
      author: 'Michael Torres',
      role: 'Corporate Secretary',
      company: 'Torres Industries',
      link: '/case-studies/torres-industries',
    },
    pricing: {
      included: true,
      plan: 'Professional and Enterprise plans',
    },
  },
};

export const FeatureDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [showVideo, setShowVideo] = useState(false);

  const feature = id ? featureDetails[id] : null;

  useEffect(() => {
    if (!feature) {
      // Redirect to features page if feature not found
      navigate(ROUTES.PLATFORM.FEATURES);
    }
  }, [feature, navigate]);

  if (!feature) {
    return null;
  }

  const Icon = feature.icon;

  return (
    <>
      <Helmet>
        <title>{feature.name} - EBoard Solutions</title>
        <meta name="description" content={feature.description} />
        <meta property="og:title" content={`${feature.name} - EBoard Solutions`} />
        <meta property="og:description" content={feature.description} />
        <meta property="og:image" content={feature.image} />
      </Helmet>

      {/* Breadcrumb Navigation */}
      <nav className="bg-gray-50 border-b border-gray-200 py-3">
        <div className="container-custom">
          <div className="flex items-center text-sm">
            <Link to={ROUTES.HOME} className="text-gray-500 hover:text-primary-600">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
            <Link to={ROUTES.PLATFORM.FEATURES} className="text-gray-500 hover:text-primary-600">
              Features
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
            <span className="text-gray-900 font-medium">{feature.name}</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-12 pb-16 bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center text-white mr-4">
                  <Icon className="w-8 h-8" />
                </div>
                <div>
                  <Badge variant="primary" className="mb-2">
                    Feature
                  </Badge>
                  <h1 className="text-4xl font-bold text-gray-900">{feature.name}</h1>
                </div>
              </div>

              <p className="text-2xl text-primary-600 font-medium mb-4">{feature.tagline}</p>

              <p className="text-lg text-gray-600 mb-8">{feature.longDescription}</p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link to={ROUTES.DEMO.INDEX}>
                  <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                    See it in action
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  leftIcon={<Play className="w-5 h-5" />}
                  onClick={() => setShowVideo(true)}
                >
                  Watch demo
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {feature.stats.map((stat, index) => {
                  const StatIcon = stat.icon || Award;
                  return (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-primary-600">{stat.value}</div>
                      <div className="text-xs text-gray-500 flex items-center justify-center">
                        <StatIcon className="w-3 h-3 mr-1" />
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div
                className="relative rounded-2xl shadow-2xl overflow-hidden group cursor-pointer"
                onClick={() => setShowVideo(true)}
              >
                <img src={feature.image} alt={feature.name} className="w-full" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-primary-600 ml-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideo && feature.video && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 text-white hover:text-primary-400"
            >
              Close ✕
            </button>
            <video src={feature.video} controls autoPlay className="w-full rounded-2xl" />
          </div>
        </div>
      )}

      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {feature.benefits.map((benefit, index) => {
              const BenefitIcon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mb-4">
                    <BenefitIcon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <Tabs
            defaultValue="overview"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-4 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="use-cases">Use Cases</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="mt-8">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    How {feature.name} works
                  </h3>
                  <p className="text-gray-600 mb-6">{feature.longDescription}</p>

                  <div className="space-y-4">
                    {feature.features.slice(0, 4).map((feat, index) => {
                      const FeatIcon = feat.icon || CheckCircle;
                      return (
                        <div key={index} className="flex items-start">
                          <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mr-3 flex-shrink-0">
                            <FeatIcon className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{feat.title}</h4>
                            <p className="text-gray-600">{feat.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div>
                  {/* Case Study */}
                  {feature.caseStudy && (
                    <Card className="bg-primary-50 border-primary-100 mb-6">
                      <div className="flex items-center mb-4">
                        <Award className="w-5 h-5 text-primary-600 mr-2" />
                        <h4 className="font-semibold text-gray-900">Customer Story</h4>
                      </div>
                      <blockquote className="text-gray-700 mb-4">
                        "{feature.caseStudy.quote}"
                      </blockquote>
                      <div className="mb-4">
                        <p className="font-semibold text-gray-900">{feature.caseStudy.author}</p>
                        <p className="text-sm text-gray-500">
                          {feature.caseStudy.role}, {feature.caseStudy.company}
                        </p>
                      </div>
                      <Link
                        to={feature.caseStudy.link}
                        className="text-primary-600 font-medium hover:underline"
                      >
                        Read full story →
                      </Link>
                    </Card>
                  )}

                  {/* Integrations */}
                  <Card>
                    <h4 className="font-semibold text-gray-900 mb-3">Integrations</h4>
                    <div className="flex flex-wrap gap-2">
                      {feature.integrations.slice(0, 6).map((integration, index) => (
                        <Badge key={index} variant="secondary" size="sm">
                          {integration}
                        </Badge>
                      ))}
                      {feature.integrations.length > 6 && (
                        <Badge variant="secondary" size="sm">
                          +{feature.integrations.length - 6} more
                        </Badge>
                      )}
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Features Tab */}
            <TabsContent value="features" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {feature.features.map((feat, index) => {
                  const FeatIcon = feat.icon || CheckCircle;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Card className="h-full">
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mr-2">
                            <FeatIcon className="w-4 h-4" />
                          </div>
                          <h4 className="font-semibold text-gray-900">{feat.title}</h4>
                        </div>
                        <p className="text-sm text-gray-600">{feat.description}</p>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </TabsContent>

            {/* Use Cases Tab */}
            <TabsContent value="use-cases" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                {feature.useCases.map((useCase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full">
                      <Badge variant="primary" size="sm" className="mb-3">
                        {useCase.industry}
                      </Badge>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{useCase.title}</h4>
                      <p className="text-gray-600">{useCase.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* FAQ Tab */}
            <TabsContent value="faq" className="mt-8">
              <div className="max-w-3xl mx-auto">
                {feature.faq.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="mb-4"
                  >
                    <Card>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.question}</h4>
                      <p className="text-gray-600">{item.answer}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Security & Compliance</h3>
              <p className="text-gray-600 mb-6">{feature.security.encryption}</p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Compliance</h4>
                  <div className="flex flex-wrap gap-2">
                    {feature.security.compliance.map((item, index) => (
                      <Badge key={index} variant="success" size="sm">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Certifications</h4>
                  <div className="flex flex-wrap gap-2">
                    {feature.security.certifications.map((item, index) => (
                      <Badge key={index} variant="primary" size="sm">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to get started?</h3>
              <p className="text-gray-600 mb-6">
                {feature.pricing?.included
                  ? `${feature.name} is included in ${feature.pricing.plan}. Start your free trial today.`
                  : 'Contact us for pricing information.'}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to={ROUTES.DEMO.INDEX}>
                  <Button size="lg">Start Free Trial</Button>
                </Link>
                <Link to={ROUTES.COMPANY.CONTACT}>
                  <Button size="lg" variant="outline">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Features */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Explore related features
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {feature.relatedFeatures.map((related, index) => {
              const RelatedIcon = related.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={`/features/${related.id}`}>
                    <Card variant="elevated" className="h-full group hover:border-primary-200">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mr-3">
                          <RelatedIcon className="w-5 h-5" />
                        </div>
                        <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 transition">
                          {related.name}
                        </h4>
                      </div>
                      <p className="text-sm text-gray-600">{related.description}</p>
                      <ArrowRight className="w-4 h-4 mt-4 text-primary-600 opacity-0 group-hover:opacity-100 transition" />
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to transform your board meetings?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            See how {feature.name} can help your organization govern more effectively.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to={ROUTES.DEMO.INDEX}>
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary-600 hover:bg-gray-100"
              >
                Schedule a Demo
              </Button>
            </Link>
            <Link to={ROUTES.COMPANY.CONTACT}>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
