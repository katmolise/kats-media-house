
import React from "react";
import PageLayout from "@/components/PageLayout";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <PageLayout className="pt-0">
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <CaseStudies />
      <Testimonials />
      <ContactSection />
    </PageLayout>
  );
};

export default Index;
