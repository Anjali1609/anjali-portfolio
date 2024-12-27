import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Education from './components/Education';
import Skill from './components/Skill';
import Experience from './components/Experience';
import Footer from './components/footer';
import Projects from './components/projects/Projects';
// import PreLoader from './components/PreLoader';
import Contact from './components/contact/Contact';

function App() {
  return (
    <>
      {/* <PreLoader/> */}
      <div>
        <NavBar />
        <Home />
        <About />
        <Education />
        <Skill />
        <Experience />
        <Contact />
        <Footer />
        <SocialLinks />
      </div>
    </>
  );
}

export default App;
