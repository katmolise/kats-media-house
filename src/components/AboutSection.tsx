
import React from "react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* Background styling */}
      <div className="absolute inset-0 bg-secondary/30 -z-10"></div>
      
      <div className="container-width section-spacing">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image column */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/5] animate-fade-in-left">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" 
                  alt="Content Creator Portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Stats card */}
              <div className="absolute -bottom-6 -right-6 p-5 glass-card rounded-xl shadow-lg animate-fade-in max-w-[220px]">
                <p className="text-xs font-medium text-muted-foreground">Projects Completed</p>
                <p className="text-3xl font-bold">120+</p>
                <div className="mt-2 h-1 w-full bg-secondary/50 rounded-full overflow-hidden">
                  <div className="h-full w-4/5 bg-primary rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content column */}
          <div className="space-y-6 order-1 lg:order-2 animate-fade-in-right">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-xs font-medium tracking-wide">
              ABOUT ME
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-balance">
              I Create Social Media Content That Connects & Converts
            </h2>
            
            <p className="text-muted-foreground">
              I'm a social media content creator with a passion for crafting visual narratives that resonate with audiences and drive measurable results. My approach combines strategic thinking with creative execution, ensuring your brand's message not only reaches your target audience but genuinely connects with them.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Strategic Approach</h3>
                <p className="text-sm text-muted-foreground">Data-driven content creation focused on your target audience and business objectives.</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Creative Execution</h3>
                <p className="text-sm text-muted-foreground">Visually stunning content that stands out in crowded social feeds and captures attention.</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Platform Optimization</h3>
                <p className="text-sm text-muted-foreground">Tailored content for each platform's unique audience and algorithm requirements.</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Measurable Results</h3>
                <p className="text-sm text-muted-foreground">Focus on metrics that matter—engagement, conversions, and brand growth.</p>
              </div>
            </div>
            
            <div className="pt-4">
              <Button className="rounded-full px-6">Learn More</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
