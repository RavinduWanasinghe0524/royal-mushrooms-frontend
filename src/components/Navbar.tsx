'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ShoppingCart, User, Leaf, Menu, X, Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'glass-strong shadow-2xl border-b border-white/5 py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              <div className="relative p-2.5 bg-gradient-to-r from-orange-600 to-amber-600 rounded-full shadow-lg border border-white/10">
                <Leaf className="w-6 h-6 text-white" />
              </div>
            </motion.div>
            <div className="flex flex-col">
              <span className="text-2xl font-black bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent tracking-tight">
                Royal Mushrooms
              </span>
              <span className="text-[10px] font-bold text-orange-400 tracking-widest uppercase">Premium & Organic</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 bg-white/5 backdrop-blur-md rounded-full px-2 py-1 border border-white/5">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/products">Products</NavLink>
            <NavLink href="/consultation">Consultation</NavLink>
            <NavLink href="/membership">Membership</NavLink>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-3">
            <NavIcon icon={Search} />
            <NavIcon icon={User} />
            
            {/* Cart */}
            <Link href="/cart">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-3 hover:bg-white/10 rounded-full transition-all cursor-pointer group"
              >
                <ShoppingCart className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-red-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold shadow-lg border border-black/50"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </motion.div>
            </Link>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 hover:bg-white/10 rounded-full transition-all text-gray-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 py-4 border-t border-white/10 bg-black/90 backdrop-blur-xl rounded-2xl overflow-hidden"
          >
            <div className="flex flex-col space-y-2 px-4">
              <MobileNavLink href="/">Home</MobileNavLink>
              <MobileNavLink href="/products">Products</MobileNavLink>
              <MobileNavLink href="/consultation">Consultation</MobileNavLink>
              <MobileNavLink href="/membership">Membership</MobileNavLink>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative px-5 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors cursor-pointer rounded-full hover:bg-white/10"
      >
        {children}
      </motion.div>
    </Link>
  );
}

function NavIcon({ icon: Icon }: { icon: any }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
      whileTap={{ scale: 0.9 }}
      className="hidden md:block p-3 rounded-full transition-all group"
    >
      <Icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
    </motion.button>
  );
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.05)" }}
        className="text-gray-300 hover:text-orange-400 transition-all block py-3 px-4 rounded-xl font-medium"
      >
        {children}
      </motion.div>
    </Link>
  );
}
