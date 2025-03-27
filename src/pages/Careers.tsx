
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Careers = () => {
  return (
    <>
      <Helmet>
        <title>Careers | Aesthete</title>
        <meta name="description" content="Join our team of talented individuals passionate about minimalist design and exceptional craftsmanship." />
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <Navbar />
        
        <main className="flex-1 pt-24">
          {/* Hero Section */}
          <section className="bg-secondary">
            <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 animate-fade-in">Join Our Team</h1>
                <p className="text-muted-foreground leading-relaxed animate-fade-in [animation-delay:200ms]">
                  At Aesthete, we're building a team of passionate individuals who share our 
                  commitment to minimalist design principles and exceptional craftsmanship.
                </p>
              </div>
            </div>
          </section>
          
          {/* Why Join Us Section */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="animate-slide-up">
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Why Join Aesthete</h2>
                  <div className="space-y-6 text-muted-foreground">
                    <p>
                      At Aesthete, you'll be part of a team that values creativity, attention to detail, 
                      and a commitment to excellence. We believe in fostering a collaborative environment 
                      where innovative ideas thrive and personal growth is encouraged.
                    </p>
                    <div className="space-y-4">
                      <div className="border border-border p-4 rounded-lg">
                        <h3 className="font-medium mb-2">Growth & Development</h3>
                        <p className="text-sm">We invest in your professional growth through mentorship, training programs, and opportunities to expand your skills.</p>
                      </div>
                      <div className="border border-border p-4 rounded-lg">
                        <h3 className="font-medium mb-2">Work-Life Balance</h3>
                        <p className="text-sm">We prioritize wellbeing with flexible schedules, remote work options, and generous time-off policies.</p>
                      </div>
                      <div className="border border-border p-4 rounded-lg">
                        <h3 className="font-medium mb-2">Collaborative Culture</h3>
                        <p className="text-sm">Join a diverse team that values different perspectives and celebrates collective achievements.</p>
                      </div>
                      <div className="border border-border p-4 rounded-lg">
                        <h3 className="font-medium mb-2">Meaningful Impact</h3>
                        <p className="text-sm">Contribute to creating products and experiences that enhance how people live and work.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="animate-slide-up" style={{ animationDelay: "200ms" }}>
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" 
                    alt="Team collaboration at Aesthete" 
                    className="rounded-lg w-full h-auto shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>
          
          {/* Current Openings Section */}
          <section className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-16">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Current Openings</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Explore our current opportunities and find a role where your skills and passion can thrive.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {/* Job Opening 1 */}
                <div className="bg-background p-6 rounded-lg border border-border animate-scale-in">
                  <h3 className="text-xl font-medium mb-2">Product Designer</h3>
                  <p className="text-sm text-muted-foreground mb-4">Full-time • San Francisco or Remote</p>
                  <p className="text-muted-foreground mb-6">
                    We're looking for a product designer with a passion for minimalist aesthetics to join our creative team.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/careers/product-designer">View Details</Link>
                  </Button>
                </div>
                
                {/* Job Opening 2 */}
                <div className="bg-background p-6 rounded-lg border border-border animate-scale-in [animation-delay:100ms]">
                  <h3 className="text-xl font-medium mb-2">Customer Experience Specialist</h3>
                  <p className="text-sm text-muted-foreground mb-4">Full-time • Remote</p>
                  <p className="text-muted-foreground mb-6">
                    Join our customer support team to provide exceptional service aligned with our brand values.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/careers/customer-experience">View Details</Link>
                  </Button>
                </div>
                
                {/* Job Opening 3 */}
                <div className="bg-background p-6 rounded-lg border border-border animate-scale-in [animation-delay:200ms]">
                  <h3 className="text-xl font-medium mb-2">Content Marketing Manager</h3>
                  <p className="text-sm text-muted-foreground mb-4">Full-time • San Francisco</p>
                  <p className="text-muted-foreground mb-6">
                    Create compelling content that communicates our brand story and connects with our audience.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/careers/marketing-manager">View Details</Link>
                  </Button>
                </div>
                
                {/* Job Opening 4 */}
                <div className="bg-background p-6 rounded-lg border border-border animate-scale-in [animation-delay:300ms]">
                  <h3 className="text-xl font-medium mb-2">Supply Chain Coordinator</h3>
                  <p className="text-sm text-muted-foreground mb-4">Full-time • San Francisco</p>
                  <p className="text-muted-foreground mb-6">
                    Help manage our relationships with artisans and manufacturers to ensure product quality.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/careers/supply-chain">View Details</Link>
                  </Button>
                </div>
              </div>
              
              {/* No positions message */}
              <div className="text-center mt-12">
                <p className="text-muted-foreground mb-4">
                  Don't see a position that matches your skills?
                </p>
                <Button asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Careers;
