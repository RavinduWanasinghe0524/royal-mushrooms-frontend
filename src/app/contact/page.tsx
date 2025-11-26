'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Message sent successfully! We'll get back to you soon.");
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '+94 77 123 4567',
      link: 'tel:+94771234567',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@royalmushrooms.com',
      link: 'mailto:hello@royalmushrooms.com',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '123 Green Valley Road, Colombo 07, Sri Lanka',
      link: '#',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: 'Mon - Sat: 9:00 AM - 6:00 PM',
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf8f3]">
      <Navbar />
      
      <main className="pt-32 pb-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 right-10 w-[600px] h-[600px] bg-[#d4af37]/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-[#1a4d2e]/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 12, repeat: Infinity }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#d4af37]/30 text-[#1a4d2e] text-sm font-medium mb-6">
              <MessageSquare className="w-4 h-4 text-[#d4af37]" />
              Get In Touch
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-gradient-nature">Contact Us</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-6 border border-[#a8b899]/20 hover:border-[#d4af37] transition-all group cursor-pointer"
              >
                <div className="w-14 h-14 bg-gradient-gold rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <info.icon className="w-7 h-7 text-[#1a4d2e]" />
                </div>
                <h3 className="text-lg font-bold text-[#1a4d2e] mb-2">{info.title}</h3>
                <p className="text-gray-600">{info.details}</p>
              </motion.a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-[#1a4d2e] mb-6">Send us a message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-white border border-[#a8b899]/30 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-white border border-[#a8b899]/30 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-white border border-[#a8b899]/30 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-white border border-[#a8b899]/30 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all"
                    placeholder="+94 77 123 4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-white border border-[#a8b899]/30 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-white border border-[#a8b899]/30 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 bg-gradient-gold text-[#1a4d2e] font-bold rounded-xl shadow-gold hover:shadow-glow transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="w-6 h-6 border-2 border-[#1a4d2e]/30 border-t-[#1a4d2e] rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Map/Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="glass rounded-2xl p-8 border border-[#a8b899]/20 lg:sticky lg:top-32"
            >
              <h3 className="text-2xl font-bold text-[#1a4d2e] mb-6">Why Choose Us?</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#1a4d2e] font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a4d2e] mb-1">Premium Quality</h4>
                    <p className="text-gray-600 text-sm">100% organic mushrooms grown with care and expertise.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#1a4d2e] font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a4d2e] mb-1">Fast Delivery</h4>
                    <p className="text-gray-600 text-sm">Fresh mushrooms delivered to your doorstep quickly.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#1a4d2e] font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a4d2e] mb-1">Expert Support</h4>
                    <p className="text-gray-600 text-sm">Our team is always ready to help with your questions.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#1a4d2e] font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a4d2e] mb-1">Sustainable Practices</h4>
                    <p className="text-gray-600 text-sm">Eco-friendly farming that respects our planet.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-[#a8b899]/30">
                <p className="text-sm text-gray-600 italic">
                  &quot;We&apos;re committed to providing the best customer experience. Your satisfaction is our priority.&quot;
                </p>
                <p className="text-sm font-bold text-[#1a4d2e] mt-2">- Royal Mushrooms Team</p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
