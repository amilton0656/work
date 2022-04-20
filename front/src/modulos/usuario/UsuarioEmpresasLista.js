import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import clienteAxios from '../../config/axios'
import Swal from 'sweetalert2'
import { BsTrash } from 'react-icons/bs'
import { FaRegEdit } from 'react-icons/fa'
// import { pessoasActions } from '../../../store/pessoaReducers'
import ListaIcones from '../../components/ListaIcones'

import UsuarioEmpresasCad from './UsuarioEmpresasCad'

import './usuarioEmpresasLista.css'

const UsuarioEmpresasLista = props => {

    const [icones, setIcones] = useState(false)
    const [empresa, setEmpresa] = useState('')
    const [empresas, setEmpresas] = useState([])

    const { token } = useSelector(state => state.login.login)

    const dispatch = useDispatch()

    const clickHandle = (empresa) => {
        if (!icones) {
            document.getElementById('ck-usuario-empresa').checked = false
        }
        setIcones(!icones)
        setEmpresa(empresa)
    }

    const novoContatoHandle = () => {
        const elem = document.getElementById('ck-usuario-empresa')
        elem.checked = !elem.checked
        setEmpresa({})
    }

    const editContatoHandle = (empresa) => {
        setIcones(false)
        const elem = document.getElementById('ck-usuario-empresa')
        elem.checked = true
        setEmpresa(empresa)
    }

    const atualizar = () => {
        if (props.id_usuario) {
            clienteAxios.get(`/usuarioempresas/${props.id_usuario}`, { headers: { Authorization: token } })
                .then(resposta => {
                    setEmpresas(resposta.data)
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
            <input id='ck-usuario-empresa' type='checkbox'  />
            <div className='contato-container__header'>
                <div>Empresas</div>
                <label className='contato-button' onClick={novoContatoHandle}></label>
            </div>
                {0 && <UsuarioEmpresasCad
                    id_pessoa={props.id_pessoa}
                    empresa={empresa}
                    atualizar={atualizar}
                    />}
            <ul className='contato-items'>
                {
                    empresas.map(item => (
                        <li
                        className='contato-item' key={item.id_empresa}
                        onClick={() => clickHandle(item)}
                        >
                            {item.nomeempresa}

                            {icones && 1 === item.id_usuario &&
                                <ListaIcones
                                onClick1={() => editContatoHandle(item)}
                                onClick3={() => deletePessoaHandler(item.id_empresa)}
                                />
                            }

                        </li>
                    ))
                }
            </ul>

        </main>
    );
}

export default UsuarioEmpresasLista;