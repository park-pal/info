import React from 'react';

import "./AboutStyles.css"


const About = () => {

    return (
        <div className='about-container'>
            <h1 className='about-title'>Welcome to Park Pal!</h1>
            <p className='about-paragraph'>
                We are an exciting new startup dedicated to helping driveway owners like you turn their unused
                space into a profitable venture. Our process is straightforward and hassle-free. We handle the
                marketing, bookings, and customer support, allowing you to focus on reaping the rewards of your
                driveway investment. What's more - we pay upfront to ensure peace of mind for driveway 
                owners like you!
            </p>
            <h1 className='about-title'>FAQs</h1>
            <div className='about-FAQ-container'>
                <div className='about-container-left'>
                    <h2 className='about-subtitle'>Can I cancel whenever?</h2>
                    <p className='about-paragraph'>
                        We require at least 1 month of cancellation notice. This commitment is necessary
                        for us be able to accept bookings for your space.
                    </p>
                    <h2 className='about-subtitle'>How do I get paid?</h2>
                    <p className='about-paragraph'>
                        When you decide you want to rent your space to us we will ask you for the bank
                        account you want your earnings to be paid to each month.
                    </p>
                    <h2 className='about-subtitle'>Is insurance included with this service?</h2>
                    <p className='about-paragraph'>
                        You should assume not. If an incident does occur, Park Pal will work with you in pursuit of an amicable
                        solution. Although it is unlikely you would have to pay for any damage - it is still a possibility.
                    </p>
                    <h2 className='about-subtitle'>Are there any hidden fees or charges associated with using your service?</h2>
                    <p className='about-paragraph'>
                        No! We beleive in transparency above all so our quote is what you will see being transferred into your
                        account every month.
                    </p>
                    <h2 className='about-subtitle'>How do you handle customer reviews and feedback?</h2>
                    <p className='about-paragraph'>
                        Please feel free to email us any feedback, review, or complaint. We may ask your permission to publish
                        your words on our website.
                    </p>
                    <h2 className='about-subtitle'>How do I update or make changes to my driveway listing?</h2>
                    <p className='about-paragraph'>
                        Simply email, text, or call us to update any information related to your driveway.
                    </p>
                    <h2 className='about-subtitle'>Are there any legal requirements or permits I need to consider?</h2>
                    <p className='about-paragraph'>
                        No for the most part although there may be some special circumstances where you do - dependent
                        on where the driveway is situated.
                    </p>
                    <h2 className='about-subtitle'>Can I rent multiple driveways to Park Pal?</h2>
                    <p className='about-paragraph'>
                        Yes absolutely! Both driveways will require independent visits from a Park Pal representative but
                        yes, if approved, you can rent multiple spaces to us.
                    </p>

                </div>
                <div className='about-container-right'>
                    <h2 className='about-subtitle'>How do I sign up?</h2>
                    <p className='about-paragraph'>
                        Signing up is simple - just send a quick text or email with your availability 
                        to schedule a visit from one of our representatives. Visit the contact page to 
                        find our email or phone number.
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
                        This is a complicated question the answer to which will differ greatly dependent on the circumstances.
                        All we can guarantee at Park Pal is that we will be in frequent communication with you until the
                        situation is resolved.
                    </p>
                    <h2 className='about-subtitle'>What happens if a renter cancels their reservation?</h2>
                    <p className='about-paragraph'>
                        Nothing! One benefit of our using Park Pal is that we take any extended vacancy risks away from 
                        you the owner.
                    </p>
                    <h2 className='about-subtitle'>Can I choose who rents my driveway, or is it assigned randomly?</h2>
                    <p className='about-paragraph'>
                        Unfortunately if you rent your space to us, we will have full discretion over who can park there. If
                        you wish to rent your space out to someone else you will have to cancel your agreement with us (with
                        the proper notice) before doing so.
                    </p>
                    <h2 className='about-subtitle'>What factors determine the rental price for my space?</h2>
                    <p className='about-paragraph'>
                        We use a variety of factors to decide how much to offer space owners including but not limited to:
                        proximity to transport links, proximity to amenities, parking availability, and 
                    </p>

                </div>
            </div>
        </div>
    );
    };

export default About;