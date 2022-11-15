import React from 'react'
import { Link } from 'react-router-dom'

import {firebase} from '../../../firebase'
import WorkingSection1 from '../../../assets/img/LandingPage/WorkingSection1.png'
import WorkingSection2 from '../../../assets/img/LandingPage/WorkingSection2.png'
import './workingFriska.css'



function WorkingFriskaCard(props) {
    const user = firebase.auth().currentUser;
    const navg = () =>{
        if(user!==null){
            return window.location='/medicalrecords'
        }else{
            return window.location='/login'
        }
    }
    console.log(props.contentWorkingHeading);
    return (
        <>

            <div className="workingContainer1">
                <div className="imageWorking">
                    <img src={WorkingSection1} className="imageWorkingImg" alt="" />
                </div>
                <div className="contentWorking">
                    <div className="headingCard">
                        <h1 className="contentWorkingHeading">Book Offline Appointments</h1>
                        <br />
                        <h2 className="contentWorkingPara">No more standing in queues, sitting in the waiting area.Skip the hassle and get your health checked up quickly with live tracking system. </h2>
                    </div>
                    <button className="contentWorkingButton widthBtn"><Link to="/BookApoointmentsPage">Book an Appointment </Link></button>
                </div>
            </div>
            <div className="workingContainer1">
                <div className="imageWorking">
                    <img src={WorkingSection2} className="imageWorkingImg" alt="" />
                </div>
                <div className="contentWorking">
                    <div className="headingCard">
                        <h1 className="contentWorkingHeading">Save Your Medical Records</h1>
                        <br />
                        <h2 className="contentWorkingPara">Save your medical records here securely so that you never forget them and get amazing discounts on booking appointments.</h2>
                    </div>
                    <button onClick={navg} className="contentWorkingButton widthBtn">Upload Records</button>
                </div>
            </div>
        </>

    )
}

export default WorkingFriskaCard