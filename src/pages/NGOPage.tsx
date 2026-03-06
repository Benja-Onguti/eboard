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
  Shield,
  CheckCircle,
  ArrowRight,
  Star,
  DollarSign,
  //HandHeart,
  Leaf,
  Mail,
  Phone,
  MapPin,
  Download,
  Gift,
  Target,
  Award,
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
      <section className="pt-32 pb-20 bg-gradient-to-b from-red-50 to-white overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="primary" className="mb-4 bg-red-100 text-red-700">
                For NGOs & Nonprofits
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Cost-effective governance for{' '}
                <span className="text-red-600">mission-driven organizations</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Maximize your impact with affordable, easy-to-use governance tools designed for
                nonprofit boards and volunteer members. Reduce costs by 50% while improving
                engagement.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link to={ROUTES.DEMO.INDEX}>
                  <Button size="lg" className="bg-red-600 hover:bg-red-700">
                    Schedule Demo
                  </Button>
                </Link>
                <Link to={ROUTES.COMPANY.CONTACT}>
                  <Button size="lg" variant="outline">
                    Contact Nonprofit Team
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-red-400 border-2 border-white"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Gift className="w-5 h-5 text-red-600" />
                    <span className="text-sm font-medium text-gray-900">
                      Nonprofit pricing available
                    </span>
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
                  src="/images/solutions/ngo-hero.jpg"
                  alt="NGO Board Meeting"
                  className="w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-red-600/10 to-transparent" />
              </div>

              {/* Floating Impact Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4"
              >
                <div className="flex items-center">
                  <Target className="w-8 h-8 text-red-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Average cost reduction</p>
                    <p className="text-lg font-bold text-red-600">50%</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-red-600 text-white">
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

      {/* Challenges Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="primary" className="mb-4 bg-red-100 text-red-700">
              Challenges
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Unique challenges for nonprofit boards
            </h2>
            <p className="text-xl text-gray-600">
              We understand the constraints and needs of mission-driven organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="primary" className="mb-4 bg-red-100 text-red-700">
                Solution
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                How EBoard empowers nonprofit governance
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our platform is designed with nonprofit needs in mind—affordable, intuitive, and
                powerful enough to engage volunteer boards effectively.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: 'Volunteer-friendly design',
                    description:
                      'Intuitive interface that requires no training—board members can start using it immediately',
                  },
                  {
                    title: 'Nonprofit pricing',
                    description:
                      'Special pricing plans designed for organizations with limited budgets',
                  },
                  {
                    title: 'Global accessibility',
                    description: 'Cloud-based platform accessible from anywhere, on any device',
                  },
                  {
                    title: 'Donor transparency',
                    description:
                      'Tools to demonstrate effective governance to donors and stakeholders',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircle className="w-6 h-6 text-red-600 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Pricing Highlight */}
              <div className="mt-8 bg-white rounded-xl p-6 border border-red-100">
                <div className="flex items-center mb-4">
                  <Gift className="w-5 h-5 text-red-600 mr-2" />
                  <span className="font-semibold text-gray-900">Nonprofit Discount</span>
                </div>
                <p className="text-gray-600 mb-2">
                  Registered nonprofits receive special pricing and flexible payment options.
                </p>
                <Link
                  to={ROUTES.PRICING.NONPROFIT}
                  className="text-red-600 font-medium hover:underline"
                >
                  Learn about nonprofit pricing →
                </Link>
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
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="primary" className="mb-4 bg-red-100 text-red-700">
              Features
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything your nonprofit needs
            </h2>
            <p className="text-xl text-gray-600">
              Powerful yet simple tools that volunteer boards love to use.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <section className="py-24 bg-red-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium mb-8">
              "EBoard's nonprofit pricing made professional governance tools accessible to our
              volunteer board. Our members across three continents now collaborate seamlessly. Best
              investment we've made."
            </blockquote>
            <div>
              <p className="text-xl font-semibold">Margaret Okonkwo</p>
              <p className="text-red-200">Executive Director, Global Health Initiative</p>
            </div>
            <div className="mt-8">
              <Link
                to="/case-studies/global-health-initiative"
                className="inline-flex items-center text-white hover:underline"
              >
                Read full case study
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Options */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="primary" className="mb-4 bg-red-100 text-red-700">
              Pricing
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Flexible plans for every budget
            </h2>
            <p className="text-xl text-gray-600">
              Special pricing for registered nonprofits and organizations with limited budgets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Essential',
                price: '$199',
                period: '/month',
                features: [
                  'Up to 15 board members',
                  'Meeting management',
                  'Document storage (25GB)',
                  'Email support',
                ],
                highlight: 'Best for small nonprofits',
              },
              {
                name: 'Professional',
                price: '$349',
                period: '/month',
                features: [
                  'Up to 30 board members',
                  'Everything in Essential',
                  'AI-powered minutes',
                  'Priority support',
                  'Grant tracking',
                ],
                highlight: 'Most popular',
                popular: true,
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: '',
                features: [
                  'Unlimited members',
                  'Everything in Professional',
                  'Dedicated account manager',
                  'Custom integrations',
                  'SLA guarantee',
                ],
                highlight: 'For large organizations',
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  variant={plan.popular ? 'elevated' : 'default'}
                  className={`h-full ${plan.popular ? 'border-2 border-red-600 shadow-xl relative' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <Badge variant="primary" className="bg-red-600 text-white">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="text-3xl font-bold text-red-600">
                      {plan.price}
                      <span className="text-sm font-normal text-gray-500">{plan.period}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">{plan.highlight}</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={plan.name === 'Enterprise' ? ROUTES.COMPANY.CONTACT : ROUTES.DEMO.INDEX}
                  >
                    <Button variant={plan.popular ? 'primary' : 'outline'} fullWidth>
                      {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-gray-500 mt-8">
            * Registered 501(c)(3) organizations receive an additional 20% discount on all plans
          </p>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Making an impact together
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: 'Environmental Defense Fund',
                impact: 'Reduced meeting costs by 60%, redirected $50K to programs',
              },
              {
                icon: HandHeart,
                title: 'Habitat for Humanity',
                impact: 'Engaged 50+ volunteer board members across 3 countries',
              },
              {
                icon: Heart,
                title: 'Red Cross',
                impact: 'Streamlined emergency response coordination',
              },
            ].map((story, index) => {
              const Icon = story.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center">
                    <div className="w-16 h-16 mx-auto bg-red-100 rounded-2xl flex items-center justify-center text-red-600 mb-4">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{story.title}</h3>
                    <p className="text-sm text-gray-600">{story.impact}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-red-600 to-red-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to maximize your impact?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Join 300+ nonprofits already using EBoard to streamline governance and focus on what
            matters most—your mission.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to={ROUTES.DEMO.INDEX}>
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-red-600 hover:bg-gray-100"
              >
                Schedule Demo
              </Button>
            </Link>
            <Link to={ROUTES.PRICING.NONPROFIT}>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                View Nonprofit Pricing
              </Button>
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 justify-center text-sm text-red-200">
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              No credit card required
            </span>
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              30-day free trial
            </span>
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              Nonprofit discount available
            </span>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Resources for nonprofit governance
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Download,
                title: 'Nonprofit Governance Guide',
                description: 'Best practices for volunteer boards',
                link: '/resources/guides/nonprofit-governance',
              },
              {
                icon: Heart,
                title: 'Grant Management Template',
                description: 'Free template for tracking grants',
                link: '/resources/templates/grant-tracker',
              },
              {
                icon: Users,
                title: 'Board Engagement Toolkit',
                description: 'Strategies for engaging volunteers',
                link: '/resources/guides/board-engagement',
              },
            ].map((resource, index) => {
              const Icon = resource.icon;
              return (
                <Link key={index} to={resource.link}>
                  <Card className="h-full hover:border-red-200">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center text-red-600 mr-3">
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
