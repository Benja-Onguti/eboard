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
      primary: 'primary',
      primaryLight: 'primary-100',
      primaryDark: 'primary-600',
    },
    hero: {
      headline: 'Streamlined governance for',
      highlight: 'educational institutions',
      subtitle:
        'Empower school boards, university trustees, and academic committees with modern governance tools designed specifically for education.',
      stats: [
        { value: '200+', label: 'Institutions', color: 'primary-600' },
        { value: '70%', label: 'Time Saved', color: 'green-600' },
        { value: '98%', label: 'Satisfaction', color: 'primary-600' },
      ],
      badge: {
        label: 'Compliance',
        value: 'FERPA',
        icon: 'Shield',
      },
      trustBadge: {
        text: '5K+ Users',
        icon: 'Award',
      },
      image: '/images/team/board meeting.jpg',
    },
    challenges: {
      badge: 'Challenges',
      title: 'Common challenges in education governance',
      subtitle: 'We understand the unique complexities of managing educational boards.',
      items: [
        {
          icon: 'Calendar',
          title: 'Scheduling conflicts',
          description:
            'Coordinating busy faculty, administrators, and trustees across multiple campuses',
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
          description:
            'Seamlessly manage boards across multiple campuses, districts, or universities',
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
          description:
            'Centralized storage for policies, minutes, and reports with version control',
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
        "Streamline school board and university trustee governance with EBoard's education-focused platform. Reduce meeting prep time by 70%.",
    },
  },

  ngo: {
    id: 'ngo',
    name: 'NGO',
    theme: {
      primary: 'primary',
      primaryLight: 'primary-100',
      primaryDark: 'primary-600',
    },
    hero: {
      headline: 'Cost-effective governance for',
      highlight: 'mission-driven organizations',
      subtitle:
        'Maximize your impact with affordable, easy-to-use governance tools. Reduce costs by 50% while improving volunteer engagement.',
      stats: [
        { value: '300+', label: 'Nonprofits', color: 'primary-600' },
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
      image: '/images/solutions/meetings.jpg',
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
};
