import { siteConfig } from './siteConfig';

export interface MetaTag {
  name?: string;
  property?: string;
  content: string;
}

export interface SeoConfig {
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
    image: `${import.meta.env.BASE_URL}images/og-image.svg`,
  },
  twitter: {
    card: 'summary_large_image',
    site: siteConfig.social.twitter,
    creator: siteConfig.social.twitter,
    title: siteConfig.name,
    description: siteConfig.description,
    image: `${import.meta.env.BASE_URL}images/twitter-image.svg`,
  },
};

export const seoConfig = {
  // Home page
  home: {
    ...defaultSeo,
    title: 'EBoard Solutions - Modern Governance Platform',
    description:
      'Automate agendas, minutes, and summaries with smart AI. Powered by Google Gemini. Secure, scalable, and built for modern boards.',
    keywords: [
      'board management',
      'governance',
      'AI meeting minutes',
      'committee management',
      'board portal',
      'secure governance',
    ],
  },

  // Features overview
  features: {
    ...defaultSeo,
    title: 'Features - EBoard Solutions',
    description:
      "Explore EBoard's comprehensive governance features: meeting management, document security, AI minutes, surveys, e-signatures, and public meeting sites.",
  },

  resources: {
    ...defaultSeo,
    title: 'Resources - EBoard Solutions',
    description:
      'Explore resources for better board governance: blog posts, case studies, whitepapers, and guides.',
  },

  // Feature detail pages (using FeatureDetailPage)
  'meeting-management': {
    ...defaultSeo,
    title: 'Meeting & Agenda Management - EBoard Solutions',
    description:
      'From scheduling to minutes, automate every aspect of your board meetings. Reduce preparation time while improving engagement.',
    keywords: [
      'meeting management',
      'agenda builder',
      'minute taking',
      'meeting scheduling',
      'video conferencing',
    ],
    openGraph: {
      ...defaultSeo.openGraph,
      title: 'Meeting & Agenda Management - EBoard Solutions',
      description:
        'From scheduling to minutes, automate every aspect of your board meetings.',
      image: `${import.meta.env.BASE_URL}images/features/meeting1-og.jpg`,
    },
    twitter: {
      ...defaultSeo.twitter,
      title: 'Meeting & Agenda Management - EBoard Solutions',
      description:
        'From scheduling to minutes, automate every aspect of your board meetings.',
      image: `${import.meta.env.BASE_URL}images/features/meeting1-twitter.jpg`,
    },
  },

  'committee-management': {
    ...defaultSeo,
    title: 'Committee Management - EBoard Solutions',
    description:
      'Dedicated workspaces for each committee with granular permissions. Organize governance at scale.',
    keywords: ['committee management', 'workspaces', 'permissions', 'sub-committees'],
    openGraph: {
      ...defaultSeo.openGraph,
      title: 'Committee Management - EBoard Solutions',
      description:
        'Dedicated workspaces for each committee with granular permissions.',
      image: `${import.meta.env.BASE_URL}images/features/committee-og.jpg`,
    },
    twitter: {
      ...defaultSeo.twitter,
      title: 'Committee Management - EBoard Solutions',
      description:
        'Dedicated workspaces for each committee with granular permissions.',
      image: `${import.meta.env.BASE_URL}images/features/committee-twitter.jpg`,
    },
  },

  'document-features': {
    ...defaultSeo,
    title: 'Document Management - EBoard Solutions',
    description:
      'Secure document repository with version control, access permissions, and full audit trails for board materials.',
    keywords: [
      'document management',
      'secure repository',
      'version control',
      'audit trail',
      'board documents',
    ],
    openGraph: {
      ...defaultSeo.openGraph,
      title: 'Document Management - EBoard Solutions',
      description:
        'Secure document repository with version control and full audit trails.',
      image: `${import.meta.env.BASE_URL}images/features/document1-og.jpg`,
    },
    twitter: {
      ...defaultSeo.twitter,
      title: 'Document Management - EBoard Solutions',
      description:
        'Secure document repository with version control and full audit trails.',
      image: `${import.meta.env.BASE_URL}images/features/document1-twitter.jpg`,
    },
  },

  'integrations-support': {
    ...defaultSeo,
    title: 'Integrations - EBoard Solutions',
    description:
      'Seamlessly integrate EBoard with your favorite tools: calendar, video conferencing, storage, identity providers, and more.',
    keywords: [
      'integrations',
      'api',
      'calendar integration',
      'video conferencing',
      'single sign-on',
    ],
    openGraph: {
      ...defaultSeo.openGraph,
      title: 'Integrations - EBoard Solutions',
      description:
        'Seamlessly integrate EBoard with your favorite tools and workflows.',
      image: `${import.meta.env.BASE_URL}images/features/integrations-og.jpg`,
    },
    twitter: {
      ...defaultSeo.twitter,
      title: 'Integrations - EBoard Solutions',
      description:
        'Seamlessly integrate EBoard with your favorite tools and workflows.',
      image: `${import.meta.env.BASE_URL}images/features/integrations-twitter.jpg`,
    },
  },

  'ai-capabilities': {
    ...defaultSeo,
    title: 'AI Capabilities - EBoard Solutions',
    description:
      'Powered by Google Gemini. Leverage cutting-edge AI to transform how your board works: transcription, summarization, and more.',
    keywords: ['AI', 'artificial intelligence', 'transcription', 'summarization', 'Google Gemini'],
    openGraph: {
      ...defaultSeo.openGraph,
      title: 'AI Capabilities - EBoard Solutions',
      description:
        'Powered by Google Gemini. Leverage cutting-edge AI to transform how your board works.',
      image: `${import.meta.env.BASE_URL}images/features/ai-capabilities-og.jpg`,
    },
    twitter: {
      ...defaultSeo.twitter,
      title: 'AI Capabilities - EBoard Solutions',
      description:
        'Powered by Google Gemini. Leverage AI to transform board governance.',
      image: `${import.meta.env.BASE_URL}images/features/ai-capabilities-twitter.jpg`,
    },
  },

  security: {
    ...defaultSeo,
    title: 'Security & Compliance - EBoard Solutions',
    description:
      'Enterprise-grade security with AES-256 encryption, zero-trust architecture, ISO 27001, SOC 2 Type II, GDPR, and HIPAA compliance.',
    keywords: [
      'security',
      'compliance',
      'encryption',
      'ISO 27001',
      'SOC 2',
      'GDPR',
      'HIPAA',
      'audit',
    ],
    openGraph: {
      ...defaultSeo.openGraph,
      title: 'Security & Compliance - EBoard Solutions',
      description:
        'Enterprise-grade security with comprehensive compliance certifications.',
      image: `${import.meta.env.BASE_URL}images/security-og.jpg`,
    },
    twitter: {
      ...defaultSeo.twitter,
      title: 'Security & Compliance - EBoard Solutions',
      description:
        'Enterprise-grade security with comprehensive compliance certifications.',
      image: `${import.meta.env.BASE_URL}images/security-twitter.jpg`,
    },
  },

  guides: {
    ...defaultSeo,
    title: 'Guides - EBoard Solutions',
    description:
      'In-depth guides on board governance best practices, compliance requirements, and technology adoption.',
    keywords: [
      'guides',
      'best practices',
      'governance',
      'compliance',
      'board management',
    ],
    openGraph: {
      ...defaultSeo.openGraph,
      title: 'Guides & Resources - EBoard Solutions',
      description:
        'In-depth guides on board governance best practices and compliance.',
      image: `${import.meta.env.BASE_URL}images/resources/guides-og.jpg`,
    },
    twitter: {
      ...defaultSeo.twitter,
      title: 'Guides & Resources - EBoard Solutions',
      description:
        'In-depth guides on board governance best practices and compliance.',
      image: `${import.meta.env.BASE_URL}images/resources/guides-twitter.jpg`,
    },
  },

  'case-studies': {
    ...defaultSeo,
    title: 'Case Studies - EBoard Solutions',
    description:
      'See how boards, councils, and nonprofits use EBoard to improve governance, streamline meetings, and strengthen compliance.',
    keywords: ['case studies', 'success stories', 'testimonials', 'results'],
    openGraph: {
      ...defaultSeo.openGraph,
      title: 'Case Studies - EBoard Solutions',
      description:
        'See how organizations have transformed their governance with EBoard.',
      image: `${import.meta.env.BASE_URL}images/resources/case-studies-og.jpg`,
    },
    twitter: {
      ...defaultSeo.twitter,
      title: 'Case Studies - EBoard Solutions',
      description:
        'See how organizations have transformed their governance with EBoard.',
      image: `${import.meta.env.BASE_URL}images/resources/case-studies-twitter.jpg`,
    },
  },

  'help-center': {
    ...defaultSeo,
    title: 'Help Center - EBoard Solutions',
    description:
      'Find answers, tutorials, and support documentation for EBoard platform.',
    keywords: ['help', 'support', 'documentation', 'FAQ', 'tutorials'],
    openGraph: {
      ...defaultSeo.openGraph,
      title: 'Help Center - EBoard Solutions',
      description: 'Find answers and support documentation for EBoard platform.',
      image: `${import.meta.env.BASE_URL}images/resources/help-center-og.jpg`,
    },
    twitter: {
      ...defaultSeo.twitter,
      title: 'Help Center - EBoard Solutions',
      description: 'Find answers and support documentation for EBoard platform.',
      image: `${import.meta.env.BASE_URL}images/resources/help-center-twitter.jpg`,
    },
  },

  solutions: {
    ...defaultSeo,
    title: 'Solutions - EBoard Solutions',
    description:
      'Tailored governance solutions for educational institutions, government bodies, NGOs, and enterprises.',
  },

  education: {
    ...defaultSeo,
    title: 'Education Board Management - EBoard Solutions',
    description:
      'Streamline school board and university trustee governance with EBoard\'s education-focused platform. FERPA-compliant security.',
    keywords: [
      'education',
      'school board',
      'university',
      'higher education',
      'K-12',
      'FERPA',
    ],
    openGraph: {
      ...defaultSeo.openGraph,
      title: 'Education Solutions - EBoard Solutions',
      description:
        'Streamline school board and university trustee governance with EBoard\'s education-focused platform.',
      image: `${import.meta.env.BASE_URL}images/solutions/education-og.jpg`,
    },
    twitter: {
      ...defaultSeo.twitter,
      title: 'Education Solutions - EBoard Solutions',
      description:
        'Streamline school board and university trustee governance with EBoard\'s education-focused platform.',
      image: `${import.meta.env.BASE_URL}images/solutions/education-twitter.jpg`,
    },
  },

  government: {
    ...defaultSeo,
    title: 'Government Board Management - EBoard Solutions',
    description:
      'Secure, transparent governance for public sector organizations with FOI-compliant record keeping.',
    keywords: [
      'government',
      'public sector',
      'FOI',
      'transparency',
      'municipal',
    ],
    openGraph: {
      ...defaultSeo.openGraph,
      title: 'Government Solutions - EBoard Solutions',
      description:
        'Secure, transparent governance for public sector organizations.',
      image: `${import.meta.env.BASE_URL}images/solutions/government-og.jpg`,
    },
    twitter: {
      ...defaultSeo.twitter,
      title: 'Government Solutions - EBoard Solutions',
      description:
        'Secure, transparent governance for public sector organizations.',
      image: `${import.meta.env.BASE_URL}images/solutions/government-twitter.jpg`,
    },
  },

  ngo: {
    ...defaultSeo,
    title: 'NGO & Nonprofit Board Management - EBoard Solutions',
    description:
      'Cost-effective governance tools for mission-driven organizations and volunteer boards.',
    keywords: ['NGO', 'nonprofit', 'charity', 'volunteer', 'mission-driven'],
    openGraph: {
      ...defaultSeo.openGraph,
      title: 'NGO & Nonprofit Solutions - EBoard Solutions',
      description:
        'Cost-effective governance tools for mission-driven organizations.',
      image: `${import.meta.env.BASE_URL}images/solutions/ngo-og.jpg`,
    },
    twitter: {
      ...defaultSeo.twitter,
      title: 'NGO & Nonprofit Solutions - EBoard Solutions',
      description:
        'Cost-effective governance tools for mission-driven organizations.',
      image: `${import.meta.env.BASE_URL}images/solutions/ngo-twitter.jpg`,
    },
  },

  enterprise: {
    ...defaultSeo,
    title: 'Enterprise Board Management - EBoard Solutions',
    description:
      'Scale your corporate governance with enterprise-grade security, integrations, and analytics. Trusted by Fortune 500 companies.',
    keywords: [
      'enterprise',
      'corporate',
      'scalable',
      'enterprise-grade',
      'governance',
      'SOX',
    ],
    openGraph: {
      ...defaultSeo.openGraph,
      title: 'Enterprise Solutions - EBoard Solutions',
      description:
        'Scale your corporate governance with enterprise-grade security and analytics.',
      image: `${import.meta.env.BASE_URL}images/solutions/enterprise-og.jpg`,
    },
    twitter: {
      ...defaultSeo.twitter,
      title: 'Enterprise Solutions - EBoard Solutions',
      description:
        'Scale your corporate governance with enterprise-grade security and analytics.',
      image: `${import.meta.env.BASE_URL}images/solutions/enterprise-twitter.jpg`,
    },
  },

  contact: {
    ...defaultSeo,
    title: 'Contact Us - EBoard Solutions',
    description:
      'Get in touch with EBoard Solutions. Request a demo, ask questions, or learn more about our governance platform.',
  },

  demo: {
    ...defaultSeo,
    title: 'Book a Demo - EBoard Solutions',
    description:
      "Schedule a personalized demo of EBoard's governance platform. Choose your preferred date and time.",
  },

  about: {
    ...defaultSeo,
    title: 'About Us - EBoard Solutions',
    description:
      "Learn about EBoard Solutions' mission to transform board governance through innovative technology. Meet our team and discover our story.",
  },

  privacy: {
    ...defaultSeo,
    title: 'Privacy Policy - EBoard Solutions',
    description:
      "EBoard Solutions' privacy policy. Learn how we collect, use, and protect your personal information.",
  },

  terms: {
    ...defaultSeo,
    title: 'Terms of Service - EBoard Solutions',
    description:
      "EBoard Solutions' terms of service. Please read carefully before using our platform.",
  },
};

