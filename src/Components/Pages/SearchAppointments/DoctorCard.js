import React from 'react'
import { NavLink } from 'react-router-dom'

// importing images
import DocImg from '../../../assets/img/Search Doctors/docImg1.png'
const DoctorCard = (props) => {
    return (
        <div className='DocCard'>
            <img src={DocImg} alt="" className="docImg" />
            <p className="docName">{props.docName}</p>
            <p className="docPrice">{props.docPrice}</p>
            <a className='links' href={props.links} style={{ textDecoration: 'none' }}>Book An Appointment</a>
        </div>
    )
}

export default DoctorCard