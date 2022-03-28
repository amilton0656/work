import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import clienteAxios from '../../../config/axios'
import Swal from 'sweetalert2'
import { BsTrash } from 'react-icons/bs'
import { FaRegEdit } from 'react-icons/fa'
import { pessoasActions } from '../../../store/pessoaReducers'
import ListaIcones from '../lista/ListaIcones'

import PessoaContatosCad from './PessoaContatosCad'

import './pessoaContatosLista.css'

const contatosx = [
    {
        id_contato: 1,
        contato: '3028 1000',
        observacao: 'cota',
        whatsapp: '0',
        id_tipo: 1
    },
    {
        id_contato: 2,
        contato: '99986 4257',
        observacao: '',
        whatsapp: '1',
        id_tipo: 1
    },
    {
        id_contato: 3,
        contato: 'amilton@cota.com.br',
        observacao: 'bla bla bla',
        whatsapp: '1',
        id_tipo: 1

    },
]

const PessoaContatosLista = props => {

    const [showCad, setShowCad] = useState(false)
    const [icones, setIcones] = useState(false)
    const [contato, setContato] = useState('')
    const [contatos, setContatos] = useState([])
    const [novo, setNovo] = useState(props.id_pessoa || '')

    const classe = showCad ? 'contato-showcad' : 'contato-hidecad'

    const { token } = useSelector(state => state.login.login)

    const { pessoa } = useSelector(state => state.pessoas)

    const abc = useSelector(state => state.pessoas.contatos)

    const dispatch = useDispatch()

    const clickHandle = (contato) => {
        setIcones(!icones)
        // setShowCad(false)
        setContato(contato)
    }

    const novoContatoHandle = () => {

        if (!pessoa) {
            props.addHandle()
            setNovo(1)
        }

        setShowCad(!showCad)
        setContato('')

    }

    const editContatoHandle = (contato) => {
        setIcones(false)
        setShowCad(true)
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
            <div className='contato-container__header'>
                <div>Contatos</div>
                <button
                    data-tool-tip='Cadastrar novo contato.'
                    type="button"
                    className={`contato-button ${classe}`}
                    onClick={novoContatoHandle}
                ></button>
            </div>
            {showCad && <PessoaContatosCad
                setShowCad={setShowCad}
                id_pessoa={props.id_pessoa}
                contato={contato}
                atualizar={atualizar}
            />}
            <ul className='items'>
                {
                    contatos.map(item => (
                        <li
                            className='item' key={item.id_pessoa}
                            onClick={() => clickHandle(item)}
                        >
                            {item.contato}


                            {icones && contato.id_contato === item.id_contato &&
                                <ListaIcones
                                    onClick1={() => editContatoHandle(item)}
                                    onClick3={() => deletePessoaHandler(item.id_contato)}
                                />
                            }

                            {/* {icones && contato.id_contato === item.id_contato &&
                                <div>
                                    <button type="button" onClick={() => editContatoHandle(item)}><FaRegEdit size={30} color='blue' /></button>
                                    <button type="button" onClick={() => deletePessoaHandler(item.id_contato)}><BsTrash size={30} color='red' /></button>
                                </div>
                            } */}

                        </li>
                    ))
                }
            </ul>

        </main>
    );
}

export default PessoaContatosLista;