import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AudiencePageLayout } from '@/components/solutions/AudiencePageLayout';
import { audiences } from '@/data/audiences';

export const EducationPage: React.FC = () => {
  const config = audiences.education;

  return (
    <>
      <Helmet>
        <title>{config.helmet.title}</title>
        <meta name="description" content={config.helmet.description} />
      </Helmet>

      <AudiencePageLayout config={config} />
    </>
  );
};
