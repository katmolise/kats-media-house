
import React from "react";
import PageLayout from "@/components/PageLayout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Case Study type
interface CaseStudy {
  id: number;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    title: "Increasing Brand Engagement Through Instagram Stories",
    client: "Urban Brew Coffee",
    industry: "Food & Beverage",
    challenge: "Urban Brew Coffee was struggling with low engagement on their social media, despite having a decent follower count. They needed a strategy to increase meaningful interactions and build community.",
    solution: "Created a series of interactive Instagram Stories featuring behind-the-scenes content, customer spotlights, and educational coffee tips. Implemented a consistent visual style and strategic posting schedule.",
    results: [
      "250% increase in Story views",
      "300% increase in Story replies and direct messages",
      "30% growth in follower count over 3 months"
    ],
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 2,
    title: "TikTok Launch Strategy for Fitness Equipment Brand",
    client: "FlexFit Equipment",
    industry: "Fitness",
    challenge: "FlexFit Equipment wanted to expand their presence to TikTok to reach a younger demographic, but had no experience with the platform or its content style.",
    solution: "Developed a TikTok strategy centered around workout challenges, product demonstrations, and collaborations with fitness influencers. Created a content calendar and filming guidelines.",
    results: [
      "Gained 10K followers within first month",
      "First viral video reached 1.2M views",
      "15% increase in website traffic from social media"
    ],
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 3,
    title: "YouTube Channel Growth for Travel Company",
    client: "Wanderlust Tours",
    industry: "Travel & Tourism",
    challenge: "Wanderlust Tours had a YouTube channel with inconsistent content and low viewership. They wanted to turn it into a primary booking driver for their tour packages.",
    solution: "Redesigned channel branding and developed a content strategy focused on destination guides, travel tips, and customer experiences. Implemented SEO optimization for all videos.",
    results: [
      "500% increase in monthly views over 6 months",
      "Watch time increased from average 1:20 to 5:40",
      "25% of new bookings reported discovering the company through YouTube"
    ],
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  }
];

const CaseStudiesPage = () => {
  return (
    <PageLayout>
      <section className="container-width section-spacing">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-xs font-medium tracking-wide mb-4 animate-fade-in">
            CASE STUDIES
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in" style={{ animationDelay: "100ms" }}>
            Success Stories
          </h1>
          <p className="text-muted-foreground animate-fade-in" style={{ animationDelay: "200ms" }}>
            Dive deeper into how my strategic approach to social media content creation has helped brands achieve their goals.
          </p>
        </div>
        
        {/* Case Studies */}
        <div className="space-y-16 mb-20">
          {CASE_STUDIES.map((caseStudy, index) => (
            <CaseStudyCard 
              key={caseStudy.id} 
              caseStudy={caseStudy} 
              index={index}
              isEven={index % 2 === 1}
            />
          ))}
        </div>
        
        {/* CTA section */}
        <div className="bg-card rounded-2xl p-8 md:p-12 border border-border/50 shadow-sm text-center animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Create Your Success Story?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's collaborate to develop a social media strategy that elevates your brand and delivers measurable results.
          </p>
          <Button asChild className="rounded-full px-8 py-6 text-base">
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

const CaseStudyCard = ({ 
  caseStudy, 
  index,
  isEven
}: { 
  caseStudy: CaseStudy;
  index: number;
  isEven: boolean;
}) => {
  return (
    <div 
      className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
        isEven ? "lg:flex-row-reverse" : ""
      } animate-fade-in`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Image */}
      <div className={`relative ${isEven ? "lg:order-2" : ""}`}>
        <div className="rounded-2xl overflow-hidden aspect-video">
          <img 
            src={caseStudy.image} 
            alt={caseStudy.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="absolute -bottom-4 -right-4 bg-primary text-white py-2 px-4 rounded-lg shadow-md">
          <span className="text-sm font-medium">{caseStudy.industry}</span>
        </div>
      </div>
      
      {/* Content */}
      <div className={`space-y-6 ${isEven ? "lg:order-1" : ""}`}>
        <div>
          <p className="text-sm text-muted-foreground mb-2">Client: {caseStudy.client}</p>
          <h2 className="text-2xl md:text-3xl font-bold">{caseStudy.title}</h2>
        </div>
        
        <div>
          <h3 className="font-semibold mb-2">The Challenge</h3>
          <p className="text-muted-foreground">{caseStudy.challenge}</p>
        </div>
        
        <div>
          <h3 className="font-semibold mb-2">The Solution</h3>
          <p className="text-muted-foreground">{caseStudy.solution}</p>
        </div>
        
        <div>
          <h3 className="font-semibold mb-2">The Results</h3>
          <ul className="space-y-2">
            {caseStudy.results.map((result, idx) => (
              <li key={idx} className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 mr-3">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                </div>
                <span className="text-muted-foreground">{result}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <Button className="rounded-full group" variant="outline">
          <span>View Full Case Study</span>
          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

export default CaseStudiesPage;
