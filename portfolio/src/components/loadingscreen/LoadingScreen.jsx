import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 20); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <div
          className="w-full h-full bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('./images/matrix-rain.svg')" }}
        ></div>
      </motion.div>


      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ y: 0 }}
        animate={{ y: [-20, 0] }}
        transition={{ duration: 3, ease: "linear", repeat: Infinity }}
      >
        <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="none">
          <defs>
            <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(0,255,0,0.2)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gridPattern)" />
        </svg>
      </motion.div>

      <motion.div
        className="relative z-10 text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
        <motion.h1
          className="text-2xl md:text-4xl font-bold text-green-500 drop-shadow-lg"
          animate={{
            textShadow: [
              "0px 0px 5px #00ff00",
              "0px 0px 20px #00ff00",
              "0px 0px 30px #00ff00",
              "0px 0px 20px #00ff00",
              "0px 0px 5px #00ff00",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        >
          Loading ...
        </motion.h1>

        <motion.div className="mt-4 w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-green-500"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.div>
        </motion.div>


        <motion.p className="mt-2 text-green-500 text-lg">{progress}%</motion.p>
      </motion.div>
    </div>
  );
};
