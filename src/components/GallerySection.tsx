import React from 'react';
import { motion } from 'framer-motion';
import type { GalleryItem } from '../types';

const GallerySection: React.FC = () => {
  const placeholderImages: GalleryItem[] = [
    { id: 1, title: "Previous Gatherings" },
    { id: 2, title: "Elite Performances" },
    { id: 3, title: "Member Moments" },
    { id: 4, title: "Venue Elegance" },
    { id: 5, title: "Atmospheric Lighting" },
    { id: 6, title: "Brotherhood Energy" }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-blood-900/10 via-black to-blood-900/10 relative z-10">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-crimson-500 font-display"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          📸 LEGACY GALLERY 📸
        </motion.h2>
        
        <motion.p 
          className="text-xl text-gray-400 mb-16 font-display"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Witness the legacy of our exclusive gatherings...
        </motion.p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {placeholderImages.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative aspect-square bg-gradient-to-br from-black/80 to-blood-900/30 border-2 border-red-600/40 rounded-xl overflow-hidden hover:border-red-500/60 transition-colors"
              initial={{ opacity: 0, scale: 0.7, rotateY: 45 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Subtle pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.3)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
              </div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-black/50">
                <motion.div 
                  className="text-5xl mb-4 text-red-500"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  📸
                </motion.div>
                
                <h3 className="text-lg font-semibold text-red-300 mb-2 font-display">
                  {item.title}
                </h3>
                
                <p className="text-gray-400 text-sm font-display">
                  Coming Soon
                </p>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-crimson-600/0 hover:from-red-600/10 hover:to-crimson-600/10 transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Video Teaser Placeholder */}
        <motion.div
          className="bg-gradient-to-br from-black/90 to-blood-900/40 border-2 border-red-600/50 rounded-xl p-12 backdrop-blur-sm"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.div 
            className="text-6xl mb-6 text-red-500"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🎬
          </motion.div>
          
          <h3 className="text-3xl font-bold text-red-300 mb-4 font-display">
            Exclusive Event Reveal
          </h3>
          
          <p className="text-gray-300 text-lg mb-8 font-display">
            Official cinematic teaser releasing soon...
          </p>
          
          <motion.button 
            className="bg-gradient-to-r from-red-600 to-crimson-700 hover:from-red-500 hover:to-crimson-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform font-display border border-red-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🎥 Watch Preview
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;