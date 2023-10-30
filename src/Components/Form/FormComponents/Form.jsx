import React from 'react'
import { useState } from 'react'
import './Form.css'

function Form() {

    const [data, setData] = useState({ nameSurname: '', email: '', gdprConsent: false })

    return (
        <div className='text-white relative'>
            <img src="cover.jpg" alt="IMG" />

            <form action="" className='absolute form-form-component flex flex-col'>

                <label htmlFor="name" className='label'>Name and Surname</label>
                <input type="text" onChange={e => setData({ ...data, nameSurname: e.target.value })} value={data.nameSurname} className='input text-center' placeholder='Enter your name' />
                <br className='br-element' />

                <label htmlFor="email" className='label'>Email</label>
                <input type="email" onChange={e => setData({ ...data, email: e.target.value })} value={data.email} className='input text-center' placeholder='Enter your email' />

                <br className='br-element' />
                < div className='flex justify-center items-center'>
                    <input type="checkbox" id='checkbox-gdpr' onChange={e => setData({ ...data, gdprConsent: e.target.value })} value={data.gdprConsent} />
                    <label htmlFor="gdpr" id='label-gdpr' className='mx-2'>GDPR consent</label>
                </div>
                <button onClick={(e) => { e.preventDefault() }} id='formButton'>SUBSCRIBE NOW</button>
            </form>

        </div>
    )
}

export default Form