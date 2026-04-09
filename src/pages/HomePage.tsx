import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ArrowRight,
  Play,
  Calendar,
  Shield,
  Brain,
  FileText,
  Briefcase,
  Settings,
  Users,
  Scale,
  PenTool,
  Star,
  Mic,
  Volume2,
  Layout,
  Video,
  Lock,
  Fingerprint,
  Activity,
  Key,
  Plug,
  Headphones,
  Cloud,
  FileCheck,
  Copy,
  Vote,
  Building2,
  GraduationCap,
  Heart,
  Building,
  Zap,
  Database,
  Globe,
  Clock,
  Award,
  CheckCircle,
} from 'lucide-react';
import { siteContent } from '@/data/siteContent';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

// Icon mapping - expanded for new features
const iconMap: Record<string, React.ElementType> = {
  // Original icons
  Calendar,
  Shield,
  Brain,
  FileText,
  Briefcase,
  Settings,
  Users,
  Scale,
  // New AI icons
  Mic,
  Volume2,
  Layout,
  Video,
  // New Security icons
  Lock,
  Fingerprint,
  Activity,
  Key,
  // New Integration icons
  Plug,
  Headphones,
  Cloud,
  // New Document icons
  FileCheck,
  Copy,
  Vote,
  // Industry icons
  Building2,
  GraduationCap,
  Heart,
  Building,
  // Utility icons
  Zap,
  Database,
  Globe,
  Clock,
  Award,
  CheckCircle,
};

