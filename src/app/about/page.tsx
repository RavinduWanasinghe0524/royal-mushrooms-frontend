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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#d4af37]/30 text-[#1a4d2e] text-sm font-medium mb-6">
                <Leaf className="w-4 h-4 text-[#d4af37]" />
                Our Story
              </div>
              <h1 className="text-5xl md:text-6xl font-black mb-6">
                <span className="text-gradient-nature">Cultivating Nature's</span>
                <br />
                <span className="text-gradient-gold">Finest Fungi</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Since 2015, we've been dedicated to growing premium organic mushrooms 
                that promote wellness and elevate culinary experiences.
              </p>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1511497584788-876760111969?w=1600&h=800&fit=crop"
                alt="Mushroom Farm"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a4d2e]/60 to-transparent" />
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center glass rounded-2xl p-8 border border-[#a8b899]/20 hover:border-[#d4af37] transition-all"
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient-nature mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Mission Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-[#d4af37]" />
                <h2 className="text-4xl font-bold text-[#1a4d2e]">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At Royal Mushrooms, we're on a mission to make premium, organic mushrooms 
                accessible to everyone. We believe in the power of nature to nourish both 
                body and mind, and we're committed to sustainable farming practices that 
                respect our planet.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every mushroom we grow is a testament to our dedication to quality, 
                sustainability, and the well-being of our community. From seed to harvest, 
                we maintain the highest standards to ensure you receive nature's best.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1603456797018-5a7f7d6a1f4e?w=800&h=800&fit=crop"
                alt="Fresh Mushrooms"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a4d2e] mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-6 border border-[#a8b899]/20 hover:border-[#d4af37] transition-all group"
              >
                <div className="w-14 h-14 bg-gradient-gold rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="w-7 h-7 text-[#1a4d2e]" />
                </div>
                <h3 className="text-xl font-bold text-[#1a4d2e] mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-12 text-center border border-[#a8b899]/20"
          >
            <Users className="w-16 h-16 text-[#d4af37] mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-[#1a4d2e] mb-6">
              Join Our Growing Community
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              We're more than just a mushroom farm. We're a community of nature enthusiasts, 
              health-conscious individuals, and culinary adventurers. Join us on this journey!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-premium px-8 py-4 bg-gradient-gold text-[#1a4d2e] font-bold rounded-full shadow-gold hover:shadow-glow transition-all"
            >
              Explore Our Products
            </motion.button>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
