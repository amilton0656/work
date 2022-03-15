import { useState } from 'react'
import Button from "../../components/Button";
import { FaRegEdit } from 'react-icons/fa'


import Mensagem from '../../components/Mensagem';
import Card from '../../components/Card';
import { BsFileX } from 'react-icons/bs';

import Modal from './components/Modal/Modal'
import Backdrop from './components/Backdrop/Backdrop';

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
                <li>xxxxxxxxxxxxxxxx</li>
            </ul>
            <button onClick={() => setShow(true)}>Click me abaixo</button>
            <Modal show = {show} closed = {() => setShow(false)} />
            <Backdrop show = {show} closed = {() => setShow(false)} />
        </div>

    );
}

export default ExMensagem;