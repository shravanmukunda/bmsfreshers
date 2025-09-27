import React from 'react';
import { motion } from 'framer-motion';

const BackgroundElements: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Geometric red patterns */}
      {Array.from({ length: 6 }, (_, i) => (
        <motion.div
          key={`diamond-${i}`}
          className="absolute border border-red-900/30"
          style={{
            width: Math.random() * 60 + 30,
            height: Math.random() * 60 + 30,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: 'rotate(45deg)',
          }}
          animate={{
            rotate: [45, 135, 225, 315, 45],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 12 + Math.random() * 8,
            repeat: Infinity,
            ease: 'linear',
            delay: Math.random() * 5,
          }}
        />
      ))}
      
      {/* Subtle triangular shapes */}
      {Array.from({ length: 4 }, (_, i) => (
        <motion.div
          key={`triangle-${i}`}
          className="absolute border border-red-800/20"
          style={{
            width: Math.random() * 80 + 40,
            height: Math.random() * 80 + 40,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: Math.random() * 8,
          }}
        />
      ))}
      
      {/* Floating lines */}
      {Array.from({ length: 3 }, (_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-red-900/40 to-transparent"
          style={{
            width: Math.random() * 200 + 100,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [-50, 50, -50],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 20 + Math.random() * 15,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: Math.random() * 10,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundElements;