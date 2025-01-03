import * as React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Community() {

  const [hover, setHover] = React.useState(false);

  return (
    <div className='community'>
      <div className='community-image'></div>
      <div className='community-detail-container'>
        <div className='community-detail'>
          <h1>AIR COMMUNITY</h1>
          <div className='community-font-style'>
            We make rhythm learning accessible for people from all walks of life, especially the
            underserved communities, with our multi-functional
            AI-powered Air Drumming application.
          </div>
          <Link to="/services#community" >
            <button className='learn_button'
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <h3 style={{ margin: "0"}}>Learn More 🡢</h3>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
