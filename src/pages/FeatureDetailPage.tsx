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
  Zap,
  Lock,
  Eye,
  Mail,
  FileSearch,
  Vote,
  BarChart,
  Award,
  Layers,
  Database,
  Cloud,
  Mic,
  Volume2,
  Layout,
  Video,
  Fingerprint,
  Activity,
  Key,
  Plug,
  Headphones,
  FileCheck,
  Copy,
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
  integrationCards?: {
    title: string;
    description: string;
    icon: string;
    technical: string;
  }[];
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

// Complete feature details for all features
const featureDetails: Record<string, FeatureDetail> = {
  // AI Capabilities Feature
  'ai-capabilities': {
    id: 'ai-capabilities',
    name: 'AI Capabilities',
    tagline: 'Powered by Google Gemini and Google Cloud',
    description:
      'Leverage cutting-edge AI to transform how your board works. From transcription to summarization, our AI capabilities save time and improve accuracy.',
    longDescription:
      "EBoard's AI capabilities are powered by Google Gemini and Google Cloud, bringing enterprise-grade artificial intelligence to your board governance. From real-time speech transcription to intelligent document summarization, our AI tools help you work smarter, not harder.",
    icon: Brain,
    image: '/images/features/aii.jpg',
    benefits: [
      {
        title: 'Speech to Text',
        description: 'Transcribe meetings, minutes, and dictation in real-time with high accuracy.',
        icon: Mic,
      },
      {
        title: 'Text to Speech',
        description: 'Listen to documents on the go with natural-sounding voice synthesis.',
        icon: Volume2,
      },
      {
        title: 'AI Summarisation',
        description: 'Get concise summaries of board packs, even for 100+ page reports.',
        icon: Brain,
      },
      {
        title: 'Powered by Google Gemini',
        description: 'Enterprise-grade AI technology trusted by millions worldwide.',
        icon: Cloud,
      },
    ],
    features: [
      {
        title: 'Speech to Text',
        description:
          'Real-time transcription of meetings with speaker identification and punctuation.',
        icon: Mic,
      },
      {
        title: 'Text to Speech',
        description: 'Natural voice synthesis for document playback, perfect for accessibility.',
        icon: Volume2,
      },
      {
        title: 'AI Summarisation',
        description: 'Smart summarization of board packs, agendas, and meeting minutes.',
        icon: Brain,
      },
      {
        title: 'Multi-language Support',
        description: 'Transcription and translation in over 30 languages.',
        icon: Globe,
      },
      {
        title: 'Google Cloud Integration',
        description: 'Seamless integration with Google Cloud services for enhanced capabilities.',
        icon: Cloud,
      },
    ],
    useCases: [
      {
        title: 'Board Meeting Transcription',
        description: 'Automatically transcribe and summarize board discussions.',
        industry: 'All Industries',
      },
      {
        title: 'Accessibility Support',
        description: 'Text-to-speech for visually impaired board members.',
        industry: 'All Industries',
      },
      {
        title: 'Document Review',
        description: 'Quickly understand 100+ page board packs with AI summaries.',
        industry: 'All Industries',
      },
    ],
    stats: [
      { value: '95%', label: 'Transcription accuracy', icon: Brain },
      { value: '30+', label: 'Languages supported', icon: Globe },
      { value: '5min', label: 'Setup time', icon: Clock },
      { value: 'Google', label: 'Powered by', icon: Cloud },
    ],
    integrations: ['Google Cloud', 'Google Gemini', 'Zoom', 'Microsoft Teams'],
    security: {
      encryption: 'End-to-end encryption for all AI processed data',
      compliance: ['GDPR compliant', 'HIPAA compliant', 'SOC 2 Type II'],
      certifications: ['ISO 27001', 'Google Cloud Certified'],
    },
    faq: [
      {
        question: 'How accurate is the speech-to-text transcription?',
        answer:
          "Our AI achieves over 95% accuracy in ideal conditions, with continuous improvement as the system learns your board's terminology and speaker patterns.",
      },
      {
        question: 'Can I use AI summarisation for any document?',
        answer:
          'Yes, AI summarisation works on board packs, agendas, reports, and meeting minutes. It can handle documents of any length, including 100+ page reports.',
      },
      {
        question: 'Is the AI powered by Google Gemini?',
        answer:
          'Yes, all AI capabilities are powered by Google Gemini and Google Cloud, ensuring enterprise-grade reliability and accuracy.',
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
        id: 'document-features',
        name: 'Document Features',
        icon: FileText,
        description: 'Complete document management solution',
      },
    ],
    pricing: { included: true, plan: 'Professional and Enterprise plans' },
  },

  // Meeting & Agenda Management Feature
  'meeting-management': {
    id: 'meeting-management',
    name: 'Meeting & Agenda Management',
    tagline: 'Streamline your entire meeting workflow',
    description: 'From scheduling to minutes, automate every aspect of your board meetings.',
    longDescription:
      'Meeting Management transforms how boards prepare for, conduct, and follow up on meetings. With powerful agenda building, minute tracking, and video conferencing integration, you can reduce meeting preparation time while improving engagement.',
    icon: Calendar,
    image: '/images/features/meeting1.jpg',
    benefits: [
      {
        title: 'Agenda Builder',
        description:
          'Drag-and-drop tool for creating and publishing agendas with time allocations.',
        icon: Layout,
      },
      {
        title: 'Minute Builder',
        description: 'Records decisions, actions, and discussions in real-time.',
        icon: PenTool,
      },
      {
        title: 'Meeting Scheduling',
        description: 'Powerful scheduling tools with governance oversight.',
        icon: Calendar,
      },
      {
        title: 'Video Conferencing',
        description: 'Seamless integration with Zoom & Microsoft Teams.',
        icon: Video,
      },
    ],
    features: [
      {
        title: 'Agenda Builder',
        description:
          'Drag-and-drop interface for building comprehensive agendas with time allocations.',
        icon: Layout,
      },
      {
        title: 'Minute Builder',
        description: 'Real-time minute taking with decision and action tracking.',
        icon: PenTool,
      },
      {
        title: 'Meeting Scheduling',
        description: 'Smart scheduling with calendar integration and governance controls.',
        icon: Calendar,
      },
      {
        title: 'Video Conferencing',
        description:
          'Native integration with Zoom and Microsoft Teams for seamless virtual meetings.',
        icon: Video,
      },
      {
        title: 'Pre-meeting Metrics',
        description: 'Track preparation metrics and readiness indicators.',
        icon: BarChart,
      },
      {
        title: 'Action Tracking',
        description: 'Automated action item tracking with assignment and due dates.',
        icon: CheckCircle,
      },
    ],
    useCases: [
      {
        title: 'Board Meetings',
        description: 'Streamline quarterly board meetings with automated tools.',
        industry: 'Corporate',
      },
      {
        title: 'Committee Meetings',
        description: 'Manage sub-committee meetings efficiently.',
        industry: 'All Industries',
      },
      {
        title: 'Annual General Meetings',
        description: 'Handle large-scale meetings with ease.',
        industry: 'All Industries',
      },
    ],
    stats: [
      { value: '70%', label: 'Faster meeting prep', icon: Zap },
      { value: '45%', label: 'Higher engagement', icon: Users },
      { value: '50K+', label: 'Meetings hosted', icon: Calendar },
    ],
    integrations: ['Google Calendar', 'Microsoft Outlook', 'Zoom', 'Microsoft Teams'],
    security: {
      encryption: 'AES-256 encryption for all meeting data',
      compliance: ['SOC 2 Type II', 'ISO 27001', 'GDPR'],
      certifications: ['Enterprise-grade security', 'Complete audit trails'],
    },
    faq: [
      {
        question: 'How long does it take to set up my first meeting?',
        answer: 'Most users can schedule and prepare their first meeting within 15 minutes.',
      },
      {
        question: 'Can I integrate with my existing calendar?',
        answer:
          'Yes, EBoard integrates seamlessly with Google Calendar, Microsoft Outlook, and iCal.',
      },
    ],
    relatedFeatures: [
      {
        id: 'ai-capabilities',
        name: 'AI Capabilities',
        icon: Brain,
        description: 'AI-powered features',
      },
      {
        id: 'committee-management',
        name: 'Committee Management',
        icon: Users,
        description: 'Manage committees',
      },
    ],
    pricing: { included: true, plan: 'All plans include Meeting Management' },
  },

  // Committee Management Feature
  'committee-management': {
    id: 'committee-management',
    name: 'Committee Management',
    tagline: 'Organize and manage all your committees',
    description: 'Efficiently manage unlimited committees with dedicated spaces for each group.',
    longDescription:
      'Committee Management provides dedicated workspaces for every committee, sub-committee, and working group. With unlimited committees, dedicated libraries, and membership tracking, you can organize governance at scale.',
    icon: Users,
    image: '/images/features/committee.png',
    benefits: [
      {
        title: 'Unlimited Committees',
        description: 'Create and manage as many committees as you need.',
        icon: Users,
      },
      {
        title: 'Committee Libraries',
        description: 'Dedicated document libraries per committee.',
        icon: Database,
      },
      {
        title: 'Membership Register',
        description: 'Track member history, roles, and terms.',
        icon: FileText,
      },
      { title: 'Cover Pages', description: 'Custom cover page per committee.', icon: Layout },
    ],
    features: [
      {
        title: 'Unlimited Committees',
        description: 'No limits on the number of committees you can create.',
        icon: Users,
      },
      {
        title: 'Dedicated Libraries',
        description: 'Each committee gets its own document library.',
        icon: Database,
      },
      {
        title: 'Membership Register',
        description: 'Complete history of committee members and their roles.',
        icon: FileText,
      },
      {
        title: 'Cover Pages',
        description: 'Customize the look and feel of each committee.',
        icon: Layout,
      },
      {
        title: 'Committee Analytics',
        description: 'Track committee activity and engagement.',
        icon: BarChart,
      },
    ],
    useCases: [
      {
        title: 'Board Committees',
        description: 'Manage audit, compensation, and governance committees.',
        industry: 'Corporate',
      },
      {
        title: 'Sub-committees',
        description: 'Create task forces and working groups.',
        industry: 'All Industries',
      },
    ],
    stats: [
      { value: 'Unlimited', label: 'Committees', icon: Users },
      { value: '100%', label: 'Visibility', icon: Eye },
    ],
    integrations: ['SharePoint', 'Microsoft Teams'],
    security: {
      encryption: 'Committee-level access controls',
      compliance: ['SOC 2 Type II', 'ISO 27001'],
      certifications: ['Role-based access', 'Audit trails'],
    },
    faq: [
      {
        question: 'Is there a limit to how many committees I can create?',
        answer: 'No, you can create unlimited committees, sub-committees, and working groups.',
      },
      {
        question: 'Can committee members have different access levels?',
        answer: 'Yes, you can set granular permissions for each committee and its members.',
      },
    ],
    relatedFeatures: [
      {
        id: 'meeting-management',
        name: 'Meeting Management',
        icon: Calendar,
        description: 'Run committee meetings',
      },
      {
        id: 'document-features',
        name: 'Document Features',
        icon: FileText,
        description: 'Manage committee documents',
      },
    ],
    pricing: { included: true, plan: 'All plans include Committee Management' },
  },

  // Document & Pack Features
  'document-features': {
    id: 'document-features',
    name: 'Document & Pack Features',
    tagline: 'Complete document management solution',
    description:
      'Manage all your board documents with powerful features including signing and surveys.',
    longDescription:
      'Document & Pack Features provide comprehensive document management for your board. From supporting all file types to document signing and survey creation, you have everything you need to manage board materials efficiently.',
    icon: FileText,
    image: '/images/features/docs.png',
    benefits: [
      {
        title: 'All File Types',
        description: 'Support for all common document formats.',
        icon: FileText,
      },
      {
        title: 'Document Signing',
        description: 'Legally binding digital signatures.',
        icon: PenTool,
      },
      { title: 'Forms & Surveys', description: 'Powered by Orbeon Forms.', icon: FileCheck },
      { title: 'Clone Agenda', description: 'Quickly duplicate any agenda.', icon: Copy },
    ],
    features: [
      {
        title: 'All File Types',
        description: 'PDF, Word, Excel, PowerPoint, images, and more.',
        icon: FileText,
      },
      {
        title: 'Document Signing',
        description: 'Legally binding e-signatures with audit trails.',
        icon: PenTool,
      },
      {
        title: 'Forms & Surveys',
        description: 'Create custom forms and surveys with Orbeon Forms.',
        icon: FileCheck,
      },
      { title: 'Clone Agenda', description: 'Save time by cloning existing agendas.', icon: Copy },
      {
        title: 'Votes & Resolutions',
        description: 'Track votes and resolutions within documents.',
        icon: Vote,
      },
      {
        title: 'Board Pack Assembly',
        description: 'One-click compilation of board packs.',
        icon: Layers,
      },
    ],
    useCases: [
      {
        title: 'Board Pack Creation',
        description: 'Assemble comprehensive board packs quickly.',
        industry: 'All Industries',
      },
      {
        title: 'Document Approval',
        description: 'Streamline document approval workflows.',
        industry: 'All Industries',
      },
    ],
    stats: [
      { value: '50+', label: 'File types', icon: FileText },
      { value: '100%', label: 'Compliant', icon: CheckCircle },
    ],
    integrations: ['Orbeon Forms', 'DocuSign', 'Adobe Sign', 'SharePoint'],
    security: {
      encryption: 'Document-level encryption',
      compliance: ['ESIGN', 'UETA', 'eIDAS'],
      certifications: ['Digital signature certified'],
    },
    faq: [
      {
        question: 'What file types are supported?',
        answer:
          'We support all major file types including PDF, Word, Excel, PowerPoint, images, and text files.',
      },
      {
        question: 'Are e-signatures legally binding?',
        answer: 'Yes, our e-signatures comply with ESIGN, UETA, and eIDAS regulations.',
      },
    ],
    relatedFeatures: [
      { id: 'security', name: 'Security', icon: Shield, description: 'Protect your documents' },
      {
        id: 'ai-capabilities',
        name: 'AI Capabilities',
        icon: Brain,
        description: 'Smart document processing',
      },
    ],
    pricing: { included: true, plan: 'All plans include Document Features' },
  },

  // Security Feature
  security: {
    id: 'security',
    name: 'Security',
    tagline: 'Military-grade protection for your data',
    description:
      'Protect your board documents with enterprise-grade security built on the Microsoft Enterprise Framework.',
    longDescription:
      'EBoard Security provides military-grade protection for all your board materials. Built on the Microsoft Enterprise Framework, our security infrastructure includes AES-256 encryption, two-factor authentication, activity tracking, and role-based access controls.',
    icon: Shield,
    image: '/images/features/security.png',
    benefits: [
      {
        title: 'Military-grade Encryption',
        description: 'Built on the Microsoft Enterprise Framework.',
        icon: Lock,
      },
      {
        title: 'Two-Factor Authentication',
        description: 'Enhanced security with 2FA.',
        icon: Fingerprint,
      },
      {
        title: 'Activity Tracking',
        description: 'Background audit logs for all actions.',
        icon: Activity,
      },
      { title: 'Role-based Access', description: 'Granular document permissions.', icon: Key },
    ],
    features: [
      {
        title: 'Military-grade Encryption',
        description: 'AES-256 encryption built on Microsoft Enterprise Framework.',
        icon: Lock,
      },
      {
        title: 'Two-Factor Authentication',
        description: 'SMS, email, or authenticator app verification.',
        icon: Fingerprint,
      },
      {
        title: 'Activity Tracking',
        description: 'Complete audit logs of all document activity.',
        icon: Activity,
      },
      {
        title: 'Role-based Access',
        description: 'Granular permissions at every level.',
        icon: Key,
      },
      {
        title: 'Audit Logs',
        description: '7-year retention of tamper-proof logs.',
        icon: FileSearch,
      },
      {
        title: 'Single Sign-On',
        description: 'SSO integration with major providers.',
        icon: Shield,
      },
    ],
    useCases: [
      {
        title: 'Compliance Management',
        description: 'Meet regulatory requirements.',
        industry: 'All Industries',
      },
      {
        title: 'Data Protection',
        description: 'Protect sensitive board materials.',
        industry: 'All Industries',
      },
    ],
    stats: [
      { value: 'AES-256', label: 'Encryption', icon: Lock },
      { value: '99.99%', label: 'Uptime SLA', icon: Cloud },
      { value: '0', label: 'Breaches', icon: Shield },
    ],
    integrations: ['Microsoft Azure AD', 'Okta', 'OneLogin', 'Ping Identity'],
    security: {
      encryption: 'AES-256 encryption with HSM key management',
      compliance: ['ISO 27001', 'SOC 2 Type II', 'GDPR', 'FedRAMP'],
      certifications: ['Microsoft Enterprise Framework', 'ISO 27001 Certified'],
    },
    faq: [
      {
        question: 'What encryption standards do you use?',
        answer:
          'We use AES-256 encryption built on the Microsoft Enterprise Framework, the same standard used by government agencies.',
      },
      {
        question: 'Do you offer SSO?',
        answer:
          'Yes, we support SSO with major providers including Microsoft Azure AD, Okta, and OneLogin.',
      },
    ],
    relatedFeatures: [
      {
        id: 'document-features',
        name: 'Document Features',
        icon: FileText,
        description: 'Secure document management',
      },
      {
        id: 'integrations-support',
        name: 'Integrations',
        icon: Plug,
        description: 'Secure integrations',
      },
    ],
    pricing: { included: true, plan: 'All plans include enterprise security' },
  },

  // Integrations & Support Feature
  'integrations-support': {
    id: 'integrations-support',
    name: 'Integrations & Support',
    tagline: 'Connect with your favorite tools',
    description:
      'Seamlessly integrate with your existing tools and get unlimited training and support.',
    longDescription:
      'EBoard integrates seamlessly with your existing technology stack, including SharePoint, Teams and Zoom,. Plus, every plan includes unlimited training and support to ensure your success.',
    icon: Plug,
    image: '/images/features/integration1.png',

    // --- New: Integration categories for a card-style layout ---
    integrationCards: [
      {
        title: 'Microsoft 365 & SharePoint',
        description:
          'Collaborate on documents, manage libraries, and sync calendars across your board. Access, edit, and share files from Microsoft Teams, SharePoint, and Outlook without leaving EBoard.',
        icon: 'Sharepoint',
        technical: 'Native API integration with full OAuth 2.0 support',
      },
      {
        title: 'Virtual Meetings',
        description:
          'Launch and join secure virtual meetings directly from your EBoard agenda—no links to manage, no apps to toggle. Integrated with Zoom and Microsoft Teams.',
        icon: 'Video',
        technical: 'Embedded video meeting widgets with auto-join capabilities',
      },
      {
        title: 'Docusign',
        description:
          'Manage contracts, disclosures, and other legal documents from creation to final signature—all in one place. Streamline approval workflows with legally binding e-signatures.',
        icon: 'DocuSign',
        technical: 'Bi-directional document sync with signature status tracking',
      },
      {
        title: 'Single Sign‑On (SSO)',
        description:
          'Connect EBoard to identity providers like Okta and OneLogin. Streamline logins and centralize access control while keeping board access secure and fully in sync with your organization’s existing authentication systems.',
        icon: 'Shield',
        technical: 'SAML 2.0 / OIDC support, SCIM provisioning',
      },
      {
        title: 'Task Management',
        description:
          'Integrate with Asana, Trello, Jira, and more. Sync action items from board meetings directly into your team’s project management workflows.',
        icon: 'CheckCircle',
        technical: 'Two-way webhook syncing',
      },
      {
        title: 'Unlimited Training & Support',
        description:
          'Every plan includes unlimited training for all board members and administrators. Our dedicated support team is available 24/7 to ensure your success.',
        icon: 'Headphones',
        technical: 'Onboarding, live webinars, and priority ticket routing',
      },
    ],

    // --- Legacy fields retained for backward compatibility ---
    benefits: [
      { title: 'SharePoint Integration', description: 'Seamless document sync.', icon: Plug },
      {
        title: 'Email & Calendar Sync',
        description: 'Connect with Outlook and Gmail.',
        icon: Calendar,
      },
      {
        title: 'Task Management',
        description: 'Integrate with your task tools.',
        icon: CheckCircle,
      },
      { title: 'Unlimited Training', description: 'Included in every plan.', icon: Headphones },
    ],
    features: [
      {
        title: 'SharePoint Integration',
        description: 'Sync documents and libraries with SharePoint.',
        icon: Plug,
      },
      {
        title: 'Email Integration',
        description: 'Connect with Outlook, Gmail, and other email providers.',
        icon: Mail,
      },
      {
        title: 'Calendar Sync',
        description: 'Two-way sync with Google Calendar and Outlook.',
        icon: Calendar,
      },
      {
        title: 'Task Management',
        description: 'Integrate with Asana, Trello, Jira, and more.',
        icon: CheckCircle,
      },
      {
        title: 'Unlimited Training',
        description: 'Onboarding and ongoing training included.',
        icon: Headphones,
      },
      {
        title: 'Flexible Hosting',
        description: 'Self-hosted or cloud-hosted options.',
        icon: Cloud,
      },
    ],
    useCases: [
      {
        title: 'Enterprise Integration',
        description: 'Connect with your existing enterprise tools.',
        industry: 'Enterprise',
      },
      {
        title: 'Team Collaboration',
        description: 'Sync with team communication tools.',
        industry: 'All Industries',
      },
    ],
    stats: [
      { value: '24/7', label: 'Support', icon: Headphones },
      { value: '50+', label: 'Integrations', icon: Plug },
      { value: 'Unlimited', label: 'Training', icon: Users },
    ],
    integrations: [
      'SharePoint',
      'Microsoft 365',
      'Google Workspace',
      'Slack',
      'Asana',
      'Trello',
      'Jira',
    ],
    security: {
      encryption: 'Secure API connections',
      compliance: ['SOC 2 Type II', 'ISO 27001'],
      certifications: ['Integration certified'],
    },
    faq: [
      {
        question: 'What integrations are available?',
        answer:
          'We integrate with SharePoint, Microsoft 365, Google Workspace, Slack, Asana, Trello, Jira, and more.',
      },
      {
        question: 'Is training really unlimited?',
        answer:
          'Yes, every plan includes unlimited training for all board members and administrators.',
      },
    ],
    relatedFeatures: [
      { id: 'security', name: 'Security', icon: Shield, description: 'Secure integrations' },
      {
        id: 'document-features',
        name: 'Document Features',
        icon: FileText,
        description: 'Document management',
      },
    ],
    pricing: { included: true, plan: 'All plans include integrations and support' },
  },
};

