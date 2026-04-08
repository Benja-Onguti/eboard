/**
 * Centralized route configuration for EBoard Solutions
 * All application routes are defined here for consistency and easy maintenance
 */

export const ROUTES = {
  // Public routes
  HOME: '/',

  // Platform routes
  PLATFORM: {
    INDEX: '/platform',
    FEATURES: '/features',
    FEATURE_DETAIL: (id: string) => `/features/${id}`,
    SECURITY: '/security',
    INTEGRATIONS: '/integrations',
    ROADMAP: '/roadmap',
  },

  // Solutions / Use Cases routes
  SOLUTIONS: {
    INDEX: '/solutions',
    EDUCATION: '/solutions/education',
    GOVERNMENT: '/solutions/government',
    NGOS: '/solutions/ngos',
    ENTERPRISE: '/solutions/enterprise',
  },

  // Role-specific routes
  ROLES: {
    INDEX: '/roles',
    EXECUTIVES: '/roles/executives',
    ADMINISTRATORS: '/roles/administrators',
    DIRECTORS: '/roles/directors',
    LEGAL: '/roles/legal',
    IT: '/roles/it',
  },

  // Resources routes
  RESOURCES: {
    INDEX: '/resources',
    GUIDES: '/resources/guides',
    GUIDE: (slug: string) => `/resources/guides/${slug}`,
    CASE_STUDIES: '/resources/case-studies',
    CASE_STUDY: (slug: string) => `/resources/case-studies/${slug}`,
    WHITEPAPERS: '/resources/whitepapers',
    WHITEPAPER: (slug: string) => `/resources/whitepapers/${slug}`,
    WEBINARS: '/resources/webinars',
    WEBINAR: (slug: string) => `/resources/webinars/${slug}`,
    ROI_CALCULATOR: '/resources/roi-calculator',
    HELP_CENTER: '/help',
    FAQ: '/help/faq',
    DOCUMENTATION: '/help/docs',
    SUPPORT: '/help/support',
  },

  // Company routes
  COMPANY: {
    INDEX: '/company',
    ABOUT: '/about',
    TEAM: '/about/team',
    CAREERS: '/careers',
    CAREER: (slug: string) => `/careers/${slug}`,
    NEWS: '/news',
    PRESS: '/press',
    CONTACT: '/contact',
    PARTNERS: '/partners',
    BECOME_PARTNER: '/partners/become-a-partner',
    EVENTS: '/events',
  },

  // Legal routes
  LEGAL: {
    PRIVACY: '/privacy',
    TERMS: '/terms',
    COOKIES: '/cookies',
    GDPR: '/gdpr',
    COMPLIANCE: '/compliance',
    SECURITY: '/security',
    SLA: '/sla',
    DPA: '/dpa',
    SUBPROCESSORS: '/subprocessors',
  },

  // Demo & Trial routes
  DEMO: {
    INDEX: '/demo',
    BOOK: '/demo/book',
    CONFIRMATION: '/demo/confirmation',
    REQUEST: '/demo/request',
    WATCH: '/demo/watch',
    WEBINAR: '/demo/webinar',
  },

  // Marketing landing pages
  MARKETING: {
    FEATURES_OVERVIEW: '/features',
    MEETING_MANAGEMENT: '/features/meeting-management',
    DOCUMENT_MANAGEMENT: '/features/document-management',
    AI_MINUTES: '/features/ai-minutes',
    E_SIGNATURES: '/features/e-signatures',
    SURVEYS: '/features/surveys',
    PUBLIC_SITES: '/features/public-sites',
    SECURITY: '/security',
    INTEGRATIONS_OVERVIEW: '/integrations',
    INTEGRATION: (name: string) => `/integrations/${name}`,
  },

  // Campaign/Seasonal routes
  CAMPAIGNS: {
    Q1_2025: '/campaigns/q1-2025',
    WEBINAR_SERIES: '/webinar-series',
    GOVERNANCE_SUMMIT: '/governance-summit-2025',
  },

  // System routes
  SYSTEM: {
    HEALTH: '/health',
    STATUS: '/status',
    MAINTENANCE: '/maintenance',
    ERROR_404: '/404',
    ERROR_500: '/500',
    UNAUTHORIZED: '/unauthorized',
    FORBIDDEN: '/forbidden',
  },
} as const;

// Type for route parameters
export type RouteParams = {
  id?: string;
  slug?: string;
  name?: string;
};

