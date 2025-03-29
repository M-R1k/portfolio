import React from "react";
import { motion } from "framer-motion";

export const CV = () => {
  const buttonVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="mt-8 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
    <motion.a
      href="CV.pdf"
      download
      className="bg-cyan-600 text-white py-2 px-6 rounded-full shadow-lg transition-all duration-300"
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
        backgroundColor: "#0ff",
        textShadow: "0px 0px 8px #0ff"
      }}
      whileTap={{ scale: 0.95 }}
    >
      Télécharger mon CV
    </motion.a>
    
    <motion.a
      href="#contact"
      className="bg-purple-600 text-white py-2 px-6 rounded-full shadow-lg transition-all duration-300"
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
        backgroundColor: "#8b5cf6",
        textShadow: "0px 0px 8px #8b5cf6"
      }}
      whileTap={{ scale: 0.95 }}
    >
      Contactez-moi
    </motion.a>
  </div>
  );
};
