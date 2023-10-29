import React from 'react'
import './Mission.css'

function Mission() {
    return (
        <div className='form-mission-component relative'>
            <img src="src\assets\mission.jpg" alt="IMG" className='mx-auto' />
            <div className="mission-component absolute">
                <p className="mission-title">MISSION</p>
                <p className='mission-description'>
                    Momentum is the project that brings a fresh perspective to the Romanian podcast market.
                    Successful Romanian women have stories that deserve to be heard, to inspire, motivate, and
                    encourage the young to follow their dreams.
                    The aim is to show how the map to happiness/success is personalized, and while the strategy
                    might differ, it leads to the same place.
                    If you fail, don't give up; change the strategy.
                </p>
            </div>
        </div>
    )
}

export default Mission