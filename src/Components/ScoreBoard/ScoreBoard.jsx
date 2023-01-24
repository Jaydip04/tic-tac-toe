import React from 'react'
import "./Style.css";

const ScoreBoard = ({ label, score }) => {
    return (
        <div className='score'>
            <div className="count">
                {score}
            </div>
            <div className="label">
                {label}
            </div>
        </div>
    )
}

export default ScoreBoard