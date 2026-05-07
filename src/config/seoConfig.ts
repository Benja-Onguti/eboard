import { siteConfig } from './siteConfig';

interface MetaTag {
  name?: string;
  property?: string;
  content: string;
}

interface SeoConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  openGraph?: {
    title?: string;
    description?: string;
    url?: string;
    type?: string;
    image?: string;
  };
  twitter?: {
    card?: string;
    site?: string;
    creator?: string;
    title?: string;
    description?: string;
    image?: string;
  };
  meta?: MetaTag[];
}

export const defaultSeo: SeoConfig = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  canonical: siteConfig.url,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    type: 'website',
    image: `${import.meta.env.BASE_URL}images/og-image.jpg`,
  },
  twitter: {
    card: 'summary_large_image',
    site: siteConfig.social.twitter,
    creator: siteConfig.social.twitter,
    title: siteConfig.name,
    description: siteConfig.description,
    image: `${import.meta.env.BASE_URL}images/twitter-image.jpg`,
  },
};

export const seoConfig = {
  home: defaultSeo,

  features: {
    ...defaultSeo,
    title: 'Features - EBoard Solutions',
    description:
      "Explore EBoard's comprehensive governance features: meeting management, document security, AI minutes, surveys, e-signatures, and public meeting sites.",
  },

  solutions: {
    ...defaultSeo,
    title: 'Solutions - EBoard Solutions',
    description:
      'Tailored governance solutions for educational institutions, government bodies, NGOs, and enterprises.',
  },

  education: {
    ...defaultSeo,
    title: 'Education - EBoard Solutions',
    description:
      "Streamline school board and university trustee governance with EBoard's education-focused platform.",
  },

  government: {
    ...defaultSeo,
    title: 'Government - EBoard Solutions',
    description:
      'Secure, transparent governance for public sector organizations with FOI-compliant record keeping.',
  },

  ngo: {
    ...defaultSeo,
    title: 'NGOs & Nonprofits - EBoard Solutions',
    description:
      'Cost-effective governance tools for mission-driven organizations and volunteer boards.',
  },

  enterprise: {
    ...defaultSeo,
    title: 'Enterprise - EBoard Solutions',
    description:
      'Scale your corporate governance with enterprise-grade security, integrations, and analytics.',
  },

  pricing: {
    ...defaultSeo,
    title: 'Pricing - EBoard Solutions',
    description:
      'Flexible pricing plans for organizations of all sizes. Find the perfect plan for your governance needs.',
  },

  contact: {
    ...defaultSeo,
    title: 'Contact Us - EBoard Solutions',
    description:
      'Get in touch with EBoard Solutions. Request a demo, ask questions, or learn more about our platform.',
  },

  demo: {
    ...defaultSeo,
    title: 'Book a Demo - EBoard Solutions',
    description:
      "Schedule a personalized demo of EBoard's governance platform. See how we can transform your board meetings.",
  },

  resources: {
    ...defaultSeo,
    title: 'Resources - EBoard Solutions',
    description:
      'Explore resources for better board governance: blog posts, case studies, whitepapers, and guides.',
  },

  about: {
    ...defaultSeo,
    title: 'About Us - EBoard Solutions',
    description:
      "Learn about EBoard Solutions' mission to transform board governance through innovative technology.",
  },

  privacy: {
    ...defaultSeo,
    title: 'Privacy Policy - EBoard Solutions',
    description:
      "EBoard Solutions' privacy policy. Learn how we protect your data and respect your privacy.",
  },

  terms: {
    ...defaultSeo,
    title: 'Terms of Service - EBoard Solutions',
    description:
      "EBoard Solutions' terms of service. Please read carefully before using our platform.",
  },
};