// Helper function to get dynamic routes with parameters
export const getRoute = (
  route: string | ((params: RouteParams) => string),
  params?: RouteParams
): string => {
  if (typeof route === 'function') {
    return route(params || {});
  }
  return route;
};

// Navigation structure for menus
export const NAVIGATION = {
  main: [
    {
      label: 'Platform',
      href: ROUTES.PLATFORM.INDEX,
      children: [
        { label: 'Features', href: ROUTES.PLATFORM.FEATURES },
        { label: 'Security', href: ROUTES.PLATFORM.SECURITY },
        { label: 'Integrations', href: ROUTES.PLATFORM.INTEGRATIONS },
        { label: 'Roadmap', href: ROUTES.PLATFORM.ROADMAP },
      ],
    },
    {
      label: 'Use Cases',
      href: ROUTES.SOLUTIONS.INDEX,
      children: [
        { label: 'Education', href: ROUTES.SOLUTIONS.EDUCATION },
        { label: 'Government', href: ROUTES.SOLUTIONS.GOVERNMENT },
        { label: 'NGOs', href: ROUTES.SOLUTIONS.NGOS },
        { label: 'Enterprise', href: ROUTES.SOLUTIONS.ENTERPRISE },
      ],
    },
    {
      label: 'Resources',
      href: ROUTES.RESOURCES.INDEX,
      children: [
        { label: 'Guides', href: ROUTES.RESOURCES.GUIDES },
        { label: 'Case Studies', href: ROUTES.RESOURCES.CASE_STUDIES },
        { label: 'Whitepapers', href: ROUTES.RESOURCES.WHITEPAPERS },
        { label: 'Webinars', href: ROUTES.RESOURCES.WEBINARS },
        { label: 'ROI Calculator', href: ROUTES.RESOURCES.ROI_CALCULATOR },
        { label: 'Help Center', href: ROUTES.RESOURCES.HELP_CENTER },
      ],
    },
  ],

  footer: {
    product: [
      { label: 'Features', href: ROUTES.PLATFORM.FEATURES },
      { label: 'Security', href: ROUTES.PLATFORM.SECURITY },
      { label: 'Integrations', href: ROUTES.PLATFORM.INTEGRATIONS },
      { label: 'Roadmap', href: ROUTES.PLATFORM.ROADMAP },
    ],
    industries: [
      { label: 'Education', href: ROUTES.SOLUTIONS.EDUCATION },
      { label: 'Government', href: ROUTES.SOLUTIONS.GOVERNMENT },
      { label: 'NGOs', href: ROUTES.SOLUTIONS.NGOS },
      { label: 'Enterprise', href: ROUTES.SOLUTIONS.ENTERPRISE },
    ],
    roles: [
      { label: 'Executives', href: ROUTES.ROLES.EXECUTIVES },
      { label: 'Administrators', href: ROUTES.ROLES.ADMINISTRATORS },
      { label: 'Directors', href: ROUTES.ROLES.DIRECTORS },
      { label: 'Legal', href: ROUTES.ROLES.LEGAL },
      { label: 'IT', href: ROUTES.ROLES.IT },
    ],
    resources: [
      { label: 'Guides', href: ROUTES.RESOURCES.GUIDES },
      { label: 'Case Studies', href: ROUTES.RESOURCES.CASE_STUDIES },
      { label: 'Whitepapers', href: ROUTES.RESOURCES.WHITEPAPERS },
      { label: 'Webinars', href: ROUTES.RESOURCES.WEBINARS },
      { label: 'ROI Calculator', href: ROUTES.RESOURCES.ROI_CALCULATOR },
      { label: 'Help Center', href: ROUTES.RESOURCES.HELP_CENTER },
    ],
    company: [
      { label: 'About Us', href: ROUTES.COMPANY.ABOUT },
      { label: 'Team', href: ROUTES.COMPANY.TEAM },
      { label: 'Careers', href: ROUTES.COMPANY.CAREERS },
      { label: 'News', href: ROUTES.COMPANY.NEWS },
      { label: 'Press', href: ROUTES.COMPANY.PRESS },
      { label: 'Contact', href: ROUTES.COMPANY.CONTACT },
      { label: 'Partners', href: ROUTES.COMPANY.PARTNERS },
      { label: 'Events', href: ROUTES.COMPANY.EVENTS },
    ],
    legal: [
      { label: 'Privacy Policy', href: ROUTES.LEGAL.PRIVACY },
      { label: 'Terms of Service', href: ROUTES.LEGAL.TERMS },
      { label: 'Cookie Policy', href: ROUTES.LEGAL.COOKIES },
      { label: 'GDPR', href: ROUTES.LEGAL.GDPR },
      { label: 'Compliance', href: ROUTES.LEGAL.COMPLIANCE },
      { label: 'Security', href: ROUTES.LEGAL.SECURITY },
      { label: 'SLA', href: ROUTES.LEGAL.SLA },
      { label: 'DPA', href: ROUTES.LEGAL.DPA },
    ],
  },
} as const;

