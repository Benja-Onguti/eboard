import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  Calendar,
  Brain,
  FileText,
  Shield,
  Users,
  Settings,
  GraduationCap,
  Building2,
  Heart,
  Building,
  HelpCircle,
  Mail,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ROUTES } from '@/config/routes';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { cn } from '@/utils/cn';

const navigation = [
  {
    label: 'Features',
    children: [
      { label: 'Meeting Management', href: ROUTES.MARKETING.MEETING_MANAGEMENT, icon: Calendar },
      { label: 'Committee Management', href: ROUTES.MARKETING.COMMITTEE_MANAGEMENT, icon: Users },
      { label: 'AI Capabilities', href: ROUTES.MARKETING.AI_MINUTES, icon: Brain, badge: 'New' },
      { label: 'Document Management', href: ROUTES.MARKETING.DOCUMENT_MANAGEMENT, icon: FileText },
      { label: 'Security', href: ROUTES.PLATFORM.SECURITY, icon: Shield },
      { label: 'Integrations', href: ROUTES.MARKETING.INTEGRATIONS, icon: Settings },
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
        description: 'For nonprofit boards',
      },
      {
        label: 'Enterprise',
        href: ROUTES.SOLUTIONS.ENTERPRISE,
        icon: Building,
        description: 'For corporate boards',
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
      { label: 'Contact', href: ROUTES.COMPANY.CONTACT, icon: Mail, description: 'Get in touch' },
    ],
  },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const location = useLocation();
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const dropdownTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setMobileDropdown(null);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleDropdownEnter = (label: string) => {
    if (!isMobile) {
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
      setActiveDropdown(label);
    }
  };

  const handleDropdownLeave = () => {
    if (!isMobile) {
      dropdownTimeoutRef.current = window.setTimeout(() => setActiveDropdown(null), 150);
    }
  };

  const handleMobileDropdownToggle = (label: string) => {
    setMobileDropdown(mobileDropdown === label ? null : label);
  };

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 w-full z-50 transition-all duration-300',
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-3'
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
              <div className="w-9 h-9 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow group-hover:shadow-lg transition-all">
                E
              </div>
              <span className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition">
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
                          'flex items-center space-x-1 px-4 py-2 rounded-lg text-gray-700 hover:text-primary-600 transition font-medium',
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

                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50"
                          onMouseEnter={() => handleDropdownEnter(item.label)}
                          onMouseLeave={handleDropdownLeave}
                        >
                          <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden w-[280px]">
                            <div className="py-2">
                              {item.children.map((child) => {
                                const Icon = child.icon;
                                return (
                                  <Link
                                    key={child.label}
                                    to={child.href!}
                                    className="flex items-center px-4 py-3 hover:bg-gray-50 transition group"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    {Icon && (
                                      <div className="w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mr-3 group-hover:bg-primary-600 group-hover:text-white transition">
                                        <Icon className="w-4 h-4" />
                                      </div>
                                    )}
                                    <div>
                                      <div className="font-medium text-gray-900 group-hover:text-primary-600 transition flex items-center gap-2">
                                        {child.label}
                                        {'badge' in child && child.badge && (
                                          <span className="px-1.5 py-0.5 bg-primary-100 text-primary-700 text-xs font-semibold rounded">
                                            {child.badge}
                                          </span>
                                        )}
                                      </div>
                                      {'description' in child && child.description && (
                                        <p className="text-xs text-gray-500 mt-0.5">
                                          {child.description}
                                        </p>
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
                  ) : 'href' in item && item.href ? (
                    <Link
                      to={item.href}
                      className="px-4 py-2 rounded-lg text-gray-700 hover:text-primary-600 transition font-medium"
                    >
                      {item.label}
                    </Link>
                  ) : null}
                </div>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:flex items-center">
              <Link to={ROUTES.DEMO.INDEX}>
                <Button size="sm">Book Demo</Button>
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
                <span className="text-xl font-bold text-gray-900">Board</span>
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
                            className="overflow-hidden"
                          >
                            <div className="pl-4 mt-1 space-y-1">
                              {item.children.map((child) => {
                                const Icon = child.icon;
                                return (
                                  <Link
                                    key={child.label}
                                    to={child.href!}
                                    className="flex items-center px-4 py-3 rounded-lg hover:bg-gray-50 transition"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    {Icon && (
                                      <div className="w-7 h-7 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mr-3">
                                        <Icon className="w-4 h-4" />
                                      </div>
                                    )}
                                    <div>
                                      <div className="font-medium text-gray-900">{child.label}</div>
                                      {'description' in child && child.description && (
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
                  ) : 'href' in item ? (
                    <Link
                      to={item.href!}
                      className="block px-4 py-3 rounded-lg text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : null}
                </div>
              ))}

              {/* Mobile Menu Footer */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <Link to={ROUTES.DEMO.INDEX} onClick={() => setIsMobileMenuOpen(false)}>
                  <Button fullWidth>Book Demo</Button>
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
