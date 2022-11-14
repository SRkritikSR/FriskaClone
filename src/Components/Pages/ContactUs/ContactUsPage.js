import React from 'react'
import Footer from '../../Footer'
import Navabar from '../Navabar'

// import css
import './ContactUs.css'

// import image
import heroContactImg from '../../../assets/img/ContactUsPage/heroAreaImg.jpg'

import NavbarAfterLogin from '../NavbarAfterLogin'

// for authentication
import { auth } from '../../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';


function ContactUsPage() {
    const [user] = useAuthState(auth);
    return (
        <>
            {user ? <NavbarAfterLogin /> :
                <Navabar />}
            <div className="ContactUsPageContainer">
                <div className="upperContainerContact">
                    {/* <img src={heroContactImg} alt="" class="heroContactImg" /> */}
                    <h1 className="headingCustomer">Welcome to Friska Customer Support</h1>
                    <div className="contactContent">

                        <p>We are ready to help you!</p>
                        <p>Have an issue with your booking or any other issues?</p>
                        <p>Our team is ready to help you.</p>
                        <p>7am – 9pm</p>
                    </div>
                </div>
                <div className="lowerContainer">
                    <div className="contactCard">
                        <div className="contactIconContainer">

                            <ion-icon name="call-outline"></ion-icon>
                        </div>
                        <p className="callContent">Call us at <span> <a href="tel:8983176450" style={{ textDecoration: "none", color: "#00C4DE" }}>+91-8983176450</a></span>  to speak to our support representative</p>
                    </div>
                    <div className="contactCard">
                        <div className="contactIconContainer heightMail">
                            <ion-icon name="mail-outline"></ion-icon>
                        </div>
                        <p className="emailContent">Send us an email to <span>  <a href="mailto: support@friskanow.com " target="_blank" style={{ textDecoration: "none", color: "#00C4DE" }}>support@friskanow.com</a></span> </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}


export default ContactUsPage