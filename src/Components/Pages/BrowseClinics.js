import React from 'react'

// importing css
import '../../assets/styles/Common.css'
import '../../assets/styles/BookAppointments.css'


// importing component
import Navbar from './Navabar'
import BrowseClinicCard from '../Pages/BrowseClinicCard'
import HospitalCardsData from './HospitalCardsData'
import { HospitalCardsDataRow2 } from './HospitalCardsData'


// importing images
import hosImg1 from '../../assets/img/Browse Clients/image1.png'
// import hosImg2 from '../../assets/img/Browse Clients/image2.png'

// import css
import '../../assets/styles/BrowseClinics.css'

console.log(HospitalCardsData);


function BrowseClinics() {
    return (
        <div className='BrowseClinicsContainer'>
            <div className="cardsBrowseClinic">
                {HospitalCardsData.map((val) => {
                    return (
                        <BrowseClinicCard imgsrc={val.imgSrc} hosName={val.hospitalName} price={val.price} />
                    )
                })}
            </div>
            <div className="cardsBrowseClinic">
                {HospitalCardsDataRow2.map((val) => {
                    return (
                        <BrowseClinicCard imgsrc={val.imgSrc} hosName={val.hospitalName} price={val.price} />
                    )
                })}
            </div>
            <button className="btnLoadMore">Load More</button>
        </div>
    )
}

export default BrowseClinics
