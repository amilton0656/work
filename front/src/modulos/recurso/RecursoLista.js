import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import clienteAxios from '../../config/axios'
import Swal from 'sweetalert2'
import Spinner from '../../spinner/Spinner'
import Button from '../../components/Button'
import { isMobile } from '../../util/util'
import PrintPrint from '../../components/PrintPrint'
import Cabecalho from '../../components/Cabecalho'
import '..//pessoa/lista/pessoaLista.css'

import { pessoasActions } from '../../store/pessoaReducers'

import ListaIcones from '../pessoa/lista/ListaIcones'

const nomeEmpresa = 'COTA Empreendimentos Imobiliários Ltda'

const RecursoLista = () => {
    
    const [recursos, setRecursos] = useState([])

    const [pessoasAll, setPessoasAll] = useState([])
    const [pessoas, setPessoas] = useState([])
    const [icones, setIcones] = useState(false)
    const [id, setId] = useState('')
    const [busca, setBusca] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [getLista, setGetLista] = useState(true)
    const [print, setPrint] = useState(false)
    
    let pagina = 0

    const navigate = useNavigate()

    const { token } = useSelector(state => state.login.login)

    const dispatch = useDispatch()

    const atualizar = () => {
        clienteAxios.get('/recursos',{ headers: { Authorization: token } })
            .then(resposta => {
                setRecursos(resposta.data)
            })
            .catch(err => {
            })
    }

    useEffect(() => {
        atualizar()
        setGetLista(false)
    }, [])


    useEffect(() => {
        setPrint(false)
    }, [print])

    const deleteHandler = id => {
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
                clienteAxios.delete(`/recurso/del/${id}`, { headers: { Authorization: token } })
                    .then(resposta => {
                        atualizar()
                    })
                    .catch(err => {
                        // dispatch(descargaEmpreendimentosError())
                    })

                Swal.fire(
                    'Excluído!'
                )
            }
        })

    }

    const clickHandle = (idClicked) => {

        if (idClicked === id) {
            setIcones(!icones)
        } else {
            setIcones(true)
            setId(idClicked)
        }
    }

    const textHandler = (event) => {
        setBusca(event.target.value.toUpperCase())
        onBuscar(event.target.value.toUpperCase())
    }

    const onBuscar = busca => {

        const filtra = new Promise((resolve, reject) => {

            resolve(
                pessoasAll.filter(function (pessoa) {
                    const pp = pessoa.nome
                    if (pp) {
                        return pp.toLowerCase().search(
                            busca.toLowerCase()) !== -1
                    }
                })
            )
        }

        )

        filtra
            .then(res => {
                setPessoas(res)
            }
            )
    }

    if (!recursos) {
        return <div>Não há registros</div>
    }

    const goToForm = (recurso) => {
        setGetLista(true)
        const id = recurso ? recurso.id_recurso : null
        navigate('/recurso/formdados', { state: id })
    }

    const FichaCadastral = (id_recurso) => {
        navigate('/pessoa/fichacadastral', {state: id_recurso})
 
    }

    const styleButton = {
        width: '80px',
        background: 'lightgreen',
        color: 'blue'
    }

    return (
        <>
            <div className='pessoa-list__layout'>
                {isLoading && <Spinner />}
                <div className='pessoa-list__header'>
                    <h2>Recursos</h2>
                    <div className='pessoa-list__header-buttons'>

                        <div>
                            <Button
                                className='pessoa-list__header-button'
                                bg='lightgreen'
                                c='green'
                                title='Novo'
                                onClick={() => goToForm(null)}
                            />
                        </div>
                        <div>
                            <Button
                                className='pessoa-list__header-button'
                                bg='green'
                                title='Imprimir'
                                // onClick={() => PessoaListaPdf(pessoas)}
                                onClick={() => setPrint(true)}
                            />
                        </div>
                        <div>
                            <Button
                                className='pessoa-list__header-button'
                                bg='grey'
                                title='Sair'
                                onClick={() => navigate('/', { replace: true })}
                            />
                        </div>

                    </div>
                    <div className='pessoa-list__busca'>

                        <div className='pessoa-list__input-box'>
                            <label htmlFor="busca">Busca:</label>
                            <input
                                className='form-input pessoa-list__input-busca'
                                id="busca"
                                name="busca"
                                onChange={textHandler}
                                value={busca}
                            />
                        </div>
                    </div>
                </div>
                <ul className='pessoa-list__container-list'>

                    {
                        recursos.map(recurso => (
                            <div style={{ background: 'white' }}>
                                <div className='recurso-list__item' key={recurso.id_recurso} onClick={() => clickHandle(recurso.id_recurso)} >
                                    <li
                                        className={icones && id === recurso.id_recurso ? 'recurso-list__linha recurso-list__bold' : 'recurso-list__linha'}

                                    >{recurso.id_recurso} - {recurso.nm_recurso}
                                    </li>

                                    {icones && id === recurso.id_recurso &&
                                        <ListaIcones
                                            onClick1={() => goToForm(recurso)}
                                            onClick2={() => FichaCadastral(recurso.id_recurso)}
                                            onClick3={() => deleteHandler(recurso.id_recurso)}
                                        />
                                    }

                                </div>
                            </div>
                        )
                        )
                    }
                </ul>
            </div>
            {
                print &&
                <PrintPrint>
                    <div style={{ padding: '30px ' }}>
                        <Cabecalho
                            nomeEmpresa={nomeEmpresa}
                            tituloDocumento='Relação de Pessoas'
                            pagina = {++pagina}
                        />
                        {
                            pessoas.map((recurso, index) => (
                                <div style={{ background: 'white' }}>

                                    <div
                                        className={index > 0 && index % 38 === 0 ? 'recurso-list__item page-break' : 'recurso-list__item'}
                                        key={recurso.id_recurso}
                                        onClick={() => clickHandle(recurso.id_recurso)}
                                    >
                                        <li >
                                            {recurso.id_recurso} - {recurso.nm_recurso}

                                        </li>

                                    </div>
                                        {index > 0 && index % 38 === 0 &&
                                            <Cabecalho
                                                nomeEmpresa={nomeEmpresa}
                                                tituloDocumento='Relação de Pessoas'
                                                pagina = {++pagina}
                                            />
                                        }
                                </div>
                            )
                            )
                        }

                    </div>
                </PrintPrint>
            }
        </>
    );
}

export default RecursoLista;