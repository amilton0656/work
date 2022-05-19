import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import clienteAxios from '../../config/axios'
import Swal from 'sweetalert2'
import ListaIcones from '../../components/ListaIcones'

import UsuarioEmpreendimentosCad from './UsuarioEmpreendimentosCad'

import './usuarioEmpreendimentosLista.css'

const UsuarioEmpreendimentosLista = props => {

    const [icones, setIcones] = useState(false)
    const [empreendimento, setEmpreendimento] = useState('')
    const [empreendimentos, setEmpreendimentos] = useState([])
    const [id, setId] = useState('')

    const { token } = useSelector(state => state.login.login)

    const clickHandle = (empreendimento) => {

        if (empreendimento.id_empreendimento === id) {
            setIcones(!icones)
            document.getElementById('ck-usuario-empreendimento').checked = false
        } else {
            setIcones(true)
            setId(empreendimento.id_empreendimento)

        }

    }

    const atualizar = () => {
        if (props.id_usuario) {
            clienteAxios.get(`/usuarioempreendimentos/${props.id_usuario}`, { headers: { Authorization: token } })
                .then(resposta => {
                    setEmpreendimentos(resposta.data)
                })
                .catch(err => {
                })
        }
    }

    const novoContatoHandle = () => {
        const elem = document.getElementById('ck-usuario-empreendimento')
        elem.checked = !elem.checked
        setEmpreendimento({})
        atualizar()
    }

    const deleteEmpreendimentoHandler = item => {
        console.log('delete ', item )
        Swal.fire({
            title: 'Tem certeza?',
            text: "Você está excluindo este registro!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'OK, excluído!'
        }).then((result) => {
            if (result.isConfirmed) {
                clienteAxios.delete(`/usuarioempreendimentos/${item.id_usuario}/${item.id_empreendimento}`)
                    .then(resposta => {
                        atualizar()
                    })
                    .catch(err => {
                        console.log('deletou msg erro')
                    })

                Swal.fire(
                    'Excluído!'
                )
            }
        })

    }

    useEffect(() => {
        atualizar()
    }, [props.id_usuario])

    return (

        <main className='contato-main'>
            <input id='ck-usuario-empreendimento' type='checkbox'  />
            <div className='contato-container__header'>
                <div>Empreendimentos</div>
                <label className='contato-button' onClick={novoContatoHandle}></label>
            </div>
                {1 && <UsuarioEmpreendimentosCad
                    id_usuario={props.id_usuario}
                    atualizar={atualizar}
                    novoContatoHandle={novoContatoHandle}
                    />}
            <ul className='contato-items'>
                {
                    empreendimentos.map(item => (
                        <li
                        className={icones && id === item.id_empreendimento ? 'contato-item consulta-padrao__bold' : 'contato-item'}
                        onClick={() => clickHandle(item)}
                        >
                            {item.nomeempreendimento}

                            {icones  && id === item.id_empreendimento &&
                                <ListaIcones
                                    onClick3={() => deleteEmpreendimentoHandler(item)}
                                />
                            }

                        </li>
                    ))
                }
            </ul>

        </main>
    );
}

export default UsuarioEmpreendimentosLista;