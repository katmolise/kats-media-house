
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 glass-card shadow-sm"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container-width px-6 mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-semibold tracking-tight">
          Portfolio<span className="text-primary font-bold">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#home"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            About
          </a>
          <a
            href="#portfolio"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Portfolio
          </a>
          <a
            href="#case-studies"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Case Studies
          </a>
          <a
            href="#contact"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contact
          </a>
          <Button size="sm" className="rounded-full px-6">
            Let's Talk
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-card py-4 shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-3 px-6">
            <a
              href="#home"
              className="py-2 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="py-2 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#portfolio"
              className="py-2 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Portfolio
            </a>
            <a
              href="#case-studies"
              className="py-2 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Case Studies
            </a>
            <a
              href="#contact"
              className="py-2 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button size="sm" className="rounded-full w-full">
              Let's Talk
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
