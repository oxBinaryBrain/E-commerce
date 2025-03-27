
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Aesthete</title>
        <meta name="description" content="Learn about our story, vision and mission. Discover the values that drive our dedication to minimalist craftsmanship." />
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <Navbar />
        
        <main className="flex-1 pt-24">
          {/* Hero Section */}
          <section className="bg-secondary">
            <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 animate-fade-in">Our Story</h1>
                <p className="text-muted-foreground leading-relaxed animate-fade-in [animation-delay:200ms]">
                  Founded in 2018, Aesthete was born from a passion for minimalist design 
                  and a belief that surroundings deeply influence our wellbeing. We curate products that combine
                  form and function, creating spaces that inspire tranquility and purpose.
                </p>
              </div>
            </div>
          </section>
          
          {/* Mission & Values Section */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 animate-slide-up">
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Our Mission & Values</h2>
                  <div className="space-y-6 text-muted-foreground">
                    <p>
                      At Aesthete, we believe that thoughtfully designed spaces foster creativity, 
                      productivity, and peace of mind. Our mission is to provide curated, minimalist 
                      products that stand the test of time in both durability and design.
                    </p>
                    <p>
                      Our values guide everything we do:
                    </p>
                    <ul className="space-y-2 list-disc pl-5">
                      <li><strong>Quality:</strong> We partner with skilled artisans and manufacturers who share our commitment to excellence.</li>
                      <li><strong>Sustainability:</strong> We prioritize materials and processes that minimize environmental impact.</li>
                      <li><strong>Simplicity:</strong> We believe in the power of "less but better," focusing on pieces that serve a purpose.</li>
                      <li><strong>Authenticity:</strong> We value transparency in our business practices and relationships.</li>
                    </ul>
                  </div>
                </div>
                <div className="order-1 lg:order-2 animate-slide-up" style={{ animationDelay: "200ms" }}>
                  <img 
                    src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop" 
                    alt="Minimalist workspace with natural materials" 
                    className="rounded-lg w-full h-auto shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>
          
          {/* Team Section */}
          <section className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-16">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Our Leadership Team</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Meet the passionate individuals who guide Aesthete's mission and vision.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Team Member 1 */}
                <div className="text-center animate-scale-in">
                  <div className="mb-4 overflow-hidden rounded-full w-32 h-32 mx-auto">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop" 
                      alt="Sarah Chen, Founder & Creative Director" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-medium mb-1">Sarah Chen</h3>
                  <p className="text-muted-foreground mb-3">Founder & Creative Director</p>
                  <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                    With a background in architectural design, Sarah leads our product curation and brand vision.
                  </p>
                </div>
                
                {/* Team Member 2 */}
                <div className="text-center animate-scale-in [animation-delay:200ms]">
                  <div className="mb-4 overflow-hidden rounded-full w-32 h-32 mx-auto">
                    <img 
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop" 
                      alt="David Park, Operations Director" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-medium mb-1">David Park</h3>
                  <p className="text-muted-foreground mb-3">Operations Director</p>
                  <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                    David ensures all aspects of our business run smoothly, from supply chain to customer experience.
                  </p>
                </div>
                
                {/* Team Member 3 */}
                <div className="text-center animate-scale-in [animation-delay:400ms]">
                  <div className="mb-4 overflow-hidden rounded-full w-32 h-32 mx-auto">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" 
                      alt="Elena Moreno, Sustainability Manager" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-medium mb-1">Elena Moreno</h3>
                  <p className="text-muted-foreground mb-3">Sustainability Manager</p>
                  <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                    Elena leads our initiatives to minimize environmental impact and develop sustainable practices.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Join Us CTA */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
              <div className="text-center animate-fade-in">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Join Our Journey</h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  We're always looking for talented individuals who share our passion for minimalist design 
                  and exceptional craftsmanship. Explore career opportunities or connect with us on social media.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild>
                    <Link to="/careers">View Careers</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/contact">Contact Us</Link>
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

export default About;
