// SolarSystem.js
import React, { useState, useEffect, useRef } from 'react';
import Planet_green from '../../../assets/Planets/Planet_Green.png'
import Planet_red from '../../../assets/Planets/Planet_red.png'
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';


const CommunityCom = () => {
  const { t, i18n } = useTranslation();
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
                  <h1>{t('body_services.servicesEvent1h')}</h1>
                  <p>{t('body_services.servicesEvent1p')}</p>
              </div>
          </div>
        </Col>
          </div>
          <div style={{ marginTop: 15 }}>
          <Col xs={12}>
            <div className={hover ? 'events-provide provid_right_animation' : "events-provide"} style={{ alignContent: "center" }}>
            <div className="schools-content">
                  <h1>{t('body_services.servicesEvent2h')}</h1> 
                  <p style={{ margin: 0, paddingLeft: "10px" }}>• {t('body_services.servicesEvent2p')}</p>
                  <p style={{ margin: 0, paddingLeft: "10px" }}>• {t('body_services.servicesEvent3p')}</p>
                  <p style={{ margin: 0, paddingLeft: "10px" }}>• {t('body_services.servicesEvent4p')}</p>
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
