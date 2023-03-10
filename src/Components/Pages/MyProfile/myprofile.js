import React from 'react'
import Navabar from '../Navabar'
import './userprofile.css'
import NavbarAfterLogin from '../NavbarAfterLogin'
import { auth,firebase } from '../../../firebase';
import Footer from '../../Footer';

function Myprofile() {

    const logoutt = () =>{
        auth.signOut();
        window.location='/'
    }

    const user = firebase.auth().currentUser;

// The user object has basic properties such as display name, email, etc.

    // const email = user.email;

    // if(email===null)
    // {
    //     email='abc@gmail.com';
    // }

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
    <h1 className='pos'>Your Profile</h1>
    <br></br>
    

    <br></br>
<ul className='pos' style={{listStyle: 'none' }}>
    <li>    <br></br>
    <h2>Name</h2>
        <br></br>
        <h3>N/A</h3>
    </li>
    <br></br>
    <li>
    <h2>Email</h2>
    <br></br>
    <h3>N/A</h3>
    </li>
    <br></br>
    <li>
    <h2>Phone Number</h2>
    <br></br>
        <h3>N/A</h3>
    </li>
    <br></br> <br></br>
</ul>
    </div>
    <button  onClick={logoutt} className='BookingButton'>
                Log Out
            </button>
            </div>
    <br></br> <br></br>
    <br></br>
    <br></br>
    <br></br>    <br></br>
    <br></br>    <br></br>
   
    <br></br>    <br></br>
    <br></br>
    <Footer></Footer>
    </>
  )
}

export default Myprofile;