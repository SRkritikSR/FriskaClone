import React from 'react'

// importing components
import DoctorsRow from './DoctorsRow'
import Footer from '../../Footer'
// import Navbar from '../../NavAfterLogin'

// importing css
import './SearchDoctor.css'
function SearchDoctors() {
    return (
        <>
            {/* <Navbar /> */}
            <div className='outerSearchContainer'>

                <div className="topPartSearch">
                    <div className="leftSearchPart">
                        <h1 className="searchHeading">Browse Doctors</h1>
                        <div className="rightTopPart">

                            <button className="searchCity">Pune</button>
                            <button className="searchDoctor">City Diabetic Center</button>
                        </div>
                    </div>

                </div>
                <div className="searchPart">
                    <input type="text" placeholder='Search' className="searchDoctor" />
                    <button className="filterBtn"> <ion-icon name="funnel-outline"></ion-icon> Filter </button>
                </div>

                <DoctorsRow />

                <button className="loadMoreBtn">Load More</button>

            </div>
            <Footer />
        </>
    );
}

export default SearchDoctors
