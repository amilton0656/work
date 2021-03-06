import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import clienteAxios from '../../config/axios'
import Input from '../../components/Input'
import Form from '../../components/Form'
import { FiSearch } from 'react-icons/fi'
import ListaAuxiliar from '../../components/ListaAuxiliar'

import './usuarioEmpreendimentosCad.css'

const initialState = {
    id_usuario: null,
    id_empreendimento: null
}

const initialStateAuxiliar = {
    nomeEmpreendimento: ''
}

const UsuarioEmpreendimentosCad = props => {

    const [formData, setFormData] = useState(props.empreendimento || initialState)
    const [formDataAuxiliar, setFormDataAuxiliar] = useState(initialStateAuxiliar)
    const [showAuxiliarEmpreendimentos, setShowAuxiliarEmpreendimentos] = useState(false)

    const { token } = useSelector(state => state.login.login)

    useEffect(() => {
        setFormData({ id_usuario: props.id_usuario, id_empreendimento: null })
    }, [])

    const addHandle = id_empreendimento => {
        clienteAxios.post('/usuarioempreendimentos', 
            { id_usuario: props.id_usuario, id_empreendimento: id_empreendimento }, 
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
            nomeEmpreendimento: reg.nm_empreendimento
        })
        setFormData({
            ...formData,
            id_usuario: reg.id_usuario
        })

        addHandle(reg.id_empreendimento)
    }

    return (
        <main className='usuario-empreendimento-cad__main' style={{ paddingTop: '10px' }} >
            <Form className='form-form-100'>

                <div className='form-input-box-with-icon'>
                    {/* NomeUsuario */}
                    <Input
                        disabled
                        style={{ width: '90%' }}
                        label='Empreendimento:'
                        type='text'
                        id='nomeEmpreendimento'
                        name='nomeEmpreendimento'
                        next='nm_nick'
                        value={formDataAuxiliar.nomeEmpreendimento}
                    />
                    {
                        showAuxiliarEmpreendimentos &&
                        <ListaAuxiliar
                            heightDrop='190vh'
                            topLista='620px'
                            api='/empreendimentos'
                            field='nm_empreendimento'
                            onClickSelection={(reg) => clickSelectedHandle(reg)}
                            onClickClose={() => setShowAuxiliarEmpreendimentos(false)}
                        />
                    }
                    <div className='form-input-box-with-icon__icon' onClick={() => setShowAuxiliarEmpreendimentos(!showAuxiliarEmpreendimentos)}><FiSearch size={20} color='black' /></div>

                </div>
            </Form>
        </main>
    );
}

export default UsuarioEmpreendimentosCad