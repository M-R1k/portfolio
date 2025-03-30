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
    { href: "home", label: "Home", icon: <FaHome /> },
    { href: "about", label: "About", icon: <FaUser /> },
    { href: "experience", label: "Experience", icon: <FaBriefcase /> },
    { href: "projects", label: "Projects", icon: <FaProjectDiagram /> },
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
          className="fixed top-4 right-4 w-14 h-14 bg-gradient-to-r from-green-400 to-blue-500 dark:from-green-600 dark:to-blue-700 text-white rounded-full shadow-lg flex items-center justify-center hover:from-green-500 hover:to-blue-600 dark:hover:from-green-700 dark:hover:to-blue-800 transition-all duration-300 md:hidden z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </motion.button>

        <AnimatePresence>
          {(menuOpen || showNavbar) && (
            <motion.nav
          ref={menuRef}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`fixed top-0 z-50 w-full backdrop-blur-lg bg-white dark:bg-gray-900 bg-opacity-90 border-b border-gray-300 dark:border-gray-700 py-4 px-6 flex flex-col md:flex-row justify-between items-center shadow-md ${
            menuOpen ? "flex" : "hidden md:flex"
          }`}
            >
            <div className="flex items-center space-x-4">
              <a href="#header" className="text-2xl font-bold text-green-500 dark:text-green-400">
                M<span className="text-blue-500 dark:text-blue-400">-R1K</span>
              </a>
            </div>

            <div className="flex flex-col md:flex-row justify-end gap-6 items-center space-y-4 md:space-y-0 md:space-x-8 text-gray-700 dark:text-gray-200 font-medium pt-8">
              {navItems.map((item) => (
                <motion.div
                  key={item.href}
                  className="text-lg cursor-pointer flex items-center gap-2 hover:text-green-500 dark:hover:text-green-400 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ScrollLink
                    to={item.href}
                    smooth={true}
                    duration={500}
                    spy={true}
                    activeClass="text-green-500 dark:text-green-400"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2"
                  >
                    <motion.div
                      className="text-2xl md:text-xl lg:text-2xl"
                      whileHover={{ scale: 1.2 }}
                    >
                      {item.icon}
                    </motion.div>
                    <span className="md:inline text-gray-700 dark:text-gray-200">{item.label}</span>
                  </ScrollLink>
                </motion.div>
              ))}
              {/* Dark Mode Toggle */}
              <DarkModeToggle />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};