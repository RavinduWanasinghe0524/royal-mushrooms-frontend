'use client';

import { motion } from 'framer-motion';
import { Truck, Leaf, Clock, Award } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Free Delivery',
    description: 'Orders over LKR 500',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Leaf,
    title: '100% Organic',
    description: 'Sustainably grown',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: Clock,
    title: 'Fresh Daily',
    description: 'Harvested to order',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Hand-selected',
    color: 'bg-purple-50 text-purple-600',
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-white">
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
              className="card rounded-xl p-6 text-center group cursor-pointer"
            >
              <div className={`inline-flex p-4 rounded-full ${feature.color} mb-4`}>
                <feature.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
