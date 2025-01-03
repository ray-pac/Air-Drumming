import * as React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/css/styles.css'
import '../../assets/css/animated.css'
import '../../assets/css/pages/About/jitter.css'

export default function Events() {
  return (
    <div className='mask_back'>
      <div className='events_about' />
      <div className='about_events_detail' >
          <div style={{ textAlign: 'center' }}>
            <h1 className='abouts-title' >ABOUT OUR<br></br>AIR+ COMMUNITY?</h1>
            <div className='abouts-where'>
              The Air+ Community is where users from all walks of life connect - our
              players, creators, merchants and partners.
            </div>
            <div>
              <div style={{ marginTop: "15%", color: 'white', fontFamily: "Roboto Regular" }}>Embark on your rhythmic journey today!</div>
              <a target='_blank' href="https://t.me/airdrumming"><button className='join' >Join Us! </button></a>
            </div>
          </div>
        </div>
    </div>
  );
}
