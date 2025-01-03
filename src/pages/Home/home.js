import React, { useEffect, useState, useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Play from './play'
import Asteroid from '../../assets/01_Home Page/Home_Section 1/AD_Comet_Asteroid.png'
import Aurelia from '../../assets/01_Home Page/Home_Section 1/AD_Aurelia.png'
import AD_Mylocritas from '../../assets/01_Home Page/Home_Section 1/AD_Mylocritas.png'
import AD_Devorah from '../../assets/01_Home Page/Home_Section 1/AD_Devorah.png'
import AD_Earth from '../../assets/01_Home Page/Home_Section 1/AD_Earth.png'
import '../../assets/css/styles.css'
import '../../assets/css/animated.css'

export default function Main() {
    const device = useSelector((status) => status.status.mobile);
    const [scrollY, setScrollY] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    useEffect(() => {
            const handleScroll = () => {
                setScrollY(window.scrollY);
              };

              window.addEventListener("scroll", handleScroll);

            const handleMouseMove = (event) => {
                const windowHeight = window.innerHeight;
                const centerY = windowHeight / 2;
                // Calculate how far the mouse is from the center, normalized between -1 and 1
                const normalizedY = (event.clientY - centerY) / centerY;
                setMouseY(normalizedY * 3); // Set the normalized Y position
            };

            window.addEventListener('mousemove', handleMouseMove);
            return () => {
                window.removeEventListener("scroll", handleScroll);
                window.removeEventListener('mousemove', handleMouseMove);
            }
    }, []);

    return (
        <section id='main'>
            <div className='home'>
                {/* Apply calculated transforms based on mouseY */}
                <div
                    className="mylocritas"
                    style={{ transform: `translateY(${(mouseY * 150) + (scrollY * 1.5) }px)`, transition: "0.3s" }} // Adjust multiplier for desired effect
                >
                    <img src={AD_Mylocritas} alt="Mylocritas" />
                </div>

                <div
                    className="devorah"
                    style={{ transform: `translateY(${(mouseY * 85) + (scrollY * 0.8)}px)`, transition: "0.3s" }}
                >
                    <img src={AD_Devorah} alt="Devorah" />
                </div>

                <div
                    className="earth"
                    style={{ transform: `translateY(${(mouseY * 20) + (scrollY * 0.3)}px)`, transition: "0.3s" }}
                >
                    <img src={AD_Earth} alt="Earth" />
                </div>

                <div className="logo">
                    <div style={{ placeItems: 'center', textAlign: "center", width: '100%' }}>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <div className='home_logo' />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
                            <div className="text-info">
                                Air Drumming is a rhythmic exploration, a lifestyle statement, and a social movement,
                                that integrates users seamlessly across the mobile application, the physical
                                experience, and their connection with the larger communities.
                            </div>
                        </div>
                        <div style={{ marginTop: 30 }}>
                            <button className='googlyPlay'></button>
                            <button className='appStore'></button>
                        </div>
                    </div>
                </div>

                <div
                    className="aurelia"
                    style={{ transform: `translateY(${(mouseY * 80) + (scrollY * 0.6)}px)`, transition: "0.3s" }}
                >
                    <img src={Aurelia} alt="Aurelia" />
                </div>

                <div
                    className="asteroid"
                    style={{ transform: `translateY(${(mouseY * 7) + (scrollY * 0.3)}px)`, transition: "0.3s" }}
                >
                    <img src={Asteroid} alt="Asteroid" />
                </div>
            </div>
        </section>
    );
}
