"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
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

export const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen py-16 px-8 transition-colors duration-500 
                 bg-gradient-to-br from-white via-[#E9ECEF] to-[#DDE2E6] 
                 dark:bg-gradient-to-br dark:from-black dark:via-[#0A0F1E] dark:to-[#1B263B] 
                 text-gray-700 dark:text-white"
    >
      <motion.div
        className="absolute w-[500px] h-[500px] bg-cyan-400 rounded-full opacity-20 filter blur-3xl mix-blend-lighten"
        initial={{ x: 200, y: 300, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 0.15 }}
        transition={{ duration: 3, ease: "easeOut" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <img
          src="pp.jpg"
          alt="My profile picture"
          className="rounded-full w-1/2 h-auto mx-auto mb-6 border-4 
                    border-green-500 dark:border-yellow-400 hover:shadow-[0_0_20px_5px_rgba(34,197,94,0.8)] dark:hover:shadow-[0_0_30px_10px_rgba(250,204,21,0.8)] 
                     transition-shadow duration-500 ease-in-out"
        />

        <motion.h2
          className="text-5xl font-extrabold font-mono text-yellow-400 dark:text-gray-200 tracking-wider"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About me
        </motion.h2>

        <motion.p
          className="mt-6 text-lg leading-relaxed text-gray-800 dark:text-gray-300 font-mono"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          I am Aymeric Trinh, a developer passionate about creating immersive and high-performance experiences. A front-end specialist, I love working with modern technologies like React, TailwindCSS, Node.js, and Symfony to design dynamic and intuitive interfaces.
        </motion.p>

        <motion.p
          className="mt-4 text-lg leading-relaxed text-gray-800 dark:text-gray-300 font-mono"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          With solid experience in full-stack development, I am also comfortable with database management, API integrations, and secure back-end development.
        </motion.p>

        <motion.p
          className="mt-4 text-lg leading-relaxed text-yellow-500 dark:text-cyan-400 italic font-mono"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5 }}
        >
          Innovation, optimization, and creativity are the driving forces behind my vision of development.
        </motion.p>

        <motion.div
          className="flex justify-center gap-12 mt-12"
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
                className={`text-6xl ${item.color}`}
              >
                {item.icon}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};