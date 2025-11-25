'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Eye, Star, Sparkles } from 'lucide-react';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: "Lion's Mane",
    category: 'medicinal',
    price: 24.99,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1617564894976-1f69f29f3784?w=800&h=800&fit=crop',
    description: 'Boost cognitive function and mental clarity',
    benefits: ['Brain Health', 'Focus', 'Nerve Support'],
  },
  {
    id: 2,
    name: 'Shiitake',
    category: 'culinary',
    price: 18.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1598105893725-99c29e0b8e4e?w=800&h=800&fit=crop',
    description: 'Rich umami flavor for gourmet cooking',
    benefits: ['Immune Support', 'Heart Health', 'Vitamin D'],
  },
  {
    id: 3,
    name: 'Oyster Mushroom',
    category: 'culinary',
    price: 16.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1603456797018-5a7f7d6a1f4e?w=800&h=800&fit=crop',
    description: 'Delicate texture perfect for any dish',
    benefits: ['Antioxidants', 'Protein Rich', 'Low Calorie'],
  },
  {
    id: 4,
    name: 'Reishi',
    category: 'medicinal',
    price: 29.99,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1612624662364-fff6bbb36e97?w=800&h=800&fit=crop',
    description: 'Ancient remedy for longevity and vitality',
    benefits: ['Immunity', 'Stress Relief', 'Sleep Quality'],
  },
  {
    id: 5,
    name: 'Chaga',
    category: 'medicinal',
    price: 32.99,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=800&h=800&fit=crop',
    description: 'Powerful antioxidant superfood',
    benefits: ['Anti-Aging', 'Immune Boost', 'Energy'],
  },
  {
    id: 6,
    name: 'Turkey Tail',
    category: 'medicinal',
    price: 26.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1609830536997-c3c329784012?w=800&h=800&fit=crop',
    description: 'Traditional immune system support',
    benefits: ['Gut Health', 'Immunity', 'Recovery'],
  },
];

const categories = ['all', 'culinary', 'medicinal'];

export default function ProductGrid() {
  const [filter, setFilter] = useState('all');

  const filteredProducts =
    filter === 'all' ? products : products.filter((p) => p.category === filter);

  return (
    <section id="products" className="py-24 bg-[#faf8f3] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#a8b899]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a4d2e]/10 text-[#1a4d2e] text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 text-[#d4af37]" />
            Premium Selection
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#1a4d2e] mb-6">
            Our Exquisite <span className="text-gradient-gold">Collection</span>
          </h2>
          <p className="text-xl text-[#4a3428]/70 max-w-2xl mx-auto">
            Hand-selected premium mushrooms cultivated with care for exceptional quality and potency
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-forest text-white shadow-premium'
                  : 'bg-white text-[#4a3428] hover:bg-[#1a4d2e]/10 shadow-md'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function ProductCard({ product, index }: { product: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-premium transition-all duration-500 hover-lift"
    >
      {/* Image Container */}
      <div className="relative h-72 overflow-hidden bg-gradient-to-br from-[#faf8f3] to-[#e8e5df]">
        <motion.div
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Overlay on Hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#1a4d2e]/90 flex items-center justify-center gap-4"
            >
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-[#1a4d2e] transition-all"
              >
                <Eye className="w-5 h-5" />
              </motion.button>
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="w-12 h-12 rounded-full bg-[#d4af37] flex items-center justify-center text-[#1a4d2e] hover:bg-white transition-all shadow-gold"
              >
                <ShoppingCart className="w-5 h-5" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Category Badge */}
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full glass-dark text-white text-xs font-medium">
          {product.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(product.rating)
                  ? 'fill-[#d4af37] text-[#d4af37]'
                  : 'text-gray-300'
              }`}
            />
          ))}
          <span className="text-sm text-[#4a3428]/60 ml-2">{product.rating}</span>
        </div>

        {/* Name & Price */}
        <h3 className="text-2xl font-bold text-[#1a4d2e] mb-2">
          {product.name}
        </h3>
        <p className="text-[#4a3428]/70 mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Benefits */}
        <div className="flex flex-wrap gap-2 mb-4">
          {product.benefits.slice(0, 3).map((benefit: string) => (
            <span
              key={benefit}
              className="px-3 py-1 bg-[#a8b899]/20 text-[#1a4d2e] text-xs rounded-full font-medium"
            >
              {benefit}
            </span>
          ))}
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-[#1a4d2e]/10">
          <div>
            <span className="text-3xl font-bold text-[#1a4d2e]">
              ${product.price}
            </span>
            <span className="text-sm text-[#4a3428]/60 ml-1">/pack</span>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-premium px-6 py-3 bg-gradient-gold text-[#1a4d2e] font-bold rounded-full shadow-gold hover:shadow-2xl transition-all"
          >
            Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
