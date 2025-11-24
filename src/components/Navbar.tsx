'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, User, Menu, X, Leaf, Search } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount] = useState(3);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass-dark shadow-lg py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 cursor-pointer"
              >
                <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold">
                  <Leaf className="w-6 h-6 text-[#1a4d2e]" />
                </div>
                <span className="text-2xl font-bold text-white hidden sm:block">
                  Royal Mushrooms
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="#products">Collection</NavLink>
              <NavLink href="#benefits">Benefits</NavLink>
              <NavLink href="#process">Our Process</NavLink>
              <NavLink href="#testimonials">Reviews</NavLink>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              {/* Search Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="hidden sm:flex w-10 h-10 items-center justify-center rounded-full glass text-white hover:bg-white/20 transition-all"
              >
                <Search className="w-5 h-5" />
              </motion.button>

              {/* Cart Button */}
              <Link href="/cart">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative flex items-center gap-2 px-5 py-2.5 glass text-white rounded-full hover:bg-white/20 transition-all"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span className="hidden sm:inline font-medium">Cart</span>
                  {cartCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 w-5 h-5 bg-[#d4af37] text-[#1a4d2e] text-xs font-bold rounded-full flex items-center justify-center"
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </motion.button>
              </Link>

              {/* Login Button */}
              <Link href="/login">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-gradient-gold text-[#1a4d2e] font-bold rounded-full shadow-gold hover:shadow-2xl transition-all"
                >
                  <User className="w-5 h-5" />
                  <span>Login</span>
                </motion.button>
              </Link>

              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-full glass text-white"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed inset-y-0 right-0 z-40 w-full sm:w-80 bg-gradient-forest shadow-2xl md:hidden"
          >
            <div className="flex flex-col h-full pt-24 pb-8 px-6">
              <nav className="flex flex-col space-y-4">
                <MobileNavLink href="#products" onClick={() => setMobileMenuOpen(false)}>
                  Collection
                </MobileNavLink>
                <MobileNavLink href="#benefits" onClick={() => setMobileMenuOpen(false)}>
                  Benefits
                </MobileNavLink>
                <MobileNavLink href="#process" onClick={() => setMobileMenuOpen(false)}>
                  Our Process
                </MobileNavLink>
                <MobileNavLink href="#testimonials" onClick={() => setMobileMenuOpen(false)}>
                  Reviews
                </MobileNavLink>
                <div className="pt-6 border-t border-white/10">
                  <Link href="/login">
                    <button className="w-full py-3 bg-gradient-gold text-[#1a4d2e] font-bold rounded-full">
                      Login / Sign Up
                    </button>
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href}>
      <motion.span
        whileHover={{ scale: 1.05 }}
        className="relative text-white/90 hover:text-white font-medium cursor-pointer group"
      >
        {children}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d4af37] group-hover:w-full transition-all duration-300" />
      </motion.span>
    </Link>
  );
}

function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link href={href} onClick={onClick}>
      <motion.div
        whileHover={{ x: 10 }}
        className="text-white text-xl font-medium py-3 border-b border-white/10 cursor-pointer"
      >
        {children}
      </motion.div>
    </Link>
  );
}
