import React from "react";
import { Link } from "react-router-dom";
import '../assets/styles/customMade.css';
import siteLogo from '../assets/images/companyName.png'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PersonIcon from '@mui/icons-material/Person';

import Button from '@mui/material/Button';


export const NavBeforeLogin = () => {
  return (
    <>
      <nav id='navBeforeLogin' className="navbar navbar-expand-lg navbar-light p-0 px-lg-2" style={{ zIndex:'101',background:'white'}}>
        <Link className="navbar-brand ms-3 ps-md-5" to="/">
          <img src={siteLogo} style={{ height: '4vh' }} alt="Med-D" />
        </Link>
        <button className="navbar-toggler me-3" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse bg-white" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-2 pos-nav">
              <li className="nav-item active ms-2 mx-lg-2">
                <Link className="nav-link fw-bold font-fam hover-underline-animation" style={{ fontSize: '2.3vh',color:'#00C4DE' }} to="/who-we-are">Who We Are</Link>
              </li>
              <li className="nav-item ms-2 mx-lg-2">
                <Link className="nav-link fw-bold text-dark font-fam hover-underline-animation opacity-nav" style={{ fontSize: '2.3vh' }} to="/book-appointment-info">Book Appointment</Link>
              </li>
              <li className="nav-item ms-2 mx-lg-2">
                <Link className="nav-link fw-bold text-dark font-fam hover-underline-animation opacity-nav" style={{ fontSize: '2.3vh' }} to="/customer-support">Get in Touch</Link>
              </li>
            </ul>
            <form className="d-flex mb-3 ms-2 m-sm-0">
              <Link to="/signup" className='text-deco' style={{TextDecoration:'none'}}>
                <Button variant='contained' className="mx-2 fw-bold" style={{ fontSize: '2vh', backgroundColor:'#00C4DE'}}>
                    <PersonIcon className='me-1'/>Sign up</Button>
              </Link>
              <Link to="/login" className="su_but" style={{TextDecoration:'none'}}>
                {/* <button type="button"
                  className="btn btn-outline-secondary mx-2 fw-bold rounded" style={{ fontSize: '2.3vh',fontFamily:'sans-serif' }}>SignUp</button> */}
                <Button variant="contained" className="mx-2 fw-bold" style={{ fontSize: '2vh', backgroundColor:'white',color:'#00C4DE'} } >Login</Button>
              </Link>
            </form>
          </div>
      </nav>
    </>
  );
};