import React from 'react';
import { AudiencePageLayout } from '@/components/solutions/AudiencePageLayout';
import { audiences } from '@/data/audiences';
import { SEOHead } from '@/components/seo/SEOHead';
import { getSeoConfig, defaultStructuredData } from '@/config/seoConfig';

export const NGOPage: React.FC = () => {
  const config = audiences.ngo;

  const seo = getSeoConfig('ngo');
  const structuredData = defaultStructuredData;

  return (
    <>
      <SEOHead seo={seo} structuredData={structuredData} />

      <AudiencePageLayout config={config} />
    </>
  );
};
