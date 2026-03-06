import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Calendar,
  FileText,
  Brain,
  ClipboardList,
  Globe,
  PenTool,
  Shield,
  Users,
  ArrowRight,
} from "lucide-react";
import { features } from "../data/features";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { ROUTES } from "@/config/routes";

const iconMap: Record<string, React.ElementType> = {
  Calendar,
  FileText,
  Brain,
  ClipboardList,
  Globe,
  PenTool,
  Shield,
  Users,
};

export const FeaturesPage: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <Helmet>
        <title>Features - EBoard Solutions</title>
        <meta
          name="description"
          content="Explore EBoard's comprehensive governance features: meeting management, document security, AI minutes, surveys, e-signatures, and public meeting sites."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful features for{" "}
            <span className="text-primary-600">modern governance</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to streamline board meetings, enhance security,
            and drive better decisions—all in one platform.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div ref={ref} className="space-y-20">
            {features.map((feature, index) => {
              const Icon = iconMap[feature.icon] || FileText;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                    <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-6">
                      <Icon className="w-8 h-8" />
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mb-3">
                      {feature.name}
                    </h2>

                    <p className="text-lg text-primary-600 font-medium mb-4">
                      {feature.tagline}
                    </p>

                    <p className="text-gray-600 mb-6">{feature.description}</p>

                    <div className="space-y-4 mb-8">
                      {feature.features.map((f, i) => (
                        <div key={i} className="flex">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mt-0.5">
                            <span className="text-sm font-bold">✓</span>
                          </div>
                          <div className="ml-4">
                            <h4 className="font-semibold text-gray-900">
                              {f.title}
                            </h4>
                            <p className="text-gray-500 text-sm">
                              {f.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <Link to={ROUTES.DEMO}>
                        <Button>Try it now</Button>
                      </Link>
                      <Link to={`${ROUTES.FEATURES}/${feature.id}`}>
                        <Button variant="outline">Learn more</Button>
                      </Link>
                    </div>
                  </div>

                  {/* Image */}
                  <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                    <div className="relative rounded-2xl shadow-2xl overflow-hidden">
                      <img
                        src={feature.image}
                        alt={feature.name}
                        className="w-full h-auto"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/10 to-transparent" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to experience these features?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            See how EBoard can transform your board meetings with a personalized
            demo.
          </p>
          <Link to={ROUTES.DEMO}>
            <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
              Book Your Demo
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};
