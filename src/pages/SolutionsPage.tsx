import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Building2,
  Heart,
  Building,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Clock,
  Shield,
  Globe,
  BookOpen,
  Download,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ROUTES } from '@/config/routes';

const solutions = [
  {
    id: 'education',
    icon: GraduationCap,
    title: 'Education',
    headline: 'Streamlined Governance for Educational Institutions',
    description:
      'Empower school boards, university trustees, and academic committees with modern governance tools designed for education.',
    painPoints: [
      'Coordinating busy faculty and administrator schedules across multiple campuses',
      'Managing accreditation and compliance requirements',
      'Engaging board members with varying technical expertise',
      'Maintaining transparency with parents and community stakeholders',
    ],
    benefits: [
      'Reduce meeting preparation time by up to 70%',
      'Ensure compliance with FERPA and education regulations',
      'Enable remote participation for all board members',
      'Improve stakeholder communication with public meeting archives',
    ],
    features: [
      'Multi-campus and district support',
      'Student privacy compliance (FERPA)',
      'Academic calendar integration',
      'Committee and sub-committee management',
      'Public meeting transparency tools',
    ],
    stats: {
      organizations: '200+',
      users: '50K+',
      satisfaction: '98%',
    },
    caseStudy: {
      title: 'Lincoln School District',
      quote:
        'EBoard reduced our board meeting prep time from two weeks to two days. Our members actually enjoy using the platform.',
      author: 'Dr. Sarah Chen',
      role: 'Board Chair',
    },
    image: '/images/solutions/education.jpg',
    gradient: 'from-blue-600 to-indigo-600',
    link: ROUTES.SOLUTIONS.EDUCATION,
  },
  {
    id: 'government',
    icon: Building2,
    title: 'Government',
    headline: 'Secure, Transparent Governance for Public Sector',
    description:
      'Meet compliance requirements while improving efficiency and transparency in public sector governance.',
    painPoints: [
      'FOI and public records compliance requirements',
      'Security concerns for sensitive information',
      'Meeting public meeting accessibility laws',
      'Managing multiple committees, councils, and boards',
    ],
    benefits: [
      'FOI-compliant records with complete audit trails',
      'Military-grade security with ISO 27001 certification',
      'Accessible meetings with proper controls',
      'Streamlined multi-committee management',
    ],
    features: [
      'FOI-compliant record keeping with automated archiving',
      'Security certifications (ISO 27001, SOC 2)',
      'Public meeting support with live streaming',
      'Inter-agency collaboration tools',
      'Automated redaction for public records',
    ],
    stats: {
      organizations: '150+',
      users: '30K+',
      satisfaction: '97%',
    },
    caseStudy: {
      title: 'City of Riverside',
      quote:
        'EBoard helped us achieve 100% FOI compliance while reducing administrative workload by 50%.',
      author: 'James Rodriguez',
      role: 'City Clerk',
    },
    image: '/images/solutions/government.jpg',
    gradient: 'from-purple-600 to-pink-600',
    link: ROUTES.SOLUTIONS.GOVERNMENT,
  },
  {
    id: 'ngo',
    icon: Heart,
    title: 'NGOs & Nonprofits',
    headline: 'Cost-Effective Governance for Mission-Driven Organizations',
    description:
      'Maximize your impact with affordable, easy-to-use governance tools designed for nonprofit boards and volunteer members.',
    painPoints: [
      'Volunteer board members with limited time and technical skills',
      'Tight budgets requiring cost-effective solutions',
      'Need for donor transparency and impact reporting',
      'Remote participation for geographically dispersed members',
    ],
    benefits: [
      '50% reduction in administrative costs',
      'Intuitive interface that volunteers can use immediately',
      'Build donor trust with transparent governance',
      'Enable global participation with mobile access',
    ],
    features: [
      'Nonprofit pricing with flexible plans',
      'Volunteer engagement tools',
      'Donor reporting and impact metrics',
      'Grant management integration',
      'Fundraising calendar integration',
    ],
    stats: {
      organizations: '300+',
      users: '40K+',
      satisfaction: '99%',
    },
    caseStudy: {
      title: 'Global Health Initiative',
      quote:
        "EBoard's nonprofit pricing made professional governance tools accessible to our volunteer board.",
      author: 'Margaret Okonkwo',
      role: 'Executive Director',
    },
    image: '/images/solutions/ngos.jpg',
    gradient: 'from-red-600 to-orange-600',
    link: ROUTES.SOLUTIONS.NGOS,
  },
  {
    id: 'enterprise',
    icon: Building,
    title: 'Enterprise',
    headline: 'Strategic Decision Support for Corporate Boards',
    description:
      'Scale your corporate governance with enterprise-grade security, integrations, and analytics.',
    painPoints: [
      'Global board coordination across multiple time zones',
      'Integration with existing enterprise tools (Teams, Zoom, SharePoint)',
      'Regulatory compliance (SOX, GDPR, CCPA)',
      'Need for strategic insights from governance data',
    ],
    benefits: [
      'Seamless integration with your existing tech stack',
      'Enterprise-grade security with advanced compliance',
      'AI-powered insights from governance data',
      'Support for complex organizational structures',
    ],
    features: [
      'SSO and enterprise authentication (SAML, OAuth)',
      'Advanced analytics and executive dashboards',
      'API access for custom integrations',
      'Subsidiary and committee management',
      'Multi-language and multi-currency support',
    ],
    stats: {
      organizations: '100+',
      users: '25K+',
      satisfaction: '96%',
    },
    caseStudy: {
      title: 'Torres Industries',
      quote:
        'EBoard integrated perfectly with our existing tools and scaled across 50+ subsidiaries worldwide.',
      author: 'Michael Torres',
      role: 'Corporate Secretary',
    },
    image: '/images/solutions/enterprise.jpg',
    gradient: 'from-green-600 to-teal-600',
    link: ROUTES.SOLUTIONS.ENTERPRISE,
  },
];

