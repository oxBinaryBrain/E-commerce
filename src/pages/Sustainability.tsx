
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Sustainability = () => {
  return (
    <>
      <Helmet>
        <title>Sustainability | Aesthete</title>
        <meta name="description" content="Learn about our commitment to environmental responsibility and sustainable practices." />
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <Navbar />
        
        <main className="flex-1 pt-24">
          {/* Hero Section */}
          <section className="bg-secondary">
            <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 animate-fade-in">Our Sustainability Commitment</h1>
                <p className="text-muted-foreground leading-relaxed animate-fade-in [animation-delay:200ms]">
                  At Aesthete, sustainability isn't just a trend—it's a core principle woven into every aspect of our business. 
                  We believe that beautiful design and environmental responsibility can and must coexist.
                </p>
              </div>
            </div>
          </section>
          
          {/* Materials Section */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 animate-slide-up">
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Responsible Materials</h2>
                  <div className="space-y-6 text-muted-foreground">
                    <p>
                      We carefully select materials that minimize environmental impact without compromising on quality or longevity. 
                      This means prioritizing:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="bg-primary text-primary-foreground rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mr-3">1</span>
                        <div>
                          <h3 className="font-medium">Renewable Resources</h3>
                          <p className="text-sm mt-1">
                            We use FSC-certified wood, organic cotton, and other materials from responsibly managed sources.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary text-primary-foreground rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mr-3">2</span>
                        <div>
                          <h3 className="font-medium">Recycled Materials</h3>
                          <p className="text-sm mt-1">
                            Many of our products incorporate recycled metals, glass, and plastics, reducing waste and resource consumption.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary text-primary-foreground rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mr-3">3</span>
                        <div>
                          <h3 className="font-medium">Non-Toxic Finishes</h3>
                          <p className="text-sm mt-1">
                            We use water-based, low-VOC finishes and dyes to ensure indoor air quality and worker safety.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary text-primary-foreground rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mr-3">4</span>
                        <div>
                          <h3 className="font-medium">Quality Over Quantity</h3>
                          <p className="text-sm mt-1">
                            By creating durable products designed to last, we reduce the need for frequent replacements and minimize waste.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="order-1 lg:order-2 animate-slide-up" style={{ animationDelay: "200ms" }}>
                  <img 
                    src="https://images.unsplash.com/photo-1607164073832-02e6e83ef1c5?q=80&w=1000&auto=format&fit=crop" 
                    alt="Sustainable materials samples" 
                    className="rounded-lg w-full h-auto shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>
          
          {/* Manufacturing Process */}
          <section className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="animate-slide-up">
                  <img 
                    src="https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?q=80&w=1000&auto=format&fit=crop" 
                    alt="Craftsperson working in a sustainable workshop" 
                    className="rounded-lg w-full h-auto shadow-lg"
                  />
                </div>
                <div className="animate-slide-up" style={{ animationDelay: "200ms" }}>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Ethical Manufacturing</h2>
                  <div className="space-y-6 text-muted-foreground">
                    <p>
                      We partner with manufacturers and artisans who share our commitment to environmental 
                      responsibility and fair labor practices. Our production processes prioritize:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="bg-primary text-primary-foreground rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mr-3">1</span>
                        <div>
                          <h3 className="font-medium">Energy Efficiency</h3>
                          <p className="text-sm mt-1">
                            Our production facilities utilize energy-efficient equipment and renewable energy sources where possible.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary text-primary-foreground rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mr-3">2</span>
                        <div>
                          <h3 className="font-medium">Water Conservation</h3>
                          <p className="text-sm mt-1">
                            We implement water recycling systems and low-water manufacturing processes.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary text-primary-foreground rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mr-3">3</span>
                        <div>
                          <h3 className="font-medium">Waste Reduction</h3>
                          <p className="text-sm mt-1">
                            We minimize waste through efficient cutting patterns, recycling production scraps, and using biodegradable packaging.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary text-primary-foreground rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mr-3">4</span>
                        <div>
                          <h3 className="font-medium">Fair Labor</h3>
                          <p className="text-sm mt-1">
                            All our partners adhere to strict labor standards, providing safe working conditions and fair compensation.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Packaging & Shipping */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6 text-center">Packaging & Shipping</h2>
                <p className="text-muted-foreground text-center mb-12">
                  We're committed to minimizing the environmental footprint of our packaging and shipping processes.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-6 border border-border rounded-lg animate-scale-in">
                    <h3 className="text-xl font-medium mb-4">Sustainable Packaging</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• 100% recyclable or biodegradable packaging materials</li>
                      <li>• Minimalist packaging design to reduce waste</li>
                      <li>• Soy-based inks for all printed materials</li>
                      <li>• No single-use plastics</li>
                    </ul>
                  </div>
                  
                  <div className="p-6 border border-border rounded-lg animate-scale-in [animation-delay:200ms]">
                    <h3 className="text-xl font-medium mb-4">Carbon-Conscious Shipping</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Carbon offset program for all shipments</li>
                      <li>• Consolidated shipping to reduce trips</li>
                      <li>• Partnership with eco-friendly carriers</li>
                      <li>• Local warehousing to minimize transit distances</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Goals & Commitments */}
          <section className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Our Ongoing Commitments</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We recognize that sustainability is a journey of continuous improvement. Here are our goals for the future:
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="bg-background p-6 rounded-lg border border-border animate-fade-in">
                  <h3 className="text-xl font-medium mb-4">2025</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>100% plastic-free packaging</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>50% reduction in carbon emissions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>75% renewable energy in all facilities</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-border animate-fade-in [animation-delay:200ms]">
                  <h3 className="text-xl font-medium mb-4">2027</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Full product lifecycle management program</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Comprehensive repair and refurbishment service</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Water-neutral manufacturing operations</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-border animate-fade-in [animation-delay:400ms]">
                  <h3 className="text-xl font-medium mb-4">2030</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Carbon-neutral across all operations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Zero waste to landfill from all facilities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>100% renewable energy throughout supply chain</span>
                    </li>
                  </ul>
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

export default Sustainability;
