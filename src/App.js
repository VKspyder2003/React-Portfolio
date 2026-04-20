import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className='App'>
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
