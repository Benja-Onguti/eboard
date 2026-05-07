import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Target, Users, CheckCircle, Shield } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ROUTES } from '@/config/routes';

// Team member data
const teamMembers = [
  {
    name: 'Eng Enock Mogeni',
    role: 'CEO & Technical Lead',
    bio: 'Technical Director and CEO, bringing over 15+ years in governance technology.',
    image: `${import.meta.env.BASE_URL}images/team/ai.jpg`,
    social: { linkedin: 'https://linkedin.com/in/sarahjohnson' },
  },
  {
    name: 'Erick Atinga',
    role: 'CTO -ICT Innovations and Softwares',
    bio: 'AI and security expert with 15+ years experience.',
    image: `${import.meta.env.BASE_URL}images/team/michael-chen.jpg`,
    social: { linkedin: 'https://linkedin.com/in/michaelchen' },
  },
  {
    name: 'Robert Mwongera',
    role: 'Head of Product',
    bio: 'Product leader specializing in UX and board portal design.',
    image: `${import.meta.env.BASE_URL}images/team/elena-rodriguez.jpg`,
    social: { linkedin: 'https://linkedin.com/in/elenarodriguez' },
  },
  {
    name: 'Morris Kitana',
    role: 'UI/ UX Designer',
    bio: 'Dedicated to ensuring smoothuser experience.',
    image: `${import.meta.env.BASE_URL}images/team/david-okafor.jpg`,
    social: { linkedin: 'https://linkedin.com/in/davidokafor' },
  },
];

// Values
const values = [
  {
    icon: Heart,
    title: 'Customer First',
    description: 'We succeed only when our customers succeed.',
    color: 'red',
  },
  {
    icon: Shield,
    title: 'Trust & Security',
    description: 'We treat customer data with the highest level of security and integrity.',
    color: 'blue',
  },
  {
    icon: Target,
    title: 'Innovation',
    description: 'We continuously push boundaries to deliver the best governance solutions.',
    color: 'green',
  },
  {
    icon: Users,
    title: 'Inclusivity',
    description: 'We build for everyone, ensuring our platform serves diverse organizations.',
    color: 'purple',
  },
];

export const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - EBoard Solutions</title>
        <meta
          name="description"
          content="Learn about EBoard Solutions' mission to transform board governance through innovative technology. Meet our team and discover our story."
        />
        <meta property="og:title" content="About Us - EBoard Solutions" />
        <meta
          property="og:description"
          content="Learn about EBoard Solutions' mission to transform board governance."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-6 pb-12 overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transforming governance{' '}
              <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                together
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Making board governance more effective, secure, and accessible for every organization.
            </p>

            {/* Quick Stats */}
            <div className="flex items-center justify-center gap-8 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">500+</div>
                <div className="text-sm text-gray-500">Organizations</div>
              </div>
              <div className="h-10 w-px bg-gray-200" />
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">200K+</div>
                <div className="text-sm text-gray-500">Users</div>
              </div>
              <div className="h-10 w-px bg-gray-200" />
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">10+</div>
                <div className="text-sm text-gray-500">Countries</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      {/*<section className="py-12 bg-white border-y border-gray-200">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '500+', label: 'Organizations' },
              { value: '2M+', label: 'Users' },
              { value: '30+', label: 'Countries' },
              { value: '99.99%', label: 'Uptime' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-primary-600">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* Mission & Values */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Badge variant="primary" className="mb-3">
                Our Mission
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Empowering boards to drive impact
              </h2>
              <p className="text-gray-600 mb-4">
                We believe that effective governance is the foundation of successful organizations.
                Our mission is to provide boards with the tools they need to make better decisions,
                faster.
              </p>
              <ul className="space-y-2">
                {[
                  'Reduce administrative burden',
                  'Enhance security and compliance',
                  'Foster transparency',
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-primary-600 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Badge variant="primary" className="mb-3">
                Our Values
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">What drives us</h2>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  const colors: Record<string, string> = {
                    red: 'bg-red-100 text-red-600',
                    blue: 'bg-blue-100 text-blue-600',
                    green: 'bg-green-100 text-green-600',
                    purple: 'bg-purple-100 text-purple-600',
                  };
                  return (
                    <Card key={index} className="p-4">
                      <div
                        className={`w-10 h-10 rounded-lg ${colors[value.color]} flex items-center justify-center mb-2`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-gray-900">{value.title}</h3>
                      <p className="text-gray-600 text-sm">{value.description}</p>
                    </Card>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <Badge variant="primary" className="mb-3">
              Our Team
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Meet the leadership</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary-400 to-primary-600 mb-3" />
                  <h3 className="font-bold text-gray-900">{member.name}</h3>
                  <p className="text-primary-600 text-sm mb-2">{member.role}</p>
                  <p className="text-gray-600 text-xs">{member.bio}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Get started today</h2>
          <p className="text-lg text-primary-100 mb-6 max-w-2xl mx-auto">
            Join 500+ organizations already using EBoard to transform their governance.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to={ROUTES.DEMO.INDEX}>
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary-600 hover:bg-gray-100"
              >
                Schedule a Demo
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
