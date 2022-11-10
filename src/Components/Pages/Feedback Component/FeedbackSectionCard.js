import React from 'react'
import './Feedback.css'
import userImg from '../../../assets/img/Feedback/userImg.jpg'
function FeedbackSectionCard(props) {
    return (
        <>

            <div className="feedbacks">

                <div className="upperContainer">
                    <img src={userImg} alt="" className="customerLogo" />

                    <div className="abtCustomer">
                        <p className="customerName">{props.name}</p>
                        <p className="customerLocation">{props.city}</p>
                    </div>
                </div>
                <div className="lowerContainer">
                    <p>{props.para}</p>
                </div>
            </div>

        </>
    )
}

export default FeedbackSectionCard
