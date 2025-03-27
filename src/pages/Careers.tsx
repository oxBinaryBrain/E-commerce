
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

const Careers = () => {
  return (
    <>
      <Helmet>
        <title>Careers | Aesthete</title>
        <meta name="description" content="Join our team of passionate designers and creators. Explore current job openings and opportunities at Aesthete." />
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
                  We're looking for passionate individuals who share our vision for thoughtful design and sustainable living.
                </p>
              </div>
            </div>
          </section>
          
          {/* Culture Section */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="animate-slide-up">
                  <img 
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1000&auto=format&fit=crop" 
                    alt="Team members collaborating in a bright, modern workspace" 
                    className="rounded-lg w-full h-auto shadow-lg"
                  />
                </div>
                <div className="animate-slide-up [animation-delay:200ms]">
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Our Culture</h2>
                  <div className="space-y-6 text-muted-foreground">
                    <p>
                      At Aesthete, we believe that great design emerges from collaborative, creative environments 
                      where diverse perspectives are valued and innovative thinking is encouraged.
                    </p>
                    <p>
                      We're a team of designers, makers, writers, and strategists who are passionate about creating 
                      products that enhance everyday living through thoughtful design and sustainable practices.
                    </p>
                    <p>
                      Our values of simplicity, quality, and sustainability aren't just reflected in our products—they 
                      inform how we work together, the decisions we make, and the company culture we're building.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Benefits Section */}
          <section className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-16">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Benefits & Perks</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We believe in taking care of our team with comprehensive benefits and a supportive work environment.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-background p-6 rounded-lg border border-border animate-fade-in">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7H2Z"></path>
                      <path d="M6 11c0-1.7 1.3-3 3-3h0"></path>
                      <path d="M15 11c0-1.7 1.3-3 3-3h0"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-3">Health & Wellness</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Comprehensive medical, dental, and vision insurance</li>
                    <li>Mental health resources and support</li>
                    <li>Wellness stipend for fitness and mindfulness</li>
                    <li>Ergonomic workspace equipment</li>
                  </ul>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-border animate-fade-in [animation-delay:200ms]">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m7 11 2-2-2-2"></path>
                      <path d="M11 13h4"></path>
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-3">Flexible Work</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Hybrid remote and in-office work options</li>
                    <li>Flexible working hours</li>
                    <li>Generous paid time off policy</li>
                    <li>Paid sabbaticals after 3 years</li>
                  </ul>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-border animate-fade-in [animation-delay:400ms]">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20h9"></path>
                      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-3">Growth & Development</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Professional development budget</li>
                    <li>Mentorship opportunities</li>
                    <li>Regular workshops and learning sessions</li>
                    <li>Conference and education stipends</li>
                  </ul>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-border animate-fade-in [animation-delay:600ms]">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10H3"></path>
                      <path d="M21 6H3"></path>
                      <path d="M21 14H3"></path>
                      <path d="M21 18H3"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-3">Financial Benefits</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Competitive salaries</li>
                    <li>401(k) matching program</li>
                    <li>Profit-sharing opportunities</li>
                    <li>Employee discount on all products</li>
                  </ul>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-border animate-fade-in [animation-delay:800ms]">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 7V5a2 2 0 0 1 2-2h2"></path>
                      <path d="M17 3h2a2 2 0 0 1 2 2v2"></path>
                      <path d="M21 17v2a2 2 0 0 1-2 2h-2"></path>
                      <path d="M7 21H5a2 2 0 0 1-2-2v-2"></path>
                      <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                      <path d="M9 9h.01"></path>
                      <path d="M15 9h.01"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-3">Community & Fun</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Team retreats and outings</li>
                    <li>Design field trips and inspiration days</li>
                    <li>Volunteer opportunities</li>
                    <li>Weekly team lunches and social events</li>
                  </ul>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-border animate-fade-in [animation-delay:1000ms]">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 7h-9"></path>
                      <path d="M14 17H5"></path>
                      <circle cx="17" cy="17" r="3"></circle>
                      <circle cx="7" cy="7" r="3"></circle>
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-3">Work/Life Balance</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Parental leave for all parents</li>
                    <li>Holiday and birthday time off</li>
                    <li>"Focus Fridays" for distraction-free work</li>
                    <li>Summer hours program</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
          {/* Open Positions */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-16">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Open Positions</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We're always looking for talented individuals to join our team. 
                  Browse our current openings or send us your resume for future opportunities.
                </p>
              </div>
              
              <div className="max-w-4xl mx-auto space-y-6">
                <div className="border border-border rounded-lg p-6 hover:border-primary transition-colors animate-fade-in">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-medium">Senior Product Designer</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="text-xs px-2 py-1 bg-secondary rounded-full">Full-time</span>
                        <span className="text-xs px-2 py-1 bg-secondary rounded-full">San Francisco or Remote</span>
                      </div>
                    </div>
                    <Button size="sm">Apply Now</Button>
                  </div>
                  <p className="text-muted-foreground mt-4">
                    We're seeking an experienced product designer to lead the conceptualization and development 
                    of new product lines, balancing aesthetic vision with functional requirements.
                  </p>
                </div>
                
                <div className="border border-border rounded-lg p-6 hover:border-primary transition-colors animate-fade-in [animation-delay:200ms]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-medium">Marketing Coordinator</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="text-xs px-2 py-1 bg-secondary rounded-full">Full-time</span>
                        <span className="text-xs px-2 py-1 bg-secondary rounded-full">San Francisco</span>
                      </div>
                    </div>
                    <Button size="sm">Apply Now</Button>
                  </div>
                  <p className="text-muted-foreground mt-4">
                    Join our marketing team to help tell the story of our brand and products through 
                    compelling content, social media, and marketing campaigns.
                  </p>
                </div>
                
                <div className="border border-border rounded-lg p-6 hover:border-primary transition-colors animate-fade-in [animation-delay:400ms]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-medium">Sustainability Director</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="text-xs px-2 py-1 bg-secondary rounded-full">Full-time</span>
                        <span className="text-xs px-2 py-1 bg-secondary rounded-full">San Francisco or Remote</span>
                      </div>
                    </div>
                    <Button size="sm">Apply Now</Button>
                  </div>
                  <p className="text-muted-foreground mt-4">
                    Lead our sustainability initiatives, developing and implementing strategies to 
                    reduce our environmental footprint across all aspects of our business.
                  </p>
                </div>
                
                <div className="border border-border rounded-lg p-6 hover:border-primary transition-colors animate-fade-in [animation-delay:600ms]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-medium">Customer Experience Specialist</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="text-xs px-2 py-1 bg-secondary rounded-full">Full-time</span>
                        <span className="text-xs px-2 py-1 bg-secondary rounded-full">Remote</span>
                      </div>
                    </div>
                    <Button size="sm">Apply Now</Button>
                  </div>
                  <p className="text-muted-foreground mt-4">
                    Provide exceptional support to our customers, ensuring their experience with 
                    our products and services exceeds expectations.
                  </p>
                </div>
              </div>
              
              <div className="text-center mt-16">
                <h3 className="text-xl font-medium mb-4">Don't see the right fit?</h3>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  We're always interested in connecting with talented individuals who are passionate about 
                  design, sustainability, and creating exceptional customer experiences.
                </p>
                <Button variant="outline" size="lg">
                  Submit General Application
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
