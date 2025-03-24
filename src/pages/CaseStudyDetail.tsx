
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Case Study type
interface CaseStudy {
  id: number;
  title: string;
  client: string;
  industry: string;
  duration: string;
  overview: string;
  challenge: string;
  approach: string;
  solution: string;
  results: {
    summary: string;
    stats: { label: string; value: string; increase: string }[];
  };
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  images: {
    main: string;
    gallery: string[];
  };
}

// Detailed case studies data
const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    title: "Revitalizing Instagram Presence for Local Coffee Shop",
    client: "Urban Brew Coffee",
    industry: "Food & Beverage",
    duration: "6 months",
    overview: "Urban Brew Coffee, a beloved local coffee shop, faced challenges in translating their exceptional in-store experience to their digital presence. Despite having quality products and a loyal customer base, their Instagram account showed minimal growth and engagement. The client sought to revitalize their social media strategy to attract new customers and better connect with their existing community.",
    challenge: "Urban Brew Coffee had a stagnant Instagram account with inconsistent posting, low-quality visuals, and minimal engagement. Their follower count had plateaued at around 850 for several months, and posts typically received only 30-40 likes and few comments. The client wanted to use Instagram to showcase their unique atmosphere and artisanal approach, but lacked the visual strategy and content planning to effectively communicate their brand story.",
    approach: "After a comprehensive audit of their existing content and audience, I developed a cohesive visual identity and content strategy for Urban Brew's Instagram presence. The approach focused on three key areas: consistent aesthetic that highlighted the coffee craftsmanship, engaging storytelling that featured staff and regular customers, and community-building content that encouraged user participation and sharing.",
    solution: "I implemented a complete Instagram overhaul, including:\n\n- Redesigned Instagram grid with a cohesive color palette reflecting the warm, artisanal nature of the coffee shop\n- Weekly content calendar featuring a mix of product highlights, behind-the-scenes content, and customer spotlights\n- Series of Instagram Reels showcasing barista techniques and coffee preparation processes\n- User-generated content strategy encouraging customers to share their experiences\n- Local partnerships and takeovers with complementary businesses\n- Engagement tactics including questions, polls, and interactive stories\n- Hashtag strategy targeting local and coffee enthusiast communities",
    results: {
      summary: "The new Instagram strategy transformed Urban Brew's digital presence and directly impacted their business growth.",
      stats: [
        { label: "Follower Growth", value: "345%", increase: "in 6 months" },
        { label: "Engagement Rate", value: "5.2%", increase: "from 0.8%" },
        { label: "Store Visits", value: "32%", increase: "increase" },
        { label: "Content Reach", value: "10x", increase: "improvement" }
      ]
    },
    testimonial: {
      quote: "The transformation of our Instagram account has been nothing short of amazing. We've seen real business results from our improved social media presence, with new customers mentioning our Instagram content daily when they visit. The strategy was exactly what we needed to showcase what makes Urban Brew special.",
      author: "Maya Rodriguez",
      position: "Owner, Urban Brew Coffee"
    },
    images: {
      main: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80",
        "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80",
        "https://images.unsplash.com/photo-1493857671505-72967e2e2760?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80",
        "https://images.unsplash.com/photo-1481833761820-0509d3217039?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80"
      ]
    }
  },
  {
    id: 2,
    title: "TikTok Launch Strategy for Fitness Brand",
    client: "FlexFit Equipment",
    industry: "Fitness & Wellness",
    duration: "3 months",
    overview: "FlexFit Equipment, a growing fitness equipment brand, wanted to expand their digital presence to reach younger demographics through TikTok. Despite having established channels on Instagram and YouTube, they had no presence on TikTok and were unsure how to translate their brand for this unique platform. They needed a launch strategy that would quickly establish their presence and showcase their products in an engaging way.",
    challenge: "FlexFit faced several challenges in launching on TikTok: lack of platform-specific expertise, uncertainty about content formats that would resonate with the TikTok audience, limited understanding of TikTok trends and algorithm, and a need to showcase product functionality in short-form videos. Additionally, they needed to differentiate from the saturated fitness content landscape on the platform.",
    approach: "I developed a TikTok launch strategy centered on product education, fitness motivation, and trend participation. The approach prioritized authentic, raw content over highly polished production, focusing on demonstrating the practical applications and benefits of FlexFit's equipment in creative ways. A key component was identifying and collaborating with fitness influencers already established on the platform to extend reach and credibility.",
    solution: "The TikTok launch strategy included:\n\n- Three-month content calendar with daily posting schedule\n- Educational content series showcasing proper equipment use and benefits\n- \"60-Second Workouts\" format demonstrating quick, effective routines using FlexFit products\n- Weekly participation in trending challenges, adapted to incorporate fitness themes\n- Influencer collaboration campaign with five fitness creators\n- Duet and Stitch engagement strategy to build community\n- Original audio creation for brand recognition\n- Analytics tracking to quickly identify high-performing content formats",
    results: {
      summary: "The TikTok launch exceeded all expectations, establishing FlexFit as a fitness authority on the platform in just three months.",
      stats: [
        { label: "Followers", value: "50K+", increase: "in 3 months" },
        { label: "Views", value: "3.2M", increase: "total" },
        { label: "Conversion Rate", value: "2.8%", increase: "from TikTok traffic" },
        { label: "Sales Attributed", value: "15%", increase: "to TikTok" }
      ]
    },
    testimonial: {
      quote: "Our TikTok launch completely exceeded our expectations. Not only did we build a substantial following quickly, but we've seen tangible sales results directly attributable to our TikTok content. The strategy perfectly balanced showcasing our products with creating genuinely entertaining content that resonates with the platform's audience.",
      author: "Chris Donovan",
      position: "Marketing Director, FlexFit Equipment"
    },
    images: {
      main: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80",
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80",
        "https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80",
        "https://images.unsplash.com/photo-1487956382158-bb926046304a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80"
      ]
    }
  },
  {
    id: 3,
    title: "YouTube Content Strategy for Travel Company",
    client: "Wanderlust Tours",
    industry: "Travel & Tourism",
    duration: "8 months",
    overview: "Wanderlust Tours, a boutique travel company specializing in immersive cultural experiences, sought to expand their digital marketing efforts through YouTube. While they had occasional travel videos, they lacked a cohesive YouTube strategy to showcase their unique tour offerings. They needed a content approach that would distinguish them from mainstream travel content and directly connect to their booking goals.",
    challenge: "Wanderlust Tours faced challenges with inconsistent YouTube content that failed to convert viewers to customers. Their existing videos had low watch time, minimal subscriber growth, and didn't effectively communicate their unique value proposition. They needed to transform their YouTube channel from an afterthought into a primary marketing asset that could drive bookings while authentically representing their travel philosophy.",
    approach: "I developed a destination-focused YouTube strategy that emphasized authentic cultural experiences, practical travel information, and the unique perspective Wanderlust Tours offers. The approach centered on creating high-quality, searchable content that would serve both inspirational and practical purposes for potential travelers, with clear pathways to booking information.",
    solution: "The YouTube content strategy included:\n\n- Complete channel redesign with optimized branding and playlists\n- 12-part destination guide series focusing on Wanderlust's primary tour locations\n- \"Local Perspective\" interview series featuring guides and local partners\n- \"Before You Go\" practical travel advice series addressing common questions\n- Consistent posting schedule with SEO-optimized titles and descriptions\n- Custom thumbnail design system for strong visual identity\n- Strategic use of cards and end screens to guide viewers to booking pages\n- Cross-promotion strategy with blog content and social platforms",
    results: {
      summary: "The YouTube strategy transformed Wanderlust's channel into a major booking driver while establishing them as a trusted travel resource.",
      stats: [
        { label: "Subscribers", value: "87K", increase: "in 8 months" },
        { label: "Watch Time", value: "450K", increase: "hours" },
        { label: "Booking Increase", value: "68%", increase: "year-over-year" },
        { label: "SEO Traffic", value: "125%", increase: "growth" }
      ]
    },
    testimonial: {
      quote: "Our YouTube channel has become our most effective marketing tool, bringing us clients who already feel connected to our travel philosophy before they even book. The strategy perfectly captures what makes our tours special while providing genuine value to viewers whether they book with us or not. The direct impact on our bookings has been remarkable.",
      author: "Elena Kim",
      position: "CEO, Wanderlust Tours"
    },
    images: {
      main: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80",
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80",
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80",
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80"
      ]
    }
  }
];

