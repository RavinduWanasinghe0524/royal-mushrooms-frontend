'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, User, Leaf, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <Leaf className="w-8 h-8 text-green-600" />
            <span className="text-xl font-bold text-gray-900">
              Royal Mushrooms
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/products">Products</NavLink>
            <NavLink href="/consultation">Consultation</NavLink>
            <NavLink href="/membership">Membership</NavLink>
          </div>

          <div className="flex items-center space-x-6">
            <IconButton icon={User} />
            <Link href="/cart">
              <div className="relative">
                <IconButton icon={ShoppingCart} />
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-green-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </div>
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-900 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-cyan-500/20"
          >
            <div className="flex flex-col space-y-4">
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
      <motion.span
        whileHover={{ scale: 1.05 }}
        className="text-gray-600 hover:text-green-600 transition-colors cursor-pointer font-medium"
      >
        {children}
      </motion.span>
    </Link>
  );
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href}>
      <span className="text-gray-600 hover:text-green-600 transition-colors block py-2">
        {children}
      </span>
    </Link>
  );
}

function IconButton({ icon: Icon, badge }: { icon: any; badge?: boolean }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="relative p-2 hover:bg-gray-100 rounded-full transition-all"
    >
      <Icon className="w-6 h-6 text-gray-700" />
      {badge && (
        <span className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
      )}
    </motion.button>
  );
}
