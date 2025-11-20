'use client';

import { motion } from 'framer-motion';
import { Truck, Leaf, Clock, Award, Shield, Users } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Free Delivery',
    description: 'Orders over LKR 500',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-100',
  },
  {
    icon: Leaf,
    title: '100% Organic',
    description: 'Sustainably grown',
    color: 'from-lime-500 to-green-500',
    bgColor: 'bg-green-100',
  },
  {
    icon: Clock,
    title: 'Fresh Daily',
    description: 'Harvested to order',
    color: 'from-orange-500 to-amber-500',
    bgColor: 'bg-orange-100',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Hand-selected',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-100',
  },
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    description: '100% satisfaction',
    color: 'from-red-500 to-rose-500',
    bgColor: 'bg-red-100',
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: '24/7 assistance',
    color: 'from-teal-500 to-cyan-500',
    bgColor: 'bg-teal-100',
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-amber-50/50 via-white to-orange-50/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 bg-orange-300 rounded-full opacity-10 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-lime-300 rounded-full opacity-10 blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Why Choose <span className="text-gradient-nature">Royal Mushrooms</span>?
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Experience the difference with our commitment to quality, sustainability, and customer satisfaction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Card */}
              <div className="card rounded-2xl p-8 text-center h-full relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Icon container */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="relative inline-block mb-6"
                >
                  <div className={`absolute inset-0 ${feature.bgColor} rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity`} />
                  <div className={`relative inline-flex p-5 rounded-2xl bg-gradient-to-br ${feature.color}`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Floating sparkle */}
                  <motion.div
                    className="absolute -top-1 -right-1 text-amber-400"
                    animate={{ 
                      scale: [0, 1, 0],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  >
                    ✨
                  </motion.div>
                </motion.div>
              
                <h3 className="text-xl font-black text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-amber-400 transition-all">
                  {feature.title}
                </h3>
              
                <p className="text-gray-400 font-medium">
                  {feature.description}
                </p>

                {/* Bottom accent line */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "500+", label: "Happy Customers" },
            { value: "15+", label: "Varieties" },
            { value: "100%", label: "Organic" },
            { value: "24/7", label: "Support" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="text-center glass p-6 rounded-xl"
            >
              <motion.div 
                className="text-4xl font-black text-gradient-nature mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: 0.9 + i * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-gray-600 font-semibold">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
