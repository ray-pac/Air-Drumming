// SolarSystem.js
import React, { useState, useEffect, useRef } from 'react';
import Planet_green from '../../../assets/Planets/Planet_Green.png'
import Planet_red from '../../../assets/Planets/Planet_red.png'
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const CommunityCom = () => {
  const [hover, setHover] = React.useState(false);
  

  return (
    <div className='service-events' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <img src={Planet_green} className={hover ? 'events_planet_violet_animation' : "events_planet_violet"} />
      <img src={Planet_red} className={hover ? 'events_planet_yellow_animation' : "events_planet_yellow"} />
      <div className='service-events-detail'>
        <div >
          <div style={{ borderRadius: 50 }} className={hover ? 'service_events-image provide_animation' : "service_events-image"} />
        </div>
        <div >
          <div>
          <Col xs={12}>
            <div className={hover ? 'events-intro school_right_animation' : "events-intro"} style={{ alignContent: "center" }}>
            <div className="schools-content">
                  <h1>EVENTS</h1>
                  <p>In today's digital world, there is no better way to engage consumers than using technology. We R&D a comprehensive suite of Al-powered 
                    solutions to deliver gamified experiences that are immersive, interactive and innovative! Tap on our proprietary Air Drumming application, 
                    together with physical Air Kiosk (mobile gaming machine), to hype up your pop-up events and boost crowd engagement.</p>
              </div>
          </div>
        </Col>
          </div>
          <div style={{ marginTop: 15 }}>
          <Col xs={12}>
            <div className={hover ? 'events-provide provid_right_animation' : "events-provide"} style={{ alignContent: "center" }}>
            <div className="schools-content">
                  <h1>WE PROVIDE</h1>
                  <p style={{ margin: 0, paddingLeft: "10px" }}>• Air Kiosks (suitable for Pop-up activations)</p>
                  <p style={{ margin: 0, paddingLeft: "10px" }}>• 020 Gamified Experiences (suitable for campaigns)</p>
                  <p style={{ margin: 0, paddingLeft: "10px" }}>• Interactive Performances (suitable for opening/closing events)</p>
              </div>
          </div>
        </Col>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityCom;
