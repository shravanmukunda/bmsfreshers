import React from 'react';
import { motion } from 'framer-motion';
import type { TicketPhase } from '../types';

const TicketsSection: React.FC = () => {
  const phases: TicketPhase[] = [
    { 
      name: "Early Bird", 
      status: "Limited Availability", 
      price: "₹799",
      color: "bg-gray-900/50",
      glowColor: "",
      available: true,
      features: ["Elite Entry", "Welcome Drink", "VIP Access"]
    },
    { 
      name: "Standard", 
      status: "Coming Soon", 
      price: "₹999",
      color: "bg-gray-900/50",
      glowColor: "",
      available: false,
      features: ["Standard Entry", "Event Access", "Refreshments"]
    },
    { 
      name: "Last Chance", 
      status: "Final Phase", 
      price: "₹1299",
      color: "bg-gray-900/50",
      glowColor: "",
      available: false,
      features: ["Last Chance", "Premium Seats", "Full Access"]
    }
  ];

  const handleTicketClick = (phase: TicketPhase) => {
    if (phase.available) {
      alert('Redirecting to secure payment...');
    } else {
      alert('This phase is not available yet!');
    }
  };

  return (
    <section className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section divider */}
        <div className="section-divider mb-16"></div>
        
        <motion.h2 
          className="text-5xl md:text-6xl font-bold mb-8 text-red-600"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          SECURE YOUR PASSAGE
        </motion.h2>
        
        <motion.p 
          className="text-xl text-gray-400 mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Join the brotherhood of the chosen. Limited seats for this exclusive gathering.
        </motion.p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              className={`card-minimal ${phase.color} border border-red-600/50 rounded-2xl overflow-hidden ${!phase.available ? 'opacity-75' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: phase.available ? 1 : 0.75, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <div className="relative z-10 p-8">
                {/* Phase indicator */}
                <div className="bg-black border border-red-500/50 rounded-full px-4 py-2 text-sm font-semibold mb-6 text-red-300">
                  {phase.available ? 'Available' : 'Coming Soon'}
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white">
                  {phase.name}
                </h3>
                
                <div className="text-4xl font-black mb-2 text-red-400">
                  {phase.price}
                </div>
                
                <p className="text-red-300 mb-6 text-sm">
                  {phase.status}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-8">
                  {phase.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-300">
                      <span className="mr-2 text-red-400">•</span>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.button 
                  className={`w-full py-4 rounded-lg text-lg font-bold transition-all duration-300 border-2 ${
                    phase.available 
                      ? 'btn-primary text-white' 
                      : 'bg-gray-800/50 border-gray-600 text-gray-400 cursor-not-allowed'
                  }`}
                  onClick={() => handleTicketClick(phase)}
                  whileTap={phase.available ? { scale: 0.95 } : {}}
                  disabled={!phase.available}
                >
                  {phase.available ? 'GET TICKETS' : 'COMING SOON'}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 bg-gray-900/50 border border-red-600/50 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-lg text-red-400 mb-4">
            <strong>Early Bird Special:</strong> Limited time offer with exclusive benefits!
          </p>
          <p className="text-gray-400">
            Secured Payment Gateway • 100% Encrypted • Instant Confirmation
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TicketsSection;