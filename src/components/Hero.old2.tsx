'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Leaf, Sparkles, Star, Award, Shield } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0a1f12] via-[#1a4d2e] to-[#0f2919]">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #d4af37 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }} />
      </div>

      {/* Glowing Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#d4af37] rounded-full blur-[150px]"
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#a8b899] rounded-full blur-[120px]"
      />

      {/* Grid Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-[#d4af37]/30 text-[#d4af37] text-sm font-bold tracking-wider uppercase shadow-xl"
            >
              <Sparkles className="w-4 h-4" />
              <span>Premium Organic Mushrooms</span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="block"
              >
                Experience the
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="block text-gradient-gold mt-2"
              >
                Royal Difference
              </motion.span>
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-xl text-white/80 leading-relaxed max-w-xl"
            >
              Cultivated with precision, harvested at peak potency. Discover nature&apos;s most powerful functional mushrooms for health, wellness, and culinary excellence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link href="#products">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(212, 175, 55, 0.6)" }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-gradient-gold text-[#1a4d2e] font-bold rounded-full text-lg shadow-2xl transition-all flex items-center gap-3"
                >
                  <span>Shop Collection</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-xl text-white font-semibold rounded-full text-lg border-2 border-white/20 hover:bg-white/20 transition-all flex items-center gap-3"
                >
                  <Leaf className="w-5 h-5" />
                  <span>Learn More</span>
                </motion.button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-8 pt-8 border-t border-white/10"
            >
              {[
                { icon: Shield, label: "Certified Organic" },
                { icon: Award, label: "Lab Tested" },
                { icon: Star, label: "5-Star Rated" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#d4af37]/20 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[#d4af37]" />
                  </div>
                  <span className="text-sm font-medium text-white/90">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{ y: y1 }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              {/* Main Hero Image */}
              <Image
                src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=1200&auto=format&fit=crop"
                alt="Premium Mushrooms"
                fill
                className="object-cover"
                priority
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a4d2e]/60 via-transparent to-transparent" />

              {/* Floating Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="absolute bottom-8 left-8 right-8 flex gap-4"
              >
                <div className="flex-1 bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-xl">
                  <div className="text-3xl font-bold text-[#1a4d2e]">500+</div>
                  <div className="text-sm text-[#4a3428]/70">Happy Customers</div>
                </div>
                <div className="flex-1 bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-xl">
                  <div className="text-3xl font-bold text-[#1a4d2e]">15+</div>
                  <div className="text-sm text-[#4a3428]/70">Varieties</div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -right-10 w-32 h-32 border-4 border-[#d4af37]/30 rounded-full"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-10 -left-10 w-40 h-40 border-4 border-white/20 rounded-full"
            />
          </motion.div>
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-0 left-0 w-full z-10 pointer-events-none"
      >
        <svg
          className="relative block w-full h-24 md:h-32"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#faf8f3"
          />
        </svg>
      </motion.div>
    </section>
  );
}
