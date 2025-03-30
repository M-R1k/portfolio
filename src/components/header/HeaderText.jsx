import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const HeaderText = () => {
  const words = ["world", "universe", "matrix"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [words.length]);

  return (
    <motion.h1
      className="tracking-[0.3em] text-green-500 text-4xl font-mono"
      initial={{ opacity: 0, y: 0 }}
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
          className="inline-block ml-1 text-yellow-500 dark:text-gray-200 font-bold"
        >
          {words[currentWordIndex]}
        </motion.span>
      </AnimatePresence>
    </motion.h1>
  );
};

export default HeaderText;