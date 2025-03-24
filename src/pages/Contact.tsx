
import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Success message
      toast({
        title: "Message sent successfully",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <PageLayout>
      <section className="relative overflow-hidden">
        {/* Background styling */}
        <div className="absolute inset-0 bg-secondary/30 -z-10"></div>
        
        <div className="container-width section-spacing">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-xs font-medium tracking-wide mb-4 animate-fade-in">
              CONTACT ME
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in" style={{ animationDelay: "100ms" }}>
              Let's Create Something Amazing!
            </h1>
            <p className="text-muted-foreground animate-fade-in" style={{ animationDelay: "200ms" }}>
              Ready to elevate your social media presence? Get in touch to discuss your project or any questions you might have.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
            {/* Contact info */}
            <div className="space-y-8 lg:pr-6 order-2 lg:order-1">
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Feel free to reach out through any of these channels. I typically respond within 24 hours.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 text-primary">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:hello@example.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        hello@example.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 text-primary">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+1234567890" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        (123) 456-7890
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 text-primary">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">
                        San Francisco, California
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* FAQ */}
              <div className="bg-card rounded-xl p-6 border border-border/50 shadow-sm animate-fade-in" style={{ animationDelay: "300ms" }}>
                <h3 className="font-bold text-lg mb-4">Frequently Asked Questions</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-sm mb-1">What are your rates?</p>
                    <p className="text-xs text-muted-foreground">
                      Rates vary depending on project scope, platforms, and timeline. Contact me for a custom quote.
                    </p>
                  </div>
                  
                  <div>
                    <p className="font-medium text-sm mb-1">How quickly can we start?</p>
                    <p className="text-xs text-muted-foreground">
                      Typically, I can start new projects within 1-2 weeks of contract signing.
                    </p>
                  </div>
                  
                  <div>
                    <p className="font-medium text-sm mb-1">Do you offer ongoing management?</p>
                    <p className="text-xs text-muted-foreground">
                      Yes, I offer both project-based work and ongoing content creation/management services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact form */}
            <div className="lg:col-span-2 order-1 lg:order-2 animate-fade-in-right">
              <div className="bg-card rounded-xl p-6 md:p-8 border border-border/50 shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name <span className="text-primary">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="rounded-lg border-input"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Your Email <span className="text-primary">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="rounded-lg border-input"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject <span className="text-primary">*</span>
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project Inquiry"
                      className="rounded-lg border-input"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message <span className="text-primary">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your project..."
                      className="rounded-lg border-input min-h-[150px]"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full rounded-full py-6" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Message...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send size={16} className="mr-2" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
          
          {/* Map or image */}
          <div className="rounded-xl overflow-hidden h-[300px] md:h-[400px] animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1506102383123-c8ef1e872756?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Map" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
