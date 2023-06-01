import React from 'react';

import './ContactStyles.css'


const Contact = () => {

    return (
        <div className='contact-container'>
            <h1 className='contact-title'>Contact details</h1>
            <p className='contact-paragraph'>
                Please do not hesitate to contact us regarding any circumstances - we don't bite!
            </p>
            <br />
            <h2 className='contact-subtitle'>Email:</h2>
            <p className='contact-paragraph'>
                joebenjamin@parkpallimited.co.uk
            </p>
            <br />
            <h2 className='contact-subtitle'>Phone:</h2>
            <p className='contact-paragraph'>
                +44 7444 816 550
            </p>
            <br />
            <h2 className='contact-subtitle'>Correspondance address:</h2>
            <p className='contact-paragraph'>
                56 Cameron Square, CR4 3SH, Mitcham
            </p>
            <br />
            <h2 className='contact-subtitle'>Response policy:</h2>
            <p className='contact-paragraph'>
                We at Park Pal will aim to limit any response time to a maximum of 5 working days although 
                usually we respond on the same day. We pride ourselves on being a small interpersonal business
                where customers will know our representatives by name.
            </p>
        </div>
    );
    };

export default Contact;