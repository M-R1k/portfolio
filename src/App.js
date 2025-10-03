import React, { useState, useEffect } from 'react';
import { About } from './components/about/About';
import { Header } from './components/header/Header';
import { Nav } from './components/nav/Nav';
import { LoadingScreen } from './components/loadingscreen/LoadingScreen';
import { Projects } from './components/my_projects/Projects';
import { Contact } from './components/contact/Contact';
import { Authentication } from './components/auth/Authentication';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true); // Mode sombre par défaut

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  // Appliquer la classe dark au document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : ''}`}>
      {/* {isLoading ? (
        <LoadingScreen />
      ) : ( */}
        <div className="flex flex-col min-h-screen w-screen overflow-x-hidden bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
          <Nav isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} /> 
          <main className="flex-grow">
            <Header />
            <About />
            <Projects />
            <Contact />
            <Authentication />
          </main>
        </div>
      {/* )} */}
    </div>
  );
}

export default App;