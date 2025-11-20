'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ShoppingCart, Sparkles, Heart, Star, Check } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  realImage?: string; // For real mushroom photos
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
    <section className="py-32 bg-gradient-to-b from-orange-50/30 via-white to-green-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-orange-300 rounded-full opacity-15 blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-green-300 rounded-full opacity-15 blur-3xl"
          animate={{ scale: [1, 1.3, 1], x: [0, -50, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-yellow-300 rounded-full opacity-10 blur-3xl"
          animate={{ scale: [1, 1.4, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

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
            <span className="text-6xl">🍄</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900">
            Our <span className="text-gradient-nature">Premium</span> Collection
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
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                filter === category
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-300/50'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-orange-300 hover:bg-orange-50'
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
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-100, 100], [5, -5]);
  const rotateY = useTransform(mouseX, [-100, 100], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleAddToCart = () => {
    toast.success(
      <div className="flex items-center space-x-2">
        <span className="text-2xl">🎉</span>
        <span><strong>{product.name}</strong> added to cart!</span>
      </div>,
      { duration: 3000 }
    );
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, type: "spring" }}
      onMouseMove={handleMouseMove}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
      }}
      style={{ 
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: "preserve-3d"
      }}
      className="card rounded-2xl p-6 group cursor-pointer relative overflow-hidden"
    >
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-amber-500/0 group-hover:from-orange-500/5 group-hover:to-amber-500/5 transition-all duration-500"
        style={{ transform: "translateZ(0)" }}
      />

      {/* Premium Badge */}
      {product.premium && (
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
          className="absolute top-4 right-4 z-20 flex items-center space-x-1 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 px-3 py-1.5 rounded-full shadow-lg"
        >
          <Sparkles className="w-4 h-4 text-white animate-pulse" />
          <span className="text-xs font-black text-white">PREMIUM</span>
        </motion.div>
      )}

      {/* Favorite Button */}
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsFavorite(!isFavorite)}
        className="absolute top-4 left-4 z-20 p-2 glass rounded-full"
      >
        <Heart 
          className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'} transition-colors`}
        />
      </motion.button>

      {/* Rating */}
      <div className="absolute top-16 left-4 z-20 flex items-center space-x-1 glass px-2 py-1 rounded-full">
        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
        <span className="text-xs font-bold text-gray-700">{product.rating}</span>
      </div>

      {/* Product Image */}
      <motion.div
        animate={{ 
          scale: isHovered ? 1.1 : 1,
          rotateZ: isHovered ? [0, -2, 2, 0] : 0
        }}
        transition={{ duration: 0.5 }}
        className="relative w-full h-64 mb-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl overflow-hidden"
        style={{ transform: "translateZ(20px)" }}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Use real image when available:
        <Image
          src={product.realImage || product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
        */}
        
        {/* Shine effect */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 1 }}
          />
        )}
      </motion.div>

      {/* Product Info */}
      <div className="space-y-4 relative" style={{ transform: "translateZ(10px)" }}>
        <div>
          <div className="text-xs font-semibold text-orange-600 mb-1 uppercase tracking-wider">
            {product.category}
          </div>
          <h3 className="text-2xl font-black text-gray-900 mb-2">
            {product.name}
          </h3>
        </div>
        
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {product.description}
        </p>

        {/* Benefits */}
        <div className="flex flex-wrap gap-2">
          {product.benefits.map((benefit, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="text-xs px-2 py-1 bg-orange-100 text-orange-700 rounded-full font-medium flex items-center space-x-1"
            >
              <Check className="w-3 h-3" />
              <span>{benefit}</span>
            </motion.span>
          ))}
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <span className="text-xs text-gray-500 block">Starting at</span>
            <p className="text-3xl font-black text-gradient">
              LKR {product.price}
            </p>
            <span className="text-xs text-gray-500">per 250g</span>
          </div>

          <motion.button
            whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
            whileTap={{ scale: 0.9 }}
            onClick={handleAddToCart}
            className="p-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl hover:shadow-2xl hover:shadow-orange-300/50 transition-all group relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
              animate={{ x: isHovered ? ["-100%", "100%"] : "-100%" }}
              transition={{ duration: 0.8, repeat: isHovered ? Infinity : 0, repeatDelay: 0.5 }}
            />
            <ShoppingCart className="w-6 h-6 text-white relative z-10" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
