// src/components/EyeAnimation.jsx
import React, { useEffect, useState } from "react";
// import Eyes from "../pages/EyesPage";
import EyesPage from "../pages/EyesPage";


const EyeAnimation = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaX, deltaY) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // cleanup to avoid multiple listeners or memory leaks
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <EyesPage rotate={rotate} />;
};

export default EyeAnimation;
