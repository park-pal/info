import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';

import "./FooterStyles.css"
import logo from "../assets/images/Logo.png"

export default function Footer() {
    return(
        <footer className='footer-container'>
            <div className="footer-row-container">
                <div className="footer-left-container">
                    <img src={logo} alt="Logo" className='footer-logo' />
                </div>
                <div className='footer-middle-container'>
                    <a href="https://www.instagram.com" className="footer-link" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="footer-link-logo" icon={faInstagram} />
                        <span>Instagram</span>
                    </a>
                    <a href="https://www.facebook.com" className="footer-link" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="footer-link-logo" icon={faFacebookF} />
                        <span>Facebook</span>
                    </a>
                    <a href="https://www.twitter.com" className="footer-link" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="footer-link-logo" icon={faTwitter} />
                        <span>Twitter</span>
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