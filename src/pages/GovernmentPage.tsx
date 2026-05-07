import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Shield,
  FileText,
  Users,
  Globe,
  Scale,
  CheckCircle,
  Star,
  Award,
  Lock,
  Eye,
  FileCheck,
  ArrowRight,
  Landmark,
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
      <section className="relative min-h-screen flex items-center pt-6 pb-12 overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Secure, transparent governance for{' '}
                <span className="text-primary-600">public sector</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-xl">
                Meet compliance requirements while improving efficiency. Achieve 100% FOI compliance
                with half the administrative workload.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link to={ROUTES.DEMO.INDEX}>
                  <Button size="lg" className="bg-primary-600 hover:bg-primary-700">
                    Book Demo
                  </Button>
                </Link>
                <Link to={ROUTES.COMPANY.CONTACT}>
                  <Button size="lg" variant="outline">
                    Contact Us
                  </Button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="flex items-center gap-6 pt-4 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">150+</div>
                  <div className="text-xs text-gray-500">Agencies</div>
                </div>
                <div className="h-8 w-px bg-gray-200" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">100%</div>
                  <div className="text-xs text-gray-500">FOI Compliance</div>
                </div>
                <div className="h-8 w-px bg-gray-200" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">50%</div>
                  <div className="text-xs text-gray-500">Cost Reduction</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl shadow-2xl overflow-hidden h-[450px]">
                <img
                  src="/images/features/ngo-meeting.jpg"
                  alt="Government Board Meeting"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-transparent" />
              </div>

              {/* Floating Compliance Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-2xl p-4 border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Compliance</p>
                    <p className="text-lg font-bold text-primary-600">ISO 27001</p>
                  </div>
                </div>
              </motion.div>

              {/* FedRAMP Badge */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg px-4 py-2 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span className="text-sm font-medium">FedRAMP Certified</span>
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
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <Badge variant="primary" className="mb-3 bg-primary-100 text-primary-700">
              Compliance
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Built for government compliance
            </h2>
            <p className="text-lg text-gray-600">
              Meet the strictest regulatory requirements with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
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
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                        <Icon className="w-5 h-5" />
                      </div>
                      <Badge variant="primary" size="sm">
                        {item.badge}
                      </Badge>
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Compliance Logos */}
          <div className="flex flex-wrap justify-center items-center gap-6 py-6 border-t border-gray-200">
            {['ISO 27001', 'SOC 2', 'GDPR', 'FedRAMP', 'CCPA'].map((cert) => (
              <div key={cert} className="flex items-center">
                <Shield className="w-4 h-4 text-primary-600 mr-2" />
                <span className="text-sm font-medium text-gray-700">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOI Compliance Deep Dive */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <Badge variant="primary" className="mb-3 bg-primary-100 text-primary-700">
                FOI Compliance
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Automate FOI compliance with confidence
              </h2>
              <p className="text-base text-gray-600 mb-6">
                Never worry about FOI requests again. Our platform automatically manages public
                records while protecting sensitive information.
              </p>

              <div className="space-y-4">
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
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-900 text-sm">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-xl shadow-xl overflow-hidden">
                <img
                  src="/images/solutions/meet1.png"
                  alt="FOI Compliance Dashboard"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <Badge variant="primary" className="mb-3 bg-primary-100 text-primary-700">
              Features
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Government-grade governance tools
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to manage public sector boards efficiently and transparently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
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
                  <Card variant="elevated" className="h-full group hover:border-primary-200">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-3 group-hover:bg-primary-600 group-hover:text-white transition">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-12 bg-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl font-medium mb-6">
              "EBoard helped us achieve 100% FOI compliance while reducing administrative workload
              by 50%. The public meeting sites have transformed how we engage with our community."
            </blockquote>
            <div>
              <p className="text-lg font-semibold">James Rodriguez</p>
              <p className="text-primary-200">City Clerk, City of Riverside</p>
            </div>
            <div className="mt-6">
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
      {/*  <section className="py-10 bg-white border-y border-gray-200">
        <div className="container-custom">
          <p className="text-center text-gray-500 text-xs font-medium uppercase tracking-wider mb-4">
            Certified and compliant with global standards
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {['ISO 27001', 'SOC 2 Type II', 'GDPR', 'FedRAMP', 'CCPA', 'HIPAA'].map((cert) => (
              <div key={cert} className="flex flex-col items-center">
                <Shield className="w-8 h-8 text-primary-600 mb-2" />
                <span className="text-sm font-medium text-gray-700">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-12 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Ready to transform your public sector governance?
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Join 150+ government agencies using EBoard to streamline operations and ensure
            compliance.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to={ROUTES.DEMO.INDEX}>
              <Button size="md" className="bg-primary-600 hover:bg-primary-700">
                Request Demo
              </Button>
            </Link>
            <Link to={ROUTES.COMPANY.CONTACT}>
              <Button size="md" variant="outline">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
