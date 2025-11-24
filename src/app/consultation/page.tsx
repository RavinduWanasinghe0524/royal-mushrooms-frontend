'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Video, MessageSquare, Calendar, Check } from 'lucide-react';

export default function ConsultationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#faf8f3] via-white to-[#c9d4bc]/30">
      <Navbar />
      
      <main className="pt-32 pb-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 right-10 w-80 h-80 bg-[#d4af37]/10 rounded-full opacity-10 blur-3xl"
            animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-40 left-10 w-96 h-96 bg-[#1a4d2e]/10 rounded-full opacity-10 blur-3xl"
            animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-gradient-nature">Expert Consultation</span>
            </h1>
            <p className="text-xl text-gray-600">
              Get personalized advice from our mushroom specialists
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Video, title: 'Video Call', desc: '30 min session' },
              { icon: MessageSquare, title: 'Live Chat', desc: 'Instant messaging' },
              { icon: Calendar, title: 'Schedule', desc: 'Book anytime' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6 text-center border border-[#a8b899]/20"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#faf8f3] to-[#f4e4b0] rounded-full flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-[#1a4d2e]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass rounded-2xl p-8 border border-[#a8b899]/20"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Book a Consultation</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white border border-[#a8b899]/30 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white border border-[#a8b899]/30 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Consultation Type</label>
                <select className="w-full px-4 py-3 bg-white border border-[#a8b899]/30 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent">
                  <option>Video Call</option>
                  <option>Live Chat</option>
                  <option>Phone Call</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-[#a8b899]/30 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                  placeholder="Tell us what you need help with..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-gradient-gold rounded-lg font-semibold text-[#1a4d2e] shadow-lg shadow-[#d4af37]/50"
              >
                Schedule Consultation
              </motion.button>
            </form>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
