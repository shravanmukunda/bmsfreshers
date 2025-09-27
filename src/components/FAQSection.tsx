import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { FAQ } from '../types';

const FAQSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  
  const faqs: FAQ[] = [
    { 
      q: "What's the dress code?", 
      a: "Smart casual to formal attire. Black and red theme encouraged. Sophisticated dress code reflects the exclusive nature of the gathering." 
    },
    { 
      q: "Do I need identification?", 
      a: "Yes, valid college ID or government-issued ID is mandatory for entry. This ensures exclusive access for verified BMSCE students and guests." 
    },
    { 
      q: "What are the event timings?", 
      a: "Event begins at 2PM and continues into the night. Doors open at 1:30PM. Early arrivals receive priority access and seating." 
    },
    { 
      q: "Can I bring guests from other institutions?", 
      a: "Yes! The gathering welcomes BMSCE students and their distinguished guests. Guest passes available at standard pricing." 
    },
    { 
      q: "What's included with membership?", 
      a: "Entry to all exclusive performances, welcome privilege, access to VIP areas, professional photography, and exclusive member gifts." 
    },
    { 
      q: "Are refreshments available?", 
      a: "Yes, Toyboy offers premium dining and beverages. Special event menu curated for our exclusive gathering throughout the evening." 
    }
  ];

  return (
    <section className="py-24 px-4 relative z-10 bg-gradient-to-b from-black via-blood-900/10 to-black">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-crimson-500 font-display"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          ❓ MEMBER INQUIRIES ❓
        </motion.h2>
        
        <motion.p 
          className="text-xl text-gray-400 text-center mb-16 font-display"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Essential information for prospective members
        </motion.p>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border-2 border-red-600/40 rounded-xl overflow-hidden backdrop-blur-sm bg-gradient-to-r from-black/80 to-blood-900/30 hover:border-red-500/60 transition-colors"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <motion.button
                className="w-full text-left p-8 hover:bg-gradient-to-r hover:from-red-900/10 hover:to-crimson-900/10 transition-all duration-300"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl md:text-2xl font-semibold text-red-300 pr-4 font-display">
                    {faq.q}
                  </h3>
                  <motion.span 
                    className="text-2xl text-red-400 flex-shrink-0"
                    animate={{ rotate: openFAQ === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {openFAQ === index ? '✕' : '+'}
                  </motion.span>
                </div>
              </motion.button>
              
              <AnimatePresence>
                {openFAQ === index && (
                  <motion.div
                    className="border-t border-red-600/30 bg-black/50"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="p-8 pt-6">
                      <motion.p 
                        className="text-gray-300 text-lg leading-relaxed font-display"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                      >
                        {faq.a}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;