
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ArrowLeft, ArrowRight, Grid3X3, LayoutList } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Import portfolio data (same as used in PortfolioSection)
interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  results: string;
  tags: string[];
  serviceId?: string;
}

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    title: "Fashion Brand Campaign",
    description: "Instagram grid refresh and story campaign for a boutique fashion brand",
    category: "instagram",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    results: "45% increase in engagement",
    tags: ["Fashion", "Social Media", "Content Creation"],
    serviceId: "content-creation"
  },
  {
    id: 2,
    title: "Food Delivery App",
    description: "Content strategy and production for a food delivery startup",
    category: "tiktok",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    results: "230% growth in followers",
    tags: ["Food", "TikTok", "Video Content"],
    serviceId: "social-media-management"
  },
  {
    id: 3,
    title: "Fitness Product Launch",
    description: "Product launch campaign for a new fitness equipment line",
    category: "instagram",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    results: "85% increase in website traffic",
    tags: ["Fitness", "Product Launch", "Influencer"],
    serviceId: "content-strategy"
  },
  {
    id: 4,
    title: "Travel Content Series",
    description: "Destination-focused content series for a travel company",
    category: "youtube",
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
    results: "320K views across series",
    tags: ["Travel", "YouTube", "Series"],
    serviceId: "content-creation"
  },
  {
    id: 5,
    title: "Lifestyle Brand Reels",
    description: "Instagram Reels strategy for home goods brand",
    category: "instagram",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
    results: "150% increase in profile visits",
    tags: ["Lifestyle", "Reels", "Brand"],
    serviceId: "social-media-management"
  },
  {
    id: 6,
    title: "Tech Product Unboxing",
    description: "Series of tech product unboxing videos",
    category: "tiktok",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1420&q=80",
    results: "1.2M total plays",
    tags: ["Tech", "Unboxing", "TikTok"],
    serviceId: "analytics-reporting"
  },
  {
    id: 7,
    title: "Artisan Bakery Social Media",
    description: "Full social media management for an artisan bakery",
    category: "instagram",
    image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80",
    results: "75% increase in store visits",
    tags: ["Food", "Instagram", "Brand Identity"],
    serviceId: "social-media-management"
  },
  {
    id: 8,
    title: "Indie Music Promotion",
    description: "TikTok strategy for independent music artists",
    category: "tiktok",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80",
    results: "3 viral hits with 5M+ plays",
    tags: ["Music", "TikTok", "Promotion"],
    serviceId: "content-strategy"
  },
  {
    id: 9,
    title: "Sustainable Fashion Launch",
    description: "Multi-platform content for sustainable fashion brand launch",
    category: "other",
    image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80",
    results: "200K reached across platforms",
    tags: ["Fashion", "Sustainability", "Launch"],
    serviceId: "content-creation"
  },
  {
    id: 10,
    title: "Home Renovation Channel",
    description: "YouTube channel growth strategy for home renovation expert",
    category: "youtube",
    image: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80",
    results: "100K subscribers in 6 months",
    tags: ["Home", "DIY", "YouTube"],
    serviceId: "analytics-reporting"
  },
  {
    id: 11,
    title: "Beauty Brand Tutorials",
    description: "Series of makeup tutorial videos for beauty brand",
    category: "youtube",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80",
    results: "35% conversion rate on products",
    tags: ["Beauty", "Tutorials", "Product"],
    serviceId: "content-creation"
  },
  {
    id: 12,
    title: "Pet Supplies Newsletter",
    description: "Email newsletter design and content strategy",
    category: "other",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80",
    results: "28% open rate, 12% click-through",
    tags: ["Pets", "Email", "Content"],
    serviceId: "content-strategy"
  }
];

