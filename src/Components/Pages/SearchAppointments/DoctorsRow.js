import React from 'react'

// importing data
import DoctorNameData from './DoctorNameData'
import DoctorCard from './DoctorCard'

const DoctorsRow = () => {
    return (
        <div className='DocRowOuterContainer'>
            {DoctorNameData.map((val) => {
                return (
                    <DoctorCard docName={val.docName} docPrice={val.docPrice} />
                )

            })}
        </div>
    )
}

export default DoctorsRow
