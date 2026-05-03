import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import AboutTeaser from "@/components/home/AboutTeaser";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import TestimonialsTeaser from "@/components/home/TestimonialsTeaser";
import CtaBanner from "@/components/home/CtaBanner";
import { siteConfig } from "@/content";

export const metadata: Metadata = {
  title: `${siteConfig.businessName} — Residential Garden Design`,
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutTeaser />
      <PortfolioPreview />
      <TestimonialsTeaser />
      <CtaBanner />
    </>
  );
}
