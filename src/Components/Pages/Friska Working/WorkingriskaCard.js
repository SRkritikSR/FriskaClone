import React from 'react'
import WorkingSection1 from '../../../assets/img/LandingPage/WorkingSection1.png'
import WorkingSection2 from '../../../assets/img/LandingPage/WorkingSection2.png'
import './workingFriska.css'

function WorkingFriskaCard(props) {
    console.log(props.contentWorkingHeading);
    return (

        <div className="workingContainer1">
            <div className="imageWorking">
                <img src={props.imgSrc} className="imageWorkingImg" alt="" />
            </div>
            <div className="contentWorking">
                <h1 className="contentWorkingHeading">{props.contentWorkingHeading}</h1>
                <h2 className="contentWorkingPara">{props.contentWorkingPara} </h2>
                <button className="contentWorkingButton widthBtn"><a href="#">{props.btnContent} </a></button>
            </div>
        </div>

    )
}

export default WorkingFriskaCard