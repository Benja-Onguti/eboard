import React from "react";
import { Helmet } from "react-helmet-async";
import { Hero } from "@/components/home/Hero";
import { TrustedBy } from "../components/home/TrustedBy";
import { FeaturesOverview } from "../components/home/FeaturesOverview";
import { AudienceSegments } from "../components/home/AudienceSegments";
import { Stats } from "../components/home/Stats";
import { Testimonials } from "../components/home/Testimonials";
import { CTASection } from "../components/home/CTASection";

export const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>EBoard Solutions - Modern Governance Platform</title>
        <meta
          name="description"
          content="Streamline board management for educational institutions, government bodies, NGOs, and enterprises. Reduce meeting prep time by 70% with EBoard."
        />
        <meta
          property="og:title"
          content="EBoard Solutions - Modern Governance Platform"
        />
        <meta
          property="og:description"
          content="Streamline board management for educational institutions, government bodies, NGOs, and enterprises."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eboard-solutions.com" />
        <meta property="og:image" content="/images/og-image.jpg" />
      </Helmet>

      <Hero />
      <TrustedBy />
      <FeaturesOverview />
      <AudienceSegments />
      <Stats />
      <Testimonials />
      <CTASection />
    </>
  );
};
