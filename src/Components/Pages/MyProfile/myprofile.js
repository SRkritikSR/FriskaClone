import React from 'react'
import Navabar from '../Navabar'
import './userprofile.css'
import NavbarAfterLogin from '../NavbarAfterLogin'
import { auth,firebase } from '../../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Footer from '../../Footer';

function Myprofile() {

    

    const user = firebase.auth().currentUser;

// The user object has basic properties such as display name, email, etc.

    // const email = user.email;
    const photoURL = user.photoURL;

    return (
    <>
    { user ?
        <NavbarAfterLogin></NavbarAfterLogin> : <Navabar></Navabar>
    }
    <div>
        <br></br>
    <h1 className='pos'>Your Profile</h1>
    <br></br>
    <img src={photoURL} alt="" className="dp-profile pos" />
    <br></br><br></br>
<ul className='pos' style={{listStyle: 'none' }}>
    <li>
    <h1>Name</h1>
        <br></br>
<h3>{user.displayName}</h3>
    </li>
    <br></br>
    <li>
    <h1>Email</h1>
    <br></br>
        <h3>{user.email}</h3>
    </li>
    <br></br>
    <li>
    <h1>Phone Number</h1>
    <br></br>
        <h3>N/A</h3>
    </li>

</ul>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Myprofile;