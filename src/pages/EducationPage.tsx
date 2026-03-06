import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Calendar,
  Shield,
  FileText,
  Users,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  BookOpen,
  Clock,
  Award,
  Mail,
  Phone,
  MapPin,
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
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="primary" className="mb-4 bg-blue-100 text-blue-700">
                For Education
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Streamlined governance for{' '}
                <span className="text-blue-600">educational institutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Empower school boards, university trustees, and academic committees with modern
                governance tools designed specifically for education.
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
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-blue-400 border-2 border-white"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Trusted by 200+ institutions</p>
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
                  src="/images/solutions/education-hero.jpg"
                  alt="Education Board Meeting"
                  className="w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '70%', label: 'Faster meeting prep' },
              { value: '200+', label: 'Institutions' },
              { value: '50K+', label: 'Users' },
              { value: '100%', label: 'FERPA compliant' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="primary" className="mb-4 bg-blue-100 text-blue-700">
              Challenges
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common challenges in education governance
            </h2>
            <p className="text-xl text-gray-600">
              We understand the unique complexities of managing educational boards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
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

      {/* Solution Section */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="primary" className="mb-4 bg-blue-100 text-blue-700">
                Solution
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                How EBoard transforms education governance
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our platform addresses the unique needs of educational boards with features designed
                for academic environments.
              </p>

              <div className="space-y-6">
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
                    <CheckCircle className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl shadow-2xl overflow-hidden">
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
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="primary" className="mb-4 bg-blue-100 text-blue-700">
              Features
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything you need for education governance
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive tools designed for educational institutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition">
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
      <section className="py-24 bg-blue-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium mb-8">
              "EBoard has transformed how our school board operates. What used to take weeks of
              preparation now happens in days. The AI minutes feature alone saves us hours after
              every meeting."
            </blockquote>
            <div>
              <p className="text-xl font-semibold">Dr. Sarah Chen</p>
              <p className="text-blue-200">Board Chair, Lincoln School District</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to transform your education board?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join 200+ educational institutions already using EBoard to streamline governance.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to={ROUTES.DEMO.INDEX}>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Schedule Demo
              </Button>
            </Link>
            <Link to={ROUTES.COMPANY.CONTACT}>
              <Button size="lg" variant="outline">
                Contact Education Team
              </Button>
            </Link>
          </div>
          <div className="mt-8 text-sm text-gray-500">
            <span className="mx-2">✓ No credit card required</span>
            <span className="mx-2">✓ 14-day free trial</span>
            <span className="mx-2">✓ Education pricing available</span>
          </div>
        </div>
      </section>
    </>
  );
};
