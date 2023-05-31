import React, { useState, useEffect} from 'react';

import logo from "../assets/images/Logo.png"
import "./HeaderStyles.css"

const Header = ({ page, setPage }) => {

    const [activePage, setActivePage] = useState('');

    useEffect(() => {
      const activePageKey = Object.keys(page).find((key) => page[key]);
      setActivePage(activePageKey);
    }, [page]);


    const handleClick = (btnName) => {
        if (btnName === 'home'){
            setPage({
                home: true,
                about: false,
                terms: false,
                contact: false,
            })
        }
        if (btnName === 'about'){
            setPage({
                home: false,
                about: true,
                terms: false,
                contact: false,
            })
        }
        if (btnName === 'terms'){
            setPage({
                home: false,
                about: false,
                terms: true,
                contact: false,
            })
        }
        if (btnName === 'contact'){
            setPage({
                home: false,
                about: false,
                terms: false,
                contact: true,
            })
        }
    }


    return (
        <header className='header-container'>
            <div className='header-left-container'>
                <img src={logo} alt="Logo" className='header-logo' />
            </div>
            <div className='header-middle-container'>
                <button className={activePage === 'home'? 'header-active-tab-button':'header-tab-button'} onClick={() => handleClick('home')}>Home</button>
                <button className={activePage === 'about'? 'header-active-tab-button':'header-tab-button'} onClick={() => handleClick('about')}>About</button>
                <button className={activePage === 'terms'? 'header-active-tab-button':'header-tab-button'} onClick={() => handleClick('terms')}>Terms</button>
            </div>
            <div className='header-right-container'>
                <button className={activePage === 'contact'? 'header-active-tab-button':'header-tab-button'} onClick={() => handleClick('contact')}>Contact</button>
            </div>
        </header>
    );
    };

export default Header;