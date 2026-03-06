import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/layout/ScrollToTop';
import { CookieConsent } from '@/components/common/CookieConsent';
import { BackToTop } from '@/components/common/BackToTop';
import { useApp } from '@/context/AppContext';

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
    },
  },
};

interface MainLayoutProps {
  showNavbar?: boolean;
  showFooter?: boolean;
  showBackToTop?: boolean;
  showChat?: boolean;
  className?: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  showNavbar = true,
  showFooter = true,
  showBackToTop = true,
  showChat = false,
  className = '',
}) => {
  const location = useLocation();
  const { setIsLoading } = useApp();

  // Scroll to top on route change and set loading state
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    // Set loading to false after route change
    setIsLoading(false);

    return () => {
      setIsLoading(true);
    };
  }, [location.pathname, setIsLoading]);

  // Check if current route is a special layout (like auth pages)
  const isAuthPage =
    location.pathname.startsWith('/login') ||
    location.pathname.startsWith('/signup') ||
    location.pathname.startsWith('/reset-password');

  // Check if current route is a landing page (full width)
  const isLandingPage =
    location.pathname === '/' ||
    location.pathname.startsWith('/demo') ||
    location.pathname.startsWith('/features');

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>

      {/* Navbar */}
      {showNavbar && !isAuthPage && <Navbar />}

      {/* Main Content with Page Transitions */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          id="main-content"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className={`
            flex-grow
            ${!showNavbar ? 'pt-0' : ''}
            ${isLandingPage ? '' : 'py-8 md:py-12'}
            ${className}
          `}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      {/* Footer */}
      {showFooter && !isAuthPage && <Footer />}

      {/* Back to Top Button */}
      {showBackToTop && <BackToTop />}

      {/* Cookie Consent Banner */}
      <CookieConsent />

      {/* Chat Widget (conditional) */}
      {showChat && import.meta.env.VITE_ENABLE_CHATBOT === 'true' && (
        <div>Chat Widget Placeholder</div>
      )}
    </div>
  );
};

export default MainLayout;
