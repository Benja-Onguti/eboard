import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEOHead } from '@/components/seo/SEOHead';
import { getSeoConfig, defaultStructuredData } from '@/config/seoConfig';
import {
  Shield,
  Lock,
  FileText,
  CheckCircle,
  ArrowRight,
  Award,
  Globe,
  UserCheck,
  Database,
  Fingerprint,
  AlertTriangle,
  BadgeCheck,
  Star,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ROUTES } from '@/config/routes';

export const SecurityPage: React.FC = () => {
  const seo = getSeoConfig('security');
  const structuredData = defaultStructuredData;

  return (
    <>
      <SEOHead seo={seo} structuredData={structuredData} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-6 pb-12 overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-pattern" />
        </div>
        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
                Enterprise security for <span className="text-primary-600">board documents</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                AES-256 encryption, zero-trust architecture, and comprehensive compliance
                certifications protect your most sensitive board materials.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link to={ROUTES.DEMO.INDEX}>
                  <Button
                    size="lg"
                    className="bg-primary-600 hover:bg-primary-700 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    Book Demo
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>

                <Link to={ROUTES.COMPANY.CONTACT}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    Contact Us
                    <ArrowRight className="w-4 h-4 mr-2" />
                  </Button>
                </Link>
              </div>

              {/* Key Certifications */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <BadgeCheck className="w-5 h-5 text-primary-600" />
                <span className="text-sm font-medium text-gray-700">ISO 27001</span>
                <BadgeCheck className="w-5 h-5 text-primary-600" />
                <span className="text-sm font-medium text-gray-700">SOC 2 Type II</span>
                <BadgeCheck className="w-5 h-5 text-primary-600" />
                <span className="text-sm font-medium text-gray-700">GDPR</span>
                <BadgeCheck className="w-5 h-5 text-primary-600" />
                <span className="text-sm font-medium text-gray-700">HIPAA</span>
              </div>

              {/* Trust Stats */}
              <div className="grid grid-cols-4 gap-4 pt-6 border-t border-gray-200">
                <div>
                  <p className="text-2xl font-bold text-primary-600">0</p>
                  <p className="text-xs text-gray-600">Breaches</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary-600">AES-256</p>
                  <p className="text-xs text-gray-600">Encryption</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary-600">7 Years</p>
                  <p className="text-xs text-gray-600">Audit Logs</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary-600">99.99%</p>
                  <p className="text-xs text-gray-600">Uptime</p>
                </div>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative rounded-2xl shadow-2xl overflow-hidden border border-gray-700 bg-slate-800">
                <img
                  src={`${import.meta.env.BASE_URL}images/features/security.png`}
                  alt="Security Dashboard"
                  className="w-full h-auto"
                  onError={(e) => {
                    e.currentTarget.src =
                      'https://placehold.co/600x400/1e293b/3b82f6?text=Security+Dashboard';
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge
              variant="primary"
              className="mb-4 bg-primary-100 text-primary-700 border-primary-200"
            >
              Security Features
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Multi-layer protection
            </h2>
            <p className="text-xl text-gray-600">
              Enterprise-grade security at every layer of your board documents.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Lock,
                title: 'AES-256 Encryption',
                description: 'Military-grade encryption for all data at rest and in transit.',
                details: [
                  'TLS 1.3 for data in transit',
                  'Hardware Security Modules',
                  'Per-tenant encryption keys',
                  '90-day key rotation',
                ],
              },
              {
                icon: UserCheck,
                title: 'Access Control',
                description: 'Role-based permissions with document-level controls.',
                details: [
                  'Custom permission levels',
                  'Time-limited access',
                  'IP whitelisting',
                  'Geographic restrictions',
                ],
              },
              {
                icon: Fingerprint,
                title: 'Multi-Factor Auth',
                description: 'Additional layer of security for user authentication.',
                details: [
                  'Authenticator app support',
                  'SMS/Email verification',
                  'Hardware tokens',
                  'Conditional access policies',
                ],
              },
              {
                icon: FileText,
                title: 'Audit Trails',
                description: 'Complete logging of all document activities.',
                details: [
                  '7-year retention',
                  'Tamper-proof logs',
                  'Exportable reports',
                  'Real-time monitoring',
                ],
              },
              {
                icon: Database,
                title: 'Secure Data Centers',
                description: 'SOC 3 certified data centers with 24/7 security.',
                details: [
                  'Geographic redundancy',
                  'Daily backups',
                  'Disaster recovery',
                  'Environmental controls',
                ],
              },
              {
                icon: AlertTriangle,
                title: 'Threat Detection',
                description: 'AI-powered monitoring and automated response.',
                details: [
                  'Real-time monitoring',
                  'Behavioral analytics',
                  'Automated response',
                  'SIEM integration',
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
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                    {feature.details && (
                      <ul className="mt-4 space-y-2">
                        {feature.details.map((detail, i) => (
                          <li key={i} className="text-sm text-gray-500 flex items-center">
                            <CheckCircle className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge
              variant="primary"
              className="mb-4 bg-primary-100 text-primary-700 border-primary-200"
            >
              Certifications
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Global compliance</h2>
            <p className="text-xl text-gray-600">
              We maintain the highest security certifications audited by independent third parties.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <Award className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">ISO 27001:2022</h3>
              <p className="text-gray-600 text-sm mb-3">
                Information Security Management System certified.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Annual surveillance audits</li>
                <li>• 114 control requirements</li>
              </ul>
            </Card>
            <Card className="p-6">
              <Shield className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">SOC 2 Type II</h3>
              <p className="text-gray-600 text-sm mb-3">Security and availability standards.</p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Annual independent audit</li>
                <li>• Trust Services Criteria</li>
              </ul>
            </Card>
            <Card className="p-6">
              <Globe className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">GDPR Compliant</h3>
              <p className="text-gray-600 text-sm mb-3">European data protection regulation.</p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Data processing agreements</li>
                <li>• EU data center options</li>
              </ul>
            </Card>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {['HIPAA', 'FedRAMP', 'PCI DSS', 'CCPA', 'NIST 800-53'].map((cert) => (
              <Badge key={cert} variant="secondary" className="bg-white">
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-16 bg-white">
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
                Global secure infrastructure
              </h2>
              <p className="text-gray-600 mb-6">
                Your data is protected across multiple geographic regions with automatic failover
                and 24/7 monitoring.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                  SOC 3 Type II certified
                </div>
                <div className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                  Geographic redundancy
                </div>
                <div className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                  99.99% uptime SLA
                </div>
                <div className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                  Automated daily backups
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Security Features</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  '24/7 security monitoring',
                  'DDoS protection',
                  'Network segmentation',
                  'Intrusion detection',
                ].map((item) => (
                  <div key={item} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-primary-500 mr-2" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-gray-50">
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
                "EBoard's security gave our compliance team complete confidence. The audit trails
                and access controls are exactly what we needed. We've reduced audit time by 60%."
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 mr-4" />
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Michael Torres</p>
                  <p className="text-sm text-gray-500">Corporate Secretary, Torres Industries</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge
              variant="primary"
              className="mb-4 bg-primary-100 text-primary-700 border-primary-200"
            >
              FAQ
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Common questions</h2>
          </div>

          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              {
                q: 'What encryption do you use?',
                a: 'AES-256 for data at rest and TLS 1.3 for data in transit. Keys managed via Hardware Security Modules (HSM).',
              },
              {
                q: 'Where is my data stored?',
                a: 'Choose from data centers in North America, Europe, or Asia Pacific. All SOC 3 Type II certified.',
              },
              {
                q: 'How long are audit logs retained?',
                a: '7 years with tamper-proof logging for regulatory compliance.',
              },
              {
                q: 'Can I control document access?',
                a: 'Yes, granular permissions at folder, document, and page level with time-limited access.',
              },
              {
                q: 'Do you undergo third-party audits?',
                a: 'Yes, annual ISO 27001 and SOC 2 Type II audits with quarterly penetration testing.',
              },
              {
                q: 'What happens in a security incident?',
                a: 'Comprehensive incident response plan with 72-hour customer notification per GDPR requirements.',
              },
            ].map((faq, index) => (
              <Card key={index} className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to secure your board documents?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            See how EBoard protects sensitive board materials with enterprise-grade security.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
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
