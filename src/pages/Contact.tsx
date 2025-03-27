
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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
        title: "Message sent",
        description: "We'll get back to you as soon as possible.",
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
        <meta name="description" content="Get in touch with our team for inquiries, customer support, or partnership opportunities." />
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <Navbar />
        
        <main className="flex-1 pt-24">
          {/* Hero Section */}
          <section className="bg-secondary">
            <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 animate-fade-in">Get in Touch</h1>
                <p className="text-muted-foreground leading-relaxed animate-fade-in [animation-delay:200ms]">
                  We'd love to hear from you. Whether you have a question about our products, 
                  need assistance with an order, or want to explore partnership opportunities, 
                  our team is here to help.
                </p>
              </div>
            </div>
          </section>
          
          {/* Contact Information & Form Section */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="space-y-8 animate-slide-up">
                  <h2 className="text-2xl font-bold tracking-tight mb-6">Contact Information</h2>
                  
                  {/* Contact Cards */}
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4 p-6 rounded-lg border border-border">
                      <Mail className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-1">Email Us</h3>
                        <p className="text-muted-foreground mb-2">For general inquiries and customer support:</p>
                        <a href="mailto:hello@aesthete.com" className="text-primary hover:underline">hello@aesthete.com</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 p-6 rounded-lg border border-border">
                      <Phone className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-1">Call Us</h3>
                        <p className="text-muted-foreground mb-2">Monday to Friday, 9am to 5pm (PST):</p>
                        <a href="tel:+18005551234" className="text-primary hover:underline">+1 (800) 555-1234</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 p-6 rounded-lg border border-border">
                      <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-1">Visit Us</h3>
                        <p className="text-muted-foreground mb-2">Our flagship showroom:</p>
                        <address className="not-italic text-primary">
                          123 Design District<br />
                          San Francisco, CA 94103<br />
                          United States
                        </address>
                      </div>
                    </div>
                  </div>
                  
                  {/* Business Hours */}
                  <div className="pt-6 border-t border-border">
                    <h3 className="font-medium mb-3">Business Hours</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span>9:00 AM - 5:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Saturday</span>
                        <span>10:00 AM - 4:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Contact Form */}
                <div className="animate-slide-up" style={{ animationDelay: "200ms" }}>
                  <h2 className="text-2xl font-bold tracking-tight mb-6">Send a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="Your email address"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-2">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="What is your message about?"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder="Your message..."
                          rows={6}
                        />
                      </div>
                      
                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                      
                      <p className="text-xs text-muted-foreground text-center">
                        By submitting this form, you agree to our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          
          {/* Map Section */}
          <section className="py-8 md:py-16 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg animate-fade-in">
                <iframe
                  title="Aesthete Store Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.77218878676!2d-122.43825211378747!3d37.76407044367796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1697583377554!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
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
