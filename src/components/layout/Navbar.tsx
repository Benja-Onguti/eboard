import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Calendar,
  Copy,
  CheckCircle,
  Building2,
  GraduationCap,
  Heart,
  Building,
  FileText,
  Brain,
  HelpCircle,
  Mail,
  Shield,
  Users,
  Settings,
  Mic,
  Volume2,
  FileCheck,
  Clock,
  Video,
  Layout,
  PenTool,
  Database,
  Lock,
  Fingerprint,
  Activity,
  Key,
  Plug,
  Cloud,
  Headphones,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ROUTES } from '@/config/routes';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { cn } from '@/utils/cn';

// Feature sub-items for AI Capabilities
const aiCapabilitiesItems = [
  {
    icon: Mic,
    label: 'Speech to Text',
    description: 'Transcribe meetings, minutes, and dictation',
    href: '/features/speech-to-text',
  },
  {
    icon: Volume2,
    label: 'Text to Speech',
    description: 'Listen to documents on the go',
    href: '/features/text-to-speech',
  },
  {
    icon: Brain,
    label: 'AI Summarisation',
    description: 'Concise summaries of board packs (100+ page reports)',
    href: '/features/ai-summarisation',
    poweredBy: 'Google Gemini',
  },
];

// Feature sub-items for Meeting & Agenda Management
const meetingManagementItems = [
  {
    icon: Layout,
    label: 'Agenda Builder',
    description: 'Drag-and-drop tool for creating and publishing agendas',
    href: '/features/agenda-builder',
  },
  {
    icon: PenTool,
    label: 'Minute Builder',
    description: 'Records decisions, actions, and discussions',
    href: '/features/minute-builder',
  },
  {
    icon: Calendar,
    label: 'Meeting Scheduling',
    description: 'Governance and scheduling tools',
    href: '/features/meeting-scheduling',
  },
  {
    icon: Video,
    label: 'Video Conferencing',
    description: 'Zoom & Teams integration',
    href: '/features/video-conferencing',
  },
  {
    icon: Clock,
    label: 'Pre-meeting Metrics',
    description: 'Preparation metrics and analytics',
    href: '/features/pre-meeting-metrics',
  },
];

// Feature sub-items for Committee Management
const committeeManagementItems = [
  {
    icon: Users,
    label: 'Unlimited Committees',
    description: 'Create and manage unlimited committees',
    href: '/features/committees',
  },
  {
    icon: Database,
    label: 'Committee Libraries',
    description: 'Dedicated libraries per committee',
    href: '/features/committee-libraries',
  },
  {
    icon: Users,
    label: 'Membership Register',
    description: 'Member history and tracking',
    href: '/features/membership-register',
  },
  {
    icon: FileText,
    label: 'Cover Pages',
    description: 'Custom cover page per committee',
    href: '/features/cover-pages',
  },
];

// Feature sub-items for Document & Pack Features
const documentFeaturesItems = [
  {
    icon: FileText,
    label: 'All File Types',
    description: 'Support for all document formats',
    href: '/features/file-support',
  },
  {
    icon: PenTool,
    label: 'Document Signing',
    description: 'Digital signature capabilities',
    href: '/features/document-signing',
  },
  {
    icon: FileCheck,
    label: 'Forms & Surveys',
    description: 'Powered by Orbeon Forms',
    href: '/features/forms-surveys',
  },
  {
    icon: Copy,
    label: 'Clone Agenda',
    description: 'Quickly duplicate any agenda',
    href: '/features/clone-agenda',
  },
  {
    icon: CheckCircle,
    label: 'Votes & Resolutions',
    description: 'Track voting and resolutions',
    href: '/features/votes-resolutions',
  },
];

// Feature sub-items for Security
const securityItems = [
  {
    icon: Lock,
    label: 'Military-grade Encryption',
    description: 'Built on Microsoft Enterprise Framework',
    href: '/features/encryption',
  },
  {
    icon: Fingerprint,
    label: 'Two-Factor Authentication',
    description: '2FA for enhanced security',
    href: '/features/2fa',
  },
  {
    icon: Activity,
    label: 'Activity Tracking',
    description: 'Background audit logs',
    href: '/features/activity-tracking',
  },
  {
    icon: Key,
    label: 'Role-based Access',
    description: 'Granular document permissions',
    href: '/features/role-based-access',
  },
];

// Feature sub-items for Integrations & Support
const integrationsItems = [
  {
    icon: Plug,
    label: 'Integrations',
    description: 'SharePoint, email, calendar, task management',
    href: '/features/integrations',
  },
  {
    icon: Headphones,
    label: 'Training & Support',
    description: 'Unlimited training included',
    href: '/features/support',
  },
  {
    icon: Cloud,
    label: 'Deployment Options',
    description: 'Self-hosted or cloud-hosted',
    href: '/features/deployment',
  },
];

