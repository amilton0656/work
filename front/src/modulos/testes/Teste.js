import {  useState } from 'react'
import Msg from './Msg';


const Teste = () => {

    const [show, setShow] = useState(false)

    const clickHandle = () => {
        console.log('OKOK')
    }

    return ( 
        <>
            <button type='button' onClick={() => setShow(true)}>Show</button>
            {
                show &&
                <Msg setShow={setShow}>
                    <div>
                    <span style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>Teste de Mensagem</span>
                    
                    <ul>
                        <li>xxxxxxxxxxxxxxxxxxxxx</li>
                        <li>xxxxxxxxxxxxxxxxxxxxx</li>
                        <li>xxxxxxxxxxxxxxxxxxxxx</li>
                        <button onClick={clickHandle}>OK</button>
                        {/* <li>xxxxxxxxxxxxxxxxxxxxx</li>
                        <li>xxxxxxxxxxxxxxxxxxxxx</li>
                        <li>xxxxxxxxxxxxxxxxxxxxx</li>
                        <li>xxxxxxxxxxxxxxxxxxxxx</li>
                        <li>xxxxxxxxxxxxxxxxxxxxx</li>
                        <li>xxxxxxxxxxxxxxxxxxxxx</li>
                        <li>xxxxxxxxxxxxxxxxxxxxx</li>
                        <li>xxxxxxxxxxxxxxxxxxxxx</li>
                        <li>xxxxxxxxxxxxxxxxxxxxx</li>
                        <li>xxxxxxxxxxxxxxxxxxxxx</li>
                        <li>xxxxxxxxxxxxxxxxxxxxx</li>
                        <li>xxxxxxxxxxxxxxxxxxxxx</li>
                        <li>xxxxxxxxxxxxxxxxxxxxx</li>
                        <li>xxxxxxxxxxxxxxxxxxxxx</li>
                        <li>xxxxxxxxxxxxxxxxxxxxx</li>
                        <li>xxxxxxxxxxxxxxxxxxxxx</li>
                        <li>xxxxxxxxxxxxxxxxxxxxx</li>
                        <li>xxxxxxxxxxxxxxxxxxxxx</li>
                        <li>xxxxxxxxxxxxxxxxxxxxx</li> */}
                    </ul>
                    </div>
                </Msg>
            }
        </>
     );
}
 
export default Teste;