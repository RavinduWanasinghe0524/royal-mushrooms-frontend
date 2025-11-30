'use client';

import { motion } from 'framer-motion';
import { Sprout, Droplet, Sun, Package, Sparkles } from 'lucide-react';
import Image from 'next/image';

const steps = [
  {
    icon: Sprout,
    title: 'Cultivation',
    description: 'We begin with premium organic substrate and carefully selected mushroom cultures, ensuring the perfect foundation for exceptional quality and potency.',
    image: 'https://images.unsplash.com/photo-1618162876774-90e429989ab6?q=80&w=1200&auto=format&fit=crop',
  },
  {
    icon: Droplet,
    title: 'Nurturing',
    description: 'Our climate-controlled facilities maintain optimal humidity, temperature, and airflow, creating ideal growing conditions for each mushroom variety.',
    image: 'https://images.unsplash.com/photo-1618162876801-4f0d81c5f849?q=80&w=1200&auto=format&fit=crop',
  },
  {
    icon: Sun,
    title: 'Maturation',
    description: 'We carefully monitor each batch, allowing mushrooms to develop peak nutritional value and potency before harvest at the perfect moment.',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=1200&auto=format&fit=crop',
  },
  {
    icon: Package,
    title: 'Quality Assurance',
    description: 'Every harvest undergoes rigorous third-party testing and careful packaging to preserve freshness and deliver excellence directly to you.',
    image: 'https://images.unsplash.com/photo-1606976470292-ac63eb3a6f2f?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8A87C]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A8C69F]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2D5F4C]/10 text-[#2D5F4C] text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 text-[#E8A87C]" />
            Our Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D5F4C] mb-6">
            From Spore to <span className="text-gradient-accent">Harvest</span>
          </h2>
          <p className="text-xl text-[#6B7B75] max-w-3xl mx-auto">
            We follow meticulous organic practices and sustainable methods to deliver 
            the finest mushrooms nature has to offer
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#2D5F4C] via-[#E8A87C] to-[#2D5F4C] transform -translate-x-1/2 opacity-30" />

          {/* Steps */}
          <div className="space-y-24">
            {steps.map((step, index) => (
              <ProcessStep key={step.title} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessStep({ step, index }: { step: typeof steps[0]; index: number }) {
  const Icon = step.icon;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`relative lg:grid lg:grid-cols-2 lg:gap-16 items-center ${
        isEven ? '' : 'lg:flex-row-reverse'
      }`}
    >
      {/* Content */}
      <div className={`${isEven ? 'lg:text-right lg:pr-8' : 'lg:col-start-2 lg:pl-8'}`}>
        <div className={`inline-flex items-center gap-4 mb-6 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
          <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center shadow-accent">
            <Icon className="w-8 h-8 text-white" />
          </div>
          <span className="text-7xl font-bold text-[#E8A87C]/10">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        <h3 className="text-4xl font-bold text-[#2D5F4C] mb-4">
          {step.title}
        </h3>
        <p className="text-lg text-[#6B7B75] leading-relaxed max-w-md">
          {step.description}
        </p>
      </div>

      {/* Image */}
      <div className={`mt-8 lg:mt-0 ${isEven ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'}`}>
        <motion.div
          whileHover={{ scale: 1.03, y: -5 }}
          transition={{ duration: 0.4 }}
          className="relative h-80 lg:h-96 rounded-3xl overflow-hidden shadow-strong"
        >
          <Image
            src={step.image}
            alt={step.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D5F4C]/60 via-[#2D5F4C]/20 to-transparent" />
          
          {/* Step Number Badge */}
          <div className="absolute top-6 left-6 w-14 h-14 rounded-full bg-gradient-accent flex items-center justify-center text-white font-bold text-xl shadow-accent">
            {index + 1}
          </div>
        </motion.div>
      </div>

      {/* Timeline Dot */}
      <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
          className="w-8 h-8 bg-gradient-accent rounded-full border-4 border-white shadow-accent"
        />
      </div>
    </motion.div>
  );
}
