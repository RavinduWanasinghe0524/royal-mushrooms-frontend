'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, User, Leaf, Menu, X, Search, LogIn } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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
          ? 'glass-dark py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative p-2 bg-royal-gold rounded-full shadow-lg">
              <Leaf className="w-6 h-6 text-royal-green" />
            </div>
            <div className="flex flex-col">
              <span className={`text-2xl font-serif font-bold tracking-tight transition-colors ${scrolled ? 'text-white' : 'text-royal-green'}`}>
                Royal Nature
              </span>
              <span className="text-[10px] font-bold text-royal-gold tracking-widest uppercase">Premium Fungi</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center space-x-1 rounded-full px-4 py-2 transition-all ${scrolled ? 'bg-white/5 backdrop-blur-md' : 'bg-white/50 backdrop-blur-sm'}`}>
            <NavLink href="/" scrolled={scrolled} active={pathname === '/'}>Home</NavLink>
            <NavLink href="/products" scrolled={scrolled} active={pathname === '/products'}>Collection</NavLink>
            <NavLink href="/consultation" scrolled={scrolled} active={pathname === '/consultation'}>Consultation</NavLink>
            <NavLink href="/membership" scrolled={scrolled} active={pathname === '/membership'}>Membership</NavLink>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-3">
            <NavIcon icon={Search} scrolled={scrolled} />
            
            {/* Auth Links */}
            <Link href="/login">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`hidden md:flex items-center space-x-2 px-4 py-2 rounded-full font-bold text-sm transition-all ${
                  scrolled 
                    ? 'bg-royal-gold text-royal-green hover:bg-white' 
                    : 'bg-royal-green text-white hover:bg-green-900'
                }`}
              >
                <User className="w-4 h-4" />
                <span>Sign In</span>
              </motion.button>
            </Link>
            
            {/* Cart */}
            <Link href="/cart">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative p-3 rounded-full transition-all cursor-pointer group ${
                  scrolled ? 'hover:bg-white/10' : 'hover:bg-royal-green/10'
                }`}
              >
                <ShoppingCart className={`w-5 h-5 transition-colors ${scrolled ? 'text-gray-300 group-hover:text-white' : 'text-royal-green'}`} />
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-0 right-0 bg-red-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold shadow-lg border border-white"
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
              className={`md:hidden p-3 rounded-full transition-all ${
                scrolled ? 'text-white hover:bg-white/10' : 'text-royal-green hover:bg-royal-green/10'
              }`}
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
            className="md:hidden mt-4 py-4 border-t border-white/10 bg-royal-green/95 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col space-y-2 px-4">
              <MobileNavLink href="/">Home</MobileNavLink>
              <MobileNavLink href="/products">Collection</MobileNavLink>
              <MobileNavLink href="/consultation">Consultation</MobileNavLink>
              <MobileNavLink href="/membership">Membership</MobileNavLink>
              <div className="pt-4 mt-2 border-t border-white/10">
                <Link href="/login">
                  <div className="w-full py-3 text-center bg-royal-gold text-royal-green font-bold rounded-xl">
                    Sign In / Register
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

function NavLink({ href, children, scrolled, active }: { href: string; children: React.ReactNode; scrolled: boolean; active: boolean }) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`relative px-5 py-2 text-sm font-medium transition-colors cursor-pointer rounded-full ${
          active 
            ? (scrolled ? 'text-royal-gold bg-white/10' : 'text-royal-green bg-royal-green/10')
            : (scrolled ? 'text-gray-300 hover:text-white hover:bg-white/10' : 'text-gray-600 hover:text-royal-green hover:bg-royal-green/5')
        }`}
      >
        {children}
      </motion.div>
    </Link>
  );
}

function NavIcon({ icon: Icon, scrolled }: { icon: any; scrolled: boolean }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`hidden md:block p-3 rounded-full transition-all group ${
        scrolled ? 'hover:bg-white/10' : 'hover:bg-royal-green/10'
      }`}
    >
      <Icon className={`w-5 h-5 transition-colors ${
        scrolled ? 'text-gray-300 group-hover:text-white' : 'text-royal-green'
      }`} />
    </motion.button>
  );
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.05)" }}
        className="text-gray-300 hover:text-royal-gold transition-all block py-3 px-4 rounded-xl font-medium"
      >
        {children}
      </motion.div>
    </Link>
  );
}
