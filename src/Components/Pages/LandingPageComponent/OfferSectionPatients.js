import React from 'react'
import OrganisingRecods from '../../../assets/img/LandingPage/OrganisingRecods.png'
import TimeSaving from '../../../assets/img/LandingPage/timeSaving.png'
import EasyAccess from '../../../assets/img/LandingPage/EasyAccess.png'
function OfferSection() {
    return (
        <div className="offerPatientsSection">
            <h1 className="offerHeading">
                What we have to offer to Patients?
            </h1>
            <div className="cardsOfferContainer">
                <div className="cardsOffer">
                    <img src={TimeSaving} alt="" className="cardOfferImg" />
                    <h2 className="cardsOfferHead">Time Saving</h2>
                </div>
                <div className="cardsOffer">
                    <img src={OrganisingRecods} alt="" className="cardOfferImg" />
                    <h2 className="cardsOfferHead">Cost Effective</h2>
                </div>
                <div className="cardsOffer">
                    <img src={EasyAccess} alt="" className="cardOfferImg" />
                    <h2 className="cardsOfferHead">Easy access to Doctors</h2>
                </div>
                <div className="cardsOffer">
                    <img src={OrganisingRecods} alt="" className="cardOfferImg" />
                    <h2 className="cardsOfferHead">Organizing Records</h2>
                </div>

            </div>
        </div>
    )
}

export default OfferSection
