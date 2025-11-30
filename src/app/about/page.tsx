'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Leaf, Target, Heart, Award, Users, Sprout, Shield, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  const values = [
    {
      icon: Leaf,
      title: 'Organic Excellence',
      description: 'We cultivate 100% certified organic mushrooms without pesticides, chemicals, or artificial additives.',
    },
    {
      icon: Heart,
      title: 'Community First',
      description: 'Building lasting relationships with our customers and supporting local farming communities.',
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Every harvest undergoes rigorous third-party testing to ensure premium quality and potency.',
    },
    {
      icon: Sprout,
      title: 'Sustainability',
      description: 'Eco-friendly cultivation practices that protect our environment for future generations.',
    },
  ];

  const stats = [
    { value: '2015', label: 'Founded' },
    { value: '500+', label: 'Happy Customers' },
    { value: '15+', label: 'Mushroom Varieties' },
    { value: '100%', label: 'Organic' },
  ];

  const team = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Founder & Chief Mycologist',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      bio: '15+ years of research in medicinal mushrooms',
    },
    {
      name: 'James Chen',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      bio: 'Expert in sustainable cultivation methods',
    },
    {
      name: 'Emma Rodriguez',
      role: 'Quality Control Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      bio: 'Ensures every product meets our high standards',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <Navbar />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-0 right-0 w-96 h-96 bg-[#E8A87C]/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute bottom-0 left-0 w-96 h-96 bg-[#A8C69F]/20 rounded-full blur-3xl"
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2D5F4C]/10 text-[#2D5F4C] text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 text-[#E8A87C]" />
                Our Story
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#2D5F4C]">
                Cultivating Nature&apos;s
                <span className="block text-gradient-accent mt-2">Finest Fungi</span>
              </h1>
              <p className="text-xl text-[#6B7B75] max-w-3xl mx-auto leading-relaxed">
                Since 2015, we&apos;ve been dedicated to growing premium organic mushrooms 
                that promote wellness and elevate culinary experiences.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="text-center p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-soft hover-lift"
                >
                  <div className="text-4xl font-bold text-gradient-primary mb-2">{stat.value}</div>
                  <div className="text-[#6B7B75] font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[#2D5F4C] mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-[#6B7B75] leading-relaxed mb-6">
                  At Royal Mushrooms, we believe in the power of nature to heal, nourish, and inspire. 
                  Our mission is to make premium, organic mushrooms accessible to everyone while maintaining 
                  the highest standards of quality and sustainability.
                </p>
                <p className="text-lg text-[#6B7B75] leading-relaxed">
                  We work closely with local farmers and use state-of-the-art cultivation techniques 
                  to ensure every mushroom we grow is packed with nutrients and flavor. From our farm 
                  to your table, we maintain complete transparency and quality control.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative h-96 rounded-2xl overflow-hidden shadow-strong"
              >
                <Image
                  src="https://images.unsplash.com/photo-1618162876774-90e429989ab6?q=80&w=1200&auto=format&fit=crop"
                  alt="Mushroom Farm"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D5F4C] mb-6">
                Our <span className="text-gradient-accent">Core Values</span>
              </h2>
              <p className="text-lg text-[#6B7B75] max-w-2xl mx-auto">
                These principles guide everything we do
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-white p-8 rounded-2xl shadow-soft hover-lift text-center"
                >
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-accent">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2D5F4C] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[#6B7B75] leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D5F4C] mb-6">
                Meet Our <span className="text-gradient-accent">Team</span>
              </h2>
              <p className="text-lg text-[#6B7B75] max-w-2xl mx-auto">
                Passionate experts dedicated to mushroom excellence
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="bg-[#FFF8F0] rounded-2xl overflow-hidden shadow-soft hover-lift"
                >
                  <div className="relative h-80">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-[#2D5F4C] mb-2">
                      {member.name}
                    </h3>
                    <p className="text-[#E8A87C] font-semibold mb-3">
                      {member.role}
                    </p>
                    <p className="text-[#6B7B75] text-sm">
                      {member.bio}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-primary rounded-3xl p-12 shadow-strong"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Experience the Royal Difference?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join our community and discover the finest organic mushrooms nature has to offer.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-accent text-white font-semibold rounded-full shadow-accent hover:shadow-glow transition-all"
              >
                Shop Collection
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
