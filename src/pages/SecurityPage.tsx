import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Shield,
  Lock,
  Eye,
  FileText,
  CheckCircle,
  ArrowRight,
  FileSearch,
  Star,
  Award,
  Key,
  Database,
  Server,
  Users,
  Clock,
  AlertCircle,
  Download,
  Mail,
  Fingerprint,
  Globe,
  UserCheck,
  FileCheck,
  TrendingUp,
  BadgeCheck,
  HardDrive,
  RefreshCw,
  Cloud,
  Terminal,
  Bug,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs';
import { ROUTES } from '@/config/routes';

export const SecurityPage: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('overview');

  return (
    <>
      <Helmet>
        <title>Document Security & Compliance - EBoard Solutions</title>
        <meta
          name="description"
          content="Enterprise-grade document security for board materials. AES-256 encryption, granular access controls, ISO 27001 certified, and complete audit trails."
        />
        <meta property="og:title" content="Document Security & Compliance - EBoard Solutions" />
        <meta
          property="og:description"
          content="Enterprise-grade security for your board documents with ISO 27001 certification."
        />
        <meta
          name="keywords"
          content="board document security, AES-256 encryption, ISO 27001, SOC 2, board portal security, compliance"
        />
        <link rel="canonical" href="https://eboard-solutions.com/security" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-pattern" />
        </div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />

        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/20 text-primary-300 text-sm font-medium mb-6 border border-primary-500/30">
                <Shield className="w-4 h-4" />
                <span>Enterprise-Grade Security</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Bank-level security for your{' '}
                <span className="text-primary-400">board documents</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Protect your sensitive board materials with AES-256 encryption, granular access
                controls, and complete audit trails. Trusted by government agencies and Fortune 500
                companies.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link to={ROUTES.DEMO.INDEX}>
                  <Button
                    size="lg"
                    className="bg-primary-600 hover:bg-primary-700 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    See Security in Action
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-white hover:bg-white/10"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Security Whitepaper
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary-400" />
                  <span className="text-sm font-medium">ISO 27001 Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary-400" />
                  <span className="text-sm font-medium">SOC 2 Type II</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-primary-400" />
                  <span className="text-sm font-medium">FedRAMP Ready</span>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Security Dashboard */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl shadow-2xl overflow-hidden border border-gray-700 bg-slate-800">
                <img
                  src="/images/security-dashboard.jpg"
                  alt="Security Dashboard"
                  className="w-full h-auto"
                  onError={(e) => {
                    e.currentTarget.src =
                      'https://placehold.co/600x400/1e293b/3b82f6?text=Security+Dashboard';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/10 to-transparent" />
              </div>

              {/* Floating Security Badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute -bottom-5 -left-5 bg-slate-800 rounded-xl shadow-xl p-4 border border-gray-700"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center">
                    <Lock className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Encryption Standard</p>
                    <p className="text-xl font-bold text-primary-400">AES-256</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1 }}
                className="absolute -top-5 -right-5 bg-slate-800 rounded-xl shadow-xl p-4 border border-gray-700"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <BadgeCheck className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Uptime SLA</p>
                    <p className="text-xl font-bold text-green-400">99.99%</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Stats Section */}
      <section className="py-16 bg-slate-800 border-y border-slate-700">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                value: 'AES-256',
                label: 'Encryption Standard',
                icon: Lock,
                description: 'Military-grade encryption',
              },
              {
                value: '99.99%',
                label: 'Uptime SLA',
                icon: Clock,
                description: 'Enterprise availability',
              },
              {
                value: '7 Years',
                label: 'Audit Retention',
                icon: FileText,
                description: 'Tamper-proof logs',
              },
              {
                value: '0',
                label: 'Security Breaches',
                icon: Shield,
                description: 'Since founding',
              },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary-400" />
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                  <div className="text-xs text-gray-500 mt-1">{stat.description}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security Features Tabs */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge
              variant="primary"
              className="mb-4 bg-primary-100 text-primary-700 border-primary-200"
            >
              Security Architecture
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Multi-layer security framework
            </h2>
            <p className="text-xl text-gray-600">
              Your data is protected at every layer with enterprise-grade security controls.
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="encryption">Encryption</TabsTrigger>
              <TabsTrigger value="access">Access Control</TabsTrigger>
              <TabsTrigger value="compliance">Compliance</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Lock,
                    title: 'AES-256 Encryption',
                    description:
                      'Military-grade encryption for all data at rest and in transit. Your data is protected with the highest industry standard.',
                    features: [
                      'End-to-end encryption',
                      'Secure key management',
                      'TLS 1.3 for data in transit',
                    ],
                  },
                  {
                    icon: UserCheck,
                    title: 'Granular Access Control',
                    description:
                      'Role-based permissions with document and folder-level controls. Only authorized users can access sensitive information.',
                    features: [
                      'Custom permission levels',
                      'Time-limited access',
                      'Document expiration dates',
                    ],
                  },
                  {
                    icon: FileSearch,
                    title: 'Complete Audit Trails',
                    description:
                      'Every view, edit, share, and download is logged with timestamp and user information.',
                    features: ['Tamper-proof logs', '7-year retention', 'Exportable audit reports'],
                  },
                  {
                    icon: Fingerprint,
                    title: 'Multi-Factor Authentication',
                    description:
                      'Additional layer of security to prevent unauthorized access to board materials.',
                    features: [
                      'SMS/Email verification',
                      'Authenticator app support',
                      'Biometric options',
                    ],
                  },
                  {
                    icon: Database,
                    title: 'Secure Data Centers',
                    description:
                      'Your data is stored in SOC 3 certified data centers with 24/7 physical security.',
                    features: ['Geographic redundancy', 'Regular backups', 'Disaster recovery'],
                  },
                  {
                    icon: Eye,
                    title: 'Watermarking & DRM',
                    description:
                      'Dynamic watermarks and digital rights management to prevent unauthorized sharing.',
                    features: [
                      'User-specific watermarks',
                      'Print/download controls',
                      'Screen capture protection',
                    ],
                  },
                ].map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-primary-500">
                        <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-4">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600 mb-4 text-sm">{feature.description}</p>
                        <ul className="space-y-2">
                          {feature.features.map((benefit, i) => (
                            <li key={i} className="text-sm text-gray-500 flex items-center">
                              <CheckCircle className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </TabsContent>

            {/* Encryption Tab */}
            <TabsContent value="encryption" className="mt-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    AES-256 Encryption at Every Layer
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We use the same encryption standard trusted by the U.S. government and financial
                    institutions to protect classified information. Your data is encrypted at rest,
                    in transit, and during processing.
                  </p>
                  <div className="space-y-4">
                    {[
                      {
                        title: 'Data at Rest',
                        description:
                          'AES-256 encryption for all stored data with secure key management',
                      },
                      {
                        title: 'Data in Transit',
                        description: 'TLS 1.3 encryption for all network communications',
                      },
                      {
                        title: 'Key Management',
                        description: 'Hardware Security Modules (HSM) for key storage',
                      },
                      {
                        title: 'Backup Encryption',
                        description: 'All backups are encrypted with separate keys',
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-gray-900">{item.title}</h4>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-50 rounded-2xl p-6 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4 text-center">
                    Encryption Process
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Document Upload</span>
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">Encryption</span>
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">Secure Storage</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-2">
                      <div className="bg-primary-500 rounded-full h-2 w-full" />
                    </div>
                    <div className="text-center text-sm text-gray-500">
                      <Lock className="w-4 h-4 inline mr-1" />
                      Protected by AES-256
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Access Control Tab */}
            <TabsContent value="access" className="mt-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <img
                    src="/images/access-control-diagram.jpg"
                    alt="Access Control Diagram"
                    className="rounded-2xl shadow-lg"
                    onError={(e) => {
                      e.currentTarget.src =
                        'https://placehold.co/500x400/f3f4f6/3b82f6?text=Access+Control+Diagram';
                    }}
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Granular Access Controls
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Control exactly who can view, edit, share, or delete documents with role-based
                    permissions at the folder, document, and even page level.
                  </p>
                  <div className="space-y-4">
                    {[
                      {
                        title: 'Role-Based Access',
                        description:
                          'Predefined roles for board members, administrators, and viewers',
                      },
                      {
                        title: 'Custom Permissions',
                        description: 'Fine-grained controls for specific documents or folders',
                      },
                      {
                        title: 'Time-Limited Access',
                        description: 'Set expiration dates for temporary access',
                      },
                      {
                        title: 'Just-in-Time Access',
                        description: 'Request and approve access on demand',
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-gray-900">{item.title}</h4>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Compliance Tab */}
            <TabsContent value="compliance" className="mt-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Global Compliance Certifications
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We maintain the highest security certifications and comply with regulations
                    worldwide.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <div className="flex items-center gap-3 mb-2">
                        <Award className="w-5 h-5 text-green-600" />
                        <h4 className="font-semibold text-green-800">ISO 27001 Certified</h4>
                      </div>
                      <p className="text-sm text-green-700">
                        Information Security Management System certification
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <div className="flex items-center gap-3 mb-2">
                        <Shield className="w-5 h-5 text-blue-600" />
                        <h4 className="font-semibold text-blue-800">SOC 2 Type II</h4>
                      </div>
                      <p className="text-sm text-blue-700">
                        Service Organization Control audit for security and availability
                      </p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                      <div className="flex items-center gap-3 mb-2">
                        <Globe className="w-5 h-5 text-purple-600" />
                        <h4 className="font-semibold text-purple-800">GDPR Compliant</h4>
                      </div>
                      <p className="text-sm text-purple-700">
                        European data protection regulation compliance
                      </p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <div className="flex items-center gap-3 mb-2">
                        <Cloud className="w-5 h-5 text-slate-600" />
                        <h4 className="font-semibold text-slate-800">FedRAMP Ready</h4>
                      </div>
                      <p className="text-sm text-slate-700">
                        U.S. federal government security standards
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <BadgeCheck className="w-5 h-5 text-primary-500" />
                      Compliance at a glance
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      <Badge variant="primary" size="lg">
                        ISO 27001
                      </Badge>
                      <Badge variant="primary" size="lg">
                        SOC 2 Type II
                      </Badge>
                      <Badge variant="primary" size="lg">
                        GDPR
                      </Badge>
                      <Badge variant="primary" size="lg">
                        FedRAMP
                      </Badge>
                      <Badge variant="primary" size="lg">
                        CCPA
                      </Badge>
                      <Badge variant="primary" size="lg">
                        HIPAA
                      </Badge>
                      <Badge variant="primary" size="lg">
                        PCI DSS
                      </Badge>
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <p className="text-sm text-gray-600 mb-3">
                        Request compliance documentation:
                      </p>
                      <Button variant="outline" size="sm">
                        <Mail className="w-4 h-4 mr-2" />
                        Contact Compliance Team
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge
                variant="primary"
                className="mb-4 bg-primary-100 text-primary-700 border-primary-200"
              >
                Infrastructure
              </Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Secure, redundant global infrastructure
              </h2>
              <p className="text-gray-600 mb-6">
                Your data is protected across multiple geographic regions with automatic failover
                and 24/7 security monitoring.
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: Globe,
                    title: 'Global Data Centers',
                    description: 'North America, Europe, and Asia Pacific regions available',
                  },
                  {
                    icon: HardDrive,
                    title: 'Redundant Backups',
                    description: 'Automated daily backups with geographic redundancy',
                  },
                  {
                    icon: Server,
                    title: '99.99% Uptime SLA',
                    description: 'Enterprise-grade availability with automatic failover',
                  },
                  {
                    icon: Clock,
                    title: '24/7 Security Monitoring',
                    description: 'Real-time threat detection and response',
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start">
                      <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mr-3 flex-shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4 text-center">
                  Data Center Locations
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">🇺🇸 North America</span>
                    <span className="text-sm text-gray-500">Virginia, Oregon</span>
                    <Badge variant="secondary" size="sm">
                      Primary
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">🇪🇺 Europe</span>
                    <span className="text-sm text-gray-500">Frankfurt, Ireland</span>
                    <Badge variant="secondary" size="sm">
                      Primary
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">🌏 Asia Pacific</span>
                    <span className="text-sm text-gray-500">Singapore, Tokyo</span>
                    <Badge variant="secondary" size="sm">
                      Available
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonial */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-primary-50 border-primary-100 p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed">
                "EBoard's security infrastructure gave our compliance team complete confidence. The
                audit trails and access controls are exactly what we needed for SOX compliance.
                We've reduced our security audit time by 60%."
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 mr-4" />
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Michael Torres</p>
                  <p className="text-sm text-gray-500">Corporate Secretary, Torres Industries</p>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  to="/case-studies/torres-industries"
                  className="text-primary-600 font-medium hover:underline inline-flex items-center gap-1"
                >
                  Read full case study
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge
              variant="primary"
              className="mb-4 bg-primary-100 text-primary-700 border-primary-200"
            >
              Frequently Asked Questions
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Security questions answered</h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about document security.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'What encryption standards do you use?',
                a: 'We use AES-256 encryption for all data at rest and TLS 1.3 for data in transit. This is the same standard used by the U.S. government and financial institutions to protect classified information.',
              },
              {
                q: 'Where is my data stored?',
                a: 'You can choose from data centers in North America (Virginia, Oregon), Europe (Frankfurt, Ireland), or Asia Pacific (Singapore, Tokyo). All data centers are SOC 3 certified with 24/7 physical security.',
              },
              {
                q: 'How long are audit logs retained?',
                a: 'Audit logs are retained for 7 years and are tamper-proof to ensure compliance with regulatory requirements. Logs include user identity, timestamp, action type, and IP address.',
              },
              {
                q: 'Do you have third-party security audits?',
                a: 'Yes, we undergo annual third-party audits for ISO 27001 and SOC 2 Type II certifications. Our security practices are regularly reviewed by independent security firms.',
              },
              {
                q: 'Can I control who accesses specific documents?',
                a: 'Yes, you can set granular permissions at the folder, document, and even page level. Access can be time-limited and requires additional authentication for sensitive documents.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Security Resources
            </h2>
            <p className="text-gray-600">
              Download our security documentation and compliance reports.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Download,
                title: 'Security Whitepaper',
                description: 'Detailed overview of our security architecture and practices',
                link: '/resources/security-whitepaper',
              },
              {
                icon: FileText,
                title: 'Compliance Report',
                description: 'ISO 27001 and SOC 2 audit reports (NDA required)',
                link: '/resources/compliance-reports',
              },
              {
                icon: Shield,
                title: 'Security FAQ',
                description: 'Detailed answers to common security questions',
                link: '/resources/security-faq',
              },
            ].map((resource, index) => {
              const Icon = resource.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link to={resource.link}>
                    <Card className="h-full hover:shadow-lg transition-all duration-300 group hover:border-primary-200">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors flex-shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition">
                            {resource.title}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to secure your board documents?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              See how EBoard protects sensitive board materials with enterprise-grade security.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to={ROUTES.DEMO.INDEX}>
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Request Security Demo
                </Button>
              </Link>
              <Link to={ROUTES.COMPANY.CONTACT}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  Contact Security Team
                </Button>
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 justify-center text-sm text-primary-200">
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                ISO 27001 Certified
              </span>
              <span className="flex items-center gap-2">
                <Lock className="w-4 h-4" />
                SOC 2 Type II
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                FedRAMP Ready
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
