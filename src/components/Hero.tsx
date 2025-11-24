'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, ArrowRight, Info } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] bg-gradient-nature flex items-center pt-20 overflow-hidden">
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-sm">
            Freshly Harvested Premium <br />
            <span className="text-white">Mushrooms</span>
          </h1>
          
          <div className="w-24 h-1 bg-orange-400 mx-auto mb-8 rounded-full" />

          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Discover a world of flavor with our exquisite selection of organic 
            and sustainably wild-foraged fungi, delivered fresh to your door.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/products">
              <button className="btn-pill btn-orange flex items-center gap-2 px-8 py-3 text-lg">
                <ShoppingCart className="w-5 h-5" />
                Shop Now
              </button>
            </Link>
            
            <Link href="/about">
              <button className="btn-pill border-2 border-white text-white hover:bg-white hover:text-green-600 flex items-center gap-2 px-8 py-3 text-lg transition-colors">
                <Info className="w-5 h-5" />
                Learn More
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full leading-none z-0">
        <svg className="relative block w-full h-[100px] md:h-[150px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
}
