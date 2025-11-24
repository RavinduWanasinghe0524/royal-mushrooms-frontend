'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowRight, Leaf } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-nature text-white overflow-hidden pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-orange-500 rounded-full shadow-lg">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">Royal Mushrooms</span>
            </div>
            <p className="text-white/90 leading-relaxed">
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
            <h3 className="text-lg font-bold mb-6 text-orange-200">Explore</h3>
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
            <h3 className="text-lg font-bold mb-6 text-orange-200">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-orange-300 mt-1 group-hover:text-white transition-colors" />
                <span className="text-white/90 group-hover:text-white transition-colors">
                  123 Green Valley Road,<br />
                  Colombo 07, Sri Lanka
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Phone className="w-5 h-5 text-orange-300 group-hover:text-white transition-colors" />
                <span className="text-white/90 group-hover:text-white transition-colors">+94 77 123 4567</span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-orange-300 group-hover:text-white transition-colors" />
                <span className="text-white/90 group-hover:text-white transition-colors">hello@royalnature.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-orange-200">Stay Updated</h3>
            <p className="text-white/90 mb-6">Subscribe to our newsletter for exclusive offers and seasonal harvest updates.</p>
            <form className="space-y-3">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 outline-none text-white placeholder-white/60 transition-all"
                />
              </div>
              <button className="w-full py-3 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2 shadow-lg shadow-orange-500/20">
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/60 text-sm">
            © 2024 Royal Mushrooms. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-white/60">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/shipping" className="hover:text-white transition-colors">Shipping Info</Link>
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
      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-green-600 transition-all"
    >
      <Icon className="w-5 h-5" />
    </motion.a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-white/80 hover:text-white transition-colors flex items-center space-x-2 group">
        <span className="w-1.5 h-1.5 rounded-full bg-orange-400 opacity-0 group-hover:opacity-100 transition-opacity" />
        <span className="group-hover:translate-x-1 transition-transform">{children}</span>
      </Link>
    </li>
  );
}