const CaseStudyDetail = () => {
  const { caseId } = useParams<{ caseId: string }>();
  const caseStudy = CASE_STUDIES.find(c => c.id === Number(caseId));

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add("antialiased");
    
    return () => {
      document.body.classList.remove("antialiased");
    };
  }, []);

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Case study not found</h1>
            <Button asChild className="rounded-full">
              <Link to="/#case-studies">Return to Case Studies</Link>
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
                <Link to="/#case-studies">
                  <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                  Back to Case Studies
                </Link>
              </Button>
              
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                  {caseStudy.industry}
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                  {caseStudy.duration}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{caseStudy.title}</h1>
              <p className="text-lg text-muted-foreground max-w-2xl">{caseStudy.overview}</p>
            </div>
          </div>
        </section>
        
        {/* Main Image */}
        <div className="bg-secondary/30 pb-16">
          <div className="container-width px-6">
            <div className="rounded-xl overflow-hidden aspect-video shadow-md">
              <img 
                src={caseStudy.images.main} 
                alt={caseStudy.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Client & Project Info */}
        <section className="bg-background">
          <div className="container-width section-spacing">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1">
                <h2 className="text-xl font-semibold mb-4">Client</h2>
                <p className="text-muted-foreground">{caseStudy.client}</p>
              </div>
              <div className="col-span-2">
                <h2 className="text-xl font-semibold mb-4">The Challenge</h2>
                <p className="text-muted-foreground">{caseStudy.challenge}</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Approach & Solution */}
        <section className="bg-secondary/30">
          <div className="container-width section-spacing">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Approach</h2>
                <p className="text-muted-foreground mb-8">{caseStudy.approach}</p>
                
                <h2 className="text-2xl font-semibold mb-6">Solution</h2>
                <div className="prose text-muted-foreground max-w-none">
                  {caseStudy.solution.split('\n\n').map((paragraph, index) => {
                    if (paragraph.includes('- ')) {
                      const [intro, ...items] = paragraph.split('- ');
                      return (
                        <div key={index} className="mb-6">
                          {intro && <p>{intro}</p>}
                          <ul className="mt-4 space-y-2">
                            {items.map((item, i) => (
                              <li key={i} className="flex items-start">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    }
                    return <p key={index} className="mb-4">{paragraph}</p>;
                  })}
                </div>
              </div>
              
              <div className="space-y-6">
                {caseStudy.images.gallery.map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow-sm">
                    <img 
                      src={image} 
                      alt={`${caseStudy.client} project image ${index + 1}`}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Results */}
        <section className="bg-background">
          <div className="container-width section-spacing">
            <div className="mb-12 text-center">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-xs font-medium tracking-wide mb-4">
                RESULTS
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                The Impact
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{caseStudy.results.summary}</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {caseStudy.results.stats.map((stat, index) => (
                <div key={index} className="bg-card rounded-lg p-6 border border-border/50 shadow-sm text-center">
                  <p className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-xs text-green-600 dark:text-green-400">↑ {stat.increase}</p>
                </div>
              ))}
            </div>
            
            {caseStudy.testimonial && (
              <div className="bg-primary/5 rounded-xl p-8 md:p-10 border border-primary/10 max-w-3xl mx-auto">
                <blockquote className="text-lg italic mb-6">"{caseStudy.testimonial.quote}"</blockquote>
                <div>
                  <p className="font-medium">{caseStudy.testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{caseStudy.testimonial.position}</p>
                </div>
              </div>
            )}
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-secondary/30">
          <div className="container-width section-spacing text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's discuss how a tailored content strategy can help your brand achieve similar results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="rounded-full px-6">
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-6 group">
                <Link to="/#case-studies">
                  View More Case Studies
                  <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
