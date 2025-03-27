
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import ProductCard from '@/components/ui/ProductCard';
import { getFeaturedProducts, Product } from '@/lib/data';
import { cn } from '@/lib/utils';

const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
          <div
            className={cn(
              "transition-all duration-700 delay-100 transform mb-4 md:mb-0",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            <h2 className="text-3xl font-bold tracking-tight">Featured Collection</h2>
            <p className="mt-2 text-muted-foreground">
              Discover our most popular minimalist designs
            </p>
          </div>
          <div
            className={cn(
              "transition-all duration-700 delay-200 transform",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            <Button variant="ghost" asChild>
              <Link to="/products" className="group">
                View All Products
                <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className={cn(
                "transition-all duration-700 transform",
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0",
                isVisible && `delay-${(index + 2) * 100}`
              )}
              style={{
                transitionDelay: isVisible ? `${(index + 2) * 100}ms` : "0ms",
              }}
            >
              <ProductCard product={product} featured />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
