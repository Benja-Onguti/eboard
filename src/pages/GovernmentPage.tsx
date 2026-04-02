import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Building2,
  Shield,
  FileText,
  Users,
  Globe,
  Scale,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Lock,
  Eye,
  FileCheck,
  Landmark,
  Mail,
  Phone,
  MapPin,
  Download,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ROUTES } from '@/config/routes';

export const GovernmentPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Government Board Management - EBoard Solutions</title>
        <meta
          name="description"
          content="Secure, transparent governance for public sector organizations. Achieve 100% FOI compliance with EBoard's government-grade platform."
        />
        <meta property="og:title" content="Government Board Management - EBoard Solutions" />
        <meta
          property="og:description"
          content="Secure, transparent governance for public sector organizations."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-8 pb-20s bg-gradient-to-b from-purple-50 to-white overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="primary" className="mb-4 bg-purple-100 text-purple-700">
                For Government & Public Sector
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Secure, transparent governance for{' '}
                <span className="text-purple-600">public sector</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Meet compliance requirements while improving efficiency and transparency. Achieve
                100% FOI compliance with half the administrative workload.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link to={ROUTES.DEMO.INDEX}>
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                    Schedule Demo
                  </Button>
                </Link>
                <Link to={ROUTES.COMPANY.CONTACT}>
                  <Button size="lg" variant="outline">
                    Contact Government Team
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-purple-400 border-2 border-white"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-purple-600" />
                    <span className="text-sm font-medium text-gray-900">FedRAMP Certified</span>
                  </div>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src="/images/solutions/government-hero.jpg"
                  alt="Government Board Meeting"
                  className="w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 to-transparent" />
              </div>

              {/* Floating Compliance Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4"
              >
                <div className="flex items-center">
                  <Award className="w-8 h-8 text-purple-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Compliance</p>
                    <p className="text-lg font-bold text-purple-600">ISO 27001</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/*<section className="py-16 bg-purple-600 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '100%', label: 'FOI Compliance' },
              { value: '150+', label: 'Agencies' },
              { value: '30K+', label: 'Officials' },
              { value: '50%', label: 'Cost Reduction' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-purple-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Compliance Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="primary" className="mb-4 bg-purple-100 text-purple-700">
              Compliance
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for government compliance
            </h2>
            <p className="text-xl text-gray-600">
              Meet the strictest regulatory requirements with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: FileCheck,
                title: 'FOI Compliance',
                description: 'Automated record keeping and public records management',
                badge: 'FOI, FOIA',
              },
              {
                icon: Lock,
                title: 'Security Certifications',
                description: 'ISO 27001, SOC 2, FedRAMP compliant infrastructure',
                badge: 'Certified',
              },
              {
                icon: Eye,
                title: 'Public Transparency',
                description: 'Automated public meeting portals and archives',
                badge: 'Transparent',
              },
              {
                icon: Scale,
                title: 'Legal Compliance',
                description: 'Meeting accessibility and open meeting laws',
                badge: 'Compliant',
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600">
                        <Icon className="w-6 h-6" />
                      </div>
                      <Badge variant="primary" size="sm">
                        {item.badge}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Compliance Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 py-8 border-t border-gray-200">
            {['ISO 27001', 'SOC 2', 'GDPR', 'FedRAMP', 'CCPA'].map((cert) => (
              <div key={cert} className="flex items-center">
                <Shield className="w-4 h-4 text-purple-600 mr-2" />
                <span className="text-sm font-medium text-gray-700">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOI Compliance Deep Dive */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="primary" className="mb-4 bg-purple-100 text-purple-700">
                FOI Compliance
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Automate FOI compliance with confidence
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Never worry about FOI requests again. Our platform automatically manages public
                records while protecting sensitive information.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: 'Automated Record Keeping',
                    description:
                      'Every meeting, document, and decision is automatically archived with complete audit trails',
                  },
                  {
                    title: 'Smart Redaction',
                    description:
                      'AI-powered tools automatically redact sensitive information before public release',
                  },
                  {
                    title: 'Public Portals',
                    description:
                      'One-click publishing to public-facing archives with customizable branding',
                  },
                  {
                    title: 'Request Management',
                    description: 'Streamlined workflow for handling and tracking FOI requests',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircle className="w-6 h-6 text-purple-600 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 bg-white rounded-xl p-6 border border-purple-100">
                <div className="flex items-center mb-4">
                  <Clock className="w-5 h-5 text-purple-600 mr-2" />
                  <span className="font-semibold text-gray-900">Average FOI response time</span>
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-2">2.5 days</div>
                <p className="text-sm text-gray-500">Industry average: 15-30 days</p>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src="/images/solutions/foi-dashboard.jpg"
                  alt="FOI Compliance Dashboard"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="primary" className="mb-4 bg-purple-100 text-purple-700">
              Features
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Government-grade governance tools
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to manage public sector boards efficiently and transparently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Secure Document Management',
                description:
                  'AES-256 encrypted storage with granular access controls and audit trails',
              },
              {
                icon: Globe,
                title: 'Public Meeting Portals',
                description:
                  'Automated public archives with customizable branding and accessibility features',
              },
              {
                icon: FileText,
                title: 'FOI-Ready Records',
                description:
                  'Complete audit trails and automated redaction for public records requests',
              },
              {
                icon: Users,
                title: 'Multi-Agency Management',
                description: 'Manage multiple councils, committees, and boards from one platform',
              },
              {
                icon: Landmark,
                title: 'Public Meeting Support',
                description: 'Live streaming, public comment management, and accessibility tools',
              },
              {
                icon: Scale,
                title: 'Compliance Automation',
                description: 'Automated compliance with open meeting laws and public records acts',
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card variant="elevated" className="h-full group hover:border-purple-200">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-4 group-hover:bg-purple-600 group-hover:text-white transition">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-purple-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium mb-8">
              "EBoard helped us achieve 100% FOI compliance while reducing administrative workload
              by 50%. The public meeting sites have transformed how we engage with our community."
            </blockquote>
            <div>
              <p className="text-xl font-semibold">James Rodriguez</p>
              <p className="text-purple-200">City Clerk, City of Riverside</p>
            </div>
            <div className="mt-8">
              <Link
                to="/case-studies/city-of-riverside"
                className="inline-flex items-center text-white hover:underline"
              >
                Read full case study
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Security Certifications */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="container-custom">
          <p className="text-center text-gray-500 text-sm font-medium uppercase tracking-wider mb-8">
            Certified and compliant with global standards
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {['ISO 27001', 'SOC 2 Type II', 'GDPR', 'FedRAMP', 'CCPA', 'HIPAA'].map((cert) => (
              <div key={cert} className="flex flex-col items-center">
                <Shield className="w-8 h-8 text-purple-600 mb-2" />
                <span className="text-sm font-medium text-gray-700">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to transform your public sector governance?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join 150+ government agencies already using EBoard to streamline operations and ensure
            compliance.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to={ROUTES.DEMO.INDEX}>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Schedule Demo
              </Button>
            </Link>
            <Link to={ROUTES.COMPANY.CONTACT}>
              <Button size="lg" variant="outline">
                Contact Government Team
              </Button>
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 justify-center text-sm text-gray-500">
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 text-purple-600 mr-2" />
              FedRAMP certified
            </span>
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 text-purple-600 mr-2" />
              Government pricing available
            </span>
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 text-purple-600 mr-2" />
              Dedicated support team
            </span>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Resources for government governance
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Download,
                title: 'FOI Compliance Guide',
                description: 'Best practices for public records management',
                link: '/resources/guides/foi-compliance',
              },
              {
                icon: Shield,
                title: 'Security Whitepaper',
                description: 'Government-grade security and compliance',
                link: '/resources/whitepapers/security',
              },
              {
                icon: Users,
                title: 'Public Meeting Best Practices',
                description: 'Engaging citizens in digital governance',
                link: '/resources/guides/public-meetings',
              },
            ].map((resource, index) => {
              const Icon = resource.icon;
              return (
                <Link key={index} to={resource.link}>
                  <Card className="h-full hover:border-purple-200">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mr-3">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-semibold text-gray-900">{resource.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600">{resource.description}</p>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
