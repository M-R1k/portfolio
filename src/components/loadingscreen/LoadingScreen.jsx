import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  // Caractères Matrix
  const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?";
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;
    
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    
    const fontSize = 16; // Légèrement plus grand
    const columns = Math.floor(canvasWidth / fontSize);
    const drops = Array(columns).fill(1);
    
    const draw = () => {
      // Fond semi-transparent pour effet de traînée
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);
      
      // Couleur verte pour les caractères
      ctx.fillStyle = '#00ff00';
      ctx.font = `${fontSize}px monospace`;
      
      for (let i = 0; i < drops.length; i++) {
        // Caractère aléatoire
        const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        
        // Position et opacité
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        
        // Effet de dégradé (plus brillant en haut)
        const opacity = Math.max(0, 1 - (y / canvasHeight) * 0.8);
        ctx.globalAlpha = opacity;
        
        ctx.fillText(text, x, y);
        
        // Reset de la colonne si elle atteint le bas (ralenti)
        if (y > canvasHeight && Math.random() > 0.985) {
          drops[i] = 0;
        }
        
        drops[i] += 0.8; // Ralentir la chute des caractères
      }
      
      animationRef.current = requestAnimationFrame(draw);
    };
    
    draw();
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1; // Augmenter la progression pour une synchronisation plus fluide
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 100); // Ajuster l'intervalle pour une durée totale de 10 secondes (100% / 1% par 100ms = 10s)
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Canvas pour l'effet Matrix */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      />
      
      {/* Overlay avec dégradé */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 z-10" />
      
      {/* Grille Matrix */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="none">
          <defs>
            <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(0,255,0,0.3)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gridPattern)" />
        </svg>
      </motion.div>

      {/* Contenu principal */}
      <motion.div
        className="relative z-30 text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          className="relative"
          animate={{
            filter: [
              "drop-shadow(0 0 10px #00ff00)",
              "drop-shadow(0 0 20px #00ff00)",
              "drop-shadow(0 0 30px #00ff00)",
              "drop-shadow(0 0 20px #00ff00)",
              "drop-shadow(0 0 10px #00ff00)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        >
          <motion.h1
            className="text-3xl md:text-6xl font-bold text-green-500 font-mono"
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
            LOADING...
          </motion.h1>
          
          <motion.div
            className="mt-6 text-green-400 text-lg font-mono"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            INITIALIZING SYSTEM
          </motion.div>
        </motion.div>

        {/* Barre de progression améliorée */}
        <motion.div 
          className="mt-8 w-80 h-3 bg-gray-900 rounded-full overflow-hidden border border-green-500/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-green-500 to-green-300 relative"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.05, ease: "linear" }}
          >
            {/* Effet de brillance */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-4 flex items-center justify-center space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.p 
            className="text-green-500 text-xl font-mono font-bold"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            {Math.round(progress)}%
          </motion.p>
        </motion.div>
        
        {/* Indicateurs de statut */}
        <motion.div
          className="mt-6 text-green-400 text-sm font-mono space-y-1"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0 }}
          >
            ✓ CONNECTING TO MATRIX...
          </motion.div>
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          >
            ✓ LOADING NEURAL PATTERNS...
          </motion.div>
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, delay: 2 }}
          >
            ✓ SYNCHRONIZING DATA STREAMS...
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};
