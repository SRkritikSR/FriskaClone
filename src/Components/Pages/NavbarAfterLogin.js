import React, { useState, useEffect } from 'react'
import siteLogo from '../../assets/img/companyName.png'
import { firebase, auth, provider } from '../../firebase';
import { Link } from 'react-router-dom';


// importing css

import '../../assets/styles/NavbarAfterLogin.css'
import '../../assets/styles/Common.css'


// importing components
import { NavLink } from "react-router-dom"
function NavbarAfterLogin() {
    let activeStyle = {
        textDecoration: "underline"
    };



const user = firebase.auth().currentUser;

// The user object has basic properties such as display name, email, etc.

    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;

    console.log(photoURL)
    let activeClassName = "underline"

    const logout = () => {
        return window.location = '/MyProfile' ;

}

    // const img = user.auth.UserProfile();
    // console.log(img.PhotoUrl);

    return (
        <div>
            <div>
                <nav className="newNav">
                    <div className="logoImgContainer">
                    <Link to="/">
                        <img src={siteLogo} alt="Med-D" className='logoImg' />
                        </Link>
                    </div>
                    <div className="rightContainer">
                        <ul>
                            <li className="navLinks">
                                <NavLink
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                        , ({ textDecoration: 'none' })}
                                    exact="true" activeclassname="navBarActive" to="/WhoWeAreOld">Who We Are</NavLink>
                            </li>
                            <li className="navLinks">
                                <NavLink
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                        , ({ textDecoration: 'none' })}
                                    exact="true" activeclassname="navBarActive" to="/BookApoointmentsPage">Book Appointment</NavLink>
                            </li>
                            <li className="navLinks">
                                <NavLink
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                        , ({ textDecoration: 'none' })}
                                    exact="true" activeclassname="navBarActive" to="/ContactUs">Get In Touch</NavLink>
                            </li>
                            <div className="userAfterContent">
                                <button className="userProfileBtn"
                                    onClick={logout}>
                                    <img src='https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png' alt="" className="dp" />
                                </button>&nbsp;&nbsp;&nbsp;
                                <p style={{ color: "black",fontWeight:'bold', }}>{displayName}</p>

                            </div>

                        </ul>
                    </div>
                </nav>

            </div>
        </div>
    )
}

export default NavbarAfterLogin
