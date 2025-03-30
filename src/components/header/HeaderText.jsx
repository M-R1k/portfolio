import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const HeaderText = () => {
  const words = ["world", "universe", "matrix"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000); 
    return () => clearInterval(intervalId);
  }, [words.length]);

  return (
    <motion.div
      className="text-center px-4 sm:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-mono text-green-500 dark:text-green-400"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Welcome to my{" "}
        <AnimatePresence mode="wait">
          <motion.span
            key={words[currentWordIndex]}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="inline-block ml-1 text-yellow-500 dark:text-yellow-300 font-bold"
          >
            {words[currentWordIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.h1>
    </motion.div>
  );
};

export default HeaderText;