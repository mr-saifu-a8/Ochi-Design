import React from 'react'
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marque from './components/Marque';
import About from './components/About';
import Eyes from './components/Eyes';



function App() {
  return (
    <div className="bg-[#F1F1F1]">
      <Navbar />
      <LandingPage />
      <Marque />
      <About />
      <Eyes/>
    </div>
  );
}

export default App