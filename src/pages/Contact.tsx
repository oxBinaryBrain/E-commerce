
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "We've received your message and will get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Aesthete</title>
        <meta name="description" content="Get in touch with our team for inquiries, support, or collaboration opportunities." />
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <Navbar />
        
        <main className="flex-1 pt-24">
          {/* Hero Section */}
          <section className="bg-secondary">
            <div className="container mx-auto px-4 md:px-6 py-16">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 animate-fade-in">Get In Touch</h1>
                <p className="text-muted-foreground leading-relaxed animate-fade-in [animation-delay:200ms]">
                  We'd love to hear from you. Whether you have a question about our products, need support, 
                  or are interested in collaborating, our team is here to help.
                </p>
              </div>
            </div>
          </section>
          
          {/* Contact Form & Info */}
          <section className="py-16">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="animate-slide-up">
                  <h2 className="text-2xl font-bold tracking-tight mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          required
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="How can we help you?"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                        required
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </div>
                
                {/* Contact Info */}
                <div className="space-y-8 animate-slide-up [animation-delay:200ms]">
                  <h2 className="text-2xl font-bold tracking-tight mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium">Our Location</h3>
                        <address className="not-italic text-muted-foreground mt-1">
                          123 Design Avenue<br />
                          San Francisco, CA 94107<br />
                          United States
                        </address>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                        <Phone size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <div className="text-muted-foreground mt-1">
                          <p>Customer Service: <a href="tel:+18005551234" className="hover:text-primary">+1 (800) 555-1234</a></p>
                          <p>General Inquiries: <a href="tel:+14155559876" className="hover:text-primary">+1 (415) 555-9876</a></p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                        <Mail size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <div className="text-muted-foreground mt-1">
                          <p>Customer Support: <a href="mailto:support@aesthete.com" className="hover:text-primary">support@aesthete.com</a></p>
                          <p>Press Inquiries: <a href="mailto:press@aesthete.com" className="hover:text-primary">press@aesthete.com</a></p>
                          <p>Wholesale: <a href="mailto:wholesale@aesthete.com" className="hover:text-primary">wholesale@aesthete.com</a></p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                        <Clock size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium">Hours</h3>
                        <div className="text-muted-foreground mt-1">
                          <p>Monday - Friday: 9:00 AM - 6:00 PM PT</p>
                          <p>Saturday: 10:00 AM - 4:00 PM PT</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Map or Image */}
                  <div className="mt-8 rounded-lg overflow-hidden border border-border h-[300px] w-full">
                    <img 
                      src="https://images.unsplash.com/photo-1577543539197-d7c701048d63?q=80&w=1000&auto=format&fit=crop" 
                      alt="Map of Aesthete office location in San Francisco" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* FAQ Section */}
          <section className="py-16 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold tracking-tight mb-8 text-center">Frequently Asked Questions</h2>
                
                <div className="space-y-6">
                  <div className="bg-background rounded-lg p-6 animate-fade-in">
                    <h3 className="text-lg font-medium mb-2">What is your return policy?</h3>
                    <p className="text-muted-foreground">
                      We offer a 30-day return policy for most items. Products must be in their original 
                      condition with tags attached. Please visit our <a href="/shipping" className="text-primary hover:underline">Shipping & Returns</a> page for full details.
                    </p>
                  </div>
                  
                  <div className="bg-background rounded-lg p-6 animate-fade-in [animation-delay:200ms]">
                    <h3 className="text-lg font-medium mb-2">How long does shipping take?</h3>
                    <p className="text-muted-foreground">
                      Standard shipping typically takes 3-7 business days within the continental US. 
                      International shipping times vary by location, generally 7-14 business days.
                    </p>
                  </div>
                  
                  <div className="bg-background rounded-lg p-6 animate-fade-in [animation-delay:400ms]">
                    <h3 className="text-lg font-medium mb-2">Do you offer wholesale opportunities?</h3>
                    <p className="text-muted-foreground">
                      Yes, we partner with select retailers who share our aesthetic and values. 
                      Please contact our wholesale team at <a href="mailto:wholesale@aesthete.com" className="text-primary hover:underline">wholesale@aesthete.com</a> for more information.
                    </p>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <Button variant="outline" asChild>
                    <a href="/faq">View All FAQs</a>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Contact;
