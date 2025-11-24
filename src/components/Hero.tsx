'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Leaf, Sparkles, Star, Play } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<{ x: number; y: number; delay: number; duration: number; color: string }[]>([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    // Generate particles only on client-side to prevent hydration mismatch
    const newParticles = Array.from({ length: 25 }).map((_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
      duration: Math.random() * 10 + 10,
      color: i % 3 === 0 ? 'bg-orange-500' : i % 3 === 1 ? 'bg-amber-500' : 'bg-green-500'
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-950/40 via-black to-green-950/40" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0"
        >
          {particles.map((p, i) => (
            <motion.div
              key={i}
              className={`absolute w-1.5 h-1.5 rounded-full ${p.color} opacity-30 blur-[1px]`}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: "linear"
              }}
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
              }}
            />
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8 relative"
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full border border-orange-500/20"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-gray-300">#1 Premium Mushroom Supplier</span>
            </motion.div>

            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight">
                Nature's
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 pb-4">
                  Hidden Gold
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl border-l-2 border-orange-500/30 pl-6">
                Unlock the power of premium organic fungi. Sustainably harvested from pristine forests, delivered fresh to elevate your culinary and wellness journey.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Link href="/products">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-xl font-bold shadow-lg shadow-orange-900/20 flex items-center justify-center space-x-2 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative">Shop Collection</span>
                  <ArrowRight className="w-5 h-5 relative group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>

              <div className="flex items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full glass flex items-center justify-center group border border-white/10"
                >
                  <Play className="w-5 h-5 text-white fill-white group-hover:text-orange-400 group-hover:fill-orange-400 transition-colors" />
                </motion.button>
                <span className="text-sm font-medium text-gray-400">Watch Our Story</span>
              </div>
            </div>

            {/* Trust Stats */}
            <div className="pt-8 border-t border-white/5 grid grid-cols-3 gap-8">
              {[
                { label: "Organic", value: "100%" },
                { label: "Varieties", value: "25+" },
                { label: "Farmers", value: "50+" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.2, type: "spring" }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 animate-float">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Main Image Container */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-[2rem] rotate-6 blur-2xl" />
                <div className="relative h-full w-full glass-strong rounded-[2rem] p-4 border border-white/10 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=800&q=80"
                    alt="Premium Mushrooms"
                    fill
                    className="object-cover rounded-2xl"
                    priority
                  />
                  
                  {/* Floating Elements */}
                  <motion.div 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-8 right-8 glass px-4 py-2 rounded-xl flex items-center gap-2 shadow-xl"
                  >
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-xs font-bold text-white">Premium Grade</span>
                  </motion.div>

                  <motion.div 
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-8 left-8 glass px-4 py-2 rounded-xl flex items-center gap-2 shadow-xl"
                  >
                    <Leaf className="w-4 h-4 text-green-400" />
                    <span className="text-xs font-bold text-white">Fresh Harvest</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
