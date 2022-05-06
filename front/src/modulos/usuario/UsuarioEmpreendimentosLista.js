import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import clienteAxios from '../../config/axios'
import Swal from 'sweetalert2'
import { BsTrash } from 'react-icons/bs'
import { FaRegEdit } from 'react-icons/fa'
import ListaIcones from '../../components/ListaIcones'

import UsuarioEmpreendimentosCad from './UsuarioEmpreendimentosCad'

import './usuarioEmpreendimentosLista.css'

const UsuarioEmpreendimentosLista = props => {

    const [icones, setIcones] = useState(false)
    const [empreendimento, setEmpreendimento] = useState('')
    const [empreendimentos, setEmpreendimentos] = useState([])

    const { token } = useSelector(state => state.login.login)

    const dispatch = useDispatch()

    const clickHandle = (empreendimento) => {
        if (!icones) {
            document.getElementById('ck-usuario-empreendimento').checked = false
        }
        setIcones(!icones)
        setEmpreendimento(empreendimento)
    }

    const novoContatoHandle = () => {
        const elem = document.getElementById('ck-usuario-empreendimento')
        elem.checked = !elem.checked
        setEmpreendimento({})
    }

    const editContatoHandle = (empreendimento) => {
        setIcones(false)
        const elem = document.getElementById('ck-usuario-empreendimento')
        elem.checked = true
        setEmpreendimento(empreendimento)
    }

    const atualizar = () => {
        if (props.id_usuario) {
            clienteAxios.get(`/usuarioempreendimentos/${props.id_usuario}`, { headers: { Authorization: token } })
                .then(resposta => {
                    setEmpreendimentos(resposta.data)
                    console.log(resposta.data)
                    // dispatch(pessoasActions.loadContatos(resposta.data))
                })
                .catch(err => {
                    // dispatch(descargaEmpreendimentosError())
                })
        }

    }

    const deletePessoaHandler = id => {
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
                clienteAxios.delete(`/pessoacontato/del/${id}`, { headers: { Authorization: token } })
                    .then(resposta => {
                        atualizar()
                    })
                    .catch(err => {
                        // dispatch(descargaEmpreendimentosError())
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
                    id_pessoa={props.id_pessoa}
                    empreendimento={empreendimento}
                    atualizar={atualizar}
                    />}
            <ul className='contato-items'>
                {
                    empreendimentos.map(item => (
                        <li
                        className='contato-item' key={item.id_empreendimento}
                        onClick={() => clickHandle(item)}
                        >
                            {item.nomeempreendimento}

                            {icones && 1 === item.id_usuario &&
                                <ListaIcones
                                    onClick1={() => editContatoHandle(item)}
                                    onClick3={() => deletePessoaHandler(item.id_empreendimento)}
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