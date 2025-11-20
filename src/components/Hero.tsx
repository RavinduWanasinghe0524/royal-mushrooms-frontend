'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Leaf, Sparkles, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Vibrant Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-emerald-50 to-orange-50">
        <div className="absolute inset-0 bg-nature-pattern" />
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0"
        >
          {/* Colorful floating particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-3 h-3 rounded-full ${
                i % 4 === 0 ? 'bg-orange-400' :
                i % 4 === 1 ? 'bg-green-400' :
                i % 4 === 2 ? 'bg-yellow-400' :
                'bg-emerald-400'
              } opacity-30`}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 100 - 50, 0],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-amber-100 px-5 py-3 rounded-full shadow-lg border-2 border-orange-200"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Leaf className="w-5 h-5 text-orange-600" />
              </motion.div>
              <span className="text-sm font-semibold text-orange-800">100% Organic & Fresh</span>
              <Sparkles className="w-4 h-4 text-yellow-500" />
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight"
            >
              Discover
              <motion.span 
                className="block text-gradient-nature"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: "200% auto" }}
              >
                Royal Mushrooms
              </motion.span>
              <span className="block bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Nature's Finest</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl"
            >
              Experience the extraordinary world of premium mushrooms. 
              Hand-picked, sustainably grown, and delivered fresh to your door. 
              From exotic varieties to culinary classics.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link href="/products">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(251, 146, 60, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-white rounded-2xl font-bold shadow-2xl transition-all flex items-center justify-center space-x-3 group relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                  <span className="relative z-10">Explore Collection</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>

              <Link href="/consultation">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-white text-gray-900 rounded-2xl font-bold border-2 border-orange-300 hover:border-orange-500 hover:bg-orange-50 transition-all shadow-lg"
                >
                  Book Consultation
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex gap-8 pt-8"
            >
              {[
                { value: "500+", label: "Happy Customers" },
                { value: "15+", label: "Varieties" },
                { value: "100%", label: "Organic" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-black text-gradient">{stat.value}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Enhanced Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <MushroomShowcase />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-green-400 rounded-full flex justify-center">
          <motion.div 
            className="w-1.5 h-3 bg-green-500 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}

function MushroomShowcase() {
  return (
    <div className="relative">
      {/* Main showcase card */}
      <motion.div 
        className="relative glass rounded-3xl p-8 shadow-2xl overflow-hidden"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-green-500/10 to-teal-500/10" />
        
        {/* Hero Mushroom Image - Real Photo */}
        <motion.div 
          className="relative w-full h-96 mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-orange-100 to-amber-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=800&q=80"
            alt="Premium Royal Mushrooms"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Feature highlights */}
        <div className="relative z-10 space-y-4">
          {[
            { icon: Star, text: "Premium Quality", color: "text-orange-500" },
            { icon: Leaf, text: "100% Organic", color: "text-green-500" },
            { icon: Sparkles, text: "Fresh Daily", color: "text-amber-500" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="flex items-center space-x-3 glass px-4 py-3 rounded-xl"
            >
              <item.icon className={`w-5 h-5 ${item.color}`} />
              <span className="font-semibold text-gray-700">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Floating badges */}
      <motion.div
        className="absolute -top-6 -right-6 glass px-6 py-4 rounded-2xl shadow-xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="text-3xl font-black text-gradient">🍄</div>
        <div className="text-xs font-bold text-gray-600 mt-1">Fresh</div>
      </motion.div>

      <motion.div
        className="absolute -bottom-6 -left-6 glass px-6 py-4 rounded-2xl shadow-xl"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
      >
        <div className="text-2xl font-black text-gradient-gold">★</div>
        <div className="text-xs font-bold text-gray-600 mt-1">Premium</div>
      </motion.div>
    </div>
  );
}
