import React from 'react'

// importing components
import DoctorsRow from './DoctorsRow'
import Footer from '../../Footer'
// import Navbar from '../../NavAfterLogin'

// importing css
import './SearchDoctor.css'
import {firebase,auth} from '../../../firebase'
import Navabar from '../Navabar';
import NavbarAfterLogin from '../NavbarAfterLogin'
function SearchDoctors() {
    const user = firebase.auth().currentUser;
    return (
        <>
           { user ?
        <NavbarAfterLogin></NavbarAfterLogin> : <Navabar></Navabar>
    }
            <div className='outerSearchContainer'>

                <div className="topPartSearch">
                    {/* <div className="leftSearchPart"> */}
                        {/* <h1 className="searchHeading">Browse Doctors</h1> */}
                        {/* <div className="rightTopPart">

                            <button className="searchCity">Pune</button>
                            <button className="searchDoctor">City Diabetic Center</button>
                        </div> */}
                    {/* </div> */}

                </div>
                {/* <div className="searchPart">
                  
                    <button className="filterBtn"> <ion-icon name="funnel-outline"></ion-icon> Filter </button>
                </div> */}

                <DoctorsRow />

                {/* <button className="loadMoreBtn bookingBtn">Load More</button> */}

           
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            </div>
            <Footer />
        </>
    );
}

export default SearchDoctors
