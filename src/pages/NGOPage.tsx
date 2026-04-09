import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Heart,
  Users,
  Globe,
  Calendar,
  FileText,
  CheckCircle,
  Star,
  DollarSign,
  Award,
  Target,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ROUTES } from '@/config/routes';

export const NGOPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>NGO & Nonprofit Board Management - EBoard Solutions</title>
        <meta
          name="description"
          content="Cost-effective governance tools for mission-driven organizations. Engage volunteer boards, reduce costs by 50%, and maximize your impact."
        />
        <meta property="og:title" content="NGO & Nonprofit Board Management - EBoard Solutions" />
        <meta
          property="og:description"
          content="Cost-effective governance tools for mission-driven organizations."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-6 pb-12 overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
            

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Cost-effective governance for{' '}
                <span className="text-red-600">mission-driven organizations</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-xl">
                Maximize your impact with affordable, easy-to-use governance tools. Reduce costs by 50% while improving volunteer engagement.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Link to={ROUTES.DEMO.INDEX}>
                  <Button size="lg" className="bg-red-600 hover:bg-red-700">
                    Schedule Demo
                  </Button>
                </Link>
                <Link to={ROUTES.COMPANY.CONTACT}>
                  <Button size="lg" variant="outline">
                    Contact Sales
                  </Button>
                </Link>
              </div>

              {/* Quick Impact Stats */}
              <div className="flex items-center gap-6 pt-4 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">300+</div>
                  <div className="text-xs text-gray-500">Nonprofits</div>
                </div>
                <div className="h-8 w-px bg-gray-200" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">50%</div>
                  <div className="text-xs text-gray-500">Cost Savings</div>
                </div>
                <div className="h-8 w-px bg-gray-200" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">40K+</div>
                  <div className="text-xs text-gray-500">Volunteers</div>
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
                  src="/images/solutions/ngo-hero.jpg"
                  alt="NGO Board Meeting"
                  className="w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-transparent" />
              </div>

              {/* Floating Impact Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-2xl p-4 border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Average cost reduction</p>
                    <p className="text-xl font-bold text-red-600">50%</p>
                  </div>
                </div>
              </motion.div>

              {/* Trust Badge */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg px-4 py-2 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span className="text-sm font-medium">Nonprofit Pricing</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/*<section className="py-16 bg-red-600 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '50%', label: 'Cost Reduction' },
              { value: '300+', label: 'Nonprofits' },
              { value: '40K+', label: 'Volunteers' },
              { value: '90%', label: 'Engagement Rate' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-red-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Challenges Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <Badge variant="primary" className="mb-3 bg-red-100 text-red-700">
              Challenges
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Unique challenges for nonprofit boards
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: 'Volunteer board members',
                description: 'Limited time and varying technical skills among volunteer directors',
              },
              {
                icon: DollarSign,
                title: 'Tight budgets',
                description: 'Need for cost-effective solutions that maximize every dollar',
              },
              {
                icon: Globe,
                title: 'Global reach',
                description: 'Board members spread across different countries and time zones',
              },
              {
                icon: Heart,
                title: 'Donor transparency',
                description: 'Need to demonstrate impact and maintain donor trust',
              },
              {
                icon: FileText,
                title: 'Grant compliance',
                description: 'Managing documentation for multiple grants and funders',
              },
              {
                icon: Calendar,
                title: 'Limited meeting time',
                description: 'Maximizing productivity in infrequent board meetings',
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
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-4">
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
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <Badge variant="primary" className="mb-3 bg-red-100 text-red-700">
                Solution
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                How EBoard empowers nonprofit governance
              </h2>

              <div className="space-y-4">
                {[
                  {
                    title: 'Volunteer-friendly design',
                    description:
                      'Intuitive interface—board members start immediately without training',
                  },
                  {
                    title: 'Nonprofit pricing',
                    description: 'Special pricing plans designed for limited budgets',
                  },
                  {
                    title: 'Global accessibility',
                    description: 'Cloud-based platform accessible from anywhere, on any device',
                  },
                  {
                    title: 'Donor transparency',
                    description: 'Tools to demonstrate effective governance to donors',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src="/images/solutions/ngo-solution.jpg"
                  alt="Nonprofit Board Solution"
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
            <Badge variant="primary" className="mb-3 bg-red-100 text-red-700">
              Features
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Everything your nonprofit needs
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Calendar,
                title: 'Simple Meeting Management',
                description:
                  'Easy scheduling, agenda building, and minute-taking for volunteer boards',
              },
              {
                icon: Users,
                title: 'Volunteer Engagement',
                description: 'Tools to keep board members engaged and informed between meetings',
              },
              {
                icon: Globe,
                title: 'Remote Participation',
                description: 'Full participation from anywhere with mobile-friendly access',
              },
              {
                icon: FileText,
                title: 'Document Hub',
                description: 'Centralized storage for policies, minutes, and grant documents',
              },
              {
                icon: Heart,
                title: 'Donor Reports',
                description: 'Generate impact reports to share with donors and stakeholders',
              },
              {
                icon: Award,
                title: 'Grant Management',
                description: 'Track grant requirements, deadlines, and reporting',
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
                  <Card variant="elevated" className="h-full group hover:border-red-200">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-4 group-hover:bg-red-600 group-hover:text-white transition">
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
      <section className="py-12 bg-red-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-lg md:text-xl font-medium mb-4">
              "EBoard's nonprofit pricing made professional governance tools accessible to our
              volunteer board. Best investment we've made."
            </blockquote>
            <div>
              <p className="font-semibold">Margaret Okonkwo</p>
              <p className="text-red-200 text-sm">Executive Director, Global Health Initiative</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-br from-red-600 to-red-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to maximize your impact?</h2>
          <p className="text-red-100 mb-6 max-w-xl mx-auto">
            Join 300+ nonprofits using EBoard to streamline governance.
          </p>
          <Link to={ROUTES.DEMO.INDEX}>
            <Button
              size="md"
              variant="secondary"
              className="bg-white text-red-600 hover:bg-gray-100"
            >
              Schedule Demo
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};
