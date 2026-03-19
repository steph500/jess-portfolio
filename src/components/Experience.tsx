'use client';

import { motion } from 'framer-motion';
import { Calendar, Building2, Users, TrendingDown, Award, DollarSign } from 'lucide-react';

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  const experiences = [
    {
      title: 'General Manager',
      company: 'The Local Grill LTD',
      period: 'Feb 2025 - Present',
      type: 'Current',
      icon: <Building2 size={28} />,
      color: 'from-pink-500 to-purple-500',
      achievements: [
        {
          icon: <DollarSign size={20} />,
          text: 'Directing daily operations of a 120-seat fine-dining restaurant generating KSh 110M+ annual revenue',
          highlight: true,
        },
        {
          icon: <TrendingDown size={20} />,
          text: 'Managed procurement system, cutting food cost from 38% to 29%',
          highlight: true,
        },
        {
          icon: <Users size={20} />,
          text: 'Recruited, trained, and retained top talent: staff turnover dropped from 78% to 24% in 6 months',
          highlight: true,
        },
        {
          icon: <Award size={20} />,
          text: 'Achieved 100% compliance in all NEMA, Public Health, and Liquor Licensing inspections',
          highlight: true,
        },
        {
          icon: <TrendingDown size={20} />,
          text: 'Managed petty cash & emergency repairs budget of over KSh 350,000/month, negotiated service contracts, dropping monthly maintenance costs by 42%',
          highlight: false,
        },
      ],
      description: 'Leading operations for a high-end restaurant, overseeing 33 staff across FOH, kitchen, and bar while driving operational excellence and cost efficiency.',
    },
    {
      title: 'Public Health Volunteer',
      company: 'Wangige Level 4 Hospital',
      period: 'August 2023 - Jan 2025',
      type: 'Previous',
      icon: <Building2 size={28} />,
      color: 'from-purple-500 to-teal-500',
      achievements: [
        {
          icon: <Users size={20} />,
          text: 'Managed Kiambu County\'s digital system generating 5,000+ medical certificates for food handlers',
          highlight: true,
        },
        {
          icon: <Users size={20} />,
          text: 'Supported over 1,200 mothers in MCH clinic with health education on exclusive breastfeeding, immunization schedules, and danger signs in pregnancy',
          highlight: true,
        },
        {
          icon: <Award size={20} />,
          text: 'Led mass deworming and Vitamin A supplementation campaigns, treating 4,300 children aged 6–59 months',
          highlight: true,
        },
        {
          icon: <TrendingDown size={20} />,
          text: 'Led data collection and entry for TB, HIV, and NCD programs using Kenya Health Information System (KHIS)',
          highlight: false,
        },
      ],
      description: 'Delivered critical public health services to the community, focusing on maternal and child health, disease prevention, and health system strengthening.',
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
          Work Experience
        </h2>
        <div className="w-24 h-1 gradient-pink-bg mx-auto rounded-full" />
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 via-purple-500 to-teal-500 rounded-full" />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`relative mb-16 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-teal-500 flex items-center justify-center z-10 shadow-lg shadow-pink-500/50">
              {exp.icon}
            </div>

            <div
              className={`ml-16 md:ml-0 md:px-12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left md:ml-auto md:mr-0'}`}
            >
              <div className="glass-card p-8 glass-card-hover">
                <div className="flex items-center gap-4 mb-4 justify-start md:justify-start">
                  <span
                    className={`px-4 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${exp.color} text-white`}
                  >
                    {exp.type}
                  </span>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar size={18} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {exp.title}
                </h3>
                <p className="text-xl text-pink-400 mb-4">{exp.company}</p>
                <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white mb-4">Key Achievements</h4>
                  {exp.achievements.map((achievement, achIndex) => (
                    <motion.div
                      key={achIndex}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: achIndex * 0.1 }}
                      className={`flex items-start gap-3 p-3 rounded-lg ${
                        achievement.highlight
                          ? 'bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20'
                          : 'bg-white/5'
                      }`}
                    >
                      <div
                        className={`p-2 rounded-lg ${
                          achievement.highlight ? 'gradient-pink-bg text-white' : 'bg-white/10 text-gray-400'
                        } shrink-0 mt-0.5`}
                      >
                        {achievement.icon}
                      </div>
                      <p className="text-gray-300 leading-relaxed">{achievement.text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
