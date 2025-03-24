
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";

// Portfolio item type
interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  results: string;
  tags: string[];
}

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    title: "Fashion Brand Campaign",
    description: "Instagram grid refresh and story campaign for a boutique fashion brand",
    category: "instagram",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    results: "45% increase in engagement",
    tags: ["Fashion", "Social Media", "Content Creation"]
  },
  {
    id: 2,
    title: "Food Delivery App",
    description: "Content strategy and production for a food delivery startup",
    category: "tiktok",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    results: "230% growth in followers",
    tags: ["Food", "TikTok", "Video Content"]
  },
  {
    id: 3,
    title: "Fitness Product Launch",
    description: "Product launch campaign for a new fitness equipment line",
    category: "instagram",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    results: "85% increase in website traffic",
    tags: ["Fitness", "Product Launch", "Influencer"]
  },
  {
    id: 4,
    title: "Travel Content Series",
    description: "Destination-focused content series for a travel company",
    category: "youtube",
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
    results: "320K views across series",
    tags: ["Travel", "YouTube", "Series"]
  },
  {
    id: 5,
    title: "Lifestyle Brand Reels",
    description: "Instagram Reels strategy for home goods brand",
    category: "instagram",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
    results: "150% increase in profile visits",
    tags: ["Lifestyle", "Reels", "Brand"]
  },
  {
    id: 6,
    title: "Tech Product Unboxing",
    description: "Series of tech product unboxing videos",
    category: "tiktok",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1420&q=80",
    results: "1.2M total plays",
    tags: ["Tech", "Unboxing", "TikTok"]
  }
];

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems = activeFilter === "all" 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="bg-background">
      <div className="container-width section-spacing">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-xs font-medium tracking-wide mb-4">
            MY WORK
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Portfolio Projects
          </h2>
          <p className="text-muted-foreground">
            A showcase of my best social media projects across multiple platforms,
            highlighting different content types and measurable results.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-10">
            <TabsList className="grid grid-cols-4 sm:grid-cols-5 h-auto p-1 bg-secondary/30">
              <TabsTrigger 
                value="all" 
                className="rounded-full px-4 py-2 data-[state=active]:bg-background"
                onClick={() => setActiveFilter("all")}
              >
                All
              </TabsTrigger>
              <TabsTrigger 
                value="instagram"
                className="rounded-full px-4 py-2 data-[state=active]:bg-background"
                onClick={() => setActiveFilter("instagram")}
              >
                Instagram
              </TabsTrigger>
              <TabsTrigger 
                value="tiktok"
                className="rounded-full px-4 py-2 data-[state=active]:bg-background"
                onClick={() => setActiveFilter("tiktok")}
              >
                TikTok
              </TabsTrigger>
              <TabsTrigger 
                value="youtube"
                className="rounded-full px-4 py-2 data-[state=active]:bg-background"
                onClick={() => setActiveFilter("youtube")}
              >
                YouTube
              </TabsTrigger>
              <TabsTrigger 
                value="other"
                className="rounded-full px-4 py-2 data-[state=active]:bg-background hidden sm:block"
                onClick={() => setActiveFilter("other")}
              >
                Other
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <PortfolioCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="instagram" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <PortfolioCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="tiktok" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <PortfolioCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="youtube" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <PortfolioCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="other" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <PortfolioCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="rounded-full px-6 group">
            View All Projects 
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

const PortfolioCard = ({ item }: { item: PortfolioItem }) => {
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
          <Button variant="ghost" size="sm" className="rounded-full hover:bg-primary/5 px-3 group">
            View Project
            <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
