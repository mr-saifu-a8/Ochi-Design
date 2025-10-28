import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/pages/LandingPage";
import Marque from "./components/pages/Marque";
import About from "./components/pages/About";
import EyeAnimation from "./components/animation/EyeAnimation";
import LocomotiveScroll from "locomotive-scroll";
import Featured from "./components/pages/Featured";
import ClientReviews from "./components/ClientReviews";
import ClientReviewsName from "./components/ClientReviewsName";

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
      <ClientReviews />
      <ClientReviewsName />
    </div>  
  );
}

export default App;
