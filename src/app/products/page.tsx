'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Filter } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Image from 'next/image';

const allProducts = [
  {
    id: 1,
    name: 'Forest Shiitake',
    description: 'Rich, umami flavor. Perfect for stir-fries and hearty soups.',
    price: 899,
    image: 'https://images.unsplash.com/photo-1598105893725-99c29e0b8e4e?w=400&h=400&fit=crop',
    category: 'Exotic',
    rating: 4.8,
  },
  {
    id: 2,
    name: 'Pearl Oyster Mushrooms',
    description: 'Delicate, tender texture with a subtle, savory taste.',
    price: 749,
    image: 'https://images.unsplash.com/photo-1603456797018-5a7f7d6a1f4e?w=400&h=400&fit=crop',
    category: 'Gourmet',
    rating: 4.6,
  },
  {
    id: 3,
    name: 'Giant Portobello Caps',
    description: 'Meaty, robust flavor. Excellent grilled or roasted.',
    price: 999,
    image: 'https://images.unsplash.com/photo-1612428978260-2b902f90b9f3?w=400&h=400&fit=crop',
    category: 'Classic',
    rating: 4.9,
  },
  {
    id: 4,
    name: "Royal Lion's Mane",
    description: 'Unique texture with cognitive benefits.',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1617564894976-1f69f29f3784?w=400&h=400&fit=crop',
    category: 'Premium',
    rating: 5.0,
  },
  {
    id: 5,
    name: 'Golden Chanterelles',
    description: 'Fruity aroma and peppery undertones.',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=400&h=400&fit=crop',
    category: 'Premium',
    rating: 4.9,
  },
  {
    id: 6,
    name: 'Premium Black Truffle',
    description: 'The crown jewel of fungi.',
    price: 4999,
    image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=400&h=400&fit=crop',
    category: 'Luxury',
    rating: 5.0,
  },
  {
    id: 7,
    name: 'White Button Mushrooms',
    description: 'Versatile and mild-flavored classic.',
    price: 499,
    image: 'https://images.unsplash.com/photo-1603456797044-63f3b5d3e00e?w=400&h=400&fit=crop',
    category: 'Classic',
    rating: 4.3,
  },
  {
    id: 8,
    name: 'Crimini Mushrooms',
    description: 'Baby portobellos with rich flavor.',
    price: 599,
    image: 'https://images.unsplash.com/photo-1608112339946-436d0e6e9728?w=400&h=400&fit=crop',
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
    <div className="min-h-screen bg-gradient-to-b from-[#faf8f3] via-white to-[#c9d4bc]/30">
      <Navbar />
      
      <main className="pt-32 pb-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-[#d4af37]/20 rounded-full opacity-15 blur-3xl"
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-[#1a4d2e]/20 rounded-full opacity-15 blur-3xl"
            animate={{ scale: [1, 1.3, 1], x: [0, -50, 0] }}
            transition={{ duration: 12, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-80 h-80 bg-[#a8b899]/20 rounded-full opacity-10 blur-3xl"
            animate={{ scale: [1, 1.4, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 15, repeat: Infinity }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-gradient-nature">Our Collection</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Browse our complete selection of premium mushrooms
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex items-center justify-center space-x-4 mb-12 flex-wrap gap-4">
            <div className="flex items-center space-x-2 text-[#1a4d2e]">
              <Filter className="w-5 h-5" />
              <span className="font-semibold">Filter:</span>
            </div>
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === cat
                    ? 'bg-gradient-gold text-[#1a4d2e] shadow-lg shadow-[#d4af37]/50'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-[#d4af37] hover:bg-[#faf8f3]'
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
      className="glass rounded-2xl p-6 group border border-[#a8b899]/30 hover:border-[#d4af37] transition-all hover:shadow-xl hover:shadow-[#d4af37]/20"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative w-full h-48 mb-4 bg-gradient-to-br from-[#faf8f3] to-[#f4e4b0] rounded-xl overflow-hidden"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover hover:scale-110 transition-transform duration-500"
        />
      </motion.div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs px-3 py-1 bg-[#a8b899]/20 rounded-full text-[#1a4d2e] font-semibold">
            {product.category}
          </span>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm text-gray-600 font-medium">{product.rating}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#1a4d2e] transition-colors">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm">{product.description}</p>

        <div className="flex items-center justify-between pt-4">
          <div>
            <p className="text-2xl font-bold text-gradient-nature">LKR {product.price}</p>
            <span className="text-xs text-gray-500">per 250g</span>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            className="p-3 bg-gradient-gold rounded-full shadow-lg shadow-[#d4af37]/50"
          >
            <ShoppingCart className="w-5 h-5 text-white" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
