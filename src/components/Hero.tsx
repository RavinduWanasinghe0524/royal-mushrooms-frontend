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
    const newParticles = Array.from({ length: 15 }).map((_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
      duration: Math.random() * 10 + 10,
      color: i % 2 === 0 ? 'bg-royal-gold' : 'bg-royal-green'
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-royal-cream">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]" />
        
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 pointer-events-none"
        >
          {particles.map((p, i) => (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 rounded-full ${p.color} opacity-20 blur-[1px]`}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                opacity: [0.1, 0.4, 0.1],
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
              className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-royal-gold/30 shadow-sm"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-royal-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-royal-gold"></span>
              </span>
              <span className="text-sm font-bold text-royal-green tracking-wide">PREMIUM ORGANIC COLLECTION</span>
            </motion.div>

            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-royal-green leading-[0.9]">
                Nature's
                <span className="block text-royal-gold italic">
                  Masterpiece
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl border-l-4 border-royal-gold pl-6">
                Unlock the power of premium organic fungi. Sustainably harvested from pristine forests, delivered fresh to elevate your culinary and wellness journey.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Link href="/products">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-8 py-4 bg-royal-green text-white rounded-xl font-bold shadow-xl shadow-royal-green/20 flex items-center justify-center space-x-2 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative">Shop Collection</span>
                  <ArrowRight className="w-5 h-5 relative group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>

              <div className="flex items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full border-2 border-royal-green/20 flex items-center justify-center group hover:border-royal-green transition-colors"
                >
                  <Play className="w-5 h-5 text-royal-green fill-royal-green ml-1" />
                </motion.button>
                <span className="text-sm font-bold text-royal-green">Watch Our Story</span>
              </div>
            </div>

            {/* Trust Stats */}
            <div className="pt-8 border-t border-royal-green/10 grid grid-cols-3 gap-8">
              {[
                { label: "Organic", value: "100%" },
                { label: "Varieties", value: "25+" },
                { label: "Farmers", value: "50+" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-serif font-bold text-royal-green">{stat.value}</div>
                  <div className="text-xs text-royal-gold font-bold uppercase tracking-wider">{stat.label}</div>
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
              <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
                {/* Main Image Container */}
                <div className="absolute inset-0 bg-royal-gold/20 rounded-t-[10rem] rounded-b-[2rem] rotate-3 blur-xl" />
                <div className="relative h-full w-full bg-white rounded-t-[10rem] rounded-b-[2rem] p-3 shadow-2xl overflow-hidden">
                  <div className="relative h-full w-full rounded-t-[9rem] rounded-b-[1.5rem] overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=800&q=80"
                      alt="Premium Mushrooms"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  
                  {/* Floating Elements */}
                  <motion.div 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-12 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg border border-royal-gold/20"
                  >
                    <Star className="w-4 h-4 text-royal-gold fill-royal-gold" />
                    <span className="text-xs font-bold text-royal-green">Premium Grade</span>
                  </motion.div>

                  <motion.div 
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-12 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg border border-royal-gold/20"
                  >
                    <Leaf className="w-4 h-4 text-royal-green" />
                    <span className="text-xs font-bold text-royal-green">Fresh Harvest</span>
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
