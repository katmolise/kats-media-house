
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";

// Case Study type
interface CaseStudy {
  id: number;
  title: string;
  client: string;
  problem: string;
  strategy: string;
  execution: string;
  results: {
    text: string;
    stats: { label: string; value: string; increase: string }[];
  };
  image: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    title: "Revitalizing Instagram Presence for Local Coffee Shop",
    client: "Urban Brew Coffee",
    problem: "Urban Brew Coffee had low engagement and a stagnant follower count despite great in-store experience.",
    strategy: "Created a cohesive visual identity featuring baristas, coffee-making process, and customer moments. Implemented a user-generated content strategy and local partnerships.",
    execution: "Complete Instagram grid redesign, weekly Reels showcasing coffee preparation, customer spotlight Stories, and behind-the-scenes content.",
    results: {
      text: "The new strategy transformed Urban Brew's digital presence and drove real business growth.",
      stats: [
        { label: "Follower Growth", value: "345%", increase: "in 6 months" },
        { label: "Engagement Rate", value: "5.2%", increase: "from 0.8%" },
        { label: "Store Visits", value: "32%", increase: "increase" }
      ]
    },
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 2,
    title: "TikTok Launch Strategy for Fitness Brand",
    client: "FlexFit Equipment",
    problem: "FlexFit needed to enter TikTok to reach younger demographics and showcase product functionality.",
    strategy: "Developed short-form content strategy featuring product demonstrations, fitness challenges, and influencer collaborations.",
    execution: "Created a 3-month content calendar with daily TikToks, weekly trends participation, and influencer campaign with 5 fitness creators.",
    results: {
      text: "The launch exceeded expectations and established FlexFit as a TikTok fitness authority.",
      stats: [
        { label: "Followers", value: "50K+", increase: "in 3 months" },
        { label: "Views", value: "3.2M", increase: "total" },
        { label: "Conversion Rate", value: "2.8%", increase: "from TikTok traffic" }
      ]
    },
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 3,
    title: "YouTube Content Strategy for Travel Company",
    client: "Wanderlust Tours",
    problem: "Wanderlust Tours struggled to convert interest into bookings with their existing content.",
    strategy: "Developed a destination-focused YouTube series highlighting authentic experiences, local culture, and practical travel tips.",
    execution: "Produced 12 high-quality destination guides, optimized for search, with consistent publishing schedule and cross-platform promotion.",
    results: {
      text: "The YouTube strategy established Wanderlust as a trusted travel resource and significantly impacted bookings.",
      stats: [
        { label: "Subscribers", value: "87K", increase: "in 8 months" },
        { label: "Watch Time", value: "450K", increase: "hours" },
        { label: "Booking Increase", value: "68%", increase: "year-over-year" }
      ]
    },
    image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  }
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="bg-secondary/30">
      <div className="container-width section-spacing">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-xs font-medium tracking-wide mb-4">
            CASE STUDIES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Strategic Social Media Transformations
          </h2>
          <p className="text-muted-foreground">
            Detailed looks at how my strategic approach to social media content creation has helped transform brands and drive measurable results.
          </p>
        </div>

        <Tabs defaultValue="1" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-background/50 p-1 rounded-full border border-border/50">
              {CASE_STUDIES.map((study) => (
                <TabsTrigger
                  key={study.id}
                  value={study.id.toString()}
                  className="rounded-full px-5 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {`Case ${study.id}`}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {CASE_STUDIES.map((study) => (
            <TabsContent key={study.id} value={study.id.toString()} className="mt-0 animate-fade-in">
              <CaseStudyDetail study={study} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

const CaseStudyDetail = ({ study }: { study: CaseStudy }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
      <div className="space-y-6 order-2 lg:order-1">
        <h3 className="text-2xl font-bold">{study.title}</h3>
        <div className="inline-block px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-sm font-medium">
          {study.client}
        </div>
        
        <div className="space-y-6 pt-2">
          <div>
            <h4 className="text-lg font-semibold mb-2">The Challenge</h4>
            <p className="text-muted-foreground">{study.problem}</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-2">Strategy</h4>
            <p className="text-muted-foreground">{study.strategy}</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-2">Execution</h4>
            <p className="text-muted-foreground">{study.execution}</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-2">Results</h4>
            <p className="text-muted-foreground mb-4">{study.results.text}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              {study.results.stats.map((stat, index) => (
                <div key={index} className="bg-background rounded-lg p-4 border border-border/50">
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-green-600 dark:text-green-400">↑ {stat.increase}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="pt-4">
            <Button className="rounded-full px-6 group">
              View Full Case Study
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="relative order-1 lg:order-2">
        <div className="aspect-[4/3] rounded-xl overflow-hidden border border-border/50 shadow-sm">
          <img 
            src={study.image} 
            alt={study.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-primary/20 rounded-tr-xl"></div>
        <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-primary/20 rounded-bl-xl"></div>
      </div>
    </div>
  );
};

export default CaseStudies;
