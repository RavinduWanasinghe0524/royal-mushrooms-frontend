'use client';

import { motion } from 'framer-motion';
import { Home, ArrowLeft, Leaf } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a4d2e] via-[#0f2919] to-[#0a1f12] flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#d4af37]/10 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1a4d2e]/20 rounded-full blur-[100px]"
        />
      </div>

      <div className="text-center relative z-10 px-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className="w-24 h-24 mx-auto mb-8 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold"
        >
          <Leaf className="w-12 h-12 text-[#1a4d2e]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-9xl font-bold text-gradient-gold mb-4">404</h1>
          <h2 className="text-4xl font-serif font-bold text-white mb-4">Page Not Found</h2>
          <p className="text-xl text-white/60 mb-8 max-w-md mx-auto">
            Oops! Looks like this mushroom has wandered off the path. The page you&apos;re looking for doesn&apos;t exist.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(212, 175, 55, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-gold text-[#1a4d2e] font-bold rounded-full shadow-gold hover:shadow-glow transition-all flex items-center gap-2 justify-center"
            >
              <Home className="w-5 h-5" />
              <span>Back to Home</span>
            </motion.button>
          </Link>

          <Link href="/products">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-dark text-white font-semibold rounded-full transition-all flex items-center gap-2 justify-center border border-white/30 backdrop-blur-xl shadow-xl"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Browse Products</span>
            </motion.button>
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-12 text-white/40 text-sm"
        >
          Need help? <Link href="/contact" className="text-[#d4af37] hover:text-[#f4e4b0] transition-colors underline">Contact us</Link>
        </motion.p>
      </div>
    </div>
  );
}
