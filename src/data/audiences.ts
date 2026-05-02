export interface AudienceChallenge {
  icon: string;
  title: string;
  description: string;
}

export interface AudienceSolution {
  title: string;
  description: string;
}

export interface AudienceFeature {
  icon: string;
  title: string;
  description: string;
}

export interface AudienceStat {
  value: string;
  label: string;
  color: string;
}

export interface AudienceTestimonial {
  quote: string;
  name: string;
  role: string;
  organization: string;
}

export interface AudienceConfig {
  id: string;
  name: string;
  theme: {
    primary: string;
    primaryLight: string;
    primaryDark: string;
  };
  hero: {
    headline: string;
    highlight: string;
    subtitle: string;
    stats: AudienceStat[];
    badge: {
      label: string;
      value: string;
      icon: string;
    };
    trustBadge: {
      text: string;
      icon: string;
      label?: string;
    };
    image: string;
  };
  challenges: {
    badge?: string;
    title: string;
    subtitle?: string;
    items: AudienceChallenge[];
  };
  solution: {
    title: string;
    description?: string;
    items: AudienceSolution[];
    image: string;
  };
  features: {
    badge?: string;
    title: string;
    subtitle?: string;
    items: AudienceFeature[];
  };
  testimonial: AudienceTestimonial;
  cta: {
    title: string;
    subtitle: string;
    demoButton: string;
    contactButton: string;
    showContact?: boolean;
  };
  helmet: {
    title: string;
    description: string;
  };
}

