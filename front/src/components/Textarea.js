import { useEffect } from 'react';
import './form.css'

const Textarea = props => {

    useEffect(() => {
        const elem = document.getElementById(props.id);
        elem.addEventListener("click", function () {
            this.select();
        })

    }, [])


    return (
        <div
            className={`form.inputBox ${props.className}`}
            style={props.style}
        >
            <label htmlFor={props.id}>{props.label}</label>
            <textarea
                disabled={props.disabled}
                type={props.type}
                id={props.id}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
                className={`form-input ${props.className}`}
                step={props.step}
                onKeyDown={props.onKeyDown}
                rows={props.rows}
            />

        </div>
    )
}

export default Textarea