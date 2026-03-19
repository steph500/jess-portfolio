'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ParticlesBackground from '@/components/ParticlesBackground';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  return (
    <main ref={containerRef} className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white">
      <ParticlesBackground />
      <Navigation />
      
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <Hero />
      </section>

      <section id="about" className="relative py-32 px-4 overflow-hidden">
        <About />
      </section>

      <section id="skills" className="relative py-32 px-4 overflow-hidden">
        <Skills />
      </section>

      <section id="experience" className="relative py-32 px-4 overflow-hidden">
        <Experience />
      </section>

      <section id="certifications" className="relative py-32 px-4 overflow-hidden">
        <Certifications />
      </section>

      <section id="contact" className="relative py-32 px-4 overflow-hidden">
        <Contact />
      </section>

      <Footer />
    </main>
  );
}
