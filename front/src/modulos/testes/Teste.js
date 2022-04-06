import {  useState } from 'react'
import Tabs from './Tabs';


const Teste = () => {

    const [show, setShow] = useState(false)

    const clickHandle = () => {
        console.log('OKOK')
    }

    return ( 
        <div>
            <Tabs />
        </div>
     );
}
 
export default Teste;