import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
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
  Download,
  ChevronRight,
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
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
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
      <section className="relative pt-8 pb-20 md:pt-10 md:pb-28 overflow-hidden bg-gradient-to-b from-primary-50 to-white">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="primary" className="mb-4 inline-flex">
                ✨ AI-Powered Governance Platform
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {siteContent.hero.headline}
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">{siteContent.hero.subheadline}</p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Link to={siteContent.hero.ctas.sales.href}>
                  <Button size="lg" variant="outline" rightIcon={<Play className="w-5 h-5" />}>
                    {siteContent.hero.ctas.sales.text}
                  </Button>
                </Link>
                <Link to={siteContent.hero.ctas.trial.href}>
                  <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                    {siteContent.hero.ctas.trial.text}
                  </Button>
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 border-2 border-white"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="ml-2 font-medium text-gray-700">4.9/5</span>
                  </div>
                  <span>Trusted by 2M+ users</span>
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof Stats */}
      <section ref={statsRef} className="py-16 bg-white border-y border-gray-200">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {siteContent.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {statsInView && (
                    <>
                      <CountUp
                        end={typeof stat.value === 'number' ? stat.value : parseInt(stat.value)}
                        duration={2.5}
                      />
                      {stat.suffix && <span>{stat.suffix}</span>}
                    </>
                  )}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features - Updated with new feature set */}
      <section ref={featuresRef} className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="primary" className="mb-4">
              Platform Features
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything you need for modern governance
            </h2>
            <p className="text-xl text-gray-600">
              From AI-powered tools to enterprise-grade security, EBoard has you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Meeting & Agenda Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card variant="elevated" className="h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white mb-4">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Meeting & Agenda Management
                </h3>
                <p className="text-gray-600 mb-4">Streamline your entire meeting workflow</p>
                <ul className="space-y-2">
                  <li className="text-sm text-gray-500 flex items-center">
                    <Layout className="w-4 h-4 text-blue-500 mr-2" />
                    Agenda Builder – Drag-and-drop tool
                  </li>
                  <li className="text-sm text-gray-500 flex items-center">
                    <PenTool className="w-4 h-4 text-blue-500 mr-2" />
                    Minute Builder – Track decisions
                  </li>
                  <li className="text-sm text-gray-500 flex items-center">
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
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card variant="elevated" className="h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-teal-600 rounded-xl flex items-center justify-center text-white mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Committee Management</h3>
                <p className="text-gray-600 mb-4">Organize all your committees efficiently</p>
                <ul className="space-y-2">
                  <li className="text-sm text-gray-500 flex items-center">
                    <Users className="w-4 h-4 text-green-500 mr-2" />
                    Unlimited committees
                  </li>
                  <li className="text-sm text-gray-500 flex items-center">
                    <Database className="w-4 h-4 text-green-500 mr-2" />
                    Dedicated committee libraries
                  </li>
                  <li className="text-sm text-gray-500 flex items-center">
                    <FileText className="w-4 h-4 text-green-500 mr-2" />
                    Membership register & history
                  </li>
                </ul>
              </Card>
            </motion.div>

            {/* AI Capabilities Feature */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card variant="elevated" className="h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white mb-4">
                  <Brain className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">AI Capabilities</h3>
                <p className="text-gray-600 mb-4">Powered by Google Gemini and Google Cloud</p>
                <ul className="space-y-2">
                  <li className="text-sm text-gray-500 flex items-center">
                    <Mic className="w-4 h-4 text-purple-500 mr-2" />
                    Speech to Text – Transcribe meetings
                  </li>
                  <li className="text-sm text-gray-500 flex items-center">
                    <Volume2 className="w-4 h-4 text-purple-500 mr-2" />
                    Text to Speech – Listen on the go
                  </li>
                  <li className="text-sm text-gray-500 flex items-center">
                    <Brain className="w-4 h-4 text-purple-500 mr-2" />
                    AI Summarisation – 100+ page reports
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
                <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center text-white mb-4">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Document & Pack Features</h3>
                <p className="text-gray-600 mb-4">Complete document management solution</p>
                <ul className="space-y-2">
                  <li className="text-sm text-gray-500 flex items-center">
                    <FileCheck className="w-4 h-4 text-orange-500 mr-2" />
                    All file types supported
                  </li>
                  <li className="text-sm text-gray-500 flex items-center">
                    <PenTool className="w-4 h-4 text-orange-500 mr-2" />
                    Document signing
                  </li>
                  <li className="text-sm text-gray-500 flex items-center">
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
                <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-gray-600 rounded-xl flex items-center justify-center text-white mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Security</h3>
                <p className="text-gray-600 mb-4">Military-grade protection for your data</p>
                <ul className="space-y-2">
                  <li className="text-sm text-gray-500 flex items-center">
                    <Lock className="w-4 h-4 text-slate-500 mr-2" />
                    Military-grade encryption
                  </li>
                  <li className="text-sm text-gray-500 flex items-center">
                    <Fingerprint className="w-4 h-4 text-slate-500 mr-2" />
                    Two-factor authentication (2FA)
                  </li>
                  <li className="text-sm text-gray-500 flex items-center">
                    <Activity className="w-4 h-4 text-slate-500 mr-2" />
                    Activity tracking & audit logs
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
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center text-white mb-4">
                  <Settings className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Integrations & Support</h3>
                <p className="text-gray-600 mb-4">Connect with your favorite tools</p>
                <ul className="space-y-2">
                  <li className="text-sm text-gray-500 flex items-center">
                    <Plug className="w-4 h-4 text-cyan-500 mr-2" />
                    SharePoint, email, calendar sync
                  </li>
                  <li className="text-sm text-gray-500 flex items-center">
                    <Headphones className="w-4 h-4 text-cyan-500 mr-2" />
                    Unlimited training & support
                  </li>
                  <li className="text-sm text-gray-500 flex items-center">
                    <Cloud className="w-4 h-4 text-cyan-500 mr-2" />
                    Self-hosted or cloud-hosted
                  </li>
                </ul>
              </Card>
            </motion.div>
          </div>

          <div className="text-center">
            <Link to={siteContent.coreFeatures.cta.href}>
              <Button size="lg" variant="outline" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Explore All Features
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Deep Dives (Alternating) - Updated with new features */}
      {siteContent.featureDeepDives.map((feature, index) => (
        <section
          key={feature.id}
          className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="container-custom">
            <div
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                <div className="max-w-xl">
                  <Badge variant="primary" className="mb-4">
                    {feature.id.replace('-', ' ')}
                  </Badge>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Pain Point</h3>
                  <p className="text-xl text-gray-600 mb-6">{feature.painPoint}</p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Solution</h3>
                  <p className="text-xl text-primary-600 font-semibold mb-6">{feature.solution}</p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Outcome</h3>
                  <p className="text-xl text-gray-600 mb-6">{feature.outcome}</p>

                  <ul className="space-y-3 mb-8">
                    {feature.capabilities.map((capability, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mt-0.5 mr-3">
                          <span className="text-sm font-bold">✓</span>
                        </span>
                        <span className="text-gray-700">{capability}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to={feature.cta.href}>
                    <Button variant="outline" rightIcon={<ChevronRight className="w-4 h-4" />}>
                      {feature.cta.text}
                    </Button>
                  </Link>
                </div>
              </div>

              <div className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                <div className="relative rounded-2xl shadow-2xl overflow-hidden">
                  <img src={feature.image} alt={feature.id} className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* User Role Segmentation */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Designed for every role
            </h2>
            <p className="text-xl text-gray-600">
              Tailored experiences for everyone involved in governance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteContent.userRoles.map((role, index) => {
              const Icon = iconMap[role.icon];
              return (
                <Card key={role.role} variant="elevated" className="h-full">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-4">
                    {Icon && <Icon className="w-6 h-6" />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{role.role}</h3>
                  <p className="text-primary-600 font-medium mb-4">{role.valueProp}</p>
                  <ul className="space-y-2 mb-6">
                    {role.benefits.map((benefit, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="#"
                    className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
                  >
                    {role.cta}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by organizations like yours
            </h2>
            <p className="text-xl text-gray-600">See how EBoard helps boards govern better</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {siteContent.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="elevated" className="h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  <blockquote className="text-gray-700 text-lg mb-6">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">
                        {testimonial.title}, {testimonial.organization}
                      </div>
                    </div>
                    <Link
                      to={testimonial.link}
                      className="text-primary-600 text-sm font-medium hover:text-primary-700"
                    >
                      Read Review →
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results/Metrics */}
      <section className="py-24 bg-primary-600 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-12">
                Real results from real organizations
              </h2>

              <div className="grid grid-cols-2 gap-8">
                {siteContent.results.metrics.map((metric, index) => (
                  <div key={index}>
                    <div className="text-3xl md:text-4xl font-bold mb-2">{metric.value}</div>
                    <div className="text-primary-100">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
                <img
                  src={siteContent.results.videoCaseStudy.thumbnail}
                  alt={siteContent.results.videoCaseStudy.title}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-primary-600 ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="font-semibold">{siteContent.results.videoCaseStudy.title}</div>
                  <div className="text-sm opacity-90">
                    {siteContent.results.videoCaseStudy.duration}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Library */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Resources to help you govern better
            </h2>
            <p className="text-xl text-gray-600">
              Free guides, tools, and insights for modern governance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteContent.resources.map((resource, index) => (
              <Card key={index} variant="elevated" className="h-full">
                <div className="mb-4">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </div>

                <div className="mb-2">
                  <span className="text-xs font-medium text-primary-600 uppercase tracking-wider">
                    {resource.type}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>

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

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {siteContent.finalCTA.headline}
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            {siteContent.finalCTA.subheadline}
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
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

          <div className="flex flex-wrap gap-4 justify-center text-sm text-primary-200">
            {siteContent.finalCTA.trustIndicators.map((indicator, index) => (
              <span key={index} className="flex items-center">
                <span className="w-1.5 h-1.5 bg-primary-300 rounded-full mr-2" />
                {indicator}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
