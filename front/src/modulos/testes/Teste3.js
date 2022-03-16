import { useState } from 'react'

import PrintPrint from '../../components/PrintPrint';



const Teste = () => {

    const [show, setShow] = useState(true)


    return (

        <div>
            <PrintPrint>
            <ul>
                <li>xxxxxxxxxxxxxxxxxxxx</li>
                <li>xxxxxxxxxxxxxxxxxxxx</li>
                <li>xxxxxxxxxxxxxxxxxxxx</li>
                <li>xxxxxxxxxxxxxxxxxxxx</li>
                <li>xxxxxxxxxxxxxxxxxxxx</li>
                <li>xxxxxxxxxxxxxxxxxxxx</li>
                <li>xxxxxxxxxxxxxxxxxxxx</li>
                <li>xxxxxxxxxxxxxxxxxxxx</li>
                <li>xxxxxxxxxxxxxxxxxxxx</li>
                <li>xxxxxxxxxxxxxxxxxxxx</li>
            </ul>
            </PrintPrint>


        </div>

    );
}

export default Teste;