import React from 'react'
import GenericComponentCard from './GenericComponentCard'
import './Component.css'


function Component() {
  return (
    <div className="outerMostContainer">

      <div className='componentOuterContainer'>
        <div className="innerContainer">
          <div className="topContent">
            <GenericComponentCard key={1} valueTop="100+" valueBottom="Certified Doctors" />
            <GenericComponentCard key={2} valueTop="In Pune" valueBottom="" />
            <GenericComponentCard key={3} valueTop="1000+" valueBottom="Happy Patients" />

          </div>
          <div className="thoughtsContainer">
            <p className="thought">We promise to deliver the best experience <br /> between our customers and doctors.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Component
