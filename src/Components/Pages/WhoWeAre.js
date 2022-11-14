import React from 'react'
import Footer from '../Footer'
import Navabar from './Navabar'

import '../../assets/styles/WhoWeAreNew.css'
import topAboutHeroImg from '../../assets/img/LogoEdited.png'
import imgComponent from '../../assets/img/whoWeAre/img1.jpg'
import imgComp2 from '../../assets/img/whoWeAre/img2.jpg'

function WhoWeAre() {
    return (
        <>
            <Navabar />
            <div className='AboutUsOuterContainer'>
                <div className="topPartAboutUs">
                    <div className="topLeftAboutUs">
                        <h1 className="headAboutUs">
                            "With technology we are easing the pain of <br />
                            every individual visiting a doctor"
                        </h1>
                    </div>
                    <div className="topRightAboutUs">
                        <img src={topAboutHeroImg} alt="LogoImg" className="topAboutHeroImg" />
                        <p className="tagLine">Book karo aasani se</p>
                    </div>
                </div>
                <div className="imgCompAbout">
                    <img src={imgComponent} alt="" className="imgComp" />
                </div>
                <div className="AboutComponentInfo">
                    <div className="leftCompInfo">
                        <h1 className="bookingCompAbt">Book Offline <br /> Appointments <br /> Directly From Your <br />
                            Phone</h1>
                    </div>
                    <div className="rightCompInfo">
                        <img src={imgComp2} alt="" className="imgComp2Abt" />
                    </div>
                    <div className="contentTop">
                        <p className="paraContentTop">
                            Friska is a technology startup that makes booking offline doctor appointments
                            easier and more flexible so that our customers don't have to wait for
                            their turn when visiting a doctor. We promise to deliver the
                            best experience between our customers and doctors.
                            Friska means friendly and super caring for people around it. We deliver
                            happiness to our customers by making their visit to a doctor
                            quick, comfortable and cost-effective.
                        </p>
                    </div>
                </div>

                <div className="ourIdea">
                    <div className="innerOurIdea">

                        <div className="topIdea">
                            <p className="paraIdea"> " We strive to provide our customers with a simple platform to <br />
                                book, modify and track appointments with their doctors <br />
                                thereby saving their time at discounted prices. "</p>
                        </div>
                        <div className="lineDivider"></div>
                        <div className="bottomIdea">
                            <p className="paraIdea">

                                " We support our doctors with the simplicity of our technology <br />
                                so as to operate with ease, multiply their earnings and <br />
                                establish their digital presence. "
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default WhoWeAre