'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Lock, Mail, ArrowRight, Phone, Leaf } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
    <div className="min-h-screen bg-[#faf8f3]">
      <Navbar />
      
      <div className="min-h-screen pt-32 pb-20 px-4 flex items-center justify-center relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a4d2e] via-[#0f2919] to-[#0a1f12]" />
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay" />
          
          {/* Animated Orbs */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#d4af37]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1a4d2e]/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"
          />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 z-1 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#d4af37] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 0.8, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md relative z-10"
        >
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="w-16 h-16 mx-auto mb-6 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold"
            >
              <Leaf className="w-8 h-8 text-[#1a4d2e]" />
            </motion.div>
            <h1 className="text-4xl font-serif font-bold text-white mb-2">Join Royal Mushrooms</h1>
            <p className="text-white/60">Start your premium mushroom journey today</p>
          </div>

          <div className="glass-dark rounded-3xl p-8 border border-white/10 shadow-premium backdrop-blur-xl">
            <form onSubmit={handleSignup} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/80 ml-1">First Name</label>
                  <input 
                    type="text" 
                    placeholder="John"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none transition-all"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/80 ml-1">Last Name</label>
                  <input 
                    type="text" 
                    placeholder="Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-white/80 ml-1">Email Address</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 group-focus-within:text-[#d4af37] transition-colors" />
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-white/80 ml-1">Phone Number</label>
                <div className="relative group">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 group-focus-within:text-[#d4af37] transition-colors" />
                  <input 
                    type="tel" 
                    placeholder="+94 77 123 4567"
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-white/80 ml-1">Password</label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 group-focus-within:text-[#d4af37] transition-colors" />
                  <input 
                    type="password" 
                    placeholder="Create a strong password"
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div className="flex items-start space-x-3 pt-2">
                <input type="checkbox" className="mt-1 w-4 h-4 text-[#d4af37] rounded border-white/20 focus:ring-[#d4af37] bg-white/5" required />
                <p className="text-xs text-white/60">
                  I agree to the <Link href="/terms" className="text-[#d4af37] hover:text-[#f4e4b0] transition-colors">Terms of Service</Link> and <Link href="/privacy" className="text-[#d4af37] hover:text-[#f4e4b0] transition-colors">Privacy Policy</Link>.
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(212, 175, 55, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                disabled={isLoading}
                className="w-full py-4 bg-gradient-gold text-[#1a4d2e] rounded-xl font-bold shadow-gold flex items-center justify-center space-x-2 hover:shadow-glow transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-[#1a4d2e]/30 border-t-[#1a4d2e] rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Create Account</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-white/40 text-sm">
                Already have an account?{' '}
                <Link href="/login" className="text-[#d4af37] font-bold hover:text-[#f4e4b0] transition-colors">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
