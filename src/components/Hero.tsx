'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Leaf } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-green-50 to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full">
              <Leaf className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">100% Organic & Fresh</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900">
              Premium
              <span className="block text-gradient">Mushrooms</span>
              <span className="block">Delivered Fresh</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Discover the finest selection of organic, sustainably grown mushrooms. 
              From farm to table, we ensure quality and freshness in every delivery.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/products">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>

              <Link href="/consultation">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold border-2 border-gray-200 hover:border-green-500 transition-colors"
                >
                  Learn More
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right - Lifecycle Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <MushroomLifecycle />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MushroomLifecycle() {
  const stages = [
    { emoji: '🌱', label: 'Spore', delay: 0 },
    { emoji: '🌿', label: 'Mycelium', delay: 0.2 },
    { emoji: '🍄', label: 'Growth', delay: 0.4 },
    { emoji: '🍄‍🟫', label: 'Mature', delay: 0.6 },
  ];

  return (
    <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
        Mushroom Life Cycle
      </h3>
      
      <div className="grid grid-cols-2 gap-6">
        {stages.map((stage, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: stage.delay, duration: 0.5 }}
            className="flex flex-col items-center space-y-3 p-4 rounded-xl bg-green-50 hover:bg-green-100 transition-colors"
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.5
              }}
              className="text-6xl"
            >
              {stage.emoji}
            </motion.div>
            <span className="text-sm font-semibold text-gray-700">{stage.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Animated connecting arrow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="text-green-300 opacity-20"
        >
          <svg width="200" height="200" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="5,5" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}
