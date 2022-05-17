import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import clienteAxios from '../../config/axios'
import Input from '../../components/Input'
import Form from '../../components/Form'
import { FiSearch } from 'react-icons/fi'
import ListaAuxiliar from '../../components/ListaAuxiliar'

import './usuarioEmpresasCad.css'

const initialState = {
    id_usuario: null,
    id_empresa: null
}

const initialStateAuxiliar = {
    nomeEmpresa: ''
}

const UsuarioEmpresasCad = props => {

    const [formData, setFormData] = useState(props.empresa || initialState)
    const [formDataAuxiliar, setFormDataAuxiliar] = useState(initialStateAuxiliar)
    const [showAuxiliarEmpresas, setShowAuxiliarEmpresas] = useState(false)

    const { token } = useSelector(state => state.login.login)

    useEffect(() => {
        setFormData({ id_usuario: props.id_usuario, id_empresa: null })
    }, [])

    const addHandle = id_empresa => {
        clienteAxios.post('/usuarioempresas', 
            { id_usuario: props.id_usuario, id_empresa: id_empresa }, 
            { headers: { Authorization: token } 
        })
            .then(resposta => {
                props.atualizar()
                setFormDataAuxiliar(initialStateAuxiliar)
                props.novoContatoHandle()
            })
            .catch(err => {
                console.log('Erro ao cadastrar ', err)
            })

            setFormDataAuxiliar(initialStateAuxiliar)
    }

    const clickSelectedHandle = (reg) => {

        setFormDataAuxiliar({
            ...formDataAuxiliar,
            nomeEmpresa: reg.nm_empresa
        })
        setFormData({
            ...formData,
            id_usuario: reg.id_usuario
        })

        addHandle(reg.id_empresa)
    }

    return (
        <main className='usuario-empresa-cad__main' style={{ paddingTop: '10px' }} >
            <Form className='form-form-100'>

                <div className='form-input-box-with-icon'>
                    {/* NomeUsuario */}
                    <Input
                        disabled
                        style={{ width: '90%' }}
                        label='Empresa:'
                        type='text'
                        id='nomeEmpresa'
                        name='nomeEmpresa'
                        next='nm_nick'
                        value={formDataAuxiliar.nomeEmpresa}
                    />
                    {
                        showAuxiliarEmpresas &&
                        <ListaAuxiliar
                            heightDrop='190vh'
                            topLista='620px'
                            api='/empresas'
                            field='nm_empresa'
                            onClickSelection={(reg) => clickSelectedHandle(reg)}
                            onClickClose={() => setShowAuxiliarEmpresas(false)}
                        />
                    }
                    <div className='form-input-box-with-icon__icon' onClick={() => setShowAuxiliarEmpresas(!showAuxiliarEmpresas)}><FiSearch size={20} color='black' /></div>

                </div>
            </Form>
        </main>
    );
}

export default UsuarioEmpresasCad;