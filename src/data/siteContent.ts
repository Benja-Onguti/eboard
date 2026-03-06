// Main content file for easy updates

export const siteContent = {
  // Navigation
  nav: {
    logo: 'EBoard Solutions',
    menu: {
      platform: {
        label: 'Platform',
        items: [
          { label: 'Features', href: '/features', description: 'Explore all features' },
          { label: 'Security', href: '/security', description: 'Enterprise-grade security' },
          { label: 'Integrations', href: '/integrations', description: 'Connect your tools' },
        ],
      },
      useCases: {
        label: 'Use Cases',
        items: [
          {
            label: 'Education',
            href: '/solutions/education',
            description: 'School boards & trustees',
          },
          {
            label: 'Government',
            href: '/solutions/government',
            description: 'Public sector councils',
          },
          { label: 'NGOs', href: '/solutions/ngos', description: 'Nonprofit boards' },
          {
            label: 'Enterprise',
            href: '/solutions/enterprise',
            description: 'Corporate governance',
          },
        ],
      },
      resources: {
        label: 'Resources',
        items: [
          { label: 'Blog', href: '/blog', description: 'Governance insights' },
          { label: 'Guides', href: '/resources/guides', description: 'Best practices' },
          {
            label: 'Case Studies',
            href: '/resources/case-studies',
            description: 'Customer success',
          },
          { label: 'Help Center', href: '/help', description: 'Support & FAQs' },
        ],
      },
      pricing: { label: 'Pricing', href: '/pricing' },
    },
    ctas: {
      trial: 'Free Trial',
      login: 'Log In',
    },
  },

  // Hero Section
  hero: {
    headline: 'Board meetings that drive impact, not just discussion',
    subheadline:
      'Reduce meeting prep time by 70% with AI-powered governance that keeps everyone aligned and accountable.',
    ctas: {
      sales: { text: 'Talk to Sales', href: '/contact' },
      trial: { text: 'Try Now', href: '/demo' },
    },
    image: '/images/hero-dashboard.jpg',
    video: '/videos/hero-preview.mp4',
  },

  // Social Proof Stats
  stats: [
    { value: '2M+', label: 'Users worldwide' },
    { value: '500+', label: 'Organizations' },
    { value: '50K+', label: 'Meetings hosted' },
    { value: '99.9%', label: 'Uptime SLA' },
  ],

  // Core Features
  coreFeatures: {
    headline: 'Everything you need for modern governance',
    subheadline:
      'Streamline your entire board workflow with integrated tools designed for efficiency and security.',
    cta: { text: 'See it in action', href: '/demo' },
    features: [
      {
        icon: 'Calendar',
        title: 'Meeting Management',
        description: 'From scheduling to minutes, automate your entire meeting workflow.',
        benefits: ['AI-powered scheduling', 'Digital agendas', 'Automated minutes'],
      },
      {
        icon: 'Shield',
        title: 'Bank-Level Security',
        description: 'Enterprise-grade encryption and compliance for sensitive board materials.',
        benefits: ['AES-256 encryption', 'ISO 27001 certified', 'Audit trails'],
      },
      {
        icon: 'Brain',
        title: 'AI-Powered Minutes',
        description: 'Let AI capture decisions, actions, and key discussion points automatically.',
        benefits: ['Real-time transcription', 'Action item tracking', 'Smart summaries'],
      },
      {
        icon: 'FileText',
        title: 'Document Hub',
        description: 'Centralized, version-controlled repository for all board documents.',
        benefits: ['Version history', 'Granular permissions', 'Full-text search'],
      },
    ],
  },

  // Feature Deep Dives (alternating pattern)
  featureDeepDives: [
    {
      id: 'meetings',
      painPoint: 'Hours wasted on meeting prep and manual minutes',
      solution: 'AI-powered meeting management that cuts prep time by 70%',
      outcome: 'Your team focuses on strategic decisions, not administrative work',
      capabilities: [
        'Automated agenda building from previous meetings',
        'One-click board pack assembly',
        'Real-time collaboration during meetings',
        'AI-generated minutes with action items',
      ],
      image: '/images/feature-meetings.jpg',
      cta: { text: 'Learn more about Meetings', href: '/features/meeting-management' },
    },
    {
      id: 'security',
      painPoint: 'Sensitive board materials spread across insecure channels',
      solution: 'Bank-level security with complete audit trails',
      outcome: 'Peace of mind knowing your data is protected and compliant',
      capabilities: [
        'End-to-end encryption',
        'Granular access controls',
        'Automatic redaction for FOI',
        'Complete audit logging',
      ],
      image: '/images/feature-security.jpg',
      cta: { text: 'Explore Security', href: '/security' },
    },
    {
      id: 'collaboration',
      painPoint: 'Disconnected board members struggling to stay aligned',
      solution: 'Unified platform for seamless board collaboration',
      outcome: 'Better decisions through informed, engaged directors',
      capabilities: [
        'Secure messaging and discussions',
        'Document annotations',
        'Voting and approvals',
        'Meeting recordings',
      ],
      image: '/images/feature-collaboration.jpg',
      cta: { text: 'See Collaboration', href: '/features/collaboration' },
    },
    {
      id: 'compliance',
      painPoint: 'Complex compliance requirements across jurisdictions',
      solution: 'Built-in compliance for global regulations',
      outcome: 'Automated compliance with FOI, GDPR, and industry standards',
      capabilities: [
        'FOI-compliant record keeping',
        'GDPR-ready data handling',
        'Public meeting portals',
        'Retention policies',
      ],
      image: '/images/feature-compliance.jpg',
      cta: { text: 'View Compliance', href: '/compliance' },
    },
  ],

  // User Role Segmentation
  userRoles: [
    {
      role: 'Executives',
      icon: 'Briefcase',
      valueProp: 'Strategic oversight with real-time insights',
      benefits: ['Dashboard of board activities', 'Key decision tracking', 'Performance analytics'],
      cta: 'Learn more for Executives',
    },
    {
      role: 'Administrators',
      icon: 'Settings',
      valueProp: 'Efficient workflow management',
      benefits: ['Bulk document uploads', 'Automated reminders', 'Meeting templates'],
      cta: 'See Admin features',
    },
    {
      role: 'Directors',
      icon: 'Users',
      valueProp: 'Easy participation from anywhere',
      benefits: ['Mobile-friendly access', 'Offline reading', 'Simple annotation tools'],
      cta: 'View Director experience',
    },
    {
      role: 'Legal',
      icon: 'Scale',
      valueProp: 'Compliance and risk management',
      benefits: ['Audit-ready records', 'Retention policies', 'E-signature compliance'],
      cta: 'Explore Legal features',
    },
  ],

  // Testimonials
  testimonials: [
    {
      quote:
        'EBoard cut our meeting prep time from two weeks to two days. Our board members actually enjoy using it.',
      name: 'Dr. Sarah Chen',
      title: 'Board Chair',
      organization: 'Lincoln School District',
      type: 'education',
      rating: 5,
      link: '/case-studies/lincoln-school-district',
    },
    {
      quote:
        '100% FOI compliance with half the staff time. The public meeting sites are a game-changer for transparency.',
      name: 'James Rodriguez',
      title: 'City Clerk',
      organization: 'City of Riverside',
      type: 'government',
      rating: 5,
      link: '/case-studies/city-of-riverside',
    },
    {
      quote:
        "Our volunteer board members across three continents now collaborate seamlessly. Best investment we've made.",
      name: 'Margaret Okonkwo',
      title: 'Executive Director',
      organization: 'Global Health Initiative',
      type: 'ngo',
      rating: 5,
      link: '/case-studies/global-health-initiative',
    },
    {
      quote:
        'The security and compliance features gave our executive team the confidence to go fully digital.',
      name: 'Michael Torres',
      title: 'Corporate Secretary',
      organization: 'Torres Industries',
      type: 'enterprise',
      rating: 5,
      link: '/case-studies/torres-industries',
    },
  ],

  // Results/Metrics
  results: {
    metrics: [
      { value: '70%', label: 'Faster meeting preparation' },
      { value: '50%', label: 'Reduction in admin costs' },
      { value: '100%', label: 'FOI compliance achieved' },
      { value: '95%', label: 'Board member satisfaction' },
    ],
    videoCaseStudy: {
      title: 'How Riverside City Council transformed governance',
      thumbnail: '/images/video-thumbnail.jpg',
      videoUrl: '/videos/riverside-case-study.mp4',
      duration: '4:32',
    },
  },

  // Resource Library
  resources: [
    {
      type: 'ebook',
      title: 'The Complete Guide to Board Governance',
      description: 'Best practices for modern board management',
      image: '/images/guide-cover.jpg',
      downloadUrl: '/downloads/governance-guide.pdf',
      pages: 45,
    },
    {
      type: 'whitepaper',
      title: 'Board Portal Security: ISO 27001 and Beyond',
      description: 'Understanding security certifications',
      image: '/images/whitepaper-cover.jpg',
      downloadUrl: '/downloads/security-whitepaper.pdf',
      pages: 32,
    },
    {
      type: 'tool',
      title: 'ROI Calculator',
      description: 'See how much your organization can save',
      image: '/images/calculator-icon.svg',
      link: '/resources/roi-calculator',
      interactive: true,
    },
    {
      type: 'video',
      title: 'Product Demo: 5-Minute Overview',
      description: 'See EBoard in action',
      image: '/images/demo-thumbnail.jpg',
      videoUrl: '/videos/product-demo.mp4',
      duration: '5:24',
    },
  ],

  // Final CTA
  finalCTA: {
    headline: 'Start governing better today',
    subheadline: 'Join 500+ organizations already using EBoard',
    ctas: [
      { text: 'Request Demo', href: '/demo', primary: true },
      { text: 'Free Trial', href: '/signup', primary: false },
    ],
    trustIndicators: ['No credit card required', '14-day free trial', 'Cancel anytime'],
  },

  // Footer
  footer: {
    product: {
      title: 'Product',
      links: [
        { label: 'Features', href: '/features' },
        { label: 'Security', href: '/security' },
        { label: 'Integrations', href: '/integrations' },
        { label: 'Pricing', href: '/pricing' },
      ],
    },
    industries: {
      title: 'Industries',
      links: [
        { label: 'Education', href: '/solutions/education' },
        { label: 'Government', href: '/solutions/government' },
        { label: 'NGOs', href: '/solutions/ngos' },
        { label: 'Enterprise', href: '/solutions/enterprise' },
      ],
    },
    roles: {
      title: 'Roles',
      links: [
        { label: 'Executives', href: '/roles/executives' },
        { label: 'Administrators', href: '/roles/administrators' },
        { label: 'Directors', href: '/roles/directors' },
        { label: 'Legal', href: '/roles/legal' },
      ],
    },
    resources: {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '/blog' },
        { label: 'Guides', href: '/resources/guides' },
        { label: 'Case Studies', href: '/resources/case-studies' },
        { label: 'Help Center', href: '/help' },
      ],
    },
    company: {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Contact', href: '/contact' },
        { label: 'Careers', href: '/careers' },
        { label: 'Partners', href: '/partners' },
      ],
    },
    legal: {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Compliance', href: '/compliance' },
        { label: 'Cookie Policy', href: '/cookies' },
      ],
    },
    social: [
      { platform: 'Twitter', icon: 'Twitter', href: 'https://twitter.com/eboardsolutions' },
      {
        platform: 'LinkedIn',
        icon: 'LinkedIn',
        href: 'https://linkedin.com/company/eboard-solutions',
      },
      { platform: 'Facebook', icon: 'Facebook', href: 'https://facebook.com/eboardsolutions' },
      { platform: 'YouTube', icon: 'YouTube', href: 'https://youtube.com/@eboardsolutions' },
    ],
    copyright: '© 2025 EBoard Solutions. All rights reserved.',
  },
};
