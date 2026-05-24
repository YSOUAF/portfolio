
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Leadership from './components/Leadership';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="bg-dark text-light min-h-screen selection:bg-primary/30 selection:text-primary">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Leadership />
      </main>
      <Footer />
    </div>
  );
}

export default App;