export const SolutionsPage: React.FC = () => {
  const [selectedSolution, setSelectedSolution] = React.useState(solutions[0]);

  return (
    <>
      <Helmet>
        <title>Solutions - EBoard Solutions</title>
        <meta
          name="description"
          content="Tailored governance solutions for educational institutions, government bodies, NGOs, and enterprises."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom text-center">
          <Badge variant="primary" className="mb-4">
            By Industry
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Solutions for every{' '}
            <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              organization
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            EBoard adapts to the unique governance needs of your sector. From school boards to
            corporate enterprises, we provide tailored solutions that drive impact.
          </p>
        </div>
      </section>

      {/* Solution Tabs */}
      <section className="sticky top-20 bg-white border-b border-gray-200 z-30 py-4">
        <div className="container-custom">
          <div className="flex justify-center space-x-2">
            {solutions.map((solution) => (
              <button
                key={solution.id}
                onClick={() => setSelectedSolution(solution)}
                className={`flex items-center px-6 py-3 rounded-lg transition-all ${
                  selectedSolution.id === solution.id
                    ? `bg-gradient-to-r ${solution.gradient} text-white shadow-lg`
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <solution.icon className="w-5 h-5 mr-2" />
                {solution.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Solution Detail */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            key={selectedSolution.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Hero Section */}
            <div
              className={`bg-gradient-to-r ${selectedSolution.gradient} rounded-3xl text-white p-12 mb-16`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center mb-4">
                    <selectedSolution.icon className="w-12 h-12 mr-4" />
                    <h2 className="text-3xl font-bold">{selectedSolution.title}</h2>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{selectedSolution.headline}</h3>
                  <p className="text-lg text-white/90 max-w-2xl">{selectedSolution.description}</p>
                </div>
                <div className="hidden lg:block">
                  <div className="grid grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold">
                        {selectedSolution.stats.organizations}
                      </div>
                      <div className="text-sm text-white/80">Organizations</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">{selectedSolution.stats.users}</div>
                      <div className="text-sm text-white/80">Users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">
                        {selectedSolution.stats.satisfaction}
                      </div>
                      <div className="text-sm text-white/80">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column - Pain Points & Benefits */}
              <div>
                {/* Pain Points */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Common challenges we solve
                  </h3>
                  <ul className="space-y-4">
                    {selectedSolution.painPoints.map((point, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start"
                      >
                        <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 mr-3 flex-shrink-0">
                          <span className="text-sm font-bold">!</span>
                        </div>
                        <span className="text-gray-700">{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">How EBoard helps</h3>
                  <ul className="space-y-4">
                    {selectedSolution.benefits.map((benefit, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start"
                      >
                        <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column - Features & Case Study */}
              <div>
                {/* Features */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Key features</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {selectedSolution.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gray-50 rounded-lg p-4"
                      >
                        <div
                          className={`w-8 h-8 rounded-lg bg-gradient-to-r ${selectedSolution.gradient} mb-2`}
                        />
                        <span className="text-sm font-medium text-gray-900">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Case Study */}
                <Card variant="elevated" className="bg-primary-50 border-primary-100">
                  <div className="flex items-center mb-4">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  </div>
                  <blockquote className="text-lg text-gray-700 mb-4">
                    "{selectedSolution.caseStudy.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${selectedSolution.gradient} mr-4`}
                    />
                    <div>
                      <p className="font-semibold text-gray-900">
                        {selectedSolution.caseStudy.author}
                      </p>
                      <p className="text-sm text-gray-500">
                        {selectedSolution.caseStudy.role}, {selectedSolution.caseStudy.title}
                      </p>
                    </div>
                  </div>
                  <Link
                    to={`/case-studies/${selectedSolution.id}`}
                    className="inline-flex items-center text-primary-600 font-medium mt-4 hover:text-primary-700"
                  >
                    Read full case study
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Card>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to transform your {selectedSolution.title.toLowerCase()} governance?
              </h3>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to={ROUTES.DEMO.INDEX}>
                  <Button
                    size="lg"
                    className={`bg-gradient-to-r ${selectedSolution.gradient} text-white border-0`}
                  >
                    Schedule a demo
                  </Button>
                </Link>
                <Link to={selectedSolution.link}>
                  <Button size="lg" variant="outline">
                    Learn more about {selectedSolution.title}
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Explore other solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {solutions
              .filter((s) => s.id !== selectedSolution.id)
              .map((solution) => (
                <motion.div
                  key={solution.id}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Link to={solution.link}>
                    <Card variant="elevated" className="h-full text-center group">
                      <div
                        className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-r ${solution.gradient} flex items-center justify-center text-white mb-4`}
                      >
                        <solution.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition">
                        {solution.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">{solution.headline}</p>
                      <ArrowRight className="w-5 h-5 mx-auto mt-4 text-primary-600 opacity-0 group-hover:opacity-100 transition" />
                    </Card>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Resources for {selectedSolution.title} governance
            </h2>
            <p className="text-xl text-gray-600">
              Explore guides, case studies, and best practices tailored to your sector.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: `${selectedSolution.title} Governance Guide`,
                description: 'Best practices and compliance requirements',
                link: `/resources/guides/${selectedSolution.id}`,
              },
              {
                icon: Download,
                title: 'Industry Whitepaper',
                description: 'Latest trends and insights',
                link: `/resources/whitepapers/${selectedSolution.id}`,
              },
              {
                icon: Users,
                title: 'Customer Stories',
                description: 'Real success stories from peers',
                link: `/resources/case-studies?industry=${selectedSolution.id}`,
              },
            ].map((resource, index) => {
              const Icon = resource.icon;
              return (
                <Link key={index} to={resource.link}>
                  <Card variant="elevated" className="h-full group">
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-10 h-10 rounded-lg bg-gradient-to-r ${selectedSolution.gradient} flex items-center justify-center text-white mr-3`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition">
                        {resource.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm">{resource.description}</p>
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