// Define which menu items have secondary dropdowns
const secondaryDropdownMap: Record<string, { items: typeof aiCapabilitiesItems; title: string }> = {
  'AI Capabilities': { items: aiCapabilitiesItems, title: 'AI Capabilities' },
  'Meeting & Agenda Management': {
    items: meetingManagementItems,
    title: 'Meeting & Agenda Management',
  },
  'Committee Management': { items: committeeManagementItems, title: 'Committee Management' },
  'Documents and Pack Features': {
    items: documentFeaturesItems,
    title: 'Document & Pack Features',
  },
  Security: { items: securityItems, title: 'Security' },
  'Integrations & Support': { items: integrationsItems, title: 'Integrations & Support' },
};

// Navigation structure
interface NavItem {
  label: string;
  href?: string;
  icon?: React.ElementType;
  children?: NavItem[];
  description?: string;
  badge?: string;
  hasSecondaryDropdown?: boolean;
}

const navigation: NavItem[] = [
  {
    label: 'Features',
    children: [
      {
        label: 'Meeting & Agenda Management',
        href: ROUTES.MARKETING.MEETING_MANAGEMENT,
        icon: Calendar,
        // description: 'Streamline your board meetings',
        hasSecondaryDropdown: true,
      },
      {
        label: 'Committee Management',
        href: ROUTES.PLATFORM.FEATURES,
        icon: Users,
        // description: 'Organize Board committees and subgroups',
        hasSecondaryDropdown: true,
      },
      {
        label: 'AI Capabilities',
        href: ROUTES.MARKETING.AI_MINUTES,
        icon: Brain,
        // description: 'AI-powered features to enhance productivity',
        badge: 'New',
        hasSecondaryDropdown: true,
      },
      {
        label: 'Documents and Pack Features',
        href: ROUTES.PLATFORM.FEATURES,
        icon: FileText,
        // description: 'Document management and board pack creation tools',
        hasSecondaryDropdown: true,
      },

      {
        label: 'Security',
        href: ROUTES.PLATFORM.SECURITY,
        icon: Shield,
        //description: 'Highest security levels to protect your data',
        hasSecondaryDropdown: true,
      },
      {
        label: 'Integrations & Support',
        href: ROUTES.PLATFORM.FEATURES,
        icon: Settings,
        // description: 'Seamless integrations and dedicated support',
        hasSecondaryDropdown: true,
      },
    ],
  },
  {
    label: 'Use Cases',
    children: [
      {
        label: 'Education',
        href: ROUTES.SOLUTIONS.EDUCATION,
        icon: GraduationCap,
        description: 'For school boards & trustees',
      },
      {
        label: 'Government',
        href: ROUTES.SOLUTIONS.GOVERNMENT,
        icon: Building2,
        description: 'For public sector councils',
      },
      {
        label: 'NGOs',
        href: ROUTES.SOLUTIONS.NGOS,
        icon: Heart,
        description: 'For nonprofit & volunteer boards',
      },
      {
        label: 'Enterprise',
        href: ROUTES.SOLUTIONS.ENTERPRISE,
        icon: Building,
        description: 'For corporate boards & executives',
      },
    ],
  },
  {
    label: 'Resources',
    children: [
      {
        label: 'Guides',
        href: ROUTES.RESOURCES.GUIDES,
        icon: FileText,
        description: 'In-depth governance guides',
      },
      {
        label: 'Case Studies',
        href: ROUTES.RESOURCES.CASE_STUDIES,
        icon: Building2,
        description: 'Customer success stories',
      },
      {
        label: 'Help Center',
        href: ROUTES.RESOURCES.HELP_CENTER,
        icon: HelpCircle,
        description: 'Support & documentation',
      },
      {
        label: 'Contact',
        href: ROUTES.COMPANY.CONTACT,
        icon: Mail,
        description: 'Get in touch with our team',
      },
    ],
  },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSecondaryDropdown, setActiveSecondaryDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const dropdownTimeoutRef = useRef<number | null>(null);
  const secondaryDropdownTimeoutRef = useRef<number | null>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setActiveSecondaryDropdown(null);
    setMobileDropdown(null);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleDropdownEnter = (label: string) => {
    if (!isMobile) {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
      setActiveDropdown(label);
    }
  };

  const handleDropdownLeave = () => {
    if (!isMobile) {
      dropdownTimeoutRef.current = window.setTimeout(() => {
        setActiveDropdown(null);
        setActiveSecondary(null);
      }, 150);
    }
  };

  const handleSecondaryDropdownEnter = (childLabel: string) => {
    if (secondaryDropdownMap[childLabel]) {
      setActiveSecondaryDropdown(childLabel);
    }
  };

  const handleSecondaryDropdownLeave = () => {
    setActiveSecondaryDropdown(null);
  };

  const handleMobileDropdownToggle = (label: string) => {
    setMobileDropdown(mobileDropdown === label ? null : label);
  };

  const handleNavigation = (href: string) => {
    navigate(href);
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setActiveSecondaryDropdown(null);
    setMobileDropdown(null);
  };

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 w-full z-50 transition-all duration-300',
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to={ROUTES.HOME}
              className="flex items-center space-x-2 group"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="relative w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-xl transition-all group-hover:scale-105">
                E
              </div>
              <span className="text-2xl font-display font-bold text-gray-900 group-hover:text-primary-600 transition">
                Board
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter(item.label)}
                  onMouseLeave={handleDropdownLeave}
                >
                  {item.children ? (
                    <>
                      <button
                        className={cn(
                          'flex items-center space-x-1 px-4 py-2 rounded-lg text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition font-medium',
                          activeDropdown === item.label && 'text-primary-600 bg-primary-50'
                        )}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={cn(
                            'w-4 h-4 transition-transform',
                            activeDropdown === item.label && 'rotate-180'
                          )}
                        />
                      </button>

                      {/* First Level Dropdown */}
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 pt-0 w-80 z-50"
                          onMouseEnter={() => handleDropdownEnter(item.label)}
                          onMouseLeave={handleDropdownLeave}
                        >
                          <div className="h-2 -mt-2" />
                          <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                            <div className="py-2">
                              {item.children.map((child) => {
                                const Icon = child.icon || ChevronRight;
                                return (
                                  <div
                                    key={child.label}
                                    className="relative group"
                                    onMouseEnter={() => handleSecondaryDropdownEnter(child.label)}
                                    onMouseLeave={handleSecondaryDropdownLeave}
                                  >
                                    <Link
                                      to={child.href!}
                                      className="flex items-start px-4 py-3 hover:bg-gray-50 transition group"
                                      onClick={() => setActiveDropdown(null)}
                                    >
                                      <div className="flex-shrink-0 w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mr-3 group-hover:bg-primary-600 group-hover:text-white transition">
                                        <Icon className="w-4 h-4" />
                                      </div>
                                      <div className="flex-1">
                                        <div className="flex items-center justify-between">
                                          <div className="font-medium text-gray-900 group-hover:text-primary-600 transition">
                                            {child.label}
                                          </div>
                                          {child.hasSecondaryDropdown && (
                                            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-primary-600" />
                                          )}
                                        </div>
                                        {child.description && (
                                          <p className="text-xs text-gray-500 mt-1">
                                            {child.description}
                                          </p>
                                        )}
                                        {child.badge && (
                                          <span className="inline-block mt-1 px-2 py-0.5 bg-primary-100 text-primary-700 text-xs font-semibold rounded">
                                            {child.badge}
                                          </span>
                                        )}
                                      </div>
                                    </Link>

                                    {/* Secondary Dropdown - Feature breakdown */}
                                    {child.hasSecondaryDropdown &&
                                      activeSecondaryDropdown === child.label &&
                                      secondaryDropdownMap[child.label] && (
                                        <motion.div
                                          initial={{ opacity: 0, x: -10 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          exit={{ opacity: 0, x: -10 }}
                                          transition={{ duration: 0.2 }}
                                          className="absolute top-0 left-full ml-2 w-96 bg-white rounded-xl shadow-2xl border border-gray-100 z-50"
                                          onMouseEnter={() => {
                                            handleDropdownEnter(item.label);
                                            handleSecondaryDropdownEnter(child.label);
                                          }}
                                          onMouseLeave={handleSecondaryDropdownLeave}
                                        >
                                          <div className="p-4">
                                            <h4 className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100">
                                              {secondaryDropdownMap[child.label]?.title ||
                                                child.label}
                                            </h4>
                                            <div className="space-y-3">
                                              {secondaryDropdownMap[child.label]?.items.map(
                                                (feature, idx) => {
                                                  const FeatureIcon = feature.icon;
                                                  return (
                                                    <Link
                                                      key={idx}
                                                      to={feature.href}
                                                      className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition group"
                                                      onClick={() => setActiveDropdown(null)}
                                                    >
                                                      <div className="flex-shrink-0 w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition">
                                                        <FeatureIcon className="w-4 h-4" />
                                                      </div>
                                                      <div>
                                                        <div className="font-medium text-gray-900 text-sm group-hover:text-primary-600 transition">
                                                          {feature.label}
                                                        </div>
                                                        <p className="text-xs text-gray-500 mt-0.5">
                                                          {feature.description}
                                                        </p>
                                                        {feature.poweredBy && (
                                                          <span className="inline-block mt-1 text-xs text-primary-600 font-medium">
                                                            Powered by {feature.poweredBy}
                                                          </span>
                                                        )}
                                                      </div>
                                                    </Link>
                                                  );
                                                }
                                              )}
                                            </div>
                                          </div>
                                        </motion.div>
                                      )}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.href!}
                      className="flex items-center space-x-1 px-4 py-2 rounded-lg text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition font-medium"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons - Desktop */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link to={ROUTES.DEMO.INDEX}>
                <Button size="md" leftIcon={<Calendar className="w-4 h-4" />}>
                  Book Demo
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-primary-600 hover:bg-gray-100 transition"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
              <Link
                to={ROUTES.HOME}
                className="flex items-center space-x-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center text-white font-bold">
                  E
                </div>
                <span className="text-xl font-display font-bold text-gray-900">Board</span>
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg text-gray-700 hover:text-primary-600 hover:bg-gray-100 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4">
              {navigation.map((item) => (
                <div key={item.label} className="mb-2">
                  {item.children ? (
                    <>
                      <button
                        onClick={() => handleMobileDropdownToggle(item.label)}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition"
                      >
                        <span className="font-medium">{item.label}</span>
                        <ChevronDown
                          className={cn(
                            'w-5 h-5 transition-transform',
                            mobileDropdown === item.label && 'rotate-180'
                          )}
                        />
                      </button>

                      <AnimatePresence>
                        {mobileDropdown === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 mt-1 space-y-1">
                              {item.children.map((child) => {
                                const Icon = child.icon || ChevronRight;
                                return (
                                  <div key={child.label}>
                                    <Link
                                      to={child.href!}
                                      className="flex items-center px-4 py-3 rounded-lg hover:bg-gray-50 transition group"
                                      onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                      <div className="flex-shrink-0 w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mr-3">
                                        <Icon className="w-4 h-4" />
                                      </div>
                                      <div>
                                        <div className="font-medium text-gray-900">
                                          {child.label}
                                        </div>
                                        {child.description && (
                                          <p className="text-xs text-gray-500">
                                            {child.description}
                                          </p>
                                        )}
                                      </div>
                                    </Link>

                                    {/* Mobile secondary dropdown */}
                                    {child.hasSecondaryDropdown &&
                                      secondaryDropdownMap[child.label] && (
                                        <div className="pl-12 pr-4 pb-2 space-y-2">
                                          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider pt-2 pb-1">
                                            {secondaryDropdownMap[child.label].title}
                                          </div>
                                          {secondaryDropdownMap[child.label].items.map(
                                            (feature, idx) => {
                                              const FeatureIcon = feature.icon;
                                              return (
                                                <Link
                                                  key={idx}
                                                  to={feature.href}
                                                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition"
                                                  onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                  <div className="flex-shrink-0 w-6 h-6 bg-gray-100 rounded-lg flex items-center justify-center text-primary-600">
                                                    <FeatureIcon className="w-3 h-3" />
                                                  </div>
                                                  <div>
                                                    <div className="font-medium text-gray-800 text-sm">
                                                      {feature.label}
                                                    </div>
                                                    <p className="text-xs text-gray-500">
                                                      {feature.description}
                                                    </p>
                                                  </div>
                                                </Link>
                                              );
                                            }
                                          )}
                                        </div>
                                      )}
                                  </div>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={item.href!}
                      className="block px-4 py-3 rounded-lg text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Menu Footer */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <Link to={ROUTES.DEMO.INDEX} onClick={() => setIsMobileMenuOpen(false)}>
                  <Button fullWidth leftIcon={<Calendar className="w-4 h-4" />}>
                    Book Demo
                  </Button>
                </Link>
                <div className="text-sm text-gray-500 text-center mt-4">
                  <p>© 2025 EBoard Solutions</p>
                  <div className="flex justify-center space-x-4 mt-2">
                    <Link to={ROUTES.LEGAL.PRIVACY} className="hover:text-primary-600">
                      Privacy
                    </Link>
                    <Link to={ROUTES.LEGAL.TERMS} className="hover:text-primary-600">
                      Terms
                    </Link>
                    <Link to={ROUTES.COMPANY.CONTACT} className="hover:text-primary-600">
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
