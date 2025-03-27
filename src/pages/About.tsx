
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
        <meta name="description" content="Learn about our story, values, and mission to bring minimalist design to everyday living." />
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
                  Founded in 2018, Aesthete was born from a passion for minimalist design and a belief that beautiful, 
                  functional objects enhance our daily lives.
                </p>
              </div>
            </div>
          </section>
          
          {/* Mission Section */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 animate-slide-up">
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Our Mission</h2>
                  <div className="space-y-6 text-muted-foreground">
                    <p>
                      At Aesthete, we believe that living spaces should be as intentional as they are beautiful. 
                      Our mission is to create and curate products that combine form and function, designed to bring 
                      harmony to modern living.
                    </p>
                    <p>
                      We draw inspiration from the principles of minimalism — not as an austere aesthetic, but as a 
                      thoughtful approach to design that celebrates quality over quantity, purpose over excess, and 
                      timelessness over trends.
                    </p>
                    <p>
                      Every item in our collection is chosen with intention, designed to endure both in construction 
                      and in style. We're committed to creating pieces that you'll cherish for years to come.
                    </p>
                  </div>
                </div>
                <div className="order-1 lg:order-2 animate-slide-up" style={{ animationDelay: "200ms" }}>
                  <img 
                    src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=1000&auto=format&fit=crop" 
                    alt="Modern minimalist interior with natural light" 
                    className="rounded-lg w-full h-auto shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>
          
          {/* Values Section */}
          <section className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Our Values</h2>
                <p className="text-muted-foreground">
                  These principles guide every decision we make, from design to delivery.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-background p-6 rounded-lg border border-border animate-fade-in">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m16 10-4 4-2-2"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-3">Quality Craftsmanship</h3>
                  <p className="text-muted-foreground">
                    We partner with skilled artisans and ethical manufacturers who share our commitment to 
                    excellence and attention to detail.
                  </p>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-border animate-fade-in [animation-delay:200ms]">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path>
                      <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path>
                      <circle cx="12" cy="12" r="2"></circle>
                      <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path>
                      <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-3">Sustainable Design</h3>
                  <p className="text-muted-foreground">
                    We believe in responsible production and consumption, prioritizing materials and processes that 
                    minimize environmental impact.
                  </p>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-border animate-fade-in [animation-delay:400ms]">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 6.1H3"></path>
                      <path d="M21 12.1H3"></path>
                      <path d="M15.1 18H3"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-3">Simplicity & Function</h3>
                  <p className="text-muted-foreground">
                    We embrace clean lines and thoughtful design that solves problems without unnecessary 
                    complexity or ornamentation.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Team Section */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Our Team</h2>
                <p className="text-muted-foreground">
                  Aesthete is a collective of designers, curators, and makers united by a shared vision for 
                  mindful living through design.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center animate-scale-in">
                  <div className="mb-4 relative mx-auto w-40 h-40 overflow-hidden rounded-full">
                    <img 
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop" 
                      alt="Emma Chen - Founder & Creative Director" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-medium">Emma Chen</h3>
                  <p className="text-sm text-muted-foreground">Founder & Creative Director</p>
                </div>
                
                <div className="text-center animate-scale-in [animation-delay:200ms]">
                  <div className="mb-4 relative mx-auto w-40 h-40 overflow-hidden rounded-full">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" 
                      alt="David Park - Head of Product Design" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-medium">David Park</h3>
                  <p className="text-sm text-muted-foreground">Head of Product Design</p>
                </div>
                
                <div className="text-center animate-scale-in [animation-delay:400ms]">
                  <div className="mb-4 relative mx-auto w-40 h-40 overflow-hidden rounded-full">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" 
                      alt="Sara Jensen - Sustainability Lead" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-medium">Sara Jensen</h3>
                  <p className="text-sm text-muted-foreground">Sustainability Lead</p>
                </div>
                
                <div className="text-center animate-scale-in [animation-delay:600ms]">
                  <div className="mb-4 relative mx-auto w-40 h-40 overflow-hidden rounded-full">
                    <img 
                      src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=200&auto=format&fit=crop" 
                      alt="Marcus Kim - Operations Director" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-medium">Marcus Kim</h3>
                  <p className="text-sm text-muted-foreground">Operations Director</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="py-16 md:py-24 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 md:px-6 text-center">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6 animate-fade-in">Join Our Journey</h2>
              <p className="max-w-2xl mx-auto mb-8 animate-fade-in [animation-delay:200ms]">
                We're always looking for talented individuals who share our passion for design and our vision for a more 
                mindful way of living. Explore opportunities to be part of our growing team.
              </p>
              <Button size="lg" variant="secondary" asChild className="animate-fade-in [animation-delay:400ms]">
                <Link to="/careers">View Careers</Link>
              </Button>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default About;
