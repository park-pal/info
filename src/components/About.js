import React from 'react';

import "./AboutStyles.css"


const About = () => {

    return (
        <div className='about-container'>
            <h1 className='about-title'>FAQs</h1>
            <div className='about-FAQ-container'>
                <div className='about-container-left'>
                    <h2 className='about-subtitle'>Can I cancel whenever?</h2>
                    <p className='about-paragraph'>
                        We require at least 1 month of cancellation notice. This commitment is necessary
                        for us be able to accept bookings for your space.
                    </p>
                    <h2 className='about-subtitle'>How do I sign up?</h2>
                    <p className='about-paragraph'>
                        Signing up is simple - just send a quick text or email with your availability 
                        to schedule a visit from one of our representatives. Visit the contact page to 
                        find our email or phone number.
                    </p>
                        <h2 className='about-subtitle'>Is there any insurance coverage for my driveway while it's being rented?</h2>
                    <p className='about-paragraph'>
                        Answer
                    </p>
                    <h2 className='about-subtitle'>Are there any hidden fees or charges associated with using your service?</h2>
                    <p className='about-paragraph'>
                        Answer
                    </p>
                    <h2 className='about-subtitle'>How do you handle customer reviews and feedback?</h2>
                    <p className='about-paragraph'>
                        Answer
                    </p>
                    <h2 className='about-subtitle'>How do I update or make changes to my driveway listing?</h2>
                    <p className='about-paragraph'>
                        Answer
                    </p>
                    <h2 className='about-subtitle'>Are there any legal requirements or permits I need to consider?</h2>
                    <p className='about-paragraph'>
                        Answer
                    </p>
                </div>
                <div className='about-container-right'>
                    <h2 className='about-subtitle'>How do I get paid?</h2>
                    <p className='about-paragraph'>
                        When you decide you want to rent your space to us we will ask you for the bank
                        account you want your earnings to be paid to each month.
                    </p>
                    <h2 className='about-subtitle'>Can I use my driveway if it's not booked?</h2>
                    <p className='about-paragraph'>
                        If you know that you will need your driveway on a certain date
                        you should let us know at least a month in advance so we don't accept any 
                        bookings during this time. If this notice period is not met we may still be able
                        to oblige some requests at our discretion. Note that if you use your driveway during
                        a rental period we will request some componsation - this will usually be deducted
                        from next months rental fee. Please get in touch for more details.
                    </p>
                    <h2 className='about-subtitle'>What happens if there is damage to my driveway while it's being rented?</h2>
                    <p className='about-paragraph'>
                        Answer
                    </p>
                    <h2 className='about-subtitle'>What happens if a renter cancels their reservation?</h2>
                    <p className='about-paragraph'>
                        Answer
                    </p>
                    <h2 className='about-subtitle'>Can I choose who rents my driveway, or is it assigned randomly?</h2>
                    <p className='about-paragraph'>
                        Answer
                    </p>
                    <h2 className='about-subtitle'>What factors determine the rental price for my driveway?</h2>
                    <p className='about-paragraph'>
                        Answer
                    </p>

                </div>
            </div>
        </div>
    );
    };

export default About;