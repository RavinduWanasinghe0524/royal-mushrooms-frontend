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
      transition={{ type: "spring", stiffness: 100 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass shadow-lg backdrop-blur-xl border-b border-white/20' 
          : 'bg-white/80 backdrop-blur-md border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative p-2 bg-gradient-to-r from-orange-600 to-amber-600 rounded-full">
                <Leaf className="w-6 h-6 text-white" />
              </div>
            </motion.div>
            <div>
              <span className="text-2xl font-black bg-gradient-to-r from-orange-500 via-amber-500 to-green-500 bg-clip-text text-transparent">
                Royal Mushrooms
              </span>
              <div className="text-xs text-orange-400 font-semibold">Premium & Organic</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/products">Products</NavLink>
            <NavLink href="/consultation">Consultation</NavLink>
            <NavLink href="/membership">Membership</NavLink>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="hidden md:block p-2.5 hover:bg-gray-100 rounded-xl transition-all"
            >
              <Search className="w-5 h-5 text-gray-700" />
            </motion.button>

            {/* User */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="hidden md:block p-2.5 hover:bg-gray-100 rounded-xl transition-all"
            >
              <User className="w-5 h-5 text-gray-700" />
            </motion.button>

            {/* Cart */}
            <Link href="/cart">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative p-2.5 hover:bg-gray-100 rounded-xl transition-all cursor-pointer"
              >
                <ShoppingCart className="w-5 h-5 text-gray-700" />
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-gradient-to-r from-orange-600 to-amber-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold shadow-lg"
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
              className="md:hidden p-2.5 hover:bg-gray-100 rounded-xl transition-all"
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
            className="md:hidden py-6 border-t border-gray-100"
          >
            <div className="flex flex-col space-y-4">
              <MobileNavLink href="/">Home</MobileNavLink>
              <MobileNavLink href="/products">Products</MobileNavLink>
              <MobileNavLink href="/consultation">Consultation</MobileNavLink>
              <MobileNavLink href="/membership">Membership</MobileNavLink>
              
              {/* Mobile search */}
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                  <Search className="w-5 h-5 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Search mushrooms..."
                    className="bg-transparent outline-none text-gray-700 placeholder-gray-400 w-full"
                  />
                </div>
              </div>
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
        className="relative px-4 py-2 text-gray-300 hover:text-orange-400 transition-colors cursor-pointer font-semibold group"
      >
        {children}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 origin-left"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </Link>
  );
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ x: 10 }}
        className="text-gray-300 hover:text-orange-400 transition-all block py-3 px-4 rounded-xl hover:bg-orange-500/20 font-semibold text-lg"
      >
        {children}
      </motion.div>
    </Link>
  );
}
