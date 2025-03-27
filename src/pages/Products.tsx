import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/ui/ProductCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { getProductsByCategory, products, categories, Product } from '@/lib/data';
import { Search, X, SlidersHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';

const Products = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category')?.toLowerCase() || 'all';
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initialProducts = getProductsByCategory(categoryParam);
    setFilteredProducts(initialProducts);
    setSelectedCategory(categoryParam);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [categoryParam]);

  useEffect(() => {
    if (selectedCategory !== categoryParam) {
      const newParams = new URLSearchParams(location.search);
      if (selectedCategory === 'all') {
        newParams.delete('category');
      } else {
        newParams.set('category', selectedCategory);
      }
      navigate(`${location.pathname}?${newParams.toString()}`);
    }
  
    let result = selectedCategory === 'all' 
      ? [...products] 
      : products.filter(product => 
          product.category.toLowerCase() === selectedCategory
        );
    
    if (searchTerm) {
      result = result.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    result = result.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    setFilteredProducts(result);
  }, [selectedCategory, searchTerm, priceRange, location.search, navigate, categoryParam]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setIsFilterMenuOpen(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  const handlePriceChange = (values: number[]) => {
    setPriceRange(values);
  };

  const toggleFilterMenu = () => {
    setIsFilterMenuOpen(!isFilterMenuOpen);
  };

  const getMaxPrice = () => {
    return Math.max(...products.map(product => product.price));
  };

  return (
    <>
      <Helmet>
        <title>Shop | Aesthete</title>
        <meta name="description" content="Browse our collection of minimalist home and lifestyle products." />
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <Navbar />
        
        <main className="flex-1 pt-24">
          <div className="bg-secondary">
            <div className="container mx-auto px-4 md:px-6 py-12 text-center">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight animate-fade-in">
                Our Collection
              </h1>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
                Explore our curated selection of minimalist designs for modern living
              </p>
            </div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 py-8">
            <div className="flex md:hidden justify-between items-center mb-4">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center"
                onClick={toggleFilterMenu}
              >
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                Filters
              </Button>
              
              <span className="text-sm text-muted-foreground">
                {filteredProducts.length} products
              </span>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <aside className={cn(
                "md:w-64 flex-shrink-0",
                isFilterMenuOpen ? "block" : "hidden md:block"
              )}>
                <div className="sticky top-24 space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-medium">Search</h3>
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none" />
                      <Input
                        type="search"
                        placeholder="Search products..."
                        className="pl-8"
                        value={searchTerm}
                        onChange={handleSearchChange}
                      />
                      {searchTerm && (
                        <button
                          onClick={clearSearch}
                          className="absolute right-2.5 top-2.5 text-muted-foreground hover:text-foreground"
                        >
                          <X className="h-4 w-4" />
                          <span className="sr-only">Clear search</span>
                        </button>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-medium">Categories</h3>
                    <div className="space-y-1">
                      {categories.map(category => (
                        <button
                          key={category.id}
                          onClick={() => handleCategoryChange(category.id)}
                          className={cn(
                            "w-full text-left px-3 py-2 text-sm rounded-md transition-colors",
                            selectedCategory === category.id
                              ? "bg-primary text-primary-foreground"
                              : "text-muted-foreground hover:bg-secondary"
                          )}
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-medium">Price Range</h3>
                    <Slider
                      defaultValue={[0, getMaxPrice()]}
                      max={getMaxPrice()}
                      step={100}
                      value={priceRange}
                      onValueChange={handlePriceChange}
                      className="py-4"
                    />
                    <div className="flex items-center justify-between">
                      <span className="text-sm">₹{priceRange[0].toLocaleString('en-IN')}</span>
                      <span className="text-sm">₹{priceRange[1].toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                  
                  <div className="md:hidden">
                    <Button
                      onClick={toggleFilterMenu}
                      className="w-full"
                    >
                      Apply Filters
                    </Button>
                  </div>
                </div>
              </aside>
              
              <div className="flex-1">
                <div className="hidden md:flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold tracking-tight">All Products</h2>
                  <span className="text-sm text-muted-foreground">
                    {filteredProducts.length} products
                  </span>
                </div>
                
                {isLoading ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="animate-pulse">
                        <div className="bg-muted rounded-lg aspect-square mb-3"></div>
                        <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                        <div className="h-4 bg-muted rounded w-1/2"></div>
                      </div>
                    ))}
                  </div>
                ) : filteredProducts.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map(product => (
                      <div key={product.id} className="animate-scale-in">
                        <ProductCard product={product} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <h3 className="text-lg font-medium mb-2">No products found</h3>
                    <p className="text-muted-foreground mb-6">
                      Try adjusting your search or filter criteria
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedCategory('all');
                        setPriceRange([0, getMaxPrice()]);
                      }}
                    >
                      Reset Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Products;
