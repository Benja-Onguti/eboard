import React from "react";
import { Helmet } from "react-helmet-async";
import { InlineWidget } from "react-calendly";
import { Calendar, Clock, Users, Shield } from "lucide-react";
import { Card } from "../components/ui/Card";

export const DemoPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Book a Demo - EBoard Solutions</title>
        <meta
          name="description"
          content="Schedule a personalized demo of EBoard's governance platform. See how we can transform your board meetings."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See EBoard in <span className="text-primary-600">action</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Schedule a personalized demo to see how EBoard can transform your
            board meetings and streamline governance.
          </p>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Info Sidebar */}
            <div className="lg:col-span-1">
              <Card variant="elevated" className="p-6 sticky top-24">
                <h3 className="text-lg font-semibold mb-4">What to expect:</h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 flex-shrink-0 mr-3">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">30-minute session</h4>
                      <p className="text-sm text-gray-500">
                        Perfect for a comprehensive overview
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 flex-shrink-0 mr-3">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">Tailored to your needs</h4>
                      <p className="text-sm text-gray-500">
                        We'll focus on your specific use case
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 flex-shrink-0 mr-3">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">Live Q&A</h4>
                      <p className="text-sm text-gray-500">
                        Get all your questions answered
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 flex-shrink-0 mr-3">
                      <Shield className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">No pressure</h4>
                      <p className="text-sm text-gray-500">
                        Learn at your own pace, no sales pitch
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="my-6" />

                <div className="text-sm text-gray-500">
                  <p className="mb-2">Already have questions?</p>
                  <a
                    href="mailto:sales@eboard-solutions.com"
                    className="text-primary-600 hover:underline"
                  >
                    sales@eboard-solutions.com
                  </a>
                </div>
              </Card>
            </div>

            {/* Calendly Widget */}
            <div className="lg:col-span-2">
              <Card variant="elevated" className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Select a time that works for you
                </h2>

                <div className="h-[700px] rounded-lg overflow-hidden">
                  <InlineWidget
                    url="https://calendly.com/eboard-solutions/demo"
                    styles={{
                      height: "700px",
                      width: "100%",
                    }}
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
