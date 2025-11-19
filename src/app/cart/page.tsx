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
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient glow-text">Shopping Cart</span>
            </h1>
            <p className="text-xl text-gray-400">
              {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
            </p>
          </motion.div>

          {cartItems.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <ShoppingCart className="w-24 h-24 text-gray-600 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-gray-400 mb-4">Your cart is empty</h2>
              <p className="text-gray-500 mb-8">Start adding some delicious mushrooms!</p>
              <motion.a
                href="/products"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold text-white"
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
                    className="cyber-card rounded-xl p-6"
                  >
                    <div className="flex items-center space-x-6">
                      <div className="relative w-24 h-24 flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                        <p className="text-2xl font-bold text-gradient">LKR {item.price}</p>
                        <span className="text-xs text-gray-500">per 250g</span>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2 glass rounded-full px-4 py-2">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateQuantity(item.id, -1)}
                            className="text-cyan-400 hover:text-cyan-300"
                          >
                            <Minus className="w-4 h-4" />
                          </motion.button>
                          
                          <span className="text-white font-medium w-8 text-center">
                            {item.quantity}
                          </span>
                          
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateQuantity(item.id, 1)}
                            className="text-cyan-400 hover:text-cyan-300"
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
                  className="cyber-card rounded-xl p-6 sticky top-24"
                >
                  <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-gray-300">
                      <span>Subtotal</span>
                      <span>LKR {subtotal}</span>
                    </div>
                    
                    <div className="flex justify-between text-gray-300">
                      <span>Delivery</span>
                      <span>{delivery === 0 ? 'FREE' : `LKR ${delivery}`}</span>
                    </div>
                    
                    {subtotal < 5000 && (
                      <p className="text-sm text-cyan-400">
                        Add LKR {5000 - subtotal} more for free delivery!
                      </p>
                    )}
                    
                    <div className="border-t border-cyan-500/20 pt-4">
                      <div className="flex justify-between text-xl font-bold">
                        <span className="text-white">Total</span>
                        <span className="text-gradient">LKR {total}</span>
                      </div>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold text-white shadow-lg shadow-cyan-500/50 flex items-center justify-center space-x-2"
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
