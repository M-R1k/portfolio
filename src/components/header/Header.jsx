import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Socials } from "./Socials";
import { HeaderText } from "./HeaderText";
import { StarBackground } from "./StarBackground";

export const Header = () => {
  const name = "Hey, I'm <Aymeric Trinh />";
  const [displayedText, setDisplayedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < name.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(name.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      const resetTimeout = setTimeout(() => {
        setDisplayedText("");
        setCurrentIndex(0);
      }, 1500);
      return () => clearTimeout(resetTimeout);
    }
  }, [currentIndex, name]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const neonVariants = {
    initial: { opacity: 0, textShadow: "0px 0px 0px #0ff" },
    animate: {
      opacity: 1,
      textShadow: [
        "0 0 2px #0ff",
        "0 0 10px #0ff",
        "0 0 20px #0ff",
        "0 0 30px #0ff",
        "0 0 40px #0ff",
        "0 0 55px #0ff",
        "0 0 75px #0ff",
      ],
      transition: { duration: 1, repeat: Infinity, repeatType: "mirror" },
    },
  };

  return (
    <header
      id="home"
      className="flex w-svw min-h-screen bg-gradient-to-br from-white via-[#F2F5F9] to-[#E4E7EB] dark:bg-gradient-to-br dark:from-black dark:via-[#0A0F1E] dark:to-[#1B263B]"
    >
      {/* Background animation */}
      <StarBackground />
  
      {/* Overlay for gradient effect */}
      {/* <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      ></motion.div> */}
  
      {/* Main content */}
      <div className="relative z-10 text-center w-full min-h-screen flex flex-col items-center justify-center space-y-6 px-4 sm:px-8">
        {/* Animated Header Text */}
        <motion.h5
          className="text-base sm:text-sm tracking-[0.3em] text-cyan-600 dark:text-cyan-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <HeaderText />
        </motion.h5>
  
        {/* Name with neon effect */}
        <motion.h1
          className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-indigo-500 dark:text-gray-200 flex items-center"
          variants={neonVariants}
          initial="initial"
          animate="animate"
        >
          {displayedText}
          <span className="ml-1 text-indigo-500 dark:text-gray-200">
            {cursorVisible ? "|" : " "}
          </span>
        </motion.h1>
  
        <motion.h5
          className="text-xl sm:text-lg tracking-widest pt-8 text-green-500 dark:text-gray-200 font-mono"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Front-End Developer
        </motion.h5>
  
        <div className="mt-8 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
          <Socials />
        </div>
      </div>
  
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(0,255,0,0.2)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </header>
  );
};
