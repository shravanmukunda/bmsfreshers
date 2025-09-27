import React from 'react';
import { motion } from 'framer-motion';
import type { Highlight } from '../types';

const HighlightsSection: React.FC = () => {
  const highlights: Highlight[] = [
    { 
      title: "800+ Elite Members", 
      desc: "Largest exclusive gathering", 
      icon: "👥",
      color: "bg-gray-900/50",
      border: "border-red-600/50",
      textColor: "text-red-400"
    },
    { 
      title: "Premium Entertainment", 
      desc: "Top-tier performances", 
      icon: "🎵",
      color: "bg-gray-900/50",
      border: "border-red-600/50",
      textColor: "text-red-400"
    },
    { 
      title: "Sophisticated Venue", 
      desc: "Luxurious atmosphere", 
      icon: "🏛️",
      color: "bg-gray-900/50",
      border: "border-red-600/50",
      textColor: "text-red-400"
    },
    { 
      title: "Secret Society Theme", 
      desc: "Mysterious ambiance", 
      icon: "⚡",
      color: "bg-gray-900/50",
      border: "border-red-600/50",
      textColor: "text-red-400"
    }
  ];

  return (
    <section className="py-24 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section divider */}
        <div className="section-divider mb-16"></div>
        
        <motion.h2 
          className="text-5xl md:text-6xl font-bold text-center mb-20 text-red-600 font-display"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          EVENT HIGHLIGHTS
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className={`${item.color} ${item.border} border rounded-xl p-8 text-center card-minimal relative overflow-hidden`}
              initial={{ opacity: 0, y: 80, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative z-10">
                <motion.div 
                  className="text-5xl mb-6 text-red-500"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.icon}
                </motion.div>
                
                <h3 className={`text-xl font-bold ${item.textColor} mb-4 font-display`}>
                  {item.title}
                </h3>
                
                <p className="text-gray-300 text-base leading-relaxed font-display">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;