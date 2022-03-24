import { useState } from 'react'

import './inputWithButton.css'

const InputWithButton = props => {
    return (
        <div>
            <label htmlFor={props.id}>{props.label}</label>
        <div className='input-button__form'>
            <input className='input-button__input' 
                value={props.value}
                onChange={props.onChange}
            />
            <button className='input-button__button' onClick={props.onClick}>{props.children}</button>
            
        </div>

        </div>
    )
}

export default InputWithButton