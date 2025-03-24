
import React from "react";

// Testimonial type
interface Testimonial {
  id: number;
  text: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    text: "Working with this social media expert completely transformed our brand's online presence. The strategic approach to content creation resulted in engagement we hadn't seen before.",
    author: "Sarah Johnson",
    position: "Marketing Director",
    company: "Urban Brew Coffee",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    id: 2,
    text: "The content strategy developed for our TikTok launch exceeded all expectations. We not only gained followers quickly but saw real conversion to sales from social traffic.",
    author: "Michael Chen",
    position: "CEO",
    company: "FlexFit Equipment",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    id: 3,
    text: "Our YouTube channel went from an afterthought to our primary booking driver in less than a year. The quality of content and strategic publishing schedule made all the difference.",
    author: "Emma Rodriguez",
    position: "Founder",
    company: "Wanderlust Tours",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80"
  }
];

const Testimonials = () => {
  return (
    <section className="bg-background">
      <div className="container-width section-spacing">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-xs font-medium tracking-wide mb-4">
            TESTIMONIALS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Clients Say
          </h2>
          <p className="text-muted-foreground">
            Don't just take my word for it. Here's what clients have to say about working with me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ 
  testimonial, 
  index 
}: { 
  testimonial: Testimonial;
  index: number;
}) => {
  return (
    <div 
      className="bg-card rounded-xl p-6 border border-border/50 shadow-sm relative animate-fade-in"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Quote mark */}
      <div className="absolute -top-4 -left-2 text-6xl text-primary/10 font-serif">
        "
      </div>
      
      <div className="pt-4">
        <p className="text-muted-foreground mb-6 relative z-10">
          "{testimonial.text}"
        </p>
        
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-primary/10">
            <img 
              src={testimonial.image} 
              alt={testimonial.author}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <h4 className="font-semibold">{testimonial.author}</h4>
            <p className="text-xs text-muted-foreground">
              {testimonial.position}, {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
