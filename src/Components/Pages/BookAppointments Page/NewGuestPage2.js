import React from 'react'
// importing images
import guestPageImg from '../../../assets/img/Book Appointments/NewGuest/newGuest Img.png'
function NewGuestPage2() {
    return (
        <div className='newGuestPage2OuterContainer'>
            <div className="leftGuestImgContainer">
                <img src={guestPageImg} alt="" className="newGuestImg" />
            </div>
            <div className="rightGuestContainer">

                <div className="guestContainerRight">

                    <div className="rightGuestInnerContainer">
                        <label htmlFor="">
                            Enter full name : <br /><input type="text" placeholder='Your Name' /></label>
                        <label htmlFor="">
                            Enter Mobile Number : <br /><input type="text" placeholder='10 digit phone number' /></label>
                        <br />
                        <div className="guestBookingOTPBtn">
                            <button className="otpGuestBtn">Send OTP</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NewGuestPage2
