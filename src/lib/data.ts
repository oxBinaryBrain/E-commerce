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

// Function to generate a large number of products
const generateProducts = () => {
  // Currency conversion rate from USD to INR (approximate)
  const usdToInrRate = 83;
  
  // Collection of unique product images
  const productImages = [
    "https://images.unsplash.com/photo-1534241588035-1224813131ff?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1578922864601-79dcc7cbcea9?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1594222082000-24ea0013ae6a?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1589584649628-b9c66303a00d?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1565193566173-7a0af771d71a?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1615888235317-09bc1b42689a?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1543198126-a4d0a9937529?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516137214677-0baedcd8722d?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1595341595379-cf1cd0192421?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1584947897558-e9b1d6636f8e?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1609058965222-3298b4a8b276?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1588957986066-43499e3e1e60?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1558997519-83c9eda5338f?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1618220624897-10762a4479c9?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1606654810639-d8f7371e6d97?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1587142078245-83e86a6e4c53?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507904953637-96de34a2437b?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1595408427363-931d6411b749?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1594817907536-a397a96b77f9?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507646871303-331b8f659227?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1555860544-57482d4133b2?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1586208958839-06c17cacdf08?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504803900752-c2051699d0e8?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519947486511-46149fa0a254?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1620826782949-3d8f812a6d7a?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1545815232-63b1412d7083?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1586459008854-9f2a72c9268d?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581608190971-9537e8f9798e?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1583847268964-0da5a662165d?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1554295405-abb8fd54f153?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582920980795-2f97b0834c58?q=80&w=1000&auto=format&fit=crop"
  ];
  
  // Add more images to ensure we have at least 100
  const additionalImages = [
    "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1573297627358-ddcc79a0dddb?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1613856025586-42acc2f46d34?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1601379329542-31c59347e2b6?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1584635094574-fb4a6c50bec8?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1588967220281-769e70a6909c?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1593526411462-64d1cc1b3ff3?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1539635578818-0d7b467865c3?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1572897317881-9b4bfc2db4f2?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1562751362-a82cd38af086?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1574871786092-155272b606e0?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1556707752-481d500a2c58?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1593526402074-de310153b933?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1539103377911-4909a1eae382?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1527433083164-6152489845c1?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1000&auto=format&fit=crop"
  ];
  
  const allImages = [...productImages, ...additionalImages];
  
  const baseProducts = [
    {
      id: "1",
      name: "Minimalist Desk Lamp",
      description: "A sleek, minimalist desk lamp with adjustable brightness and color temperature. Perfect for your workspace or bedside table.",
      price: Math.round(89.99 * usdToInrRate),
      image: allImages[0],
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
      price: Math.round(64.99 * usdToInrRate),
      image: allImages[1],
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
      price: Math.round(119.99 * usdToInrRate),
      image: allImages[2],
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
      price: Math.round(129.99 * usdToInrRate),
      image: allImages[3],
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
      price: Math.round(49.99 * usdToInrRate),
      image: allImages[4],
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
      price: Math.round(159.99 * usdToInrRate),
      image: allImages[5],
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
      price: Math.round(79.99 * usdToInrRate),
      image: allImages[6],
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
      price: Math.round(39.99 * usdToInrRate),
      image: allImages[7],
      category: "Kitchen",
      featured: true,
      rating: 4.7,
      reviews: 41,
      stock: 17
    }
  ];
  
  // Additional product templates for generating more products
  const productTemplates = [
    // Lighting Category
    {
      name: "Pendant Light",
      description: "Minimalist pendant light with adjustable height. Perfect for dining areas or kitchen islands.",
      price: [129.99, 149.99, 169.99, 189.99],
      image: allImages[8],
      category: "Lighting",
      featured: false
    },
    {
      name: "Floor Lamp",
      description: "Elegant floor lamp with a slim profile and warm lighting. Creates a cozy atmosphere in any living space.",
      price: [159.99, 179.99, 199.99, 219.99],
      image: allImages[9],
      category: "Lighting",
      featured: false
    },
    {
      name: "Wall Sconce",
      description: "Modern wall sconce with clean lines. Provides ambient lighting for hallways or reading nooks.",
      price: [69.99, 79.99, 89.99, 99.99],
      image: allImages[10],
      category: "Lighting",
      featured: false
    },
    
    // Kitchen Category
    {
      name: "Ceramic Dinnerware Set",
      description: "Simple, elegant ceramic dinnerware set in matte finish. Includes plates, bowls, and mugs for four.",
      price: [119.99, 129.99, 139.99, 149.99],
      image: allImages[11],
      category: "Kitchen",
      featured: false
    },
    {
      name: "Wooden Cutting Board",
      description: "Sustainable hardwood cutting board with minimalist design. Perfect for food prep or serving.",
      price: [39.99, 49.99, 59.99, 69.99],
      image: allImages[12],
      category: "Kitchen",
      featured: false
    },
    {
      name: "Stainless Steel Cookware Set",
      description: "Professional-grade stainless steel cookware set with clean lines and excellent heat distribution.",
      price: [249.99, 299.99, 349.99, 399.99],
      image: allImages[13],
      category: "Kitchen",
      featured: false
    },
    
    // Home Category
    {
      name: "Minimalist Vase",
      description: "Sculptural ceramic vase with a simple, modern silhouette. Beautiful on its own or with dried stems.",
      price: [34.99, 44.99, 54.99, 64.99],
      image: allImages[14],
      category: "Home",
      featured: false
    },
    {
      name: "Storage Basket",
      description: "Handwoven storage basket made from sustainable materials. Ideal for organizing any room.",
      price: [29.99, 39.99, 49.99, 59.99],
      image: allImages[15],
      category: "Home",
      featured: false
    },
    {
      name: "Decorative Pillow",
      description: "Textured decorative pillow in neutral tones. Adds depth and comfort to sofas or beds.",
      price: [44.99, 54.99, 64.99, 74.99],
      image: allImages[16],
      category: "Home",
      featured: false
    },
    
    // Office Category
    {
      name: "Minimalist Desk",
      description: "Clean-lined desk with ample workspace and subtle storage. Perfect for home office or study area.",
      price: [299.99, 349.99, 399.99, 449.99],
      image: allImages[17],
      category: "Office",
      featured: false
    },
    {
      name: "Office Chair",
      description: "Ergonomic office chair with simple silhouette and comfort-focused design. Supports good posture during long work sessions.",
      price: [199.99, 249.99, 299.99, 349.99],
      image: allImages[18],
      category: "Office",
      featured: false
    },
    {
      name: "Wall Shelf System",
      description: "Modular wall shelf system with clean, minimalist design. Configure to fit your space and storage needs.",
      price: [89.99, 109.99, 129.99, 149.99],
      image: allImages[19],
      category: "Office",
      featured: false
    },
    
    // Bedroom Category
    {
      name: "Platform Bed Frame",
      description: "Low-profile platform bed frame with clean lines. Creates a serene, minimalist sleeping environment.",
      price: [499.99, 599.99, 699.99, 799.99],
      image: allImages[20],
      category: "Bedroom",
      featured: false
    },
    {
      name: "Nightstand",
      description: "Simple nightstand with drawer storage. Perfect proportions for bedside essentials.",
      price: [129.99, 149.99, 169.99, 189.99],
      image: allImages[21],
      category: "Bedroom",
      featured: false
    },
    {
      name: "Wall Mirror",
      description: "Minimalist wall mirror with thin frame. Reflects light to brighten spaces and create a sense of openness.",
      price: [79.99, 99.99, 119.99, 139.99],
      image: allImages[22],
      category: "Bedroom",
      featured: false
    }
  ];
  
  // Generate more products based on templates
  const generatedProducts: Product[] = [...baseProducts];
  let idCounter = baseProducts.length + 1;
  
  const variants = ["", "Round", "Square", "Rectangular", "Oval", "Tall", "Short", "Wide", "Narrow", "Compact", "Large", "Small", "Mini", "Deluxe", "Premium", "Essential", "Modern", "Contemporary", "Nordic", "Scandinavian", "Japanese", "Bamboo", "Ceramic", "Wooden", "Metal", "Glass", "Natural", "Black", "White", "Beige", "Gray"];
  const materials = ["Ceramic", "Oak", "Walnut", "Maple", "Birch", "Teak", "Bamboo", "Rattan", "Glass", "Metal", "Brass", "Copper", "Stainless Steel", "Concrete", "Marble", "Porcelain", "Linen", "Cotton", "Wool", "Leather"];
  const colors = ["Natural", "Black", "White", "Beige", "Gray", "Charcoal", "Ivory", "Walnut", "Oak", "Terracotta", "Sand", "Stone", "Clay", "Sage", "Olive", "Navy", "Slate"];

  // Generate ~100 products total with unique images
  let imageIndex = baseProducts.length;
  while (generatedProducts.length < 100 && imageIndex < allImages.length) {
    // Randomly select a template
    const template = productTemplates[Math.floor(Math.random() * productTemplates.length)];
    
    // Randomly select variants and modifiers
    const variant = variants[Math.floor(Math.random() * variants.length)];
    const material = materials[Math.floor(Math.random() * materials.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    // Create a name variation
    let name = template.name;
    if (variant) {
      name = variant + " " + name;
    }
    if (Math.random() > 0.5) {
      name = name + " in " + color;
    }
    if (Math.random() > 0.7) {
      name = material + " " + name;
    }
    
    // Create description variation
    let description = template.description;
    if (Math.random() > 0.5) {
      description = `Crafted from high-quality ${material.toLowerCase()}. ` + description;
    }
    if (Math.random() > 0.7) {
      description = description + ` Available in ${color.toLowerCase()} finish.`;
    }
    
    // Select a random price from the template price range and convert to INR
    const price = Math.round(template.price[Math.floor(Math.random() * template.price.length)] * usdToInrRate);
    
    // Generate random rating, reviews, and stock
    const rating = 3.5 + Math.random() * 1.5; // Between 3.5 and 5.0
    const reviews = Math.floor(Math.random() * 100) + 5; // Between 5 and 104
    const stock = Math.floor(Math.random() * 30) + 1; // Between 1 and 30
    
    // Create the product with a unique image
    const newProduct: Product = {
      id: idCounter.toString(),
      name,
      description,
      price,
      image: allImages[imageIndex], // Use a unique image
      category: template.category,
      featured: Math.random() < 0.1, // 10% chance of being featured
      rating: parseFloat(rating.toFixed(1)),
      reviews,
      stock
    };
    
    generatedProducts.push(newProduct);
    idCounter++;
    imageIndex++;
  }
  
  return generatedProducts;
};

// Generate the product catalog
export const products: Product[] = generateProducts();

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
  return products.filter(product => product.featured).slice(0, 8);
};

// Helper function to get products by category
export const getProductsByCategory = (category: string): Product[] => {
  if (category === "all") {
    return products;
  }
  return products.filter(product => product.category.toLowerCase() === category.toLowerCase());
};
