import {React,useState} from 'react'
import Navabar from '../Navabar'
import './UploadDocu.css'
import NavbarAfterLogin from '../NavbarAfterLogin'
import { firebase} from '../../../firebase';
import Footer from '../../Footer';

function UploadDocu() {

    const user = firebase.auth().currentUser;

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
    <h1 className='pos'>Upload Your Medical Records</h1>
    <br></br>
    <center>
     
      </center>
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
    <Footer></Footer>
    </>
  )
}

export default UploadDocu;