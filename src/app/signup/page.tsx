'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Lock, Mail, ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Account created successfully!");
      router.push('/profile');
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 flex items-center justify-center bg-royal-cream relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
        <motion.div 
          className="absolute top-20 left-20 w-96 h-96 bg-royal-gold/10 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-royal-green/10 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-serif font-bold text-royal-green mb-2">Join Royal Nature</h1>
          <p className="text-gray-600">Start your premium mushroom journey today</p>
        </div>

        <div className="card-royal rounded-3xl p-8">
          <form onSubmit={handleSignup} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">First Name</label>
                <input 
                  type="text" 
                  placeholder="John"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-royal-gold focus:ring-2 focus:ring-royal-gold/20 outline-none transition-all"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Last Name</label>
                <input 
                  type="text" 
                  placeholder="Doe"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-royal-gold focus:ring-2 focus:ring-royal-gold/20 outline-none transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-royal-gold focus:ring-2 focus:ring-royal-gold/20 outline-none transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="tel" 
                  placeholder="+94 77 123 4567"
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-royal-gold focus:ring-2 focus:ring-royal-gold/20 outline-none transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="password" 
                  placeholder="Create a strong password"
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-royal-gold focus:ring-2 focus:ring-royal-gold/20 outline-none transition-all"
                  required
                />
              </div>
            </div>

            <div className="flex items-start space-x-3 pt-2">
              <input type="checkbox" className="mt-1 w-4 h-4 text-royal-green rounded border-gray-300 focus:ring-royal-gold" required />
              <p className="text-xs text-gray-500">
                I agree to the <Link href="/terms" className="text-royal-gold hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-royal-gold hover:underline">Privacy Policy</Link>.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isLoading}
              className="w-full py-4 bg-royal-green text-white rounded-xl font-bold shadow-lg shadow-royal-green/20 flex items-center justify-center space-x-2 hover:bg-green-900 transition-colors disabled:opacity-70"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <span>Create Account</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              Already have an account?{' '}
              <Link href="/login" className="text-royal-gold font-bold hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
