import React from 'react';
import { AudiencePageLayout } from '@/components/solutions/AudiencePageLayout';
import { audiences } from '@/data/audiences';
import { SEOHead } from '@/components/seo/SEOHead';
import { getSeoConfig, defaultStructuredData } from '@/config/seoConfig';

export const EducationPage: React.FC = () => {
  const config = audiences.education;

  const seo = getSeoConfig('education');
  const structuredData = defaultStructuredData;

  return (
    <>
      <SEOHead seo={seo} structuredData={structuredData} />

      <AudiencePageLayout config={config} />
    </>
  );
};
