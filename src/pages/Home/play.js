import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Planet_violet from '../../assets/Planets/Planet_violet.png';
import Planet_Green from '../../assets/Planets/Planet_Green.png';
import Planet_yellow from '../../assets/Planets/Planet_yellow.png';
import '../../assets/css/styles.css';
import '../../assets/css/animated.css';

// Custom hook to detect screen size
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = (event) => setMatches(event.matches);

    mediaQueryList.addEventListener('change', listener);
    setMatches(mediaQueryList.matches);  // Initialize on mount

    return () => mediaQueryList.removeEventListener('change', listener);
  }, [query]);

  return matches;
};

export default function Play() {
  const [hover, setHover] = React.useState(false);
  const device = useSelector((status) => status.status.mobile);
  
  // Detect screen size for reordering (for screens <= 771px)
  const isMobile = useMediaQuery('(max-width: 771px)');
  
  const link_section = () => {
    setHover(true);
  };

  return (
    <section id='play'>
      <div className='bento'
        onMouseEnter={() => link_section()}
        onMouseLeave={() => setHover(false)}
      >
        <img src={Planet_violet} className={hover ? 'bento_violet_animation' : "bento_violet"} />
        <img src={Planet_Green} className={hover ? 'bento_green_animation' : 'bento_green'} />
        <img src={Planet_yellow} className={hover ? 'bento_yellow_animation' : 'bento_yellow'} />

        <Container style={{ width: "1200px" }}>
          <div style={{ overflow: "hidden", textAlign: "center" }}>
            <div style={{ textAlign: "center" }}>
              <Row>
                    <Col xs={4}>
                      <button className={hover ? `drumming drumming_animation ` : "drumming"} >
                        <div className="drumming-image"></div>
                      </button>
                    </Col>
                    <Col>
                      <button className={hover ? 'citing citing_animation' : "citing"} >
                        <div className="citing-content">
                          <div className="citing-text">
                            <h1>AIRCITING FEATURES</h1>
                            <p>
                              Explore yourcelestial adventure!
                            </p>
                          </div>
                          <div className="citing-image"></div>
                        </div>
                      </button>
                  </Col>
              </Row>
            </div>
            <div style={{ textAlign: "center" }}>
              <Row>
                {/* Reorder buttons conditionally based on screen size */}
                  {!isMobile ? (
                  <>
                <Col>
                  <button className={hover ? 'star star_animation' : "star"} >
                    <div className="star-content">
                      <div className="star-text">
                        <h1>STAR TRACKS</h1>
                        <p>
                          Drum N' Roll to your all-time favorite songs!
                        </p>
                      </div>
                      <div className="star-image"></div>
                    </div>
                  </button>
                </Col>
                <Col xs={4}>
                  <button className={hover ? 'feel feel_animation' : "feel"} >
                    <div className="feel-text">
                      <h1>FEEL D'<br />COSMIC<br />BEAT</h1>
                    </div>
                  </button>
                </Col>
                </>
                ) : (
                  <>
                <Col xs={4}>
                  <button className={hover ? 'feel feel_animation' : "feel"} >
                    <div className="feel-text">
                      <h1>FEEL D'<br />COSMIC BEAT</h1>
                    </div>
                  </button>
                </Col>
                <Col>
                  <button className={hover ? 'star star_animation' : "star"} >
                    <div className="star-content">
                      <div className="star-text">
                        <h1>STAR TRACKS</h1>
                        <p>
                          Drum N' Roll to your all-time favorite songs!
                        </p>
                      </div>
                      <div className="star-image"></div>
                    </div>
                  </button>
                </Col>
                </>
                )}
              </Row>
            </div>
            <div style={{ textAlign: "center" }}>
              <Row>
                {/* Reorder buttons conditionally based on screen size */}
                {!isMobile ? (
                  <>
                <Col xs={4}>
                  <a href="/Air-Drumming/about">
                    <button className={hover ? 'learn learn_animation' : "learn"} >
                      <div className="learn-text">
                        <h1>Learn More &rarr;</h1>
                      </div>
                    </button>
                  </a>
                </Col>
                <Col>
                  <button className={hover ? 'drumplay drumplay_animation' : "drumplay"} >
                    <div className="drumplay-content">
                      <div className="drumplay-text">
                        <h1>DRUMPLAY</h1>
                        <p>
                          Electrify the universe <br />with your best score!
                        </p>
                      </div>
                      <div className="drumplay-image"></div>
                    </div>
                  </button>
                </Col>
                </>
                ) : (
                  <>
                <Col>
                  <button className={hover ? 'drumplay drumplay_animation' : "drumplay"} >
                    <div className="drumplay-content">
                      <div className="drumplay-text">
                        <h1>DRUMPLAY</h1>
                        <p>
                          Electrify the universe with your best score!
                        </p>
                      </div>
                      <div className="drumplay-image"></div>
                    </div>
                  </button>
                </Col>
                <Col xs={4}>
                  <a href="/about">
                    <button className={hover ? 'learn learn_animation' : "learn"} >
                      <div className="learn-text">
                        <h1>Learn More &rarr;</h1>
                      </div>
                    </button>
                  </a>
                </Col>
                </>
                )}
              </Row>
            </div>
          </div>
        </Container>
      </div>
    </section >
  );
}
