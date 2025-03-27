
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full bg-black">
        <div
          className={cn(
            "h-full w-full bg-cover bg-center transition-opacity duration-1000 bg-black",
            isLoaded ? "opacity-60" : "opacity-0"
          )}
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=1374&auto=format&fit=crop')"
          }}
          onLoad={() => setIsLoaded(true)}
        >
          <img
            src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=1374&auto=format&fit=crop"
            alt="Minimalist interior"
            className="hidden"
            onLoad={() => setIsLoaded(true)}
          />
        </div>
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-4 md:px-6 py-24 sm:py-32 md:py-40 min-h-[80vh] flex flex-col justify-center items-start">
        <div className="max-w-2xl">
          <div
            className={cn(
              "transition-all duration-700 delay-100 transform",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            <span className="inline-block px-3 py-1 mb-5 text-xs font-medium bg-white/10 backdrop-blur-sm rounded-full text-white">
              Minimalist Design Collection
            </span>
          </div>

          <h1
            className={cn(
              "text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 transition-all duration-700 delay-200 transform",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            Elevate Your Space With Timeless Design
          </h1>
          
          <p
            className={cn(
              "text-lg md:text-xl text-white/80 mb-8 max-w-xl transition-all duration-700 delay-300 transform",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            Curated minimalist products that combine form and function for modern living. Discover pieces that inspire and endure.
          </p>
          
          <div
            className={cn(
              "flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-400 transform",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            <Button size="lg" asChild className="hover-lift">
              <Link to="/products">
                Shop Collection
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover-lift">
              <Link to="/about">
                Our Story
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
