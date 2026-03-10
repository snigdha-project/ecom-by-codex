export type Product = {
  id: number;
  slug: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  description: string;
  stock: 'in-stock' | 'out-of-stock';
  featured?: boolean;
};

export const products: Product[] = [
  { id: 1, slug: 'fiddle-leaf-fig', name: 'Fiddle Leaf Fig', category: 'Indoor Plants', price: 749, rating: 4.8, image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735', description: 'Statement indoor plant with glossy leaves.', stock: 'in-stock', featured: true },
  { id: 2, slug: 'aloe-vera', name: 'Aloe Vera', category: 'Beginner Plants', price: 349, rating: 4.7, image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115', description: 'Low-maintenance medicinal succulent.', stock: 'in-stock', featured: true },
  { id: 3, slug: 'snake-plant', name: 'Snake Plant', category: 'Indoor Plants', price: 499, rating: 4.9, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411', description: 'Air-purifying resilient houseplant.', stock: 'in-stock' },
  { id: 4, slug: 'soil-scoop', name: 'Garden Soil Scoop', category: 'Accessories', price: 199, rating: 4.6, image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b', description: 'Ergonomic scoop for repotting and soil mixing.', stock: 'in-stock' },
  { id: 5, slug: 'hanging-planter', name: 'Hanging Planter', category: 'Accessories', price: 299, rating: 4.5, image: 'https://images.unsplash.com/photo-1463320726281-696a485928c7', description: 'Ceramic hanging planter for modern homes.', stock: 'out-of-stock' },
  { id: 6, slug: 'cactus-mini', name: 'Mini Cactus', category: 'Outdoor Plants', price: 179, rating: 4.4, image: 'https://images.unsplash.com/photo-1509423350716-97f2360af9e4', description: 'Tiny drought-resistant cactus in clay pot.', stock: 'in-stock' }
];

export const blogs = [
  {
    slug: 'healthy-indoor-plants',
    title: '10 Tips for Healthy Indoor Plants',
    excerpt: 'Make your indoor jungle thrive with light, water, and soil basics.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b',
    body: 'Indoor plants need consistency more than intensity. Water deeply, provide bright indirect light, and rotate pots weekly. Use breathable potting mix and feed once per month in active growth season.'
  },
  {
    slug: 'vegetable-balcony-garden',
    title: 'How to Start a Vegetable Balcony Garden',
    excerpt: 'From containers to compost, everything you need for your first harvest.',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399',
    body: 'Choose 4-6 hour sunlight spots. Start with spinach, chilies, and tomatoes. Use deep containers with drainage and refresh compost every few weeks.'
  }
];
