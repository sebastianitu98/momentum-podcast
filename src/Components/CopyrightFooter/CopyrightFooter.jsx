import React from 'react'
import './CopyrightFooter.css'

function CopyrightFooter() {
    return (
        <div className='copyrightFooter mx-auto text-white mt-6 py-2 w-full'>
            <div className='flex mx-auto justify-center'>
                <div className='flex'>
                    <img src='copyrightIcon.png' alt="copyright" />
                    2035 by Momentum
                </div>

                {/* spaces in html */}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <a href="#">Terms of Use</a>

                {/* spaces in html */}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <a href="#">Privacy Policy</a>
            </div>
        </div>
    )
}

export default CopyrightFooter