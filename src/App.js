import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experiences from './components/Experiences/Experiences';
import Skills from './components/Skills/Skills';
import Works from './components/Works/Works';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Experiences/>
      <Skills/>
      <Works/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
