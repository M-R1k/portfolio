import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Socials = () => {
    return (
        <div className="flex flex-col items-center gap-3 absolute left-0 bottom-12">
            <a href="#" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <motion.div 
                className="w-px bg-primary" 
                initial={{ height: 0 }} 
                animate={{ height: '2rem' }} 
                transition={{ duration: 0.5 }}
            />
        </div>
    )
}