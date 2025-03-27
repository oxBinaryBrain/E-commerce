
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, User, Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const location = useLocation();
  const { getCartCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartCount = getCartCount();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-400',
        isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-xl md:text-2xl font-semibold tracking-tight transition-colors hover:opacity-90"
          >
            Aesthete
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink to="/" active={location.pathname === '/'}>
              Home
            </NavLink>
            <NavLink to="/products" active={location.pathname.includes('/products')}>
              Shop
            </NavLink>
            <NavLink to="/about" active={location.pathname === '/about'}>
              About
            </NavLink>
            <NavLink to="/contact" active={location.pathname === '/contact'}>
              Contact
            </NavLink>
          </nav>

          {/* Desktop Right Side Actions */}
          <div className="hidden md:flex items-center space-x-1">
            <Button variant="ghost" size="icon" aria-label="Search">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="User account" asChild>
              <Link to="/login">
                <User className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" aria-label="Shopping cart" className="relative" asChild>
              <Link to="/cart">
                <ShoppingBag className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center animate-fade-in">
                    {cartCount}
                  </span>
                )}
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <Button variant="ghost" size="icon" aria-label="Shopping cart" className="relative" asChild>
              <Link to="/cart">
                <ShoppingBag className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center animate-fade-in">
                    {cartCount}
                  </span>
                )}
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            <MobileNavLink to="/" active={location.pathname === '/'}>
              Home
            </MobileNavLink>
            <MobileNavLink to="/products" active={location.pathname.includes('/products')}>
              Shop
            </MobileNavLink>
            <MobileNavLink to="/about" active={location.pathname === '/about'}>
              About
            </MobileNavLink>
            <MobileNavLink to="/contact" active={location.pathname === '/contact'}>
              Contact
            </MobileNavLink>
            <MobileNavLink to="/login" active={location.pathname === '/login'}>
              Account
            </MobileNavLink>
            <div className="pt-4 mt-4 border-t border-border">
              <Button className="w-full" variant="outline" asChild>
                <Link to="/login">Sign In</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

// Desktop Navigation Link
const NavLink = ({ to, active, children }: { to: string; active: boolean; children: React.ReactNode }) => (
  <Link
    to={to}
    className={cn(
      "px-3 py-2 text-sm font-medium rounded-md transition-colors",
      active 
        ? "text-primary" 
        : "text-foreground/80 hover:text-foreground hover:bg-secondary/50"
    )}
  >
    {children}
  </Link>
);

// Mobile Navigation Link
const MobileNavLink = ({ to, active, children }: { to: string; active: boolean; children: React.ReactNode }) => (
  <Link
    to={to}
    className={cn(
      "px-3 py-3 text-base font-medium rounded-md transition-colors",
      active 
        ? "bg-secondary text-primary" 
        : "text-foreground/80 hover:text-foreground hover:bg-secondary/50"
    )}
  >
    {children}
  </Link>
);

export default Navbar;
