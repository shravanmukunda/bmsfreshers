import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-4 bg-black border-t border-red-600/40 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section divider */}
        <div className="section-divider mb-16"></div>
        
        {/* Main footer content */}
        <div className="text-center mb-12">
          <motion.div
            className="w-16 h-16 mx-auto mb-6 border-4 border-red-600 transform rotate-45 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-6 h-6 bg-red-600 transform -rotate-45"></div>
          </motion.div>
          
          <motion.h3 
            className="text-3xl md:text-4xl font-bold mb-4 text-red-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Stay Connected
          </motion.h3>
          
          <motion.p 
            className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Follow us for exclusive updates and member announcements
          </motion.p>
        </div>

        {/* Social links */}
        <motion.div 
          className="flex justify-center space-x-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.a 
            href="https://www.instagram.com/campuscartel_bmsce/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="card-minimal bg-gray-900/50 border border-red-600/50 rounded-lg px-6 py-4 flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-2xl text-red-500">📷</span>
            <span className="text-lg font-semibold text-red-300">
              @campuscartel
            </span>
          </motion.a>
          
          <motion.a 
            href="https://wa.me/8792841557" 
            target="_blank" 
            rel="noopener noreferrer"
            className="card-minimal bg-gray-900/50 border border-red-600/50 rounded-lg px-6 py-4 flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-2xl text-red-500">💬</span>
            <span className="text-lg font-semibold text-red-300">
              Contact Us
            </span>
          </motion.a>
        </motion.div>
        
        {/* Bottom section */}
        <motion.div 
          className="border-t border-red-800/30 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="text-gray-400">
              <p className="text-sm">Event Organized by</p>
              <p className="text-red-300 font-semibold">Campus Cartel</p>
            </div>
            
            <div className="text-center">
              <p className="text-gray-500 text-sm mb-2">
                &copy; 2025 Campus Cartel. All rights reserved.
              </p>
              <p className="text-red-400 font-semibold text-lg">
                The brotherhood awaits...
              </p>
            </div>
            
            <div className="text-gray-400 text-right">
              <p className="text-sm">Powered by</p>
              <p className="text-red-300 font-semibold">Modern Web Tech</p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;