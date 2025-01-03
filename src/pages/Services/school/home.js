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

export default function Main() {
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
                                    <h1>SCHOOLS</h1>
                                    <p>Air Drumming provides students with an innovative rhythm learning experience powered by proprietary Al application, 
                                    integrated with high-tech music gadgets. Catered to students with varying levels of music proficiency, we leverage on smart in-app 
                                    features to equip students with drumming fundamentals in an interactive and engaging manner. Students can also join the 
                                    Air+ community to access unlimited drumming tutorials and practice with some of the trendiest pop songs in the app.<br></br>
                                    <br></br>With 10+ years of conducting enrichment programmes for 80+ MOE- registered and private schools, ranging from pre-schools to tertiary 
                                    institutions, we are a team of trailblazers who redefines creative education and music learning for the next generation.</p>
                                </div>
                            </div>
                            </Col>
                        </div>
                        <Col xs={12}>
                        <div style={{ marginTop: 20 }} className={hover ? 'schools-provide provide_animation' : 'schools-provide'} >
                            <div className="schools-content">
                                <h1>WE PROVIDE</h1>
                                <p style={{ margin: 0, paddingLeft: "10px" }}>• Assembly Program (Talk, Performance, Student Engagement)</p>
                                <p style={{ margin: 0, paddingLeft: "10px" }}>• Short-term Taster Workshops</p>
                                <p style={{ margin: 0, paddingLeft: "10px" }}>• Long-term Enrichment Program</p>
                                <p style={{ margin: 0, paddingLeft: "10px" }}>• Learning Journey (Offsite Immersion)</p>
                            </div>
                        </div>
                        </Col>
                        <Col xs={12}>
                        <div style={{ marginTop: 20 }} className={hover ? 'schools-worked worked_animation' : 'schools-worked'} >
                            <div className="schools-content">
                                <h1>SCHOOLS WE HAVE WORKED WITH</h1>
                                <p>Westwood Primary School, Westwood Secondary School, Holy Innocent's High School, Furen International School, 
                                    National University of Singapore, Singapore Management University, Maple Bear</p>
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