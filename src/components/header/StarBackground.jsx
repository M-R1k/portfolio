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
            className="absolute rounded-full bg-cyan-500 dark:bg-white"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: star.y,
              left: star.x,
            }}
            animate={{
              opacity: [0.8, 1, 0.8], 
              scale: [1, 1.5, 1], 
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
            className="absolute h-[2px] sm:w-[60px] w-[80px] shadow-lg bg-gradient-to-r from-blue-400 to-transparent dark:from-white dark:to-transparent"
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
  
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-yellow-400 dark:bg-yellow-500"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              top: particle.y,
              left: particle.x,
            }}
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
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
      
        {[
          { 
            name: "Mercure", 
            size: 12, 
            distance: 60, 
            texture: "bg-gradient-to-br from-gray-400 via-gray-600 to-gray-800",
            pattern: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 50%)",
            features: ["craters"]
          },
          { 
            name: "Vénus", 
            size: 16, 
            distance: 90, 
            texture: "bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-700",
            pattern: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4) 0%, transparent 60%)",
            features: ["clouds"]
          },
          { 
            name: "Terre", 
            size: 18, 
            distance: 130, 
            texture: "bg-gradient-to-br from-blue-300 via-green-400 to-blue-600",
            pattern: "radial-gradient(circle at 40% 40%, rgba(255,255,255,0.3) 0%, transparent 50%)",
            features: ["continents", "oceans", "clouds"]
          },
          { 
            name: "Mars", 
            size: 14, 
            distance: 180, 
            texture: "bg-gradient-to-br from-red-300 via-red-500 to-red-800",
            pattern: "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 0%, transparent 40%)",
            features: ["polar_caps", "dust_storms"]
          },
          { 
            name: "Jupiter", 
            size: 30, 
            distance: 250, 
            texture: "bg-gradient-to-br from-orange-300 via-orange-500 to-red-600",
            pattern: "linear-gradient(45deg, rgba(255,255,255,0.3) 0%, transparent 50%, rgba(255,255,255,0.2) 100%)",
            features: ["bands", "great_red_spot"]
          },
          { 
            name: "Saturne", 
            size: 28, 
            distance: 320, 
            texture: "bg-gradient-to-br from-yellow-200 via-yellow-400 to-orange-500",
            pattern: "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.4) 0%, transparent 60%)",
            features: ["bands"]
          },
          { 
            name: "Uranus", 
            size: 22, 
            distance: 380, 
            texture: "bg-gradient-to-br from-cyan-200 via-cyan-400 to-blue-500",
            pattern: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 50%)",
            features: ["bands"]
          },
          { 
            name: "Neptune", 
            size: 20, 
            distance: 440, 
            texture: "bg-gradient-to-br from-indigo-300 via-indigo-500 to-blue-700",
            pattern: "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 0%, transparent 40%)",
            features: ["bands", "storms"]
          },
        ].map((planet, index) => (
          <div
            key={planet.name}
            className="absolute"
            style={{
              top: "55%",
              left: "53%",
              width: `${planet.distance * 2}px`,
              height: `${planet.distance * 2}px`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <motion.div
              className="absolute border border-gray-400 dark:border-gray-600 rounded-full"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
      
            {/* Planète avec texture réaliste */}
            <motion.div
              className={`absolute rounded-full shadow-lg ${planet.texture}`}
              style={{
                width: `${planet.size}px`,
                height: `${planet.size}px`,
                top: "0", 
                left: "50%",
                transform: `translate(-50%, -50%) rotate(0deg)`,
                transformOrigin: `0 ${planet.distance}px`,
                background: `${planet.texture}, ${planet.pattern}`,
                boxShadow: `inset 0 0 ${planet.size/3}px rgba(0,0,0,0.3), 0 0 ${planet.size/2}px rgba(0,0,0,0.2)`,
              }}
              animate={{
                rotate: [0, 360], 
              }}
              transition={{
                duration: 5 + index * 3, 
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {/* Effets de surface spécifiques */}
              {planet.features.includes("craters") && (
                <div className="absolute inset-0 rounded-full opacity-30">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-gray-800 rounded-full"
                      style={{
                        top: `${20 + i * 30}%`,
                        left: `${30 + i * 20}%`,
                      }}
                    />
                  ))}
                </div>
              )}
              
              {planet.features.includes("clouds") && (
                <motion.div
                  className="absolute inset-0 rounded-full opacity-40"
                  style={{
                    background: "radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.6) 0%, transparent 70%)",
                  }}
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )}
              
              {planet.features.includes("bands") && (
                <div className="absolute inset-0 rounded-full opacity-50">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-full h-0.5 bg-white opacity-30"
                      style={{
                        top: `${20 + i * 15}%`,
                      }}
                      animate={{
                        opacity: [0.2, 0.5, 0.2],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </div>
              )}
              
              {planet.features.includes("great_red_spot") && (
                <motion.div
                  className="absolute w-4 h-2 bg-red-600 rounded-full opacity-60"
                  style={{
                    top: "40%",
                    left: "60%",
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )}
              
              {planet.features.includes("polar_caps") && (
                <div className="absolute inset-0 rounded-full">
                  <div className="absolute w-full h-1 bg-white opacity-60 top-1" />
                  <div className="absolute w-full h-1 bg-white opacity-60 bottom-1" />
                </div>
              )}
            </motion.div>
            
          </div>
        ))}
  

        {/* Soleil avec texture réaliste */}
        <motion.div
          className="absolute sm:w-24 sm:h-24 w-36 h-36 bg-yellow-400 dark:bg-yellow-500 rounded-full shadow-2xl"
          style={{ 
            top: "50vh", 
            left: "50vw", 
            transform: "translate(-50%, -50%)",
            zIndex: 10
          }}
          animate={{
            scale: [1, 1.05, 1],
            boxShadow: [
              "inset 0 0 20px rgba(255,255,255,0.3), 0 0 20px rgba(255, 215, 0, 0.6)",
              "inset 0 0 20px rgba(255,255,255,0.4), 0 0 40px rgba(255, 215, 0, 0.9)",
              "inset 0 0 20px rgba(255,255,255,0.3), 0 0 20px rgba(255, 215, 0, 0.6)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Taches solaires */}
          <motion.div
            className="absolute w-2 h-2 bg-gray-800 rounded-full opacity-60"
            style={{ top: "30%", left: "40%" }}
            animate={{
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute w-1 h-1 bg-gray-700 rounded-full opacity-50"
            style={{ top: "60%", left: "70%" }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          
          {/* Flammes solaires */}
          <motion.div
            className="absolute inset-0 rounded-full opacity-30"
            style={{
              background: "radial-gradient(ellipse at 50% 0%, rgba(255,100,0,0.8) 0%, transparent 70%)",
            }}
            animate={{
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        </motion.div>
      </div>
    );
  };
  
