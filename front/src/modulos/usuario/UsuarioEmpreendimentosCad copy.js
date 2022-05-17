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

    const dispatch = useDispatch()

    useEffect(() => {
        if (props.empreendimento.id_empreendimento) {
            setFormData(props.empreendimento)
        } else {
            setFormData({ id_pessoa: props.id_pessoa, ...initialState })
        }
    }, [props.empreendimento])

    const addHandle = event => {
        event.preventDefault()

        clienteAxios.post('/pessoacontato/add', formData, { headers: { Authorization: token } })
            .then(resposta => {
                // dispatch(pessoasActions.loadContatos(resposta.data))
            })
            .catch(err => {
                console.log('Erro ao cadastrar ', err)
            })

        document.getElementById('ck-contato').checked = false
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

        console.log(reg)

        setFormDataAuxiliar({
            ...formDataAuxiliar,
            nomeEmpreendimento: reg.nm_empreendimento
        })
        setFormData({
            ...formData,
            id_usuario: reg.id_usuario
        })
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
                        onChange={textHandler}
                    // onKeyDown={e => nextField(e.keyCode, 'nm_nick')}
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

export default UsuarioEmpreendimentosCad;