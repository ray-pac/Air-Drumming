// SolarSystem.js
import React, { useEffect, useState } from 'react';
import { animations } from 'react-animation'
//import Milestones from '../../assets/images/About/section3/Frame.png'
import image_2024 from '../../assets/02_About Page/About_Section 3 Milestone/Milestone 2024.JPG'
//import image_2023_1 from '../../assets/images/About/section3/2023_1.png'
//import image_2023_2 from '../../assets/images/About/section3/2023_2.png'
//import image_2022_1 from '../../assets/images/About/section3/2022_1.png'
//import image_2022_2 from '../../assets/images/About/section3/2022_2.png'
import image_2021 from '../../assets/02_About Page/About_Section 3 Milestone/edited/2021.png'
import image_2019 from '../../assets/02_About Page/About_Section 3 Milestone/edited/2019.png'
import image_2017 from '../../assets/02_About Page/About_Section 3 Milestone/edited/2017.png'
import image_2015 from '../../assets/02_About Page/About_Section 3 Milestone/Milestone 2015.jpg'
import image_2014 from '../../assets/02_About Page/About_Section 3 Milestone/edited/2014.png'

import Planet_2024 from '../../assets/02_About Page/About_Section 3 Milestone/Planet Bullet/Planet_bullet_09.png'
import Planet_2023 from '../../assets/02_About Page/About_Section 3 Milestone/Planet Bullet/Planet_bullet_08.png'
import Planet_2022 from '../../assets/02_About Page/About_Section 3 Milestone/Planet Bullet/Planet_bullet_07.png'
import Planet_2021 from '../../assets/02_About Page/About_Section 3 Milestone/Planet Bullet/Planet_bullet_06.png'
import Planet_2019 from '../../assets/02_About Page/About_Section 3 Milestone/Planet Bullet/Planet_bullet_05.png'
import Planet_2017 from '../../assets/02_About Page/About_Section 3 Milestone/Planet Bullet/Planet_bullet_04.png'
import Planet_2015 from '../../assets/02_About Page/About_Section 3 Milestone/Planet Bullet/Planet_bullet_03.png'
import Planet_2014 from '../../assets/02_About Page/About_Section 3 Milestone/Planet Bullet/Planet_bullet_02.png'

import MilestonesBack from '../../assets/02_About Page/About_Section 3 Milestone/Milestone_BG.png'
//import MaskImage from "../../assets/images/About/section3/mask_img.png";
//import Earth from '../../assets/images/About/section3/Earth_crop.png';
import { useInView } from "react-intersection-observer";
import { useTranslation } from 'react-i18next';

