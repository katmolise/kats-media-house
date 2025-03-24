
import React from "react";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <PageLayout>
      <section className="relative overflow-hidden">
        {/* Background styling */}
        <div className="absolute inset-0 bg-secondary/30 -z-10"></div>
        
        <div className="container-width section-spacing">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-xs font-medium tracking-wide mb-4 animate-fade-in">
              ABOUT ME
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in" style={{ animationDelay: "100ms" }}>
              My Journey as a Content Creator
            </h1>
            <p className="text-muted-foreground animate-fade-in" style={{ animationDelay: "200ms" }}>
              Get to know the person behind the content and my approach to crafting engaging social media narratives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
            {/* Image column */}
            <div className="relative animate-fade-in-left">
              <div className="rounded-2xl overflow-hidden aspect-[4/5]">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" 
                  alt="Content Creator Portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Experience card */}
              <div className="absolute -bottom-6 -right-6 p-5 glass-card rounded-xl shadow-lg animate-fade-in max-w-[220px]">
                <p className="text-xs font-medium text-muted-foreground">Years of Experience</p>
                <p className="text-3xl font-bold">5+</p>
                <div className="mt-2 h-1 w-full bg-secondary/50 rounded-full overflow-hidden">
                  <div className="h-full w-4/5 bg-primary rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* Content column */}
            <div className="space-y-6 animate-fade-in-right">
              <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                A Passion for Storytelling Through Social Media
              </h2>
              
              <p className="text-muted-foreground">
                I began my journey as a content creator in 2018, fascinated by how brands could connect with audiences through authentic storytelling. With a background in marketing and a love for visual design, I found my niche in crafting compelling social media content that not only looks beautiful but drives real business results.
              </p>
              
              <p className="text-muted-foreground">
                My approach combines strategic thinking with creative execution. I believe that effective social media content must be both visually striking and strategically sound, always laddering back to business objectives while resonating with the target audience.
              </p>
              
              <p className="text-muted-foreground">
                Having worked with brands across various industries—from small local businesses to national brands—I've developed a versatile toolkit that allows me to adapt to different brand voices and objectives.
              </p>
            </div>
          </div>
          
          {/* My approach section */}
          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border/50 shadow-sm mb-16 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">My Approach</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="font-semibold text-lg">Discovery</h3>
                <p className="text-sm text-muted-foreground">I begin by understanding your brand, audience, and goals to create content that aligns with your objectives.</p>
              </div>
              
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="font-semibold text-lg">Strategy</h3>
                <p className="text-sm text-muted-foreground">Based on research, I develop a content strategy that defines the formats, themes, and cadence for your social media presence.</p>
              </div>
              
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="font-semibold text-lg">Creation</h3>
                <p className="text-sm text-muted-foreground">I craft content that balances aesthetic appeal with strategic purpose, ensuring every post serves a clear objective.</p>
              </div>
              
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h3 className="font-semibold text-lg">Optimization</h3>
                <p className="text-sm text-muted-foreground">Through continuous analysis and refinement, I optimize content to maximize engagement and conversions.</p>
              </div>
            </div>
          </div>
          
          {/* Skills section */}
          <div className="mb-16 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">My Skills</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card rounded-xl p-6 border border-border/50 shadow-sm">
                <h3 className="font-semibold text-lg mb-3">Content Creation</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Visual content design
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Copywriting & caption writing
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Video creation & editing
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Photography & photo editing
                  </li>
                </ul>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-border/50 shadow-sm">
                <h3 className="font-semibold text-lg mb-3">Strategy & Analysis</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Content calendar planning
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Performance analytics
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Audience research
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Trend analysis & forecasting
                  </li>
                </ul>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-border/50 shadow-sm">
                <h3 className="font-semibold text-lg mb-3">Platform Expertise</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Instagram & Facebook
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    TikTok & YouTube
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    LinkedIn & Twitter
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Pinterest & emerging platforms
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* CTA section */}
          <div className="text-center animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Social Media Presence?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's collaborate to create content that elevates your brand, engages your audience, and drives measurable results.
            </p>
            <Button asChild className="rounded-full px-8 py-6 text-base">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
