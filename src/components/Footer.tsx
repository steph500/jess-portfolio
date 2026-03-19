'use client';

import { motion } from 'framer-motion';
import { Heart, Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-4 mt-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text gradient-pink mb-4">Jess</h3>
            <p className="text-gray-400 leading-relaxed">
              Public Health Professional & Healthcare Manager dedicated to making a positive impact
              in community well-being and operational excellence.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-pink-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/jacinta-nzomo-b3a627205/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card glass-card-hover text-pink-400"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:jacintanthenyajnn@gmail.com"
                className="p-3 glass-card glass-card-hover text-teal-400"
              >
                <Mail size={24} />
              </a>
              <a
                href="tel:+254791575544"
                className="p-3 glass-card glass-card-hover text-purple-400"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Jacinta Nthenya Nzomo. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            className="p-3 gradient-pink-bg rounded-full text-white hover:scale-110 transition-transform duration-300"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={24} />
          </motion.button>

          <p className="text-gray-400 text-sm flex items-center gap-2">
            Made with <Heart size={16} className="text-pink-500" /> for Jess
          </p>
        </div>
      </div>
    </footer>
  );
}
