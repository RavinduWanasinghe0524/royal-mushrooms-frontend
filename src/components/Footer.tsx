'use client';

import { motion } from 'framer-motion';
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Send, ArrowUp } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribe:', email);
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-24 border-t border-white/5 overflow-hidden bg-black/80 backdrop-blur-xl">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-green-500/10 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 18, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3"
            >
              <div className="relative p-2 bg-gradient-to-r from-orange-600 to-amber-600 rounded-full shadow-lg border border-white/10">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-black text-white tracking-tight">Royal Mushrooms</span>
                <div className="text-xs text-orange-400 font-bold uppercase tracking-widest">Premium & Organic</div>
              </div>
            </motion.div>
            
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Premium organic mushrooms delivered fresh to your door. Sustainably sourced, 
              expertly curated, and grown with care for exceptional quality and flavor.
            </p>
            
            {/* Newsletter */}
            <div className="pt-4">
              <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">Subscribe to Our Newsletter</h4>
              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all text-white placeholder-gray-500"
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-xl hover:shadow-lg hover:shadow-orange-500/20 transition-all"
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </div>

            {/* Social */}
            <div className="flex space-x-3 pt-4">
              <SocialIcon icon={Facebook} href="#" />
              <SocialIcon icon={Twitter} href="#" />
              <SocialIcon icon={Instagram} href="#" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/products">Products</FooterLink>
              <FooterLink href="/consultation">Consultation</FooterLink>
              <FooterLink href="/membership">Membership</FooterLink>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Support</h3>
            <ul className="space-y-3">
              <FooterLink href="/faq">FAQ</FooterLink>
              <FooterLink href="/shipping">Shipping Info</FooterLink>
              <FooterLink href="/returns">Returns</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400 text-sm group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                  <Mail className="w-4 h-4 text-orange-500" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1 uppercase tracking-wider">Email</div>
                  <span className="font-medium text-gray-300 group-hover:text-white transition-colors">support@royalmushrooms.com</span>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-gray-400 text-sm group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                  <Phone className="w-4 h-4 text-orange-500" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1 uppercase tracking-wider">Phone</div>
                  <span className="font-medium text-gray-300 group-hover:text-white transition-colors">+94 11 234 5678</span>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-gray-400 text-sm group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                  <MapPin className="w-4 h-4 text-orange-500" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1 uppercase tracking-wider">Location</div>
                  <span className="font-medium text-gray-300 group-hover:text-white transition-colors">Colombo, Sri Lanka</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-gray-500 text-sm font-medium">
            © {new Date().getFullYear()} Royal Mushrooms. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-500 hover:text-orange-400 transition-colors font-medium">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-orange-400 transition-colors font-medium">
                Terms of Service
              </Link>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="p-2 bg-white/5 hover:bg-orange-500/20 rounded-lg text-gray-400 hover:text-orange-400 transition-all border border-white/5"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href}>
        <motion.span
          whileHover={{ x: 5 }}
          className="text-gray-400 hover:text-orange-400 transition-all text-sm font-medium inline-block"
        >
          {children}
        </motion.span>
      </Link>
    </li>
  );
}

function SocialIcon({ icon: Icon, href }: { icon: any; href: string }) {
  return (
    <motion.a
      whileHover={{ scale: 1.1, y: -3 }}
      whileTap={{ scale: 0.9 }}
      href={href}
      className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-xl hover:bg-gradient-to-r hover:from-orange-600 hover:to-amber-600 border border-white/5 hover:border-transparent transition-all group"
    >
      <Icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
    </motion.a>
  );
}
