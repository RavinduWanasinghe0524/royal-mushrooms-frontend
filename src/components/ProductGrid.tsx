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
    image: 'https://images.unsplash.com/photo-1617564894976-1f69f29f3784?q=80&w=1000&auto=format&fit=crop',
    description: 'Boost cognitive function and mental clarity',
    benefits: ['Brain Health', 'Focus', 'Nerve Support'],
  },
  {
    id: 2,
    name: 'Shiitake',
    category: 'culinary',
    price: 18.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1598105893725-99c29e0b8e4e?q=80&w=1000&auto=format&fit=crop',
    description: 'Rich umami flavor for gourmet cooking',
    benefits: ['Immune Support', 'Heart Health', 'Vitamin D'],
  },
  {
    id: 3,
    name: 'Oyster Mushroom',
    category: 'culinary',
    price: 16.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1603456797018-5a7f7d6a1f4e?q=80&w=1000&auto=format&fit=crop',
    description: 'Delicate texture perfect for any dish',
    benefits: ['Antioxidants', 'Protein Rich', 'Low Calorie'],
  },
  {
    id: 4,
    name: 'Reishi',
    category: 'medicinal',
    price: 29.99,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1612624662364-fff6bbb36e97?q=80&w=1000&auto=format&fit=crop',
    description: 'Ancient remedy for longevity and vitality',
    benefits: ['Immunity', 'Stress Relief', 'Sleep Quality'],
  },
  {
    id: 5,
    name: 'Chaga',
    category: 'medicinal',
    price: 32.99,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1604958321289-6b0d1f528697?q=80&w=1000&auto=format&fit=crop',
    description: 'Powerful antioxidant superfood',
    benefits: ['Anti-Aging', 'Immune Boost', 'Energy'],
  },
  {
    id: 6,
    name: 'Turkey Tail',
    category: 'medicinal',
    price: 26.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1609830536997-c3c329784012?q=80&w=1000&auto=format&fit=crop',
    description: 'Traditional immune system support',
    benefits: ['Gut Health', 'Immunity', 'Recovery'],
  },
  {
    id: 7,
    name: 'Cordyceps',
    category: 'medicinal',
    price: 34.99,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1625827928642-b7ed9f42e430?q=80&w=1000&auto=format&fit=crop',
    description: 'Natural energy and athletic performance',
    benefits: ['Energy', 'Stamina', 'Vitality'],
  },
  {
    id: 8,
    name: 'Maitake',
    category: 'culinary',
    price: 22.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1629833831812-be817e33d3e3?q=80&w=1000&auto=format&fit=crop',
    description: 'Hen of the Woods - immune supporting delicacy',
    benefits: ['Immunity', 'Blood Sugar', 'Flavor'],
  },
  {
    id: 9,
    name: 'Portobello',
    category: 'culinary',
    price: 14.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1606491048064-a49c83d6e521?q=80&w=1000&auto=format&fit=crop',
    description: 'Meaty texture perfect for grilling',
    benefits: ['Protein', 'B Vitamins', 'Versatile'],
  },
];

const categories = ['all', 'culinary', 'medicinal'];

export default function ProductGrid() {
  const [filter, setFilter] = useState('all');

  const filteredProducts =
    filter === 'all' ? products : products.filter((p) => p.category === filter);

  return (
    <section id="products" className="py-24 bg-[#FFF8F0] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8A87C]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A8C69F]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2D5F4C]/10 text-[#2D5F4C] text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 text-[#E8A87C]" />
            Premium Selection
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D5F4C] mb-6">
            Our <span className="text-gradient-accent">Exquisite Collection</span>
          </h2>
          <p className="text-lg text-[#6B7B75] max-w-2xl mx-auto">
            Hand-selected premium mushrooms cultivated with care for exceptional quality
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-primary text-white shadow-medium'
                  : 'bg-white text-[#2D5F4C] hover:shadow-soft shadow-soft'
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
            transition={{ duration: 0.3 }}
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

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group bg-white rounded-2xl overflow-hidden shadow-soft hover-lift"
    >
      {/* Image Container */}
      <div className="relative h-72 overflow-hidden bg-gradient-warm">
        <motion.div
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full h-full"
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
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-primary/90 backdrop-blur-sm flex items-center justify-center gap-3"
            >
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, type: "spring" }}
                className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#2D5F4C] transition-all"
              >
                <Eye className="w-5 h-5" />
              </motion.button>
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.15, type: "spring" }}
                className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center text-white hover:scale-110 transition-transform shadow-accent"
              >
                <ShoppingCart className="w-5 h-5" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Category Badge */}
        <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#2D5F4C] text-xs font-semibold uppercase shadow-soft">
          {product.category}
        </div>

        {/* Rating Badge */}
        <div className="absolute top-4 left-4 px-2.5 py-1.5 rounded-full bg-[#E8A87C] text-white text-xs font-semibold flex items-center gap-1 shadow-soft">
          <Star className="w-3.5 h-3.5 fill-white" />
          {product.rating}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-[#2D5F4C] mb-2 group-hover:text-[#E8A87C] transition-colors">
          {product.name}
        </h3>
        <p className="text-[#6B7B75] mb-4 line-clamp-2 text-sm leading-relaxed">
          {product.description}
        </p>

        {/* Benefits */}
        <div className="flex flex-wrap gap-2 mb-5">
          {product.benefits.map((benefit: string) => (
            <span
              key={benefit}
              className="px-3 py-1 bg-[#A8C69F]/20 text-[#2D5F4C] text-xs rounded-full font-medium"
            >
              {benefit}
            </span>
          ))}
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <span className="text-2xl font-bold text-[#2D5F4C]">
              ${product.price}
            </span>
            <span className="text-sm text-[#6B7B75] ml-1">/pack</span>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2.5 bg-gradient-accent text-white font-semibold rounded-full shadow-soft hover:shadow-accent transition-all flex items-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
