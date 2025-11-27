'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowRight, Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-forest text-white overflow-hidden pt-24 pb-12">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#a8b899]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-gold rounded-2xl shadow-gold overflow-hidden">
                <Image 
                  src="/logo.png" 
                  alt="Royal Mushrooms Logo" 
                  width={40} 
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold tracking-tight">Royal Mushrooms</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Cultivating nature&apos;s finest organic fungi for culinary excellence and holistic wellness since 2015.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={Facebook} href="https://facebook.com" />
              <SocialIcon icon={Instagram} href="https://instagram.com" />
              <SocialIcon icon={Twitter} href="https://twitter.com" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#d4af37]">Explore</h3>
            <ul className="space-y-4">
              <FooterLink href="/products">Our Collection</FooterLink>
              <FooterLink href="/membership">Membership</FooterLink>
              <FooterLink href="/consultation">Consultation</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#d4af37]">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-[#d4af37] mt-1 group-hover:text-white transition-colors" />
                <span className="text-white/80 group-hover:text-white transition-colors text-sm">
                  123 Green Valley Road,<br />
                  Colombo 07, Sri Lanka
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Phone className="w-5 h-5 text-[#d4af37] group-hover:text-white transition-colors" />
                <span className="text-white/80 group-hover:text-white transition-colors text-sm">
                  +94 77 123 4567
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-[#d4af37] group-hover:text-white transition-colors" />
                <span className="text-white/80 group-hover:text-white transition-colors text-sm">
                  hello@royalmushrooms.com
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#d4af37]">Stay Connected</h3>
            <p className="text-white/80 mb-6 text-sm">
              Subscribe for exclusive offers, seasonal harvest updates, and wellness tips.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/50 outline-none text-white placeholder-white/50 transition-all"
                  suppressHydrationWarning
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-premium w-full py-3 bg-gradient-gold text-[#1a4d2e] font-bold rounded-xl shadow-gold hover:shadow-2xl transition-all flex items-center justify-center space-x-2"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm flex items-center gap-2">
              © 2024 Royal Mushrooms. Made with <Heart className="w-4 h-4 text-[#d4af37] fill-[#d4af37]" /> for mushroom lovers
            </p>
            <div className="flex space-x-6 text-sm text-white/60">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
              <Link href="/shipping" className="hover:text-white transition-colors">Shipping</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon: Icon, href }: { icon: React.ElementType; href: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-gold hover:text-[#1a4d2e] transition-all"
    >
      <Icon className="w-5 h-5" />
    </motion.a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link 
        href={href} 
        className="text-white/80 hover:text-white transition-colors flex items-center space-x-2 group text-sm"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity" />
        <span className="group-hover:translate-x-1 transition-transform">{children}</span>
      </Link>
    </li>
  );
}
