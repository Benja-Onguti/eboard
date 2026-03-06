import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Calendar,
  FileText,
  Brain,
  ClipboardList,
  Globe,
  PenTool,
  ArrowRight,
} from 'lucide-react';
import { features } from '../../data/features';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { ROUTES } from '@/config/routes';

const iconMap: Record<string, React.ElementType> = {
  Calendar,
  FileText,
  Brain,
  ClipboardList,
  Globe,
  PenTool,
};

export const FeaturesOverview: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Show only first 3 features on homepage
  const featuredFeatures = features.slice(0, 3);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="primary" className="mb-4">
            Platform Features
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything you need for modern governance
          </h2>
          <p className="text-xl text-gray-600">
            From meeting management to AI-powered minutes, EBoard provides
            comprehensive tools for effective board leadership [citation:2].
          </p>
        </div>

        {/* Features Grid */}
        <div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {featuredFeatures.map((feature, index) => {
            const Icon = iconMap[feature.icon] || FileText;
            
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="elevated" className="h-full group hover:border-primary-200">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {feature.tagline}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {feature.benefits.slice(0, 3).map((benefit, i) => (
                      <li key={i} className="text-sm text-gray-500 flex items-start">
                        <span className="text-primary-600 mr-2">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={`${ROUTES.FEATURES}/${feature.id}`}
                    className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 group"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* View All Link */}
        <div className