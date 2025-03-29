import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Socials } from "./Socials";
import { CV } from "./CV";
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
        "0 0 75px #0ff"
      ],
      transition: { duration: 1, repeat: Infinity, repeatType: "mirror" }
    }
  };

  return (
    <header
    id="home"
    className="relative h-screen "
    >
    <StarBackground />
      {/* <div className="absolute inset-0 dark:bg-gradient-to-br from-purple-900 via-black to-blue-900" /> */}

      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
      </motion.div>

      <div className="relative z-10 text-center h-full flex flex-col items-center justify-center space-y-6 px-4">
        <motion.h5
          className="text-lg tracking-[0.3em]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          >
        <HeaderText />
        </motion.h5>

        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-indigo-500 dark:text-white flex items-center"
          variants={neonVariants}
          initial="initial"
          animate="animate"
          >
          {displayedText}
          <span className="ml-1 text-indigo-500 dark:text-white">
            {cursorVisible ? "|" : " "}
          </span>
        </motion.h1>

        <motion.h5
          className="text-xl tracking-widest text-blue-300 font-mono"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Développeur Front-End & Passionné de jeux vidéos
        </motion.h5>
        <div className="mt-8 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          <CV />
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
