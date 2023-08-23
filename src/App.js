import React, { useEffect, useState } from 'react';
import './App.css';

//COMPONENTS
import Projects from "./components/Projects/projects";
import Contact from './components/Contact/contact';
import Sidebar from './components/Sidebar/sidebar';
import Home from './components/Home/home';
import About from './components/About/about';
import Education from './components/Education/education';
import Achievements from './components/Achievements/achievements';
import Skills from "./components/Skills/skills";
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/loader/Loader';

function App() {
  


  const [loading, setLoading] = useState(true)


  useEffect(() => {
   
    setTimeout(() => {

      setLoading(false)
      
    }, 3500);
  }, [])
  

  return (
    <>
      {
        (loading) ? <Loader /> : (
          <div>
            <Sidebar />
            <main className="main">
              <Home />
              <About />
              <Skills />
              <Education />
              <Projects />
              <Achievements />
              <Contact />
              <ScrollToTop />
            </main>
          </div>
        )
      }
    </>
  );
}

export default App;
