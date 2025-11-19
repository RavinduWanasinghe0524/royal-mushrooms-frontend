'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, Sparkles } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  premium?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Forest Shiitake',
    description: 'Rich, umami flavor. Perfect for stir-fries and hearty soups. Hand-picked from sustainable farms.',
    price: 899,
    image: '🍄',
  },
  {
    id: 2,
    name: 'Pearl Oyster Mushrooms',
    description: 'Delicate, tender texture with a subtle, savory taste. Ideal for sautéing or as a seafood alternative.',
    price: 749,
    image: '🍄',
  },
  {
    id: 3,
    name: 'Giant Portobello Caps',
    description: 'Meaty, robust flavor. Excellent grilled, roasted, or stuffed as a vegetarian main course.',
    price: 999,
    image: '🍄',
  },
  {
    id: 4,
    name: "Royal Lion's Mane",
    description: "Unique, crab-like texture with a mild, sweet flavor. Known for cognitive benefits.",
    price: 1299,
    image: '🦁',
  },
  {
    id: 5,
    name: 'Golden Chanterelles',
    description: 'Fruity aroma and peppery undertones. A gourmet favorite for risottos and pasta dishes.',
    price: 1499,
    image: '⭐',
  },
  {
    id: 6,
    name: 'Premium Black Truffle',
    description: 'The crown jewel of fungi. Exquisite flavor and aroma. Available only to premium members.',
    price: 4999,
    image: '💎',
    premium: true,
  },
];

export default function ProductGrid() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gray-300">Our </span>
            <span className="text-gradient glow-text">Exquisite </span>
            <span className="text-gray-300">Selection</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Each mushroom is carefully selected and harvested at peak freshness to deliver the ultimate culinary experience.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="cyber-card rounded-2xl p-6 group cursor-pointer"
    >
      {/* Premium Badge */}
      {product.premium && (
        <div className="absolute top-4 right-4 flex items-center space-x-1 bg-gradient-to-r from-yellow-400 to-orange-500 px-3 py-1 rounded-full">
          <Sparkles className="w-4 h-4 text-white" />
          <span className="text-xs font-bold text-white">PREMIUM</span>
        </div>
      )}

      {/* Product Image/Icon */}
      <motion.div
        animate={{ 
          scale: isHovered ? 1.1 : 1,
          rotate: isHovered ? 5 : 0 
        }}
        className="text-8xl mb-6 text-center"
      >
        {product.image}
      </motion.div>

      {/* Product Info */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
          {product.name}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed">
          {product.description}
        </p>

        {/* Price and Action */}
        <div className="flex items-center justify-between pt-4 border-t border-cyan-500/20">
          <div>
            <span className="text-sm text-gray-500">Starting at</span>
            <p className="text-2xl font-bold text-gradient">
              LKR {product.price}
            </p>
            <span className="text-xs text-gray-500">per 250g</span>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
          >
            <ShoppingCart className="w-6 h-6 text-white" />
          </motion.button>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl pointer-events-none"
      />
    </motion.div>
  );
}
