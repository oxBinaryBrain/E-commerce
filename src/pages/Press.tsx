
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowDownToLine, ExternalLink } from 'lucide-react';

const Press = () => {
  return (
    <>
      <Helmet>
        <title>Press | Aesthete</title>
        <meta name="description" content="Press releases, media coverage, and brand assets for Aesthete." />
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <Navbar />
        
        <main className="flex-1 pt-24">
          {/* Hero Section */}
          <section className="bg-secondary">
            <div className="container mx-auto px-4 md:px-6 py-16">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 animate-fade-in">Press & Media</h1>
                <p className="text-muted-foreground leading-relaxed animate-fade-in [animation-delay:200ms]">
                  Resources and information for journalists, bloggers, and media professionals.
                  For press inquiries, please contact <a href="mailto:press@aesthete.com" className="text-primary hover:underline">press@aesthete.com</a>.
                </p>
              </div>
            </div>
          </section>
          
          {/* Press Releases */}
          <section className="py-16">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold tracking-tight mb-8">Recent Press Releases</h2>
              
              <div className="space-y-6">
                <div className="border border-border rounded-lg p-6 hover:border-primary transition-colors animate-fade-in">
                  <div className="flex flex-col sm:flex-row gap-4 justify-between">
                    <div>
                      <span className="text-xs text-muted-foreground">August 12, 2023</span>
                      <h3 className="text-lg font-medium mt-1">Aesthete Announces Fall/Winter Collection Focused on Sustainable Materials</h3>
                      <p className="text-muted-foreground mt-2">
                        The new collection features pieces crafted from responsibly sourced materials, 
                        highlighting our commitment to environmental sustainability.
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <ArrowDownToLine size={16} />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="border border-border rounded-lg p-6 hover:border-primary transition-colors animate-fade-in [animation-delay:200ms]">
                  <div className="flex flex-col sm:flex-row gap-4 justify-between">
                    <div>
                      <span className="text-xs text-muted-foreground">June 5, 2023</span>
                      <h3 className="text-lg font-medium mt-1">Aesthete Opens New Flagship Store in SoHo</h3>
                      <p className="text-muted-foreground mt-2">
                        Our first East Coast location showcases the full Aesthete collection in an 
                        immersive retail environment designed by award-winning architect Maya Lin.
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <ArrowDownToLine size={16} />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="border border-border rounded-lg p-6 hover:border-primary transition-colors animate-fade-in [animation-delay:400ms]">
                  <div className="flex flex-col sm:flex-row gap-4 justify-between">
                    <div>
                      <span className="text-xs text-muted-foreground">March 22, 2023</span>
                      <h3 className="text-lg font-medium mt-1">Aesthete Receives B Corp Certification</h3>
                      <p className="text-muted-foreground mt-2">
                        We're proud to announce our certification as a B Corporation, recognizing our 
                        commitment to social and environmental performance, transparency, and accountability.
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <ArrowDownToLine size={16} />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Button variant="outline">View All Press Releases</Button>
              </div>
            </div>
          </section>
          
          {/* Media Coverage */}
          <section className="py-16 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold tracking-tight mb-8">Media Coverage</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-background border border-border rounded-lg overflow-hidden animate-scale-in">
                  <img 
                    src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=400&auto=format&fit=crop" 
                    alt="Magazine cover featuring Aesthete products" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-medium mb-2">"The Future of Sustainable Design"</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Architectural Digest explores how Aesthete is redefining minimalism through 
                      sustainable materials and ethical manufacturing.
                    </p>
                    <a href="#" className="text-primary hover:underline text-sm flex items-center">
                      Read Article <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
                
                <div className="bg-background border border-border rounded-lg overflow-hidden animate-scale-in [animation-delay:200ms]">
                  <img 
                    src="https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?q=80&w=400&auto=format&fit=crop" 
                    alt="Newspaper featuring Aesthete products" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-medium mb-2">"How Aesthete is Changing Home Decor"</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      The New York Times highlights Aesthete's innovative approach to creating 
                      timeless pieces for the modern home.
                    </p>
                    <a href="#" className="text-primary hover:underline text-sm flex items-center">
                      Read Article <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
                
                <div className="bg-background border border-border rounded-lg overflow-hidden animate-scale-in [animation-delay:400ms]">
                  <img 
                    src="https://images.unsplash.com/photo-1551817958-c5b51e7b4a33?q=80&w=400&auto=format&fit=crop" 
                    alt="Design magazine featuring Aesthete products" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-medium mb-2">"Minimalism Meets Functionality"</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Dwell magazine features Aesthete's newest collection in their annual 
                      design issue, celebrating our commitment to purposeful design.
                    </p>
                    <a href="#" className="text-primary hover:underline text-sm flex items-center">
                      Read Article <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Press Kit */}
          <section className="py-16">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold tracking-tight mb-6 text-center">Press Kit</h2>
                <p className="text-muted-foreground text-center mb-8">
                  Download our press kit for brand assets, high-resolution product images, founder bios, and fact sheets.
                </p>
                
                <div className="bg-secondary rounded-lg p-8 text-center">
                  <h3 className="text-xl font-medium mb-4">Aesthete Press Kit</h3>
                  <p className="text-muted-foreground mb-6">
                    Includes brand guidelines, logos, product images, and company information.
                  </p>
                  <Button size="lg" className="flex items-center gap-2 mx-auto">
                    <ArrowDownToLine size={18} />
                    Download Press Kit (ZIP, 42MB)
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="font-medium mb-3">Product Images</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      High-resolution images of our complete product line, suitable for print and digital media.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">Download Images</Button>
                  </div>
                  
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="font-medium mb-3">Brand Assets</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Logos, typography, color palettes, and usage guidelines for the Aesthete brand.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">Download Brand Assets</Button>
                  </div>
                  
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="font-medium mb-3">Company Fact Sheet</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Key information about Aesthete, including our history, mission, and leadership.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">Download Fact Sheet</Button>
                  </div>
                  
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="font-medium mb-3">Founder Bios & Photos</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Professional biographies and high-resolution photos of Aesthete's founding team.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">Download Bios & Photos</Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Contact Section */}
          <section className="py-16 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 md:px-6 text-center">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Media Inquiries</h2>
              <p className="max-w-2xl mx-auto mb-8">
                For interview requests, additional information, or to arrange a press visit to 
                our showroom, please contact our media relations team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" asChild>
                  <a href="mailto:press@aesthete.com">Email Press Team</a>
                </Button>
                <Button variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10">
                  +1 (415) 555-7890
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

export default Press;
