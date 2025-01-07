import React, { useEffect, useState } from 'react'
import { useInView } from "react-intersection-observer";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Planet_blue from '../../assets/Planets/Planet_blue.png'
import Planet_green from '../../assets/Planets/Planet_Green.png'
import Planet_red from '../../assets/Planets/Planet_red.png'
//import PhoneBack from '../../assets/images/About/section_1/GraphicBox.png' 
// import PhoneBody from '../../assets/images/About/section_1/3D_phone_01 1.png' 
import PhoneBody from '../../assets/02_About Page/About_Section  1/Phone_burstup_base.png'
import PhoneScreen_1 from '../../assets/02_About Page/About_Section  1/Phone_burstup_top.png'
import PhoneScreen_2 from '../../assets/02_About Page/About_Section  1/Phone_burstup_mid.png'
import '../../assets/css/styles.css'
import '../../assets/css/animated.css'
import { useTranslation } from 'react-i18next';

export default function Main() {
    const { t, i18n } = useTranslation();
    const [mouseY, setMouseY] = useState(0);
    const [start, setStart] = useState(false);
    const [hover, setHover] = useState(false);

    const [ref, inView] = useInView({
        threshold: 0.6, // Trigger when 10% of the component is visible
    });

    useEffect(() => {
        setHover(true);
    }, [])

    return (
        <div ref={ref} className="about-main" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <div className='about-content'>
                <div className='whats-about'>
                <h1 className={(hover || inView) ? "whats-title fadeInLeft_animation" : "whats-title"}>
                    {t('body_about.about1h')}<br></br>{t('body_about.about1h2')}</h1>
                    <div className={(hover || inView) ? "whats-content fadeInLeft_animation" : 'whats-content'}>
                        <div className="whats-detail" style={{lineHeight: "1.1"}}>
                            {t('body_about.about1p1')}
                        </div>
                        <div className="whats-detail" style={{ marginTop: 20, lineHeight: "1.1" }}>
                            {t('body_about.about1p2')}
                        </div>
                        <div className="whats-detail" style={{ marginTop: 20, lineHeight: "1.1" }}> 
                            {t('body_about.about1p3')}
                        </div>
                        <div className="whats-detail" style={{ marginTop: 20, lineHeight: "1.1" }}>
                            {t('body_about.about1p4')}
                        </div>
                        <div className="whats-detail" style={{ marginTop: 20, lineHeight: "1.1" }}>
                            {t('body_about.about1p5')}
                        </div>
                    </div>
                </div>
                <div>
                    <img src={Planet_blue} className={(hover || inView) ? 'whats-planet-blue-animation' : 'whats-planet-blue'} />
                    <img src={Planet_green} className={(hover || inView) ? 'whats-planet-green-animation' : 'whats-planet-green'} />
                    <img src={Planet_red} className={(hover || inView) ? 'whats-planet-red-animation' : 'whats-planet-red'} />
                    <div className='whats-phone'>
                        <img src={PhoneBody} className='whats-phone-body' />
                        <img src={PhoneScreen_2} className={(hover || inView) ? 'phone-screen-2-animation' : 'phone-screen-2'} />
                        <img src={PhoneScreen_1} className={(hover || inView) ? 'phone-screen-1-animation' : 'phone-screen-1'} />
                    </div>
                </div>
            </div>
        </div>
    );
}