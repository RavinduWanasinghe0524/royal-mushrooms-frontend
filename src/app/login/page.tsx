'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Lock, ArrowRight, ShieldCheck, Leaf } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<'member' | 'admin'>('member');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [particles, setParticles] = useState<{ left: string; top: string; duration: number; delay: number }[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setParticles([...Array(10)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: 5 + Math.random() * 5,
        delay: Math.random() * 5,
      })));
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success(`Welcome back, ${activeTab === 'member' ? 'Member' : 'Admin'}!`);
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
        {/* Floating Particles */}
        <div className="absolute inset-0 z-1 pointer-events-none">
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#d4af37] rounded-full"
              style={{
                left: particle.left,
                top: particle.top,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 0.8, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
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
            <h1 className="text-4xl font-serif font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-white/60">Sign in to access your {activeTab} account</p>
          </div>

          <div className="glass-dark rounded-3xl p-8 border border-white/10 shadow-premium backdrop-blur-xl">
            {/* Tabs */}
            <div className="flex p-1 bg-black/20 rounded-xl mb-8 relative">
              <motion.div 
                className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-gradient-gold rounded-lg shadow-lg"
                animate={{ x: activeTab === 'member' ? 4 : '100%' }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
              <button
                onClick={() => setActiveTab('member')}
                className={`flex-1 relative z-10 py-2.5 text-sm font-bold transition-colors duration-300 ${
                  activeTab === 'member' ? 'text-[#1a4d2e]' : 'text-white/60 hover:text-white'
                }`}
              >
                Member
              </button>
              <button
                onClick={() => setActiveTab('admin')}
                className={`flex-1 relative z-10 py-2.5 text-sm font-bold transition-colors duration-300 ${
                  activeTab === 'admin' ? 'text-[#1a4d2e]' : 'text-white/60 hover:text-white'
                }`}
              >
                Admin
              </button>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-white/80 ml-1">Email Address</label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 group-focus-within:text-[#d4af37] transition-colors" />
                  <input 
                    type="email" 
                    placeholder={activeTab === 'member' ? "member@example.com" : "admin@royal.com"}
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none transition-all"
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
                    placeholder="••••••••"
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none transition-all"
                    required
                  />
                </div>
              </div>

              {activeTab === 'admin' && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="flex items-center space-x-2 text-xs text-[#d4af37] bg-[#d4af37]/10 p-3 rounded-lg border border-[#d4af37]/20"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Secure Admin Portal Access</span>
                </motion.div>
              )}

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
                    <span>Sign In</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-white/40 text-sm">
                Don&apos;t have an account?{' '}
                <Link href="/signup" className="text-[#d4af37] font-bold hover:text-[#f4e4b0] transition-colors">
                  Create Account
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
