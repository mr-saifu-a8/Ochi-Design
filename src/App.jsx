import React from 'react'
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marque from './components/Marque';
import About from './components/About';
import EyeAnimation from './components/animation/EyeAnimation';
import LocomotiveScroll from "locomotive-scroll";
import Featured from './components/Featured';
import ClientReviews from './components/ClientReviews';



function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="bg-[#F1F1F1]">
      <Navbar />
      <LandingPage />
      <Marque />
      <About />
      <EyeAnimation />
      <Featured />
      <ClientReviews/>
    </div>
  );
}

export default App