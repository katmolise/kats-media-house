
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Mock service data
const SERVICES = [
  {
    id: "content-strategy",
    title: "Content Strategy",
    description: "A tailored approach to planning, creating, and managing content that aligns with your business goals and resonates with your target audience.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80",
    benefits: [
      "Aligned messaging across all platforms",
      "Consistent brand voice and identity",
      "Targeted content for specific audience segments",
      "Clear content roadmap for predictable growth"
    ],
    process: [
      {
        step: "Discovery & Audit",
        description: "Thorough analysis of your current content, audience, and competitors to identify gaps and opportunities."
      },
      {
        step: "Strategy Development",
        description: "Creation of a comprehensive content plan aligned with your business objectives and audience needs."
      },
      {
        step: "Content Calendar",
        description: "Development of a structured timeline for content creation and publication across platforms."
      },
      {
        step: "Implementation Support",
        description: "Guidance and resources to help you execute the strategy effectively."
      },
      {
        step: "Performance Analysis",
        description: "Regular review of content performance with recommendations for optimization."
      }
    ]
  },
  {
    id: "social-media-management",
    title: "Social Media Management",
    description: "Comprehensive management of your social media presence to build community, increase engagement, and drive meaningful business results.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80",
    benefits: [
      "Consistent and professional brand presence",
      "Increased audience engagement and growth",
      "Time savings for your team",
      "Strategic content aligned with business goals",
      "Regular performance reporting and insights"
    ],
    process: [
      {
        step: "Platform Strategy",
        description: "Identification of the most effective platforms for your business and audience."
      },
      {
        step: "Content Creation",
        description: "Development of engaging, platform-optimized content that resonates with your audience."
      },
      {
        step: "Community Management",
        description: "Proactive engagement with your audience to build relationships and loyalty."
      },
      {
        step: "Growth Tactics",
        description: "Implementation of strategies to expand your reach and following organically."
      },
      {
        step: "Analytics & Reporting",
        description: "Regular analysis of performance metrics with actionable insights for improvement."
      }
    ]
  },
  {
    id: "content-creation",
    title: "Content Creation",
    description: "Professional development of engaging, high-quality content tailored to your brand voice and audience preferences across various platforms.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80",
    benefits: [
      "Professionally crafted, engaging content",
      "Consistent posting schedule",
      "Platform-optimized formats and messaging",
      "Content that drives specific business objectives",
      "Fresh perspectives and creative approaches"
    ],
    process: [
      {
        step: "Creative Brief",
        description: "Comprehensive overview of project objectives, audience, and key messaging points."
      },
      {
        step: "Content Planning",
        description: "Strategic development of content themes, formats, and distribution channels."
      },
      {
        step: "Creation & Production",
        description: "Professional development of content pieces optimized for each platform."
      },
      {
        step: "Review & Refinement",
        description: "Collaborative feedback process to ensure content meets objectives and standards."
      },
      {
        step: "Performance Tracking",
        description: "Monitoring content effectiveness with recommendations for future optimization."
      }
    ]
  },
  {
    id: "analytics-reporting",
    title: "Analytics & Reporting",
    description: "Data-driven analysis of your digital content performance, providing actionable insights to optimize your strategy and achieve better results.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80",
    benefits: [
      "Clear understanding of content performance",
      "Identification of high-performing content types",
      "Audience behavior and preference insights",
      "ROI measurement for content investments",
      "Data-backed recommendations for improvement"
    ],
    process: [
      {
        step: "KPI Definition",
        description: "Identification of the most relevant metrics aligned with your business objectives."
      },
      {
        step: "Tracking Setup",
        description: "Implementation of proper tracking mechanisms across all platforms and content."
      },
      {
        step: "Data Collection",
        description: "Systematic gathering of performance data from multiple sources into a unified view."
      },
      {
        step: "Analysis & Insights",
        description: "Professional interpretation of data patterns and extraction of actionable insights."
      },
      {
        step: "Strategic Recommendations",
        description: "Practical suggestions for content optimization based on performance data."
      }
    ]
  }
];

const LearnMore = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = SERVICES.find(s => s.id === serviceId);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add("antialiased");
    
    return () => {
      document.body.classList.remove("antialiased");
    };
  }, []);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Service not found</h1>
            <Button asChild className="rounded-full">
              <Link to="/">Return to Home</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-secondary/30">
          <div className="container-width section-spacing">
            <div className="mb-8">
              <Button asChild variant="ghost" className="group mb-6">
                <Link to="/">
                  <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                  Back to Home
                </Link>
              </Button>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{service.title}</h1>
              <p className="text-lg text-muted-foreground max-w-2xl">{service.description}</p>
            </div>
            
            <div className="rounded-xl overflow-hidden aspect-video mb-12">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="bg-background">
          <div className="container-width section-spacing">
            <div className="mb-12 text-center">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-xs font-medium tracking-wide mb-4">
                BENEFITS
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">
                How You'll Benefit
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="bg-card rounded-lg p-6 border border-border/50 shadow-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                      {index + 1}
                    </div>
                    <h3 className="font-medium">{benefit}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="bg-secondary/30">
          <div className="container-width section-spacing">
            <div className="mb-12 text-center">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-xs font-medium tracking-wide mb-4">
                PROCESS
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">
                My Approach
              </h2>
            </div>
            
            <div className="space-y-8">
              {service.process.map((step, index) => (
                <div key={index} className="relative">
                  {index !== service.process.length - 1 && (
                    <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-border"></div>
                  )}
                  <div className="flex">
                    <div className="min-w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold z-10">
                      {index + 1}
                    </div>
                    <div className="ml-6 pt-3">
                      <h3 className="text-xl font-semibold mb-2">{step.step}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-16">
              <Button asChild className="rounded-full px-6">
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LearnMore;
