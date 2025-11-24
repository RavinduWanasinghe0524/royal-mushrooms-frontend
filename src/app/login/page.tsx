'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Lock, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<'member' | 'admin'>('member');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

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
    <div className="min-h-screen pt-32 pb-20 px-4 flex items-center justify-center bg-royal-cream relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
        <motion.div 
          className="absolute top-20 right-20 w-96 h-96 bg-royal-gold/10 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-96 h-96 bg-royal-green/10 rounded-full blur-[100px]"
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
          <h1 className="text-4xl font-serif font-bold text-royal-green mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to access your {activeTab} account</p>
        </div>

        <div className="card-royal rounded-3xl p-8">
          {/* Tabs */}
          <div className="flex p-1 bg-gray-100 rounded-xl mb-8 relative">
            <motion.div 
              className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-lg shadow-sm"
              animate={{ x: activeTab === 'member' ? 4 : '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            <button
              onClick={() => setActiveTab('member')}
              className={`flex-1 relative z-10 py-2.5 text-sm font-bold transition-colors ${
                activeTab === 'member' ? 'text-royal-green' : 'text-gray-500'
              }`}
            >
              Member
            </button>
            <button
              onClick={() => setActiveTab('admin')}
              className={`flex-1 relative z-10 py-2.5 text-sm font-bold transition-colors ${
                activeTab === 'admin' ? 'text-royal-green' : 'text-gray-500'
              }`}
            >
              Admin
            </button>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="email" 
                  placeholder={activeTab === 'member' ? "member@example.com" : "admin@royal.com"}
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
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-royal-gold focus:ring-2 focus:ring-royal-gold/20 outline-none transition-all"
                  required
                />
              </div>
            </div>

            {activeTab === 'admin' && (
              <div className="flex items-center space-x-2 text-xs text-royal-gold bg-royal-gold/10 p-3 rounded-lg">
                <ShieldCheck className="w-4 h-4" />
                <span>Secure Admin Portal Access</span>
              </div>
            )}

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
                  <span>Sign In</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              Don't have an account?{' '}
              <Link href="/signup" className="text-royal-gold font-bold hover:underline">
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
