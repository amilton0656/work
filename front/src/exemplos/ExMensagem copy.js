import { useState } from 'react'
import Button from "../../components/Button";
import { FaRegEdit } from 'react-icons/fa'


import Mensagem from '../../components/Mensagem';
import Card from '../../components/Card';
import { BsFileX } from 'react-icons/bs';

const ExMensagem = () => {

    const [show, setShow] = useState(true)


    return (

        <div>
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
            <buton onClick={() => setShow(true)}>Click me abaixo</buton>

            {show && 
                <Mensagem onClick={() => setShow(false)} bg='steelblue' c='white'>

                    <buton onClick={() => alert('sdjfsjdflksdf')}>Click me acima</buton>

    
                </Mensagem>
            }
        </div>

    );
}

export default ExMensagem;