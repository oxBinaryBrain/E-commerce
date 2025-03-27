
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartItem from '@/components/ui/CartItem';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/components/ui/use-toast';
import { useCart } from '@/context/CartContext';
import { ArrowLeft, CreditCard, CheckCircle, Truck, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, getCartTotal, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1); // 1: Information, 2: Shipping, 3: Payment
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  
  const subtotal = getCartTotal();
  const shipping = cart.length > 0 ? 10.00 : 0;
  const tax = subtotal * 0.07; // 7% tax
  const total = subtotal + shipping + tax;
  
  // Form state
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });
  
  // Update form fields
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  // Submit information and go to shipping
  const handleInformationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate
    if (!formData.email || !formData.firstName || !formData.lastName || !formData.address || 
        !formData.city || !formData.state || !formData.zipCode) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    setCurrentStep(2);
  };
  
  // Submit shipping and go to payment
  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(3);
  };
  
  // Submit payment and place order
  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate based on payment method
    if (paymentMethod === 'credit-card') {
      if (!formData.cardNumber || !formData.cardName || !formData.expiryDate || !formData.cvv) {
        toast({
          title: "Missing payment information",
          description: "Please fill in all required payment fields.",
          variant: "destructive",
        });
        return;
      }
    }
    
    // Submit order
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      clearCart();
      toast({
        title: "Order placed successfully!",
        description: "Thank you for your order. You will receive a confirmation email shortly.",
      });
      navigate('/order-confirmation');
    }, 2000);
  };
  
  // Empty cart redirect
  if (cart.length === 0) {
    return (
      <>
        <Navbar />
        <main className="flex-1 pt-24">
          <div className="container mx-auto px-4 md:px-6 py-8">
            <div className="max-w-md mx-auto text-center py-12">
              <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
              <p className="text-muted-foreground mb-6">Add some products to your cart before proceeding to checkout.</p>
              <Button asChild>
                <Link to="/products">Browse Products</Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
  
  return (
    <>
      <Helmet>
        <title>Checkout | Aesthete</title>
        <meta name="description" content="Complete your purchase." />
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <Navbar />
        
        <main className="flex-1 pt-24">
          <div className="container mx-auto px-4 md:px-6 py-8">
            <Link to="/cart" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Cart
            </Link>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Main checkout form */}
              <div className="lg:col-span-3 animate-fade-in">
                {/* Checkout steps */}
                <div className="mb-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium mr-2",
                        currentStep >= 1 ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                      )}>
                        1
                      </div>
                      <span className={currentStep >= 1 ? "font-medium" : "text-muted-foreground"}>Information</span>
                    </div>
                    <div className="w-12 h-0.5 bg-border"></div>
                    <div className="flex items-center">
                      <div className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium mr-2",
                        currentStep >= 2 ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                      )}>
                        2
                      </div>
                      <span className={currentStep >= 2 ? "font-medium" : "text-muted-foreground"}>Shipping</span>
                    </div>
                    <div className="w-12 h-0.5 bg-border"></div>
                    <div className="flex items-center">
                      <div className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium mr-2",
                        currentStep >= 3 ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                      )}>
                        3
                      </div>
                      <span className={currentStep >= 3 ? "font-medium" : "text-muted-foreground"}>Payment</span>
                    </div>
                  </div>
                </div>
                
                {/* Information step */}
                {currentStep === 1 && (
                  <div className="bg-card rounded-lg shadow-sm border border-border p-6">
                    <h2 className="text-xl font-semibold mb-6">Contact & Shipping Information</h2>
                    
                    <form onSubmit={handleInformationSubmit} className="space-y-4">
                      {/* Email */}
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      {/* Name - 2 columns */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            placeholder="John"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            placeholder="Doe"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      
                      {/* Address */}
                      <div className="grid gap-2">
                        <Label htmlFor="address">Address</Label>
                        <Input
                          id="address"
                          name="address"
                          placeholder="123 Main St"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      {/* City, State, Zip */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="city">City</Label>
                          <Input
                            id="city"
                            name="city"
                            placeholder="New York"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="state">State</Label>
                          <Input
                            id="state"
                            name="state"
                            placeholder="NY"
                            value={formData.state}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="zipCode">ZIP Code</Label>
                          <Input
                            id="zipCode"
                            name="zipCode"
                            placeholder="10001"
                            value={formData.zipCode}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <Button type="submit" className="w-full sm:w-auto">
                          Continue to Shipping
                        </Button>
                      </div>
                    </form>
                  </div>
                )}
                
                {/* Shipping step */}
                {currentStep === 2 && (
                  <div className="bg-card rounded-lg shadow-sm border border-border p-6">
                    <h2 className="text-xl font-semibold mb-6">Shipping Method</h2>
                    
                    <form onSubmit={handleShippingSubmit} className="space-y-6">
                      <RadioGroup defaultValue="standard" className="space-y-4">
                        <div className="flex items-start space-x-3 rounded-lg border border-border p-4 hover:bg-secondary/50 cursor-pointer">
                          <RadioGroupItem value="standard" id="standard" className="mt-1" />
                          <div className="grid gap-1.5">
                            <div className="flex items-center gap-2">
                              <Label htmlFor="standard" className="font-medium">Standard Shipping</Label>
                              <span className="text-sm font-medium ml-auto">$10.00</span>
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Truck className="h-4 w-4 mr-2" />
                              <span>3-5 business days</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 rounded-lg border border-border p-4 hover:bg-secondary/50 cursor-pointer">
                          <RadioGroupItem value="express" id="express" className="mt-1" />
                          <div className="grid gap-1.5">
                            <div className="flex items-center gap-2">
                              <Label htmlFor="express" className="font-medium">Express Shipping</Label>
                              <span className="text-sm font-medium ml-auto">$20.00</span>
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Clock className="h-4 w-4 mr-2" />
                              <span>1-2 business days</span>
                            </div>
                          </div>
                        </div>
                      </RadioGroup>
                      
                      <div className="pt-2 flex gap-3">
                        <Button type="button" variant="outline" onClick={() => setCurrentStep(1)}>
                          Back
                        </Button>
                        <Button type="submit">
                          Continue to Payment
                        </Button>
                      </div>
                    </form>
                  </div>
                )}
                
                {/* Payment step */}
                {currentStep === 3 && (
                  <div className="bg-card rounded-lg shadow-sm border border-border p-6">
                    <h2 className="text-xl font-semibold mb-6">Payment</h2>
                    
                    <form onSubmit={handlePaymentSubmit} className="space-y-6">
                      <RadioGroup 
                        defaultValue="credit-card" 
                        className="space-y-4"
                        value={paymentMethod}
                        onValueChange={setPaymentMethod}
                      >
                        <div className="flex items-start space-x-3 rounded-lg border border-border p-4 hover:bg-secondary/50 cursor-pointer">
                          <RadioGroupItem value="credit-card" id="credit-card" className="mt-1" />
                          <div className="grid gap-1.5 w-full">
                            <div className="flex items-center gap-2">
                              <Label htmlFor="credit-card" className="font-medium">Credit Card</Label>
                              <CreditCard className="h-4 w-4 ml-1" />
                            </div>
                            
                            {paymentMethod === 'credit-card' && (
                              <div className="grid gap-4 mt-4">
                                <div className="grid gap-2">
                                  <Label htmlFor="cardNumber">Card Number</Label>
                                  <Input
                                    id="cardNumber"
                                    name="cardNumber"
                                    placeholder="1234 5678 9012 3456"
                                    value={formData.cardNumber}
                                    onChange={handleInputChange}
                                  />
                                </div>
                                
                                <div className="grid gap-2">
                                  <Label htmlFor="cardName">Name on Card</Label>
                                  <Input
                                    id="cardName"
                                    name="cardName"
                                    placeholder="John Doe"
                                    value={formData.cardName}
                                    onChange={handleInputChange}
                                  />
                                </div>
                                
                                <div className="grid grid-cols-2 gap-4">
                                  <div className="grid gap-2">
                                    <Label htmlFor="expiryDate">Expiry Date</Label>
                                    <Input
                                      id="expiryDate"
                                      name="expiryDate"
                                      placeholder="MM/YY"
                                      value={formData.expiryDate}
                                      onChange={handleInputChange}
                                    />
                                  </div>
                                  <div className="grid gap-2">
                                    <Label htmlFor="cvv">CVV</Label>
                                    <Input
                                      id="cvv"
                                      name="cvv"
                                      placeholder="123"
                                      value={formData.cvv}
                                      onChange={handleInputChange}
                                    />
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-3 rounded-lg border border-border p-4 hover:bg-secondary/50 cursor-pointer">
                          <RadioGroupItem value="paypal" id="paypal" className="mt-1" />
                          <div className="grid gap-1.5">
                            <Label htmlFor="paypal" className="font-medium">PayPal</Label>
                            <span className="text-sm text-muted-foreground">You will be redirected to PayPal to complete your purchase.</span>
                          </div>
                        </div>
                      </RadioGroup>
                      
                      <div className="pt-2 flex gap-3">
                        <Button type="button" variant="outline" onClick={() => setCurrentStep(2)}>
                          Back
                        </Button>
                        <Button 
                          type="submit" 
                          className="flex-1"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>Processing...</>
                          ) : (
                            <>Place Order (${total.toFixed(2)})</>
                          )}
                        </Button>
                      </div>
                    </form>
                  </div>
                )}
                
                {/* Trust badges */}
                <div className="mt-8 text-center">
                  <p className="text-sm text-muted-foreground mb-4">Secure Checkout</p>
                  <div className="flex justify-center gap-4 flex-wrap">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Secure Payment
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Fast Shipping
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Easy Returns
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Order summary */}
              <div className="lg:col-span-2 animate-fade-in [animation-delay:200ms]">
                <div className="bg-card rounded-lg shadow-sm border border-border p-6 sticky top-24">
                  <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                  
                  {/* Product list */}
                  <div className="space-y-4 max-h-[320px] overflow-y-auto mb-6">
                    {cart.map(item => (
                      <CartItem key={item.product.id} item={item} compact />
                    ))}
                  </div>
                  
                  <Separator className="my-4" />
                  
                  {/* Totals */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>${shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tax (7%)</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between font-medium">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  {/* Accepted payment methods */}
                  <div className="mt-6 pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-2">We Accept</p>
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
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Checkout;