// Breadcrumb mappings
export const BREADCRUMBS: Record<string, { label: string; parent?: string }> = {
  [ROUTES.HOME]: { label: 'Home' },

  // Platform
  [ROUTES.PLATFORM.INDEX]: { label: 'Platform', parent: ROUTES.HOME },
  [ROUTES.PLATFORM.FEATURES]: { label: 'Features', parent: ROUTES.PLATFORM.INDEX },
  [ROUTES.PLATFORM.SECURITY]: { label: 'Security', parent: ROUTES.PLATFORM.INDEX },
  [ROUTES.PLATFORM.INTEGRATIONS]: { label: 'Integrations', parent: ROUTES.PLATFORM.INDEX },

  // Solutions
  [ROUTES.SOLUTIONS.INDEX]: { label: 'Use Cases', parent: ROUTES.HOME },
  [ROUTES.SOLUTIONS.EDUCATION]: { label: 'Education', parent: ROUTES.SOLUTIONS.INDEX },
  [ROUTES.SOLUTIONS.GOVERNMENT]: { label: 'Government', parent: ROUTES.SOLUTIONS.INDEX },
  [ROUTES.SOLUTIONS.NGOS]: { label: 'NGOs', parent: ROUTES.SOLUTIONS.INDEX },
  [ROUTES.SOLUTIONS.ENTERPRISE]: { label: 'Enterprise', parent: ROUTES.SOLUTIONS.INDEX },

  // Resources
  [ROUTES.RESOURCES.INDEX]: { label: 'Resources', parent: ROUTES.HOME },
  [ROUTES.RESOURCES.GUIDES]: { label: 'Guides', parent: ROUTES.RESOURCES.INDEX },
  [ROUTES.RESOURCES.CASE_STUDIES]: { label: 'Case Studies', parent: ROUTES.RESOURCES.INDEX },

  // Company
  [ROUTES.COMPANY.ABOUT]: { label: 'About Us', parent: ROUTES.HOME },
  [ROUTES.COMPANY.CAREERS]: { label: 'Careers', parent: ROUTES.HOME },
  [ROUTES.COMPANY.CONTACT]: { label: 'Contact', parent: ROUTES.HOME },

  // Legal
  [ROUTES.LEGAL.PRIVACY]: { label: 'Privacy Policy', parent: ROUTES.HOME },
  [ROUTES.LEGAL.TERMS]: { label: 'Terms of Service', parent: ROUTES.HOME },
};

// SEO-friendly URL slugs
export const SLUGS = {
  features: {
    'meeting-management': 'streamline-board-meetings',
    'document-management': 'secure-document-repository',
    'ai-minutes': 'ai-powered-meeting-minutes',
    'e-signatures': 'legally-binding-e-signatures',
    surveys: 'board-surveys-forms',
    'public-sites': 'public-meeting-portals',
  },
  solutions: {
    education: 'board-management-for-education',
    government: 'board-portal-for-government',
    ngos: 'board-management-for-nonprofits',
    enterprise: 'corporate-board-management',
  },
  resources: {
    guides: 'board-governance-guides',
    whitepapers: 'governance-whitepapers',
    'case-studies': 'board-portal-case-studies',
  },
} as const;

// Redirect rules (for old URLs or marketing campaigns)
export const REDIRECTS: Record<string, string> = {
  '/old-features': ROUTES.PLATFORM.FEATURES,
  '/old-contact': ROUTES.COMPANY.CONTACT,
  '/blog/old-post': '/blog/new-post',
  '/whitepaper': ROUTES.RESOURCES.WHITEPAPERS,
};

// Type for route keys
export type RouteKey = keyof typeof ROUTES;
export type NavigationKey = keyof typeof NAVIGATION;

export default ROUTES;
