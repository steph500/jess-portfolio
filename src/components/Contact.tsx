'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: <Mail size={28} />,
      label: 'Email',
      value: 'jacintanthenyajnn@gmail.com',
      href: 'mailto:jacintanthenyajnn@gmail.com',
      color: 'from-pink-500 to-purple-500',
    },
    {
      icon: <Phone size={28} />,
      label: 'Phone',
      value: '+254-791575544',
      href: 'tel:+254791575544',
      color: 'from-purple-500 to-teal-500',
    },
    {
      icon: <Linkedin size={28} />,
      label: 'LinkedIn',
      value: 'Jacinta Nzomo',
      href: 'https://www.linkedin.com/in/jacinta-nzomo-b3a627205/',
      color: 'from-teal-500 to-pink-500',
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="max-w-6xl mx-auto"
    >
      <motion.div
        variants={itemVariants}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text gradient-pink">
          Get In Touch
        </h2>
        <div className="w-24 h-1 gradient-pink-bg mx-auto rounded-full" />
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          Let's connect! I'm always open to discussing opportunities, collaborations, or just having a conversation.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {contactMethods.map((method, index) => (
          <motion.a
            key={index}
            href={method.href}
            target={method.label === 'LinkedIn' ? '_blank' : undefined}
            rel={method.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
            variants={itemVariants}
            className="glass-card p-6 glass-card-hover group text-center"
          >
            <div
              className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${method.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
            >
              {method.icon}
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{method.label}</h3>
            <p className="text-gray-300">{method.value}</p>
          </motion.a>
        ))}
      </div>

      <motion.div
        variants={itemVariants}
        className="glass-card p-8 md:p-12 max-w-2xl mx-auto"
      >
        <h3 className="text-2xl font-bold text-white mb-6 text-center">Send a Message</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300 resize-none"
              placeholder="Your message here..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full px-8 py-4 gradient-pink-bg rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 ${
              isSubmitting
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:scale-105 hover:shadow-lg hover:shadow-pink-500/30'
            }`}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending...
              </>
            ) : submitStatus === 'success' ? (
              <>
                <Send size={20} />
                Message Sent!
              </>
            ) : (
              <>
                <Send size={20} />
                Send Message
              </>
            )}
          </button>

          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-green-400 font-medium"
            >
              Thank you! Your message has been sent successfully.
            </motion.div>
          )}
        </form>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="mt-12 text-center"
      >
        <p className="text-gray-400">
          Or reach out directly:{' '}
          <a
            href="mailto:jacintanthenyajnn@gmail.com"
            className="text-pink-400 hover:text-pink-300 transition-colors font-medium"
          >
            jacintanthenyajnn@gmail.com
          </a>
        </p>
      </motion.div>
    </motion.div>
  );
}
