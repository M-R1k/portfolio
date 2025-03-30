import React from "react";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";

const projects = [
  {
    title: "MyMeetic | PHP, MVC",
    description: "Introduction to the MVC structure by creating a dating platform similar to Meetic. This project focused on user registration, profile management, and search functionalities.",
    videoUrl: "./MyMeetic_preview.mp4",
    languages: ["PHP", "MVC", "HTML", "CSS"],
  },
  {
    title: "My Battleship | JavaScript ES5",
    description: "Debugging and improving a battleship game. This project allowed me to work on game logic and fix complex bugs.",
    videoUrl: "./Battleship_preview.mp4",
    languages: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "My Cinema | PHP, SQL, Bootstrap",
    description: "Development of an interactive movie reference website, with search and database management features.",
    videoUrl: "./MyCinema_preview.mp4",
    languages: ["PHP", "SQL", "Bootstrap"],
  },
  {
    title: "My Connect Four | JavaScript ES6",
    description: "Creation of an interactive Connect Four game with a modern user interface and animations.",
    videoUrl: "./MyPower4_preview.mp4",
    languages: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "My Twitter | PHP & Tailwind CSS",
    description: "Recreation of a social network similar to Twitter, with features for posting, following, and responsive design.",
    videoUrl: "./MyTwitter_preview.mp4",
    languages: ["PHP", "TailwindCSS", "MySQL"],
  },
  {
    title: "MyEcommerce | React, Symfony",
    description: "Development of a modern e-commerce platform with React and Symfony.",
    videoUrl: "./MyEcommerce_preview.mp4",
    languages: ["React", "Symfony"],
  },
];

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 0,
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
    <div
      id="projects"
      className="py-16 px-6 sm:px-12 lg:px-24 transition-colors duration-500 
                 bg-gradient-to-br from-white via-[#F2F5F9] to-[#E4E7EB] 
                 dark:bg-gradient-to-br dark:from-black dark:via-[#0A0F1E] dark:to-[#1B263B]"
    >
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-green-500 dark:text-gray-200 font-mono tracking-wider text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Projects and Achievements
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
        {projects.map((project, index) => (
          <Card key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

function Card({ project, index }) {
  return (
    <motion.div
      className="w-full max-w-md rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 shadow-lg relative transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div
        className="relative p-6 flex flex-col justify-center items-center"
        variants={cardVariants}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-700 dark:text-cyan-400 text-center font-mono">
          {project.title}
        </h2>
        <p className="text-sm sm:text-base text-gray-600 font-mono dark:text-gray-300 mb-6 text-center leading-relaxed">
          {project.description}
        </p>

        {project.videoUrl && (
          <div className="w-full rounded-lg overflow-hidden shadow-md mb-6">
            <ReactPlayer
              className="rounded-lg"
              width="100%"
              height="200px"
              url={project.videoUrl}
              controls
              playing={false}
            />
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-3 mt-4">
          {project.languages.map((language, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md dark:from-cyan-600 dark:to-blue-700"
            >
              {language}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}