export const audiences: Record<string, AudienceConfig> = {
  education: {
    id: 'education',
    name: 'Education',
    theme: {
      primary: 'blue',
      primaryLight: 'blue-100',
      primaryDark: 'blue-600',
    },
    hero: {
      headline: 'Streamlined governance for',
      highlight: 'educational institutions',
      subtitle:
        'Empower school boards, university trustees, and academic committees with modern governance tools designed specifically for education.',
      stats: [
        { value: '200+', label: 'Institutions', color: 'blue-600' },
        { value: '70%', label: 'Time Saved', color: 'green-600' },
        { value: '98%', label: 'Satisfaction', color: 'blue-600' },
      ],
      badge: {
        label: 'Compliance',
        value: 'FERPA',
        icon: 'Shield',
      },
      trustBadge: {
        text: '50K+ Users',
        icon: 'Award',
      },
      image: '/images/solutions/education-hero.jpg',
    },
    challenges: {
      badge: 'Challenges',
      title: 'Common challenges in education governance',
      subtitle: 'We understand the unique complexities of managing educational boards.',
      items: [
        {
          icon: 'Calendar',
          title: 'Scheduling conflicts',
          description: 'Coordinating busy faculty, administrators, and trustees across multiple campuses',
        },
        {
          icon: 'Shield',
          title: 'Compliance requirements',
          description: 'Managing accreditation, FERPA, and state education regulations',
        },
        {
          icon: 'Users',
          title: 'Member engagement',
          description: 'Keeping board members engaged with varying technical expertise',
        },
        {
          icon: 'FileText',
          title: 'Document management',
          description: 'Organizing policies, minutes, and reports across years',
        },
        {
          icon: 'Globe',
          title: 'Public transparency',
          description: 'Maintaining transparency with parents and community stakeholders',
        },
        {
          icon: 'Clock',
          title: 'Time constraints',
          description: 'Limited time for meeting preparation and follow-up',
        },
      ],
    },
    solution: {
      title: 'How EBoard transforms education governance',
      description:
        'Our platform addresses the unique needs of educational boards with features designed for academic environments.',
      items: [
        {
          title: 'Multi-campus coordination',
          description: 'Seamlessly manage boards across multiple campuses, districts, or universities',
        },
        {
          title: 'FERPA-compliant security',
          description: 'Student data protection with granular access controls and audit trails',
        },
        {
          title: 'Academic calendar integration',
          description: 'Sync with school calendars and schedule meetings around academic terms',
        },
        {
          title: 'Public meeting portals',
          description: 'Transparent public archives for community engagement and accountability',
        },
      ],
      image: '/images/solutions/education-solution.jpg',
    },
    features: {
      badge: 'Features',
      title: 'Everything you need for education governance',
      subtitle: 'Comprehensive tools designed for educational institutions.',
      items: [
        {
          icon: 'Calendar',
          title: 'Meeting Management',
          description: 'Schedule meetings around academic calendars with automated reminders',
        },
        {
          icon: 'FileText',
          title: 'Document Repository',
          description: 'Centralized storage for policies, minutes, and reports with version control',
        },
        {
          icon: 'Shield',
          title: 'FERPA Compliance',
          description: 'Student data protection with role-based access and audit trails',
        },
        {
          icon: 'Users',
          title: 'Committee Management',
          description: 'Manage sub-committees, task forces, and working groups',
        },
        {
          icon: 'Globe',
          title: 'Public Portals',
          description: 'Transparent public meeting archives for community engagement',
        },
        {
          icon: 'Award',
          title: 'Accreditation Support',
          description: 'Organize documentation for accreditation reviews and compliance',
        },
      ],
    },
    testimonial: {
      quote:
        '"EBoard has transformed how our school board operates. What used to take weeks of preparation now happens in days. The AI minutes feature alone saves us hours after every meeting."',
      name: 'Dr. Sarah Chen',
      role: 'Board Chair',
      organization: 'Lincoln School District',
    },
    cta: {
      title: 'Ready to transform your education board?',
      subtitle: 'Join 200+ educational institutions already using EBoard to streamline governance.',
      demoButton: 'Schedule Demo',
      contactButton: 'Contact Us',
    },
    helmet: {
      title: 'Education Board Management - EBoard Solutions',
      description:
        'Streamline school board and university trustee governance with EBoard\'s education-focused platform. Reduce meeting prep time by 70%.',
    },
  },
  government: {
    id: 'government',
    name: 'Government',
    theme: {
      primary: 'purple',
      primaryLight: 'purple-100',
      primaryDark: 'purple-600',
    },
    hero: {
      headline: 'Secure, transparent governance for',
      highlight: 'public sector',
      subtitle:
        'Meet compliance requirements while improving efficiency. Achieve 100% FOI compliance with half the administrative workload.',
      stats: [
        { value: '150+', label: 'Agencies', color: 'purple-600' },
        { value: '100%', label: 'FOI Compliance', color: 'green-600' },
        { value: '50%', label: 'Cost Reduction', color: 'purple-600' },
      ],
      badge: {
        label: 'Compliance',
        value: 'ISO 27001',
        icon: 'Award',
      },
      trustBadge: {
        text: 'FedRAMP Certified',
        icon: 'Shield',
      },
      image: '/images/solutions/government-hero.jpg',
    },
    challenges: {
      badge: 'Compliance',
      title: 'Built for government compliance',
      subtitle: 'Meet the strictest regulatory requirements with confidence.',
      items: [
        {
          icon: 'FileCheck',
          title: 'FOI Compliance',
          description: 'Automated record keeping and public records management',
        },
        {
          icon: 'Lock',
          title: 'Security Certifications',
          description: 'ISO 27001, SOC 2, FedRAMP compliant infrastructure',
        },
        {
          icon: 'Eye',
          title: 'Public Transparency',
          description: 'Automated public meeting portals and archives',
        },
        {
          icon: 'Scale',
          title: 'Legal Compliance',
          description: 'Meeting accessibility and open meeting laws',
        },
      ],
    },
    solution: {
      title: 'Automate FOI compliance with confidence',
      description:
        'Never worry about FOI requests again. Our platform automatically manages public records while protecting sensitive information.',
      items: [
        {
          title: 'Automated Record Keeping',
          description: 'Every meeting, document, and decision is automatically archived with complete audit trails',
        },
        {
          title: 'Smart Redaction',
          description: 'AI-powered tools automatically redact sensitive information before public release',
        },
        {
          title: 'Public Portals',
          description: 'One-click publishing to public-facing archives with customizable branding',
        },
        {
          title: 'Request Management',
          description: 'Streamlined workflow for handling and tracking FOI requests',
        },
      ],
      image: '/images/solutions/foi-dashboard.jpg',
    },
    features: {
      badge: 'Features',
      title: 'Government-grade governance tools',
      subtitle: 'Everything you need to manage public sector boards efficiently and transparently.',
      items: [
        {
          icon: 'Shield',
          title: 'Secure Document Management',
          description: 'AES-256 encrypted storage with granular access controls and audit trails',
        },
        {
          icon: 'Globe',
          title: 'Public Meeting Portals',
          description: 'Automated public archives with customizable branding and accessibility features',
        },
        {
          icon: 'FileText',
          title: 'FOI-Ready Records',
          description: 'Complete audit trails and automated redaction for public records requests',
        },
        {
          icon: 'Users',
          title: 'Multi-Agency Management',
          description: 'Manage multiple councils, committees, and boards from one platform',
        },
        {
          icon: 'Landmark',
          title: 'Public Meeting Support',
          description: 'Live streaming, public comment management, and accessibility tools',
        },
        {
          icon: 'Scale',
          title: 'Compliance Automation',
          description: 'Automated compliance with open meeting laws and public records acts',
        },
      ],
    },
    testimonial: {
      quote:
        '"EBoard helped us achieve 100% FOI compliance while reducing administrative workload by 50%. The public meeting sites have transformed how we engage with our community."',
      name: 'James Rodriguez',
      role: 'City Clerk',
      organization: 'City of Riverside',
    },
    cta: {
      title: 'Ready to transform your public sector governance?',
      subtitle: 'Join 150+ government agencies using EBoard to streamline operations and ensure compliance.',
      demoButton: 'Schedule Demo',
      contactButton: 'Contact Sales',
    },
    helmet: {
      title: 'Government Board Management - EBoard Solutions',
      description:
        'Secure, transparent governance for public sector organizations. Achieve 100% FOI compliance with EBoard\'s government-grade platform.',
    },
  },
  ngo: {
    id: 'ngo',
    name: 'NGO',
    theme: {
      primary: 'red',
      primaryLight: 'red-100',
      primaryDark: 'red-600',
    },
    hero: {
      headline: 'Cost-effective governance for',
      highlight: 'mission-driven organizations',
      subtitle:
        'Maximize your impact with affordable, easy-to-use governance tools. Reduce costs by 50% while improving volunteer engagement.',
      stats: [
        { value: '300+', label: 'Nonprofits', color: 'red-600' },
        { value: '50%', label: 'Cost Savings', color: 'green-600' },
        { value: '40K+', label: 'Volunteers', color: 'orange-600' },
      ],
      badge: {
        label: 'Average cost reduction',
        value: '50%',
        icon: 'Target',
      },
      trustBadge: {
        text: 'Nonprofit Pricing',
        icon: 'Award',
      },
      image: '/images/solutions/ngo-hero.jpg',
    },
    challenges: {
      badge: 'Challenges',
      title: 'Unique challenges for nonprofit boards',
      items: [
        {
          icon: 'Users',
          title: 'Volunteer board members',
          description: 'Limited time and varying technical skills among volunteer directors',
        },
        {
          icon: 'DollarSign',
          title: 'Tight budgets',
          description: 'Need for cost-effective solutions that maximize every dollar',
        },
        {
          icon: 'Globe',
          title: 'Global reach',
          description: 'Board members spread across different countries and time zones',
        },
        {
          icon: 'Heart',
          title: 'Donor transparency',
          description: 'Need to demonstrate impact and maintain donor trust',
        },
        {
          icon: 'FileText',
          title: 'Grant compliance',
          description: 'Managing documentation for multiple grants and funders',
        },
        {
          icon: 'Calendar',
          title: 'Limited meeting time',
          description: 'Maximizing productivity in infrequent board meetings',
        },
      ],
    },
    solution: {
      title: 'How EBoard empowers nonprofit governance',
      items: [
        {
          title: 'Volunteer-friendly design',
          description: 'Intuitive interface—board members start immediately without training',
        },
        {
          title: 'Nonprofit pricing',
          description: 'Special pricing plans designed for limited budgets',
        },
        {
          title: 'Global accessibility',
          description: 'Cloud-based platform accessible from anywhere, on any device',
        },
        {
          title: 'Donor transparency',
          description: 'Tools to demonstrate effective governance to donors',
        },
      ],
      image: '/images/solutions/ngo-solution.jpg',
    },
    features: {
      badge: 'Features',
      title: 'Everything your nonprofit needs',
      items: [
        {
          icon: 'Calendar',
          title: 'Simple Meeting Management',
          description: 'Easy scheduling, agenda building, and minute-taking for volunteer boards',
        },
        {
          icon: 'Users',
          title: 'Volunteer Engagement',
          description: 'Tools to keep board members engaged and informed between meetings',
        },
        {
          icon: 'Globe',
          title: 'Remote Participation',
          description: 'Full participation from anywhere with mobile-friendly access',
        },
        {
          icon: 'FileText',
          title: 'Document Hub',
          description: 'Centralized storage for policies, minutes, and grant documents',
        },
        {
          icon: 'Heart',
          title: 'Donor Reports',
          description: 'Generate impact reports to share with donors and stakeholders',
        },
        {
          icon: 'Award',
          title: 'Grant Management',
          description: 'Track grant requirements, deadlines, and reporting',
        },
      ],
    },
    testimonial: {
      quote:
        '"EBoard\'s nonprofit pricing made professional governance tools accessible to our volunteer board. Best investment we\'ve made."',
      name: 'Margaret Okonkwo',
      role: 'Executive Director',
      organization: 'Global Health Initiative',
    },
    cta: {
      title: 'Ready to maximize your impact?',
      subtitle: 'Join 300+ nonprofits using EBoard to streamline governance.',
      demoButton: 'Schedule Demo',
      contactButton: '',
      showContact: false,
    },
    helmet: {
      title: 'NGO & Nonprofit Board Management - EBoard Solutions',
      description:
        'Cost-effective governance tools for mission-driven organizations. Engage volunteer boards, reduce costs by 50%, and maximize your impact.',
    },
  },
  enterprise: {
    id: 'enterprise',
    name: 'Enterprise',
    theme: {
      primary: 'primary',
      primaryLight: 'primary-100',
      primaryDark: 'primary-600',
    },
    hero: {
      headline: 'Enterprise-grade governance for',
      highlight: 'global organizations',
      subtitle:
        'Scale your corporate governance with enterprise-level security, advanced integrations, and strategic analytics.',
      stats: [
        { value: '100+', label: 'Enterprises', color: 'primary-400' },
        { value: '99.99%', label: 'Uptime SLA', color: 'green-400' },
        { value: '50+', label: 'Integrations', color: 'blue-400' },
      ],
      badge: {
        label: 'Security',
        value: 'ISO 27001',
        icon: 'Shield',
      },
      trustBadge: {
        text: '99.99%',
        icon: 'Clock',
        label: 'SLA Uptime',
      },
      image: '/images/enterprise-dashboard.jpg',
    },
    challenges: {
      badge: 'Challenges',
      title: 'Enterprise governance challenges',
      items: [
        {
          icon: 'Globe',
          title: 'Global Coordination',
          description: 'Managing board members across multiple time zones and countries',
        },
        {
          icon: 'GitMerge',
          title: 'Complex Integrations',
          description: 'Connecting with existing enterprise systems and workflows',
        },
        {
          icon: 'Shield',
          title: 'Regulatory Compliance',
          description: 'Meeting SOX, GDPR, CCPA and industry-specific regulations',
        },
        {
          icon: 'BarChart',
          title: 'Strategic Insights',
          description: 'Extracting actionable insights from governance data',
        },
        {
          icon: 'Network',
          title: 'Multi-entity Management',
          description: 'Overseeing subsidiaries, divisions, and committees',
        },
        {
          icon: 'Users',
          title: 'Stakeholder Management',
          description: 'Coordinating across executives, directors, and advisors',
        },
      ],
    },
    solution: {
      title: 'Built for enterprise scale',
      items: [
        {
          title: 'Enterprise Security',
          description: 'SSO, MFA, and encryption key management',
        },
        {
          title: 'Custom Integrations',
          description: 'API-first architecture for seamless integration',
        },
        {
          title: 'Advanced Analytics',
          description: 'Executive dashboards with AI-powered insights',
        },
        {
          title: 'Multi-entity Management',
          description: 'Centralized governance for complex structures',
        },
      ],
      image: '/images/enterprise-solution.jpg',
    },
    features: {
      badge: 'Features',
      title: 'Enterprise-grade capabilities',
      items: [],
    },
    testimonial: {
      quote:
        '"EBoard integrated perfectly with our existing tools and scaled across 50+ subsidiaries worldwide. We\'ve reduced meeting prep time by 70%."',
      name: 'Michael Torres',
      role: 'Corporate Secretary',
      organization: 'Torres Industries',
    },
    cta: {
      title: 'Ready to scale your governance?',
      subtitle: 'Join 100+ enterprises that trust EBoard for their most important meetings.',
      demoButton: 'Book Demo',
      contactButton: 'Contact Us',
    },
    helmet: {
      title: 'Enterprise Board Management - EBoard Solutions',
      description:
        'Scale your corporate governance with enterprise-grade security, integrations, and analytics. Trusted by Fortune 500 companies worldwide.',
    },
  },
};
