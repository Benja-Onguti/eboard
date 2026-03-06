import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Check, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ROUTES } from '@/config/routes';

interface PricingPlan {
  name: string;
  description: string;
  price: {
    monthly: number;
    annual: number;
  };
  features: string[];
  highlighted?: boolean;
  cta: string;
  audience: string[];
}

const plans: PricingPlan[] = [
  {
    name: 'Essential',
    description: 'For small boards and organizations getting started',
    price: {
      monthly: 299,
      annual: 249,
    },
    features: [
      'Up to 10 board members',
      'Meeting management',
      'Document storage (50GB)',
      'Basic security features',
      'Email support',
      'Mobile app access',
    ],
    cta: 'Start Free Trial',
    audience: ['NGOs', 'Small organizations'],
  },
  {
    name: 'Professional',
    description: 'For growing organizations with advanced needs',
    price: {
      monthly: 599,
      annual: 499,
    },
    features: [
      'Up to 25 board members',
      'Everything in Essential',
      'AI-powered minutes',
      'Advanced security & compliance',
      'Priority support',
      'Custom branding',
      'API access',
    ],
    highlighted: true,
    cta: 'Start Free Trial',
    audience: ['Education', 'Government', 'Mid-size NGOs'],
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with complex requirements',
    price: {
      monthly: 999,
      annual: 899,
    },
    features: [
      'Unlimited board members',
      'Everything in Professional',
      'Dedicated account manager',
      'SSO & advanced authentication',
      'SLA guarantee',
      'Custom integrations',
      'On-premise option',
      '24/7 phone support',
    ],
    cta: 'Contact Sales',
    audience: ['Enterprise', 'Large government', 'Multi-national NGOs'],
  },
];

export const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = React.useState<'monthly' | 'annual'>('annual');

  return (
    <>
      <Helmet>
        <title>Pricing - EBoard Solutions</title>
        <meta
          name="description"
          content="Flexible pricing plans for organizations of all sizes. Find the perfect plan for your governance needs."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, transparent <span className="text-primary-600">pricing</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Choose the plan that's right for your organization. All plans include a 14-day free
            trial.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white rounded-full p-1 shadow-lg">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-3 rounded-full font-medium transition ${
                billingCycle === 'monthly'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-3 rounded-full font-medium transition ${
                billingCycle === 'annual'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Annual <span className="text-sm opacity-80">(Save 20%)</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                variant={plan.highlighted ? 'elevated' : 'default'}
                className={`relative ${
                  plan.highlighted ? 'border-2 border-primary-600 shadow-2xl scale-105' : ''
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-500 mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">
                      ${billingCycle === 'monthly' ? plan.price.monthly : plan.price.annual}
                    </span>
                    <span className="text-gray-500">/month</span>
                    {billingCycle === 'annual' && (
                      <p className="text-sm text-green-600 mt-1">
                        Billed annually (${plan.price.annual * 12}/year)
                      </p>
                    )}
                  </div>

                  <div className="mb-8">
                    <p className="text-sm text-gray-500 mb-3">Best for:</p>
                    <div className="flex flex-wrap gap-2">
                      {plan.audience.map((audience) => (
                        <span
                          key={audience}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {audience}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link to={plan.name === 'Enterprise' ? ROUTES.CONTACT : ROUTES.DEMO}>
                    <Button variant={plan.highlighted ? 'primary' : 'outline'} size="lg" fullWidth>
                      {plan.cta}
                    </Button>
                  </Link>
                </div>

                <div className="border-t border-gray-200 p-8">
                  <h4 className="font-semibold text-gray-900 mb-4">Features include:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">
              Need a custom plan? Contact us for enterprise pricing and tailored solutions.
            </p>
            <Link to={ROUTES.CONTACT}>
              <Button variant="ghost" size="lg">
                Contact Sales
                <HelpCircle className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                q: 'Can I change plans later?',
                a: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.',
              },
              {
                q: 'Is there a long-term contract?',
                a: 'No, all plans are month-to-month. You can cancel anytime, no questions asked.',
              },
              {
                q: 'Do you offer discounts for nonprofits?',
                a: 'Yes! We offer special pricing for registered nonprofits and NGOs. Contact our sales team for details.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, PayPal, and wire transfers for annual enterprise plans.',
              },
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
