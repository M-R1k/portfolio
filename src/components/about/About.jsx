"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaGraduationCap, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { SiTailwindcss, SiPhp, SiSymfony, SiMysql } from "react-icons/si";

const iconVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeInOut",
    },
  }),
};

const timelineVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

// Données de la timeline basées sur le CV
const timelineData = [
  {
    id: 1,
    type: "formation",
    title: "Développeur Web",
    company: "EPITECH - Le Kremlin-Bicêtre",
    period: "Depuis novembre 2023",
    description: "Formation immersive avec méthodologie de projets, Cahier des charges/Kick-off/Bootstrap, Follow-up, Test automatisé, Code review",
    icon: <FaGraduationCap />,
    color: "text-blue-600",
    bgColor: "bg-blue-100 dark:bg-blue-900/30"
  },
  {
    id: 2,
    type: "experience",
    title: "Assistant Pédagogique",
    company: "EPITECH - Le Kremlin-Bicêtre",
    period: "Janvier 2025 - Février 2025",
    description: "Accompagnement d'élèves d'ISEGCOM dans leur découverte des bases du code (HTML, CSS, PHP, SQL). Développement de méthodes pédagogiques adaptées.",
    icon: <FaBriefcase />,
    color: "text-green-600",
    bgColor: "bg-green-100 dark:bg-green-900/30"
  },
  {
    id: 3,
    type: "experience",
    title: "Alternant Développeur Full-Stack",
    company: "FBH – Imprimeur numérique - Paris",
    period: "Novembre 2024 - Décembre 2024",
    description: "Pilotage de la transition numérique via l'implémentation et personnalisation du logiciel ERP Odoo. Analyse des besoins métiers, développement de fonctionnalités sur mesure.",
    icon: <FaBriefcase />,
    color: "text-purple-600",
    bgColor: "bg-purple-100 dark:bg-purple-900/30"
  },
  {
    id: 4,
    type: "formation",
    title: "Formation Cinéma",
    company: "Conservatoire Libre du Cinéma Français",
    period: "Septembre 2013 - Juin 2015",
    description: "Formation complète en cinéma à Paris, France",
    icon: <FaGraduationCap />,
    color: "text-orange-600",
    bgColor: "bg-orange-100 dark:bg-orange-900/30"
  }
];

export const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen py-16 px-6 sm:px-12 lg:px-24 transition-colors duration-500 
                 bg-gradient-to-br from-white via-[#E9ECEF] to-[#DDE2E6] 
                 dark:bg-gradient-to-br dark:from-black dark:via-[#0A0F1E] dark:to-[#1B263B] 
                 text-gray-700 dark:text-white"
    >
      {/* Background Glow */}
      <motion.div
        className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-cyan-400 rounded-full opacity-20 filter blur-3xl mix-blend-lighten"
        initial={{ x: 200, y: 300, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 0.15 }}
        transition={{ duration: 3, ease: "easeOut" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Profile Picture */}
        <img
          src="pp.jpg"
          alt="My profile picture"
          className="rounded-full w-32 sm:w-48 lg:w-64 h-auto mx-auto mb-6 border-4 
                    border-green-500 dark:border-yellow-400 hover:shadow-[0_0_20px_5px_rgba(34,197,94,0.8)] dark:hover:shadow-[0_0_30px_10px_rgba(250,204,21,0.8)] 
                     transition-shadow duration-500 ease-in-out"
        />

        {/* Title */}
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-mono text-green-500 dark:text-gray-200 tracking-wider"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>

        {/* Description */}
        <motion.p
          className="mt-6 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-800 dark:text-gray-300 font-mono"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          I am Aymeric Trinh, a developer passionate about creating immersive and high-performance experiences. A front-end specialist, I love working with modern technologies like React, TailwindCSS, Node.js, and Symfony to design dynamic and intuitive interfaces.
        </motion.p>

        <motion.p
          className="mt-4 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-800 dark:text-gray-300 font-mono"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          With solid experience in full-stack development, I am also comfortable with database management, API integrations, and secure back-end development.
        </motion.p>

        <motion.p
          className="mt-4 text-base sm:text-lg lg:text-xl leading-relaxed text-yellow-500 dark:text-cyan-400 italic font-mono"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5 }}
        >
          Innovation, optimization, and creativity are the driving forces behind my vision of development.
        </motion.p>

        {/* Icons */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mt-12"
          initial="hidden"
          animate="visible"
        >
          {[
            { icon: <FaReact />, color: "text-blue-600" },
            { icon: <FaNodeJs />, color: "text-green-600" },
            { icon: <FaDatabase />, color: "text-yellow-600" },
            { icon: <SiTailwindcss />, color: "text-cyan-600" },
            { icon: <SiPhp />, color: "text-indigo-600" },
            { icon: <SiSymfony />, color: "text-gray-800 dark:text-black" },
            { icon: <SiMysql />, color: "text-orange-600" },
          ].map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={iconVariants}
              whileHover={{ scale: 1.5, rotate: 360 }}
              transition={{ duration: 1 }}
            >
              <div
                className={`text-4xl sm:text-5xl lg:text-6xl ${item.color}`}
              >
                {item.icon}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.h3
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 text-green-500 dark:text-cyan-400 font-mono"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            Mon Parcours
          </motion.h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 to-cyan-400 dark:from-cyan-400 dark:to-green-500"></div>

            {/* Timeline Items */}
            <div className="space-y-8">
              {timelineData.map((item, index) => (
                <motion.div
                  key={item.id}
                  custom={index}
                  variants={timelineVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="relative flex items-start"
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-6 w-4 h-4 rounded-full ${item.bgColor} border-4 border-white dark:border-gray-800 z-10 flex items-center justify-center`}>
                    <div className={`text-sm ${item.color}`}>
                      {item.icon}
                    </div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    className={`ml-16 p-6 rounded-xl shadow-lg ${item.bgColor} border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300`}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`text-2xl ${item.color}`}>
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-800 dark:text-white">
                          {item.title}
                        </h4>
                        <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                          {item.company}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <FaCalendarAlt className={`text-sm ${item.color}`} />
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {item.period}
                      </span>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};