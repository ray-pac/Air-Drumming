import React, { useEffect, useState } from 'react'
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './home'
import Play from './play'
import Community from './community'
import Evnets from './events'
import '../../assets/css/pages/Home/style.css'

export default function Main() {
  const [mouseY, setMouseY] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (event) => {
      const windowHeight = window.innerHeight;
      const centerY = windowHeight / 2;
      const normalizedY = (event.clientY - centerY) / centerY;
      setMouseY(normalizedY * 3); // Set the normalized Y position
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <div className="home-container" style={{
       backgroundPositionY: `${Math.max((10 + mouseY * 5) + (scrollY * 0.05), 0)}%`, // Adjust based on mouseY
      transition: "0.3s",
    }}>
      <Home />
      <Play />
      <Community />
      <Evnets />
    </div>
  );
}
