'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, Shield, Award, Leaf } from 'lucide-react';
import Image from 'next/image';


const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Wellness Coach',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    rating: 5,
    text: 'The Lion&apos;s Mane from Royal Mushrooms has completely transformed my mental clarity and focus. I recommend it to all my wellness clients!',
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'Professional Chef',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    rating: 5,
    text: 'As a chef, I&apos;m incredibly selective about ingredients. These mushrooms are absolutely the finest I&apos;ve ever worked with. The flavor and quality are unmatched.',
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Yoga Instructor',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    rating: 5,
    text: 'Reishi has become essential to my evening routine. Better sleep, reduced stress, and more energy throughout the day. Absolutely life-changing!',
  },
  {
    id: 4,
    name: 'Michael Thompson',
    role: 'Entrepreneur',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    rating: 5,
    text: 'I was skeptical at first, but the Cordyceps energy boost is incredible. My productivity and stamina have improved dramatically. Can&apos;t recommend enough!',
  },
  {
    id: 5,
    name: 'Lisa Park',
    role: 'Nutritionist',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop',
    rating: 5,
    text: 'The purity and potency of these mushrooms is exceptional. I trust Royal Mushrooms for both my personal use and client recommendations.',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#E8A87C]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#A8C69F]/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl text-[#E8A87C] text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Customer Reviews
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Loved by <span className="text-[#E8A87C]">Thousands</span>
          </h2>
          <p className="text-xl text-white/90">
            Join our community of satisfied customers experiencing the Royal difference
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white/95 backdrop-blur-xl rounded-3xl p-12 md:p-16 shadow-2xl relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 left-8 w-20 h-20 bg-gradient-gold rounded-3xl flex items-center justify-center opacity-10 rotate-12">
                <Quote className="w-10 h-10 text-[#1a4d2e]" />
              </div>

              {/* Rating */}
              <div className="flex justify-center gap-2 mb-8">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: i * 0.1, type: "spring" }}
                  >
                    <Star className="w-7 h-7 fill-[#E8A87C] text-[#E8A87C]" />
                  </motion.div>
                ))}
              </div>

              {/* Text */}
              <p className="text-2xl md:text-3xl text-[#1a4d2e] text-center mb-10 leading-relaxed font-light">
                &quot;{testimonials[current].text}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-6">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="relative w-20 h-20 rounded-full overflow-hidden ring-4 ring-[#d4af37]/30"
                >
                  <Image
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <div className="text-left">
                  <div className="font-bold text-xl text-[#1a4d2e]">
                    {testimonials[current].name}
                  </div>
                  <div className="text-sm text-[#4a3428]/60 font-medium">
                    {testimonials[current].role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl text-white flex items-center justify-center hover:bg-[#d4af37] transition-all shadow-xl border border-white/20"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl text-white flex items-center justify-center hover:bg-[#d4af37] transition-all shadow-xl border border-white/20"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`transition-all rounded-full ${
                  index === current
                    ? 'bg-[#E8A87C] w-10 h-3'
                    : 'bg-white/30 w-3 h-3 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {[
            { icon: Shield, label: 'Organic Certified' },
            { icon: Award, label: '3rd Party Tested' },
            { icon: Leaf, label: 'Sustainably Grown' },
            { icon: Star, label: '500+ 5-Star Reviews' },
          ].map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:bg-white/10 transition-all"
            >
              <badge.icon className="w-8 h-8 text-[#E8A87C] mx-auto mb-3" />
              <div className="text-sm font-bold text-white">{badge.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