// Helper function to get SEO config by page key
export const getSeoConfig = (page: keyof typeof seoConfig): SeoConfig => {
  return seoConfig[page] || defaultSeo;
};

// Helper to create breadcrumb structured data
export const createBreadcrumbStructuredData = (
  items: Array<{ name: string; url: string }>
): Record<string, unknown> => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

// Organization structured data
export const organizationStructuredData: Record<string, unknown> = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/logo.svg`,
  sameAs: [
    `https://twitter.com/${siteConfig.social.twitter}`,
    `https://linkedin.com/${siteConfig.social.linkedin}`,
    `https://facebook.com/${siteConfig.social.facebook}`,
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: siteConfig.contact.phoneInternational,
    contactType: 'customer service',
    email: siteConfig.contact.email,
    availableLanguage: ['en'],
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.contact.address.street,
    addressLocality: siteConfig.contact.address.city,
    postalCode: siteConfig.contact.address.zip,
    addressCountry: siteConfig.contact.address.country,
  },
};

// WebSite structured data with search action
export const webSiteStructuredData: Record<string, unknown> = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.name,
  url: siteConfig.url,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteConfig.url}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

// Default organization and website structured data to include on all pages
export const defaultStructuredData = {
  organization: organizationStructuredData,
  webSite: webSiteStructuredData,
};
