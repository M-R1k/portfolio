import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload, FaEnvelope } from "react-icons/fa";

export const Socials = () => {
    return (
        <div className="flex items-center gap-6 absolute right-4 bottom-12">
            <motion.a
                href="https://github.com/M-R1k?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 text-white shadow-lg transition-all duration-300"
                whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 },
                    backgroundColor: "#4B5563", 
                    textShadow: "0px 0px 8px #4B5563",
                }}
                whileTap={{ scale: 0.95 }}
            >
                <FaGithub className="text-white text-2xl group-hover:scale-110 transition-transform duration-300" />
            </motion.a>

            <motion.a
                href="https://www.linkedin.com/in/aymeric-trinh/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white shadow-lg transition-all duration-300"
                whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 },
                    backgroundColor: "#2563EB", 
                    textShadow: "0px 0px 8px #2563EB",
                }}
                whileTap={{ scale: 0.95 }}
            >
                <FaLinkedin className="text-white text-2xl group-hover:scale-110 transition-transform duration-300" />
            </motion.a>

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