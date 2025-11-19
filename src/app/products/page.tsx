'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Filter } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';

const allProducts = [
  {
    id: 1,
    name: 'Forest Shiitake',
    description: 'Rich, umami flavor. Perfect for stir-fries and hearty soups.',
    price: 899,
    image: '🍄',
    category: 'Exotic',
    rating: 4.8,
  },
  {
    id: 2,
    name: 'Pearl Oyster Mushrooms',
    description: 'Delicate, tender texture with a subtle, savory taste.',
    price: 749,
    image: '🍄',
    category: 'Gourmet',
    rating: 4.6,
  },
  {
    id: 3,
    name: 'Giant Portobello Caps',
    description: 'Meaty, robust flavor. Excellent grilled or roasted.',
    price: 999,
    image: '🍄',
    category: 'Classic',
    rating: 4.9,
  },
  {
    id: 4,
    name: "Royal Lion's Mane",
    description: 'Unique texture with cognitive benefits.',
    price: 1299,
    image: '🦁',
    category: 'Premium',
    rating: 5.0,
  },
  {
    id: 5,
    name: 'Golden Chanterelles',
    description: 'Fruity aroma and peppery undertones.',
    price: 1499,
    image: '⭐',
    category: 'Premium',
    rating: 4.9,
  },
  {
    id: 6,
    name: 'Premium Black Truffle',
    description: 'The crown jewel of fungi.',
    price: 4999,
    image: '💎',
    category: 'Luxury',
    rating: 5.0,
  },
  {
    id: 7,
    name: 'White Button Mushrooms',
    description: 'Versatile and mild-flavored classic.',
    price: 499,
    image: '🍄',
    category: 'Classic',
    rating: 4.3,
  },
  {
    id: 8,
    name: 'Crimini Mushrooms',
    description: 'Baby portobellos with rich flavor.',
    price: 599,
    image: '🍄',
    category: 'Classic',
    rating: 4.5,
  },
];

export default function ProductsPage() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Classic', 'Gourmet', 'Exotic', 'Premium', 'Luxury'];

  const filteredProducts = filter === 'All' 
    ? allProducts 
    : allProducts.filter(p => p.category === filter);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient glow-text">Our Collection</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Browse our complete selection of premium mushrooms
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex items-center justify-center space-x-4 mb-12 flex-wrap gap-4">
            <Filter className="w-5 h-5 text-cyan-400" />
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                    : 'glass text-gray-300 hover:text-white'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function ProductCard({ product, index }: { product: any; index: number }) {
  const handleAddToCart = () => {
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="cyber-card rounded-2xl p-6 group"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="text-6xl text-center mb-4"
      >
        {product.image}
      </motion.div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs px-3 py-1 glass rounded-full text-cyan-400">
            {product.category}
          </span>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm text-gray-400">{product.rating}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
          {product.name}
        </h3>
        
        <p className="text-gray-400 text-sm">{product.description}</p>

        <div className="flex items-center justify-between pt-4">
          <div>
            <p className="text-2xl font-bold text-gradient">LKR {product.price}</p>
            <span className="text-xs text-gray-500">per 250g</span>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
          >
            <ShoppingCart className="w-5 h-5 text-white" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
