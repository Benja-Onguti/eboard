import React, { useState, useRef } from 'react';
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
  MessageSquare,
  Sparkles,
  Mail,
  Video,
  HardDrive,
  Key,
  Globe,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ROUTES } from '@/config/routes';

// Feature categories for filtering
const featureCategories = [
  { id: 'all', label: 'All Features', icon: Zap },
  { id: 'ai', label: 'AI', icon: Brain },
  { id: 'meetings', label: 'Meetings', icon: Calendar },
  { id: 'documents', label: 'Documents', icon: FileText },
  { id: 'security', label: 'Security', icon: Shield },
  { id: 'integrations', label: 'Integrations', icon: Settings },
];

// Main features data with IDs matching anchor links
const features = [
  {
    id: 'meeting-management',
    category: 'meetings',
    icon: Calendar,
    title: 'Meeting & Agenda',
    tagline: 'Streamline every meeting',
    description: 'Automate every aspect of your board meetings from scheduling to minutes.',
    longDescription:
      'Say goodbye to manual meeting coordination. Our platform automates scheduling, agenda building, minute taking, and follow-up tracking.',
    benefits: [
      'Drag-and-drop agenda builder',
      'Automatic minute tracking',
      'Zoom & Teams integration',
      'One-click board pack assembly',
    ],
    features: [
      { name: 'Agenda Builder', description: 'Collaborative agenda creation' },
      { name: 'Minute Builder', description: 'AI-assisted minute taking' },
      { name: 'Video Integration', description: 'Zoom and Teams' },
      { name: 'Board Packs', description: 'One-click compilation' },
    ],
    image: '/images/features/meeting-management.jpg',
    gradient: 'from-blue-600 to-indigo-600',
    stats: { value: '70%', label: 'Faster prep' },
  },
  {
    id: 'committee-management',
    category: 'meetings',
    icon: Users,
    title: 'Committee Management',
    tagline: 'Organize unlimited committees',
    description: 'Manage unlimited committees with dedicated workspaces and member tracking.',
    longDescription: 'Whether you have 3 committees or 30, our platform scales to meet your needs.',
    benefits: [
      'Unlimited committees',
      'Dedicated document libraries',
      'Membership tracking',
      'Cross-committee reporting',
    ],
    features: [
      { name: 'Unlimited Committees', description: 'No limits' },
      { name: 'Committee Libraries', description: 'Separate storage' },
      { name: 'Membership Register', description: 'Term management' },
      { name: 'Cross-Committee View', description: 'Executive dashboard' },
    ],
    image: '/images/features/committee-management.jpg',
    gradient: 'from-green-600 to-teal-600',
    stats: { value: '100%', label: 'Visibility' },
  },
  {
    id: 'ai-capabilities',
    category: 'ai',
    icon: Brain,
    title: 'AI Capabilities',
    tagline: 'Powered by Google Gemini',
    description: 'Transform meetings with AI-powered transcription, summarization, and text-to-speech.',
    longDescription:
      'Leverage Google Gemini AI to automate meeting documentation, generate intelligent summaries, and make board materials accessible to all members.',
    benefits: [
      'Speech-to-text transcription with 95%+ accuracy',
      'AI-powered meeting summarization',
      'Text-to-speech accessibility',
    ],
    features: [
      { name: 'Speech to Text', description: 'Real-time transcription' },
      { name: 'AI Summarization', description: 'Auto extraction of decisions' },
      { name: 'Text to Speech', description: 'Accessible materials' },
      { name: 'Smart Search', description: 'Find anything instantly' },
    ],
    image: '/images/features/ai-capabilities.jpg',
    gradient: 'from-purple-600 to-pink-600',
    stats: { value: '95%', label: 'Time saved' },
  },
  {
    id: 'document-features',
    category: 'documents',
    icon: FileText,
    title: 'Document Suite',
    tagline: 'Complete document solution',
    description: 'Manage all board documents with e-signatures, surveys, and voting.',
    longDescription:
      'Stop juggling multiple tools. Our all-in-one suite handles everything from secure storage to legally binding signatures.',
    benefits: [
      'Support for 50+ file types',
      'Legally binding e-signatures',
      'Secure voting',
      'Version control',
    ],
    features: [
      { name: 'All File Types', description: '50+ formats' },
      { name: 'E-Signatures', description: 'Legally binding' },
      { name: 'Votes & Resolutions', description: 'With audit trails' },
      { name: 'Version Control', description: 'Complete history' },
    ],
    image: '/images/features/document-features.jpg',
    gradient: 'from-orange-600 to-red-600',
    stats: { value: '50+', label: 'File types' },
  },
  {
    id: 'security',
    category: 'security',
    icon: Shield,
    title: 'Enterprise Security',
    tagline: 'Military-grade protection',
    description: 'Protect your board materials with AES-256 encryption and complete audit trails.',
    longDescription:
      'Built on the Microsoft Enterprise Framework, our security infrastructure meets the highest standards.',
    benefits: [
      'AES-256 encryption',
      'Two-factor authentication',
      'Complete audit trails',
      'SOC 2 & ISO 27001 certified',
    ],
    features: [
      { name: 'Encryption', description: 'AES-256 military-grade' },
      { name: '2FA & SSO', description: 'Multi-factor auth' },
      { name: 'Audit Logs', description: 'Tamper-proof trails' },
      { name: 'Role-based Access', description: 'Granular permissions' },
    ],
    image: '/images/features/security.jpg',
    gradient: 'from-slate-600 to-gray-600',
    stats: { value: '99.99%', label: 'Uptime' },
  },
  {
    id: 'integrations',
    category: 'integrations',
    icon: Settings,
    title: 'Integrations',
    tagline: 'Connect with your tools',
    description: 'Seamlessly integrate with your existing tools and get unlimited support.',
    longDescription:
      'We work with your existing technology stack. Every plan includes unlimited training and 24/7 support.',
    benefits: ['SharePoint integration', 'Email & calendar sync', 'REST API', '24/7 support'],
    features: [
      { name: 'SharePoint', description: 'Document sync' },
      { name: 'Email & Calendar', description: 'Outlook and Gmail' },
      { name: 'Task Management', description: 'Asana, Trello, Jira' },
      { name: 'Unlimited Training', description: 'Onboarding included' },
    ],
    image: '/images/features/integrations.jpg',
    gradient: 'from-cyan-600 to-blue-600',
    stats: { value: '24/7', label: 'Support' },
  },
];

