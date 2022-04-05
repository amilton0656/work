import { useEffect, useState } from 'react'

import Card from './Card'

import './msg.css'

const Msg = props => {

    const [inicio, setInicio] = useState(false)

    useEffect(() => {
        setInicio(true)
    }, [])

    useEffect(() => {
        if (inicio) {
            const elem = document.getElementById('ckk-msg')
            elem.checked = true
        }
    }, [inicio])

    return (
        <div className="lista-aux__backdrop" onClick={() => props.setShow(false)}>
            <div className="teste-msg__container">
                <input type='checkbox' id='ckk-msg' style={{display: 'none'}} />


                <Card className='teste-msg__card'>
                    {props.children}
                </Card>

            </div>
        </div>

    )
}

export default Msg