'use client';

import { motion } from 'framer-motion';
import { Truck, Leaf, Clock, Award } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Free Delivery',
    description: 'Orders over LKR 500',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    icon: Leaf,
    title: '100% Organic',
    description: 'Sustainably grown',
    color: 'from-green-400 to-emerald-500',
  },
  {
    icon: Clock,
    title: 'Fresh Daily',
    description: 'Harvested to order',
    color: 'from-purple-400 to-pink-500',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Hand-selected',
    color: 'from-yellow-400 to-orange-500',
  },
];

export default function Features() {
  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-6 text-center group cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`inline-flex p-4 rounded-full bg-gradient-to-r ${feature.color} mb-4`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
