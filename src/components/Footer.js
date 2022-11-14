import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/Common.css'
import '../assets/styles/Footer.css'
import siteLogoFooter from '../assets/img/companyName.png'
import micrsoftAzureLicense from '../assets/img/MicrosoftAzure-Footer.png'


function Footer() {
    return (

        <div className='FooterContainer'>
            <div className="innerFooterContainer">


                <div className="containerLeft1 containerFoot">
                    <img src={siteLogoFooter} alt="" className="siteLogoFooter" />
                    <img src={micrsoftAzureLicense} alt="" className="micrsoftAzureLicense" />
                </div>
                <div className="containerLeft2 containerFoot">
                    <h4>ABOUT</h4>
                    <p><Link to="/WhoWeAreOld">Who we are</Link> </p>
                    <p> <a href="https://forms.gle/UMs1QaxX4nMMYWwb9" target="_blank">Work with us</a> </p>
                </div>
                <div className="containerLeft3 containerFoot">
                    <h4>SUPPORT</h4>
                    {/* <p><Link>support@friskanow.com</Link></p> */}
                    <a href="mailto: support@friskanow.com " target="_blank" style={{ textDecoration: "none", color: "black" }}>support@friskanow.com</a>
                    <a href="tel:8983176450" style={{ textDecoration: "none", color: "black" }}>+91-8983176450</a>
                </div>
                <div className="containerLeft4 containerFoot">
                    <h4>MORE</h4>
                    <p> <Link to="/PrivacyPolicy" >Privacy Policy</Link> </p>
                    <p> <Link to="/TermsAndConditions"> Terms & Conditions</Link></p>
                </div>
                <div className="containerLeft5 containerFoot">
                    <h4>CONTACT</h4>

                    <span>
                        <a href="https://www.linkedin.com/company/friskanow" target="_blank"><ion-icon name="logo-linkedin"></ion-icon></a>

                    </span>
                    <p className='copyright'> &#169; Friska Technologies </p>
                </div>
            </div>

        </div>

    )
}

export default Footer   