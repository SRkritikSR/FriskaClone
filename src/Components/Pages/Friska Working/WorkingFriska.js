import React from 'react'

// importing components
import WorkingFriskaData from './WorkingFriskaData'
import WorkingFriskaCard from './WorkingriskaCard'

// importing styles
import './workingFriska.css'


// importing images
import WorkingSection1 from '../../../assets/img/LandingPage/WorkingSection1.png'
import WorkingSection2 from '../../../assets/img/LandingPage/WorkingSection2.png'

console.log("working friska")

const WorkingFriska = () => {
    return (
        <div className="workingFriska">
            <h1 className='workingFriskaHeading'>How Friska Works</h1>
            <br />
            <h2 className='workingFriskaHeading2'>Save time with the click button</h2>

            {WorkingFriskaData.map((val) => {
                return (

                    <WorkingFriskaCard imgSrc={WorkingSection2} contentWorkingHeading={val.contentWorkingHeading} contentWorkingPara={val.contentWorkingPara} btnContent={val.btnContent} />
                )
            })}
        </div>
    )
}
export default WorkingFriska
