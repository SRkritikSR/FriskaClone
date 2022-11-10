import React, { useState, useEffect } from 'react'
import siteLogo from '../../assets/img/companyName.png'

// importing css
import '../../assets/styles/Navabar.css'
import '../../assets/styles/Common.css'


// importing components
import { NavLink } from "react-router-dom"

 function Navabar() {

    let activeStyle = {
        textDecoration: "underline"
    };

    let activeClassName = "underline"

    return (
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

                    </ul>



                    <div className="LoginSignUpButtons">
                        <button className=" SignUp NavButtons">
                            <NavLink
                                exact="true" activeclassname="" to="/SignUp">SIGN UP</NavLink>
                        </button>
                        <button className="Login NavButtons">
                            <NavLink exact="true" activeclassname="" to="/Login" >LOGIN</NavLink>
                        </button>

                    </div>

                </div>
            </nav>

        </div>
    )
}

export default Navabar
