// SolarSystem.js
import React, { useState } from 'react';
//import Corporate from '../../../assets/images/services/corporate/corporate_1.png'
//import Provide from '../../../assets/images/services/corporate/corporate_2.png'
//import Worked from '../../../assets/images/services/corporate/corporate_3.png'
//import Corporate_back from '../../../assets/03_Services Page/addon/image_3_1.png'
//import MilestonesBack from '../../../assets/images/services/corporate/image_9.png'
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';

const CorporateCom = () => {
  const { t, i18n } = useTranslation();
  const [hover, setHover] = useState(false)

  return (
    <div className='service-corporate'
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
    >
      <div className='corporate-detail'>
        <div className={hover ? 'provide_animation' : ""}>
          <div className='corporate-image' style={{ borderRadius: 50 }} />
        </div>
        <div >
          <div>
            <Col xs={12}>
            <div className={hover ? 'corporate-intro school_right_animation' : "corporate-intro"} >
               <div className="schools-content">
                  <h1>{t('body_services.servicesCorp1h')}</h1>
                  <p>{t('body_services.servicesCorp1p')}<br></br>
                  <br></br>{t('body_services.servicesCorp2p')}</p>
              </div>
            </div>
            </Col>
          </div>
          <div style={{ marginTop: 15 }}>
          <Col xs={12}>
            <div className={hover ? 'corporate-provide provid_right_animation' : "corporate-provide"} >
              <div className="schools-content">
                    <h1>{t('body_services.servicesCorp2h')}</h1>
                    <p style={{ margin: 0, paddingLeft: "10px" }}>• {t('body_services.servicesCorp3p')}</p>
                    <p style={{ margin: 0, paddingLeft: "10px" }}>• {t('body_services.servicesCorp4p')}</p>
                    <p style={{ margin: 0, paddingLeft: "10px" }}>• {t('body_services.servicesCorp5p')}</p>
                </div>
              </div>
            </Col>
          </div>
          <div style={{ marginTop: 15 }}>
          <Col xs={12}>
            <div className={hover ? 'corporate-worked worked_right_animation' : "corporate-worked"} >
              <div className="schools-content">
                    <h1>{t('body_services.servicesCorp3h')}</h1>
                    <p>{t('body_services.servicesCorp6p')}</p>
                </div>
            </div>
            </Col>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateCom;
