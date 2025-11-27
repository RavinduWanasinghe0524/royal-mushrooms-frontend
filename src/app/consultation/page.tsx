'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Video, Home, Wrench, Check, Clock, Award, MapPin, Calendar, Phone, Mail, User } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';

type ServiceTier = 'online' | 'homeVisit' | 'fullSetup';

export default function ConsultationPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceTier>('online');
  const [showBookingForm, setShowBookingForm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Consultation booked successfully! We'll contact you soon.");
      setShowBookingForm(false);
    }, 1500);
  };

  const serviceTiers = [
    {
      id: 'online' as ServiceTier,
      icon: Video,
      name: 'Online Consultation',
      price: '2,500',
      duration: '30 minutes',
      description: 'Expert guidance via video or chat',
      features: [
        'Video or chat consultation',
        'Personalized recommendations',
        'Digital resource materials',
        'Follow-up email support',
        'Cultivation tips & best practices',
        'Product selection guidance'
      ],
      popular: false
    },
    {
      id: 'homeVisit' as ServiceTier,
      icon: Home,
      name: 'Home Visit Consultation',
      price: '15,000',
      duration: '2-3 hours',
      description: 'On-site assessment and personalized plan',
      features: [
        'On-site property assessment',
        'Soil and environment testing',
        'Personalized cultivation plan',
        'Starter kit recommendations',
        'Space optimization advice',
        'One month follow-up support'
      ],
      popular: true
    },
    {
      id: 'fullSetup' as ServiceTier,
      icon: Wrench,
      name: 'Full Setup Service',
      price: '50,000',
      duration: 'Complete package',
      description: 'Complete mushroom farm setup',
      features: [
        'Everything in Home Visit',
        'Complete equipment installation',
        'Hands-on training sessions',
        'Initial spawn & substrate',
        '3-month ongoing support',
        'Guaranteed harvest assistance',
        'Marketing & sales guidance'
      ],
      popular: false
    }
  ];

  const handleBookNow = (serviceId: ServiceTier) => {
    setSelectedService(serviceId);
    setShowBookingForm(true);
    // Scroll to form
    setTimeout(() => {
      document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen relative">
      <Navbar />
      
      {/* Dark Premium Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a4d2e] via-[#0f2919] to-[#0a1f12]" />
        
        {/* Animated Orbs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#d4af37]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1a4d2e]/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"
        />
      </div>
      
      <main className="pt-32 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-[#d4af37]/30 text-[#d4af37] text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              Expert Guidance
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-gradient-gold">Professional Consultation</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Choose the perfect consultation service for your mushroom cultivation journey
            </p>
          </motion.div>

          {/* Service Tier Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {serviceTiers.map((tier, i) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`glass-dark rounded-2xl p-8 border ${
                  tier.popular 
                    ? 'border-[#d4af37] ring-2 ring-[#d4af37]/50' 
                    : 'border-[#d4af37]/20'
                } hover:border-[#d4af37] transition-all group relative overflow-hidden`}
              >
                {tier.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-gold text-[#1a4d2e] px-4 py-1 text-sm font-bold rounded-bl-lg">
                    POPULAR
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <tier.icon className="w-10 h-10 text-[#d4af37]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-white/60 text-sm mb-4">{tier.description}</p>
                  <div className="mb-2">
                    <span className="text-5xl font-black text-gradient-gold">
                      {tier.price}
                    </span>
                    <span className="text-white/60 text-lg ml-2">LKR</span>
                  </div>
                  <p className="text-[#d4af37] text-sm font-semibold">{tier.duration}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-white/80">
                      <Check className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleBookNow(tier.id)}
                  className={`w-full py-4 rounded-lg font-semibold transition-all ${
                    tier.popular
                      ? 'bg-gradient-gold text-[#1a4d2e] shadow-lg shadow-[#d4af37]/50'
                      : 'bg-white/10 text-white border border-[#d4af37]/30 hover:bg-white/20'
                  }`}
                >
                  Book {tier.name}
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6 mb-20"
          >
            <div className="glass-dark rounded-xl p-6 border border-[#d4af37]/20 text-center">
              <div className="text-4xl font-black text-gradient-gold mb-2">500+</div>
              <p className="text-white/80">Successful Consultations</p>
            </div>
            <div className="glass-dark rounded-xl p-6 border border-[#d4af37]/20 text-center">
              <div className="text-4xl font-black text-gradient-gold mb-2">98%</div>
              <p className="text-white/80">Client Satisfaction</p>
            </div>
            <div className="glass-dark rounded-xl p-6 border border-[#d4af37]/20 text-center">
              <div className="text-4xl font-black text-gradient-gold mb-2">50+</div>
              <p className="text-white/80">Years Combined Experience</p>
            </div>
          </motion.div>

          {/* Booking Form */}
          {showBookingForm && (
            <motion.div
              id="booking-form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto"
            >
              <div className="glass-dark rounded-2xl p-8 border border-[#d4af37]/20">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">
                  Book Your Consultation
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Service Selection */}
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Selected Service
                    </label>
                    <select 
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value as ServiceTier)}
                      className="w-full px-4 py-3 bg-white/5 border border-[#d4af37]/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                    >
                      <option value="online">Online Consultation - LKR 2,500</option>
                      <option value="homeVisit">Home Visit Consultation - LKR 15,000</option>
                      <option value="fullSetup">Full Setup Service - LKR 50,000+</option>
                    </select>
                  </div>

                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        First Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-[#d4af37]/30 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-[#d4af37]/30 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-[#d4af37]/30 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        <Phone className="w-4 h-4 inline mr-2" />
                        Phone
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-[#d4af37]/30 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                        placeholder="+94 77 123 4567"
                      />
                    </div>
                  </div>

                  {/* Conditional Fields Based on Service */}
                  {selectedService === 'online' && (
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Preferred Platform
                      </label>
                      <select className="w-full px-4 py-3 bg-white/5 border border-[#d4af37]/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent">
                        <option>Zoom</option>
                        <option>Google Meet</option>
                        <option>WhatsApp Video</option>
                        <option>Live Chat</option>
                      </select>
                    </div>
                  )}

                  {(selectedService === 'homeVisit' || selectedService === 'fullSetup') && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-white/80 mb-2">
                          <MapPin className="w-4 h-4 inline mr-2" />
                          Address
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-[#d4af37]/30 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                          placeholder="Full address for visit"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white/80 mb-2">
                          Property/Farm Size
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-white/5 border border-[#d4af37]/30 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                          placeholder="e.g., 1000 sq ft, 1 acre"
                        />
                      </div>
                    </>
                  )}

                  {selectedService === 'fullSetup' && (
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-white/80 mb-2">
                          Budget Range
                        </label>
                        <select className="w-full px-4 py-3 bg-white/5 border border-[#d4af37]/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent">
                          <option>LKR 50,000 - 100,000</option>
                          <option>LKR 100,000 - 250,000</option>
                          <option>LKR 250,000 - 500,000</option>
                          <option>LKR 500,000+</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white/80 mb-2">
                          Timeline
                        </label>
                        <select className="w-full px-4 py-3 bg-white/5 border border-[#d4af37]/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent">
                          <option>Within 1 month</option>
                          <option>1-3 months</option>
                          <option>3-6 months</option>
                          <option>Flexible</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Date & Time */}
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Preferred Date & Time
                    </label>
                    <input
                      type="datetime-local"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-[#d4af37]/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Additional Information
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 border border-[#d4af37]/30 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                      placeholder="Tell us about your goals, experience level, or any specific questions..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex gap-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isLoading}
                      className="flex-1 py-4 bg-gradient-gold rounded-lg font-semibold text-[#1a4d2e] shadow-lg shadow-[#d4af37]/50 hover:shadow-glow transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <div className="w-6 h-6 border-2 border-[#1a4d2e]/30 border-t-[#1a4d2e] rounded-full animate-spin mx-auto" />
                      ) : (
                        'Confirm Booking'
                      )}
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={() => setShowBookingForm(false)}
                      className="px-8 py-4 bg-white/10 text-white border border-[#d4af37]/30 rounded-lg font-semibold hover:bg-white/20 transition-all"
                    >
                      Cancel
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>
          )}

          {/* Consultation Hours & Info */}
          {!showBookingForm && (
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="glass-dark rounded-2xl p-6 border border-[#d4af37]/20"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-[#d4af37]" />
                  <h3 className="text-xl font-bold text-white">Consultation Hours</h3>
                </div>
                <div className="space-y-2 text-white/80">
                  <p className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-semibold text-[#d4af37]">9:00 AM - 6:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-semibold text-[#d4af37]">10:00 AM - 4:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-semibold text-white/60">Closed</span>
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="glass-dark rounded-2xl p-6 border border-[#d4af37]/20"
              >
                <h3 className="text-xl font-bold text-white mb-3">Satisfaction Guarantee</h3>
                <p className="text-white/80 mb-4">
                  We're committed to your success. If you're not satisfied with your consultation, we'll make it right or provide a full refund.
                </p>
                <div className="flex items-center gap-2 text-[#d4af37] font-semibold">
                  <Check className="w-5 h-5" />
                  <span>100% Money-back guarantee</span>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
