export const ORGANIZATION_TYPES = [
  { value: 'education', label: 'Educational Institution' },
  { value: 'government', label: 'Government / Public Sector' },
  { value: 'ngo', label: 'NGO / Nonprofit' },
  { value: 'corporate', label: 'Corporate / Enterprise' },
  { value: 'other', label: 'Other' },
] as const;

export const INTEREST_OPTIONS = [
  'Meeting Management',
  'Document Security',
  'AI-Powered Minutes',
  'E-Signatures',
  'Surveys & Forms',
  'Public Meeting Sites',
] as const;

export const BOARD_SIZES = [
  { value: '1-5', label: '1-5 members' },
  { value: '6-10', label: '6-10 members' },
  { value: '11-20', label: '11-20 members' },
  { value: '21-50', label: '21-50 members' },
  { value: '50+', label: '50+ members' },
] as const;

export const SUPPORT_HOURS = {
  weekday: '24/7',
  weekend: '9am - 5pm EST',
  emergency: '24/7 for enterprise clients',
} as const;

export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/eboardsolutions',
  linkedin: 'https://linkedin.com/company/eboard-solutions',
  facebook: 'https://facebook.com/eboardsolutions',
  youtube: 'https://youtube.com/@eboardsolutions',
} as const;
