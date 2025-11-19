'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, Sparkles } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Image from 'next/image';

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
    image: '/images/shiitake.svg',
  },
  {
    id: 2,
    name: 'Pearl Oyster Mushrooms',
    description: 'Delicate, tender texture with a subtle, savory taste. Ideal for sautéing or as a seafood alternative.',
    price: 749,
    image: '/images/oyster.svg',
  },
  {
    id: 3,
    name: 'Giant Portobello Caps',
    description: 'Meaty, robust flavor. Excellent grilled, roasted, or stuffed as a vegetarian main course.',
    price: 999,
    image: '/images/portobello.svg',
  },
  {
    id: 4,
    name: "Royal Lion's Mane",
    description: "Unique, crab-like texture with a mild, sweet flavor. Known for cognitive benefits.",
    price: 1299,
    image: '/images/shiitake.svg',
  },
  {
    id: 5,
    name: 'Golden Chanterelles',
    description: 'Fruity aroma and peppery undertones. A gourmet favorite for risottos and pasta dishes.',
    price: 1499,
    image: '/images/oyster.svg',
  },
  {
    id: 6,
    name: 'Premium Black Truffle',
    description: 'The crown jewel of fungi. Exquisite flavor and aroma. Available only to premium members.',
    price: 4999,
    image: '/images/portobello.svg',
    premium: true,
  },
];

export default function ProductGrid() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Our <span className="text-gradient">Premium</span> Selection
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
      className="card rounded-xl p-6 group cursor-pointer bg-white"
    >
      {/* Premium Badge */}
      {product.premium && (
        <div className="absolute top-4 right-4 flex items-center space-x-1 bg-gradient-to-r from-emerald-500 to-green-500 px-3 py-1 rounded-full">
          <Sparkles className="w-4 h-4 text-white" />
          <span className="text-xs font-bold text-white">PREMIUM</span>
        </div>
      )}

      {/* Product Image */}
      <motion.div
        animate={{ 
          scale: isHovered ? 1.05 : 1,
        }}
        className="relative w-full h-48 mb-6"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Product Info */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-900">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed">
          {product.description}
        </p>

        {/* Price and Action */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
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
            className="p-3 bg-gradient-to-r from-emerald-600 to-green-500 rounded-full hover:shadow-lg transition-all"
          >
            <ShoppingCart className="w-6 h-6 text-white" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
