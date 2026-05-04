import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ROUTES } from '@/config/routes';
import { AudienceConfig } from '@/data/audiences';

const iconMap: Record<string, React.ElementType> = {
  Calendar: Icons.Calendar,
  Shield: Icons.Shield,
  FileText: Icons.FileText,
  Users: Icons.Users,
  Globe: Icons.Globe,
  CheckCircle: Icons.CheckCircle,
  Star: Icons.Star,
  Clock: Icons.Clock,
  Award: Icons.Award,
  Heart: Icons.Heart,
  DollarSign: Icons.DollarSign,
  Target: Icons.Target,
  Landmark: Icons.Landmark,
  FileCheck: Icons.FileCheck,
  Lock: Icons.Lock,
  Eye: Icons.Eye,
  Scale: Icons.Scale,
  BarChart: Icons.BarChart,
  GitMerge: Icons.GitMerge,
  Network: Icons.Network,
  ArrowRight: Icons.ArrowRight,
};

interface AudiencePageLayoutProps {
  config: AudienceConfig;
  children?: React.ReactNode;
}

export const AudiencePageLayout: React.FC<AudiencePageLayoutProps> = ({ config, children }) => {
  const { theme, hero, challenges, solution, features, testimonial, cta } = config;
  const primaryColor = theme.primary;
  const primaryLight = theme.primaryLight;
  const primaryDark = theme.primaryDark;

  const isDark = primaryColor === 'primary';

  const BadgeIcon = iconMap[hero.badge.icon] || Icons.Shield;
  const TrustIcon = iconMap[hero.trustBadge.icon] || Icons.Award;

  return (
    <>
      {/* Hero Section */}
      <section
        className={`relative min-h-screen flex items-center pt-6 pb-12 overflow-hidden ${
          isDark
            ? 'bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white'
            : 'bg-gradient-to-b from-primary-50 via-white to-white'
        }`}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        {!isDark && (
          <>
            <div
              className={`absolute top-20 right-0 w-96 h-96 bg-${primaryColor}-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob`}
            />
            <div
              className={`absolute bottom-20 left-0 w-96 h-96 bg-${primaryColor === 'blue' ? 'cyan' : primaryColor === 'purple' ? 'indigo' : primaryColor === 'red' ? 'orange' : primaryColor}-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000`}
            />
          </>
        )}
        {isDark && (
          <>
            <div className="absolute top-20 right-0 w-96 h-96 bg-primary-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          </>
        )}

        <div className="container-custom relative h-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${
                  isDark ? '' : 'text-gray-900'
                }`}
              >
                {hero.headline}{' '}
                <span className={isDark ? 'text-primary-400' : `text-${primaryColor}-600`}>
                  {hero.highlight}
                </span>
              </h1>
              <p className={`text-xl mb-8 max-w-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {hero.subtitle}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link to={ROUTES.DEMO.INDEX}>
                  <Button
                    size="lg"
                    className={
                      isDark
                        ? 'bg-primary-600 hover:bg-primary-700'
                        : `bg-${primaryColor}-600 hover:bg-${primaryColor}-700`
                    }
                  >
                    {cta.demoButton}
                  </Button>
                </Link>
                {cta.showContact !== false && cta.contactButton && (
                  <Link to={ROUTES.COMPANY.CONTACT}>
                    <Button
                      size="lg"
                      variant="outline"
                      className={isDark ? 'border-white text-white hover:bg-white/10' : ''}
                    >
                      {cta.contactButton}
                    </Button>
                  </Link>
                )}
              </div>

              {/* Quick Stats */}
              <div
                className={`flex items-center gap-6 pt-4 border-t ${
                  isDark ? 'border-slate-700' : 'border-gray-200'
                }`}
              >
                {hero.stats.map((stat, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && (
                      <div className={`h-8 w-px ${isDark ? 'bg-slate-700' : 'bg-gray-200'}`} />
                    )}
                    <div className="text-center">
                      <div className={`text-2xl font-bold text-${stat.color}`}>{stat.value}</div>
                      <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        {stat.label}
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
               <div
                 className={`relative rounded-2xl shadow-2xl overflow-hidden ${
                   isDark ? 'border border-slate-700' : ''
                 }`}
               >
                 <img
                   src={hero.image}
                   alt={`${config.name} Board Meeting`}
                   className="w-full h-[450px] object-cover"
                 />
               </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className={`absolute -bottom-4 -left-4 rounded-xl shadow-2xl p-4 border ${
                  isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      isDark ? 'bg-primary-500/20' : `bg-${primaryLight}`
                    }`}
                  >
                    <BadgeIcon
                      className={`w-5 h-5 ${isDark ? `text-primary-400` : `text-${primaryDark}`}`}
                    />
                  </div>
                  <div>
                    <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      {hero.badge.label}
                    </p>
                    <p
                      className={`text-lg font-bold ${isDark ? 'text-white' : `text-${primaryDark}`}`}
                    >
                      {hero.badge.value}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Trust Badge */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className={`absolute -top-4 -right-4 rounded-lg px-4 py-2 shadow-lg ${
                  isDark
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600'
                    : `bg-gradient-to-r from-${primaryDark} to-${primaryColor}-700`
                } text-white`}
              >
                <div className="flex items-center gap-2">
                  <TrustIcon className="w-4 h-4" />
                  {hero.trustBadge.label && (
                    <span className="text-xs text-primary-200">{hero.trustBadge.label}</span>
                  )}
                  <span className="text-sm font-medium">{hero.trustBadge.text}</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className={`py-12 ${config.id === 'enterprise' ? 'bg-white' : 'bg-gray-50'}`}>
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8">
            {challenges.badge && (
              <Badge
                variant="primary"
                className={`mb-3 bg-${primaryLight} text-${primaryColor}-700`}
              >
                {challenges.badge}
              </Badge>
            )}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              {challenges.title}
            </h2>
            {challenges.subtitle && <p className="text-lg text-gray-600">{challenges.subtitle}</p>}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {challenges.items.map((challenge, index) => {
              const Icon = iconMap[challenge.icon] || Icons.Calendar;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <div
                      className={`w-10 h-10 bg-${primaryLight} rounded-lg flex items-center justify-center text-${primaryDark} mb-3`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-1">{challenge.title}</h3>
                    <p className="text-gray-600 text-sm">{challenge.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className={`py-12 ${config.id === 'enterprise' ? 'bg-gray-50' : 'bg-white'}`}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge
                variant="primary"
                className={`mb-3 bg-${primaryLight} text-${primaryColor}-700`}
              >
                Solution
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {solution.title}
              </h2>
              {solution.description && (
                <p className="text-base text-gray-600 mb-5">{solution.description}</p>
              )}

              <div className="space-y-4">
                {solution.items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircle className={`w-5 h-5 text-${primaryDark} mr-3 flex-shrink-0`} />
                    <div>
                      <h3 className="font-medium text-gray-900 text-sm">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-xl shadow-xl overflow-hidden">
                <img src={solution.image} alt={`${config.name} Solution`} className="w-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      {features.items.length > 0 && (
        <section className={`py-12 ${config.id === 'enterprise' ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-8">
              {features.badge && (
                <Badge
                  variant="primary"
                  className={`mb-3 bg-${primaryLight} text-${primaryColor}-700`}
                >
                  {features.badge}
                </Badge>
              )}
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                {features.title}
              </h2>
              {features.subtitle && <p className="text-lg text-gray-600">{features.subtitle}</p>}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.items.map((feature, index) => {
                const Icon = iconMap[feature.icon] || Icons.Calendar;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card
                      variant="elevated"
                      className={`h-full group hover:border-${primaryColor}-200`}
                    >
                      <div
                        className={`w-10 h-10 bg-${primaryLight} rounded-lg flex items-center justify-center text-${primaryDark} mb-3 group-hover:bg-${primaryDark} group-hover:text-white transition`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Testimonial */}
      <section className={`py-12 bg-${primaryDark} text-white`}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Icons.Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl font-medium mb-6">
              {testimonial.quote}
            </blockquote>
            <div>
              <p className="text-lg font-semibold">{testimonial.name}</p>
              <p className={`${isDark ? 'text-primary-200' : `text-${primaryColor}-200`}`}>
                {testimonial.role}, {testimonial.organization}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className={`py-12 ${
          isDark
            ? 'bg-gradient-to-br from-slate-900 to-slate-800 text-white'
            : `bg-gradient-to-br from-${primaryDark} to-${primaryColor}-800 text-white`
        }`}
      >
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">{cta.title}</h2>
          <p
            className={`${isDark ? 'text-gray-300' : `text-${primaryColor}-100`} mb-6 max-w-xl mx-auto`}
          >
            {cta.subtitle}
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to={ROUTES.DEMO.INDEX}>
              <Button
                size="md"
                variant="secondary"
                className={
                  isDark
                    ? 'bg-white text-slate-900 hover:bg-gray-100'
                    : `bg-white text-${primaryDark} hover:bg-gray-100`
                }
              >
                {cta.demoButton}
              </Button>
            </Link>
            {cta.showContact !== false && cta.contactButton && (
              <Link to={ROUTES.COMPANY.CONTACT}>
                <Button
                  size="md"
                  variant="outline"
                  className={
                    isDark
                      ? 'border-white text-white hover:bg-white/10'
                      : 'border-white text-white hover:bg-white/10'
                  }
                >
                  {cta.contactButton}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Additional custom sections */}
      {children}
    </>
  );
};

const CheckCircle = Icons.CheckCircle;
