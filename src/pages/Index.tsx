
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Add a class to the body when the component mounts
    document.body.classList.add("antialiased");
    
    // Clean up the class when component unmounts
    return () => {
      document.body.classList.remove("antialiased");
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <CaseStudies />
        <Testimonials />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
