import React from 'react'
import './CopyrightFooter.css'

function CopyrightFooter() {
    return (
        <div className='copyrightFooter mx-auto text-white mt-6 py-2 w-full'>
            <div className='flex mx-auto justify-center items-center'>
                <div className='flex items-center'>
                    <img src='copyrightIcon.png' alt="copyright" id='footerImage' />
                    <p className='mx-1'>2035 by Momentum</p>
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