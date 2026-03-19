'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,

    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-6xl mx-auto text-center relative z-10"
    >
      <motion.div variants={itemVariants} className="mb-6">
        <div className="inline-block px-6 py-2 rounded-full glass-card gradient-pink-bg text-white font-semibold text-sm mb-8">
          Public Health Professional & Healthcare Manager
        </div>
      </motion.div>

      <motion.h1
        variants={itemVariants}
        className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6"
      >
        <span className="gradient-text gradient-pink">Jacinta Nthenya</span>
        <br />
        <span className="text-white">Nzomo</span>
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
      >
        Transforming healthcare delivery and restaurant operations through data-driven strategies,
        leadership excellence, and a passion for community well-being.
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="flex flex-wrap justify-center gap-4 mb-16"
      >
        <a
          href="#contact"
          className="px-8 py-4 gradient-pink-bg rounded-full font-semibold text-white hover:scale-105 transition-transform duration-300 shadow-lg shadow-pink-500/30"
        >
          Get in Touch
        </a>
        <a
          href="#cv"
          className="px-8 py-4 glass-card rounded-full font-semibold text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
        >
          <Download size={20} />
          Download CV
        </a>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="flex justify-center gap-6 mb-16"
      >
        <a
          href="https://www.linkedin.com/in/jacinta-nzomo-b3a627205/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 glass-card glass-card-hover text-pink-400"
        >
          <Linkedin size={28} />
        </a>
        <a
          href="mailto:jacintanthenyajnn@gmail.com"
          className="p-3 glass-card glass-card-hover text-teal-400"
        >
          <Mail size={28} />
        </a>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="flex justify-center"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <a href="#about" className="text-gray-400 hover:text-pink-400 transition-colors">
          <ArrowDown size={32} />
        </a>
      </motion.div>
    </motion.div>
  );
}
