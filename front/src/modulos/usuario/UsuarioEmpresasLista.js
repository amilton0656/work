import React, { useState, useEffect } from 'react'
import { useSelector} from 'react-redux'
import clienteAxios from '../../config/axios'
import Swal from 'sweetalert2'
import ListaIcones from '../../components/ListaIcones'

import UsuarioEmpresasCad from './UsuarioEmpresasCad'

import './usuarioEmpresasLista.css'

const UsuarioEmpresasLista = props => {

    const [icones, setIcones] = useState(false)
    const [empresa, setEmpresa] = useState('')
    const [empresas, setEmpresas] = useState([])

    const { token } = useSelector(state => state.login.login)

    const clickHandle = (empresa) => {
        if (!icones) {
            document.getElementById('ck-usuario-empresa').checked = false
        }
        setIcones(!icones)
        setEmpresa(empresa)
    }

    const atualizar = () => {
        if (props.id_usuario) {
            clienteAxios.get(`/usuarioempresas/${props.id_usuario}`, { headers: { Authorization: token } })
                .then(resposta => {
                    setEmpresas(resposta.data)
                })
                .catch(err => {
                })
        }
    }

    const novoContatoHandle = () => {
        const elem = document.getElementById('ck-usuario-empresa')
        elem.checked = !elem.checked
        setEmpresa({})
        atualizar()
    }

    const deleteEmpresaHandler = item => {
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
                clienteAxios.delete(`/usuarioempresas/${item.id_usuario}/${item.id_empresa}`)
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
            <input id='ck-usuario-empresa' type='checkbox'  />
            <div className='contato-container__header'>
                <div>Empresas</div>
                <label className='contato-button' onClick={novoContatoHandle}></label>
            </div>
                {1 && <UsuarioEmpresasCad
                    id_usuario={props.id_usuario}
                    atualizar={atualizar}
                    novoContatoHandle={novoContatoHandle}
                    />}
            <ul className='contato-items'>
                {
                    empresas.map(item => (
                        <li
                        className='contato-item' key={item.id_empresa}
                        onClick={() => clickHandle(item)}
                        >
                            {item.nomeempresa}

                            {icones  &&
                                <ListaIcones
                                    onClick3={() => deleteEmpresaHandler(item)}
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