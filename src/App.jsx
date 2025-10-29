import Navbar from "./components/Navbar";
import LandingPage from "./components/pages/LandingPage";
import Marque from "./components/pages/Marque";
import About from "./components/pages/About";
import EyeAnimation from "./components/animation/EyeAnimation";
import LocomotiveScroll from "locomotive-scroll";
import ClientReviews from "./components/ClientReviews";
import Footer from "./components/pages/Footer";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="bg-[#F1F1F1]">
      <Navbar />
      <LandingPage />
      <Marque />
      <About />
      <EyeAnimation />
      <ClientReviews />
      <Footer/>
    </div>  
  );
}

export default App;
