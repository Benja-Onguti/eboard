import { useLocation, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { BREADCRUMBS, ROUTES } from '@/config/routes';
import { createBreadcrumbStructuredData } from '@/config/seoConfig';

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;

  // Build breadcrumb items based on current path
  const breadcrumbItems = [];

  // Always include Home
  breadcrumbItems.push({ name: 'Home', url: ROUTES.HOME });

  // Check for exact matches or parent paths
  const pathSegments = pathname.split('/').filter(Boolean);

  if (pathSegments.length > 0) {
    let accumulatedPath = '';

    for (const segment of pathSegments) {
      accumulatedPath += `/${segment}`;

      // Try to find a matching route in BREADCRUMBS
      const matchingRoute = Object.keys(BREADCRUMBS).find(
        (route) => route === accumulatedPath
      );

      if (matchingRoute) {
        const { label } = BREADCRUMBS[matchingRoute];
        breadcrumbItems.push({
          name: label,
          url: accumulatedPath,
        });
      } else {
        // Fallback: capitalize segment
        const label = segment
          .replace(/-/g, ' ')
          .replace(/\b\w/g, (l) => l.toUpperCase());
        breadcrumbItems.push({
          name: label,
          url: accumulatedPath,
        });
      }
    }
  }

  // If no specific breadcrumb config, just show Home
  if (breadcrumbItems.length === 1) {
    return null;
  }

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(createBreadcrumbStructuredData(breadcrumbItems))}
      </script>

      {/* Visual Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-200 py-3">
        <div className="container-custom">
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbItems.map((item, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                )}
                {index === breadcrumbItems.length - 1 ? (
                  <span className="text-gray-900 font-medium" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    to={item.url}
                    className="text-gray-500 hover:text-primary-600 transition"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
};
