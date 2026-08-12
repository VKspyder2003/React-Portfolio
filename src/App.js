import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import OpenSource from './components/OpenSource';
import ExperienceEducation from './components/ExperienceEducation';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  return (
    <div className='App'>
        <NavBar />
        <Banner />
        <About />
        <Skills />
        <Projects />
        <OpenSource />
        <ExperienceEducation />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
