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

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showHeader, setShowHeader] = useState(true);
    const open = Boolean(anchorEl);

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

    return (
        <footer className="footer-main">
            <nav className="footer-navbar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
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
                                Services <FaAngleDown />
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
                            <a href="#home"><MenuItem onClick={handleClose}>Schools</MenuItem></a>
                            <a href="#corporate"><MenuItem onClick={handleClose}>Corporate</MenuItem></a>
                            <a href="#community"><MenuItem onClick={handleClose}>Community</MenuItem></a>
                            <Divider />
                            <a href="#events"><MenuItem onClick={handleClose}>Events</MenuItem></a>
                        </Menu>
                    </li>

                    <li><Link to="/collaboration">Collaboration</Link></li>
                    <li><Link to="/community">AIR+ Community</Link></li>
                    
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/privacy">Privacy Policy</Link></li>
                </ul>
            </nav>
            <div className='footer-link-menu'>
                <select className='footer-language'>
                    <option value="">English</option>
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
                Copyright © 2024 Air Drumming ® All rights reserved.
            </div>
        </footer>
    );
};

export default Header;
