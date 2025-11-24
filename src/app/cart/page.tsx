'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Plus, Minus, Trash2, ArrowRight, ShieldCheck, Truck } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Image from 'next/image';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Forest Shiitake',
      price: 899,
      quantity: 2,
      image: '/images/shiitake.svg',
    },
    {
      id: 2,
      name: 'Pearl Oyster Mushrooms',
      price: 749,
      quantity: 1,
      image: '/images/oyster.svg',
    },
  ]);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
    toast.success('Item removed from cart');
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = subtotal > 5000 ? 0 : 300;
  const total = subtotal + delivery;

  return (
    <div className="min-h-screen bg-[#faf8f3]">
      <Navbar />
      
      <main className="pt-32 pb-20 relative overflow-hidden min-h-screen">
        {/* Background Decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
          <motion.div 
            className="absolute top-40 right-0 w-[600px] h-[600px] bg-royal-gold/10 rounded-full blur-[120px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-royal-green/10 rounded-full blur-[120px]"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 12, repeat: Infinity }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-center"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-royal-green mb-4">
              Your Shopping Cart
            </h1>
            <p className="text-xl text-gray-600">
              {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} selected for checkout
            </p>
          </motion.div>

          {cartItems.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20 glass-card rounded-3xl max-w-2xl mx-auto"
            >
              <div className="w-24 h-24 bg-royal-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingCart className="w-12 h-12 text-royal-gold" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-royal-green mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-8 text-lg">Looks like you haven't added any mushrooms yet.</p>
              <motion.a
                href="/products"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium inline-flex items-center space-x-2"
              >
                <span>Browse Products</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                <AnimatePresence>
                  {cartItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.1 }}
                      className="glass-card rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6 group hover:border-royal-gold/30 transition-colors"
                    >
                      <div className="relative w-32 h-32 flex-shrink-0 bg-gray-50 rounded-xl p-4">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-contain group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-xl font-bold text-royal-green mb-1">{item.name}</h3>
                        <p className="text-sm text-gray-500 mb-2">Premium Grade • 250g Pack</p>
                        <p className="text-2xl font-bold text-royal-gold">LKR {item.price}</p>
                      </div>

                      <div className="flex flex-col items-center gap-4">
                        <div className="flex items-center space-x-3 bg-white/50 rounded-full px-4 py-2 border border-gray-200">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-600 transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </motion.button>
                          
                          <span className="text-royal-green font-bold w-6 text-center">
                            {item.quantity}
                          </span>
                          
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-600 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </motion.button>
                        </div>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-sm text-red-400 hover:text-red-500 flex items-center gap-1 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                          <span>Remove</span>
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="glass-card rounded-2xl p-8 sticky top-32"
                >
                  <h2 className="text-2xl font-serif font-bold text-royal-green mb-6">Order Summary</h2>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span className="font-medium">LKR {subtotal}</span>
                    </div>
                    
                    <div className="flex justify-between text-gray-600">
                      <span>Delivery</span>
                      <span className="font-medium">{delivery === 0 ? 'FREE' : `LKR ${delivery}`}</span>
                    </div>
                    
                    {subtotal < 5000 && (
                      <div className="bg-royal-gold/10 p-4 rounded-xl border border-royal-gold/20 flex gap-3 items-start">
                        <Truck className="w-5 h-5 text-royal-gold flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-royal-brown">
                          Add <span className="font-bold">LKR {5000 - subtotal}</span> more for free delivery!
                        </p>
                      </div>
                    )}
                    
                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <div className="flex justify-between items-end">
                        <span className="text-lg font-bold text-royal-green">Total</span>
                        <div className="text-right">
                          <span className="text-3xl font-bold text-royal-gold block leading-none">LKR {total}</span>
                          <span className="text-xs text-gray-400">Including VAT</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-premium py-4 flex items-center justify-center space-x-2 mb-4"
                  >
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>

                  <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Secure checkout powered by Stripe</span>
                  </div>
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
