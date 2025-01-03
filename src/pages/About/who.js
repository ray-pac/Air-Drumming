import * as React from 'react';
import { useEffect, useRef } from 'react';
import { animations } from 'react-animation'
import { useInView } from "react-intersection-observer";
import '../../assets/css/styles.css';
import '../../assets/css/animated.css';

const styles = {
  animations: {
    animation: 'slideInLeft 0.5s ease-out forwards',
  }
}

export default function Play() {
  const buttonRefs = useRef([]);
  const [hover, setHover] = React.useState(false);

  const [ref, inView] = useInView({
    threshold: 0.6, // Trigger when 10% of the component is visible
  });

  return (
    <div className='play-container' ref={ref}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div>
        <button className='whos hidden '>
          <div className="whos-overlay-content">
              <h1>WHO WE ARE?</h1>
              <p>Rhythm is our universal language to connect with the world. We are as a team of creative rhythm makers, performers,<br></br>
                educators, artists, and most importantly, ever-changing innovators.<br></br> 
                <br></br>We redefine rhythm. We created new possibilities. We turn ideas into reality.</p>
            </div>
          </button>
      </div>
      
      <div>
        <button
          style={(hover || inView) ? styles.animations : { textAlign: "center" }}
          className='mission hidden'>
            <div className="mission-overlay-content">
              <h1>MISSION</h1>
            <p>Bridging AI and Reality to create Inclusivity through rhythm</p>
        </div>
        </button>
        <button
          style={(hover || inView) ? { animation: 'slideInLeft 0.7s ease-out forwards' } : { textAlign: "center" }}
          className='vision hidden'>
             <div className="vision-overlay-content">
                  <h1>VISION</h1>
                <p>Be Asia's leading rhythm-based edutainment platform</p>
            </div>
          </button>
      </div>
    </div>
  );
}
