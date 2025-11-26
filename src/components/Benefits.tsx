'use client';

import { motion } from 'framer-motion';
import { Brain, Heart, Shield, Zap, Leaf, Award } from 'lucide-react';

const benefits = [
  {
    icon: Brain,
    title: 'Cognitive Enhancement',
    description: 'Improve memory, focus, and mental clarity with nootropic mushrooms like Lion\'s Mane',
    stat: '40%',
    statLabel: 'Improved Focus',
  },
  {
    icon: Shield,
    title: 'Immune Support',
    description: 'Strengthen your body\'s natural defenses with powerful beta-glucans and antioxidants',
    stat: '300%',
    statLabel: 'Antioxidant Boost',
  },
  {
    icon: Heart,
    title: 'Heart Health',
    description: 'Support cardiovascular wellness with cholesterol-balancing compounds',
    stat: '25%',
    statLabel: 'Cholesterol Reduction',
  },
  {
    icon: Zap,
    title: 'Natural Energy',
    description: 'Sustained vitality without the crash from adaptogens like Cordyceps',
    stat: '50%',
    statLabel: 'Energy Increase',
  },
  {
    icon: Leaf,
    title: 'Stress Relief',
    description: 'Balance cortisol levels and promote calm with adaptogenic varieties',
    stat: '35%',
    statLabel: 'Stress Reduction',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: '100% organic, sustainably cultivated, and third-party tested for purity',
    stat: '100%',
    statLabel: 'Certified Organic',
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-gradient-to-br from-[#1a4d2e] to-[#0f2919] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#d4af37]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#a8b899]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            The Power of <span className="text-gradient-gold">Mushrooms</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Discover the scientifically-backed health benefits that have made medicinal mushrooms 
            a cornerstone of wellness for thousands of years
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.title} benefit={benefit} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-premium px-10 py-4 bg-gradient-gold text-[#1a4d2e] font-bold rounded-full text-lg shadow-gold hover:shadow-2xl transition-all"
          >
            Explore Our Collection
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

function BenefitCard({ benefit, index }: { benefit: typeof benefits[0]; index: number }) {
  const Icon = benefit.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500"
    >
      {/* Icon */}
      <div className="relative mb-6">
        <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center shadow-gold group-hover:shadow-2xl transition-all">
          <Icon className="w-8 h-8 text-[#1a4d2e]" />
        </div>
        {/* Stat Badge */}
        <div className="absolute -top-2 -right-2 px-3 py-1 bg-[#d4af37] text-[#1a4d2e] text-xs font-bold rounded-full shadow-lg">
          {benefit.stat}
        </div>
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold text-white mb-3">
        {benefit.title}
      </h3>
      <p className="text-white/70 mb-4 leading-relaxed">
        {benefit.description}
      </p>
      <div className="text-sm text-[#d4af37] font-medium">
        {benefit.statLabel}
      </div>
    </motion.div>
  );
}
