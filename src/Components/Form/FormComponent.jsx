import React, { useState } from 'react'
import Form from './FormComponents/Form'
import Mission from './FormComponents/Mission'
import Vision from './FormComponents/Vision'
import './FormComponent.css'

function FormComponent() {

    const [formSectionState, setFormSectionState] = useState('form')

    return (
        <div className='form-section mx-auto w-full'>

            <div className="form-section-buttons w-full flex justify-around">

                {/* MISSION BUTTON */}
                <button className='w-full mission-button form-element-button' onClick={() => setFormSectionState('mission')}>
                    <p className='form-component-button-title'> Mission </p>
                    <p className='form-component-button-text'> Explore our goal </p>
                </button>

                {/* FORM BUTTON */}
                <button className='w-full form-button form-element-button' onClick={() => setFormSectionState('form')}>
                    <p className='form-component-button-title' > Register now </p>
                    <p className='form-component-button-text'> Stay in the loop </p>
                </button>

                {/* VISION BUTTON */}
                <button className='w-full vision-button form-element-button' onClick={() => setFormSectionState('vision')}>
                    <p className='form-component-button-title'> Vision </p>
                    <p className='form-component-button-text'> Get involved </p>
                </button>
            </div>

            {/* COMPONENT TO RENDER WHEN PAGE-LOAD OR BUTTON CLICK */}
            <div className="form-section-content">
                {formSectionState == 'mission' && <Mission />}
                {formSectionState == 'form' && <Form />}
                {formSectionState == 'vision' && <Vision />}
            </div>




        </div >
    )
}

export default FormComponent