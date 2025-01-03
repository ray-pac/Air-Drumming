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

export default function Collaboratopn() { 

  return (
    <div className='collaboration'>
      <img src={Planet1} className='collar_planet_1' />
      <img src={Planet2} className='collar_planet_2' />
      <img src={Planet3} className='collar_planet_3' />
      <div className='collaboration_main'>

        <div className='collaboration_brand' >
          <div className="collaboration_brand-content">
            <h1>BRAND<br></br>TOKENIZATION</h1>
              <p>Looking to take your brand outreach and engagement efforts up a digital notch?<br></br>
              <br></br>We can conceptualize and implement tokenized loyalty and reward campaigns for you with our AIR technology</p>
            </div>
        </div>
        <div className='collaboration_employee' > 
          <div className="collaboration_brand-content">  
              <h1>EMPLOYEE<br></br>ENGAGEMENT</h1>
                <p>Planning to entice and reward your employees with something more fun and current?<br></br>
                <br></br>We can conceptualize and implement tokenized employee benefits for your organization with our AIR technology</p>
              </div>
          </div>
        <div className='collaboration_student' > 
          <div className="collaboration_brand-content">
              <h1>STUDENT<br></br>ENGAGEMENT<br></br>(GAMIFIED LEARNING)</h1>
                <p>Cracking new ways to facilitate more effective learning for your students?<br></br>
                <br></br>We can conceptualize and implement gamified learning solutions for your institution with our AIR technology</p>
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