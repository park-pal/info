import React from 'react';

import './HomeStyles.css';
import ImageWithOverlay from './ImageWithOverlay';
import img1 from "../assets/images/contactus.jpg"
import img2 from "../assets/images/driveway1.jpg"
import img3 from "../assets/images/money2.png"


const Home = () => {

    return (
        <div>
            <div className='home-title-container'>
                <text className="home-title">
                    Get started with Park Pal in 3 simple steps!
                </text>
            </div>
            <ImageWithOverlay 
                path={img1} 
                text="Drop us an email or text with your availability to schedule a visit from a representative." 
                badgeText="Step 1"
                />

            <ImageWithOverlay 
                path={img2} 
                text="Meet with our representative to finalise your offer and sign the paperwork." 
                badgeText="Step 2"
            />
            <ImageWithOverlay 
                path={img3} 
                text="Sit back, relax, and watch the money roll in!" 
                badgeText="Step 3"
            />
        </div>
    );
    };

export default Home;