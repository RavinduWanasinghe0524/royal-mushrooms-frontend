'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowRight, Heart, Leaf } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-primary text-white overflow-hidden pt-20 pb-8">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8A87C]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A8C69F]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center shadow-accent">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Royal Mushrooms</span>
            </div>
            <p className="text-white/90 leading-relaxed text-sm">
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
            <h3 className="text-lg font-bold mb-6 text-[#E8A87C]">Explore</h3>
            <ul className="space-y-3">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/products">Our Collection</FooterLink>
              <FooterLink href="/consultation">Consultation</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#E8A87C]">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-[#E8A87C] mt-0.5 flex-shrink-0" />
                <span className="text-white/90 text-sm leading-relaxed">
                  123 Green Valley Road,<br />
                  Colombo 07, Sri Lanka
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Phone className="w-5 h-5 text-[#E8A87C] flex-shrink-0" />
                <span className="text-white/90 text-sm">
                  +94 77 123 4567
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-[#E8A87C] flex-shrink-0" />
                <span className="text-white/90 text-sm">
                  hello@royalmushrooms.com
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#E8A87C]">Stay Connected</h3>
            <p className="text-white/90 mb-5 text-sm leading-relaxed">
              Subscribe for exclusive offers and wellness tips.
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/30 focus:border-[#E8A87C] focus:ring-2 focus:ring-[#E8A87C]/50 outline-none text-white placeholder-white/60 transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 bg-gradient-accent text-white font-semibold rounded-xl shadow-accent hover:shadow-glow transition-all flex items-center justify-center gap-2"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/80 text-sm flex items-center gap-2">
              © 2024 Royal Mushrooms. Made with <Heart className="w-4 h-4 text-[#E8A87C] fill-[#E8A87C]" /> for mushroom lovers
            </p>
            <div className="flex gap-6 text-sm text-white/80">
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
      whileHover={{ scale: 1.1, y: -3 }}
      whileTap={{ scale: 0.9 }}
      className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-gradient-accent hover:border-[#E8A87C] transition-all"
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
        className="text-white/90 hover:text-white transition-colors flex items-center gap-2 group text-sm"
      >
        <span className="w-1 h-1 rounded-full bg-[#E8A87C] opacity-0 group-hover:opacity-100 transition-opacity" />
        <span className="group-hover:translate-x-1 transition-transform">{children}</span>
      </Link>
    </li>
  );
}
