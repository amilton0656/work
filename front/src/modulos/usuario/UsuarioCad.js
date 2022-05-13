import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import clienteAxios from '../../config/axios'
import Form from '../../components/Form'
import Input from '../../components/Input'
import Button from '../../components/Button'
import RadioBox from '../../components/RadioBox'
import { FiSearch } from 'react-icons/fi'

import ListaAuxiliar from '../../components/ListaAuxiliar'
import LoggedBar from '../../components/LoggedBar'

import UsuarioEmpresasLista from './UsuarioEmpresasLista'
import UsuarioEmpreendimentosLista from './UsuarioEmpreendimentosLista'

import '../../css/cadastro.css'

const Header = props => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const getOutHandle = () => {
        navigate(-1)
    }

    return (
        <div className='cadastro__header-buttons'>
            <div className='cadastro__title'>Cadastro de Usuários</div>

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

const UsuarioCad = props => {

    const dispatch = useDispatch()

    const initialState = {
        pw_usuario: '',
        id_perfil: null,
        id_pessoa: null,
        nm_nick: '',
        nu_recurso_automatico: null,
        bloquear_registros: '0',
        fg_somente_seus: '0',
        id_setor: null,
        bloqueado: '0',
        email_notificacao: '',
        cotacm: 0,
        fg_receber_notificacao_projeto: 0,
        ck_entregaunidade: 0,
        app_id: '',
        suprimentos: 0,
        ck_webtab_max: 0,
        ck_webtab_outros: 0,
        ck_webtab_pbmall: 0,
    }

    const initialStateAuxiliar = {
        nomeUsuario: '',
        nomeSetor: ''
    }


    const { token } = useSelector(state => state.login.login)

    const navigate = useNavigate()

    const location = useLocation()

    const id_usuario = location.state

    const [formData, setFormData] = useState(initialState)
    const [formDataAuxiliar, setFormDataAuxiliar] = useState(initialStateAuxiliar)
    const [showAuxiliarPessoas, setShowAuxiliarPessoas] = useState(false)

    useEffect(() => {

        if (id_usuario) {
            clienteAxios.get(`/usuario/${id_usuario}`, { headers: { Authorization: token } })
                .then(resposta => {
                    const resp = resposta.data[0]

                    console.log('resposta ', resposta.data[0])

                    setFormDataAuxiliar({
                        nomeUsuario: resposta.data[0].nomeusuario,
                        nomeSetor: resposta.data[0].nomesetor
                    })

                    delete resp.nomeusuario
                    delete resp.nomesetor

                    resp.fg_somente_seus = resp.fg_somente_seus === null ? 0 : resp.fg_somente_seus

                    resp.bloquear_registros = resp.bloquear_registros === null ? 0 : resp.bloquear_registros

                    resp.bloqueado = resp.bloqueado === null ? 0 : resp.bloqueado
                    resp.cotacm = resp.cotacm === null ? 0 : resp.cotacm
                    resp.fg_receber_notificacao_projeto = resp.fg_receber_notificacao_projeto === null ? 0 : resp.fg_receber_notificacao_projeto
                    resp.ck_entregaunidade = resp.ck_entregaunidade === null ? 0 : resp.ck_entregaunidade
                    resp.suprimentos = resp.suprimentos === null ? 0 : resp.suprimentos
                    resp.ck_webtab_max = resp.ck_webtab_max === null ? 0 : resp.ck_webtab_max
                    resp.ck_webtab_outros = resp.ck_webtab_outros === null ? 0 : resp.ck_webtab_outros
                    resp.ck_webtab_pbmall = resp.ck_webtab_pbmall === null ? 0 : resp.ck_webtab_pbmall

                    setFormData(resp)

                })
                .catch(err => {
                    console.log('Erro ao buscar ', err)
                })
        }
    }, [])

    const addHandle = event => {

        event.preventDefault()

        alert('add')

        clienteAxios.post('/usuario/add', formData, { headers: { Authorization: token } })
            .then(resposta => {
                navigate('/usuario/lista', { state: true })
            })
            .catch(err => {
                console.log('Erro ao cadastrar ', err)
            })
    }

    const editHandle = event => {

        event.preventDefault()

        // alert('edit')
        console.log('formData', formData)

        clienteAxios.put('/usuario/upd', formData, { headers: { Authorization: token } })
            .then(resposta => {
                navigate('/usuario/lista', { state: true })
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

        if (event.target.name === 'fg_somente_seus') {
            dataEntered = event.target.value === '0' ? '1' : '0'
        }

        if (event.target.name === 'bloquear_registros') {
            dataEntered = event.target.value === '0' ? '1' : '0'
        }

        if (event.target.name === 'ck_entregaunidade') {
            dataEntered = event.target.value === '0' ? '1' : '0'
        }

        if (event.target.name === 'bloqueado') {
            dataEntered = event.target.value === '0' ? '1' : '0'
        }

        if (event.target.name === 'fg_receber_notificacao_projeto') {
            dataEntered = event.target.value === '0' ? '1' : '0'
        }

        if (event.target.name === 'suprimentos') {
            switch (event.target.id) {

                case 'suprimentos0':
                    dataEntered = '0'
                    break

                case 'suprimentos1':
                    dataEntered = '1'
                    break

                case 'suprimentos2':
                    dataEntered = '2'
                    break

                case 'suprimentos3':
                    dataEntered = '3'
                    break

                case 'suprimentos4':
                    dataEntered = '4'
                    break

                case 'suprimentos5':
                    dataEntered = '5'
                    break

                case 'suprimentos6':
                    dataEntered = '6'
                    break
            }
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

    const onClickButton = id_usuario ? editHandle : addHandle

    const clickSelectedHandle = (reg) => {

        setFormDataAuxiliar({
            ...formDataAuxiliar,
            nomeUsuario: reg.nome
        })
        setFormData({
            ...formData,
            id_pessoa: reg.id_pessoa
        })
    }

    console.log('formData', formData)
    console.log('xxxxx', formData.fg_somente_seus.toString() === '1')

    const aaa = formData.fg_somente_seus.toString() === '1'
    console.log('aaa', aaa)
    

    return (
        <>
            <LoggedBar />
            <div className='cadastro__container'>
                <main className='cadastro__main'>
                    <Header />
                    <Form className='cadastro__form'>

                        <div className='form-input-box-with-icon'>
                            {/* NomeUsuario */}
                            <Input
                                disabled
                                style={{ width: '90%' }}
                                label='Pessoa:'
                                type='text'
                                id='nomeUsuario'
                                name='nomeUsuario'
                                next='nm_nick'
                                value={formDataAuxiliar.nomeUsuario}
                                onChange={textHandler}
                                onKeyDown={e => nextField(e.keyCode, 'nm_nick')}
                            />
                            <div className='form-input-box-with-icon__icon' onClick={() => setShowAuxiliarPessoas(!showAuxiliarPessoas)}><FiSearch size={20} color='black' /></div>

                        </div>

                        <Input
                            className='w300'
                            label='Login:'
                            type='text'
                            id='nm_nick'
                            name='nm_nick'
                            next='pw_usuario'
                            value={formData.nm_nick}
                            onChange={textHandler}
                            onKeyDown={e => nextField(e.keyCode, 'pw_usuario')}
                        />

                        <Input
                            className='w300'
                            label='Senha:'
                            type='text'
                            id='pw_usuario'
                            name='pw_usuario'
                            next='fg_somente_seus'
                            value={formData.pw_usuario}
                            onChange={textHandler}
                            onKeyDown={e => nextField(e.keyCode, 'fg_somente_seus')}
                        />

                        {/* Apenas seus registros */}
                        <div className='form-checkboxBox'>
                            <input
                                type='checkbox'
                                className='form-input'
                                id="fg_somente_seus"
                                name="fg_somente_seus"
                                checked={formData.fg_somente_seus.toString() === '1' ? true : false}
                                onChange={textHandler}
                                value={formData.fg_somente_seus}
                            />
                            <label htmlFor="fg_somente_seus">Pode ver apenas os seus registros</label>
                        </div>

                        {/* Pode bloquear registros */}
                        <div className='form-checkboxBox'>
                            <input
                                type='checkbox'
                                className='form-input'
                                id="bloquear_registros"
                                name="bloquear_registros"
                                checked={formData.bloquear_registros.toString() === '0' ? false : true}
                                onChange={textHandler}
                                value={formData.bloquear_registros}
                            />
                            <label htmlFor="bloquear_registros">Pode bloquear registros</label>
                        </div>

                        <Input
                            className='w200'
                            label='Num Rotina para Login:'
                            type='number'
                            id='nu_recurso_automatico'
                            name='nu_recurso_automatico'
                            next='fg_somente_seus'
                            value={formData.nu_recurso_automatico}
                            onChange={textHandler}
                            onKeyDown={e => nextField(e.keyCode, 'fg_somente_seus')}
                        />
                        <div className='form-input-box-with-icon'>
                            {/* nomeSetor */}
                            <Input
                                disabled
                                style={{ width: '90%' }}
                                label='Setor:'
                                type='text'
                                id='nomeSetor'
                                name='nomeSetor'
                                next='nm_nick'
                                value={formDataAuxiliar.nomeSetor}
                                onChange={textHandler}
                                onKeyDown={e => nextField(e.keyCode, 'nm_nick')}
                            />
                            <div className='form-input-box-with-icon__icon' onClick={() => setShowAuxiliarPessoas(!showAuxiliarPessoas)}><FiSearch size={20} color='black' /></div>

                        </div>

                        {/* Usuário bloqueado */}
                        <div className='form-checkboxBox'>
                            <input
                                type='checkbox'
                                className='form-input'
                                id="bloqueado"
                                name="bloqueado"
                                checked={formData.bloqueado.toString() === '0' ? false : true}
                                onChange={textHandler}
                                value={formData.bloqueado}
                            />
                            <label htmlFor="bloqueado">Usuário bloqueado</label>
                        </div>

                        {/* Entrega de Unidade */}
                        <div className='form-checkboxBox'>
                            <input
                                type='checkbox'
                                className='form-input'
                                id="ck_entregaunidade"
                                name="ck_entregaunidade"
                                checked={formData.ck_entregaunidade.toString() === '0' ? false : true}
                                onChange={textHandler}
                                value={formData.ck_entregaunidade}
                            />
                            <label htmlFor="ck_entregaunidade">Entrega de Unidade</label>
                        </div>

                        {/* Email para Notificações */}
                        <Input
                            label='Email para Notificações:'
                            type='text'
                            id='email_notificacao'
                            name='email_notificacao'
                            next='fg_somente_seus'
                            value={formData.email_notificacao}
                            onChange={textHandler}
                            onKeyDown={e => nextField(e.keyCode, 'fg_somente_seus')}
                        />

                        {/* Não receber notificações de alterações nos projetos */}
                        <div className='form-checkboxBox'>
                            <input
                                type='checkbox'
                                className='form-input'
                                id="fg_receber_notificacao_projeto"
                                name="fg_receber_notificacao_projeto"
                                checked={formData.fg_receber_notificacao_projeto.toString() === '0' ? false : true}
                                onChange={textHandler}
                                value={formData.fg_receber_notificacao_projeto}
                            />
                            <label htmlFor="fg_receber_notificacao_projeto">Não receber notificações de alterações nos projetos</label>
                        </div>

                        {/* Suprimentos */}
                        <RadioBox
                            name='suprimentos'
                            label='Suprimentos:'
                            direction='column'
                        >
                            <div className='form-radioBoxLinha'>
                                <input
                                    type='radio'
                                    name='suprimentos'
                                    id="suprimentos0"
                                    onChange={textHandler}

                                    value={formData.suprimentos}
                                    checked={formData.suprimentos.toString() === "0"}
                                /><label htmlFor="suprimentos0">Nenhum</label>
                            </div>
                            <div className='form-radioBoxLinha'>
                                <input
                                    type='radio'
                                    name='suprimentos'
                                    id="suprimentos1"
                                    onChange={textHandler}
                                    value={formData.suprimentos}
                                    checked={formData.suprimentos.toString() === "1"}
                                /><label htmlFor="suprimentos1">Técnico</label>
                            </div>
                            <div className='form-radioBoxLinha'>
                                <input
                                    type='radio'
                                    name='suprimentos'
                                    id="suprimentos2"
                                    onChange={textHandler}
                                    value={formData.suprimentos}
                                    checked={formData.suprimentos.toString() === "2"}
                                /><label htmlFor="suprimentos2">Engenheiro</label>
                            </div>
                            <div className='form-radioBoxLinha'>
                                <input
                                    type='radio'
                                    name='suprimentos'
                                    id="suprimentos3"
                                    onChange={textHandler}
                                    value={formData.suprimentos}
                                    checked={formData.suprimentos.toString() === "3"}
                                /><label htmlFor="suprimentos3">Diretor Técnico</label>
                            </div>
                            <div className='form-radioBoxLinha'>
                                <input
                                    type='radio'
                                    name='suprimentos'
                                    id="suprimentos4"
                                    onChange={textHandler}
                                    value={formData.suprimentos}
                                    checked={formData.suprimentos.toString() === "4"}
                                /><label htmlFor="suprimentos4">Diretor Operacional</label>
                            </div>
                            <div className='form-radioBoxLinha'>
                                <input
                                    type='radio'
                                    name='suprimentos'
                                    id="suprimentos5"
                                    onChange={textHandler}
                                    value={formData.suprimentos}
                                    checked={formData.suprimentos.toString() === "5"}
                                /><label htmlFor="suprimentos5">Diretor Presidente</label>
                            </div>
                            <div className='form-radioBoxLinha'>
                                <input
                                    type='radio'
                                    name='suprimentos'
                                    id="suprimentos6"
                                    onChange={textHandler}
                                    value={formData.suprimentos}
                                    checked={formData.suprimentos.toString() === "6"}
                                /><label htmlFor="suprimentos6">Compras</label>
                            </div>
                        </RadioBox>

                        {id_usuario &&
                            <UsuarioEmpresasLista
                                id_usuario={id_usuario}
                                formData={formData}
                                addHandle={addHandle}
                            />}

                        {id_usuario &&
                            <UsuarioEmpreendimentosLista
                                id_usuario={id_usuario}
                                formData={formData}
                                addHandle={addHandle}
                            />}

                        <div style={{ marginTop: '20px', width: '100%', textAlign: 'center' }}>
                            <Button
                                className='w150'
                                title='Salvar'
                                onClick={onClickButton}
                            />
                        </div>
                    </Form>
                    {
                        showAuxiliarPessoas &&
                        <ListaAuxiliar
                            api='/pessoas/auxiliar'
                            field='nome'
                            onClickSelection={(reg) => clickSelectedHandle(reg)}
                            onClickClose={() => setShowAuxiliarPessoas(false)}
                        />
                    }
                </main>
            </div>
        </>
    );
}

export default UsuarioCad;