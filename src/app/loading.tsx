import { Leaf } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a4d2e] via-[#0f2919] to-[#0a1f12] flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-8">
          <div className="absolute inset-0 bg-gradient-gold rounded-full blur opacity-75 animate-pulse" />
          <div className="relative w-full h-full bg-gradient-gold rounded-full flex items-center justify-center shadow-gold animate-bounce">
            <Leaf className="w-12 h-12 text-[#1a4d2e] animate-spin" style={{ animationDuration: '3s' }} />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Royal Mushrooms</h2>
        <p className="text-white/60">Loading premium experience...</p>
      </div>
    </div>
  );
}
