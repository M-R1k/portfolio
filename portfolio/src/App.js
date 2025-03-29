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
        <>
          <Header />
          <About />
          <Nav /> 
          <Projects />
          <Contact />
          <Authentication />
        </>
      )}
    </div>
  );
}

export default App;