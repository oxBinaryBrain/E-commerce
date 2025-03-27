
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured: boolean;
  rating: number;
  reviews: number;
  stock: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Minimalist Desk Lamp",
    description: "A sleek, minimalist desk lamp with adjustable brightness and color temperature. Perfect for your workspace or bedside table.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1534241588035-1224813131ff?q=80&w=1000&auto=format&fit=crop",
    category: "Lighting",
    featured: true,
    rating: 4.8,
    reviews: 124,
    stock: 15
  },
  {
    id: "2",
    name: "Ceramic Pour-Over Coffee Set",
    description: "Hand-crafted ceramic pour-over coffee set with a minimalist design. Includes dripper, server, and two cups.",
    price: 64.99,
    image: "https://images.unsplash.com/photo-1578922864601-79dcc7cbcea9?q=80&w=1000&auto=format&fit=crop",
    category: "Kitchen",
    featured: true,
    rating: 4.9,
    reviews: 89,
    stock: 8
  },
  {
    id: "3",
    name: "Wool Throw Blanket",
    description: "Luxuriously soft wool throw blanket in a minimalist pattern. Perfect for adding warmth and style to any room.",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop",
    category: "Home",
    featured: true,
    rating: 4.7,
    reviews: 62,
    stock: 11
  },
  {
    id: "4",
    name: "Matte Black Cutlery Set",
    description: "Modern matte black stainless steel cutlery set with a minimalist design. Includes 24 pieces for 6 place settings.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1594222082000-24ea0013ae6a?q=80&w=1000&auto=format&fit=crop",
    category: "Kitchen",
    featured: false,
    rating: 4.6,
    reviews: 47,
    stock: 6
  },
  {
    id: "5",
    name: "Concrete Desk Organizer",
    description: "Handcrafted concrete desk organizer with compartments for stationery and small office essentials.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1589584649628-b9c66303a00d?q=80&w=1000&auto=format&fit=crop",
    category: "Office",
    featured: true,
    rating: 4.5,
    reviews: 38,
    stock: 20
  },
  {
    id: "6",
    name: "Linen Bed Sheets Set",
    description: "Premium stone-washed linen bed sheets set. Includes flat sheet, fitted sheet, and two pillowcases.",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1000&auto=format&fit=crop",
    category: "Bedroom",
    featured: false,
    rating: 4.9,
    reviews: 72,
    stock: 5
  },
  {
    id: "7",
    name: "Wooden Wall Clock",
    description: "Minimalist wooden wall clock with a clean, modern design. Silent movement for distraction-free environments.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1565193566173-7a0af771d71a?q=80&w=1000&auto=format&fit=crop",
    category: "Home",
    featured: false,
    rating: 4.4,
    reviews: 29,
    stock: 13
  },
  {
    id: "8",
    name: "Glass Carafe Set",
    description: "Elegant glass carafe with matching cup. Perfect for bedside water or as a small vase.",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1615888235317-09bc1b42689a?q=80&w=1000&auto=format&fit=crop",
    category: "Kitchen",
    featured: true,
    rating: 4.7,
    reviews: 41,
    stock: 17
  }
];

export const categories = [
  { id: "all", name: "All Products" },
  { id: "lighting", name: "Lighting" },
  { id: "kitchen", name: "Kitchen" },
  { id: "home", name: "Home" },
  { id: "office", name: "Office" },
  { id: "bedroom", name: "Bedroom" }
];

// Helper function to get product by ID
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

// Helper function to get featured products
export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

// Helper function to get products by category
export const getProductsByCategory = (category: string): Product[] => {
  if (category === "all") {
    return products;
  }
  return products.filter(product => product.category.toLowerCase() === category.toLowerCase());
};