export const FeaturesPage: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState(features[0]);
  const [activeCategory, setActiveCategory] = useState('all');
  const featureRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const filteredFeatures =
    activeCategory === 'all' ? features : features.filter((f) => f.category === activeCategory);

  const scrollToFeature = (featureId: string) => {
    const element = featureRefs.current[featureId];
    if (element) {
      const offset = 80; // Account for sticky navbar height
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
    // Also update selected feature for detail view
    const feature = features.find(f => f.id === featureId);
    if (feature) setSelectedFeature(feature);
  };

  // List of core features for the navbar (excluding Integrations from quick nav, but still in filters)
  const coreFeatures = features.filter(f => f.id !== 'integrations');

  return (
    <>
      <Helmet>
        <title>Features - EBoard Solutions | Modern Governance Platform</title>
        <meta
          name="description"
          content="Explore EBoard's comprehensive governance features: AI capabilities, meeting management, committee management, document suite, enterprise security, and integrations."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100/30" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-100/50 to-transparent" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="primary" className="mb-6 px-4 py-1.5 text-sm">
                Platform Features
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Everything you need for{' '}
                <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                  modern governance
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                AI-powered tools, enterprise security, and seamless integrations—all in one platform
                designed for boards.
              </p>

              <div className="flex flex-wrap gap-4 justify-center mb-10">
                <Link to={ROUTES.DEMO.INDEX}>
                  <Button size="lg" className="px-8">
                    Book Demo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to={ROUTES.COMPANY.CONTACT}>
                  <Button size="lg" variant="outline" className="px-8">
                    Contact Sales
                  </Button>
                </Link>
              </div>

              <div className="flex items-center justify-center gap-8 pt-6 border-t border-gray-200 mx-auto max-w-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">6</div>
                  <div className="text-xs text-gray-500">Core Modules</div>
                </div>
                <div className="h-8 w-px bg-gray-200" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">50+</div>
                  <div className="text-xs text-gray-500">Integrations</div>
                </div>
                <div className="h-8 w-px bg-gray-200" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">99.9%</div>
                  <div className="text-xs text-gray-500">Uptime</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Navigation Bar (Links to each core feature) */}
      <section className="sticky top-20 bg-white border-b border-gray-200 z-30 py-3 shadow-sm">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {coreFeatures.map((feature) => (
              <button
                key={feature.id}
                onClick={() => scrollToFeature(feature.id)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-all duration-200 text-sm font-medium"
              >
                <feature.icon className="w-4 h-4" />
                {feature.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter (Optional, keeps original filtering) */}
      <section className="bg-white border-b border-gray-100 py-3">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs text-gray-400 mr-2">Filter:</span>
            {featureCategories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-3 py-1.5 rounded-full text-xs transition-all duration-200 ${
                    isActive
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 mr-1 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Cards Grid */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFeatures.map((feature, index) => {
              const Icon = feature.icon;
              const isSelected = selectedFeature.id === feature.id;

              return (
                <motion.div
                  key={feature.id}
                  id={feature.id}
                  ref={(el) => (featureRefs.current[feature.id] = el)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <Card
                    variant="elevated"
                    className={`h-full cursor-pointer transition-all duration-300 hover:shadow-xl ${
                      isSelected ? 'ring-2 ring-primary-500 shadow-lg' : ''
                    }`}
                    onClick={() => setSelectedFeature(feature)}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div
                        className={`w-10 h-10 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white shadow-md`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-xs text-gray-500 mb-2">{feature.tagline}</p>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{feature.description}</p>

                    <ul className="space-y-1 mb-3">
                      {feature.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="text-xs text-gray-500 flex items-start">
                          <CheckCircle className="w-3 h-3 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      {feature.stats && (
                        <div className="flex items-center gap-1">
                          <span className="text-sm font-semibold text-gray-900">
                            {feature.stats.value}
                          </span>
                          <span className="text-xs text-gray-500">{feature.stats.label}</span>
                        </div>
                      )}
                      <span className="text-primary-600 text-xs font-medium flex items-center gap-1">
                        Details <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Selected Feature Detail */}
      <AnimatePresence mode="wait">
        <motion.section
          key={selectedFeature.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
          className="py-16 bg-gray-50"
        >
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${selectedFeature.gradient} flex items-center justify-center text-white`}
                  >
                    <selectedFeature.icon className="w-5 h-5" />
                  </div>
                  <Badge variant="primary" className="bg-primary-100 text-primary-700 text-xs">
                    {featureCategories.find((c) => c.id === selectedFeature.category)?.label ||
                      'Feature'}
                  </Badge>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-1">{selectedFeature.title}</h2>
                <p className="text-sm text-primary-600 font-medium mb-3">
                  {selectedFeature.tagline}
                </p>
                <p className="text-gray-600 mb-5 text-sm leading-relaxed">
                  {selectedFeature.longDescription}
                </p>

                {selectedFeature.stats && (
                  <div className="flex items-center gap-4 bg-white rounded-xl p-4 mb-5 shadow-sm">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-10 h-10 rounded-full bg-gradient-to-br ${selectedFeature.gradient} flex items-center justify-center text-white text-sm font-bold`}
                      >
                        {selectedFeature.stats.value}
                      </div>
                      <div>
                        <div className="text-lg font-bold text-gray-900">
                          {selectedFeature.stats.value}
                        </div>
                        <div className="text-xs text-gray-500">{selectedFeature.stats.label}</div>
                      </div>
                    </div>
                  </div>
                )}

                <h3 className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary-500" /> Key capabilities
                </h3>
                <div className="grid md:grid-cols-2 gap-3 mb-5">
                  {selectedFeature.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">{feature.name}</h4>
                        <p className="text-xs text-gray-500">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link to={ROUTES.DEMO.INDEX}>
                    <Button
                      size="md"
                      className={`bg-gradient-to-r ${selectedFeature.gradient} text-white border-0`}
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="relative rounded-xl shadow-xl overflow-hidden bg-white">
                    <img
                      src={selectedFeature.image}
                      alt={selectedFeature.title}
                      className="w-full h-auto"
                      onError={(e) => {
                        e.currentTarget.src = `https://placehold.co/600x400/1e293b/3b82f6?text=${selectedFeature.title.replace(/ /g, '+')}`;
                      }}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-tr ${selectedFeature.gradient} opacity-10`}
                    />
                  </div>

                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="absolute -bottom-3 -left-3 bg-white rounded-lg shadow-lg p-3 border border-gray-100"
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

      {/* Why EBoard Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Badge variant="primary" className="mb-3">
              Why EBoard
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Built for modern boards
            </h2>
            <p className="text-gray-600">
              Everything you need to run effective board meetings and governance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Brain,
                title: 'AI-Powered',
                description: 'Save 95% of time on meeting minutes with Google Gemini AI',
                color: 'purple',
              },
              {
                icon: Shield,
                title: 'Enterprise Security',
                description: 'AES-256 encryption, SSO, and ISO 27001 certified',
                color: 'green',
              },
              {
                icon: Globe,
                title: 'Accessible Anywhere',
                description: 'Cloud-based platform accessible from any device',
                color: 'blue',
              },
              {
                icon: Headphones,
                title: '24/7 Support',
                description: 'Dedicated support team available around the clock',
                color: 'orange',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-5 h-full text-center hover:shadow-lg transition-shadow">
                  <div
                    className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 flex items-center justify-center text-white mb-3`}
                  >
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Showcase */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <Badge variant="primary" className="mb-3">
              Integrations
            </Badge>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Works with your tools</h2>
            <p className="text-gray-600 text-sm">
              Seamlessly integrate with your existing technology stack.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: 'Microsoft Teams', icon: Video },
              { name: 'Zoom', icon: Video },
              { name: 'SharePoint', icon: HardDrive },
              { name: 'Google Workspace', icon: Mail },
              { name: 'Slack', icon: MessageSquare },
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
                  <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-1 hover:shadow-md transition">
                    <Icon className="w-7 h-7 text-gray-600" />
                  </div>
                  <span className="text-xs text-gray-500">{integration.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to transform your board?</h2>
          <p className="text-primary-100 mb-6 max-w-xl mx-auto text-sm">
            Join 500+ organizations using EBoard to streamline governance.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to={ROUTES.DEMO.INDEX}>
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary-600 hover:bg-gray-100"
              >
                Book a Demo <ArrowRight className="w-4 h-4 ml-2" />
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

export default FeaturesPage;