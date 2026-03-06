export interface Feature {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  image: string;
  benefits: string[];
  features: {
    title: string;
    description: string;
  }[];
  audience: ('education' | 'government' | 'ngo' | 'corporate')[];
}

export interface Solution {
  id: string;
  name: string;
  headline: string;
  description: string;
  icon: string;
  image: string;
  painPoints: string[];
  benefits: string[];
  features: string[];
  caseStudies?: {
    title: string;
    quote: string;
    results: string;
  }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  organizationType: 'education' | 'government' | 'ngo' | 'corporate';
  quote: string;
  avatar?: string;
  rating: number;
}

export interface Statistic {
  id: string;
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: 'general' | 'security' | 'technical' | 'billing';
}
