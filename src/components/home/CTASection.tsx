import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MessageSquare } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { ROUTES } from "@/config/routes";

export const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="relative bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              }}
            />
          </div>

          <div className="relative py-16 px-8 md:py-20 md:px-16 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready to transform your board meetings?
              </h2>

              <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
                Join thousands of organizations that have streamlined their
                governance with EBoard. Get started with a personalized demo
                today.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link to={ROUTES.DEMO}>
                  <Button
                    size="lg"
                    variant="secondary"
                    rightIcon={<Calendar className="w-5 h-5" />}
                    className="bg-white text-primary-600 hover:bg-gray-100"
                  >
                    Book a Demo
                  </Button>
                </Link>

                <Link to={ROUTES.CONTACT}>
                  <Button
                    size="lg"
                    variant="outline"
                    rightIcon={<MessageSquare className="w-5 h-5" />}
                    className="border-white text-white hover:bg-white/10"
                  >
                    Contact Sales
                  </Button>
                </Link>
              </div>

              <div className="mt-12 text-sm text-primary-200">
                <span className="flex items-center justify-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  No credit card required • 14-day free trial • Cancel anytime
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
