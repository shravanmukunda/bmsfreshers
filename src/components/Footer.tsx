import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 md:py-16 px-4 bg-black border-t border-red-600/40 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section divider */}
        <div className="section-divider mb-8 md:mb-16"></div>
        
        {/* Main footer content */}
        <div className="text-center mb-8 md:mb-12">
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
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-red-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Stay Connected
          </motion.h3>
          
          <motion.p 
            className="text-gray-400 text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto px-4"
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
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 md:space-x-8 mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.a 
            href="https://www.instagram.com/campuscartel_bmsce/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="card-minimal bg-gray-900/50 border border-red-600/50 rounded-lg px-4 md:px-6 py-3 md:py-4 flex items-center space-x-2 md:space-x-3 w-full sm:w-auto max-w-xs sm:max-w-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xl md:text-2xl text-red-500">📷</span>
            <span className="text-sm md:text-lg font-semibold text-red-300">
              @campuscartel_bmsce
            </span>
          </motion.a>
          
          <motion.a 
            href="https://wa.me/8792841557" 
            target="_blank" 
            rel="noopener noreferrer"
            className="card-minimal bg-gray-900/50 border border-red-600/50 rounded-lg px-4 md:px-6 py-3 md:py-4 flex items-center space-x-2 md:space-x-3 w-full sm:w-auto max-w-xs sm:max-w-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xl md:text-2xl text-red-500">💬</span>
            <span className="text-sm md:text-lg font-semibold text-red-300">
              Contact Us
            </span>
          </motion.a>
        </motion.div>
        
        {/* Bottom section */}
        <motion.div 
          className="border-t border-red-800/30 pt-6 md:pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-center">
            <div className="text-gray-400 order-2 md:order-1">
              <p className="text-xs md:text-sm">Event Organized by</p>
              <p className="text-red-300 font-semibold text-sm md:text-base">Campus Cartel</p>
            </div>
            
            <div className="text-center order-1 md:order-2">
              <p className="text-gray-500 text-xs md:text-sm mb-2">
                &copy; 2025 Campus Cartel. All rights reserved.
              </p>
              <p className="text-red-400 font-semibold text-base md:text-lg">
                The brotherhood awaits...
              </p>
            </div>
          
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;