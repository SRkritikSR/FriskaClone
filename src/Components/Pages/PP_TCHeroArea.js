import React from 'react'
import '../../assets/styles/PP_TCHeroArea.css'
function PP_TCHeroArea(props) {
    return (
        <div className="PPHeroArea">
            <h1 className="PPHeading">{props.head}</h1>
        </div>
    )
}

export default PP_TCHeroArea