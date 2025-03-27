
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Aesthete | Minimalist Home & Lifestyle</title>
        <meta name="description" content="Curated minimalist products that combine form and function for modern living. Discover pieces that inspire and endure." />
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <Navbar />
        
        <main className="flex-1">
          <Hero />
          <FeaturedProducts />
          
          {/* Categories Section */}
          <section className="py-16 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight">Browse Categories</h2>
                <p className="mt-2 text-muted-foreground">
                  Explore our collections by category
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Lighting Category */}
                <div className="relative overflow-hidden rounded-lg aspect-square group animate-scale-in">
                  <img 
                    src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=1000&auto=format&fit=crop" 
                    alt="Lighting" 
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-xl font-medium text-white mb-2">Lighting</h3>
                    <Button variant="outline" size="sm" className="w-fit border-white/30 text-white hover:bg-white/10" asChild>
                      <Link to="/products?category=lighting">
                        Shop Now
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                
                {/* Kitchen Category */}
                <div className="relative overflow-hidden rounded-lg aspect-square group animate-scale-in [animation-delay:200ms]">
                  <img 
                    src="https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?q=80&w=1000&auto=format&fit=crop" 
                    alt="Kitchen" 
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-xl font-medium text-white mb-2">Kitchen</h3>
                    <Button variant="outline" size="sm" className="w-fit border-white/30 text-white hover:bg-white/10" asChild>
                      <Link to="/products?category=kitchen">
                        Shop Now
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                
                {/* Home Category */}
                <div className="relative overflow-hidden rounded-lg aspect-square group animate-scale-in [animation-delay:400ms]">
                  <img 
                    src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1000&auto=format&fit=crop" 
                    alt="Home" 
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-xl font-medium text-white mb-2">Home</h3>
                    <Button variant="outline" size="sm" className="w-fit border-white/30 text-white hover:bg-white/10" asChild>
                      <Link to="/products?category=home">
                        Shop Now
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Philosophy Section */}
          <section className="py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 animate-slide-up">
                  <h2 className="text-3xl font-bold tracking-tight">Our Design Philosophy</h2>
                  <p className="text-muted-foreground">
                    At Aesthete, we believe that less is more. Our products are designed with intention, 
                    focusing on quality materials, timeless aesthetics, and functional simplicity.
                  </p>
                  <p className="text-muted-foreground">
                    Each piece is carefully selected to bring beauty and purpose to your space, 
                    creating environments that feel both elegant and effortlessly livable.
                  </p>
                  <Button className="mt-4" asChild>
                    <Link to="/about">
                      Learn More
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden animate-slide-up" style={{ animationDelay: "200ms" }}>
                  <img 
                    src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop" 
                    alt="Minimalist interior" 
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </section>
          
          {/* Newsletter Section */}
          <section className="py-16 bg-secondary">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
              <div className="space-y-4 animate-fade-in">
                <h2 className="text-3xl font-bold tracking-tight">Join Our Community</h2>
                <p className="text-muted-foreground">
                  Subscribe to our newsletter for exclusive offers, design inspiration, and new product announcements.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                  <Button className="sm:w-auto w-full">Subscribe</Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates.
                </p>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
