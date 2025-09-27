import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <motion.section 
      className="py-24 px-4 relative z-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Section divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-red-600 to-transparent mb-16"></div>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {/* Geometric symbol */}
          <div className="w-20 h-20 mx-auto mb-12">
            <div className="w-full h-full bg-gradient-to-br from-red-600 to-red-900 transform rotate-45 border-2 border-red-500 relative">
              <div className="absolute inset-2 border border-red-400 transform -rotate-45"></div>
            </div>
          </div>
          
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 font-orbitron"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Enter The Crimson
          </motion.h2>
          
          <motion.p 
            className="text-2xl md:text-3xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-exo"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Step into a world of bold elegance. An exclusive night of music, style, and unforgettable moments — 
            <span className="text-red-400 font-semibold"> designed for BMSCE Freshers and their circle.</span>
          </motion.p>
          
          <motion.div
            className="mt-12 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="text-center p-6 bg-gradient-to-br from-gray-900 to-black border border-red-900 rounded-lg hover:border-red-600 transition-all duration-300">
              <div className="text-4xl mb-4 text-red-500">💎</div>
              <h3 className="text-xl font-semibold text-red-400 mb-2 font-orbitron">Premium Experience</h3>
              <p className="text-gray-400 font-exo">Luxury meets sophistication</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-gray-900 to-black border border-red-900 rounded-lg hover:border-red-600 transition-all duration-300">
              <div className="text-4xl mb-4 text-red-500">🎭</div>
              <h3 className="text-xl font-semibold text-red-400 mb-2 font-orbitron">Exclusive Access</h3>
              <p className="text-gray-400 font-exo">For the discerning few</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-gray-900 to-black border border-red-900 rounded-lg hover:border-red-600 transition-all duration-300">
              <div className="text-4xl mb-4 text-red-500">🌹</div>
              <h3 className="text-xl font-semibold text-red-400 mb-2 font-orbitron">Memorable Night</h3>
              <p className="text-gray-400 font-exo">Moments carved in crimson</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;