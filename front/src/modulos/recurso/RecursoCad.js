import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import clienteAxios from '../../config/axios'
import Form from '../../components/Form'
import Input from '../../components/Input'
import Button from '../../components/Button'
import LoggedBar from '../../components/LoggedBar'

import '../../css/cadastro.css'

const Header = props => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const getOutHandle = () => {
        navigate(-1)
    }
    return (
        <div className='cadastro__header-buttons'>
            <div className='cadastro__title'>Cadastro de Pessoa</div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <Button
                    className='w150'
                    bg='transparent'
                    c='white'
                    title='<<<  Voltar'
                    onClick={getOutHandle}
                    style={{ textAlign: 'right' }}
                    span='btn-span-right'
                />
            </div>
        </div>
    )
}

const RecursoCad = props => {

    const dispatch = useDispatch()

    const initialState = {
        nm_recurso: '',
        tx_uri: '',
        tx_nomeform: '',
        tx_nomeacao: '',
        ordem: null,
        menu: null,
        link: '',
        nav: '',
        notshow: 0,
    }


    const { token } = useSelector(state => state.login.login)

    const navigate = useNavigate()

    const location = useLocation()

    const id_recurso = location.state

    const [formData, setFormData] = useState(initialState)

    useEffect(() => {

        if (id_recurso) {
            console.log('vai buscar ', id_recurso)
            clienteAxios.get(`/recurso/${id_recurso}`, { headers: { Authorization: token } })
                .then(resposta => {
                    resposta.data.notshow = resposta.data.notshow === null ? 0 : resposta.data.notshow
                    setFormData(resposta.data)
                })
                .catch(err => {
                    console.log('Erro ao buscar ', err)
                })
        }
    }, [])

    const addHandle = event => {

        event.preventDefault()

        clienteAxios.post('/recurso/add', formData, { headers: { Authorization: token } })
            .then(resposta => {
                navigate('/recurso/lista', { state: true })
            })
            .catch(err => {
                console.log('Erro ao cadastrar ', err)
            })
    }

    const editHandle = event => {

        event.preventDefault()

        clienteAxios.put('/recurso/upd', formData, { headers: { Authorization: token } })
            .then(resposta => {
                navigate('/recurso/lista', { state: true })
            })
            .catch(err => {
                console.log('Erro ao atualizar')
            })

    }
    

    const onKeyPressHandle = e => {
        if (e.which === 13 || e.keyCode == 13) {
            alert('digitou enter')
        }
    }

    const textHandler = (event) => {

        let dataEntered = event.target.value

        if (event.target.name === 'notshow') {
            dataEntered = event.target.value === false ? '0' : '1'
        }

        setFormData({
            ...formData,
            [event.target.name]: dataEntered
        })
    }

    const nextField = (keyCode, field) => {
        if (keyCode == 13) {
            document.getElementById(field).focus()
        }
    }

    const onClickButton=id_recurso ? editHandle : addHandle

    console.log('o que veio ',formData.notshow)
    
    return (
        <>
        <LoggedBar />
        
        <div className='cadastro__container'>
            <main className='cadastro__main'>
                <Header />
                <Form className='cadastro__form'>

                    {/* ID */}
                    <Input
                        // disabled
                        label='Id:'
                        type='text'
                        id='id_recurso'
                        name='id_recurso'
                        next='nome'
                        value={formData.id_recurso || ''}
                        onChange={textHandler}
                        onKeyDown={e => nextField(e.keyCode, 'nome')}
                    />

                    {/* Descrição */}
                    <Input
                        label='Descrição:'
                        type='text'
                        id='nm_recurso'
                        name='nm_recurso'
                        next='tx_uri'
                        value={formData.nm_recurso}
                        onChange={textHandler}
                        onKeyDown={e => nextField(e.keyCode, 'tx_uri')}
                    />

                    {/* Uri */}
                    <Input
                        label='Uri:'
                        type='text'
                        id='tx_uri'
                        name='tx_uri'
                        next='tx_nomeform'
                        value={formData.tx_uri}
                        onChange={textHandler}
                        onKeyDown={e => nextField(e.keyCode, 'tx_nomeform')}
                    />

                    {/* Form */}
                    <Input
                        label='Form:'
                        type='text'
                        id='tx_nomeform'
                        name='tx_nomeform'
                        next='tx_nomeacao'
                        value={formData.tx_nomeform}
                        onChange={textHandler}
                        onKeyDown={e => nextField(e.keyCode, 'tx_nomeacao')}
                    />

                    {/* Ação */}
                    <Input
                        label='Ação:'
                        type='text'
                        id='tx_nomeacao'
                        name='tx_nomeacao'
                        next='ordem'
                        value={formData.tx_nomeacao}
                        onChange={textHandler}
                        onKeyDown={e => nextField(e.keyCode, 'ordem')}
                    />

                    {/* ordem */}
                    <Input
                        className='w100'
                        label='Ordem:'
                        type='number'
                        id='ordem'
                        name='ordem'
                        next='menu'
                        value={formData.ordem}
                        onChange={textHandler}
                        onKeyDown={e => nextField(e.keyCode, 'menu')}
                    />

                    {/* menu */}
                    <Input
                        className='w100'
                        label='Menu:'
                        type='number'
                        id='menu'
                        name='menu'
                        next='link'
                        value={formData.menu}
                        onChange={textHandler}
                        onKeyDown={e => nextField(e.keyCode, 'link')}
                    />

                    {/* link */}
                    <Input
                        label='Link:'
                        type='text'
                        id='link'
                        name='link'
                        next='nav'
                        value={formData.link}
                        onChange={textHandler}
                        onKeyDown={e => nextField(e.keyCode, 'nav')}
                    />

                    {/* nav */}
                    <Input
                        label='Navegação:'
                        type='text'
                        id='nav'
                        name='nav'
                        next='ordem'
                        value={formData.nav}
                        onChange={textHandler}
                        onKeyDown={e => nextField(e.keyCode, 'ordem')}
                    />

                    {/* Não mostrar */}
                    <div className='form-checkboxBox'>
                        <input
                            type='checkbox'
                            className='form-input'
                            id="notshow"
                            name="notshow"
                            defaultChecked={formData.notshow === null || 
                                            formData.notshow.toString() === '0' ||
                                            formData.notshow === false
                                            ? false : true}
                            onChange={textHandler}
                            value={formData.notshow}
                        />
                        <label htmlFor="notshow">Não mostrar:</label>
                    </div>
                    <div style={{ marginTop: '20px', width: '100%', textAlign: 'center' }}>
                    <Button
                        className='w150'
                        title='Salvar'
                        onClick={onClickButton}
                    />
                </div>
                </Form>
            </main>
        </div>
        </>
    )
}

export default RecursoCad;