import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FaAngleDown } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import '../../../assets/css/components/header/header.css'
import Logo from '../../../assets/Air Drumming Logo/AirDrumming_logo.svg';

const Header = () => {
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
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
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
                                <a href="#community"><MenuItem onClick={handleClose}>AIR+ Community</MenuItem></a>
                                <Divider />
                                <a href="#events"><MenuItem onClick={handleClose}>Events</MenuItem></a>
                            </Menu>
                        </li>
                        <li><Link to="/collaboration">Collaboration</Link></li>
                        <li><Link to="/community">AIR+ Community</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
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
                <Link to="/home"><MenuItem onClick={handleClose}>Home</MenuItem></Link>
                <Link to="/about"><MenuItem onClick={handleClose}>About</MenuItem></Link>
                <Link to="/services">
                    <MenuItem><li
                        style={{ display: "flex", alignItems: 'center' }}
                        id="basic-button"
                        aria-controls={subopen ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={subopen ? 'true' : undefined}
                        onClick={() => setSubOpen(true)}
                    >
                        Services <FaAngleDown />
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
                    <a href="#home"><MenuItem onClick={handleClose}>Schools</MenuItem></a>
                    <a href="#corporate"><MenuItem onClick={handleClose}>Corporate</MenuItem></a>
                    <a href="#community"><MenuItem onClick={handleClose}>Community</MenuItem></a>
                    <Divider />
                    <a href="#events"><MenuItem onClick={handleClose}>Events</MenuItem></a>
                </Menu>
                <Link to="/collaboration"><MenuItem onClick={handleClose}>Collaboration</MenuItem></Link>
                <Link to="/community"><MenuItem onClick={handleClose}>AIR+ Community</MenuItem></Link>
                <Link to="/contact"><MenuItem onClick={handleClose}>Contact Us</MenuItem></Link>
            </Menu>
        </header >
    );
};

export default Header;
