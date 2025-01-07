import React, { useEffect, useState } from 'react'
import { useInView } from "react-intersection-observer";
import Planet_violet from '../../assets/Planets/Planet_violet.png'
import Planet_Green from '../../assets/Planets/Planet_Green.png'
import Planet_yellow from '../../assets/Planets/Planet_yellow.png'
import Planet_red from '../../assets/Planets/Planet_red.png'
import Planet_blue from '../../assets/Planets/Planet_blue.png'
import {Link} from 'react-router-dom'
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';

export default function Main() {
    const { t, i18n } = useTranslation();
    const [ref, inView] = useInView({
        threshold: 0.6, // Trigger when 10% of the component is visible
    });

    return (
        <div className="sign-link" ref={ref}>
            <img src={Planet_violet} className='air_violet' />
            <img src={Planet_Green} className='air_green' />
            <img src={Planet_yellow} className='air_yellow' />
            <img src={Planet_red} className='air_red' />
            <img src={Planet_blue} className='air_blue' />
            <div className='sign-link-main'>

            <h1 className='sign-title'>{t('body_community.community1')}</h1>
            <div style={{ display: 'flex', justifyContent: "center", marginBottom: 15 }} >
                    <p className='welcome-air-community'>{t('body_community.community2')}</p>
                </div>
                
                <div className="community-images" style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className='community_artist' >
                        <div className="community-content">
                            <h1>{t('body_community.community3')}</h1>
                        </div>
                    </div>
                    <div className='community_bassador' >
                        <div className="community-content">
                            <h1>{t('body_community.community4')}</h1>
                        </div>
                    </div>
                    <div className='community_partner' >
                        <div className="community-content">
                            <h1>{t('body_community.community5')}</h1>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: "center", marginTop: 20 }} >
                    <p className='welcome-air-comment'>
                    {t('body_community.community6')}
                    </p>
                </div>
                <Link to='/contact'><button className='signup-button' >{t('body_community.community7')}</button></Link>
            </div>
        </div>
    );
}
