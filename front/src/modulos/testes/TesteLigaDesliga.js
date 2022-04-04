import './testeLigaDesliga.css'

const TesteLigaDesliga = props => {

    return (
        <div className='liga-desliga__main'>
            <div className='liga-desliga'>
                <input id='ck-liga-desliga' type='checkbox' className='liga-desliga__checkbox'/>
                <label htmlFor='ck-liga-desliga' className='liga-desliga__botao'></label>
            </div>

        </div>

    )
}

export default TesteLigaDesliga