import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../../config/siteConfig';
import type { SeoConfig, MetaTag } from '../../config/seoConfig';

interface SEOHeadProps {
  seo: SeoConfig;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  seo,
  structuredData,
}) => {
  const {
    title,
    description,
    keywords,
    canonical,
    openGraph,
    twitter,
    meta,
  } = seo;

  // Build full title with site name suffix
  const fullTitle = title.includes(siteConfig.name)
    ? title
    : `${title} | ${siteConfig.name}`;

  // Open Graph defaults
  const og = {
    ...openGraph,
    title: openGraph?.title || title,
    description: openGraph?.description || description,
    url: openGraph?.url || canonical,
    image: openGraph?.image || `${siteConfig.url}/images/og-image.jpg`,
    type: openGraph?.type || 'website',
  };

  // Twitter defaults
  const tw = {
    ...twitter,
    card: twitter?.card || 'summary_large_image',
    title: twitter?.title || title,
    description: twitter?.description || description,
    image: twitter?.image || og.image,
    site: twitter?.site || `@${siteConfig.social.twitter}`,
    creator: twitter?.creator || `@${siteConfig.social.twitter}`,
  };

  // Structured data script
  const structuredDataScript = structuredData
    ? {
        type: 'application/ld+json',
        json: structuredData,
      }
    : undefined;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords.join(', ')} />}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={og.title} />
      <meta property="og:description" content={og.description} />
      {og.url && <meta property="og:url" content={og.url} />}
      <meta property="og:type" content={og.type} />
      {og.image && <meta property="og:image" content={og.image} />}
      {og.image && <meta property="og:image:width" content="1200" />}
      {og.image && <meta property="og:image:height" content="630" />}

      {/* Twitter Card */}
      <meta name="twitter:card" content={tw.card} />
      <meta name="twitter:site" content={tw.site} />
      <meta name="twitter:creator" content={tw.creator} />
      <meta name="twitter:title" content={tw.title} />
      <meta name="twitter:description" content={tw.description} />
      {tw.image && <meta name="twitter:image" content={tw.image} />}
      {tw.image && <meta name="twitter:image:alt" content={title} />}

      {/* Additional meta tags */}
      {meta?.map((tag: MetaTag, index: number) => (
        <meta key={index} {...tag} />
      ))}

      {/* Structured Data */}
      {structuredDataScript && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};