import React, { useEffect } from 'react';


import "./ImageWithOverlayStyles.css"

const ImageWithOverlay = ({ path, text, badgeText }) => {

    useEffect(() => {
        const updateWidth = () => {
          const screenWidth = window.innerWidth;
          document.documentElement.style.setProperty('--image-width', `${screenWidth}px`);
        };
    
        updateWidth();
        window.addEventListener('resize', updateWidth);
    
        return () => {
          window.removeEventListener('resize', updateWidth);
        };
      }, []);

    return (
        <div>
            <div style={{ position: 'relative', display: 'inline-block', marginTop: 60, }}>
                <img
                    src={path}
                    alt="driveway1"
                    className='img-div'
                />
                <div
                    style={{
                    position: 'absolute',
                    top: '2%',
                    left: '2%',
                    background: 'green', 
                    paddingLeft: '2%',
                    paddingRight: '2%',
                    paddingTop: '1%',
                    paddingBottom: '1.5%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '10px',
                    opacity: '100%'
                    }}>
                    <span className='badge-text-div' >{badgeText}</span>
                </div>
                <div
                    style={{
                    position: 'absolute',
                    bottom: '5%',
                    left: '8%',
                    width: '80%',
                    background: 'green', // Green translucent background color rgba(0, 128, 0, 0.5)
                    paddingLeft: '2%',
                    paddingRight: '2%',
                    paddingTop: '1%',
                    paddingBottom: '1.5%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    opacity: '70%'
                    }}>
                    <span className='img-text-div' >{text}</span> {/* Replace 'Your Text' with your desired text */}
                </div>
            </div>
        </div>
  );
};

export default ImageWithOverlay;