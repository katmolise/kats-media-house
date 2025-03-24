
import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Portfolio item type
interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  client: string;
}

// Portfolio data
const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    title: "Seasonal Product Launch Campaign",
    category: "Instagram",
    description: "A series of carousel posts and stories showcasing a new product line with seasonal themes.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    client: "Lifestyle Brand"
  },
  {
    id: 2,
    title: "Brand Awareness Video Series",
    category: "TikTok",
    description: "A collection of trend-driven short videos to increase brand visibility among Gen Z audience.",
    image: "https://images.unsplash.com/photo-1622038887768-b84d0007796c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
    client: "Fashion Retailer"
  },
  {
    id: 3,
    title: "Educational Content Series",
    category: "YouTube",
    description: "In-depth tutorial videos establishing thought leadership and driving organic traffic.",
    image: "https://images.unsplash.com/photo-1595741826869-4e5730fc10c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
    client: "SaaS Company"
  },
  {
    id: 4,
    title: "User-Generated Content Campaign",
    category: "Instagram",
    description: "Strategy and implementation for collecting and curating customer content.",
    image: "https://images.unsplash.com/photo-1585184394271-4c0a47dc59c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    client: "Food & Beverage Brand"
  },
  {
    id: 5,
    title: "Product Demonstration Reels",
    category: "Facebook",
    description: "Short, engaging videos showcasing product features and benefits for conversion.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    client: "Consumer Tech"
  },
  {
    id: 6,
    title: "Content Refresh & Rebranding",
    category: "Multi-platform",
    description: "Complete overhaul of social media presence across platforms with new brand identity.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    client: "Wellness Brand"
  }
];

// Filter categories
const ALL_CATEGORIES = ["All", ...Array.from(new Set(PORTFOLIO_ITEMS.map(item => item.category)))];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const filteredItems = activeFilter === "All" 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === activeFilter);

  return (
    <PageLayout>
      <section className="container-width section-spacing">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-xs font-medium tracking-wide mb-4 animate-fade-in">
            MY WORK
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in" style={{ animationDelay: "100ms" }}>
            Portfolio
          </h1>
          <p className="text-muted-foreground animate-fade-in" style={{ animationDelay: "200ms" }}>
            Explore a collection of my social media content work across various platforms and industries.
          </p>
        </div>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in" style={{ animationDelay: "300ms" }}>
          {ALL_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === category
                  ? "bg-primary text-white"
                  : "bg-secondary hover:bg-primary/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <PortfolioCard 
              key={item.id} 
              item={item} 
              index={index}
            />
          ))}
        </div>
        
        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground mb-4">No projects found with the selected filter.</p>
            <Button 
              variant="outline" 
              onClick={() => setActiveFilter("All")}
              className="rounded-full"
            >
              View all projects
            </Button>
          </div>
        )}
        
        {/* CTA section */}
        <div className="text-center mt-20 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Like What You See?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects and creative collaborations.
          </p>
          <Button asChild className="rounded-full px-8 py-6 text-base">
            <Link to="/contact">Start a Project</Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

const PortfolioCard = ({ 
  item, 
  index 
}: { 
  item: PortfolioItem;
  index: number;
}) => {
  return (
    <div 
      className="group bg-card rounded-xl overflow-hidden border border-border/50 shadow-sm transition-all hover:shadow-md animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="aspect-[16/9] overflow-hidden">
        <img 
          src={item.image} 
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg line-clamp-1">{item.title}</h3>
          <span className="inline-block px-2 py-1 bg-primary/5 text-primary text-xs rounded-full">
            {item.category}
          </span>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {item.description}
        </p>
        
        <div className="flex justify-between items-center">
          <span className="text-xs text-muted-foreground">
            Client: <span className="font-medium">{item.client}</span>
          </span>
          
          <Button variant="outline" size="sm" className="rounded-full hover:bg-primary hover:text-white">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
