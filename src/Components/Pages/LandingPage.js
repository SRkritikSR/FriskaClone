import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom';

import HeroImage from '../../assets/img/LandingPage/heroImage.svg';
import Navbar from '../Pages/Navabar'
import FooterComponent from '../Footer'
import OfferSectionPatients from './LandingPageComponent/OfferSectionPatients';
import OfferSectionDoctor from './LandingPageComponent/OfferSectionDoctor';
import WorkingFriska from './Friska Working/WorkingFriska'
import NavbarAfterLogin from './NavbarAfterLogin'

// for authentication
import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

// importing images
import CommunityNumberImg from '../../assets/img/LandingPage/CommunityNumber.svg'
import TimeSaving from '../../assets/img/LandingPage/timeSaving.png'
import OrganisingRecods from '../../assets/img/LandingPage/OrganisingRecods.png'
import EasyAccess from '../../assets/img/LandingPage/EasyAccess.png'
import CostEffective from '../../assets/img/LandingPage/CostEffective.png'
import EasyCommunication from '../../assets/img/LandingPage/EasyCommunication.png'
import BrandPositioning from '../../assets/img/LandingPage/BrandPositioning.png'
import FeedbackSection from './Feedback Component/FeedbackSection';

// styles
import '../../assets/styles/LandingPage.css'
import '../../assets/styles/Common.css'

// animation css
// import "animate.css/animate.min.css";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

import Caraousel from './Caraousel';
import Component from './LandingPageComponent/Component';


function LandingPage() {

  // condition to check for login and signup 
  const [user] = useAuthState(auth);



  return (
    <div className="OuterContainer">
      {user ? <NavbarAfterLogin /> :
        <Navbar />}

      <div className="ContainerHeroArea">
        <div className="HeroImage"><img className="HeroImageImg" src={HeroImage} alt="" />
          <button className='BookingButton'>
            <Link>
              Book An Appointment
            </Link>
          </button>
        </div>

      </div>
      <Component />
      <WorkingFriska />
      <OfferSectionPatients />
      <OfferSectionDoctor />
      <div className="feedbackSection">
        <FeedbackSection />
      </div>
      <FooterComponent />
    </div>

  )
}

export default LandingPage