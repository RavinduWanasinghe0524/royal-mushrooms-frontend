'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Video, MessageSquare, Calendar, Check, Clock, Award } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function ConsultationPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Consultation booked successfully! We'll contact you soon.");
    }, 1500);
  };

  const benefits = [
    'Personalized mushroom recommendations',
    'Cultivation tips and best practices',
    'Health and wellness guidance',
    'Recipe suggestions and cooking tips',
    'Product selection assistance',
  ];

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

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#d4af37]/30 text-[#1a4d2e] text-sm font-medium mb-6">
              <Award className="w-4 h-4 text-[#d4af37]" />
              Expert Guidance
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-gradient-nature">Expert Consultation</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get personalized advice from our mushroom specialists and elevate your mushroom journey
            </p>
          </motion.div>

          {/* Consultation Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { 
                icon: Video, 
                title: 'Video Call', 
                desc: '30 min session',
                features: ['Face-to-face consultation', 'Screen sharing', 'Record session']
              },
              { 
                icon: MessageSquare, 
                title: 'Live Chat', 
                desc: 'Instant messaging',
                features: ['Real-time responses', 'Share images', 'Chat history']
              },
              { 
                icon: Calendar, 
                title: 'Schedule', 
                desc: 'Book anytime',
                features: ['Flexible timing', 'Reminders', 'Reschedule option']
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-8 text-center border border-[#a8b899]/20 hover:border-[#d4af37] transition-all group"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#faf8f3] to-[#f4e4b0] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <item.icon className="w-10 h-10 text-[#1a4d2e]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-[#d4af37] font-semibold mb-4">{item.desc}</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center gap-2">
                      <Check className="w-4 h-4 text-[#1a4d2e]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass rounded-2xl p-8 border border-[#a8b899]/20 mb-12"
          >
            <h2 className="text-3xl font-bold text-[#1a4d2e] mb-6 text-center">What You&apos;ll Get</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-[#1a4d2e]" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Booking Form */}
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="glass rounded-2xl p-8 border border-[#a8b899]/20"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Book a Consultation</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-white border border-[#a8b899]/30 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-white border border-[#a8b899]/30 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-white border border-[#a8b899]/30 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-white border border-[#a8b899]/30 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                    placeholder="+94 77 123 4567"
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date & Time</label>
                  <input
                    type="datetime-local"
                    className="w-full px-4 py-3 bg-white border border-[#a8b899]/30 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                  />
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
                  disabled={isLoading}
                  className="w-full py-4 bg-gradient-gold rounded-lg font-semibold text-[#1a4d2e] shadow-lg shadow-[#d4af37]/50 hover:shadow-glow transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="w-6 h-6 border-2 border-[#1a4d2e]/30 border-t-[#1a4d2e] rounded-full animate-spin mx-auto" />
                  ) : (
                    'Schedule Consultation'
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Info Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-6"
            >
              <div className="glass rounded-2xl p-6 border border-[#a8b899]/20">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-[#d4af37]" />
                  <h3 className="text-xl font-bold text-[#1a4d2e]">Consultation Hours</h3>
                </div>
                <div className="space-y-2 text-gray-600">
                  <p className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-semibold">10:00 AM - 4:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-semibold">Closed</span>
                  </p>
                </div>
              </div>

              <div className="glass rounded-2xl p-6 border border-[#a8b899]/20 bg-gradient-to-br from-[#1a4d2e]/5 to-transparent">
                <h3 className="text-xl font-bold text-[#1a4d2e] mb-3">Free Consultation</h3>
                <p className="text-gray-600 mb-4">
                  Get your first 15-minute consultation absolutely free! Our experts are here to help you get started.
                </p>
                <div className="flex items-center gap-2 text-[#d4af37] font-semibold">
                  <Check className="w-5 h-5" />
                  <span>No credit card required</span>
                </div>
              </div>

              <div className="glass rounded-2xl p-6 border border-[#a8b899]/20">
                <h3 className="text-xl font-bold text-[#1a4d2e] mb-3">Meet Our Experts</h3>
                <p className="text-gray-600">
                  Our team of certified mycologists and cultivation specialists have over 50 years of combined experience in mushroom farming and wellness.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
