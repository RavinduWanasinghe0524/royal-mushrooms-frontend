'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, User, Menu, X, Leaf, Search } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount] = useState(3);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass-dark shadow-strong py-3'
            : 'bg-[#2D5F4C]/95 backdrop-blur-md py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center space-x-3 cursor-pointer"
              >
                <div className="relative w-10 h-10 rounded-full bg-gradient-accent flex items-center justify-center shadow-accent">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">
                  Royal Mushrooms
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/products">Collection</NavLink>
              <NavLink href="/consultation">Consultation</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-3">
              {/* Cart Button */}
              <Link href="/cart">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span className="hidden sm:inline font-medium">Cart</span>
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-accent text-white text-xs font-bold rounded-full flex items-center justify-center shadow-accent">
                      {cartCount}
                    </span>
                  )}
                </motion.button>
              </Link>

              {/* Login Button */}
              <Link href="/login">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(232, 168, 124, 0.6)" }}
                  whileTap={{ scale: 0.95 }}
                  className="hidden sm:flex items-center gap-2 px-5 py-2 bg-gradient-accent text-white font-semibold rounded-full shadow-accent transition-all"
                >
                  <User className="w-4 h-4" />
                  <span>Login</span>
                </motion.button>
              </Link>

              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white"
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
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 right-0 z-50 w-full sm:w-80 bg-gradient-primary shadow-strong md:hidden"
            >
              <div className="flex flex-col h-full pt-20 pb-8 px-6">
                <nav className="flex flex-col space-y-4">
                  <MobileNavLink href="/" onClick={() => setMobileMenuOpen(false)}>
                    Home
                  </MobileNavLink>
                  <MobileNavLink href="/products" onClick={() => setMobileMenuOpen(false)}>
                    Collection
                  </MobileNavLink>
                  <MobileNavLink href="/consultation" onClick={() => setMobileMenuOpen(false)}>
                    Consultation
                  </MobileNavLink>
                  <MobileNavLink href="/about" onClick={() => setMobileMenuOpen(false)}>
                    About
                  </MobileNavLink>
                  <MobileNavLink href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Contact
                  </MobileNavLink>
                  
                  <div className="pt-6 border-t border-white/20 space-y-3">
                    <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                      <button className="w-full py-3 bg-gradient-accent text-white font-semibold rounded-full shadow-accent hover:shadow-glow transition-all">
                        Login / Sign Up
                      </button>
                    </Link>
                    <Link href="/cart" onClick={() => setMobileMenuOpen(false)}>
                      <button className="w-full py-3 bg-white/10 text-white font-medium rounded-full hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                        <ShoppingCart className="w-5 h-5" />
                        View Cart ({cartCount})
                      </button>
                    </Link>
                  </div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href}>
      <motion.span
        whileHover={{ y: -2 }}
        className="relative font-medium cursor-pointer group text-white/90 hover:text-white transition-colors py-2"
      >
        {children}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-accent group-hover:w-full transition-all duration-300" />
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
        whileHover={{ x: 5 }}
        className="text-white text-lg font-medium py-3 px-4 rounded-lg hover:bg-white/10 cursor-pointer flex items-center justify-between group transition-all"
      >
        {children}
        <Leaf className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#E8A87C]" />
      </motion.div>
    </Link>
  );
}
