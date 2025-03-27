
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { getProductById, Product, getFeaturedProducts } from '@/lib/data';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, Star, Minus, Plus, ChevronLeft } from 'lucide-react';
import ProductCard from '@/components/ui/ProductCard';
import { cn } from '@/lib/utils';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    if (id) {
      const foundProduct = getProductById(id);
      setProduct(foundProduct);
      
      // Get related products (in a real app, this would filter by category or tags)
      const featured = getFeaturedProducts().filter(p => p.id !== id);
      setRelatedProducts(featured.slice(0, 4));
      
      // Reset state when changing products
      setQuantity(1);
      setImageLoaded(false);
      
      // Simulate loading
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [id]);

  const handleQuantityChange = (newQuantity: number) => {
    if (product && newQuantity > 0 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className="flex min-h-screen flex-col pt-24">
          <div className="container mx-auto px-4 md:px-6 py-8">
            <div className="animate-pulse">
              <div className="h-4 bg-muted rounded w-32 mb-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-muted rounded-lg aspect-square"></div>
                <div className="space-y-4">
                  <div className="h-8 bg-muted rounded w-3/4"></div>
                  <div className="h-4 bg-muted rounded w-1/4"></div>
                  <div className="h-4 bg-muted rounded w-full"></div>
                  <div className="h-4 bg-muted rounded w-full"></div>
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                  <div className="h-10 bg-muted rounded w-full mt-8"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="flex min-h-screen flex-col pt-24">
          <div className="container mx-auto px-4 md:px-6 py-8">
            <div className="text-center py-12">
              <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
              <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist or has been removed.</p>
              <Button asChild>
                <Link to="/products">
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Back to Products
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{product.name} | Aesthete</title>
        <meta name="description" content={product.description} />
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <Navbar />
        
        <main className="flex-1 pt-24">
          <div className="container mx-auto px-4 md:px-6 py-8">
            {/* Breadcrumb */}
            <div className="mb-6">
              <nav className="flex text-sm text-muted-foreground animate-fade-in">
                <Link to="/" className="hover:text-foreground">Home</Link>
                <span className="mx-2">/</span>
                <Link to="/products" className="hover:text-foreground">Products</Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">{product.name}</span>
              </nav>
            </div>
            
            {/* Product Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Product Image */}
              <div className="relative bg-secondary rounded-lg overflow-hidden animate-fade-in">
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-muted animate-pulse"></div>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className={cn(
                    "w-full h-auto object-cover transition-opacity duration-500",
                    imageLoaded ? "opacity-100" : "opacity-0"
                  )}
                  onLoad={() => setImageLoaded(true)}
                />
                
                {/* Featured badge */}
                {product.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-medium">
                      Featured
                    </span>
                  </div>
                )}
              </div>
              
              {/* Product Info */}
              <div className="flex flex-col animate-slide-up">
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
                  {product.name}
                </h1>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="ml-1 font-medium">{product.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviews} reviews)
                  </span>
                </div>
                
                {/* Price */}
                <p className="text-2xl font-semibold mb-4">
                  ${product.price.toFixed(2)}
                </p>
                
                {/* Description */}
                <div className="prose prose-sm mb-6 text-muted-foreground">
                  <p>{product.description}</p>
                </div>
                
                {/* Category */}
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground">
                    Category: <Link to={`/products?category=${product.category.toLowerCase()}`} className="text-primary hover:underline">{product.category}</Link>
                  </p>
                </div>
                
                {/* Stock Status */}
                <div className="mb-6">
                  {product.stock > 0 ? (
                    <p className="text-sm">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      In Stock 
                      {product.stock <= 5 && (
                        <span className="text-orange-500 ml-1">
                          (Only {product.stock} left)
                        </span>
                      )}
                    </p>
                  ) : (
                    <p className="text-sm text-destructive">
                      <span className="inline-block w-2 h-2 bg-destructive rounded-full mr-2"></span>
                      Out of Stock
                    </p>
                  )}
                </div>
                
                {/* Quantity and Add to Cart */}
                {product.stock > 0 && (
                  <div className="mt-2 space-y-4">
                    <div className="flex items-center">
                      <span className="mr-4 text-sm font-medium">Quantity</span>
                      <div className="flex items-center">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-md"
                          onClick={() => handleQuantityChange(quantity - 1)}
                          disabled={quantity <= 1}
                        >
                          <Minus className="h-3 w-3" />
                          <span className="sr-only">Decrease quantity</span>
                        </Button>
                        <span className="mx-3 text-sm font-medium w-8 text-center">
                          {quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-md"
                          onClick={() => handleQuantityChange(quantity + 1)}
                          disabled={quantity >= product.stock}
                        >
                          <Plus className="h-3 w-3" />
                          <span className="sr-only">Increase quantity</span>
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        size="lg" 
                        className="flex-1 hover-lift"
                        onClick={handleAddToCart}
                      >
                        <ShoppingBag className="mr-2 h-4 w-4" />
                        Add to Cart
                      </Button>
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="flex-1 hover-lift"
                        asChild
                      >
                        <Link to="/checkout">Buy Now</Link>
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Related Products */}
            {relatedProducts.length > 0 && (
              <section className="mt-16">
                <h2 className="text-2xl font-bold tracking-tight mb-6">You Might Also Like</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {relatedProducts.map((product, index) => (
                    <div 
                      key={product.id} 
                      className="animate-scale-in" 
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ProductDetail;
