import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import classes from '../PessoaCad.module.css'
import clienteAxios from '../../../config/axios'
import { pessoasActions } from '../../../store/pessoaReducers'
import RadioBox from '../../../components/RadioBox'
import Input from '../../../components/Input'
import Form from '../../../components/Form'
import Button from '../../../components/Button'

import './pessoaContatosCad.css'

const initialState = {
    contato: '',
    observavao: '',
    whatsapp: '0',
    id_tipo: '1'
}
const PessoaContatosCad = props => {

    const [formData, setFormData] = useState(props.contato || initialState)

    const { token } = useSelector(state => state.login.login)

    const dispatch = useDispatch()

    useEffect(() => {
        if (props.contato.id_contato) {
            setFormData(props.contato)
        } else {
            setFormData({ id_pessoa: props.id_pessoa, ...initialState })
        }
    }, [props.contato])

    const addHandle = event => {
        event.preventDefault()

        clienteAxios.post('/pessoacontato/add', formData, { headers: { Authorization: token } })
            .then(resposta => {
                dispatch(pessoasActions.loadContatos(resposta.data))
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

 
        const botao = !!formData.id_contato
        ? (
            <div style={{ marginTop: '20px', width: '100%', textAlign: 'center' }}>
                <Button
                    bg = 'rgba(0,128,0,0.8'
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
                    bg = 'rgba(0,128,0,0.8'
                    type='button'
                    className='w150'
                    title='Salvar Contato'
                    onClick={addHandle}
                />
            </div>
        )
        
    return (
        <main className='pessoa-contato-cad__main' style ={{paddingTop: '10px'}} >
            <Form className='form-form-100'>

                <RadioBox
                    name='tipo_contato'
                    label='Tipo:'
                    direction='row'
                >
                    <div className='form-radioBoxLinha'>
                        <input
                            type='radio'
                            name='tipo'
                            id="tipo1"
                            onChange={textHandler}
                            value={formData.id_tipo}
                            checked={formData.id_tipo.toString() === "1"}
                        /><label htmlFor="tipo1">Telefone</label>
                    </div>

                    <div className='form-radioBoxLinha'>
                        <input
                            type='radio'
                            name='tipo'
                            id="tipo2"
                            onChange={textHandler}
                            value={formData.id_tipo}
                            checked={formData.id_tipo.toString() === "2"}
                        /><label htmlFor="tipo2">Email</label>

                    </div>
                </RadioBox>

                {/* Contato */}
                <Input
                    required
                    label='Contato:'
                    type='text'
                    id='contato'
                    name='contato'
                    value={formData.contato}
                    onChange={textHandler}
                />

                {/* Observação */}
                <Input
                    required
                    label='Observação:'
                    type='text'
                    id='observavao'
                    name='observavao'
                    value={formData.observavao}
                    onChange={textHandler}
                />

                {/* Whats */}
                <div className='form-checkboxBox'>
                    <input
                        type='checkbox'
                        className='form-input'
                        id="whatsapp"
                        name="whatsapp"
                        defaultChecked={formData.whatsapp.toString() === '0' ? false : true}
                        onChange={textHandler}
                        value={formData.whatsapp}
                    />
                    <label htmlFor="whatsapp">whatsApp:</label>
                </div>
                <div>
                    {botao}
                </div>
            </Form>
        </main>
    );
}

export default PessoaContatosCad;