"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    typeof window !== "undefined" && localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <motion.button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-xl border border-slate-500/20 dark:border-slate-600/30 
                 backdrop-blur-sm bg-slate-100/10 dark:bg-slate-600/20 hover:bg-slate-100/20 
                 dark:hover:bg-slate-600/30 duration-300 shadow-lg"
      whileHover={{ scale: 1.1, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
    >
      <p className="sr-only">Toggle theme</p>
      <motion.div
        initial={{ rotate: 0, opacity: 1 }}
        animate={{ rotate: darkMode ? 360 : 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {darkMode ? (
          <MdDarkMode className="text-gray-200 dark:text-gray-100 text-2xl" />
        ) : (
          <MdLightMode className="text-gray-900 text-2xl" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default DarkModeToggle;
