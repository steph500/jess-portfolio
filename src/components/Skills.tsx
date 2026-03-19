'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Database,
  Users,
  Stethoscope,
  BarChart3,
  Shield,
  FileText,
  Lightbulb,
  Target,
  Heart,
  BookOpen,
  Cpu,
  Activity,
} from 'lucide-react';

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

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
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  const skills = [
    {
      category: 'Healthcare Expertise',
      icon: <Stethoscope size={32} />,
      color: 'from-pink-500 to-purple-500',
      skills: [
        'Public Health Program Management',
        'Maternal & Child Health',
        'Disease Prevention & Control',
        'Health Education',
        'Epidemiology',
      ],
    },
    {
      category: 'Data & Analysis',
      icon: <BarChart3 size={32} />,
      color: 'from-purple-500 to-teal-500',
      skills: [
        'KHIS (Kenya Health Information System)',
        'Data Collection & Entry',
        'Monitoring & Evaluation',
        'Statistical Analysis',
        'Report Generation',
      ],
    },
    {
      category: 'Leadership',
      icon: <Users size={32} />,
      color: 'from-teal-500 to-pink-500',
      skills: [
        'Team Management',
        'Strategic Planning',
        'Staff Training & Development',
        'Performance Monitoring',
        'Conflict Resolution',
      ],
    },
    {
      category: 'Operations',
      icon: <Target size={32} />,
      color: 'from-pink-500 to-teal-500',
      skills: [
        'Resource Allocation',
        'Budget Management',
        'Vendor Relations',
        'Quality Assurance',
        'Process Optimization',
      ],
    },
    {
      category: 'Technical Skills',
      icon: <Cpu size={32} />,
      color: 'from-purple-500 to-pink-500',
      skills: [
        'Microsoft Office Suite',
        'Basic Computer Applications',
        'Digital Health Systems',
        'Electronic Health Records',
        'Data Visualization',
      ],
    },
    {
      category: 'Soft Skills',
      icon: <Heart size={32} />,
      color: 'from-teal-500 to-purple-500',
      skills: [
        'Communication',
        'Interpersonal Skills',
        'Problem Solving',
        'Adaptability',
        'Cultural Competence',
      ],
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
          Skills & Expertise
        </h2>
        <div className="w-24 h-1 gradient-pink-bg mx-auto rounded-full" />
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          A diverse skill set combining healthcare expertise, leadership capabilities, and technical proficiency
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skillGroup, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="glass-card p-6 glass-card-hover group"
            onMouseEnter={() => setHoveredSkill(skillGroup.category)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className="flex items-center gap-4 mb-6">
              <div
                className={`p-3 rounded-xl bg-gradient-to-r ${skillGroup.color} text-white group-hover:scale-110 transition-transform duration-300`}
              >
                {skillGroup.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{skillGroup.category}</h3>
            </div>

            <ul className="space-y-3">
              {skillGroup.skills.map((skill, skillIndex) => (
                <motion.li
                  key={skillIndex}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: skillIndex * 0.1 }}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-teal-400" />
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={itemVariants}
        className="mt-16 glass-card p-8 text-center"
      >
        <h3 className="text-2xl font-bold mb-4 gradient-text gradient-pink">Specialized Training</h3>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="flex items-center justify-center gap-3">
            <BookOpen className="text-pink-400" size={24} />
            <span className="text-gray-300">Introduction to Clinical Research</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Shield className="text-purple-400" size={24} />
            <span className="text-gray-300">Water Sanitation & Hygiene in Emergencies</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Activity className="text-teal-400" size={24} />
            <span className="text-gray-300">Certificate in Monitoring & Evaluation</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
