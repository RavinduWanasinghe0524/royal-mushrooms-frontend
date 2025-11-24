'use client';

import { motion } from 'framer-motion';
import { Truck, Leaf, Clock, Award, Shield, Users, ArrowUpRight } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Free Delivery',
    description: 'On all orders over LKR 500',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-200/20',
  },
  {
    icon: Leaf,
    title: '100% Organic',
    description: 'Sustainably grown & harvested',
    color: 'from-lime-500 to-green-500',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-200/20',
  },
  {
    icon: Clock,
    title: 'Fresh Daily',
    description: 'Harvested fresh to order',
    color: 'from-[#d4af37] to-[#b8941f]',
    bgColor: 'bg-[#d4af37]/10',
    borderColor: 'border-[#d4af37]/20',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Hand-selected for excellence',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-200/20',
  },
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    description: '100% satisfaction promise',
    color: 'from-red-500 to-rose-500',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-200/20',
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: '24/7 dedicated assistance',
    color: 'from-teal-500 to-cyan-500',
    bgColor: 'bg-teal-500/10',
    borderColor: 'border-teal-200/20',
  },
];

export default function Features() {
  return (
    <section className="py-32 bg-[#faf8f3] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
        <motion.div
          className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-[#1a4d2e]/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[#d4af37] font-bold tracking-wider uppercase text-sm mb-4 block">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a4d2e] mb-6 font-serif">
            The Royal Standard
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We don't just grow mushrooms; we cultivate excellence. Experience the difference 
            of premium quality, sustainable practices, and unmatched service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className={`h-full bg-white rounded-2xl p-8 border ${feature.borderColor} shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden`}>
                {/* Hover Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className="relative mb-8 inline-block">
                  <div className={`absolute inset-0 ${feature.bgColor} rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500`} />
                  <div className={`relative p-4 rounded-2xl bg-white border ${feature.borderColor} shadow-sm group-hover:shadow-md transition-all duration-500`}>
                    <feature.icon className={`w-8 h-8 bg-gradient-to-br ${feature.color} bg-clip-text text-transparent`} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-[#1a4d2e] mb-3 group-hover:text-[#d4af37] transition-colors duration-300 flex items-center gap-2">
                    {feature.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Line */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