export const HomePage: React.FC = () => {
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <Helmet>
        <title>EBoard Solutions - Modern Governance Platform</title>
        <meta name="description" content={siteContent.hero.subheadline} />
        <meta
          name="keywords"
          content="board management, governance, AI meeting minutes, committee management, board portal, secure governance"
        />
        <link rel="canonical" href="https://eboard-solutions.com" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-6 pb-3 overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center max-w-4xl mx-auto"
            >

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {siteContent.hero.headline}
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">{siteContent.hero.subheadline}</p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link to={siteContent.hero.ctas.trial.href}>
                  <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                    {siteContent.hero.ctas.trial.text}
                  </Button>
                </Link>
                <Link to={siteContent.hero.ctas.sales.href}>
                  <Button size="lg" variant="outline" leftIcon={<Play className="w-5 h-5" />}>
                    {siteContent.hero.ctas.sales.text}
                  </Button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="flex items-center gap-6 pt-4 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">2M+</div>
                  <div className="text-xs text-gray-500">Users</div>
                </div>
                <div className="h-8 w-px bg-gray-200" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">500+</div>
                  <div className="text-xs text-gray-500">Organizations</div>
                </div>
                <div className="h-8 w-px bg-gray-200" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">50K+</div>
                  <div className="text-xs text-gray-500">Meetings</div>
                </div>
                <div className="h-8 w-px bg-gray-200" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">99.9%</div>
                  <div className="text-xs text-gray-500">Uptime</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src={siteContent.hero.image}
                  alt="EBoard Dashboard"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/10 to-transparent" />
              </div>

              {/* Floating Stats */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-2xl p-4 border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Meeting prep time</div>
                    <div className="text-xl font-bold text-green-600">-70%</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -top-4 -right-4 bg-white rounded-xl shadow-2xl p-4 border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Board engagement</div>
                    <div className="text-xl font-bold text-primary-600">+45%</div>
                  </div>
                </div>
              </motion.div>

              {/* Trust Badge */}
              <div className="absolute -bottom-8 right-8 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg px-4 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span className="text-sm font-medium">ISO 27001 Certified</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section ref={featuresRef} className="py-6 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-2">
            <Badge variant="primary" className="mb-2">
              Platform Features
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Built for modern governance
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Meeting & Agenda Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card variant="elevated" className="h-full">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white mb-3">
                  <Calendar className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Meeting & Agenda Management
                </h3>
                <ul className="space-y-2">
                  <li className="text-sm text-gray-600 flex items-center">
                    <Layout className="w-4 h-4 text-blue-500 mr-2" />
                    Drag-and-drop agenda builder
                  </li>
                  <li className="text-sm text-gray-600 flex items-center">
                    <PenTool className="w-4 h-4 text-blue-500 mr-2" />
                    Track decisions in minutes
                  </li>
                  <li className="text-sm text-gray-600 flex items-center">
                    <Video className="w-4 h-4 text-blue-500 mr-2" />
                    Zoom & Teams integration
                  </li>
                </ul>
              </Card>
            </motion.div>

            {/* Committee Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card variant="elevated" className="h-full">
                <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-teal-600 rounded-lg flex items-center justify-center text-white mb-3">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Committee Management</h3>
                <ul className="space-y-2">
                  <li className="text-sm text-gray-600 flex items-center">
                    <Users className="w-4 h-4 text-green-500 mr-2" />
                    Unlimited committees
                  </li>
                  <li className="text-sm text-gray-600 flex items-center">
                    <Database className="w-4 h-4 text-green-500 mr-2" />
                    Dedicated libraries
                  </li>
                  <li className="text-sm text-gray-600 flex items-center">
                    <FileText className="w-4 h-4 text-green-500 mr-2" />
                    Membership register
                  </li>
                </ul>
              </Card>
            </motion.div>

            {/* AI Capabilities Feature */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card variant="elevated" className="h-full">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white mb-3">
                  <Brain className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">AI Capabilities</h3>
                <ul className="space-y-2">
                  <li className="text-sm text-gray-600 flex items-center">
                    <Mic className="w-4 h-4 text-purple-500 mr-2" />
                    Speech to text transcription
                  </li>
                  <li className="text-sm text-gray-600 flex items-center">
                    <Volume2 className="w-4 h-4 text-purple-500 mr-2" />
                    Text to speech for accessibility
                  </li>
                  <li className="text-sm text-gray-600 flex items-center">
                    <Brain className="w-4 h-4 text-purple-500 mr-2" />
                    AI summarisation
                  </li>
                </ul>
              </Card>
            </motion.div>

            {/* Document & Pack Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card variant="elevated" className="h-full">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center text-white mb-3">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Document Management</h3>
                <ul className="space-y-2">
                  <li className="text-sm text-gray-600 flex items-center">
                    <FileCheck className="w-4 h-4 text-orange-500 mr-2" />
                    All file types supported
                  </li>
                  <li className="text-sm text-gray-600 flex items-center">
                    <PenTool className="w-4 h-4 text-orange-500 mr-2" />
                    E-signatures
                  </li>
                  <li className="text-sm text-gray-600 flex items-center">
                    <Copy className="w-4 h-4 text-orange-500 mr-2" />
                    Clone any agenda
                  </li>
                </ul>
              </Card>
            </motion.div>

            {/* Security Feature */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card variant="elevated" className="h-full">
                <div className="w-10 h-10 bg-gradient-to-br from-slate-600 to-gray-600 rounded-lg flex items-center justify-center text-white mb-3">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Enterprise Security</h3>
                <ul className="space-y-2">
                  <li className="text-sm text-gray-600 flex items-center">
                    <Lock className="w-4 h-4 text-slate-500 mr-2" />
                    AES-256 encryption
                  </li>
                  <li className="text-sm text-gray-600 flex items-center">
                    <Fingerprint className="w-4 h-4 text-slate-500 mr-2" />
                    Two-factor authentication
                  </li>
                  <li className="text-sm text-gray-600 flex items-center">
                    <Activity className="w-4 h-4 text-slate-500 mr-2" />
                    Complete audit trails
                  </li>
                </ul>
              </Card>
            </motion.div>

            {/* Integrations & Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Card variant="elevated" className="h-full">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-lg flex items-center justify-center text-white mb-3">
                  <Settings className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Integrations</h3>
                <ul className="space-y-2">
                  <li className="text-sm text-gray-600 flex items-center">
                    <Plug className="w-4 h-4 text-cyan-500 mr-2" />
                    SharePoint, email, calendar
                  </li>
                  <li className="text-sm text-gray-600 flex items-center">
                    <Headphones className="w-4 h-4 text-cyan-500 mr-2" />
                    Unlimited training
                  </li>
                  <li className="text-sm text-gray-600 flex items-center">
                    <Cloud className="w-4 h-4 text-cyan-500 mr-2" />
                    Cloud or self-hosted
                  </li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Deep Dives */}
      {siteContent.featureDeepDives.map((feature, index) => (
        <section
          key={feature.id}
          className={`py-10 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="container-custom">
            <div
              className={`grid lg:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                <div className="max-w-xl">
                  <Badge variant="primary" className="mb-3">
                    {feature.id.replace('-', ' ')}
                  </Badge>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.solution}</h3>
                  <p className="text-gray-600 mb-4">{feature.outcome}</p>

                  <ul className="space-y-2 mb-4">
                    {feature.capabilities.map((capability, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700">
                        <span className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-3">
                          <CheckCircle className="w-3 h-3" />
                        </span>
                        {capability}
                      </li>
                    ))}
                  </ul>

                  <Link to={feature.cta.href} className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                    {feature.cta.text}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>

              <div className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                <div className="relative rounded-xl shadow-xl overflow-hidden">
                  <img src={feature.image} alt={feature.id} className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* User Role Segmentation */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Built for every role
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteContent.userRoles.map((role) => {
              const Icon = iconMap[role.icon];
              return (
                <Card key={role.role} variant="elevated" className="h-full">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-3">
                    {Icon && <Icon className="w-5 h-5" />}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{role.role}</h3>
                  <p className="text-primary-600 font-medium text-sm mb-3">{role.valueProp}</p>
                  <ul className="space-y-1">
                    {role.benefits.map((benefit, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              What our clients say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {siteContent.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="elevated" className="h-full">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  <blockquote className="text-gray-700 mb-4">
                    "{testimonial.quote}"
                  </blockquote>

                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">
                      {testimonial.title}, {testimonial.organization}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results/Metrics */}
      {/*
      <section className="py-16 bg-primary-600 text-white">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Proven results
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {siteContent.results.metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-1">{metric.value}</div>
                  <div className="text-primary-100 text-sm">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Resource Library */}
      {/*
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Resources to help you govern better
            </h2>
            <p className="text-lg text-gray-600">
              Free guides, tools, and insights for modern governance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteContent.resources.map((resource, index) => (
              <Card key={index} variant="elevated" className="h-full">
                <div className="mb-3">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>

                <div className="mb-2">
                  <span className="text-xs font-medium text-primary-600 uppercase tracking-wider">
                    {resource.type}
                  </span>
                </div>

                <h3 className="text-base font-bold text-gray-900 mb-1">{resource.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{resource.description}</p>

                {resource.downloadUrl && (
                  <a
                    href={resource.downloadUrl}
                    className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </a>
                )}

                {resource.link && (
                  <Link
                    to={resource.link}
                    className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {siteContent.finalCTA.headline}
          </h2>
          <p className="text-lg text-primary-100 mb-6 max-w-2xl mx-auto">
            {siteContent.finalCTA.subheadline}
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            {siteContent.finalCTA.ctas.map((cta, index) => (
              <Link key={index} to={cta.href}>
                <Button
                  size="lg"
                  variant={cta.primary ? 'secondary' : 'outline'}
                  className={
                    cta.primary
                      ? 'bg-white text-primary-600 hover:bg-gray-100'
                      : 'border-white text-white hover:bg-white/10'
                  }
                >
                  {cta.text}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
