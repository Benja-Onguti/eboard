import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Calendar,
  BookOpen,
  Building2,
  GraduationCap,
  Heart,
  Building,
  FileText,
  Brain,
  HelpCircle,
  Mail,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ROUTES } from '@/config/routes';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { cn } from '@/utils/cn';

// Navigation structure
interface NavItem {
  label: string;
  href?: string;
  icon?: React.ElementType;
  children?: NavItem[];
  description?: string;
  badge?: string;
}

const navigation: NavItem[] = [
  {
    label: 'Platform',
    children: [
      {
        label: 'Features',
        href: ROUTES.PLATFORM.FEATURES,
        icon: FileText,
        description: 'Explore all platform features',
      },
      {
        label: 'Meeting Management',
        href: ROUTES.MARKETING.MEETING_MANAGEMENT,
        icon: Calendar,
        description: 'Streamline your board meetings',
      },
      {
        label: 'AI Minutes',
        href: ROUTES.MARKETING.AI_MINUTES,
        icon: Brain,
        description: 'AI-powered meeting minutes',
        badge: 'New',
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
        label: 'Blog',
        href: ROUTES.RESOURCES.BLOG,
        icon: BookOpen,
        description: 'Governance insights & best practices',
      },
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
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const isTablet = useMediaQuery('(max-width: 768px)');

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
      setActiveDropdown(label);
    }
  };

  const handleDropdownLeave = () => {
    if (!isMobile) {
      setActiveDropdown(null);
    }
  };

  const handleMobileDropdownToggle = (label: string) => {
    setMobileDropdown(mobileDropdown === label ? null : label);
  };

  const handleNavigation = (href: string) => {
    navigate(href);
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
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

                      {/* Dropdown Menu - Remove mt-2 gap */}
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 pt-0 w-80 z-50" // Removed mt-2, added pt-0
                        >
                          {/* Transparent bridge - this creates a seamless connection */}
                          <div className="h-2 -mt-2" /> {/* Creates invisible bridge */}
                          <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                            <div className="py-2">
                              {item.children.map((child) => {
                                const Icon = child.icon || ChevronRight;
                                return (
                                  <Link
                                    key={child.label}
                                    to={child.href!}
                                    className="flex items-start px-4 py-3 hover:bg-gray-50 transition group"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    <div className="flex-shrink-0 w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mr-3">
                                      <Icon className="w-4 h-4" />
                                    </div>
                                    <div>
                                      <div className="font-medium text-gray-900">{child.label}</div>
                                      {child.description && (
                                        <p className="text-xs text-gray-500">{child.description}</p>
                                      )}
                                      {child.badge && (
                                        <span className="inline-block mt-1 px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded">
                                          {child.badge}
                                        </span>
                                      )}
                                    </div>
                                  </Link>
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
              {/*<Link to={ROUTES.AUTH.LOGIN}>
                <Button variant="ghost" size="md" leftIcon={<LogIn className="w-4 h-4" />}>
                  Log In
                </Button>
              </Link> */}
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
                                  <Link
                                    key={child.label}
                                    to={child.href!}
                                    className="flex items-center px-4 py-3 rounded-lg hover:bg-gray-50 transition group"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    <div className="flex-shrink-0 w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mr-3">
                                      <Icon className="w-4 h-4" />
                                    </div>
                                    <div>
                                      <div className="font-medium text-gray-900">{child.label}</div>
                                      {child.description && (
                                        <p className="text-xs text-gray-500">{child.description}</p>
                                      )}
                                    </div>
                                  </Link>
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
                <div className="text-sm text-gray-500 text-center">
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
