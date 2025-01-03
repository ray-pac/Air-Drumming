import * as React from 'react';
import { useEffect } from 'react';
import { animations, easings } from 'react-animation'
import { Link } from 'react-router-dom'

export default function Join() {
  const [hover, setHover] = React.useState(false)

  return (
    <section id="join">
      <div className='join-link' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <div className='play'>
          <div style={{ display: 'flex', justifyContent: "center" }} >
            <p className='join-now-community'>
              We recognize and celebrate little wins of yours, with you.
              We will feature top AIRbassadors on leaderboards and spotlight up-and-coming AIRtists to recognize
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: "center", marginTop: 10 }}>
            <div className="join-now-detail" />
          </div>
          <div style={{ marginTop: 35 }}>
            <h1 className='experience'>BE THE FIRST TO EXPERIENCE AIR</h1>
            <div style={{ display: 'flex', justifyContent: "center" }} >
              <p className="join-now-commemt">
                Join our group of AIRplorers to beta test newly launched features and have your voices heard.
                Take an active step in making the gaming experience better for fellow players!
              </p>
            </div>
          </div>
            <a target='_blank' href='https://t.me/+WgLc5iHWPPU4ODA1'><button className="join-button">Join Now</button></a>
        </div>
      </div>
    </section >
  );
}


const styles = {
  shutter: {
    width: 1140,
    height: 400,
    marginTop: "5%",
  },
  join: {
    marginTop: 15,
    width: 420,
    height: 76,
    background: "linear-gradient(to bottom, #ff8585, #c50e0e)",
    color: "white",
    fontSize: 24,
    border: "none"
  }
}