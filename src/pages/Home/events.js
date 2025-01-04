import * as React from 'react';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Events() {
  const [hover, setHover] = React.useState(false);

  return (
    <div className='events'>
      <div className='events-image'></div>
      <div className='community-detail-container'>
        <div className='events-detail'>
          <h1>EVENTS</h1>
          <div className='community-font-style'>
            Tap on our comprehensive suite of AI-powered solutions to hype up your pop-up events
            and boost crowd engagement
          </div>
          <Link to="/services#events" >
            <button
              className='learn_button'
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <h3 style={{ margin: "0" }}>Learn More &rarr;</h3>
              </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
