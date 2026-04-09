import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Shield,
  Brain,
  FileText,
  CheckCircle,
  ArrowRight,
  Users,
  Settings,
  Zap,
 Headphones, 
  Eye,
  MessageSquare,
  Clock,
  TrendingUp,
  Award,
  Sparkles,
  Mail,
  Video,
  HardDrive,
  Server,
  Key,
  BarChart3,
  Plug,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs';
import { ROUTES } from '@/config/routes';

// Feature categories
const featureCategories = [
  { id: 'all', label: 'All Features', icon: Zap },
  { id: 'ai', label: 'AI & Intelligence', icon: Brain },
  { id: 'meetings', label: 'Meetings & Agendas', icon: Calendar },
  { id: 'documents', label: 'Documents & Signatures', icon: FileText },
  { id: 'security', label: 'Security & Compliance', icon: Shield },
  { id: 'integrations', label: 'Integrations & Support', icon: Settings },
];

const features = [
  // AI & Intelligence Category
  {
    id: 'ai-capabilities',
    category: 'ai',
    icon: Brain,
    title: 'AI-Powered Governance',
    tagline: 'Powered by Google Gemini AI',
    description:
      'Transform your board meetings with cutting-edge AI capabilities that save time, improve accuracy, and enhance accessibility.',
    longDescription:
      'Leverage Google Gemini AI to automate meeting documentation, generate intelligent summaries, and make board materials accessible to all members. Our AI reduces manual work by up to 95% while improving accuracy and consistency.',
    benefits: [
      'Speech-to-text transcription with 95%+ accuracy',
      'AI-powered meeting summarization and key decision extraction',
      'Text-to-speech accessibility for board materials',
      'Automated action item detection and assignment',
      'Intelligent search across all meeting transcripts',
    ],
    features: [
      {
        name: 'Speech to Text',
        description: 'Real-time transcription with speaker identification',
      },
      {
        name: 'AI Summarization',
        description: 'Automatic extraction of decisions and action items',
      },
      { name: 'Text to Speech', description: 'Accessible board materials for all members' },
      { name: 'Smart Search', description: 'Find anything across all meetings instantly' },
    ],
    image: '/images/features/ai-capabilities.jpg',
    gradient: 'from-purple-600 to-pink-600',
    link: '/features/ai-capabilities',
    badge: 'New',
    stats: { value: '95%', label: 'Time saved on minutes', icon: Clock },
    enterprise: true,
  },
  {
    id: 'meeting-management',
    category: 'meetings',
    icon: Calendar,
    title: 'Meeting & Agenda Management',
    tagline: 'Streamline every meeting',
    description:
      'Automate every aspect of your board meetings from scheduling to minutes, with seamless video conferencing integration.',
    longDescription:
      'Say goodbye to manual meeting coordination. Our platform automates scheduling, agenda building, minute taking, and follow-up tracking, integrating seamlessly with Zoom and Microsoft Teams.',
    benefits: [
      'Drag-and-drop agenda builder with time allocations',
      'Automatic minute tracking and distribution',
      'Zoom & Microsoft Teams native integration',
      'One-click board pack assembly',
      'Automated meeting reminders and calendar sync',
    ],
    features: [
      { name: 'Agenda Builder', description: 'Collaborative agenda creation with version history' },
      { name: 'Minute Builder', description: 'AI-assisted minute taking with action tracking' },
      { name: 'Video Integration', description: 'Seamless Zoom and Teams integration' },
      { name: 'Board Packs', description: 'One-click compilation of all meeting materials' },
    ],
    image: '/images/features/meeting-management.jpg',
    gradient: 'from-blue-600 to-indigo-600',
    link: ROUTES.MARKETING.MEETING_MANAGEMENT,
    stats: { value: '70%', label: 'Faster meeting prep', icon: Clock },
  },
  {
    id: 'committee-management',
    category: 'meetings',
    icon: Users,
    title: 'Committee Management',
    tagline: 'Organize unlimited committees',
    description:
      'Manage unlimited committees with dedicated workspaces, member tracking, and independent governance.',
    longDescription:
      'Whether you have 3 committees or 30, our platform scales to meet your needs. Each committee gets its own dedicated space with customized permissions, document libraries, and meeting schedules.',
    benefits: [
      'Unlimited committees and sub-committees',
      'Dedicated document libraries per committee',
      'Automated membership tracking and term limits',
      'Cross-committee reporting and analytics',
      'Independent meeting scheduling and minutes',
    ],
    features: [
      {
        name: 'Unlimited Committees',
        description: 'No limits on how many committees you can create',
      },
      { name: 'Committee Libraries', description: 'Separate document storage for each committee' },
      { name: 'Membership Register', description: 'Automated member tracking and term management' },
      { name: 'Cross-Committee View', description: 'Executive dashboard for oversight' },
    ],
    image: '/images/features/committee-management.jpg',
    gradient: 'from-green-600 to-teal-600',
    link: '/features/committee-management',
    stats: { value: '100%', label: 'Visibility across committees', icon: Eye },
  },
  {
    id: 'document-features',
    category: 'documents',
    icon: FileText,
    title: 'Document Management Suite',
    tagline: 'Complete document solution',
    description:
      'Manage all board documents with e-signatures, surveys, voting, and resolution tracking in one unified platform.',
    longDescription:
      'Stop juggling multiple tools for document management. Our all-in-one suite handles everything from secure storage to legally binding signatures and board voting.',
    benefits: [
      'Support for all file types (PDF, Word, Excel, PowerPoint, images)',
      'Legally binding e-signatures compliant with ESIGN and eIDAS',
      'Secure voting and resolution tracking with audit trails',
      'Automated document retention and archiving',
      'Version control with complete history',
    ],
    features: [
      { name: 'All File Types', description: 'Support for 50+ file formats' },
      { name: 'E-Signatures', description: 'Legally binding digital signatures' },
      { name: 'Votes & Resolutions', description: 'Secure voting with audit trails' },
      { name: 'Version Control', description: 'Complete document history and restore' },
    ],
    image: '/images/features/document-features.jpg',
    gradient: 'from-orange-600 to-red-600',
    link: ROUTES.MARKETING.DOCUMENT_MANAGEMENT,
    stats: { value: '50+', label: 'File types supported', icon: FileText },
  },
  {
    id: 'security',
    category: 'security',
    icon: Shield,
    title: 'Enterprise Security',
    tagline: 'Military-grade protection',
    description:
      'Protect your board materials with AES-256 encryption, two-factor authentication, and complete audit trails.',
    longDescription:
      'Built on the Microsoft Enterprise Framework, our security infrastructure meets the highest standards of government and enterprise clients. Your data is protected at every layer.',
    benefits: [
      'AES-256 encryption for data at rest and in transit',
      'Two-factor authentication and SSO support',
      'Complete audit trails with 7-year retention',
      'Role-based access control at document level',
      'SOC 2 Type II and ISO 27001 certified',
    ],
    features: [
      { name: 'Encryption', description: 'AES-256 military-grade encryption' },
      { name: '2FA & SSO', description: 'Multi-factor authentication and single sign-on' },
      { name: 'Audit Logs', description: 'Tamper-proof audit trails' },
      { name: 'Role-based Access', description: 'Granular document-level permissions' },
    ],
    image: '/images/features/security.jpg',
    gradient: 'from-slate-600 to-gray-600',
    link: ROUTES.PLATFORM.SECURITY,
    stats: { value: '99.99%', label: 'Uptime SLA', icon: Server },
  },
  {
    id: 'integrations',
    category: 'integrations',
    icon: Settings,
    title: 'Integrations & Support',
    tagline: 'Connect with your favorite tools',
    description:
      'Seamlessly integrate with your existing tools and get unlimited training and support with every plan.',
    longDescription:
      'We work with your existing technology stack. From SharePoint to Slack, our integrations ensure a smooth transition. Plus, every plan includes unlimited training and 24/7 support.',
    benefits: [
      'SharePoint, email, calendar, and task management integrations',
      'Unlimited training and support included in every plan',
      'Flexible hosting: self-hosted or cloud-hosted options',
      'REST API for custom integrations',
      '24/7 priority support for enterprise clients',
    ],
    features: [
      { name: 'SharePoint Integration', description: 'Seamless document sync' },
      { name: 'Email & Calendar Sync', description: 'Outlook and Gmail integration' },
      { name: 'Task Management', description: 'Integration with Asana, Trello, Jira' },
      { name: 'Unlimited Training', description: 'Onboarding and ongoing training' },
      { name: 'Flexible Hosting', description: 'Cloud, on-premise, or hybrid' },
    ],
    image: '/images/features/integrations.jpg',
    gradient: 'from-cyan-600 to-blue-600',
    link: ROUTES.PLATFORM.INTEGRATIONS,
    stats: { value: '24/7', label: 'Support available', icon: Headphones },
  },
];

