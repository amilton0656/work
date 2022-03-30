import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import classes from './UsuarioCad.module.css'
import { usuariosActions } from '../../store/usuarioReducers'
import clienteAxios from '../../config/axios'

import Header from './HeaderUsuario'

const UsuarioCad = props => {

    const dispatch = useDispatch()

    const initialState = {
        nome: '',
        email: '',
        senha: '',

        pw_usuario: '',
        id_perfil: null,
        id_pessoa: null,
        nm_nick: '',
        nu_recurso_automatico: null,
        bloquear_registros: null,
        fg_somente_seus: null,
        id_setor: null,
        bloqueado: null,
        email_notificacao: '',
        cotacm: null,
        fg_receber_notificacao_projeto: null,
        ck_entregaunidade: null,
        app_id: '',
        suprimentos: null,
        ck_webtab_max: null,
        ck_webtab_outros: null,
        ck_webtab_pbmail: null,
    }

    const navigate = useNavigate()

    const location = useLocation()

    const [formData, setFormData] = useState(location.state || initialState)

    const textHandler = (event) => {

        let dataEntered = event.target.value
        if (event.target.name === 'nome') {
            dataEntered = dataEntered.toUpperCase()
        }

        setFormData({
            ...formData,
            [event.target.name]: dataEntered
        })

    }


    const submitHandler = event => {
        event.preventDefault()

        clienteAxios.post('/usuario/add', formData)
            .then(resposta => {
            })
            .catch(err => {
                console.log('Erro ao cadastrar')
            })

        setFormData(initialState)
        navigate('/usuario/lista', true)
    }

    const editHandler = () => {

        clienteAxios.put('/usuario/upd', formData)
            .then(resposta => {
                
            })
            .catch(err => {
                console.log('Erro ao cadastrar')
            })

        setFormData(initialState)
        navigate('/usuario/lista', true)
    }

    const botao = formData.id
        ? <button className={classes['botaoBox-button']} type="button" onClick={editHandler}>Salvar</button>
        : <button className={classes['botaoBox-button']} type="submit" >Salvar</button>

    
        // pw_usuario: Sequelize.STRING(10),
        // id_perfil: Sequelize.INTEGER,
        // id_pessoa: Sequelize.INTEGER,
        // nm_nick: Sequelize.STRING(30),
        // nu_recurso_automatico: Sequelize.INTEGER,
        // bloquear_registros: Sequelize.INTEGER,
        // fg_somente_seus: Sequelize.INTEGER,
        // id_setor: Sequelize.INTEGER,
        // bloqueado: Sequelize.INTEGER,
        // email_notificacao: Sequelize.STRING(100),
        // cotacm: Sequelize.INTEGER,
        // fg_receber_notificacao_projeto: Sequelize.INTEGER,
        // ck_entregaunidade: Sequelize.INTEGER,
        // app_id: Sequelize.STRING(100),
        // suprimentos: Sequelize.INTEGER,
        // ck_webtab_max: Sequelize.INTEGER,
        // ck_webtab_outros: Sequelize.INTEGER,
        // ck_webtab_pbmail: Sequelize.INTEGER,
    

    return (
        <div className={classes.container}>
        <Header />
        
        <main className={classes.main}>
            <h2>Cadastro</h2>
            <form onSubmit={submitHandler} className={classes.form}>

                {/* Nome */}
                <div className={classes.inputBox}>
                    <label htmlFor="nome">Nome:</label>
                    <input
                        className={classes['login-input']}
                        id="nome"
                        name="nome"
                        onChange={textHandler}
                        value={formData.nome}
                    />
                </div>

                {/* Email */}
                <div className={classes.inputBox}>
                    <label htmlFor="email">Email:</label>
                    <input
                        className={classes['login-input']}
                        id="email"
                        name="email"
                        onChange={textHandler}
                        value={formData.email}
                    />
                </div>

                {/* Senha */}
                <div className={classes.inputBox}>
                    <label htmlFor="senha">Senha:</label>
                    <input
                        className={classes['login-input']}
                        id="senha"
                        name="senha"
                        onChange={textHandler}
                        value={formData.senha}
                    />
                </div>

                <div className={classes.botaoBox}>
                    {botao}
                </div>
            </form>

        </main>
        </div>
    );
}

export default UsuarioCad;