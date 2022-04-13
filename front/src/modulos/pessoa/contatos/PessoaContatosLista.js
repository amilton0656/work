import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import clienteAxios from '../../../config/axios'
import Swal from 'sweetalert2'
import { BsTrash } from 'react-icons/bs'
import { FaRegEdit } from 'react-icons/fa'
import { pessoasActions } from '../../../store/pessoaReducers'
import ListaIcones from '../../../components/ListaIcones'

import PessoaContatosCad from './PessoaContatosCad'

import './pessoaContatosLista.css'



const PessoaContatosLista = props => {

    const [icones, setIcones] = useState(false)
    const [contato, setContato] = useState('')
    const [contatos, setContatos] = useState([])

    const { token } = useSelector(state => state.login.login)

    const dispatch = useDispatch()

    const clickHandle = (contato) => {
        if (!icones) {
            document.getElementById('ck-contato').checked = false
        }
        setIcones(!icones)
        setContato(contato)
    }

    const novoContatoHandle = () => {
        console.log('novo')
        const elem = document.getElementById('ck-contato')
        console.log('novo', elem.checked)
        elem.checked = !elem.checked
        console.log('novo', elem.checked)
        setContato({})
    }

    const editContatoHandle = (contato) => {
        setIcones(false)
        const elem = document.getElementById('ck-contato')
        elem.checked = true
        setContato(contato)
        
    }

    const atualizar = () => {
        if (props.id_pessoa) {
            clienteAxios.get(`/pessoacontatos/${props.id_pessoa}`, { headers: { Authorization: token } })
                .then(resposta => {
                    setContatos(resposta.data)
                    dispatch(pessoasActions.loadContatos(resposta.data))
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
    }, [props.id_pessoa])



    return (

        <main className='contato-main'>
            <input id='ck-contato' type='checkbox'  />
            <div className='contato-container__header'>
                <div>Contatos</div>
                <label className='contato-button' onClick={novoContatoHandle}></label>
            </div>
            <PessoaContatosCad
                id_pessoa={props.id_pessoa}
                contato={contato}
                atualizar={atualizar}
                />
            <ul className='contato-items'>
                {
                    contatos.map(item => (
                        <li
                        className='contato-item' key={item.id_pessoa}
                        onClick={() => clickHandle(item)}
                        >
                            {item.contato}

                            {icones && contato.id_contato === item.id_contato &&
                                <ListaIcones
                                onClick1={() => editContatoHandle(item)}
                                onClick3={() => deletePessoaHandler(item.id_contato)}
                                />
                            }

                        </li>
                    ))
                }
            </ul>

        </main>
    );
}

export default PessoaContatosLista;