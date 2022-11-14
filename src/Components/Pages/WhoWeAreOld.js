import React, { useState, useEffect } from 'react'
// import 'bootstrap/js/dist/carousel'
import { Link } from 'react-router-dom';
import '../../assets/styles/newDesign.css';
import '../../assets/styles/whoWeAre-newDesign.css';

// import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

import hospitalSeats from "../../assets/images/whoWeAre/hospitalSeats.jpg";
import mobileInHand from "../../assets/images/whoWeAre/mobileInHand.jpg";
import whoWeAre_doc1 from "../../assets/images/whoWeAre/doc1.jpg";
import whoWeAre_doc2 from "../../assets/images/whoWeAre/doc2.jpg";
import whoWeAre_doc3 from "../../assets/images/whoWeAre/doc3.jpg";

import section1 from "../../assets/images/whoWeAre/section1.png"
import section2 from "../../assets/images/whoWeAre/section2.png"
import section3 from "../../assets/images/whoWeAre/section3.png"
import section4 from "../../assets/images/whoWeAre/section4.png"
import section5 from "../../assets/images/whoWeAre/section5.png"
import section6 from "../../assets/images/whoWeAre/section6.png"
import section7 from "../../assets/images/whoWeAre/section7.png"
import section8 from "../../assets/images/whoWeAre/section8Alt.png"
import Navabar from './Navabar';
import Footer from '../Footer';

export default function whoWeAre() {
    return (
        <>
            <Navabar />
            <img className='w-100' src={section1} />
            <img className='w-100' src={section2} />
            <div className='container'>
                <img className='w-90' src={section3} />
                <img className='w-90' src={section4} />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <img className='w-90' src={section5} />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <img className='w-90' src={section6} />
                {/* <img className='w-100 contact-us' src={section8} /> */}
            </div>


            <Footer />
        </>
    );

}