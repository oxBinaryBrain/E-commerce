
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';

const Press = () => {
  const pressReleases = [
    {
      id: 1,
      title: "Aesthete Launches New Sustainable Homeware Collection",
      date: "October 15, 2023",
      excerpt: "The latest collection features recycled materials and carbon-neutral manufacturing processes.",
      link: "/press/sustainable-collection"
    },
    {
      id: 2,
      title: "Aesthete Opens New Flagship Store in San Francisco",
      date: "July 8, 2023",
      excerpt: "The new location showcases our full product range in an immersive minimalist environment.",
      link: "/press/flagship-store"
    },
    {
      id: 3,
      title: "Aesthete Announces Partnership with Leading Sustainable Materials Provider",
      date: "May 22, 2023",
      excerpt: "This collaboration will enhance our sustainable material sourcing and reduce environmental impact.",
      link: "/press/material-partnership"
    },
    {
      id: 4,
      title: "Aesthete Named in 'Top 50 Sustainable Brands' List",
      date: "February 10, 2023",
      excerpt: "Recognition for our commitment to environmental responsibility and ethical business practices.",
      link: "/press/sustainable-award"
    }
  ];
  
  const mediaFeatures = [
    {
      id: 1,
      publication: "Design Magazine",
      title: "The Rise of Minimalist Living: Aesthete Leads the Way",
      date: "September 2023",
      link: "https://example.com/design-magazine"
    },
    {
      id: 2,
      publication: "Home & Style",
      title: "How Aesthete is Redefining Modern Home Essentials",
      date: "August 2023",
      link: "https://example.com/home-style"
    },
    {
      id: 3,
      publication: "Sustainable Business Journal",
      title: "Case Study: Aesthete's Approach to Ethical Production",
      date: "July 2023",
      link: "https://example.com/sustainable-business"
    },
    {
      id: 4,
      publication: "The Minimalist",
      title: "Interview with Aesthete's Founder on Design Philosophy",
      date: "June 2023",
      link: "https://example.com/minimalist"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Press | Aesthete</title>
        <meta name="description" content="Press releases, media coverage, and resources for journalists and publications." />
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <Navbar />
        
        <main className="flex-1 pt-24">
          {/* Hero Section */}
          <section className="bg-secondary">
            <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 animate-fade-in">Press & Media</h1>
                <p className="text-muted-foreground leading-relaxed animate-fade-in [animation-delay:200ms]">
                  Find the latest news, press releases, and media resources about Aesthete. 
                  For press inquiries, please contact our media team at press@aesthete.com.
                </p>
              </div>
            </div>
          </section>
          
          {/* Press Releases Section */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">Press Releases</h2>
              
              <div className="space-y-6 animate-slide-up">
                {pressReleases.map((item) => (
                  <div key={item.id} className="border border-border rounded-lg p-6 hover:bg-secondary/50 transition-colors">
                    <p className="text-sm text-muted-foreground mb-2">{item.date}</p>
                    <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link to={item.link}>Read More</Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Media Coverage Section */}
          <section className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">Media Coverage</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slide-up" style={{ animationDelay: "200ms" }}>
                {mediaFeatures.map((item) => (
                  <div key={item.id} className="bg-background border border-border rounded-lg p-6">
                    <p className="text-primary font-medium mb-2">{item.publication}</p>
                    <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{item.date}</p>
                    <Button variant="ghost" size="sm" className="text-primary" asChild>
                      <a href={item.link} target="_blank" rel="noopener noreferrer">Read Article →</a>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Press Kit Section */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Press Kit</h2>
                <p className="text-muted-foreground">
                  Download our press kit containing logos, product images, and company information.
                </p>
              </div>
              
              <div className="bg-secondary rounded-lg p-8 border border-border animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-xl font-medium mb-4">Aesthete Press Kit</h3>
                    <ul className="space-y-2 text-muted-foreground mb-6">
                      <li>• Brand logos (PNG, SVG, EPS)</li>
                      <li>• High-resolution product photography</li>
                      <li>• Company fact sheet</li>
                      <li>• Founder biographies</li>
                      <li>• Sustainability information</li>
                    </ul>
                    <Button className="w-full sm:w-auto" asChild>
                      <a href="#download">
                        <Download className="mr-2 h-4 w-4" />
                        Download Press Kit
                      </a>
                    </Button>
                  </div>
                  <div className="hidden md:flex justify-center">
                    <div className="relative w-full max-w-[200px] aspect-square border border-border rounded-lg overflow-hidden">
                      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1 p-3">
                        <div className="bg-foreground/10 rounded"></div>
                        <div className="bg-foreground/10 rounded"></div>
                        <div className="bg-foreground/10 rounded"></div>
                        <div className="bg-foreground/10 rounded"></div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-2xl font-bold">A</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Contact Section */}
          <section className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Media Inquiries</h2>
              <p className="text-muted-foreground mb-8">
                For interview requests, additional information, or media opportunities, 
                please contact our press team. We typically respond within 24-48 hours.
              </p>
              <div className="bg-background border border-border rounded-lg p-8 max-w-md mx-auto animate-fade-in">
                <h3 className="text-xl font-medium mb-4">Press Contact</h3>
                <div className="space-y-2 mb-6">
                  <p className="flex flex-col sm:flex-row sm:justify-between">
                    <span className="font-medium">Email:</span>
                    <a href="mailto:press@aesthete.com" className="text-primary hover:underline">press@aesthete.com</a>
                  </p>
                  <p className="flex flex-col sm:flex-row sm:justify-between">
                    <span className="font-medium">Phone:</span>
                    <a href="tel:+18005551234" className="text-primary hover:underline">+1 (800) 555-1234</a>
                  </p>
                </div>
                <Button asChild className="w-full">
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

export default Press;
