import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { TimeLeft } from '../types';

const CountdownSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [isEventStarted, setIsEventStarted] = useState<boolean>(false);

  useEffect(() => {
    const targetDate = new Date('2025-10-05T14:00:00+05:30');
    
    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setIsEventStarted(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section divider */}
        <div className="section-divider mb-16"></div>
        
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-8 text-red-600 font-display"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {isEventStarted ? 'THE BROTHERHOOD ASSEMBLES!' : 'THE GATHERING BEGINS IN'}
        </motion.h2>
        
        {!isEventStarted && (
          <motion.p 
            className="text-xl text-gray-400 mb-16 font-display"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Every moment brings us closer to the revelation...
          </motion.p>
        )}
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {Object.entries(timeLeft).map(([unit, value], index) => (
            <motion.div
              key={unit}
              className="card-minimal bg-gray-900/50 border border-red-600/50 rounded-xl p-8 relative"
              initial={{ opacity: 0, scale: 0.3 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.15, 
                duration: 0.8,
                type: "spring",
                stiffness: 200
              }}
            >
              <div className="relative z-10">
                <motion.div 
                  className="text-4xl md:text-6xl font-black text-red-400 mb-4 font-mono"
                  animate={{ opacity: [1, 0.8, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {value.toString().padStart(2, '0')}
                </motion.div>
                
                <div className="text-sm md:text-base text-gray-300 uppercase tracking-wider font-semibold font-display">
                  {unit}
                </div>
              </div>
              
              {/* Simple corner decorations */}
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-red-500"></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-red-500"></div>
            </motion.div>
          ))}
        </div>

        {isEventStarted && (
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p className="text-2xl text-red-400 font-semibold font-display">
              Join the Elite at Toyboy, Lulu Mall!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CountdownSection;