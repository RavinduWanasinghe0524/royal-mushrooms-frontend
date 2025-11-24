'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ShoppingCart, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
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
      
      <main className="pt-32 pb-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-96 h-96 bg-[#d4af37]/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-[#1a4d2e]/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], x: [0, -50, 0] }}
            transition={{ duration: 18, repeat: Infinity }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-gradient-nature">Shopping Cart</span>
            </h1>
            <p className="text-xl text-[#4a3428]">
              {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
            </p>
          </motion.div>

          {cartItems.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <ShoppingCart className="w-24 h-24 text-[#d4af37] mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-[#4a3428] mb-4">Your cart is empty</h2>
              <p className="text-[#4a3428]/70 mb-8">Start adding some delicious mushrooms!</p>
              <motion.a
                href="/products"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-forest rounded-full font-semibold text-white shadow-lg shadow-[#1a4d2e]/50"
              >
                <span>Browse Products</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass rounded-xl p-6 border border-[#1a4d2e]/20"
                  >
                    <div className="flex items-center space-x-6">
                      <div className="relative w-24 h-24 flex-shrink-0 bg-gradient-to-br from-[#1a4d2e]/50 to-[#0f2919]/50 rounded-xl p-2 border border-[#1a4d2e]/30">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-contain opacity-90"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#1a4d2e] mb-2">{item.name}</h3>
                        <p className="text-2xl font-bold text-gradient-nature">LKR {item.price}</p>
                        <span className="text-xs text-[#4a3428]/70">per 250g</span>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2 bg-[#1a4d2e]/10 rounded-full px-4 py-2 border border-[#1a4d2e]/30">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateQuantity(item.id, -1)}
                            className="text-[#d4af37] hover:text-[#f4e4b0]"
                          >
                            <Minus className="w-4 h-4" />
                          </motion.button>
                          
                          <span className="text-[#1a4d2e] font-medium w-8 text-center">
                            {item.quantity}
                          </span>
                          
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateQuantity(item.id, 1)}
                            className="text-[#d4af37] hover:text-[#f4e4b0]"
                          >
                            <Plus className="w-4 h-4" />
                          </motion.button>
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => removeItem(item.id)}
                          className="p-2 text-red-400 hover:text-red-300"
                        >
                          <Trash2 className="w-5 h-5" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="glass rounded-xl p-6 sticky top-24 border border-[#1a4d2e]/20"
                >
                  <h2 className="text-2xl font-bold text-[#1a4d2e] mb-6">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-[#4a3428]">
                      <span>Subtotal</span>
                      <span>LKR {subtotal}</span>
                    </div>
                    
                    <div className="flex justify-between text-[#4a3428]">
                      <span>Delivery</span>
                      <span>{delivery === 0 ? 'FREE' : `LKR ${delivery}`}</span>
                    </div>
                    
                    {subtotal < 5000 && (
                      <p className="text-sm text-[#d4af37] bg-[#d4af37]/10 p-3 rounded-lg border border-[#d4af37]/30">
                        Add LKR {5000 - subtotal} more for free delivery!
                      </p>
                    )}
                    
                    <div className="border-t border-[#1a4d2e]/30 pt-4">
                      <div className="flex justify-between text-xl font-bold">
                        <span className="text-[#1a4d2e]">Total</span>
                        <span className="text-gradient-nature">LKR {total}</span>
                      </div>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-gold rounded-lg font-semibold text-[#1a4d2e] shadow-lg shadow-[#d4af37]/50 flex items-center justify-center space-x-2"
                  >
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    Secure checkout powered by Stripe
                  </p>
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
