import * as React from 'react';
import { animations, easings } from 'react-animation'
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
//import Planet1 from '../../assets/Planets/Planet_violet.png'
//import Planet2 from '../../assets/Planets/Planet_Green.png'
//import Planet3 from '../../assets/Planets/Planet_yellow.png'
import Planet1 from '../../assets/04_Collaboration Page/addon/Planet.png'
import Planet2 from '../../assets/04_Collaboration Page/addon/Planet-1.png'
import Planet3 from '../../assets/04_Collaboration Page/addon/Planet-2.png'
import { useTranslation } from 'react-i18next';

export default function Collaboratopn() { 
    const { t, i18n } = useTranslation();

  return (
    <div className='collaboration'>
      <img src={Planet1} className='collar_planet_1' />
      <img src={Planet2} className='collar_planet_2' />
      <img src={Planet3} className='collar_planet_3' />
      <div className='collaboration_main'>

        <div className='collaboration_brand' >
          <div className="collaboration_brand-content">
            <h1>{t('body_colaboration.colaboration1')}<br></br>{t('body_colaboration.colaboration2')}</h1>
              <p>{t('body_colaboration.colaboration3')}<br></br>
              <br></br>{t('body_colaboration.colaboration4')}</p>
            </div>
        </div>
        <div className='collaboration_employee' > 
          <div className="collaboration_brand-content">  
              <h1>{t('body_colaboration.colaboration5')}<br></br>{t('body_colaboration.colaboration6')}</h1>
                <p>{t('body_colaboration.colaboration7')}<br></br>
                <br></br>{t('body_colaboration.colaboration8')}</p>
              </div>
          </div>
        <div className='collaboration_student' > 
          <div className="collaboration_brand-content">
              <h1>{t('body_colaboration.colaboration9')}<br></br>{t('body_colaboration.colaboration10')}<br></br>{t('body_colaboration.colaboration11')}</h1>
                <p>{t('body_colaboration.colaboration12')}<br></br>
                <br></br>{t('body_colaboration.colaboration13')}</p>
              </div>
        </div>
      </div>
    </div>
  );
}


const styles = {
  collab_1: {
    width: "364px",
    height: "669px",
  },
  animation: {
    animation: `pop-in ${easings.easeOutExpo} 900ms forwards`
  }
}