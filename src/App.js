import { React, useState } from 'react'
import { Route, Routes } from "react-router-dom"


import Navabar from './Components/Pages/Navabar';
import LandingPage from './Components/Pages/LandingPage';
import LandingPageAfterLogin from './Components/Pages/LandingPageAfterLogin';
import SignUp from './Components/Pages/SignUp';
import Login from './Components/Pages/Login';
import Footer from './Components/Footer';
import BrowseClinics from './Components/Pages/BrowseClinics';
import BookAppointmentsPage from './Components/Pages/BookAppointments Page/BookApoointmentsPage';
import GuestBooking from './Components/Pages/GuestBooking';
import BrowseClinicsPage from './Components/Pages/BrowseClinicsPage';
import Error from './Components/ErrorPage';
import FeedbackSection from './Components/Pages/Feedback Component/FeedbackSection';
import ContactUsPage from './Components/Pages/ContactUs/ContactUsPage';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import NavbarAfterLogin from './Components/Pages/NavbarAfterLogin';
import Component from './Components/Pages/LandingPageComponent/Component';

import NewGuestImgPage1 from './Components/Pages/BookAppointments Page/NewGuestImgPage1';
import NewGuestPage2 from './Components/Pages/BookAppointments Page/NewGuestPage2';

import WhoWeAre from './Components/Pages/WhoWeAre';
import SearchDoctors from './Components/Pages/SearchAppointments/SearchDoctors';
import PrivacyPolicy from './Components/Pages/PrivacyPolicy';

// function App() {
//   const [user] = useAuthState(auth);
//   return (
//     user ? <LandingPage /> : <LandingPageAfterLogin />
//   );
// }
// ******************** signUp -> login -> dashboard(book appointments page) -> upload documents********************************




function App() {

  const [user] = useAuthState(auth);



  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} ></Route>
        <Route path='/home' element={<LandingPageAfterLogin />} ></Route>
        <Route element={<Error />} ></Route>
        <Route path='/BookApoointmentsPage' element={<BookAppointmentsPage />} ></Route>
        <Route path='/Login' element={<Login />} ></Route>
        <Route path='/SignUp' element={<SignUp />} ></Route>
        <Route path='/ContactUsPage' element={<ContactUsPage />} ></Route>
        <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} ></Route>

      </Routes>

      {/* <LandingPage /> */}
      {/* <SignUp /> */}
      {/* <Login /> */}
      {/* <BrowseClinics /> */}
      {/* <BookAppointmentsPage /> */}
      {/* <GuestBooking /> */}
      {/* <BrowseClinicsPage /> */}
      {/* <Footer /> */}
      {/* <FeedbackSection /> */}
      {/* <ContactUsPage /> */}
      {/* <NavbarAfterLogin /> */}
      {/* <Component /> */}
      {/* <NewGuestImgPage1 /> */}
      {/* <NewGuestPage2 /> */}
      {/* <WhoWeAre /> */}
      {/* <SearchDoctors /> */}
      {/* <PrivacyPolicy /> */}

    </>

  );
}

export default App;

