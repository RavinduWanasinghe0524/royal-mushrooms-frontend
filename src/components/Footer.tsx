'use client';

import { motion } from 'framer-motion';
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Send } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribe:', email);
    setEmail('');
  };

  return (
    <footer className="relative mt-24 bg-gradient-to-b from-orange-50/50 via-amber-50/30 to-white border-t border-orange-100 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-300 rounded-full opacity-10 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-amber-300 rounded-full opacity-10 blur-3xl"
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
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full blur-lg opacity-50" />
                <div className="relative p-2 bg-gradient-to-r from-orange-600 to-amber-600 rounded-full">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
              </motion.div>
              <div>
                <span className="text-2xl font-black text-gradient-nature">Royal Mushrooms</span>
                <div className="text-xs text-orange-600 font-semibold">Premium & Organic</div>
              </div>
            </motion.div>
            
            <p className="text-gray-600 leading-relaxed">
              Premium organic mushrooms delivered fresh to your door. Sustainably sourced, 
              expertly curated, and grown with care for exceptional quality and flavor.
            </p>
            
            {/* Newsletter */}
            <div>
              <h4 className="text-sm font-bold text-gray-900 mb-3">Subscribe to Our Newsletter</h4>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 rounded-xl border border-orange-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                  required
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-xl hover:shadow-lg transition-all"
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </div>

            {/* Social */}
            <div className="flex space-x-3">
              <SocialIcon icon={Facebook} href="#" />
              <SocialIcon icon={Twitter} href="#" />
              <SocialIcon icon={Instagram} href="#" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-black text-gray-900 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/products">Products</FooterLink>
              <FooterLink href="/consultation">Consultation</FooterLink>
              <FooterLink href="/membership">Membership</FooterLink>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-black text-gray-900 mb-6">Support</h3>
            <ul className="space-y-3">
              <FooterLink href="/faq">FAQ</FooterLink>
              <FooterLink href="/shipping">Shipping Info</FooterLink>
              <FooterLink href="/returns">Returns</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-black text-gray-900 mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-600 text-sm">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Mail className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Email</div>
                  <span className="font-medium">support@royalmushrooms.com</span>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-gray-600 text-sm">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Phone className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Phone</div>
                  <span className="font-medium">+94 11 234 5678</span>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-gray-600 text-sm">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <MapPin className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Location</div>
                  <span className="font-medium">Colombo, Sri Lanka</span>
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
          className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-gray-600 text-sm font-medium">
            © {new Date().getFullYear()} Royal Mushrooms. All rights reserved. Made with 🍄
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/privacy" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
              Cookie Policy
            </Link>
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
          className="text-gray-600 hover:text-orange-600 transition-all text-sm font-medium inline-block"
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
      className="w-11 h-11 flex items-center justify-center glass rounded-xl hover:bg-gradient-to-r hover:from-orange-600 hover:to-amber-600 transition-all group"
    >
      <Icon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
    </motion.a>
  );
}