const AllProjects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add("antialiased");
    
    return () => {
      document.body.classList.remove("antialiased");
    };
  }, []);

  const filteredItems = activeFilter === "all" 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === activeFilter);

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const filterButtons = [
    { value: "all", label: "All" },
    { value: "instagram", label: "Instagram" },
    { value: "tiktok", label: "TikTok" },
    { value: "youtube", label: "YouTube" },
    { value: "other", label: "Other" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-secondary/30 py-12">
          <div className="container-width">
            <div className="mb-8">
              <Button asChild variant="ghost" className="group mb-6">
                <Link to="/#portfolio">
                  <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                  Back to Home
                </Link>
              </Button>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">All Projects</h1>
              <p className="text-muted-foreground max-w-2xl">
                Browse through my complete portfolio of social media projects across Instagram, TikTok, YouTube and other platforms.
              </p>
            </div>
          </div>
        </section>
        
        <section className="bg-background py-12">
          <div className="container-width">
            {/* Filter controls */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <div className="flex flex-wrap gap-2">
                {filterButtons.map((button) => (
                  <Button
                    key={button.value}
                    variant={activeFilter === button.value ? "default" : "outline"}
                    size="sm"
                    className="rounded-full"
                    onClick={() => {
                      setActiveFilter(button.value);
                      setCurrentPage(1);
                    }}
                  >
                    {button.label}
                  </Button>
                ))}
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("grid")}
                  className="rounded-full"
                >
                  <Grid3X3 size={18} />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("list")}
                  className="rounded-full"
                >
                  <LayoutList size={18} />
                </Button>
              </div>
            </div>
            
            {/* Projects grid */}
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {currentItems.map((item) => (
                  <ProjectCard key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <div className="space-y-4 mb-10">
                {currentItems.map((item) => (
                  <ProjectListItem key={item.id} item={item} />
                ))}
              </div>
            )}
            
            {/* Pagination */}
            {totalPages > 1 && (
              <Pagination>
                <PaginationContent>
                  {currentPage > 1 && (
                    <PaginationItem>
                      <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} />
                    </PaginationItem>
                  )}
                  
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <PaginationItem key={index}>
                      <PaginationLink 
                        isActive={currentPage === index + 1}
                        onClick={() => handlePageChange(index + 1)}
                      >
                        {index + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  
                  {currentPage < totalPages && (
                    <PaginationItem>
                      <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
                    </PaginationItem>
                  )}
                </PaginationContent>
              </Pagination>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

// Portfolio card component (same as in PortfolioSection but imported directly here)
const ProjectCard = ({ item }: { item: PortfolioItem }) => {
  return (
    <div className="group rounded-xl overflow-hidden bg-card border border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20 animate-fade-in">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img 
          src={item.image} 
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag, index) => (
              <span key={index} className="text-xs px-2 py-1 rounded-full bg-background/90 text-foreground">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg">{item.title}</h3>
          <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary capitalize">
            {item.category}
          </span>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
        
        <div className="flex justify-between items-center">
          <div className="text-sm font-medium text-green-600 dark:text-green-400">
            {item.results}
          </div>
          {item.serviceId ? (
            <Button asChild variant="ghost" size="sm" className="rounded-full hover:bg-primary/5 px-3 group">
              <Link to={`/services/${item.serviceId}`}>
                Learn More
                <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          ) : (
            <Button variant="ghost" size="sm" className="rounded-full hover:bg-primary/5 px-3 group">
              View Project
              <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

// List view for projects
const ProjectListItem = ({ item }: { item: PortfolioItem }) => {
  return (
    <Card className="group hover:border-primary/20 transition-all duration-300">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 relative overflow-hidden">
            <div className="h-60 md:h-full">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute top-2 right-2">
              <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary capitalize">
                {item.category}
              </span>
            </div>
          </div>
          
          <div className="md:w-3/4 p-6">
            <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
            <p className="text-muted-foreground mb-4">{item.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {item.tags.map((tag, index) => (
                <span key={index} className="text-xs px-2 py-1 rounded-full bg-secondary/50 text-foreground">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex justify-between items-center mt-4">
              <div className="text-sm font-medium text-green-600 dark:text-green-400">
                {item.results}
              </div>
              {item.serviceId ? (
                <Button asChild variant="outline" size="sm" className="rounded-full group">
                  <Link to={`/services/${item.serviceId}`}>
                    Learn More
                    <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              ) : (
                <Button variant="outline" size="sm" className="rounded-full group">
                  View Project
                  <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AllProjects;
