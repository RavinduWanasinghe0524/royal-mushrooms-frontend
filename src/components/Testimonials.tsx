'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, User } from 'lucide-react';


const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Wellness Coach',
    image: '/api/placeholder/100/100',
    rating: 5,
    text: 'The Lion&apos;s Mane from Royal Mushrooms has completely transformed my mental clarity. I&apos;ve been recommending it to all my clients!',
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'Professional Chef',
    image: '/api/placeholder/100/100',
    rating: 5,
    text: 'As a chef, I&apos;m incredibly picky about ingredients. These mushrooms are the finest I&apos;ve ever worked with. The flavor and quality are unmatched.',
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Yoga Instructor',
    image: '/api/placeholder/100/100',
    rating: 5,
    text: 'Reishi has become an essential part of my evening routine. Better sleep, less stress, and more energy. Absolutely life-changing!',
  },
  {
    id: 4,
    name: 'Michael Thompson',
    role: 'Entrepreneur',
    image: '/api/placeholder/100/100',
    rating: 5,
    text: 'I was skeptical at first, but the Cordyceps boost is real. My productivity and stamina have improved dramatically. Can&apos;t recommend enough!',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-[#a8b899]/20 to-[#d4af37]/10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-[#1a4d2e] mb-6">
            What Our Customers <span className="text-gradient-gold">Say</span>
          </h2>
          <p className="text-xl text-[#4a3428]/70">
            Join thousands of satisfied customers experiencing the Royal difference
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-12 shadow-premium relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center opacity-20">
                <Quote className="w-8 h-8 text-[#1a4d2e]" />
              </div>

              {/* Rating */}
              <div className="flex justify-center gap-2 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-[#d4af37] text-[#d4af37]" />
                ))}
              </div>



              {/* Text */}
              <p className="text-2xl text-[#4a3428] text-center mb-8 leading-relaxed">
                &quot;{testimonials[current].text}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-[#d4af37]/30 flex items-center justify-center bg-gradient-gold">
                  <User className="w-8 h-8 text-[#1a4d2e]" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-lg text-[#1a4d2e]">
                    {testimonials[current].name}
                  </div>
                  <div className="text-sm text-[#4a3428]/60">
                    {testimonials[current].role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-[#1a4d2e] text-white flex items-center justify-center hover:bg-[#d4af37] transition-all shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-[#1a4d2e] text-white flex items-center justify-center hover:bg-[#d4af37] transition-all shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === current
                    ? 'bg-[#d4af37] w-8'
                    : 'bg-[#1a4d2e]/30'
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
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {['Organic Certified', '3rd Party Tested', 'Sustainably Grown', '500+ Reviews'].map((badge) => (
            <div key={badge} className="text-center p-6 bg-white rounded-2xl shadow-md">
              <div className="text-lg font-bold text-[#1a4d2e]">{badge}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
