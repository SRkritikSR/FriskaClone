import React from 'react'

// importing images
import DocImg from '../../../assets/img/Search Doctors/docImg1.png'
const DoctorCard = (props) => {
    return (
        <div className='DocCard'>
            <img src={DocImg} alt="" className="docImg" />
            <p className="docName">{props.docName}</p>
            <p className="docPrice">{props.docPrice}</p>
        </div>
    )
}

export default DoctorCard