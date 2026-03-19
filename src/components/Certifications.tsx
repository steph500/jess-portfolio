'use client';

import { motion } from 'framer-motion';
import { Award, BookOpen, CheckCircle } from 'lucide-react';

export default function Certifications() {
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

  const certifications = [
    {
      title: 'Certificate in Monitoring & Evaluation',
      institution: 'Jomo Kenyatta University of Agriculture and Technology (JKUAT)',
      year: '2024',
      icon: <Award size={36} />,
      color: 'from-pink-500 to-purple-500',
      description: 'Comprehensive training in project monitoring, evaluation frameworks, data collection methods, and impact assessment techniques.',
    },
    {
      title: 'Introduction to Clinical Research',
      institution: 'The Global Health Network',
      year: '2023',
      icon: <BookOpen size={36} />,
      color: 'from-purple-500 to-teal-500',
      description: 'Foundational knowledge in clinical research methodologies, ethics, data management, and regulatory requirements.',
    },
    {
      title: 'Water Sanitation & Hygiene in Emergencies',
      institution: 'LITMED College',
      year: '2021',
      icon: <CheckCircle size={36} />,
      color: 'from-teal-500 to-pink-500',
      description: 'Specialized training in WASH (Water, Sanitation, and Hygiene) interventions during emergency situations and disaster response.',
    },
    {
      title: 'HIV Testing Services Course',
      institution: 'LITMED College',
      year: '2021',
      icon: <Award size={36} />,
      color: 'from-pink-500 to-teal-500',
      description: 'Training in HIV testing protocols, counseling, prevention strategies, and linkage to care services.',
    },
    {
      title: 'Sanitation Systems and Services',
      institution: 'LITMED College',
      year: '2021',
      icon: <CheckCircle size={36} />,
      color: 'from-purple-500 to-pink-500',
      description: 'Comprehensive understanding of sanitation infrastructure, service delivery models, and public health impact.',
    },
    {
      title: 'Basic Computer Applications',
      institution: 'Msambweni Youth Empowerment Centre',
      year: '2016',
      icon: <BookOpen size={36} />,
      color: 'from-teal-500 to-purple-500',
      description: 'Foundational computer skills including Microsoft Office, internet usage, and digital literacy essential for modern workplace.',
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
          Certifications & Training
        </h2>
        <div className="w-24 h-1 gradient-pink-bg mx-auto rounded-full" />
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          Continuous professional development through specialized certifications and training programs
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="glass-card p-6 glass-card-hover group"
          >
            <div className="flex items-start gap-4 mb-4">
              <div
                className={`p-3 rounded-xl bg-gradient-to-r ${cert.color} text-white group-hover:scale-110 transition-transform duration-300 shrink-0`}
              >
                {cert.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-pink-400 font-medium">{cert.institution}</p>
                <p className="text-gray-400 text-sm mt-1">{cert.year}</p>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              {cert.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={itemVariants}
        className="mt-16 glass-card p-8 text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <Award className="text-pink-400" size={32} />
          <h3 className="text-2xl font-bold gradient-text gradient-pink">Professional License</h3>
        </div>
        <p className="text-gray-300 text-lg">
          <span className="font-semibold text-white">Practising Licence No:</span> PL/0771/24
        </p>
        <p className="text-gray-400 mt-2">
          Registered Public Health Practitioner in Kenya
        </p>
      </motion.div>
    </motion.div>
  );
}
