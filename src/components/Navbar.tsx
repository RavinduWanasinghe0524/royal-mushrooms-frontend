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
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass-dark shadow-premium py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 cursor-pointer group"
              >
                <div className="relative w-12 h-12">
                  <div className="absolute inset-0 bg-gradient-gold rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                  <div className="relative w-full h-full rounded-full overflow-hidden shadow-gold">
                    <Image 
                      src="/royal-mushrooms-frontend/logo.png" 
                      alt="Royal Mushrooms Logo" 
                      width={48} 
                      height={48}
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
                <span className={`text-2xl font-bold transition-colors duration-300 ${scrolled ? 'text-white' : 'text-white'}`}>
                  Royal Mushrooms
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="/products" scrolled={scrolled}>Collection</NavLink>
              <NavLink href="/membership" scrolled={scrolled}>Membership</NavLink>
              <NavLink href="/about" scrolled={scrolled}>About</NavLink>
              <NavLink href="/contact" scrolled={scrolled}>Contact</NavLink>
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
                  className="relative flex items-center gap-2 px-5 py-2.5 glass text-white rounded-full hover:bg-white/20 transition-all group"
                >
                  <ShoppingCart className="w-5 h-5 group-hover:text-[#d4af37] transition-colors" />
                  <span className="hidden sm:inline font-medium">Cart</span>
                  {cartCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-gold text-[#1a4d2e] text-xs font-bold rounded-full flex items-center justify-center shadow-glow"
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </motion.button>
              </Link>

              {/* Login Button */}
              <Link href="/login">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(212, 175, 55, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="hidden sm:flex items-center gap-2 px-6 py-2.5 bg-gradient-gold text-[#1a4d2e] font-bold rounded-full shadow-gold transition-all"
                >
                  <User className="w-5 h-5" />
                  <span>Login</span>
                </motion.button>
              </Link>

              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-full glass text-white hover:bg-white/20"
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
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-50 w-full sm:w-80 bg-[#0f2919] shadow-2xl md:hidden border-l border-white/10"
            >
              <div className="flex flex-col h-full pt-24 pb-8 px-6 relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1a4d2e]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                <nav className="flex flex-col space-y-6 relative z-10">
                  <MobileNavLink href="/products" onClick={() => setMobileMenuOpen(false)}>
                    Collection
                  </MobileNavLink>
                  <MobileNavLink href="/membership" onClick={() => setMobileMenuOpen(false)}>
                    Membership
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
                  
                  <div className="pt-8 border-t border-white/10 space-y-4">
                    <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                      <button className="w-full py-3 bg-gradient-gold text-[#1a4d2e] font-bold rounded-full shadow-gold hover:shadow-glow transition-all">
                        Login / Sign Up
                      </button>
                    </Link>
                    <Link href="/cart" onClick={() => setMobileMenuOpen(false)}>
                      <button className="w-full py-3 glass text-white font-medium rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2">
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

function NavLink({ href, children, scrolled }: { href: string; children: React.ReactNode; scrolled: boolean }) {
  return (
    <Link href={href}>
      <motion.span
        whileHover={{ scale: 1.05 }}
        className={`relative font-medium cursor-pointer group py-2 ${
          scrolled ? 'text-white/90 hover:text-white' : 'text-white/90 hover:text-white'
        }`}
      >
        {children}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-gold group-hover:w-full transition-all duration-300 ease-out" />
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
        whileHover={{ x: 10, color: '#d4af37' }}
        className="text-white/90 text-xl font-medium py-2 border-b border-white/5 cursor-pointer flex items-center justify-between group"
      >
        {children}
        <Leaf className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#d4af37]" />
      </motion.div>
    </Link>
  );
}
