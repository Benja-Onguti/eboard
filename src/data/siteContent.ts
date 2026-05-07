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
          {
            label: 'AI Capabilities',
            href: '/features/ai-capabilities',
            description: 'Powered by Google Gemini',
          },
          { label: 'Security', href: '/security', description: 'Military-grade encryption' },
          {
            label: 'Integrations',
            href: '/features/integrations',
            description: 'Connect your tools',
          },
          {
            label: 'Committee Management',
            href: '/features/committee-management',
            description: 'Organize committees',
          },
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
    },

    resources: {
      label: 'Resources',
      items: [
        { label: 'Guides', href: '/resources/guides', description: 'Best practices' },
        {
          label: 'Case Studies',
          href: '/resources/case-studies',
          description: 'Customer success',
        },
        { label: 'Help Center', href: '/help', description: 'Support & FAQs' },
      ],
    },
  },

  // Hero Section
  hero: {
    headline: 'AI-Powered Board solution that drives impact, not just discussion',
    subheadline:
      'Automate agendas, minutes, and summaries with smart AI. Powered by Google Gemini. Secure, scalable, and built for modern boards.',
    ctas: {
      sales: { text: 'Talk to Us', href: '/contact' },
      trial: { text: 'Book Demo', href: '/demo' },
    },
    image: { src: `${import.meta.env.BASE_URL}images/hero/Board1.png` },
  },

  // Social Proof Stats
  stats: [
    { value: 2, suffix: 'M+', label: 'Users worldwide' },
    { value: 500, suffix: '+', label: 'Organizations' },
    { value: 50, suffix: 'K+', label: 'Meetings hosted' },
    { value: 99.9, suffix: '%', label: 'Uptime SLA' },
  ],

  // Core Features - Updated with all 6 features
  coreFeatures: {
    headline: 'Everything you need for modern governance',
    subheadline: 'From AI-powered tools to enterprise-grade security, EBoard has you covered.',
    cta: { text: 'Explore All Features', href: '/features' },
    features: [
      {
        icon: 'Brain',
        title: 'AI Capabilities',
        description: 'Powered by Google Gemini and Google Cloud',
        benefits: [
          'Speech to Text transcription',
          'Text to Speech playback',
          'AI summarisation of 100+ page reports',
        ],
        gradient: 'from-purple-600 to-pink-600',
        badge: 'New',
      },
      {
        icon: 'Calendar',
        title: 'Meeting & Agenda Management',
        description: 'Streamline your entire meeting workflow',
        benefits: ['Agenda Builder', 'Minute Builder', 'Video conferencing integration'],
        gradient: 'from-blue-600 to-indigo-600',
      },
      {
        icon: 'Users',
        title: 'Committee Management',
        description: 'Organize all your committees efficiently',
        benefits: ['Unlimited committees', 'Dedicated libraries', 'Membership register'],
        gradient: 'from-green-600 to-teal-600',
      },
      {
        icon: 'FileText',
        title: 'Document & Pack Features',
        description: 'Complete document management solution',
        benefits: ['All file types supported', 'Document signing', 'Clone any agenda'],
        gradient: 'from-orange-600 to-red-600',
      },
      {
        icon: 'Shield',
        title: 'Security',
        description: 'Military-grade protection for your data',
        benefits: ['AES-256 encryption', 'Two-factor authentication', 'Activity tracking'],
        gradient: 'from-slate-600 to-gray-600',
      },
      {
        icon: 'Settings',
        title: 'Integrations & Support',
        description: 'Connect with your favorite tools',
        benefits: ['SharePoint integration', 'Unlimited training', 'Self-hosted or cloud-hosted'],
        gradient: 'from-cyan-600 to-blue-600',
      },
    ],
  },

  // Feature Deep Dives - Updated with new features
  featureDeepDives: [
    {
      id: 'AI-capabilities',
      painPoint: 'Hours spent transcribing meetings and reviewing lengthy board packs',
      solution:
        'AI-powered tools that automate transcription, summarization, and document playback',
      outcome: 'Save 95% of documentation time with 100+ page reports summarized instantly',
      capabilities: [
        'Speech to Text – Transcribe meetings, minutes, and dictation',
        'Text to Speech – Listen to documents on the go',
        'AI Summarisation – Concise summaries of board packs (100+ page reports)',
        'Powered by Google Gemini and Google Cloud',
      ],
      image: `${import.meta.env.BASE_URL}images/features/aii.jpg`,
      cta: { text: 'Explore AI Capabilities', href: '/features/ai-capabilities' },
    },
    {
      id: 'Meeting-Management',
      painPoint: 'Disorganized agendas, messy minutes, and disconnected virtual meetings',
      solution:
        'Complete meeting management with agenda builder, minute tracker, and video conferencing',
      outcome: '70% faster meeting prep with seamless Zoom & Teams integration',
      capabilities: [
        'Agenda Builder – Drag-and-drop tool for creating and publishing agendas',
        'Minute Builder – Records decisions, actions, and discussions',
        'Meeting Scheduling & Governance tools',
        'Pre-meeting preparation metrics',
      ],
      image: `${import.meta.env.BASE_URL}images/features/meeting1.jpg`,
      cta: { text: 'Learn about Meeting Management', href: '/features/meeting-management' },
    },
    {
      id: 'Committee-Management',
      painPoint: 'Multiple committees with scattered documents and unclear membership',
      solution: 'Centralized committee management with dedicated spaces for each group',
      outcome: '100% visibility across all committees with organized document libraries',
      capabilities: [
        'Unlimited committees – Create as many as you need',
        'Dedicated committee libraries for each group',
        'Membership register & history tracking',
        'Cover page per committee for branding',
      ],
      image: `${import.meta.env.BASE_URL}images/features/committee.png`,
      cta: { text: 'Explore Committee Management', href: '/features/committee-management' },
    },
    {
      id: 'Document-Features',
      painPoint: 'File format limitations, missing signatures, and manual agenda cloning',
      solution: 'Comprehensive document management with e-signatures and form builders',
      outcome: '50+ file types supported with legally binding signatures',
      capabilities: [
        'All file types supported – PDF, Word, Excel, images, and more',
        'Document signing – Legally binding e-signatures',
        'Forms & surveys – Powered by Orbeon Forms',
        'Clone any agenda – Save time with templates',
        'Votes & resolutions – Track decisions',
      ],
      image: `${import.meta.env.BASE_URL}images/features/docs.png`,
      cta: { text: 'View Document Features', href: '/features/document-management' },
    },
    {
      id: 'Security',
      painPoint: 'Sensitive board materials vulnerable to breaches and unauthorized access',
      solution: 'Military-grade encryption built on the Microsoft Enterprise Framework',
      outcome: 'Zero security breaches with complete audit trails and compliance',
      capabilities: [
        'Military-grade encryption – Built on Microsoft Enterprise Framework',
        'Two-factor authentication (2FA) – Extra layer of security',
        'Activity tracking and background audit logs',
        'Role-based document access – Granular permissions',
      ],
      image: `${import.meta.env.BASE_URL}images/features/security.jpg`,
      cta: { text: 'Explore Security Features', href: '/security' },
    },
    {
      id: 'Integrations',
      painPoint: 'Disconnected tools and workflows across your organization',
      solution: 'Seamless integrations with your existing tech stack',
      outcome: 'Unified platform with unlimited training and support',
      capabilities: [
        'SharePoint, Teams and  Zoom. ',
        'Unlimited training and support included in every plan',
        'Self-hosted or cloud-hosted options – Your choice',
      ],
      image: `${import.meta.env.BASE_URL}images/features/integration1.png`,
      cta: { text: 'View Integrations', href: '/features/integrations' },
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
      name: 'Dr. Sarah Cheng',
      title: 'Board Chair',
      organization: 'Nairobi Hospital',
      type: 'Enterprise',
      rating: 5,
      link: '/case-studies/nairobi-hospital',
    },
    {
      quote:
        '100% FOI compliance with half the staff time. The public meeting sites are a game-changer for transparency.',
      name: 'James Kimtai',
      title: 'Director  Legal Department',
      organization: 'KRA',
      type: 'government',
      rating: 5,
      link: '/case-studies/kra',
    },
    {
      quote:
        "Our volunteer board members across three continents now collaborate seamlessly. Best investment we've made.",
      name: 'Margaret Okonko',
      title: 'Executive Director',
      organization: 'KUCCPS',
      type: 'Government',
      rating: 5,
      link: '/case-studies/kuccps',
    },
    {
      quote:
        'The security and compliance features gave our executive team the confidence to go fully digital.',
      name: 'Michael Mwangi',
      title: 'Corporate Secretary',
      organization: 'Sony Sugar',
      type: 'enterprise',
      rating: 5,
      link: '/case-studies/sony-sugar',
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
      thumbnail: `${import.meta.env.BASE_URL}images/video-thumbnail.jpg`,
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
      image: `${import.meta.env.BASE_URL}images/guide-cover.jpg`,
      downloadUrl: '/downloads/governance-guide.pdf',
      pages: 45,
    },

    {
      type: 'tool',
      title: 'ROI Calculator',
      description: 'See how much your organization can save',
      image: `${import.meta.env.BASE_URL}images/calculator-icon.svg`,
      link: '/resources/roi-calculator',
      interactive: true,
    },
    {
      type: 'video',
      title: 'Product Demo: 5-Minute Overview',
      description: 'See EBoard in action',
      image: `${import.meta.env.BASE_URL}images/demo-thumbnail.jpg`,
      videoUrl: '/videos/product-demo.mp4',
      duration: '5:24',
    },
    {
      type: 'guide',
      title: 'Committee Management Best Practices',
      description: 'How to organize and run effective committees',
      image: `${import.meta.env.BASE_URL}images/committee-guide.jpg`,
      downloadUrl: '/downloads/committee-management-guide.pdf',
      pages: 18,
    },
  ],

  // Final CTA
  finalCTA: {
    headline: 'Start governing better today',
    subheadline: 'Join 500+ organizations already using EBoard',
    ctas: [
      { text: 'Book Demo', href: '/demo', primary: true },
      { text: 'Contact Us', href: '/contact', primary: true },
    ],
    trustIndicators: ['No credit card required', '14-day free trial', 'Cancel anytime'],
  },

  // Footer
  footer: {
    product: {
      title: 'Product',
      links: [
        { label: 'Features', href: '/features' },
        { label: 'AI Capabilities', href: '/features/ai-capabilities' },
        { label: 'Meeting Management', href: '/features/meeting-management' },
        { label: 'Committee Management', href: '/features/committee-management' },
        { label: 'Document Management', href: '/features/document-management' },
        { label: 'Security', href: '/security' },
        { label: 'Integrations', href: '/features/integrations' },
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
        { label: 'Legal', href: '/roles/legal' },
        { label: 'IT', href: '/roles/it' },
      ],
    },
    resources: {
      title: 'Resources',
      links: [
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
        { label: 'Security', href: '/security' },
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
    copyright: '© 2026 EBoard Solutions. All rights reserved.',
  },
};
