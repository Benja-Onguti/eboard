import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Building2, Heart, Building, ArrowRight } from 'lucide-react';
import { solutions } from '@/data/solutions';
import { Card } from '../../components/ui/Card';
import { ROUTES } from '@/config/routes';

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  Building2,
  Heart,
  Building,
};

export const AudienceSegments: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="primary" className="mb-4">
            For Every Organization
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Built for accountability in every sector
          </h2>
          <p className="text-xl text-gray-600">
            From school boards to corporate enterprises, EBoard adapts to your unique governance
            needs [citation:2].
          </p>
        </div>

        {/* Audience Grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => {
            const Icon = iconMap[solution.icon] || Building;

            return (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`${ROUTES.SOLUTIONS}/${solution.id}`}>
                  <Card
                    variant="elevated"
                    className="h-full hover:border-primary-200 cursor-pointer group"
                  >
                    <div className="mb-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">{solution.name}</h3>

                    <p className="text-gray-600 text-sm mb-4">{solution.description}</p>

                    <div className="space-y-2 mb-4">
                      {solution.benefits.slice(0, 2).map((benefit, i) => (
                        <div key={i} className="text-sm text-gray-500 flex items-start">
                          <span className="text-primary-600 mr-2">✓</span>
                          {benefit}
                        </div>
                      ))}
                    </div>

                    <div className="inline-flex items-center text-primary-600 font-medium group-hover:text-primary-700">
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Simplified Badge
const Badge: React.FC<{
  variant: string;
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
