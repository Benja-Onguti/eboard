import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { ROUTES } from './config/routes';
import { LoadingSpinner } from './components/common/LoadingSpinner';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { analyticsService } from './services/analyticsService';
import { SecurityPage } from './pages/SecurityPage';

// Lazy load pages for better performance
const HomePage = lazy(() =>
  import('./pages/HomePage').then((module) => ({ default: module.HomePage }))
);
const MeetingManagementPage = lazy(() =>
  import('./pages/MeetingManagementPage').then((module) => ({
    default: module.MeetingManagementPage,
  }))
);
const CommitteeManagementPage = lazy(() =>
  import('./pages/CommitteeManagementPage').then((module) => ({
    default: module.CommitteeManagementPage,
  }))
);
const DocumentManagementPage = lazy(() =>
  import('./pages/DocumentManagementPage').then((module) => ({
    default: module.DocumentManagementPage,
  }))
);
const IntegrationsPage = lazy(() =>
  import('./pages/IntegrationsPage').then((module) => ({ default: module.IntegrationsPage }))
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
const ContactPage = lazy(() =>
  import('./pages/ContactPage').then((module) => ({ default: module.ContactPage }))
);
const DemoPage = lazy(() =>
  import('./pages/DemoPage').then((module) => ({ default: module.DemoPage }))
);
const ResourcesPage = lazy(() =>
  import('./pages/ResourcesPage').then((module) => ({ default: module.ResourcesPage }))
);
const GuidesPage = lazy(() =>
  import('./pages/GuidesPage').then((module) => ({ default: module.GuidesPage }))
);
const CaseStudiesPage = lazy(() =>
  import('./pages/CaseStudiesPage').then((module) => ({ default: module.CaseStudiesPage }))
);
const HelpCenterPage = lazy(() =>
  import('./pages/HelpCenterPage').then((module) => ({ default: module.default }))
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
            
            <Route
              path={ROUTES.MARKETING.MEETING_MANAGEMENT}
              element={<MeetingManagementPage />}
            />
            <Route
              path={ROUTES.MARKETING.COMMITTEE_MANAGEMENT}
              element={<CommitteeManagementPage />}
            />
            <Route
              path={ROUTES.MARKETING.DOCUMENT_MANAGEMENT}
              element={<DocumentManagementPage />}
            />
            <Route path={ROUTES.MARKETING.INTEGRATIONS} element={<IntegrationsPage />} />
            <Route path="/features/:id" element={<FeatureDetailPage />} />

            {/* Solutions / Use Cases */}
            <Route path={ROUTES.SOLUTIONS.INDEX} element={<SolutionsPage />} />
            <Route path={ROUTES.SOLUTIONS.EDUCATION} element={<EducationPage />} />
            <Route path={ROUTES.SOLUTIONS.GOVERNMENT} element={<GovernmentPage />} />
            <Route path={ROUTES.SOLUTIONS.NGOS} element={<NGOPage />} />
            <Route path={ROUTES.SOLUTIONS.ENTERPRISE} element={<EnterprisePage />} />

            {/* Contact & Demo */}
            <Route path={ROUTES.COMPANY.CONTACT} element={<ContactPage />} />
            <Route path={ROUTES.DEMO.INDEX} element={<DemoPage />} />

            {/* Resources */}
            <Route path={ROUTES.RESOURCES.INDEX} element={<ResourcesPage />} />
            <Route path={ROUTES.RESOURCES.GUIDES} element={<GuidesPage />} />
            <Route path={ROUTES.RESOURCES.CASE_STUDIES} element={<CaseStudiesPage />} />
            <Route path={ROUTES.RESOURCES.HELP_CENTER} element={<HelpCenterPage />} />

            {/* Company */}
            <Route path={ROUTES.COMPANY.ABOUT} element={<AboutPage />} />

            {/* Legal */}
            <Route path={ROUTES.LEGAL.PRIVACY} element={<PrivacyPage />} />
            <Route path={ROUTES.LEGAL.TERMS} element={<TermsPage />} />

            {/* Redirects */}
            <Route
              path={ROUTES.PLATFORM.INTEGRATIONS}
              element={<Navigate to={ROUTES.MARKETING.INTEGRATIONS} replace />}
            />
            <Route
              path="/solutions/nonprofits"
              element={<Navigate to={ROUTES.SOLUTIONS.NGOS} replace />}
            />
            <Route
              path="/contact-us"
              element={<Navigate to={ROUTES.COMPANY.CONTACT} replace />}
            />
            <Route path="/security" element={<SecurityPage />} />

            {/* 404 */}
            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Route>
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}
export default App;
