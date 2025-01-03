// SolarSystem.js
import React from 'react';
import { animations, easings} from 'react-animation'
//import Community from '../../../assets/images/services/community/Card_community_01.png'
//import Provide from '../../../assets/images/services/community/Card_community_02.png'
//import Worked from '../../../assets/images/services/community/Card_community_03.png'
//import Community_back from '../../../assets/images/services/community/community_image.png'
//import CommunityBack from '../../../assets/images/services/community/community_back.png'
import Planet_blue from '../../../assets/Planets/Planet_blue.png'
import Planet_violet from '../../../assets/Planets/Planet_violet.png'
import Planet_yellow from '../../../assets/Planets/Planet_yellow.png'
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const CommunityCom = () => {
  const [hover, setHover] = React.useState(false);

  return (
    <div className='service-community' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <img src={Planet_blue} className={hover ? 'com_planet_blue_ani' : 'com_planet_blue'}/>
      <img src={Planet_violet} className={hover ? 'com_planet_violet_ani' : "com_planet_violet"} />
      <img src={Planet_yellow} className={hover ? 'com_planet_yellow_ani' : 'com_planet_yellow'} />
      <div className='service-community-detail'>
        <div >
          <div>
            <Col xs={12}>
            <div className={hover ? 'community-intro fadeInLeft_animation' : 'community-intro'} >
                  <div className="schools-content">
                    <h1>COMMUNITY</h1>
                    <p>We make rhythm learning accessible for people from all walks of life, especially the underserved communities such as seniors 
                      living alone and persons with disabilities. Conventional drumming workshops can be rather difficult for senior learners, especially 
                      those struggling with any form of medical condition (e.g. intellectual disability, dementia, physical constraint), so we leverage on our 
                      multi-functional Al-powered Air Drumming application to provide an easy-to-follow, and audiovisual learning experience for them.<br></br>
                    <br></br>More than just drumming, we help community partners to conceptualize and customize inclusive programs that champion the five key 
                    components of well-being (social, physical, emotional, mental, nutritional) using technology. We also work closely with our partners to 
                    conduct internal training and development programs for their staff and volunteers as part of our mission to create an inclusive community.</p>
                </div>
            </div>
            </Col>
          </div>
          <div style={{ marginTop: 15 }}>
          <Col xs={12}>
            <div className={hover ? 'community-provide provide_animation' : 'community-provide'}>
            <div className="schools-content">
                  <h1>WE PROVIDE</h1>
                    <p style={{ margin: 0, paddingLeft: "10px" }}>• Inclusive Workshops (applicable to Persons with Disabilities)</p>
                    <p style={{ margin: 0, paddingLeft: "10px" }}>• Long-term Programs (applicable to Persons with Disabilities)</p>
                    <p style={{ margin: 0, paddingLeft: "10px" }}>• Training & Development</p>
                </div>
              </div>
            </Col>
          </div>
          <div style={{ marginTop: 15 }}>
          <Col xs={12}>
            <div className={hover ? 'community-worked worked_animation' : 'community-worked'}>
            <div className="schools-content">
                <h1>SCHOOLS WE HAVE WORKED WITH</h1>
                    <p>Thye Hua Kwan (SAC), Extra Ordinary People, The Singapore Association For The Deaf, Youth Corps Singapore, Loving Heart</p>
                </div>
              </div>
            </Col>
          </div>
        </div>
        <div >
          <div style={{ borderRadius: 50 }} className={hover ? 'service_community-image fadeInRight_animation' : 'service_community-image'}/>
        </div>
      </div>
    </div>
  );
};

export default CommunityCom;