export const FeaturesPage: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState(features[0]);
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredFeatures =
    activeCategory === 'all' ? features : features.filter((f) => f.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Features - EBoard Solutions | Modern Governance Platform</title>
        <meta
          name="description"
          content="Explore EBoard's comprehensive governance features: AI capabilities, meeting management, committee management, document suite, enterprise security, and integrations."
        />
        <meta
          property="og:title"
          content="Features - EBoard Solutions | Modern Governance Platform"
        />
        <meta
          property="og:description"
          content="Everything you need for modern board governance in one platform."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-6 pb-12 overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Everything for{' '}
              <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                modern governance
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              AI-powered tools, enterprise security, and seamless integrations—all in one platform.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link to={ROUTES.DEMO.INDEX}>
                <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Book Demo
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-center gap-6 mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Brain className="w-4 h-4 text-purple-600" />
                AI-Powered
              </div>
              <div className="h-4 w-px bg-gray-200" />
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Shield className="w-4 h-4 text-green-600" />
                Enterprise Security
              </div>
              <div className="h-4 w-px bg-gray-200" />
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Plug className="w-4 h-4 text-blue-600" />
                50+ Integrations
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust indicators */}
      <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-primary-500" />
          <span>Trusted by 500+ organizations</span>
        </div>
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-primary-500" />
          <span>ISO 27001 Certified</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 text-primary-500" />
          <span>2M+ users worldwide</span>
        </div>
      </div>

      {/* Category Navigation */}
      <section className="sticky top-20 bg-white border-b border-gray-200 z-30 py-3 shadow-sm">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {featureCategories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className={`w-4 h-4 mr-2 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Cards Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFeatures.map((feature, index) => {
              const Icon = feature.icon;
              const isSelected = selectedFeature.id === feature.id;

              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card
                    variant="elevated"
                    className={`h-full cursor-pointer transition-all duration-300 hover:shadow-xl ${
                      isSelected ? 'ring-2 ring-primary-500 shadow-lg' : ''
                    }`}
                    onClick={() => setSelectedFeature(feature)}
                  >
                    {/* Header with icon and badge */}
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white shadow-md`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      {feature.badge && (
                        <Badge
                          variant="primary"
                          size="sm"
                          className="bg-purple-100 text-purple-700"
                        >
                          {feature.badge}
                        </Badge>
                      )}
                    </div>

                    {/* Title and description */}
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">{feature.tagline}</p>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{feature.description}</p>

                    {/* Key benefits preview */}
                    <ul className="space-y-1.5 mb-4">
                      {feature.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="text-xs text-gray-500 flex items-start">
                          <CheckCircle className="w-3.5 h-3.5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Stats and CTA */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      {feature.stats && (
                        <div className="flex items-center gap-2">
                          <feature.stats.icon className="w-4 h-4 text-primary-500" />
                          <span className="text-sm font-semibold text-gray-900">
                            {feature.stats.value}
                          </span>
                          <span className="text-xs text-gray-500">{feature.stats.label}</span>
                        </div>
                      )}
                      <div className="text-primary-600 text-sm font-medium hover:text-primary-700 transition flex items-center gap-1">
                        Learn more
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Selected Feature Detail Section */}
      <AnimatePresence mode="wait">
        <motion.section
          key={selectedFeature.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
          className="py-20 bg-gray-50"
        >
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Content - Detailed Information */}
              <div className="order-2 lg:order-1">
                {/* Category badge */}
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${selectedFeature.gradient} flex items-center justify-center text-white`}
                  >
                    <selectedFeature.icon className="w-5 h-5" />
                  </div>
                  <Badge variant="primary" className="bg-primary-100 text-primary-700">
                    {featureCategories.find((c) => c.id === selectedFeature.category)?.label ||
                      'Feature'}
                  </Badge>
                  {selectedFeature.enterprise && (
                    <Badge variant="secondary" className="bg-slate-100 text-slate-700">
                      Enterprise
                    </Badge>
                  )}
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedFeature.title}</h2>
                <p className="text-lg text-primary-600 font-medium mb-3">
                  {selectedFeature.tagline}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {selectedFeature.longDescription}
                </p>

                {/* Stats row */}
                {selectedFeature.stats && (
                  <div className="flex items-center gap-6 bg-white rounded-xl p-4 mb-6 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                        <selectedFeature.stats.icon className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary-600">
                          {selectedFeature.stats.value}
                        </div>
                        <div className="text-xs text-gray-500">{selectedFeature.stats.label}</div>
                      </div>
                    </div>
                    <div className="w-px h-10 bg-gray-200" />
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-gray-400" />
                      <div>
                        <div className="text-sm font-semibold text-gray-900">
                          Included in all plans
                        </div>
                        <div className="text-xs text-gray-500">No hidden costs</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Key Capabilities */}
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary-500" />
                  Key capabilities
                </h3>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {selectedFeature.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-gray-900">{feature.name}</h4>
                        <p className="text-sm text-gray-500">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Full benefits list */}
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary-500" />
                  What you'll achieve
                </h3>
                <ul className="space-y-2 mb-8">
                  {selectedFeature.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-3.5 h-3.5 text-green-600" />
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Link to={selectedFeature.link}>
                    <Button
                      size="lg"
                      className={`bg-gradient-to-r ${selectedFeature.gradient} text-white border-0 hover:opacity-90`}
                    >
                      Learn more about {selectedFeature.title}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Link to={ROUTES.DEMO.INDEX}>
                    <Button size="lg" variant="outline">
                      See it in action
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Column - Image/Visual */}
              <div className="order-1 lg:order-2">
                <div className="relative">
                  {/* Main image */}
                  <div className="relative rounded-2xl shadow-2xl overflow-hidden bg-white">
                    <img
                      src={selectedFeature.image}
                      alt={selectedFeature.title}
                      className="w-full h-auto"
                      onError={(e) => {
                        e.currentTarget.src = `https://placehold.co/600x450/1e293b/3b82f6?text=${selectedFeature.title.replace(/ /g, '+')}`;
                      }}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-tr ${selectedFeature.gradient} opacity-10`}
                    />
                  </div>

                  {/* Floating stats cards */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                    className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-3 border border-gray-100"
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-8 h-8 rounded-lg bg-gradient-to-br ${selectedFeature.gradient} flex items-center justify-center text-white`}
                      >
                        <selectedFeature.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Customer rating</p>
                        <div className="flex items-center gap-1">
                          <div className="flex gap-0.5">
                            {[1, 2, 3, 4, 5].map((i) => (
                              <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <span className="text-xs font-semibold">4.9/5</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1 }}
                    className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-3 border border-gray-100"
                  >
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary-500" />
                      <div>
                        <p className="text-xs text-gray-500">Active users</p>
                        <p className="text-sm font-bold text-gray-900">2M+</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </AnimatePresence>

      {/* Comparison Table */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="primary" className="mb-4 bg-primary-100 text-primary-700">
              Feature Comparison
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Compare features across plans</h2>
            <p className="text-lg text-gray-600">
              Choose the plan that's right for your organization.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b-2 border-gray-200">
                  <th className="text-left p-4 font-semibold text-gray-900">Feature</th>
                  <th className="text-center p-4 font-semibold text-gray-900">Essential</th>
                  <th className="text-center p-4 font-semibold text-primary-600 bg-primary-50">
                    Professional
                  </th>
                  <th className="text-center p-4 font-semibold text-gray-900">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Meeting Management', essential: true, pro: true, enterprise: true },
                  {
                    feature: 'Document Storage (GB)',
                    essential: '25',
                    pro: '100',
                    enterprise: 'Unlimited',
                  },
                  {
                    feature: 'AI Minutes & Transcription',
                    essential: false,
                    pro: true,
                    enterprise: true,
                  },
                  { feature: 'E-Signatures', essential: true, pro: true, enterprise: true },
                  {
                    feature: 'Committee Management',
                    essential: '5',
                    pro: 'Unlimited',
                    enterprise: 'Unlimited',
                  },
                  {
                    feature: 'Security & Compliance',
                    essential: 'Standard',
                    pro: 'Advanced',
                    enterprise: 'Enterprise',
                  },
                  { feature: 'API Access', essential: false, pro: true, enterprise: true },
                  { feature: '24/7 Support', essential: false, pro: true, enterprise: true },
                  {
                    feature: 'Dedicated Account Manager',
                    essential: false,
                    pro: false,
                    enterprise: true,
                  },
                  {
                    feature: 'Custom Integrations',
                    essential: false,
                    pro: false,
                    enterprise: true,
                  },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition">
                    <td className="p-4 font-medium text-gray-900">{row.feature}</td>
                    <td className="p-4 text-center">
                      {typeof row.essential === 'boolean' ? (
                        row.essential ? (
                          <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <div className="text-gray-300">—</div>
                        )
                      ) : (
                        <span className="text-gray-600">{row.essential}</span>
                      )}
                    </td>
                    <td className="p-4 text-center bg-primary-50/30">
                      {typeof row.pro === 'boolean' ? (
                        row.pro ? (
                          <CheckCircle className="w-5 h-5 text-primary-500 mx-auto" />
                        ) : (
                          <div className="text-gray-300">—</div>
                        )
                      ) : (
                        <span className="font-medium text-primary-600">{row.pro}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {typeof row.enterprise === 'boolean' ? (
                        row.enterprise ? (
                          <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <div className="text-gray-300">—</div>
                        )
                      ) : (
                        <span className="text-gray-600">{row.enterprise}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Integrations Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="primary" className="mb-4 bg-primary-100 text-primary-700">
              Integrations
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Works with your favorite tools
            </h2>
            <p className="text-lg text-gray-600">
              Seamlessly integrate with your existing technology stack.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 items-center">
            {[
              { name: 'Microsoft Teams', icon: Video },
              { name: 'Zoom', icon: Video },
              { name: 'SharePoint', icon: HardDrive },
              { name: 'Google Workspace', icon: Mail },
              { name: 'Slack', icon: MessageSquare },
              { name: 'Salesforce', icon: BarChart3 },
              { name: 'Okta', icon: Shield },
              { name: 'Azure AD', icon: Key },
            ].map((integration, index) => {
              const Icon = integration.icon;
              return (
                <motion.div
                  key={integration.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center"
                >
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mb-2 hover:shadow-lg transition">
                    <Icon className="w-8 h-8 text-gray-600" />
                  </div>
                  <span className="text-xs text-gray-500">{integration.name}</span>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Link to={ROUTES.PLATFORM.INTEGRATIONS}>
              <Button variant="link">
                View all integrations
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to transform your board meetings?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Join 500+ organizations already using EBoard to streamline governance and drive
              impact.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to={ROUTES.DEMO.INDEX}>
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary-600 hover:bg-gray-100 shadow-lg"
                >
                  Book a Demo
                  <ArrowRight className="w-4 h-4 ml-2" />
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
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-primary-200">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                No credit card required
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                14-day free trial
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Cancel anytime
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Helper Star component for ratings
const Star: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default FeaturesPage;
