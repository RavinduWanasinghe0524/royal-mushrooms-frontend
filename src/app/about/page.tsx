'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Leaf, Target, Heart, Award, Users, Sprout } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  const values = [
    {
      icon: Leaf,
      title: 'Organic Excellence',
      description: 'We cultivate 100% organic mushrooms without pesticides or harmful chemicals.',
    },
    {
      icon: Heart,
      title: 'Community First',
      description: 'Building relationships with our customers and supporting local communities.',
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Every mushroom is carefully inspected to meet our premium standards.',
    },
    {
      icon: Sprout,
      title: 'Sustainability',
      description: 'Eco-friendly practices that protect our environment for future generations.',
    },
  ];

  const stats = [
    { value: '2015', label: 'Founded' },
    { value: '500+', label: 'Happy Customers' },
    { value: '15+', label: 'Mushroom Varieties' },
    { value: '100%', label: 'Organic' },
  ];

  return (
    <div className="min-h-screen bg-[#faf8f3]">
      <Navbar />
      
      <main className="pt-32 pb-20 relative overflow-hidden">
        {/* Hero Section */}
        <section className="relative mb-24">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#d4af37]/10 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 10, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#1a4d2e]/10 rounded-full blur-3xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 12, repeat: Infinity }}
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >

              <h1 className="text-5xl md:text-6xl font-black mb-6">
                <span className="text-gradient-nature">Cultivating Nature&apos;s</span>
                <br />
                <span className="text-gradient-gold">Finest Fungi</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Since 2015, we&apos;ve been dedicated to growing premium organic mushrooms 
                that promote wellness and elevate culinary experiences.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
