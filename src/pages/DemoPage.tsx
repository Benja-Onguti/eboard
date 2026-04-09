import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { InlineWidget } from 'react-calendly';
import { Calendar, Users, Clock, Shield, ArrowRight } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

export const DemoPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Book a Demo - EBoard Solutions</title>
        <meta
          name="description"
          content="Schedule a personalized demo of EBoard's governance platform."
        />
      </Helmet>

      <section className="relative min-h-screen flex items-center pt-6 pb-12 overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              See EBoard in <span className="text-primary-600">action</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get a personalized walkthrough of the platform tailored to your organization's needs.
            </p>

            <div className="flex items-center justify-center gap-6 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="w-4 h-4 text-primary-600" />
                30 Minutes
              </div>
              <div className="h-4 w-px bg-gray-200" />
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Users className="w-4 h-4 text-green-600" />
                Personalized
              </div>
              <div className="h-4 w-px bg-gray-200" />
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Shield className="w-4 h-4 text-purple-600" />
                No Obligation
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <Card variant="elevated" className="p-5 sticky top-24">
                <h3 className="font-semibold mb-3">What to expect:</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-primary-600" />
                    30-minute session
                  </li>
                  <li className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-primary-600" />
                    Tailored to your needs
                  </li>
                  <li className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-primary-600" />
                    Live Q&A
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-4 h-4 mr-2 text-primary-600" />
                    No obligation
                  </li>
                </ul>
                <hr className="my-4" />
                <p className="text-xs text-gray-500">
                  Questions?{' '}
                  <a
                    href="mailto:info@matrixsystems.co.ke"
                    className="text-primary-600 hover:underline"
                  >
                    Email us
                  </a>
                </p>
              </Card>
            </div>

            <div className="lg:col-span-3">
              <div className="h-[600px] rounded-lg overflow-hidden">
                <InlineWidget
                  url="https://calendly.com/eboard-solutions/demo"
                  styles={{ height: '600px', width: '100%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DemoPage;
