import * as React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/css/styles.css'
import '../../assets/css/animated.css'
import '../../assets/css/pages/About/jitter.css'
import { useTranslation } from 'react-i18next';

export default function Events() {
    const { t, i18n } = useTranslation();
    
  return (
    <div className='mask_back'>
      <div className='events_about' />
      <div className='about_events_detail' >
          <div style={{ textAlign: 'center' }}>
            <h1 className='abouts-title' >{t('body_about.aboutEvent1h')}<br></br>{t('body_about.aboutEvent1h2')}</h1>
            <div className='abouts-where'>
              {t('body_about.aboutEvent1p')}
            </div>
            <div>
              <div style={{ marginTop: "15%", color: 'white', fontFamily: "Roboto Regular" }}>{t('body_about.aboutEvent2p')}</div>
              <a target='_blank' href="https://t.me/airdrumming"><button className='join' >{t('body_about.aboutEvent3p')}</button></a>
            </div>
          </div>
        </div>
    </div>
  );
}
