import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Heart,
  Target,
  Eye,
  Users,
  Award,
  Globe,
  Clock,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  CheckCircle,
  Star,
  BookOpen,
  Briefcase,
  Coffee,
  Rocket,
  Shield,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ROUTES } from '@/config/routes';

// Team member data
const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Co-Founder',
    bio: 'Former board director with 15+ years in governance technology. Passionate about making board meetings more effective.',
    image: '/images/team/sarah-johnson.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/sarahjohnson',
      twitter: 'https://twitter.com/sarahjohnson',
    },
  },
  {
    name: 'Michael Chen',
    role: 'CTO & Co-Founder',
    bio: 'AI and security expert who previously led engineering at Fortune 500 companies. Building the future of governance.',
    image: '/images/team/michael-chen.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/michaelchen',
      twitter: 'https://twitter.com/michaelchen',
    },
  },
  {
    name: 'Elena Rodriguez',
    role: 'Head of Product',
    bio: 'Product leader with expertise in user experience and board portal design. Former nonprofit board member.',
    image: '/images/team/elena-rodriguez.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/elenarodriguez',
    },
  },
  {
    name: 'David Okafor',
    role: 'Head of Customer Success',
    bio: 'Dedicated to ensuring every client succeeds. Previously led support teams at major SaaS companies.',
    image: '/images/team/david-okafor.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/davidokafor',
    },
  },
  {
    name: 'Lisa Thompson',
    role: 'Chief Marketing Officer',
    bio: 'Marketing leader focused on telling the story of modern governance. Board member at two nonprofits.',
    image: '/images/team/lisa-thompson.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/lisathompson',
      twitter: 'https://twitter.com/lisathompson',
    },
  },
  {
    name: 'James Wilson',
    role: 'Head of Sales',
    bio: 'Helping organizations find the right governance solution. Passionate about customer success.',
    image: '/images/team/james-wilson.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/jameswilson',
    },
  },
];

// Company milestones
const milestones = [
  {
    year: '2018',
    title: 'Company Founded',
    description: 'EBoard Solutions was founded with a mission to transform board governance.',
    icon: Rocket,
  },
  {
    year: '2019',
    title: 'First 100 Customers',
    description: 'Reached 100 organizations, mostly nonprofits and small businesses.',
    icon: Users,
  },
  {
    year: '2020',
    title: 'ISO 27001 Certified',
    description: 'Achieved ISO 27001 certification, setting new security standards.',
    icon: Shield,
  },
  {
    year: '2021',
    title: 'AI Minutes Launch',
    description: 'Launched AI-powered minutes feature, revolutionizing meeting documentation.',
    icon: Zap,
  },
  {
    year: '2022',
    title: '500 Organizations',
    description: 'Reached 500+ organizations across education, government, and enterprise.',
    icon: Award,
  },
  {
    year: '2023',
    title: 'Global Expansion',
    description: 'Expanded to serve customers in 30+ countries worldwide.',
    icon: Globe,
  },
  {
    year: '2024',
    title: 'FedRAMP Certified',
    description: 'Achieved FedRAMP certification for government clients.',
    icon: Shield,
  },
  {
    year: '2025',
    title: '2M+ Users',
    description: 'Now serving over 2 million users globally.',
    icon: Users,
  },
];

// Values
const values = [
  {
    icon: Heart,
    title: 'Customer First',
    description:
      "We succeed only when our customers succeed. Every decision starts with what's best for them.",
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
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom text-center">
          <Badge variant="primary" className="mb-4">
            About Us
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Transforming governance{' '}
            <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              together
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            EBoard Solutions was founded with a simple mission: make board governance more
            effective, secure, and accessible for every organization. Today, we serve over 500
            organizations and 2 million users worldwide.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-100 rounded-2xl -z-10" />
                <img
                  src="/images/about/mission.jpg"
                  alt="Our Mission"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Badge variant="primary" className="mb-4">
                Our Mission
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Empowering boards to drive impact
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We believe that effective governance is the foundation of successful organizations.
                Our mission is to provide boards with the tools they need to make better decisions,
                faster.
              </p>
              <div className="space-y-4">
                {[
                  'Reduce administrative burden so boards can focus on strategy',
                  'Enhance security and compliance for sensitive board materials',
                  'Make governance accessible to organizations of all sizes',
                  'Foster transparency and accountability in every sector',
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:order-2"
            >
              <div className="relative">
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-100 rounded-2xl -z-10" />
                <img
                  src="/images/about/vision.jpg"
                  alt="Our Vision"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:order-1"
            >
              <Badge variant="primary" className="mb-4">
                Our Vision
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                A world where every board governs brilliantly
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We envision a future where technology eliminates the friction in governance,
                allowing boards to focus entirely on their mission and impact.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
                  <p className="text-sm text-gray-500">Organizations</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">2M+</div>
                  <p className="text-sm text-gray-500">Users</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">30+</div>
                  <p className="text-sm text-gray-500">Countries</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">50K+</div>
                  <p className="text-sm text-gray-500">Meetings</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="primary" className="mb-4">
              Our Values
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What drives us every day
            </h2>
            <p className="text-xl text-gray-600">
              These core principles guide everything we do at EBoard Solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              const colors = {
                red: 'bg-red-100 text-red-600',
                blue: 'bg-blue-100 text-blue-600',
                green: 'bg-green-100 text-green-600',
                purple: 'bg-purple-100 text-purple-600',
              };
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full text-center">
                    <div
                      className={`w-16 h-16 mx-auto rounded-2xl ${colors[value.color]} flex items-center justify-center mb-4`}
                    >
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="primary" className="mb-4">
              Our Journey
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The story of EBoard Solutions
            </h2>
            <p className="text-xl text-gray-600">
              From a simple idea to a platform serving organizations worldwide.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary-200 hidden lg:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex flex-col lg:flex-row items-center ${
                      isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  >
                    <div
                      className={`lg:w-1/2 ${isEven ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'}`}
                    >
                      <div
                        className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition ${
                          isEven ? 'lg:mr-8' : 'lg:ml-8'
                        }`}
                      >
                        <div className="flex items-center gap-4 mb-3">
                          <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600">
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <span className="text-sm font-semibold text-primary-600">
                              {milestone.year}
                            </span>
                            <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                          </div>
                        </div>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="hidden lg:block lg:w-0">
                      <div className="relative w-4 h-4 bg-primary-600 rounded-full -left-2" />
                    </div>

                    <div className="lg:w-1/2" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="primary" className="mb-4">
              Our Team
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet the people behind EBoard
            </h2>
            <p className="text-xl text-gray-600">
              A diverse team of governance experts, technologists, and customer advocates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center group">
                  <div className="relative mb-4">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary-400 to-primary-600 mb-4" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                      <div className="flex gap-2">
                        {member.social.linkedin && (
                          <a
                            href={member.social.linkedin}
                            className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary-600 shadow-lg"
                          >
                            <span className="text-sm">in</span>
                          </a>
                        )}
                        {member.social.twitter && (
                          <a
                            href={member.social.twitter}
                            className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary-600 shadow-lg"
                          >
                            <span className="text-sm">𝕏</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Join our growing team</p>
            <Link to={ROUTES.COMPANY.CAREERS}>
              <Button variant="outline" rightIcon={<ArrowRight className="w-4 h-4" />}>
                View Careers
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Be part of our story</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join 500+ organizations already using EBoard to transform their governance.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
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
