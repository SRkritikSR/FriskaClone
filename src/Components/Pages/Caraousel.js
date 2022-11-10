import React from 'react'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// importing css
import '../../assets/styles/LandingPageCaraousel.css'

// importing images
import img1 from '../../assets/img/Caraousel/1.png'
import img2 from '../../assets/img/Caraousel/2.png'
import img3 from '../../assets/img/Caraousel/3.png'



function Caraousel() {
    return (
        <Carousel classname="caraousel" autoPlay="true">
            <div>
                <img src={img1} className="caraImg" />
                {/* <p className="legend">Legend 1</p> */}
            </div>
            <div>
                <img src={img2} className="caraImg" />
                {/* <p className="legend">Legend 2</p> */}
            </div>
            <div>
                <img src={img3} className="caraImg" />
                {/* <p className="legend">Legend 3</p> */}
            </div>
        </Carousel>
    )
}

export default Caraousel
