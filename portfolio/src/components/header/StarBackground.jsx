"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const generateStars = (numStars) => {
  return Array.from({ length: numStars }).map((_, i) => ({
    id: i,
    x: Math.random() * 100 + "vw",
    y: Math.random() * 100 + "vh",
    size: Math.random() * 2.5 + 1,
    duration: Math.random() * 20 + 7, 
  }));
};

const generateShootingStars = (num) => {
  return Array.from({ length: num }).map((_, i) => ({
    id: `shooting-${i}`,
    xStart: Math.random() * 100 + "vw",
    yStart: Math.random() * 80 + "vh",
    xEnd: Math.random() * 120 - 10 + "vw",
    yEnd: Math.random() * 80 + "vh",
    duration: Math.random() * 5 + 3, 
  }));
};

const planets = [
    { id: "planet-1", size: 120, x: "10vw", y: "30vh", color: "bg-blue-400", darkColor: "dark:bg-blue-600" },
    { id: "planet-2", size: 180, x: "70vw", y: "50vh", color: "bg-green-300", darkColor: "dark:bg-green-500" },
    { id: "planet-3", size: 150, x: "40vw", y: "80vh", color: "bg-orange-400", darkColor: "dark:bg-orange-600" },
  ];

  const generateParticles = (num) => {
    return Array.from({ length: num }).map((_, i) => ({
      id: `particle-${i}`,
      x: Math.random() * 100 + "vw",
      y: Math.random() * 100 + "vh",
      size: Math.random() * 5 + 2,
      duration: Math.random() * 6 + 4,
    }));
  };

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setStars(generateStars(150));
    setShootingStars(generateShootingStars(10));
    setParticles(generateParticles(30));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden transition-colors duration-500 
    bg-gradient-to-br from-white via-[#F2F5F9] to-[#E4E7EB] 
    dark:bg-gradient-to-br dark:from-black dark:via-[#0A0F1E] dark:to-[#1B263B]">
      
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: star.y,
            left: star.x,
          }}
          animate={{
            opacity: [0.2, 1, 0.2], 
            scale: [2, 1.5, 2], 
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {shootingStars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute h-[2px] w-[80px] shadow-lg bg-gradient-to-r from-blue-400 to-transparent dark:from-white dark:to-transparent"
          style={{
            top: star.yStart,
            left: star.xStart,
          }}
          initial={{ opacity: 0 }}
          animate={{
            x: [0, star.xEnd],
            y: [0, star.yEnd],
            opacity: [1, 0],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            repeatDelay: Math.random() * 6 + 4, 
          }}
        />
      ))}

    <motion.div
        className="absolute inset-0 transition-opacity duration-500 
        bg-[radial-gradient(circle, rgba(174,213,252,0.4) 10%, rgba(255,255,255,0) 50%)] 
        dark:bg-[radial-gradient(circle, rgba(0,255,255,0.2) 10%, rgba(0,0,0,0) 50%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

<motion.div
        className="absolute w-32 h-32 bg-yellow-400 dark:bg-yellow-500 rounded-full shadow-2xl"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        animate={{
          scale: [1, 1.05, 1],
          boxShadow: [
            "0px 0px 10px rgba(255, 215, 0, 0.6)",
            "0px 0px 30px rgba(255, 215, 0, 0.9)",
            "0px 0px 10px rgba(255, 215, 0, 0.6)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {[
        { name: "Mercure", size: 12, distance: 60, color: "bg-gray-500" },
        { name: "Vénus", size: 16, distance: 90, color: "bg-yellow-600" },
        { name: "Terre", size: 18, distance: 130, color: "bg-blue-500" },
        { name: "Mars", size: 14, distance: 180, color: "bg-red-500" },
        { name: "Jupiter", size: 30, distance: 250, color: "bg-orange-500" },
        { name: "Saturne", size: 28, distance: 320, color: "bg-yellow-400" },
        { name: "Uranus", size: 22, distance: 380, color: "bg-teal-400" },
        { name: "Neptune", size: 20, distance: 440, color: "bg-indigo-500" },
      ].map((planet, index) => (
        <motion.div
          key={planet.name}
          className={`absolute rounded-full shadow-md ${planet.color}`}
          style={{
            width: `${planet.size}px`,
            height: `${planet.size}px`,
            top: `calc(50% - ${planet.distance}px)`,
            left: `calc(50% - ${planet.distance}px)`,
          }}
          animate={{
            rotate: [0, 360],
            translateX: [`${planet.distance}px`, `-${planet.distance}px`],
            translateY: [`${planet.distance}px`, `-${planet.distance}px`],
          }}
          transition={{
            duration: 5 + index * 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {[
        60, 90, 130, 180, 250, 320, 380, 440,
      ].map((distance, index) => (
        <motion.div
          key={index}
          className="absolute border border-gray-400 dark:border-gray-600 rounded-full"
          style={{
            width: `${distance * 2}px`,
            height: `${distance * 2}px`,
            top: `calc(50% - ${distance}px)`,
            left: `calc(50% - ${distance}px)`,
          }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
