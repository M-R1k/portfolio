import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaHome, FaUser, FaBriefcase, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import DarkModeToggle from "../darkmode/DarkModeToggle";

export const Nav = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const navItems = [
    { href: "home", label: "Accueil", icon: <FaHome /> },
    { href: "about", label: "À propos", icon: <FaUser /> },
    { href: "experience", label: "Expériences", icon: <FaBriefcase /> },
    { href: "projects", label: "Mes projets", icon: <FaProjectDiagram /> },
    { href: "contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY < scrollPosition);
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative">
      <motion.button
        className="fixed top-4 right-4 w-16 h-16 bg-gray-800 text-gray-200 border dark:border-gray-200 rounded-full shadow-lg flex items-center justify-center hover:bg-green-400 hover:text-black transition-colors"
        onClick={() => setMenuOpen(!menuOpen)}
        whileTap={{ scale: 0.9 }}
      >
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </motion.button>

      <AnimatePresence>
        {(showNavbar || menuOpen) && (
          <motion.nav
            ref={menuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-0 z-50 w-full backdrop-blur-xl bg-gray-100 dark:bg-gray-900 bg-opacity-80 border-b border-gray-400 py-4 px-8 flex justify-center shadow-lg"
          >
            <div className="flex items-center space-x-2 sm:space-x-6 dark:text-gray-200 font-mono ">
            <a class="title" href="/"><p class="p-2 left-4 top-4 fixed font-light uppercase text-2xl">M<span class="font-bold">-R1K</span></p></a>
              {navItems.map((item) => (
                <motion.div
                  key={item.href}
                  className="text-lg cursor-pointer flex items-center gap-2 hover:text-green-300 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ScrollLink
                    to={item.href}
                    smooth={true}
                    duration={500}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </ScrollLink>
                </motion.div>
              ))}
          <DarkModeToggle />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};
