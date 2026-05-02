import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AudiencePageLayout } from '@/components/solutions/AudiencePageLayout';
import { audiences } from '@/data/audiences';

export const NGOPage: React.FC = () => {
  const config = audiences.ngo;

  return (
    <>
      <Helmet>
        <title>{config.helmet.title}</title>
        <meta name="description" content={config.helmet.description} />
        <meta property="og:title" content={config.helmet.title} />
        <meta property="og:description" content={config.helmet.description} />
      </Helmet>

      <AudiencePageLayout config={config} />
    </>
  );
};
