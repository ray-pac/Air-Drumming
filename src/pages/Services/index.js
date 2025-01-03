import React, { useEffect, useRef } from 'react';
import { useLocation } from "react-router-dom";
import Home from './school/home';
import Corporate from './corporate';
import Community from './community';
import Events from './events';
import Background from '../../assets/03_Services Page/addon/services_back.png'
import '../../assets/css/pages/Services/service.css'

const styles = {
  background: {
    backgroundImage: `url(${Background})`,
    backgroundSize: "100% 100%",
  }
};

export default function Main() {
  const location = useLocation();
  const eventsRef = useRef(null);
  const homeRef = useRef(null);
  const corporateRef = useRef(null);
  const communityRef = useRef(null);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1); // Remove the '#' from the hash
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className='service_container' style={styles.background}>
      <section id="home" ref={homeRef}><Home /></section>
      <section id="corporate" ref={corporateRef}><Corporate /></section>
      <section id="community" ref={communityRef}><Community /></section>
      <section id="events" ref={eventsRef}><Events /></section>
    </div>
  );
}
