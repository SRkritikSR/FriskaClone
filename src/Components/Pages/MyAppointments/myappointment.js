import React from 'react'
import Navabar from '../Navabar'
import './myappointment.css'
import NavbarAfterLogin from '../NavbarAfterLogin'
import { firebase } from '../../../firebase';
import Footer from '../../Footer';
import { NavLink } from 'react-router-dom';

function Myappointment() {


    const user = firebase.auth().currentUser;

// The user object has basic properties such as display name, email, etc.

    // const email = user.email;
 

    return (
    <>
    { user ?
        <NavbarAfterLogin></NavbarAfterLogin> : <Navabar></Navabar>
    }
    <br></br>
    <div className="sidenav">
    <br></br>
  <a href="/MyProfile">Profile</a>
  <br></br>
  <a href="/payment">Payment</a>
  <br></br>
  <a href="/appointments">My Appointments</a>
  <br></br>
  <a href="/medicalrecords">Documents</a>

</div>

<div className='main'>
    <div>
        <br></br>
    <h1 className='pos'>No Appointment History<br>
    </br></h1>
    <br></br>
    <br></br>
    <button className='BookingButton'>
                <NavLink to='/SearchDoctors'>Book an appointment</NavLink>
            </button>
    </div>

            </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>    <br></br>
    <br></br>    <br></br>
    <br></br>    <br></br>
    <br></br>    <br></br>
    <br></br>    <br></br>
    <br></br>    <br></br>
    <br></br>    <br></br>
    <br></br>    <br></br>
    <br></br>    <br></br>
    <br></br>
    <Footer className='margin-top'></Footer>
    </>
  )
}

export default Myappointment;