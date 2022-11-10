import React from 'react'
import guestHeroiMG from '../../assets/img/guestBookingHero.png'

import '../../assets/styles/GuestBooking.css'

function GuestBooking() {
    return (
        <div className="guestBookingContainer">
            <img src={guestHeroiMG} alt="" className="guestHeroiMG" />
            <div className="formGuestBooking">
                <form className='bookingForm'>
                    <label> Select Your Location </label>
                    <br />
                    <select className='selectClass'>
                        <option value="" > Select Location
                        </option>
                        <option value="BMW"> BMW
                        </option>
                        <option value="Mercedes"> Mercedes
                        </option>
                        <option value="Audi"> Audi
                        </option>
                        <option value="Skoda"> Skodas
                        </option>
                    </select>
                </form>
                <form className='bookingForm'>
                    <label> Select Hospital/Clinic </label>
                    <br />
                    <select className='selectClass' >
                        <option value="" > Select Hospital/Clinic
                        </option>
                        <option value="BMW"> BMW
                        </option>
                        <option value="Mercedes"> Mercedes
                        </option>
                        <option value="Audi"> Audi
                        </option>
                        <option value="Skoda"> Skodas
                        </option>
                    </select>
                </form>
                <form className='bookingForm'>
                    <label> Select Doctor </label>
                    <br />
                    <select className='selectClass' >
                        <option value="" > Select Doctor
                        </option>
                        <option value="BMW"> BMW
                        </option>
                        <option value="Mercedes"> Mercedes
                        </option>
                        <option value="Audi"> Audi
                        </option>
                        <option value="Skoda"> Skodas
                        </option>
                    </select>
                </form>
                <form className='bookingForm'>
                    <label> Select from available time </label>
                    <br />
                    <select className='selectClass'>
                        <option value="" > Time
                        </option>
                        <option value="BMW"> BMW
                        </option>
                        <option value="Mercedes"> Mercedes
                        </option>
                        <option value="Audi"> Audi
                        </option>
                        <option value="Skoda"> Skodas
                        </option>
                    </select>
                </form>
                <button className="nextBtn">Next</button>
            </div>
        </div>
    )
}

export default GuestBooking
