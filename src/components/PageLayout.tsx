
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const PageLayout = ({ children, className = "" }: PageLayoutProps) => {
  useEffect(() => {
    // Add a class to the body when the component mounts
    document.body.classList.add("antialiased");
    
    // Scroll to top when mounting
    window.scrollTo(0, 0);
    
    // Clean up the class when component unmounts
    return () => {
      document.body.classList.remove("antialiased");
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className={`flex-grow pt-24 ${className}`}>
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default PageLayout;
