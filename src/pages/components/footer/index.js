import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FaAngleDown } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import '../../../assets/css/components/footer/footer.css'
import Logo from '../../../assets/Air Drumming Logo/AirDrumming_Logo-03.png';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t, i18n } = useTranslation();
    const [anchorEl, setAnchorEl] = useState(null);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showHeader, setShowHeader] = useState(true);
    const open = Boolean(anchorEl);

    const changeLanguage = (e) => {
        const selectedLanguage = e.target.value; 
        i18n.changeLanguage(selectedLanguage); 
        localStorage.setItem('selectedLanguage', selectedLanguage); 
      };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
            // Scrolling down
            setShowHeader(false);
        } else {
            // Scrolling up
            setShowHeader(true);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    useEffect(() => {
        const savedLanguage = localStorage.getItem('selectedLanguage'); // Retrieve from localStorage
        if (savedLanguage) {
          i18n.changeLanguage(savedLanguage); // Set i18next to the saved language
        }
      }, [i18n]);

    return (
        <footer className="footer-main">
            <nav className="footer-navbar">
                <ul>
                    <li><Link to="/">{t('footer.home')}</Link></li>
                    <li><Link to="/about">{t('footer.about')}</Link></li>
                    <li>
                        <Link to="/services">
                            <span
                                style={{ display: "flex", alignItems: 'center' }}
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                {t('footer.services')} <FaAngleDown />
                            </span>
                        </Link>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <a href="#home"><MenuItem onClick={handleClose}>{t('footer.services_schools')}</MenuItem></a>
                            <a href="#corporate"><MenuItem onClick={handleClose}>{t('footer.services_corporate')}</MenuItem></a>
                            <a href="#community"><MenuItem onClick={handleClose}>{t('footer.services_community')}</MenuItem></a>
                            <Divider />
                            <a href="#events"><MenuItem onClick={handleClose}>{t('footer.services_events')}</MenuItem></a>
                        </Menu>
                    </li>

                    <li><Link to="/collaboration">{t('footer.collaboration')}</Link></li>
                    <li><Link to="/community">{t('footer.community')}</Link></li>
                    
                    <li><Link to="/contact">{t('footer.contact')}</Link></li>
                    <li><Link to="/privacy">{t('footer.privacy')}</Link></li>
                </ul>
            </nav>
            <div className='footer-link-menu'>
                <select
                    className="footer-language"
                    value={i18n.language} // Set the current language as the selected value
                    onChange={changeLanguage} // Handle language change
                    >
                    <option value="en">English</option>
                    <option value="zh">中文</option>
                </select>
                <div className='store-button'>
                    <button className='footer-google' />
                    <button className='footer-appstore' />
                </div>
                <div className='outside-button'>
                    <a target='_blank' href='https://t.me/airdrumming'><button className='footer-vector-p' /></a>
                    <a target='_blank' href='https://www.instagram.com/airdrumming/'><button className='footer-vector-c' /></a>
                </div>
            </div>
            <div className='copyright'>
            {t('footer.copyright')}
            </div>
        </footer>
    );
};

export default Header;
