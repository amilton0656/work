import { useState } from 'react'

import './emprestimoLayout.css'

import OnOff from '../../components/OnOff'
import EmprestimoSAC from './sac/EmprestimoSAC'
import EmprestimoPrice from './price/EmprestimoPrice'



const EmprestimoLayout = () => {
    const [emprestimo, SetEmprestimo] = useState(false)

    const onClickHandle = props => {
        SetEmprestimo(!emprestimo)
    }

    const classeBold = ''

    return (
        <div>
            <div className='emprest-layout__header'>
                <div className='emprest-layout__title'>Simulações</div>
                <div className='emprest-layout__button-container'>
                    <span className={`emprest-layout__subtitleSAC ${!emprestimo ? 'emprest-layout__subtitleBold' : ''}`}>SAC</span>
                    <OnOff onClick={onClickHandle} />
                    <span className={`emprest-layout__subtitlePrice ${emprestimo ? 'emprest-layout__subtitleBold' : ''}`}>Price</span>
                </div>
            </div>


            {!emprestimo && <EmprestimoSAC />}
            {emprestimo && <EmprestimoPrice />}
        </div>
    );
}

export default EmprestimoLayout;