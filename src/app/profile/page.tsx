'use client';

import { motion } from 'framer-motion';
import { User, Package, Settings, LogOut, MapPin, CreditCard, Bell } from 'lucide-react';
import Link from 'next/link';

export default function ProfilePage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-royal-cream relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="card-royal rounded-3xl p-6 sticky top-32">
              <div className="text-center mb-8">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-royal-gold to-amber-300 rounded-full blur-lg opacity-50" />
                  <div className="relative w-full h-full bg-gray-100 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <User className="w-full h-full p-4 text-gray-400" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 border-4 border-white rounded-full" />
                </div>
                <h2 className="text-xl font-serif font-bold text-royal-green">John Doe</h2>
                <p className="text-sm text-royal-gold font-medium">Premium Member</p>
              </div>

              <nav className="space-y-2">
                <ProfileLink icon={User} active>My Profile</ProfileLink>
                <ProfileLink icon={Package}>Orders</ProfileLink>
                <ProfileLink icon={MapPin}>Addresses</ProfileLink>
                <ProfileLink icon={CreditCard}>Payment Methods</ProfileLink>
                <ProfileLink icon={Bell}>Notifications</ProfileLink>
                <ProfileLink icon={Settings}>Settings</ProfileLink>
                <div className="pt-4 mt-4 border-t border-gray-100">
                  <Link href="/login">
                    <button className="w-full flex items-center space-x-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl transition-colors font-medium">
                      <LogOut className="w-5 h-5" />
                      <span>Sign Out</span>
                    </button>
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3 space-y-8"
          >
            {/* Welcome Banner */}
            <div className="bg-gradient-royal rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h1 className="text-3xl font-serif font-bold mb-2">Welcome back, John!</h1>
                <p className="text-green-100/80">You have 2 orders in transit and 150 loyalty points.</p>
              </div>
              <div className="absolute right-0 top-0 h-full w-1/2 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
              <div className="absolute -right-10 -bottom-20 w-64 h-64 bg-royal-gold/20 rounded-full blur-3xl" />
            </div>

            {/* Recent Orders */}
            <div className="card-royal rounded-3xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-serif font-bold text-royal-green">Recent Orders</h2>
                <button className="text-sm text-royal-gold font-bold hover:underline">View All</button>
              </div>

              <div className="space-y-4">
                {[1, 2].map((order) => (
                  <div key={order} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors border border-gray-100">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-white rounded-xl shadow-sm">
                        <Package className="w-6 h-6 text-royal-gold" />
                      </div>
                      <div>
                        <div className="font-bold text-royal-green">Order #RM-2024-{order}58</div>
                        <div className="text-sm text-gray-500">2 items • LKR 4,500</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 mb-1">
                        In Transit
                      </div>
                      <div className="text-xs text-gray-400">Est. Delivery: Nov 28</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Info Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card-royal rounded-3xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-serif font-bold text-royal-green">Personal Information</h2>
                  <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-royal-green transition-colors">
                    <Settings className="w-5 h-5" />
                  </button>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-xs text-gray-400 uppercase font-bold tracking-wider">Full Name</label>
                    <div className="font-medium text-gray-700">John Doe</div>
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 uppercase font-bold tracking-wider">Email</label>
                    <div className="font-medium text-gray-700">john.doe@example.com</div>
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 uppercase font-bold tracking-wider">Phone</label>
                    <div className="font-medium text-gray-700">+94 77 123 4567</div>
                  </div>
                </div>
              </div>

              <div className="card-royal rounded-3xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-serif font-bold text-royal-green">Default Address</h2>
                  <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-royal-green transition-colors">
                    <Settings className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-royal-green/5 rounded-xl">
                    <MapPin className="w-6 h-6 text-royal-green" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-700 mb-1">Home</div>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      123 Green Valley Road,<br />
                      Colombo 07,<br />
                      Sri Lanka
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function ProfileLink({ icon: Icon, children, active }: { icon: React.ElementType, children: React.ReactNode, active?: boolean }) {
  return (
    <button className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all font-medium ${
      active 
        ? 'bg-royal-green text-white shadow-lg shadow-royal-green/20' 
        : 'text-gray-600 hover:bg-gray-50 hover:text-royal-green'
    }`}>
      <Icon className="w-5 h-5" />
      <span>{children}</span>
    </button>
  );
}