const SolarSystem = () => {
  const { t, i18n } = useTranslation();
  const [hover, setHover] = useState(false);
  const [position, setPosition] = useState(6);
  const [move, setMove] = useState(0);
  const [year, setYear] = useState(0);
  const [degree, setDegree] = useState(-5);
  const years = [2014, 2015, 2017, 2019, 2021, 2022, 2023, 2024];
  const planets = [Planet_2014, Planet_2015, Planet_2017, Planet_2019, Planet_2021, Planet_2022, Planet_2023, Planet_2024];

  const link_section = () => {

    setHover(true);
    setPosition(6);
    setDegree(-5);
    change_degree(2024);
  }

  const [ref, inView] = useInView({
    threshold: 0.6, // Trigger when 10% of the component is visible
  });

  const change_degree = (tmp, index) => {
    if (tmp === year) {
      return;
    }
    setYear(tmp);
    setDegree(degree + 20);

    const screen = window.innerWidth;
    if (tmp === 2024) {
      if(screen <= 744) {
        setMove(35);
      } else {
        setMove(49);
      }
    }
    if (tmp === 2023) {
      if(screen <= 744) {
        setMove(26);
      } else {
        setMove(42);
      }
    }
    if (tmp === 2022) {
      if(screen <= 744) {
        setMove(15);
      } else {
        setMove(35);
      }
    }
    if (tmp === 2021) {
      if(screen <= 744) {
        setMove(3);
      } else {
        setMove(28);
      }
    }
    if (tmp === 2019) {
      if(screen <= 744) {
        setMove(-8);
      } else {
        setMove(21);
      }
    }
    if (tmp === 2017) {
      if(screen <= 744) {
        setMove(-20);
      } else {
        setMove(14);
      }
    }
    if (tmp === 2015) {
      if(screen <= 744) {
        setMove(-32);
      } else {
        setMove(7);
      }
    }
    if (tmp === 2014) {
      if(screen <= 744) {
        setMove(-44);
      } else {
        setMove(7);
      }
    }
  }

  useEffect(() => {
    link_section()
  }, [inView])

  return (
    <section id="milestones">
      <div ref={ref}
        onMouseEnter={() => link_section()}
        onMouseLeave={() => setHover(false)}
        className='milestone-container'>
        <div className='milestone-mask'>
          <h1 className='milestones-title'>{t('body_about.aboutMile1h')}</h1>
          <div className='years-group' style={{ right: `${move}%` }}>
            {
              planets.map((planet, index) => {
                return (
                  <div key={years[index] || index}>
                  <div>
                    <img src={planet} className={year === years[index] ? 'palnet_select' : "palnet"}
                      onClick={() => change_degree(years[index], index)} />
                    {year === years[index] ? <div style={{ color: "white", fontSize: 32, transition: "0.7s" }}>{years[index]}</div> : ""}
                  </div>
                  </div>
                )
              })
            }
          </div>
          {year === 2024 ? <div className='milestones_subimages'>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div className='milestones-years'>
                <ul style={{ fontSize: 15, color: "white", textAlign: "left" }}>
                  <li>{t('body_about.aboutMile1p')}</li>
                  <li>{t('body_about.aboutMile2p')}</li>
                </ul>
              </div>
            </div>
            <img src={image_2024} className='milestone-2024' />
          </div> : ""}
          {year === 2023 ? <div className='milestones_subimages'>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div  className='milestones-years'>
                <ul style={{ fontSize: 15, color: "white" }}>
                  <li>{t('body_about.aboutMile3p')}</li>
                  <li>{t('body_about.aboutMile4p')}</li>
                  <li>{t('body_about.aboutMile5p')}</li>
                </ul>
              </div>
            </div>
            <div className='year_two_images'>
              <div className='milestone-2023_1' />
              <div className='milestone-2023_2' />
            </div>
          </div> : ""}
          {year === 2022 ? <div className='milestones_subimages'>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              {/* <div style={{ paddingLeft: 35 }}>
                <span style={{ fontSize: 24, color: "white", marginRight: 10 }}>2022</span>
              </div> */}
              <div  className='milestones-years'>
                <ul style={{ fontSize: 15, color: "white" }}>
                  <li>{t('body_about.aboutMile6p')}</li> 
                  <li>{t('body_about.aboutMile7p')}</li> 
                  <li>{t('body_about.aboutMile8p')}</li>
                </ul>
              </div>
            </div>
            <div className='year_two_images'>
              <div className='milestone-2022_1' />
              <div className='milestone-2022_2' />
            </div>
          </div> : ""}
          {year === 2021 ? <div className='milestones_subimages'>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              {/* <div style={{ paddingLeft: 35 }}>
                <span style={{ fontSize: 24, color: "white", marginRight: 10 }}>2021</span>
              </div> */}
              <div  className='milestones-years'>
                <ul style={{ fontSize: 15, color: "white" }}>
                  <li>{t('body_about.aboutMile9p')}</li> 
                  <li>{t('body_about.aboutMile10p')}</li> 
                  <li>{t('body_about.aboutMile11p')}</li>
                </ul>
              </div>
            </div>
            <img src={image_2021} className='milestone-2021' />
          </div> : ""}
          {year === 2019 ? <div className='milestones_subimages'>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              {/* <div style={{ paddingLeft: 35 }}>
                <span style={{ fontSize: 24, color: "white", marginRight: 10 }}>2019</span>
              </div> */}
              <div  className='milestones-years'>
                <ul style={{ fontSize: 15, color: "white" }}>
                  <li>{t('body_about.aboutMile12p')}</li>
                </ul>
              </div>
            </div>
            <img src={image_2019} className='milestone-2021' />
          </div> : ""}
          {year === 2017 ? <div className='milestones_subimages'>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              {/* <div style={{ paddingLeft: 35 }}>
                <span style={{ fontSize: 24, color: "white", marginRight: 10 }}>2017</span>
              </div> */}
              <div  className='milestones-years'>
                <ul style={{ fontSize: 15, color: "white" }}>
                  <li>{t('body_about.aboutMile13p')}</li>
                </ul>
              </div>
            </div>
            <img src={image_2017} className='milestone-2021' />
          </div> : ""}
          {year === 2015 ? <div className='milestones_subimages'>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              {/* <div style={{ paddingLeft: 35 }}>
                <span style={{ fontSize: 24, color: "white", marginRight: 10 }}>2015</span>
              </div> */}
              <div  className='milestones-years'>
                <ul style={{ fontSize: 15, color: "white" }}>
                  <li>{t('body_about.aboutMile14p')}</li>
                  <li>{t('body_about.aboutMile15p')}</li>
                </ul>
              </div>
            </div>
            <img src={image_2015} className='milestone-2021' style={{ borderRadius: "35px"}}/>
          </div> : ""}
          {year === 2014 ? <div className='milestones_subimages'>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              {/* <div style={{ paddingLeft: 35 }}>
                <span style={{ fontSize: 24, color: "white", marginRight: 10 }}>2014</span>
              </div> */}
              <div className='milestones-years'>
                <ul style={{ fontSize: 15, color: "white" }}>
                  <li>{t('body_about.aboutMile16p')}</li>
                </ul>
              </div>
            </div>
            <img src={image_2014} className='milestone-2021'/>
          </div> : ""}
          <div className="solar-system">
            <div className="sun">
              <div className='solar-earth' />
            </div>
            <div className="orbit-blue" style={{ transition: 'transform 0.7s ease', transform: `rotate(${degree * 2}deg)` }}>
              <div className="blue" />
              <div className="pink" />
              <div className="yellow" />
            </div>
            <div className="orbit-Khroma" style={{ transition: 'transform 0.7s ease', transform: `rotate(${degree * 4}deg)` }}>
              <div className="Khroma"></div>
              <div className="green"></div>
            </div>
            <div className="orbit-Imperialis" style={{ transition: 'transform 0.7s ease', transform: `rotate(${degree * 10}deg)` }}>
              <div className="Imperialis" />
              <div className="Devorah" ></div>
              <div className="Aurelia" />
            </div>
            <div className="orbit-Mylocritas" style={{ transition: 'transform 0.7s ease', transform: `rotate(${degree * 4}deg)` }}>
              <div className="Mylocritas"></div>
              <div className="Solarion"></div>
              <div className="Stellaris"></div>
            </div>
            {/* <div className="orbit" style={{ animation: "rotate 25s linear infinite", width: 2050, height: 2050 }}>
          <div className="Mylocritas"></div>
        </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  container: {
    textAlign: "center",
    position: 'relative',
    height: 1526,
    backgroundImage: `url(${MilestonesBack})`,
    backgroundSize: "100% 100%",
  },
  orbit: {
    position: 'absolute',
    border: '2px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '50%',
    width: '80%',
    height: '80%',
    top: '10%',
    left: '10%',
  },
  palnet: {
    transition: "0.7s",
    width: 32,
    height: 32
  },
  animation: {
    animation: animations.popIn
  }
};

export default SolarSystem;
