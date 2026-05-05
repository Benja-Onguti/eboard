import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Shield,
  Users,
  Globe,
  BarChart,
  Lock,
  Database,
  Clock,
  TrendingUp,
  LineChart,
  Network,
  Server,
  Key,
  UserCheck,
  Headphones,
  Calendar,
  Brain,
  GitMerge,
  Code,
  HardDrive,
  RefreshCw,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs';
import { ROUTES } from '@/config/routes';

export const EnterprisePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Enterprise Board Management - EBoard Solutions</title>
        <meta
          name="description"
          content="Scale your corporate governance with enterprise-grade security, integrations, and analytics. Trusted by Fortune 500 companies worldwide."
        />
        <meta property="og:title" content="Enterprise Board Management - EBoard Solutions" />
        <meta
          property="og:description"
          content="Enterprise-grade governance platform for corporate boards."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-6 pb-12 overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          />
        </div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />

        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Enterprise-grade governance for{' '}
                <span className="text-primary-400">global organizations</span>
              </h1>
              <p className="text-xl text-gray-500 mb-8 max-w-xl">
                Scale your corporate governance with enterprise-level security, advanced
                integrations, and strategic analytics.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link to={ROUTES.DEMO.INDEX}>
                  <Button size="lg" className="bg-primary-600 hover:bg-primary-700">
                    Book Enterprise Demo
                  </Button>
                </Link>
                <Link to={ROUTES.COMPANY.CONTACT}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary-500 text-primary-500 hover:bg-white/10"
                  >
                    Contact US
                  </Button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="flex items-center gap-6 pt-4 border-t border-slate-700">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-400">100+</div>
                  <div className="text-xs text-gray-400">Enterprises</div>
                </div>
                <div className="h-8 w-px bg-slate-700" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">99.99%</div>
                  <div className="text-xs text-gray-400">Uptime SLA</div>
                </div>
                <div className="h-8 w-px bg-slate-700" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-400">50+</div>
                   <div className="text-xs text-gray-400">Integrations</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl shadow-2xl overflow-hidden border border-slate-700">
                <img
                  src="/images/features/business meeting.jpg"
                  alt="Enterprise Meeting"
                  className="w-full h-[450px]"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-transparent" />
              </div>

              {/* Floating Security Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -bottom-4 -left-4 bg-slate-800 rounded-xl shadow-2xl p-4 border border-slate-700"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Security</p>
                    <p className="text-lg font-bold text-white">ISO 27001</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating SLA Badge */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl shadow-2xl p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-primary-200">SLA Uptime</p>
                    <p className="text-lg font-bold text-white">99.99%</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enterprise Stats */}
      {/* <section className="py-16 bg-slate-800 border-y border-slate-700">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '100+', label: 'Enterprise Clients' },
              { value: '99.99%', label: 'Uptime SLA' },
              { value: '50+', label: 'Integrations' },
              { value: '24/7', label: 'Enterprise Support' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Enterprise Challenges */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <Badge variant="primary" className="mb-3 bg-primary-100 text-primary-700">
              Challenges
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Enterprise governance challenges
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Globe,
                title: 'Global Coordination',
                description: 'Managing board members across multiple time zones and countries',
              },
              {
                icon: GitMerge,
                title: 'Complex Integrations',
                description: 'Connecting with existing enterprise systems and workflows',
              },
              {
                icon: Shield,
                title: 'Regulatory Compliance',
                description: 'Meeting SOX, GDPR, CCPA and industry-specific regulations',
              },
              {
                icon: BarChart,
                title: 'Strategic Insights',
                description: 'Extracting actionable insights from governance data',
              },
              {
                icon: Network,
                title: 'Multi-entity Management',
                description: 'Overseeing subsidiaries, divisions, and committees',
              },
              {
                icon: Users,
                title: 'Stakeholder Management',
                description: 'Coordinating across executives, directors, and advisors',
              },
            ].map((challenge, index) => {
              const Icon = challenge.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:border-primary-200">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{challenge.title}</h3>
                    <p className="text-gray-600">{challenge.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enterprise Solution */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="primary" className="mb-3 bg-primary-100 text-primary-700">
                Solution
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Built for enterprise scale
              </h2>

              <div className="space-y-4">
                {[
                  {
                    icon: Lock,
                    title: 'Enterprise Security',
                    description: 'SSO, MFA, and encryption key management',
                  },
                  {
                    icon: GitMerge,
                    title: 'Custom Integrations',
                    description: 'API-first architecture for seamless integration',
                  },
                  {
                    icon: LineChart,
                    title: 'Advanced Analytics',
                    description: 'Executive dashboards with AI-powered insights',
                  },
                  {
                    icon: Users,
                    title: 'Multi-entity Management',
                    description: 'Centralized governance for complex structures',
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mr-3 flex-shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl shadow-2xl overflow-hidden">
                <img src="/images/features/b1.jpg" alt="Enterprise Solution" className="w-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enterprise Features Tabs */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <Badge variant="primary" className="mb-3 bg-primary-100 text-primary-700">
              Features
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Enterprise-grade capabilities
            </h2>
          </div>

          <Tabs defaultValue="security" className="w-full">
            <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-4 mb-6">
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="integrations">Integrations</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="management">Management</TabsTrigger>
            </TabsList>

            {/* Security Tab */}
            <TabsContent value="security" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Key,
                    title: 'SSO Integration',
                    description:
                      'Support for SAML 2.0, OAuth, and OpenID Connect with major identity providers',
                  },
                  {
                    icon: Lock,
                    title: 'Advanced Encryption',
                    description: 'AES-256 encryption with customer-managed keys and HSM support',
                  },
                  {
                    icon: UserCheck,
                    title: 'Multi-factor Authentication',
                    description: 'Biometric, hardware token, and authenticator app support',
                  },
                  {
                    icon: Shield,
                    title: 'Data Loss Prevention',
                    description: 'Granular controls for download, printing, and forwarding',
                  },
                  {
                    icon: Database,
                    title: 'Data Residency',
                    description: 'Choose data center locations to meet regulatory requirements',
                  },
                  {
                    icon: Server,
                    title: 'Private Cloud',
                    description: 'Dedicated instances available for maximum security',
                  },
                ].map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Card key={index} className="h-full">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-3">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </Card>
                  );
                })}
              </div>

              <div className="mt-8 p-6 bg-primary-50 rounded-2xl">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Security Certifications
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['ISO 27001', 'SOC 2 Type II', 'GDPR', 'HIPAA', 'FedRAMP'].map((cert) => (
                        <Badge key={cert} variant="primary" size="md">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Link to="/security">
                    <Button variant="outline">View Security Details</Button>
                  </Link>
                </div>
              </div>
            </TabsContent>

            {/* Integrations Tab */}
            <TabsContent value="integrations" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise Integrations</h3>
                  <div className="space-y-4">
                    {[
                      {
                        category: 'Identity Providers',
                        tools: ['Okta', 'Microsoft Azure AD', 'OneLogin', 'Ping Identity'],
                      },
                      {
                        category: 'Collaboration',
                        tools: ['Microsoft Teams', 'Slack', 'Zoom', 'Webex'],
                      },
                      {
                        category: 'Storage',
                        tools: ['SharePoint', 'Box', 'Dropbox', 'Google Drive'],
                      },
                      {
                        category: 'CRM & ERP',
                        tools: ['Salesforce', 'SAP', 'Oracle', 'Microsoft Dynamics'],
                      },
                    ].map((category, index) => (
                      <Card key={index}>
                        <h4 className="font-semibold text-gray-900 mb-3">{category.category}</h4>
                        <div className="flex flex-wrap gap-2">
                          {category.tools.map((tool) => (
                            <Badge key={tool} variant="secondary" size="md">
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <Card className="bg-primary-50 border-primary-100 mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                      <Code className="w-5 h-5 text-primary-600 mr-2" />
                      API Access
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Full REST API access for custom integrations and automation. Build exactly
                      what you need.
                    </p>
                    <div className="bg-white rounded-lg p-3 font-mono text-sm">
                      GET /api/v1/meetings
                      <br />
                      POST /api/v1/documents
                      <br />
                      GET /api/v1/analytics
                    </div>
                    <Button variant="link" className="mt-4 p-0">
                      View API Documentation →
                    </Button>
                  </Card>

                  <Card>
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                      <RefreshCw className="w-5 h-5 text-primary-600 mr-2" />
                      Webhook Support
                    </h4>
                    <p className="text-gray-600">
                      Real-time notifications for meeting events, document changes, and approval
                      workflows.
                    </p>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="mt-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Executive Insights</h3>
                  <p className="text-gray-600 mb-6">
                    Transform governance data into strategic intelligence with advanced analytics
                    and AI-powered insights.
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        icon: TrendingUp,
                        title: 'Board Performance Metrics',
                        description: 'Track attendance, engagement, and decision velocity',
                      },
                      {
                        icon: LineChart,
                        title: 'Meeting Effectiveness',
                        description: 'Analyze meeting efficiency and time allocation',
                      },
                      {
                        icon: Brain,
                        title: 'AI-Powered Trends',
                        description: 'Identify patterns and opportunities in governance data',
                      },
                      {
                        icon: BarChart,
                        title: 'Custom Dashboards',
                        description: 'Build executive views for different stakeholders',
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

                <div>
                  <Card className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
                    <h4 className="text-xl font-bold mb-4">Sample Analytics</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Board Engagement</span>
                          <span>94%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                          <div className="bg-white rounded-full h-2 w-[94%]" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Decision Velocity</span>
                          <span>78%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                          <div className="bg-white rounded-full h-2 w-[78%]" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Meeting Efficiency</span>
                          <span>82%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                          <div className="bg-white rounded-full h-2 w-[82%]" />
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="secondary"
                      className="mt-6 w-full bg-white text-primary-600 hover:bg-gray-100"
                    >
                      View Live Demo
                    </Button>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Management Tab */}
            <TabsContent value="management" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Network,
                    title: 'Multi-entity Management',
                    description:
                      'Centralized governance for parent companies, subsidiaries, and divisions',
                  },
                  {
                    icon: Users,
                    title: 'Role-based Access',
                    description: 'Granular permissions for different user types and committees',
                  },
                  {
                    icon: GitMerge,
                    title: 'Workflow Automation',
                    description: 'Automated approval processes and document routing',
                  },
                  {
                    icon: HardDrive,
                    title: 'Data Retention',
                    description: 'Configurable retention policies and automated archiving',
                  },
                  {
                    icon: Headphones,
                    title: 'Enterprise Support',
                    description: 'Dedicated account manager and 24/7 priority support',
                  },
                  {
                    icon: Calendar,
                    title: 'Meeting Templates',
                    description: 'Standardized meeting formats across the organization',
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Card key={index} className="h-full">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mr-2">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="font-bold text-gray-900">{item.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <Badge variant="primary" className="mb-3 bg-primary-100 text-primary-700">
                Customer Story
              </Badge>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                How Torres Industries scaled governance globally
              </h2>
              <blockquote className="text-gray-600 mb-4 text-sm">
                "EBoard integrated perfectly with our existing tools and scaled across 50+
                subsidiaries worldwide. We've reduced meeting prep time by 70%."
              </blockquote>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 mr-3" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Michael Torres</p>
                  <p className="text-gray-500 text-xs">Corporate Secretary, Torres Industries</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '50+', label: 'Subsidiaries' },
                  { value: '70%', label: 'Time saved' },
                  { value: '100%', label: 'Compliance' },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xl font-bold text-primary-600">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src="/images/case-study-torres.jpg"
                  alt="Torres Industries"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to scale your governance?</h2>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            Join 100+ enterprises that trust EBoard for their most important meetings.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to={ROUTES.DEMO.INDEX}>
              <Button
                size="md"
                variant="secondary"
                className="bg-white text-slate-900 hover:bg-gray-100"
              >
                Book Demo
              </Button>
            </Link>
            <Link to={ROUTES.COMPANY.CONTACT}>
              <Button
                size="md"
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
