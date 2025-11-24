'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Leaf, Sparkles, Star } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with CSS - Forest Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2532&auto=format&fit=crop)',
        }}
      >
        {/* Minimal overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a4d2e]/40 via-[#0f2919]/30 to-[#0a1f12]/40" />
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Animated Orbs - subtle */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#d4af37]/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#1a4d2e]/30 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#d4af37] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -120, 0],
              opacity: [0, 1, 0],
              scale: [0, 2, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center"
      >
        <div className="space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-dark border border-[#d4af37]/40 text-[#d4af37] text-sm font-semibold tracking-wide uppercase backdrop-blur-xl shadow-lg"
          >
            <Sparkles className="w-4 h-4" />
            <span>Premium Organic Cultivation</span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="block drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]"
            >
              Nature's Finest
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-gradient-gold inline-block mt-2 relative drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]"
            >
              Mushroom Kingdom
              <motion.svg
                className="absolute -bottom-2 left-0 w-full h-3 text-[#d4af37] opacity-60"
                viewBox="0 0 100 10"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1, duration: 1.5 }}
              >
                <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
              </motion.svg>
            </motion.span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed font-light drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
          >
            Experience the royal standard of organic fungi cultivation. 
            From our forest to your table, discover the extraordinary benefits 
            of premium mushrooms for wellness and culinary excellence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          >
            <Link href="#products">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(212, 175, 55, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium group px-8 py-4 bg-gradient-gold text-[#1a4d2e] font-bold rounded-full text-lg shadow-gold transition-all flex items-center gap-3"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            
            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium group px-8 py-4 glass-dark text-white font-semibold rounded-full text-lg transition-all flex items-center gap-3 border border-white/30 backdrop-blur-xl shadow-xl"
              >
                <Leaf className="w-5 h-5" />
                <span>Our Story</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="pt-16 flex flex-wrap justify-center gap-12 text-white"
          >
            {[
              { value: "100%", label: "Organic", icon: Leaf },
              { value: "500+", label: "Happy Customers", icon: Star },
              { value: "15+", label: "Varieties", icon: Sparkles },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, scale: 1.05 }}
                className="text-center group cursor-default"
              >
                <div className="flex justify-center mb-2">
                  <stat.icon className="w-6 h-6 text-[#d4af37] opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                </div>
                <div className="text-3xl font-bold text-white group-hover:text-[#d4af37] transition-colors drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">{stat.value}</div>
                <div className="text-sm font-medium tracking-wide uppercase opacity-90 drop-shadow-md">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative Bottom Wave */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-0 left-0 w-full z-10 pointer-events-none"
      >
        <svg
          className="relative block w-full h-24 md:h-40"
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
