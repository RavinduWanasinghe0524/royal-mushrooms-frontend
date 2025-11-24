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
      color: 'from-[#d4af37] to-[#b8941f]',
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
      color: 'from-[#1a4d2e] to-[#0f2919]',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#faf8f3] via-white to-[#c9d4bc]/30">
      <Navbar />
      
      <main className="pt-32 pb-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-40 -left-40 w-96 h-96 bg-[#d4af37]/10 rounded-full opacity-10 blur-3xl"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
          />
                   <motion.div
            className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#d4af37]/10 rounded-full opacity-10 blur-3xl"
            animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
            transition={{ duration: 18, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-80 h-80 bg-[#1a4d2e]/5 rounded-full opacity-5 blur-3xl"
            animate={{ scale: [1, 1.4, 1] }}
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
              <span className="text-gradient-nature">Membership Plans</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
                className={`glass rounded-2xl p-8 relative border ${
                  plan.popular ? 'ring-2 ring-[#d4af37] border-[#a8b899]/30 md:scale-105' : 'border-[#a8b899]/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-gold text-[#1a4d2e] px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center mb-6 mx-auto`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">{plan.name}</h3>
                
                <div className="mb-6 text-center">
                  <span className="text-4xl font-bold text-gradient-nature">
                    {plan.price === 0 ? 'Free' : `LKR ${plan.price}`}
                  </span>
                  {plan.price > 0 && <span className="text-gray-600">/month</span>}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-[#d4af37] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-gold text-[#1a4d2e] shadow-lg shadow-[#d4af37]/50'
                      : 'bg-white text-gray-700 border-2 border-[#a8b899]/30 hover:bg-[#faf8f3] hover:border-[#d4af37]'
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
            className="mt-16 glass rounded-2xl p-8 text-center border border-[#a8b899]/20"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">30-Day Money-Back Guarantee</h3>
            <p className="text-gray-600">
              Not satisfied? Get a full refund within 30 days, no questions asked.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
