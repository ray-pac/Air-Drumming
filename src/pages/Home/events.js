import * as React from 'react';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';

export default function Events() {
  const { t, i18n } = useTranslation();
  const [hover, setHover] = React.useState(false);

  return (
    <div className='events'>
      <div className='events-image'></div>
      <div className='community-detail-container'>
        <div className='events-detail'>
          <h1>{t('body_home.events1')}</h1>
          <div className='community-font-style'>
          {t('body_home.events1text')}
          </div>
          <Link to="/services#events" >
            <button
              className='learn_button'
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <h3 style={{ margin: "0" }}>{t('body_home.events1text2')} &rarr;</h3>
              </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
