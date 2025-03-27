
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartItem as CartItemType } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Trash, Plus, Minus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

interface CartItemProps {
  item: CartItemType;
  compact?: boolean;
}

const CartItem = ({ item, compact = false }: CartItemProps) => {
  const { updateQuantity, removeFromCart } = useCart();
  const [isLoading, setIsLoading] = useState(true);
  const subtotal = item.product.price * item.quantity;

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity > 0 && newQuantity <= item.product.stock) {
      updateQuantity(item.product.id, newQuantity);
    }
  };

  const handleRemove = () => {
    removeFromCart(item.product.id);
  };

  return (
    <div className={cn(
      "flex items-start gap-4 py-4",
      !compact && "border-b border-border",
      compact && "pr-2"
    )}>
      {/* Product image */}
      <div className="relative bg-secondary rounded-md overflow-hidden">
        {isLoading && (
          <div className={cn(
            "absolute inset-0 bg-muted animate-pulse",
            compact ? "w-16 h-16" : "w-24 h-24"
          )} />
        )}
        <Link to={`/products/${item.product.id}`}>
          <img
            src={item.product.image}
            alt={item.product.name}
            onLoad={() => setIsLoading(false)}
            className={cn(
              "object-cover transition-opacity duration-300 hover:opacity-90",
              compact ? "w-16 h-16" : "w-24 h-24",
              isLoading ? "opacity-0" : "opacity-100"
            )}
          />
        </Link>
      </div>

      {/* Product details */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-col">
          <Link 
            to={`/products/${item.product.id}`}
            className="font-medium hover:text-primary transition-colors line-clamp-1"
          >
            {item.product.name}
          </Link>
          {!compact && (
            <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
              {item.product.category}
            </p>
          )}

          <div className={cn(
            "flex items-center mt-2",
            compact ? "flex-col items-start space-y-2" : "justify-between flex-wrap gap-2"
          )}>
            {/* Price */}
            <div className="flex items-baseline gap-2">
              <span className="font-medium">${item.product.price.toFixed(2)}</span>
              {!compact && item.quantity > 1 && (
                <span className="text-sm text-muted-foreground">
                  Subtotal: ${subtotal.toFixed(2)}
                </span>
              )}
            </div>

            {/* Quantity controls */}
            <div className="flex items-center">
              {!compact && (
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-md"
                  onClick={() => handleQuantityChange(item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  <Minus className="h-3 w-3" />
                  <span className="sr-only">Decrease quantity</span>
                </Button>
              )}
              <span className={cn(
                "mx-2 select-none",
                compact ? "text-sm" : "text-sm font-medium w-8 text-center"
              )}>
                {compact ? `Qty: ${item.quantity}` : item.quantity}
              </span>
              {!compact && (
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-md"
                  onClick={() => handleQuantityChange(item.quantity + 1)}
                  disabled={item.quantity >= item.product.stock}
                >
                  <Plus className="h-3 w-3" />
                  <span className="sr-only">Increase quantity</span>
                </Button>
              )}
              
              {/* Remove button */}
              {!compact && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 ml-2 text-muted-foreground hover:text-destructive"
                  onClick={handleRemove}
                >
                  <Trash className="h-4 w-4" />
                  <span className="sr-only">Remove</span>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
