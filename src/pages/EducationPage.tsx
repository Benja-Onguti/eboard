import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Shield,
  FileText,
  Users,
  Globe,
  CheckCircle,
  Star,
  Clock,
  Award,

} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ROUTES } from '@/config/routes';

export const EducationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Education Board Management - EBoard Solutions</title>
        <meta
          name="description"
          content="Streamline school board and university trustee governance with EBoard's education-focused platform. Reduce meeting prep time by 70%."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-6 pb-12 overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
             

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Streamlined governance for{' '}
                <span className="text-blue-600">educational institutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-xl">
                Empower school boards, university trustees, and academic committees with modern governance tools designed specifically for education.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Link to={ROUTES.DEMO.INDEX}>
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Schedule Demo
                  </Button>
                </Link>
                <Link to={ROUTES.COMPANY.CONTACT}>
                  <Button size="lg" variant="outline">
                    Contact Sales
                  </Button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="flex items-center gap-6 pt-4 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">200+</div>
                  <div className="text-xs text-gray-500">Institutions</div>
                </div>
                <div className="h-8 w-px bg-gray-200" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">70%</div>
                  <div className="text-xs text-gray-500">Time Saved</div>
                </div>
                <div className="h-8 w-px bg-gray-200" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">98%</div>
                  <div className="text-xs text-gray-500">Satisfaction</div>
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
                  src="/images/solutions/education-hero.jpg"
                  alt="Education Board Meeting"
                  className="w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
              </div>

              {/* FERPA Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-2xl p-4 border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Compliance</p>
                    <p className="text-lg font-bold text-blue-600">FERPA</p>
                  </div>
                </div>
              </motion.div>

              {/* Trust Badge */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg px-4 py-2 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span className="text-sm font-medium">50K+ Users</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <Badge variant="primary" className="mb-3 bg-blue-100 text-blue-700">
              Challenges
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Common challenges in education governance
            </h2>
            <p className="text-lg text-gray-600">
              We understand the unique complexities of managing educational boards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: Calendar,
                title: 'Scheduling conflicts',
                description:
                  'Coordinating busy faculty, administrators, and trustees across multiple campuses',
              },
              {
                icon: Shield,
                title: 'Compliance requirements',
                description: 'Managing accreditation, FERPA, and state education regulations',
              },
              {
                icon: Users,
                title: 'Member engagement',
                description: 'Keeping board members engaged with varying technical expertise',
              },
              {
                icon: FileText,
                title: 'Document management',
                description: 'Organizing policies, minutes, and reports across years',
              },
              {
                icon: Globe,
                title: 'Public transparency',
                description: 'Maintaining transparency with parents and community stakeholders',
              },
              {
                icon: Clock,
                title: 'Time constraints',
                description: 'Limited time for meeting preparation and follow-up',
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
                  <Card className="h-full">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-1">{challenge.title}</h3>
                    <p className="text-gray-600 text-sm">{challenge.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <Badge variant="primary" className="mb-3 bg-blue-100 text-blue-700">
                Solution
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                How EBoard transforms education governance
              </h2>
              <p className="text-base text-gray-600 mb-5">
                Our platform addresses the unique needs of educational boards with features designed
                for academic environments.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: 'Multi-campus coordination',
                    description:
                      'Seamlessly manage boards across multiple campuses, districts, or universities',
                  },
                  {
                    title: 'FERPA-compliant security',
                    description:
                      'Student data protection with granular access controls and audit trails',
                  },
                  {
                    title: 'Academic calendar integration',
                    description:
                      'Sync with school calendars and schedule meetings around academic terms',
                  },
                  {
                    title: 'Public meeting portals',
                    description:
                      'Transparent public archives for community engagement and accountability',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
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
                  src="/images/solutions/education-solution.jpg"
                  alt="EBoard Education Solution"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <Badge variant="primary" className="mb-3 bg-blue-100 text-blue-700">
              Features
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Everything you need for education governance
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive tools designed for educational institutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: Calendar,
                title: 'Meeting Management',
                description: 'Schedule meetings around academic calendars with automated reminders',
              },
              {
                icon: FileText,
                title: 'Document Repository',
                description:
                  'Centralized storage for policies, minutes, and reports with version control',
              },
              {
                icon: Shield,
                title: 'FERPA Compliance',
                description: 'Student data protection with role-based access and audit trails',
              },
              {
                icon: Users,
                title: 'Committee Management',
                description: 'Manage sub-committees, task forces, and working groups',
              },
              {
                icon: Globe,
                title: 'Public Portals',
                description: 'Transparent public meeting archives for community engagement',
              },
              {
                icon: Award,
                title: 'Accreditation Support',
                description: 'Organize documentation for accreditation reviews and compliance',
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
                  <Card variant="elevated" className="h-full group hover:border-blue-200">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-3 group-hover:bg-blue-600 group-hover:text-white transition">
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
      <section className="py-12 bg-blue-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl font-medium mb-6">
              "EBoard has transformed how our school board operates. What used to take weeks of
              preparation now happens in days. The AI minutes feature alone saves us hours after
              every meeting."
            </blockquote>
            <div>
              <p className="text-lg font-semibold">Dr. Sarah Chen</p>
              <p className="text-blue-200">Board Chair, Lincoln School District</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Ready to transform your education board?
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Join 200+ educational institutions already using EBoard to streamline governance.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to={ROUTES.DEMO.INDEX}>
              <Button size="md" className="bg-blue-600 hover:bg-blue-700">
                Schedule Demo
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
