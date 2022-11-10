import React from 'react'

// importing components
import Navbar from '../Pages/Navabar'
import BrowseClinics from './BrowseClinics'

// import css
import '../../assets/styles/BrowseClinicsPage.css'


function BrowseClinicsPage() {
    return (
        <>
            {/* <Navbar /> */}
            <div className="BrowseClinicPageContainer">
                <div className="headerPart">
                    <h1>Browse Hospitals/Clinics</h1>
                    <button className="locationBtn" disabled>Pune</button>
                </div>
                <div className="searchAndFilter">

                </div>
            </div>
            <div className="hosCards">
                <BrowseClinics />
            </div>
        </>
    )
}

export default BrowseClinicsPage