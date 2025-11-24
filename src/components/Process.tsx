'use client';

import { motion } from 'framer-motion';
import { Sprout, Droplet, Sun, Package } from 'lucide-react';
import Image from 'next/image';

const steps = [
  {
    icon: Sprout,
    title: 'Inoculation',
    description: 'We start with premium, organic substrate and carefully selected mushroom cultures to ensure the highest quality foundation.',
    image: '/images/shiitake.png',
  },
  {
    icon: Droplet,
    title: 'Cultivation',
    description: 'Our state-of-the-art facilities maintain optimal humidity, temperature, and airflow for perfect growing conditions.',
    image: '/images/oyster.png',
  },
  {
    icon: Sun,
    title: 'Maturation',
    description: 'We monitor each batch closely, allowing mushrooms to reach peak potency and nutritional value before harvesting.',
    image: '/images/portobello.svg',
  },
  {
    icon: Package,
    title: 'Quality Control',
    description: 'Every harvest undergoes rigorous testing and careful packaging to preserve freshness and deliver excellence to your door.',
    image: '/images/shiitake.png',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-[#faf8f3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-[#1a4d2e] mb-6">
            Our <span className="text-gradient-gold">Cultivation Process</span>
          </h2>
          <p className="text-xl text-[#4a3428]/70 max-w-3xl mx-auto">
            From spore to harvest, we follow meticulous organic practices to deliver 
            the finest mushrooms nature has to offer
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#1a4d2e] via-[#d4af37] to-[#1a4d2e] transform -translate-x-1/2" />

          {/* Steps */}
          <div className="space-y-16">
            {steps.map((step, index) => (
              <ProcessStep key={step.title} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessStep({ step, index }: { step: any; index: number }) {
  const Icon = step.icon;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative lg:grid lg:grid-cols-2 lg:gap-16 items-center ${
        isEven ? '' : 'lg:flex-row-reverse'
      }`}
    >
      {/* Content */}
      <div className={`${isEven ? 'lg:text-right' : 'lg:col-start-2'}`}>
        <div className="inline-flex items-center gap-3 mb-4">
          <div className={`w-14 h-14 bg-gradient-gold rounded-2xl flex items-center justify-center shadow-gold ${isEven ? 'lg:order-2' : ''}`}>
            <Icon className="w-7 h-7 text-[#1a4d2e]" />
          </div>
          <span className="text-6xl font-bold text-[#d4af37]/20">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        <h3 className="text-3xl font-bold text-[#1a4d2e] mb-4">
          {step.title}
        </h3>
        <p className="text-lg text-[#4a3428]/70 leading-relaxed">
          {step.description}
        </p>
      </div>

      {/* Image */}
      <div className={`mt-8 lg:mt-0 ${isEven ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'}`}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative h-64 lg:h-80 rounded-3xl overflow-hidden shadow-premium hover:shadow-2xl transition-all"
        >
          <Image
            src={step.image}
            alt={step.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a4d2e]/50 to-transparent" />
        </motion.div>
      </div>

      {/* Timeline Dot */}
      <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 + 0.3 }}
          className="w-6 h-6 bg-[#d4af37] rounded-full border-4 border-[#faf8f3] shadow-gold"
        />
      </div>
    </motion.div>
  );
}
