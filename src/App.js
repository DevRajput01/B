import React from 'react';
import Header from './Components/pages/Allpage/Header';
import Main1 from './Components/pages/Allpage/Main1';
import Skills from './Components/pages/Allpage/Skills';
import About from './Components/pages/Allpage/About';
import Project from './Components/pages/Allpage/Project';
import Contact from './Components/pages/Allpage/Contact';
import Footer from './Components/pages/Allpage/Footer';


const App = () => {
  return (
    <>
      <Header />
      <Main1 />
      
      <main>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Project />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;