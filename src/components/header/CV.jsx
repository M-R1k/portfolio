import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload, FaEnvelope } from "react-icons/fa";

export const CV = () => {
 
  return (
    <div className="mt-8 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <a 
                href="https://github.com/M-R1k?tab=repositories" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 shadow-lg"
            >
                <FaGithub className="text-white text-2xl group-hover:scale-110 transition-transform duration-300" />
            </a>

            <a 
                href="https://www.linkedin.com/in/aymeric-trinh/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-500 transition-all duration-300 shadow-lg"
            >
                <FaLinkedin className="text-white text-2xl group-hover:scale-110 transition-transform duration-300" />
            </a>

            <motion.div 
                className="w-px bg-primary" 
                initial={{ height: 0 }} 
                animate={{ height: '2rem' }} 
                transition={{ duration: 0.5 }}
            />

            <motion.a
                href="CV.pdf"
                download
                className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-cyan-600 text-white shadow-lg transition-all duration-300"
                whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 },
                    backgroundColor: "#0ff",
                    textShadow: "0px 0px 8px #0ff",
                }}
                whileTap={{ scale: 0.95 }}
            >
                <FaDownload className="text-white text-2xl group-hover:scale-110 transition-transform duration-300" />
            </motion.a>

            <motion.a
                href="#contact"
                className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-purple-600 text-white shadow-lg transition-all duration-300"
                whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 },
                    backgroundColor: "#8b5cf6",
                    textShadow: "0px 0px 8px #8b5cf6",
                }}
                whileTap={{ scale: 0.95 }}
            >
                <FaEnvelope className="text-white text-2xl group-hover:scale-110 transition-transform duration-300" />
            </motion.a>
    </div>
  );
};