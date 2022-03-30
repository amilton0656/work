import './teste.css'

const Teste = props => {

    return (
        <div className='teste-main'>
            <div className='liga-desliga'>
                <input id='liga-desliga' type='checkbox' className='liga-desliga__checkbox'/>
                <label htmlFor='liga-desliga' className='liga-desliga__botao'></label>

            </div>
        </div>
    )
}

export default Teste