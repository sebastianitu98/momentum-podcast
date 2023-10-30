import React from 'react'
import './Vision.css'

function Vision() {
    return (
        <div className='form-vision-component text-white'>
            <img src="vision.jpg" alt="IMG" className='mx-auto' />
            <div className="vision-component absolute">
                <p className="form-component-title vision-title">VISION</p>
                <p className='form-component-description vision-description'>
                    We are here to ease the path to achieving dreams.
                    We access information online through various means, and we created Momentum as a safe
                    space for those with ideas destined to change our lives.
                </p>
            </div>
        </div>
    )
}

export default Vision