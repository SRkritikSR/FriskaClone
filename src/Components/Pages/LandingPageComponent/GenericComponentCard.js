import React from 'react'
import './GenericComponentCard.css'


function GenericComponentCard(props) {
    return (
        <div className='GCardOuterContainer'>
            <div className="topRow">{props.valueTop}</div>
            <div className="bottomRow">{props.valueBottom}</div>
        </div>

    )
}

export default GenericComponentCard
