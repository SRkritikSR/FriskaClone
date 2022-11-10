import React from 'react'

// importing component
import FeedbackSectionCard from './FeedbackSectionCard'
import FeedbackSectionData from './FeedBackSectionData'
import { FeedbackSectionDataColumn2 } from './FeedBackSectionData'

// importing css
import './Feedback.css'

import userImg from '../../../assets/img/Feedback/userImg.jpg'



function FeedbackSection() {
    return (
        <>

            <h1>Our Happy Customers</h1>
            <div className="FeedBackOuterContainer">
                <div className="feedbackInnerContainer">
                    {FeedbackSectionData.map((val) => {
                        return (
                            <>
                                <FeedbackSectionCard name={val.name} city={val.city} para={val.para} />
                                <br />
                            </>

                        )
                    })}
                </div>
                {/* <div className="verticalLine"></div> */}
                <div className="feedbackInnerContainer">
                    {FeedbackSectionDataColumn2.map((val) => {
                        return (
                            <>
                                <FeedbackSectionCard name={val.name} city={val.city} para={val.para} />
                                <br />
                            </>

                        )
                    })}
                </div>

            </div>
        </>
    )
}

export default FeedbackSection
