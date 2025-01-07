import * as React from 'react';
import { useEffect } from 'react';
import { animations, easings } from 'react-animation'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

export default function Join() {
      const { t, i18n } = useTranslation();
  const [hover, setHover] = React.useState(false)

  return (
    <section id="join">
      <div className='join-link' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <div className='play'>
          <div style={{ display: 'flex', justifyContent: "center" }} >
            <p className='join-now-community'>
                {t('body_community.community8')}
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: "center", marginTop: 10 }}>
            <div className="join-now-detail" />
          </div>
          <div style={{ marginTop: 35 }}>
            <h1 className='experience'>{t('body_community.community9')}</h1>
            <div style={{ display: 'flex', justifyContent: "center" }} >
              <p className="join-now-commemt">
              {t('body_community.community10')}
              </p>
            </div>
          </div>
            <a target='_blank' href='https://t.me/+WgLc5iHWPPU4ODA1'><button className="join-button">{t('body_community.community11')}</button></a>
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