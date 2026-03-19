'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, Phone, Mail, MapPin } from 'lucide-react';

export default function About() {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  const personalInfo = [
    {
      icon: <GraduationCap size={20} />,
      label: 'Education',
      value: 'Bsc. Public Health, Meru University (2016-2021)',
    },
    {
      icon: <Award size={20} />,
      label: 'License',
      value: 'Practising Licence No: PL/0771/24',
    },
    {
      icon: <Phone size={20} />,
      label: 'Phone',
      value: '+254-791575544',
    },
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: 'jacintanthenyajnn@gmail.com',
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
          About Me
        </h2>
        <div className="w-24 h-1 gradient-pink-bg mx-auto rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <motion.div
          variants={itemVariants}
          className="glass-card p-8 glass-card-hover"
        >
          <h3 className="text-2xl font-bold mb-6 text-pink-400">Who I Am</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Experienced public health professional with a passion for promoting community well-being.
            I have a proven track record in planning, implementing, and evaluating health programs
            that make a real difference in people's lives.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Skilled in integrating sectors and stakeholders to achieve effective healthcare strategies.
            I pride myself on my ability to combine data-driven decision making with genuine empathy
            and communication skills.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Currently excelling as a General Manager in the restaurant industry, where I've
            demonstrated exceptional leadership, operational efficiency, and team management
            capabilities.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="space-y-4"
        >
          {personalInfo.map((info, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-5 glass-card-hover flex items-start gap-4"
            >
              <div className="p-3 rounded-xl gradient-pink-bg text-white shrink-0">
                {info.icon}
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">{info.label}</div>
                <div className="text-white font-medium">{info.value}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        variants={itemVariants}
        className="grid md:grid-cols-3 gap-6"
      >
        <motion.div
          variants={itemVariants}
          className="glass-card p-6 text-center glass-card-hover"
        >
          <div className="text-4xl font-bold gradient-text gradient-pink mb-2">5,000+</div>
          <div className="text-gray-400">Medical Certificates Generated</div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="glass-card p-6 text-center glass-card-hover"
        >
          <div className="text-4xl font-bold gradient-text gradient-pink mb-2">1,200+</div>
          <div className="text-gray-400">Mothers Supported in MCH Clinic</div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="glass-card p-6 text-center glass-card-hover"
        >
          <div className="text-4xl font-bold gradient-text gradient-pink mb-2">4,300</div>
          <div className="text-gray-400">Children Treated in Campaigns</div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
