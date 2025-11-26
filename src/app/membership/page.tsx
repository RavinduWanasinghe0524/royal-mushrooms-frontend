'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Crown, Check, Zap, Shield, Star, ArrowRight } from 'lucide-react';

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
      borderColor: 'border-gray-200',
      buttonStyle: 'border-2 border-gray-200 hover:border-gray-400 text-gray-600',
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
      borderColor: 'border-[#d4af37]',
      popular: true,
      buttonStyle: 'bg-gradient-gold text-[#1a4d2e] shadow-gold hover:shadow-glow',
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
      borderColor: 'border-[#1a4d2e]',
      buttonStyle: 'bg-[#1a4d2e] text-white hover:bg-[#0f2919]',
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf8f3]">
      <Navbar />
      
      <main className="pt-32 pb-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-[#d4af37]/5 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 15, repeat: Infinity }}
          />
           <motion.div
            className="absolute -bottom-40 -right-40 w-[800px] h-[800px] bg-[#1a4d2e]/5 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 18, repeat: Infinity }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <span className="text-[#d4af37] font-bold tracking-wider uppercase text-sm mb-4 block">Membership</span>
            <h1 className="text-5xl md:text-6xl font-bold text-[#1a4d2e] mb-6 font-serif">
              Join the Kingdom
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Unlock exclusive benefits, premium access, and special pricing with our membership tiers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto items-center">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white rounded-3xl p-8 transition-all duration-300 ${
                  plan.popular 
                    ? 'shadow-2xl scale-105 z-10 border-2 border-[#d4af37]' 
                    : 'shadow-lg hover:shadow-xl border border-gray-100'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
                    <span className="bg-gradient-gold text-[#1a4d2e] px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                      <Crown className="w-4 h-4" />
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-6 mx-auto shadow-lg transform rotate-3`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-[#1a4d2e] mb-2 text-center">{plan.name}</h3>
                
                <div className="mb-8 text-center">
                  <span className="text-5xl font-bold text-[#1a4d2e] tracking-tight">
                    {plan.price === 0 ? 'Free' : `LKR ${plan.price.toLocaleString()}`}
                  </span>
                  {plan.price > 0 && <span className="text-gray-500 font-medium">/month</span>}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3 group">
                      <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center bg-gradient-to-br ${plan.color} flex-shrink-0`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-600 text-sm group-hover:text-[#1a4d2e] transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${plan.buttonStyle}`}
                >
                  {plan.price === 0 ? 'Get Started' : 'Subscribe Now'}
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-20 bg-white rounded-3xl p-12 text-center shadow-xl border border-gray-100 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-nature" />
            <div className="w-20 h-20 mx-auto mb-6 bg-green-50 rounded-full flex items-center justify-center">
              <Shield className="w-10 h-10 text-[#1a4d2e]" />
            </div>
            <h3 className="text-2xl font-bold text-[#1a4d2e] mb-4">30-Day Money-Back Guarantee</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              We&apos;re confident you&apos;ll love being part of our community. If you&apos;re not completely satisfied with your membership, 
              we&apos;ll refund your first month - no questions asked.
            </p>
            <div className="flex justify-center gap-8 text-sm font-medium text-gray-400">
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#d4af37]" /> No hidden fees</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#d4af37]" /> Cancel anytime</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#d4af37]" /> Secure payment</span>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
