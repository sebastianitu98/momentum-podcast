import React from 'react'
import './EventElement.css'
import { formatDay, formatMonth, formatDateNumber } from '../../../HelperFunctions/formatDate'

function EventElement({ eventElement }) {

    const date2 = new Date(Date.now())


    return (
        <div className='eventElement flex text-center py-7 px-7 my-2 border-2 border-white w-2/3 mx-auto'>

            <div className='border-2 border-l-white p-4'>
                {eventElement && <p className='eventElementDate mx-3 my-auto'>{formatDay(date2)}</p>}
                {/* {eventElement && <p className='eventElementDate mx-3 my-auto'>{eventElement.eventDate}</p>} */}
                <div className='flex'>
                    {eventElement && <p className='eventElementDate mx-2 my-auto'>{formatDateNumber(date2)}</p>}
                    {eventElement && <p className='eventElementDate mx-1 my-auto'>{formatMonth(date2)}</p>}
                    {/* {eventElement && <p className='eventElementDate mx-3 my-auto'>{eventElement.eventDate}</p>} */}
                </div>
            </div>




            {eventElement && <h3 className='eventElementTitle mx-6 my-auto w-full'>{eventElement.eventTitle}</h3>}
        </div>
    )
}

export default EventElement