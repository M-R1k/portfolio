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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);  

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="flex flex-col min-h-screen w-screen overflow-x-hidden">
          <Nav /> 
          <main className="flex-grow">

          <Header />
          <About />
          <Projects />
          <Contact />
          <Authentication />
        </main>
        </div>
      )}
    </div>
  );
}

export default App;