import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';

import "./FooterStyles.css"
import logo from "../assets/images/LogoWhite.png"

export default function Footer() {
    return(
        <footer className='footer-container'>
            <div className="footer-row-container">
                <div className="footer-left-container">
                    <img src={logo} alt="Logo" className='footer-logo' />
                </div>
                <div className='footer-middle-container'>
                    <a href="https://www.instagram.com/park_pal_ltd/" className="footer-link" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="footer-link-logo" icon={faInstagram} />
                        <span>Park_Pal_Ltd</span>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100093468251163" className="footer-link" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="footer-link-logo" icon={faFacebookF} />
                        <span>Park Pal</span>
                    </a>
                    <a href="https://twitter.com/Park_Pal1" className="footer-link" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="footer-link-logo" icon={faTwitter} />
                        <span>@Park_Pal1</span>
                    </a>

                </div>
            </div>
            <div className='footer-bottom-container'>
                <p>
                    Park Pal Ltd Registered in England and Wales No. 14867222 
                    56 Cameron Square, Mitcham, England, CR4 3SH, UK
                </p>
            </div>
        </footer>
    )
}