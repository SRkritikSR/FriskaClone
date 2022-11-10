import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Footer from './Components/Footer'
import LandingPage from './Components/Pages/LandingPage'
import NavbarAfterLogin from './Components/Pages/NavbarAfterLogin'

function Home() {
    return (
        <>
            <Routes>
                {/* <Route path='/' element={<NavbarAfterLogin />}></Route> */}
                <Route path='/' element={<LandingPage />}></Route>
                {/* <Route path='/' element={<Footer />}></Route> */}
            </Routes>

        </>
    )
}

export default Home