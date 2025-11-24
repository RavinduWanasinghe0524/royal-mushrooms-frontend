'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, User, Lock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="absolute top-0 w-full z-50 py-6"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
             {/* Simple Mushroom Icon Placeholder */}
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
               <path d="M10 3a5 5 0 00-5 5h10a5 5 0 00-5-5z" />
               <path d="M5 9a2 2 0 00-2 2v2a2 2 0 002 2h10a2 2 0 002-2v-2a2 2 0 00-2-2H5z" />
             </svg>
          </div>
          <span className="text-2xl font-bold text-white tracking-tight drop-shadow-sm">Royal Mushrooms</span>
        </Link>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-sm">
            <Lock className="w-4 h-4" />
            Consultance
          </button>
          
          <Link href="/login">
            <button className="flex items-center gap-2 border border-white/40 bg-white/10 backdrop-blur-sm text-white px-5 py-2 rounded-full font-medium hover:bg-white hover:text-green-600 transition-all">
              <User className="w-4 h-4" />
              Login Demo
            </button>
          </Link>

          <Link href="/cart">
             <button className="flex items-center gap-2 border border-white/40 bg-white/10 backdrop-blur-sm text-white px-5 py-2 rounded-full font-medium hover:bg-white hover:text-green-600 transition-all">
              <ShoppingCart className="w-4 h-4" />
              Cart
            </button>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
