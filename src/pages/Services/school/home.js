import React, { useEffect, useState } from 'react'
import { animations, easings} from 'react-animation'
//import home_Schools from '../../../assets/images/services/school/school_back.png'
//import Schools from '../../../assets/images/services/school/school.png'
//import Provide from '../../../assets/03_Services Page/addon/provide.png'
//import Worked from '../../../assets/03_Services Page/addon/worked.png'
//import School_back from '../../../assets/images/services/school/school_Image.png'
import Planet_1 from '../../../assets/Planets/Planet_red.png'
import Planet_2 from '../../../assets/Planets/Planet_Green.png'
import Planet_3 from '../../../assets/Planets/Planet_yellow.png'
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';

export default function Main() {
    const { t, i18n } = useTranslation();
    const [hover, setHover] = useState(false);

    return (
        <div className='service-schools'
            onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
        >
            <div>
                <img src={Planet_1} className={hover ? 'planet_red_ani' : 'planet_red'} />
                <img src={Planet_2} className={hover ? 'planet_green_ani' : 'planet_green'} />
                <img src={Planet_3} className={hover ? 'planet_yellow_ani' : 'planet_yellow'} />
                <div className='schools-detail'>
                    <div style={styles.detail}>
                        <div>
                            <Col xs={12}>
                            <div className={hover ? 'schools-intro fadeInLeft_animation' : 'schools-intro'} >
                                <div className="schools-content">
                                    <h1>{t('body_services.servicesSchool1h')}</h1>
                                    <p>{t('body_services.servicesSchool1p')}<br></br>
                                    <br></br>{t('body_services.servicesSchool2p')}</p>
                                </div>
                            </div>
                            </Col>
                        </div>
                        <Col xs={12}>
                        <div style={{ marginTop: 20 }} className={hover ? 'schools-provide provide_animation' : 'schools-provide'} >
                            <div className="schools-content">
                                <h1>{t('body_services.servicesSchool2h')}</h1>
                                <p style={{ margin: 0, paddingLeft: "10px" }}>• {t('body_services.servicesSchool3p')}</p>
                                <p style={{ margin: 0, paddingLeft: "10px" }}>• {t('body_services.servicesSchool4p')}</p>
                                <p style={{ margin: 0, paddingLeft: "10px" }}>• {t('body_services.servicesSchool5p')}</p>
                                <p style={{ margin: 0, paddingLeft: "10px" }}>• {t('body_services.servicesSchool6p')}</p>
                            </div>
                        </div>
                        </Col>
                        <Col xs={12}>
                        <div style={{ marginTop: 20 }} className={hover ? 'schools-worked worked_animation' : 'schools-worked'} >
                            <div className="schools-content">
                                <h1>{t('body_services.servicesSchool3h')}</h1>
                                <p>{t('body_services.servicesSchool7p')}</p>
                            </div>
                        </div>
                        </Col>
                    </div>
                    <div style={styles.image}>
                        <div className={hover ? 'schools-image fadeInRight_animation' : 'schools-image'} />
                    </div>
                </div>
            </div>
        </div>
    );
}


const styles = {
    detail: {
        overflow: "hidden"
    }
}