import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isMobile, isTablet, isDesktop } from 'react-device-detect';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from '../pages/components/header/header';
import Footer from '../pages/components/footer';
import Home from "../pages/Home/index";
import About from "../pages/About/index";
import School from '../pages/Services/index';
import Collaboration from '../pages/Collaboration';
import AirCommunity from '../pages/AirCommunity';
import Contact from '../pages/Contact'
import Privacy from '../pages/privacy'
import { setDevice } from '../actions';

function AppRouters() {
  const dispatch = useDispatch(); // Get the dispatch function

  useEffect(() => {
    if (window.innerWidth <= 768) {
      dispatch(setDevice("Nox"));
    } else if (window.innerWidth > 768 && window.innerWidth <= 960) {
      dispatch(setDevice("Tablet"));
    } else if (window.innerWidth > 960) {
      dispatch(setDevice("PC"));
    }
  }, []);

  return (
    <Router>
      <Header />
      <nav className="nav">
        <Link to="/" className="link">Home</Link>
        <Link to="/home" className="link">Home</Link>
        <Link to="/about" className="link">About</Link>
        <Link path="/services" element="link">School</Link>
        <Link path="/collaboration" element="link">Collaboration</Link>
        <Link path="/community" element="link">AirCommunity</Link>
        <Link path="/contact" element="link">Contact</Link>
        <Link path="/privacy" element="link">Privacy</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<School />} />
        <Route path="/collaboration" element={<Collaboration />} />
        <Route path="/community" element={<AirCommunity />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRouters;