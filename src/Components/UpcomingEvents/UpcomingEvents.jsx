import React from 'react'
import './UpcomingEvents.css'
import EventElement from './EventElement/EventElement'

function UpcomingEvents() {

    const upcomingEventsData = [
        {
            eventDate: '23/10/2023',
            eventTitle: 'Cum se fac banii in 2023?',
        },
        {
            eventDate: '28/10/2023',
            eventTitle: 'Cum si cine a facut 1 milion de euro in recesiune?',
        },
        {
            eventDate: '23/11/2023',
            eventTitle: 'Cine este magnata care a facut 180.000 euro in doar 17 zile?',
        }
    ]

    return (
        <div className='upcomingEvents mx-auto text-center w-full'>
            <h2 id='upcomingEventsTitle' className='mx-auto'>Upcoming episodes</h2>

            <div className="upcomingEventsMap flex mt-6"></div>
            {upcomingEventsData.map((element, index) => <EventElement key={index} eventElement={element} />)}

        </div>
    )
}

export default UpcomingEvents