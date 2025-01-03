// SolarSystem.js
import React, { useState } from 'react';
//import Corporate from '../../../assets/images/services/corporate/corporate_1.png'
//import Provide from '../../../assets/images/services/corporate/corporate_2.png'
//import Worked from '../../../assets/images/services/corporate/corporate_3.png'
//import Corporate_back from '../../../assets/03_Services Page/addon/image_3_1.png'
//import MilestonesBack from '../../../assets/images/services/corporate/image_9.png'
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const CorporateCom = () => {
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
                  <h1>CORPORATE</h1>
                  <p>Watch a movie, play a sport, or conquer an amazing race challenge? It's time to surprise and impress your employees with more 
                    refreshing corporate engagement ideas. Be it for your annual D&D, festive event, teambuilding activity, or CSR initiative - 
                    we can drum up innovative rhythmic performances or fun team programs for your organization! <br></br>
                  <br></br>Powered by our agile Air Drumming platform, we immerse your employees in an absolutely adrenaline-pumping and eye-opening 
                  drumming experience unlike any others. We turn your imagination into a reality!</p>
              </div>
            </div>
            </Col>
          </div>
          <div style={{ marginTop: 15 }}>
          <Col xs={12}>
            <div className={hover ? 'corporate-provide provid_right_animation' : "corporate-provide"} >
              <div className="schools-content">
                    <h1>WE PROVIDE</h1>
                    <p style={{ margin: 0, paddingLeft: "10px" }}>• Performance (with elements of Audience Interaction)</p>
                    <p style={{ margin: 0, paddingLeft: "10px" }}>• Teambuilding Program</p>
                    <p style={{ margin: 0, paddingLeft: "10px" }}>• Creative Collaboration (Executive-level Training & Choreography, Customized Request)</p>
                </div>
              </div>
            </Col>
          </div>
          <div style={{ marginTop: 15 }}>
          <Col xs={12}>
            <div className={hover ? 'corporate-worked worked_right_animation' : "corporate-worked"} >
              <div className="schools-content">
                    <h1>PARTNERS WE HAVE WORKED WITH</h1>
                    <p>DBS, UBS, HTX, Johnson & Johnson, Gardens by the Bay, Marina Bay Sands, MediaCorp, Tiger Beer, The Body Shop</p>
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
