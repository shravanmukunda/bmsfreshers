import React from 'react';
import { motion } from 'framer-motion';
import illuminatiLogo from '../illuminati-logo.svg';

const HeroSection: React.FC = () => {
  
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 z-10">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      <motion.div 
        className="text-center z-20 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >

        {/* Main Title */}
        <motion.div 
          className="mb-8 flex justify-center"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        >
          <img 
            src={illuminatiLogo} 
            alt="ILLUMINATI" 
            className="w-full max-w-4xl h-auto object-contain"
            style={{ filter: 'drop-shadow(0 0 20px rgba(220, 38, 38, 0.5))' }}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p 
          className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-yellow-500 tracking-widest drop-shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Freshers'25
        </motion.p>
        <div className="h-px bg-gradient-to-r from-transparent via-red-600 to-transparent mb-16"></div>

        {/* Event Details Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <div className="relative p-6 rounded-2xl bg-gradient-to-br from-red-900/40 to-black/50 border border-red-500/30 shadow-[0_0_25px_rgba(239,68,68,0.3)] hover:shadow-[0_0_40px_rgba(239,68,68,0.6)] transition-all duration-500">
          <div className="text-4xl mb-4 text-red-400 drop-shadow-lg">📅</div>
          <div className="text-2xl font-bold text-red-500 tracking-wide">October 5th, 2025</div>
          <div className="text-lg text-gray-300">Save the Date</div>
          </div>
  
          {/* Card 2 */}
          <div className="relative p-6 rounded-2xl bg-gradient-to-br from-red-900/40 to-black/50 border border-red-500/30 shadow-[0_0_25px_rgba(239,68,68,0.3)] hover:shadow-[0_0_40px_rgba(239,68,68,0.6)] transition-all duration-500">
            <div className="text-4xl mb-4 text-red-400 drop-shadow-lg">⏰</div>
            <div className="text-2xl font-bold text-red-500 tracking-wide">2PM Onwards</div>
          </div>
          
          {/* Card 3 */}
          <div className="relative p-6 rounded-2xl bg-gradient-to-br from-red-900/40 to-black/50 border border-red-500/30 shadow-[0_0_25px_rgba(239,68,68,0.3)] hover:shadow-[0_0_40px_rgba(239,68,68,0.6)] transition-all duration-500">
            <div className="text-4xl mb-4 text-red-400 drop-shadow-lg">📍</div>
            <div className="text-2xl font-bold text-red-500 tracking-wide">Toyboy, Lulu Mall</div>
            <div className="text-lg text-gray-300">Bangalore</div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.a 
          href="https://pages.razorpay.com/illuminati"
          className="relative inline-block px-12 py-5 rounded-xl text-2xl font-extrabold text-white bg-gradient-to-r from-red-600 via-red-500 to-red-700 shadow-[0_0_20px_rgba(239,68,68,0.6)] tracking-wide transition-all duration-300 overflow-hidden cursor-pointer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">🎫 GET PASSES NOW 🎫</span>
          {/* Shiny hover overlay */}
          <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition duration-500"></span>
        </motion.a>

      </motion.div>
    </section>
  );
};

export default HeroSection;