import React from 'react'
import OrganisingRecods from '../../../assets/img/LandingPage/OrganisingRecods.png'
import EasyAccess from '../../../assets/img/LandingPage/EasyAccess.png'
import CostEffective from '../../../assets/img/LandingPage/CostEffective.png'
import EasyCommunication from '../../../assets/img/LandingPage/EasyCommunication.png'
import BrandPositioning from '../../../assets/img/LandingPage/BrandPositioning.png'

function OfferSectionDoctor() {
    return (
        <div className="offerPatientsSection marginClass">
            <h1 className="offerHeading">
                What we have to offer to Doctors?
            </h1>
            <div className="cardsOfferContainer">
                <div className="cardsOffer">
                    <img src={CostEffective} alt="" className="cardOfferImg" />
                    <h2 className="cardsOfferHead">Increased <br /> Earnings</h2>
                </div>
                <div className="cardsOffer">
                    <img src={BrandPositioning} alt="" className="cardOfferImg" />
                    <h2 className="cardsOfferHead">Brand <br /> Positioning</h2>
                </div>
                <div className="cardsOffer">
                    <img src={EasyCommunication} alt="" className="cardOfferImg" />
                    <h2 className="cardsOfferHead">Easy <br /> Communication</h2>
                </div>
                <div className="cardsOffer">
                    <img src={OrganisingRecods} alt="" className="cardOfferImg" />
                    <h2 className="cardsOfferHead">Organizing <br /> Records</h2>
                </div>
            </div>

        </div>

    )
}

export default OfferSectionDoctor
