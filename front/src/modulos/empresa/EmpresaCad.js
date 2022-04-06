import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import clienteAxios from '../../config/axios'
import Form from '../../components/Form'
import Input from '../../components/Input'
import Button from '../../components/Button'

const classes = ''

const Header = props => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const getOutHandle = () => {
        navigate(-1)
    }
    return (
        <div className='pessoa-container__header-buttons'>
            <h2 className='pessoa-main__title'>Cadastro de Empresas</h2>

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

const EmpresaCad = props => {

    const dispatch = useDispatch()

    const initialState = {
        nm_empresa: '',
        tx_logo: '',
        tx_local_imagem: '',
        tx_nome_imagem: '',
        id_empreendimento_empresa: null,
        apelido: '',
        fg_somente_seus: '0',
    }


    const { token } = useSelector(state => state.login.login)

    const navigate = useNavigate()

    const location = useLocation()

    const id_empresa = location.state

    const [formData, setFormData] = useState(initialState)

    useEffect(() => {

        if (id_empresa) {
            clienteAxios.get(`/empresa/${id_empresa}`, { headers: { Authorization: token } })
                .then(resposta => {
                    resposta.data.fg_somente_seus = resposta.data.fg_somente_seus === null ? 0 : resposta.data.fg_somente_seus
                    setFormData(resposta.data)
                })
                .catch(err => {
                    console.log('Erro ao buscar ', err)
                })
        }
    }, [])

    const addHandle = event => {

        event.preventDefault()

        clienteAxios.post('/empresa/add', formData, { headers: { Authorization: token } })
            .then(resposta => {
                navigate('/empresa/lista', { state: true })
            })
            .catch(err => {
                console.log('Erro ao cadastrar ', err)
            })
    }

    const editHandle = event => {

        event.preventDefault()

        clienteAxios.put('/empresa/upd', formData, { headers: { Authorization: token } })
            .then(resposta => {
                navigate('/empresa/lista', { state: true })
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

        if (event.target.name === 'nm_empresa' ||
            event.target.name === 'apelido') {
                dataEntered = event.target.value.toUpperCase()
        }

        if (event.target.name === 'fg_somente_seus') {
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

    const onClickButton=id_empresa ? editHandle : addHandle
    
    return (
        <div className='pessoa-container'>
            <main className='pessoa-main'>
                <Header />
                <Form className='pessoa-form'>

                    {/* Razão Social */}
                    <Input
                        label='Razão Social:'
                        type='text'
                        id='nm_empresa'
                        name='nm_empresa'
                        next='apelido'
                        value={formData.nm_empresa}
                        onChange={textHandler}
                        onKeyDown={e => nextField(e.keyCode, 'apelido')}
                    />

                    {/* Apelido */}
                    <Input
                        label='Apelido:'
                        type='text'
                        id='apelido'
                        name='apelido'
                        next='tx_nomeform'
                        value={formData.apelido}
                        onChange={textHandler}
                        onKeyDown={e => nextField(e.keyCode, 'tx_nomeform')}
                    />

                    {/* Somente os seus */}
                    <div className='form-checkboxBox'>
                        <input
                            type='checkbox'
                            className='form-input'
                            id="fg_somente_seus"
                            name="fg_somente_seus"
                            defaultChecked={formData.fg_somente_seus === null || 
                                            formData.fg_somente_seus.toString() === '0' ||
                                            formData.fg_somente_seus === false
                                            ? false : true}
                            onChange={textHandler}
                            value={formData.fg_somente_seus}
                        />
                        <label htmlFor="fg_somente_seus">Não mostrar:</label>
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
    );
}

export default EmpresaCad;