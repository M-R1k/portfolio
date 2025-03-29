import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactPlayer from "react-player";

const projects = [
  {
    title: "Mon Battleship | JavaScript ES5",
    description: "Débogage et amélioration d'un jeu de bataille navale.",
    videoUrl: "./Battleship_preview.mp4",
  },
  {
    title: "Mon Cinéma | PHP, SQL, Bootstrap",
    description: "Développement d'un site interactif de référencement de films.",
    videoUrl: "./MyCinema_preview.mp4",
  },
  {
    title: "Mon Puissance 4 | JavaScript ES6",
    description: "Création d'un jeu interactif de Puissance 4.",
    videoUrl: "./MyPower4_preview.mp4",
  },
  {
    title: "Mon Twitter | PHP & Tailwind CSS",
    description: "Recréation d'un réseau social similaire à Twitter.",
    videoUrl: "./MyTwitter_preview.mp4",
  },
];


const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export const Projects = () => {
  return (
    
    <div className="flex flex-col items-center gap-12 py-12 bg-gradient-to-br from-black via-blue-900 to-purple-900">
      <motion.h2
          className="text-5xl font-extrabold text-green-400 font-mono tracking-wider"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
              >
                Mes réalisations et projets
              </motion.h2>
      {projects.map((project, index) => (
        <Card key={project.title} project={project} index={index} />
      ))}
    </div>
  );
}

function Card({ project, index }) {
  const background = `white`;

  return (
    <motion.div
      className="w-full max-w-4xl rounded-2xl shadow-xl overflow-hidden bg-gray-800 relative"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <div className="absolute inset-0" style={{ background }} />
      <motion.div className="relative p-6  bg-gray-200 dark:bg-gray-800 flex-col justify-center items-center pt-5" variants={cardVariants}>
        <h2 className="text-2xl font-bold mb-2 text-gray-800">{project.title}</h2>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <ReactPlayer
          className="rounded-lg overflow-hidden shadow-lg"
          width="100%"
          height="350px"
          url={project.videoUrl}
          controls
          playing
        />
      </motion.div>
    </motion.div>
  );
}