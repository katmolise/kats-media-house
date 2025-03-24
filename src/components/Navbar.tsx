
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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

  const isActive = (path: string) => {
    return location.pathname === path ? "text-primary" : "";
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
        <Link to="/" className="text-xl font-display font-semibold tracking-tight">
          Portfolio<span className="text-primary font-bold">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className={`text-sm font-medium hover:text-primary transition-colors ${isActive('/')}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-sm font-medium hover:text-primary transition-colors ${isActive('/about')}`}
          >
            About
          </Link>
          <Link
            to="/portfolio"
            className={`text-sm font-medium hover:text-primary transition-colors ${isActive('/portfolio')}`}
          >
            Portfolio
          </Link>
          <Link
            to="/case-studies"
            className={`text-sm font-medium hover:text-primary transition-colors ${isActive('/case-studies')}`}
          >
            Case Studies
          </Link>
          <Link
            to="/contact"
            className={`text-sm font-medium hover:text-primary transition-colors ${isActive('/contact')}`}
          >
            Contact
          </Link>
          <Button size="sm" className="rounded-full px-6 bg-primary hover:bg-primary/90">
            <Link to="/contact" className="text-white">Let's Talk</Link>
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
            <Link
              to="/"
              className={`py-2 text-sm font-medium hover:text-primary transition-colors ${isActive('/')}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`py-2 text-sm font-medium hover:text-primary transition-colors ${isActive('/about')}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/portfolio"
              className={`py-2 text-sm font-medium hover:text-primary transition-colors ${isActive('/portfolio')}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              to="/case-studies"
              className={`py-2 text-sm font-medium hover:text-primary transition-colors ${isActive('/case-studies')}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Case Studies
            </Link>
            <Link
              to="/contact"
              className={`py-2 text-sm font-medium hover:text-primary transition-colors ${isActive('/contact')}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button size="sm" className="rounded-full w-full bg-primary hover:bg-primary/90" onClick={() => setIsMobileMenuOpen(false)}>
              <Link to="/contact" className="text-white w-full text-center">Let's Talk</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
