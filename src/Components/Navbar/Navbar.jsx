import React from 'react'
import "./Navbar.css"

function Navbar() {
    return (
        <nav className='navigation-section flex justify-between mx-auto text-center w-full fixed top-0 left-0 right-0'>

            {/* LOGO SI DESCRIERE */}
            <div className="nav-logo-name flex justify-center">
                <img src="logo.png" alt="LOGO" title='LOGO' id='logo' />
                <p className='navTitle text-center my-auto mx-2'>MOMENTUM</p>
            </div>

            {/* BUTOANE PT NAVIGARE LA SECTIUNEA RESPECTIVA */}

            <ul className='nav-buttons my-auto flex flex items-center'>
                <li className='mx-2'><a href="#register_now" >REGISTER NOW</a></li>
                <li className='mx-2'><a href="#latest_episodes">LATEST EPISODES</a></li>
                <li className='mx-2'><a href="#upcoming_episodes">UPCOMING EVENTS</a></li>
                <li className='mx-2'><a href="#register_now">ABOUT US</a></li>
            </ul>


        </nav>
    )
}

export default Navbar