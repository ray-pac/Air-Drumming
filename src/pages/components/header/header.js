import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FaAngleDown } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import '../../../assets/css/components/header/header.css'
import Logo from '../../../assets/Air Drumming Logo/AirDrumming_logo.svg';
import Audio from '../../../assets/Audio/6303082381980996619.mp3';
import { useTranslation } from 'react-i18next';

    const Header = () => {
    const { t, i18n } = useTranslation();
    const audioRef = useRef(null);
    const [audioStarted, setAudioStarted] = useState(false);
    const [mainOpen, setMainopen] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const [subopen, setSubOpen] = useState(null);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showHeader, setShowHeader] = useState(true);

    const navigate = useNavigate();

    const open = Boolean(anchorEl);
    const mini_open = Boolean(mainOpen);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMiniClick = (event) => {
        setMainopen(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setMainopen(null);
    };

    const moveSection = () => {
        navigate("/services");
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
        const audio = audioRef.current;
        audio.loop = true;
        audio.muted = true;
    
        // Fade-in effect for audio
        const fadeInAudio = () => {
          audio.volume = 0;
          let fadeInInterval = setInterval(() => {
            if (audio.volume < 1) {
              audio.volume = Math.min(audio.volume + 0.05, 1); 
            } else {
              clearInterval(fadeInInterval); 
            }
          }, 100);
        };
 
        const playAudioOnInteraction = () => {
          const audio = audioRef.current;

          if (!audio.muted && !audio.paused) {
            return; 
          }

          if (audio.muted) {
            audio.muted = false; 
            audio.play().then(() => {
              fadeInAudio(); 
              setAudioStarted(true); 
            }).catch((error) => {
              console.error("Audio play failed:", error);
            });
          }
        };

        window.addEventListener('click', playAudioOnInteraction);
        return () => {
            window.removeEventListener('click', playAudioOnInteraction);
        };
      }, [audioStarted]);

    return (
        <header className={`main-header ${showHeader ? 'visible' : 'hidden'}`}>
            <div style={{width: "63%", display: "flex", justifyContent: 'space-between'}}>
                <div className="header-logo">
                    <Link to="/">
                        <img src={Logo} alt="App Logo" className='header-logo-img' />
                    </Link>
                </div>
                <nav className="navbar">
                    <ul>
                        <li><Link to="/">{t('header.home')}</Link></li>
                        <li><Link to="/about">{t('header.about')}</Link></li>
                        <li>
                            <Link to="/services" >
                                <span
                                    style={{ display: "flex", alignItems: 'center' }}
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                    onDoubleClick={() => moveSection()}
                                >
                                    {t('header.services')} <FaAngleDown />
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
                                <a href="#home"><MenuItem onClick={handleClose}>{t('header.services_schools')}</MenuItem></a>
                                <a href="#corporate"><MenuItem onClick={handleClose}>{t('header.services_corporate')}</MenuItem></a>
                                <a href="#community"><MenuItem onClick={handleClose}>{t('header.services_community')}</MenuItem></a>
                                <Divider />
                                <a href="#events"><MenuItem onClick={handleClose}>{t('header.services_events')}</MenuItem></a>
                            </Menu>
                        </li>
                        <li><Link to="/collaboration">{t('header.collaboration')}</Link></li>
                        <li><Link to="/community">{t('header.community')}</Link></li>
                        <li><Link to="/contact">{t('header.contact')}</Link></li>
                    </ul>
                </nav>
            </div>
            <span
                className="basic-menu"
                id="basic-button"
                aria-controls={mainOpen ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={mainOpen ? 'true' : undefined}
                onClick={handleMiniClick}
            >
                <MenuSharpIcon />
            </span>
            <Menu
                id="basic-menu"
                anchorEl={mainOpen}
                open={mini_open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <Link to="/home"><MenuItem onClick={handleClose}>{t('header.home')}</MenuItem></Link>
                <Link to="/about"><MenuItem onClick={handleClose}>{t('header.about')}</MenuItem></Link>
                <Link to="/services">
                    <MenuItem><li
                        style={{ display: "flex", alignItems: 'center' }}
                        id="basic-button"
                        aria-controls={subopen ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={subopen ? 'true' : undefined}
                        onClick={() => setSubOpen(true)}
                    >
                        {t('header.services')} <FaAngleDown />
                    </li>
                    </MenuItem>
                </Link>
                <Menu
                    id="basic-menu"
                    className='sub-menu'
                    anchorEl={mainOpen}
                    open={subopen}
                    onClose={() => setSubOpen(false)}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <a href="#home"><MenuItem onClick={handleClose}>{t('header.services_schools')}</MenuItem></a>
                    <a href="#corporate"><MenuItem onClick={handleClose}>{t('header.services_corporate')}</MenuItem></a>
                    <a href="#community"><MenuItem onClick={handleClose}>{t('header.services_community')}</MenuItem></a>
                    <Divider />
                    <a href="#events"><MenuItem onClick={handleClose}>{t('header.services_events')}</MenuItem></a>
                </Menu>
                <Link to="/collaboration"><MenuItem onClick={handleClose}>{t('header.collaboration')}</MenuItem></Link>
                <Link to="/community"><MenuItem onClick={handleClose}>{t('header.community')}</MenuItem></Link>
                <Link to="/contact"><MenuItem onClick={handleClose}>{t('header.contact')}</MenuItem></Link>
            </Menu>
            <audio ref={audioRef} src={Audio} loop />
        </header >
    );
};

export default Header;
