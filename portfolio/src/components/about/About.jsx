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
    <section id="about" className="relative min-h-screen dark:bg-gray-900 text-white py-16 px-8">
      <motion.div
        className="absolute w-[500px] h-[500px] bg-cyan-400 rounded-full opacity-20 filter blur-3xl mix-blend-lighten"
        initial={{ x: 200, y: 300, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 0.15 }}
        transition={{ duration: 3, ease: "easeOut" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <img src="pp.jpg" alt="My profile picture" className="rounded-full w-1/2 h-auto mx-auto mb-6 shadow-lg" />
        <motion.h2
          className="text-5xl font-extrabold font-mono text-cyan-400 tracking-wider"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About me
        </motion.h2>

        <motion.p
          className="mt-6 text-lg leading-relaxed text-gray-300 font-mono"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          I am Aymeric Trinh, a developer passionate about creating immersive and high-performance experiences. A front-end specialist, I love working with modern technologies like React, TailwindCSS, Node.js, and Symfony to design dynamic and intuitive interfaces.
        </motion.p>

        <motion.p
          className="mt-4 text-lg leading-relaxed text-gray-300 font-mono"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          With solid experience in full-stack development, I am also comfortable with database management, API integrations, and secure back-end development.
        </motion.p>

        <motion.p
          className="mt-4 text-lg leading-relaxed text-cyan-400 italic font-mono"
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
            { icon: <FaReact />, color: "text-blue-500" },
            { icon: <FaNodeJs />, color: "text-green-500" },
            { icon: <FaDatabase />, color: "text-yellow-500" },
            { icon: <SiTailwindcss />, color: "text-cyan-500" },
            { icon: <SiPhp />, color: "text-indigo-500" },
            { icon: <SiSymfony />, color: "text-black" },
            { icon: <SiMysql />, color: "text-orange-500" },
          ].map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={iconVariants}
              whileHover={{ scale: 1.5, rotate: 360 }}
              transition={{ duration: 1 }}
            >
              <div className={`text-6xl ${item.color}`}>{item.icon}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};