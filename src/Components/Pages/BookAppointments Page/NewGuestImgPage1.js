import React from 'react'

// import css
import "./GuestBooking.css"

// importing images
import guestPageImg from '../../../assets/img/Book Appointments/NewGuest/newGuest Img.png'
import Navabar from '../Navabar'

function NewGuestImgPage1() {
    return (
        <>

            <Navabar />
            <div className="newGuestOuterContainer">
                <div className="leftGuestImgContainer">
                    <img src={guestPageImg} alt="" className="newGuestImg" />
                </div>
                <div className="rightGuestContainer">
                    <div className="formNewGuest">
                        <div className="formNewGuesInnerContainer">

                            <label htmlFor="">
                                Select Your Location :
                                <br /><br />
                                <input type="text" placeholder='Location' />
                            </label>
                            <label htmlFor="">
                                Select Hospital/ Clinic :
                                <br /><br />
                                <input type="text" placeholder='Hospital/ Clinic' />
                            </label>
                            <div className="brwoseBtnContainer">
                                <button className='btnBrowse'>Browse</button>
                            </div>
                            <label htmlFor="">
                                Select Doctor :
                                <br /><br />
                                <input type="text" placeholder='Doctor' />
                            </label>
                            <div className="brwoseBtnContainer">
                                <button className='btnBrowse'>Browse</button>
                            </div>
                            <label htmlFor="">
                                Select from available time :
                                <br /><br />
                                <input type="text" placeholder='Time' />
                            </label>
                            {/* <br /> */}
                            <button className="nextGuestBtn">Next</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default NewGuestImgPage1
