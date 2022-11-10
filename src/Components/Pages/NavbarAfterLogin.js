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

    let activeClassName = "underline"

    const logout = () => {
        auth.signOut();
    }

    return (
        <div>
            <div>
                <nav className="newNav">
                    <div className="logoImgContainer">
                        <img src={siteLogo} alt="Med-D" className='logoImg' />
                    </div>
                    <div className="rightContainer">
                        <ul>
                            <li className="navLinks">
                                <NavLink
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    ,({textDecoration: 'none'})}
                                    exact="true" activeclassname="navBarActive" to="/">Who We Are</NavLink>
                            </li>
                            <li className="navLinks">
                                <NavLink
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    ,({textDecoration: 'none'})}
                                    exact="true" activeclassname="navBarActive" to="/BookApoointmentsPage">Book Appointment</NavLink>
                            </li>
                            <li className="navLinks">
                                <NavLink
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                        ,({textDecoration: 'none'})}
                                    exact="true" activeclassname="navBarActive" to="/ContactUsPage">Get In Touch</NavLink>
                            </li>
                            <div className="userAfterContent">
                                <button className="userProfileBtn"
                                    onClick={logout}>
                                    <ion-icon name="person" className="userIcon"></ion-icon>
                                </button>
                                <p>Hi, Aditya Gupta</p>

                            </div>

                        </ul>
                    </div>
                </nav>

            </div>
        </div>
    )
}

export default NavbarAfterLogin
