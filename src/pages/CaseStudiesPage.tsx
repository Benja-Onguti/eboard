import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Building2, Calendar, CheckCircle, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ROUTES } from '@/config/routes';

const caseStudies = [
  {
    title: 'Lincoln School District',
    industry: 'Education',
    summary: 'Reduced board prep time from two weeks to two days with centralized agendas and packets.',
    outcome: '70% faster meeting preparation',
    icon: Building2,
  },
  {
    title: 'City of Riverside',
    industry: 'Government',
    summary: 'Improved transparency and public access with digital records and open meeting workflows.',
    outcome: '100% FOI compliance achieved',
    icon: Shield,
  },
  {
    title: 'Global Health Initiative',
    industry: 'Nonprofit',
    summary: 'Connected a distributed volunteer board with secure documents, scheduling, and action tracking.',
    outcome: 'Board collaboration across three continents',
    icon: Users,
  },
];

export const CaseStudiesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies - EBoard Solutions</title>
        <meta
          name="description"
          content="See how boards, councils, and nonprofits use EBoard to improve governance, streamline meetings, and strengthen compliance."
        />
      </Helmet>

      <section className="bg-gradient-to-br from-slate-900 via-primary-800 to-primary-600 pt-32 pb-20 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <Badge variant="secondary" className="mb-4 bg-white/15 text-white border-white/20">
              Customer Stories
            </Badge>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Case studies from modern boards</h1>
            <p className="text-lg text-primary-100">
              Explore how organizations use EBoard to improve meeting efficiency, document security,
              and governance outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="grid gap-6 md:grid-cols-3">
            {caseStudies.map((study, index) => {
              const Icon = study.icon;
              return (
                <motion.div
                  key={study.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-gray-200">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                      <Icon className="h-6 w-6" />
                    </div>
                    <Badge variant="secondary" size="sm" className="mb-3">
                      {study.industry}
                    </Badge>
                    <h2 className="mb-3 text-xl font-bold text-gray-900">{study.title}</h2>
                    <p className="mb-4 text-gray-600">{study.summary}</p>
                    <div className="flex items-center gap-2 text-sm font-medium text-primary-600">
                      <CheckCircle className="h-4 w-4" />
                      {study.outcome}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">Want your own success story?</h2>
              <p className="mb-6 text-gray-600">
                We can show you how EBoard fits your workflows and governance model, whether you run
                a school board, public council, nonprofit, or enterprise committee structure.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to={ROUTES.DEMO.INDEX}>
                  <Button size="lg">
                    Book Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to={ROUTES.RESOURCES.GUIDES}>
                  <Button size="lg" variant="outline">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Explore Guides
                  </Button>
                </Link>
              </div>
            </div>

            <Card className="border-gray-200 bg-white">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary-600" />
                  <span className="text-gray-700">Faster board prep and follow-up</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-primary-600" />
                  <span className="text-gray-700">Better compliance and document control</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-primary-600" />
                  <span className="text-gray-700">Stronger collaboration across committees</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudiesPage;
