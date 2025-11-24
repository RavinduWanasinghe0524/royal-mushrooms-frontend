'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ShoppingCart, Sparkles, Heart, Star, Check, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  realImage?: string;
  premium?: boolean;
  category: string;
  rating: number;
  benefits: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: 'Forest Shiitake',
    description: 'Rich, umami flavor with meaty texture. Perfect for stir-fries, soups, and Asian cuisine. Packed with vitamin D and antioxidants.',
    price: 899,
    image: 'https://images.unsplash.com/photo-1602529480436-d0ca3d6e3a5a?w=800&q=80',
    category: 'Culinary',
    rating: 4.9,
    benefits: ['Rich in Vitamin D', 'Immune Support', 'Heart Health'],
  },
  {
    id: 2,
    name: 'Pearl Oyster',
    description: 'Delicate, velvety texture with subtle seafood notes. Ideal for sautéing, grilling, or as a plant-based protein alternative.',
    price: 749,
    image: 'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=800&q=80',
    category: 'Culinary',
    rating: 4.8,
    benefits: ['High Protein', 'Low Calorie', 'Antioxidants'],
  },
  {
    id: 3,
    name: 'Giant Portobello',
    description: 'Robust, steak-like texture perfect for grilling. Excellent as a burger substitute or stuffed for an elegant main course.',
    price: 999,
    image: 'https://images.unsplash.com/photo-1565281887431-89d6c6c7a321?w=800&q=80',
    category: 'Culinary',
    rating: 4.7,
    benefits: ['Meaty Texture', 'B Vitamins', 'Minerals'],
  },
  {
    id: 4,
    name: "Royal Lion's Mane",
    description: "Unique seafood-like texture with incredible cognitive benefits. Known as the 'smart mushroom' for brain health support.",
    price: 1299,
    image: 'https://images.unsplash.com/photo-1617465124221-0d0fd6dc2c7a?w=800&q=80',
    premium: true,
    category: 'Medicinal',
    rating: 5.0,
    benefits: ['Brain Health', 'Focus & Memory', 'Nerve Support'],
  },
  {
    id: 5,
    name: 'Golden Chanterelles',
    description: 'Fruity aroma with peppery notes. A gourmet treasure for risottos, pasta, and fine dining. Rare and seasonal.',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=800&q=80',
    premium: true,
    category: 'Gourmet',
    rating: 4.9,
    benefits: ['Vitamin A', 'Potassium', 'Unique Flavor'],
  },
  {
    id: 6,
    name: 'Black Truffle',
    description: 'The pinnacle of luxury fungi. Intense, earthy aroma that transforms any dish. Exclusively for premium members.',
    price: 4999,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80',
    premium: true,
    category: 'Luxury',
    rating: 5.0,
    benefits: ['Luxury Flavor', 'Aromatic', 'Rare & Exclusive'],
  },
];

export default function ProductGrid() {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Culinary', 'Medicinal', 'Gourmet', 'Luxury'];

  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <section className="py-32 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-block mb-4"
          >
            <span className="text-6xl filter drop-shadow-md">🍄</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-royal-green">
            Our <span className="text-royal-gold italic">Premium</span> Collection
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Handpicked varieties from sustainable farms. Each mushroom is harvested at peak freshness 
            to deliver exceptional flavor and maximum nutritional benefits.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                filter === category
                  ? 'bg-royal-green text-white shadow-lg shadow-royal-green/20'
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-royal-green'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Product Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    toast.success(
      <div className="flex items-center space-x-2">
        <span className="text-2xl">🎉</span>
        <span><strong>{product.name}</strong> added to cart!</span>
      </div>,
      { 
        duration: 3000,
        style: {
          background: '#1a472a',
          color: '#fff',
        }
      }
    );
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, type: "spring" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="card-royal rounded-3xl p-6 group cursor-pointer relative overflow-hidden h-full flex flex-col bg-white"
    >
      {/* Premium Badge */}
      {product.premium && (
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
          className="absolute top-4 right-4 z-20 flex items-center space-x-1 bg-royal-gold px-3 py-1.5 rounded-full shadow-lg"
        >
          <Sparkles className="w-3 h-3 text-white" />
          <span className="text-[10px] font-black text-white tracking-wider">PREMIUM</span>
        </motion.div>
      )}

      {/* Favorite Button */}
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={(e) => {
          e.stopPropagation();
          setIsFavorite(!isFavorite);
        }}
        className="absolute top-4 left-4 z-20 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-sm"
      >
        <Heart 
          className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'} transition-colors`}
        />
      </motion.button>

      {/* Product Image */}
      <motion.div
        animate={{ 
          scale: isHovered ? 1.05 : 1,
          y: isHovered ? -5 : 0
        }}
        transition={{ duration: 0.4 }}
        className="relative w-full h-64 mb-6 rounded-2xl overflow-hidden shadow-md"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Rating Badge */}
        <div className="absolute bottom-3 left-3 z-20 flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg shadow-sm">
          <Star className="w-3 h-3 fill-royal-gold text-royal-gold" />
          <span className="text-xs font-bold text-royal-green">{product.rating}</span>
        </div>
      </motion.div>

      {/* Product Info */}
      <div className="space-y-4 relative flex-1 flex flex-col">
        <div>
          <div className="text-xs font-bold text-royal-gold mb-2 uppercase tracking-wider flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-royal-gold" />
            {product.category}
          </div>
          <h3 className="text-2xl font-serif font-bold text-royal-green mb-2 group-hover:text-royal-gold transition-colors">
            {product.name}
          </h3>
        </div>
        
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
          {product.description}
        </p>

        {/* Benefits */}
        <div className="flex flex-wrap gap-2 pt-2">
          {product.benefits.slice(0, 2).map((benefit, i) => (
            <span
              key={i}
              className="text-[10px] px-2 py-1 bg-royal-green/5 text-royal-green rounded-md font-bold"
            >
              {benefit}
            </span>
          ))}
        </div>

        <div className="flex-1" />

        {/* Price and Action */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-4">
          <div>
            <span className="text-xs text-gray-400 block mb-0.5">Price per 250g</span>
            <p className="text-2xl font-bold text-royal-green">
              <span className="text-sm text-gray-400 mr-1">LKR</span>
              {product.price}
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            className="p-3 bg-royal-green text-white rounded-xl hover:bg-royal-gold transition-colors shadow-lg group/btn"
          >
            <ShoppingCart className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
