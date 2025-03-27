
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartItem from '@/components/ui/CartItem';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, ArrowRight, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const Cart = () => {
  const { cart, clearCart, getCartTotal } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  const subtotal = getCartTotal();
  const shipping = cart.length > 0 ? 10.00 : 0;
  const total = subtotal + shipping;

  const handleCheckout = () => {
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      // Here you would navigate to checkout or handle the checkout process
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Your Cart | Aesthete</title>
        <meta name="description" content="Review and edit the items in your shopping cart." />
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <Navbar />
        
        <main className="flex-1 pt-24">
          <div className="container mx-auto px-4 md:px-6 py-8">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-6 animate-fade-in">Your Cart</h1>
            
            {cart.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 animate-slide-up">
                  <div className="bg-card rounded-lg shadow-sm border border-border p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-semibold">Cart Items ({cart.length})</h2>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-muted-foreground hover:text-destructive"
                        onClick={clearCart}
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Clear Cart
                      </Button>
                    </div>
                    
                    <div className="divide-y divide-border">
                      {cart.map(item => (
                        <CartItem key={item.product.id} item={item} />
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Order Summary */}
                <div className="animate-slide-up [animation-delay:200ms]">
                  <div className="bg-card rounded-lg shadow-sm border border-border p-6 sticky top-24">
                    <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Shipping</span>
                        <span>${shipping.toFixed(2)}</span>
                      </div>
                      <div className="border-t border-border pt-3 flex justify-between items-center font-semibold">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Button 
                        className="w-full hover-lift"
                        size="lg"
                        disabled={isProcessing}
                        onClick={handleCheckout}
                        asChild
                      >
                        <Link to="/checkout">
                          {isProcessing ? (
                            <>Processing...</>
                          ) : (
                            <>
                              Proceed to Checkout
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Link>
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        asChild
                      >
                        <Link to="/products">
                          Continue Shopping
                        </Link>
                      </Button>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-border">
                      <h3 className="text-sm font-medium mb-2">We Accept</h3>
                      <div className="flex gap-2">
                        <div className="bg-secondary rounded-md px-2 py-1 text-xs">Visa</div>
                        <div className="bg-secondary rounded-md px-2 py-1 text-xs">MasterCard</div>
                        <div className="bg-secondary rounded-md px-2 py-1 text-xs">Amex</div>
                        <div className="bg-secondary rounded-md px-2 py-1 text-xs">PayPal</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-16 max-w-md mx-auto animate-fade-in">
                <div className="bg-secondary inline-flex rounded-full p-4 mb-4">
                  <ShoppingBag className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
                <p className="text-muted-foreground mb-6">
                  Looks like you haven't added anything to your cart yet.
                </p>
                <Button className="hover-lift" asChild>
                  <Link to="/products">
                    Start Shopping
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Cart;
