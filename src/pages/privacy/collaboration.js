import * as React from 'react';
import { animations, easings } from 'react-animation'
import '../../assets/css/pages/privacy/style.css'
import { useTranslation } from 'react-i18next';

export default function Collaboratopn() {
    const { t, i18n } = useTranslation();

  return (
    <div className='privacy-container'>
      <div className='privacy-main' style={{paddingTop: "30px"}}>
        <h2>{t('body_privacy.privacy01')}</h2>
        <div>
          {t('body_privacy.privacy02')}
        </div>

        <h2 style={{marginTop: 40}}>{t('body_privacy.privacy03')}</h2>
        <div>
          {t('body_privacy.privacy04')}

          <ul>
            <li>{t('body_privacy.privacy05')}</li>
            <li>{t('body_privacy.privacy06')}</li>
            <li>{t('body_privacy.privacy07')}</li>
            <li>{t('body_privacy.privacy08')}</li>
          </ul>

          {t('body_privacy.privacy09')}

          <ul>
            <li>{t('body_privacy.privacy010')}</li>
            <li>{t('body_privacy.privacy011')}</li>
            <li>{t('body_privacy.privacy012')}</li>
          </ul>
          <div style={{ marginTop: 50 }}>
            {t('body_privacy.privacy013')}
          </div>
          <div style={{ marginTop: 20 }}>
          {t('body_privacy.privacy014')}
          </div>
        </div>

        <h2 style={{marginTop: 40}}>{t('body_privacy.privacy015')}</h2>
        <div>
        {t('body_privacy.privacy016')}
        {t('body_privacy.privacy017')}
          <ul>
            <li>{t('body_privacy.privacy018')}</li>
            <li>{t('body_privacy.privacy019')} </li>
            <li>{t('body_privacy.privacy047')}</li>
          </ul>
            {t('body_privacy.privacy020')}
          <ul>
            <li>{t('body_privacy.privacy021')}</li>
            <li>{t('body_privacy.privacy022')}</li>
            <li>{t('body_privacy.privacy023')}</li>
          </ul>
        </div>

        <h2 style={{marginTop: 40}}>{t('body_privacy.privacy024')}</h2>
        <div>
        {t('body_privacy.privacy025')}
          <ul>
            <li>{t('body_privacy.privacy026')}</li>
            <li>{t('body_privacy.privacy027')}</li>
            <li>{t('body_privacy.privacy028')}</li>
          </ul>
        </div>

        <h2 style={{marginTop: 40}}>{t('body_privacy.privacy029')}</h2>
        <div>
        {t('body_privacy.privacy030')}
        </div>

        <h2 style={{marginTop: 40}}>{t('body_privacy.privacy031')}</h2>
        <div>
        {t('body_privacy.privacy032')}
        </div>

        <h2 style={{marginTop: 40}}>{t('body_privacy.privacy033')}</h2>
        <div>
          {t('body_privacy.privacy034')}
        </div>

        <h2 style={{marginTop: 40}}>{t('body_privacy.privacy035')}</h2>
        <div>
          <div>
          {t('body_privacy.privacy036')}
          </div>
          <div style={{marginTop: 20}}>
          {t('body_privacy.privacy037')}
          {t('body_privacy.privacy038')}
          </div>
        </div>

        <h2 style={{marginTop: 40}}>{t('body_privacy.privacy039')}</h2>
        <div>
        {t('body_privacy.privacy040')}
        </div>

        <h2 style={{marginTop: 40}}>{t('body_privacy.privacy041')}</h2>
        <div>
        {t('body_privacy.privacy042')}

        {t('body_privacy.privacy043')}
        </div>

        <h2 style={{marginTop: 40}}>{t('body_privacy.privacy048')}</h2>
        <div>
        {t('body_privacy.privacy044')}
        </div>

        <h2 style={{marginTop: 40}}>{t('body_privacy.privacy045')}</h2>
        <div>
        {t('body_privacy.privacy046')}
        </div>
      </div>
    </div>
  );
}
