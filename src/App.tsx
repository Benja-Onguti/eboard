import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { MainLayout } from './layouts/MainLayout';
import { ROUTES } from './config/routes';
import { LoadingSpinner } from './components/common/LoadingSpinner';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { analyticsService } from './services/analyticsService';

// Lazy load pages for better performance
const HomePage = lazy(() =>
  import('./pages/HomePage').then((module) => ({ default: module.HomePage }))
);
const FeaturesPage = lazy(() =>
  import('./pages/FeaturesPage').then((module) => ({ default: module.FeaturesPage }))
);
const FeatureDetailPage = lazy(() =>
  import('./pages/FeatureDetailPage').then((module) => ({ default: module.FeatureDetailPage }))
);
const SolutionsPage = lazy(() =>
  import('./pages/SolutionsPage').then((module) => ({ default: module.SolutionsPage }))
);
const EducationPage = lazy(() =>
  import('./pages/EducationPage').then((module) => ({ default: module.EducationPage }))
);
const GovernmentPage = lazy(() =>
  import('./pages/GovernmentPage').then((module) => ({ default: module.GovernmentPage }))
);
const NGOPage = lazy(() =>
  import('./pages/NGOPage').then((module) => ({ default: module.NGOPage }))
);
const EnterprisePage = lazy(() =>
  import('./pages/EnterprisePage').then((module) => ({ default: module.EnterprisePage }))
);

const PricingPage = lazy(() =>
  import('./pages/PricingPage').then((module) => ({ default: module.PricingPage }))
);
const ContactPage = lazy(() =>
  import('./pages/ContactPage').then((module) => ({ default: module.ContactPage }))
);
const DemoPage = lazy(() =>
  import('./pages/DemoPage').then((module) => ({ default: module.DemoPage }))
);
const ResourcesPage = lazy(() =>
  import('./pages/ResourcesPage').then((module) => ({ default: module.ResourcesPage }))
);

const AboutPage = lazy(() =>
  import('./pages/AboutPage').then((module) => ({ default: module.AboutPage }))
);

const PrivacyPage = lazy(() =>
  import('./pages/PrivacyPage').then((module) => ({ default: module.PrivacyPage }))
);

const TermsPage = lazy(() =>
  import('./pages/TermsPage').then((module) => ({ default: module.TermsPage }))
);

// Loading fallback component
const PageLoader: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center">
    <LoadingSpinner size="lg" />
  </div>
);

// Analytics tracker component
const AnalyticsTracker: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view on route change
    analyticsService.pageView(location.pathname + location.search);
  }, [location]);

  return null;
};

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        {/* Analytics tracking */}
        <AnalyticsTracker />

        {/* Routes with lazy loading */}
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Main layout routes */}
            <Route path="/" element={<MainLayout />}>
              {/* Home */}
              <Route index element={<HomePage />} />

              {/* Features */}
              <Route path={ROUTES.PLATFORM.FEATURES} element={<FeaturesPage />} />
              <Route path="/features/:id" element={<FeatureDetailPage />} />

              {/* Solutions / Use Cases */}
              <Route path={ROUTES.SOLUTIONS.INDEX} element={<SolutionsPage />} />
              <Route path={ROUTES.SOLUTIONS.EDUCATION} element={<EducationPage />} />
              <Route path={ROUTES.SOLUTIONS.GOVERNMENT} element={<GovernmentPage />} />
              <Route path={ROUTES.SOLUTIONS.NGOS} element={<NGOPage />} />
              <Route path={ROUTES.SOLUTIONS.ENTERPRISE} element={<EnterprisePage />} />

              {/* Pricing */}
              <Route path={ROUTES.PRICING.INDEX} element={<PricingPage />} />

              {/* Contact & Demo */}
              <Route path={ROUTES.COMPANY.CONTACT} element={<ContactPage />} />
              <Route path={ROUTES.DEMO.INDEX} element={<DemoPage />} />

              {/* Resources */}
              <Route path={ROUTES.RESOURCES.INDEX} element={<ResourcesPage />} />
              {/*}  <Route path={ROUTES.RESOURCES.BLOG} element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path={ROUTES.RESOURCES.CASE_STUDIES} element={<CaseStudiesPage />} />
              <Route path="/case-studies/:slug" element={<CaseStudyPage />} />

              {/* Company */}
              <Route path={ROUTES.COMPANY.ABOUT} element={<AboutPage />} />

              {/* Legal */}
              <Route path={ROUTES.LEGAL.PRIVACY} element={<PrivacyPage />} />
              <Route path={ROUTES.LEGAL.TERMS} element={<TermsPage />} />

              {/* Redirects */}
              <Route
                path="/features/meeting-management"
                element={<Navigate to="/features/meeting-management" replace />}
              />
              <Route
                path="/solutions/nonprofits"
                element={<Navigate to={ROUTES.SOLUTIONS.NGOS} replace />}
              />
              <Route
                path="/contact-us"
                element={<Navigate to={ROUTES.COMPANY.CONTACT} replace />}
              />

              {/* 404 */}
              {/* <Route path="*" element={<NotFoundPage />} /> */}
            </Route>

            {/* Auth routes (separate layout) */}
            <Route
              path="/login"
              element={
                <Suspense fallback={<PageLoader />}>
                  {/* Auth layout would go here */}
                  <div>Login Page</div>
                </Suspense>
              }
            />

            <Route
              path="/signup"
              element={
                <Suspense fallback={<PageLoader />}>
                  <div>Signup Page</div>
                </Suspense>
              }
            />
          </Routes>
        </Suspense>
      </HelmetProvider>
    </ErrorBoundary>
  );
}
export default App;
