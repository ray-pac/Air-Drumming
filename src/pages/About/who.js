import * as React from 'react';
import { useEffect, useRef } from 'react';
import { animations } from 'react-animation'
import { useInView } from "react-intersection-observer";
import '../../assets/css/styles.css';
import '../../assets/css/animated.css';
import { useTranslation } from 'react-i18next';

const styles = {
  animations: {
    animation: 'slideInLeft 0.5s ease-out forwards',
  }
}

export default function Play() {
    const { t, i18n } = useTranslation();
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
              <h1>{t('body_about.aboutWho1h')}</h1>
              <p>{t('body_about.aboutWho1p')}<br></br>
                  {t('body_about.aboutWho2p')}<br></br> 
                <br></br>{t('body_about.aboutWho3p')}</p>
            </div>
          </button>
      </div>
      
      <div>
        <button
          style={(hover || inView) ? styles.animations : { textAlign: "center" }}
          className='mission hidden'>
            <div className="mission-overlay-content">
              <h1>{t('body_about.aboutMiss1h')}</h1> 
            <p>{t('body_about.aboutMiss1p')}</p>
        </div>
        </button>
        <button
          style={(hover || inView) ? { animation: 'slideInLeft 0.7s ease-out forwards' } : { textAlign: "center" }}
          className='vision hidden'>
             <div className="vision-overlay-content">
                  <h1>{t('body_about.aboutVis1h')}</h1>
                <p>{t('body_about.aboutVis1p')}</p>
            </div>
          </button>
      </div>
    </div>
  );
}
