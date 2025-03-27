
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

const ProductCard = ({ product, featured = false }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  const imageLoaded = () => {
    setIsLoading(false);
  };

  return (
    <Link 
      to={`/products/${product.id}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-lg transition-all hover-scale",
        featured ? "h-full" : ""
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product image with skeleton */}
      <div className={cn(
        "relative overflow-hidden rounded-lg bg-secondary aspect-square",
        featured ? "h-80" : "h-64"
      )}>
        {isLoading && (
          <div className="absolute inset-0 bg-muted animate-pulse" />
        )}
        <img
          src={product.image}
          alt={product.name}
          onLoad={imageLoaded}
          className={cn(
            "object-cover w-full h-full transition-transform duration-700",
            isHovered ? "scale-105" : "scale-100",
            isLoading ? "opacity-0" : "opacity-100"
          )}
        />
        
        {/* Quick add button overlay */}
        <div 
          className={cn(
            "absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 transform",
            isHovered ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          <Button 
            onClick={handleAddToCart}
            className="w-full glass-card shadow-lg hover:shadow-xl"
            variant="secondary"
          >
            <ShoppingBag className="mr-2 h-4 w-4" />
            Quick Add
          </Button>
        </div>
        
        {/* Featured badge */}
        {product.featured && (
          <div className="absolute top-2 left-2">
            <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-md font-medium">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Product information */}
      <div className="flex flex-col space-y-1.5 p-3">
        <div className="space-y-1">
          <h3 className="font-medium text-base leading-tight group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <Star className="h-3.5 w-3.5 fill-primary text-primary" />
              <span className="ml-1 text-sm font-medium">{product.rating}</span>
            </div>
            <span className="text-xs text-muted-foreground">
              ({product.reviews} reviews)
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-semibold">₹{product.price.toLocaleString('en-IN')}</p>
          {product.stock <= 5 && product.stock > 0 && (
            <p className="text-xs text-orange-500 font-medium">Only {product.stock} left</p>
          )}
          {product.stock === 0 && (
            <p className="text-xs text-destructive font-medium">Out of stock</p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