interface FeatureDetailPageProps {
  featureIdOverride?: string;
}

export const FeatureDetailPage: React.FC<FeatureDetailPageProps> = ({ featureIdOverride }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  // Map URL parameters to feature IDs
  const getFeatureId = (paramId: string): string => {
    const mapping: Record<string, string> = {
      'meeting-management': 'meeting-management',
      'committee-management': 'committee-management',
      'ai-minutes': 'ai-capabilities',
      'document-management': 'document-features',
      'document-security': 'security',
      'document-hub': 'document-features',
      'e-signatures': 'document-features',
      'public-sites': 'document-features',
      voting: 'document-features',
      analytics: 'meeting-management',
      integrations: 'integrations-support',
    };
    return mapping[paramId] || paramId;
  };

  const actualId = featureIdOverride ?? (id ? getFeatureId(id) : null);
  const feature = actualId ? featureDetails[actualId] : null;

  useEffect(() => {
    if (!feature) {
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
      {/*
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
      */}

      {/* Hero Section */}
      <section className="pb-12 bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center pt-5 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl flex items-center justify-center text-white mr-4 shadow-lg">
                  <Icon className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-4xl  font-bold text-gray-900">{feature.name}</h1>
                </div>
              </div>

              <p className="text-2xl text-primary-600 font-medium mb-4">{feature.tagline}</p>
              <p className="text-lg text-gray-600 mb-8">{feature.longDescription}</p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link to={ROUTES.DEMO.INDEX}>
                  <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                    Book Demo
                  </Button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {feature.stats.map((stat, index) => {
                  const StatIcon = stat.icon || Award;
                  return (
                    <div key={index} className="text-center p-3 bg-gray-50 rounded-xl">
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
            >
              <div className="relative rounded-2xl shadow-2xl overflow-hidden">
                <img src={feature.image} alt={feature.name} className="w-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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

                  <Card>
                    <h4 className="font-semibold text-gray-900 mb-3">Integrations</h4>
                    <div className="flex flex-wrap gap-2">
                      {feature.integrations.slice(0, 6).map((integration, index) => (
                        <Badge key={index} variant="secondary" size="sm">
                          {integration}
                        </Badge>
                      ))}
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
      <section className="py-12 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
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
                Book Demo
              </Button>
            </Link>
            <Link to={ROUTES.COMPANY.CONTACT}>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
