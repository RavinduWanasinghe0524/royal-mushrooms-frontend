'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Crown, Check, Zap, Shield, Star } from 'lucide-react';

export default function MembershipPage() {
  const plans = [
    {
      name: 'Basic',
      price: 0,
      icon: Star,
      features: [
        'Browse all products',
        'Standard delivery',
        'Email support',
        'Monthly newsletter',
      ],
      color: 'from-gray-400 to-gray-600',
    },
    {
      name: 'Premium',
      price: 2999,
      icon: Crown,
      features: [
        'All Basic features',
        'Free delivery on all orders',
        '15% discount on all products',
        'Priority customer support',
        'Access to exclusive products',
        'Monthly expert consultation',
      ],
      color: 'from-cyan-400 to-cyan-600',
      popular: true,
    },
    {
      name: 'Elite',
      price: 5999,
      icon: Zap,
      features: [
        'All Premium features',
        '25% discount on all products',
        'Same-day delivery',
        '24/7 VIP support',
        'Early access to rare mushrooms',
        'Weekly consultations',
        'Exclusive events & tastings',
      ],
      color: 'from-purple-400 to-purple-600',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient glow-text">Membership Plans</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose the perfect plan for your mushroom journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`cyber-card rounded-2xl p-8 relative ${
                  plan.popular ? 'ring-2 ring-cyan-500 md:scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center mb-6 mx-auto`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-3xl font-bold text-white mb-2 text-center">{plan.name}</h3>
                
                <div className="mb-6 text-center">
                  <span className="text-4xl font-bold text-gradient">
                    {plan.price === 0 ? 'Free' : `LKR ${plan.price}`}
                  </span>
                  {plan.price > 0 && <span className="text-gray-400">/month</span>}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/50'
                      : 'glass text-white hover:bg-cyan-500/10 border border-cyan-500/30'
                  }`}
                >
                  {plan.price === 0 ? 'Get Started' : 'Subscribe Now'}
                </motion.button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 glass-dark rounded-2xl p-8 text-center"
          >
            <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">30-Day Money-Back Guarantee</h3>
            <p className="text-gray-400">
              Not satisfied? Get a full refund within 30 days, no questions asked.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
