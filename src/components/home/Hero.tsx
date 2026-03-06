import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { ROUTES } from '@/config/routes';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-primary-50 to-white pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-primary-900/[0.02] -z-10" />
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="primary" size="sm" className="mb-6">
              Modern Governance Platform
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Governance Drives <span className="text-primary-600">Impact</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Reimagine how your board leads—with clarity, confidence, and purpose. Streamline
              meetings, enhance security, and drive better decisions across your organization
              [citation:2].
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Link to={ROUTES.DEMO}>
                <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Book a Demo
                </Button>
              </Link>
              <Link to={ROUTES.COMPANY.CONTACT}>
                <Button size="lg" variant="outline" leftIcon={<Play className="w-5 h-5" />}>
                  Watch Overview
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 border-2 border-white"
                    />
                  ))}
                </div>
                <span>Trusted by 2M+ users [citation:8]</span>
              </div>
              <div className="h-8 w-px bg-gray-300" />
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2">4.9/5 from 500+ reviews</span>
              </div>
            </div>
          </motion.div>

          {/* Right Image/Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl shadow-2xl overflow-hidden">
              <img
                src="/images/hero/dashboard-preview.jpg"
                alt="EBoard Dashboard Preview"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-transparent" />
            </div>

            {/* Floating Stats Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-4"
            >
              <div className="text-sm text-gray-500">Meeting prep time</div>
              <div className="text-2xl font-bold text-primary-600">-70%</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-6 -right-6 bg-white rounded-lg shadow-xl p-4"
            >
              <div className="text-sm text-gray-500">Board engagement</div>
              <div className="text-2xl font-bold text-green-600">+45%</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Helper Badge component (simplified)
const Badge: React.FC<{
  variant: string;
  size: string;
  className?: string;
  children: React.ReactNode;
}> = ({ children, className }) => (
  <span
    className={cn(
      'inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary-100 text-primary-800',
      className
    )}
  >
    {children}
  </span>
);
