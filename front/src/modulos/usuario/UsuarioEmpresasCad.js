import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import clienteAxios from '../../config/axios'
import RadioBox from '../../components/RadioBox'
import Input from '../../components/Input'
import Form from '../../components/Form'
import Button from '../../components/Button'
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

    const dispatch = useDispatch()

    useEffect(() => {
        if (props.empresa.id_empresa) {
            setFormData(props.empresa)
        } else {
            setFormData({ id_usuario: props.id_usuario, ...initialState })
        }
    }, [props.empresa])

    const addHandle = id_empresa => {

        clienteAxios.post('/usuarioempresas', 
            { id_usuario: props.id_usuario, id_empresa: id_empresa }, 
            { headers: { Authorization: token } 
        })
            .then(resposta => {
                // dispatch(pessoasActions.loadContatos(resposta.data))
            })
            .catch(err => {
                console.log('Erro ao cadastrar ', err)
            })

        // document.getElementById('ck-contato').checked = false
    }

    const editHandle = () => {

        console.log('indo ', formData)

        clienteAxios.put('/pessoacontato/upd', formData, { headers: { Authorization: token } })
            .then(resposta => {
                props.atualizar()
            })
            .catch(err => {
                console.log('Erro ao cadastrar ', err)
            })

        document.getElementById('ck-contato').checked = false
    }

    const textHandler = (event) => {

        let dataEntered = event.target.value

        if (event.target.name === 'tipo') {
            if (event.target.id === 'tipo1') {
                dataEntered = '1'
            } else {
                dataEntered = '2'
            }
        }

        if (event.target.name === 'whatsapp') {
            dataEntered = event.target.value === '0' ? '1' : '0'
        }

        setFormData({
            ...formData,
            [event.target.name]: dataEntered
        })
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

    const botao = !!formData.id_contato
        ? (
            <div style={{ marginTop: '20px', width: '100%', textAlign: 'center' }}>
                <Button
                    bg='rgba(0,128,0,0.8'
                    type='button'
                    className='w150'
                    title='Salvar Contato'
                    onClick={editHandle}
                />
            </div>

        )
        : (
            <div style={{ marginTop: '20px', width: '100%', textAlign: 'center' }}>
                <Button
                    bg='rgba(0,128,0,0.8'
                    type='button'
                    className='w150'
                    title='Salvar Contato'
                    onClick={addHandle}
                />
            </div>
        )

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
                        onChange={textHandler}
                    // onKeyDown={e => nextField(e.keyCode, 'nm_nick')}
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