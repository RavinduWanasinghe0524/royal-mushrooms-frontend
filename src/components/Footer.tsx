'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowRight, Leaf } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-royal-green text-white overflow-hidden pt-24 pb-12">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-royal-gold/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-royal-gold rounded-full shadow-lg">
                <Leaf className="w-6 h-6 text-royal-green" />
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight">Royal Nature</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Cultivating the finest organic fungi for culinary excellence and holistic wellness. Experience the royal standard of nature's bounty.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={Facebook} />
              <SocialIcon icon={Instagram} />
              <SocialIcon icon={Twitter} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6 text-royal-gold">Explore</h3>
            <ul className="space-y-4">
              <FooterLink href="/products">Our Collection</FooterLink>
              <FooterLink href="/about">Our Story</FooterLink>
              <FooterLink href="/consultation">Expert Consultation</FooterLink>
              <FooterLink href="/blog">Mushroom Guide</FooterLink>
              <FooterLink href="/membership">Royal Membership</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6 text-royal-gold">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-royal-gold mt-1 group-hover:text-white transition-colors" />
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  123 Green Valley Road,<br />
                  Colombo 07, Sri Lanka
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Phone className="w-5 h-5 text-royal-gold group-hover:text-white transition-colors" />
                <span className="text-gray-300 group-hover:text-white transition-colors">+94 77 123 4567</span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-royal-gold group-hover:text-white transition-colors" />
                <span className="text-gray-300 group-hover:text-white transition-colors">hello@royalnature.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6 text-royal-gold">Stay Updated</h3>
            <p className="text-gray-300 mb-6">Subscribe to our newsletter for exclusive offers and seasonal harvest updates.</p>
            <form className="space-y-3">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 focus:border-royal-gold focus:ring-1 focus:ring-royal-gold outline-none text-white placeholder-gray-400 transition-all"
                />
              </div>
              <button className="w-full py-3 bg-royal-gold text-royal-green font-bold rounded-xl hover:bg-white transition-colors flex items-center justify-center space-x-2">
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © 2024 Royal Nature. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-royal-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-royal-gold transition-colors">Terms of Service</Link>
            <Link href="/shipping" className="hover:text-royal-gold transition-colors">Shipping Info</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon: Icon }: { icon: any }) {
  return (
    <motion.a
      href="#"
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-royal-gold hover:text-royal-green transition-all"
    >
      <Icon className="w-5 h-5" />
    </motion.a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-gray-300 hover:text-royal-gold transition-colors flex items-center space-x-2 group">
        <span className="w-1.5 h-1.5 rounded-full bg-royal-gold opacity-0 group-hover:opacity-100 transition-opacity" />
        <span className="group-hover:translate-x-1 transition-transform">{children}</span>
      </Link>
    </li>
  );
}
