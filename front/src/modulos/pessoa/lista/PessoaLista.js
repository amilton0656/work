import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import clienteAxios from '../../../config/axios'
import Swal from 'sweetalert2'
import Spinner from '../../../spinner/Spinner'
import Button from '../../../components/Button'
import { isMobile } from '../../../util/util'
import PrintPrint from '../../../components/PrintPrint'
import Cabecalho from '../../../components/Cabecalho'
import './pessoaLista.css'

import { pessoasActions } from '../../../store/pessoaReducers'
// import Nav from '../../proponente/nav/NavProponente'


import PessoaListaPdf from './PessoaListaPdf'
import PessoaFichaCadastral from './PessoaFichaCadastral'
import PessoaFichaCadastralPdf from './PessoaFichaCadastralPdf'
import ListaIcones from './ListaIcones'

const nomeEmpresa = 'COTA Empreendimentos Imobiliários Ltda'

const PessoaLista = () => {
    
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
        setIsLoading(true)
        clienteAxios.get('/pessoas', { headers: { Authorization: token } })
            .then(resposta => {
                setPessoas(resposta.data)
                setPessoasAll(resposta.data)
                dispatch(pessoasActions.loadPessoas(resposta.data))
                setIsLoading(false)
                dispatch(pessoasActions.setAtualizar(false))
            })
            .catch(err => {
                setIsLoading(false)
            })
    }

    useEffect(() => {
        atualizar()
        setGetLista(false)
    }, [])


    useEffect(() => {
        setPrint(false)
    }, [print])

    const deletePessoaHandler = id => {
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
                clienteAxios.delete(`/pessoa/del/${id}`)
                    .then(resposta => {
                        // atualizar()
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
                // dispatch(ac_descargaEmpreendimentosFiltrado(empreendimentos))
            }
            )
    }

    if (!pessoas) {
        return <div>Não há registros</div>
    }

    const goToForm = (pessoa) => {
        setGetLista(true)
        const id = pessoa ? pessoa.id_pessoa : null
        navigate('/pessoa/formdados', { state: id })
        dispatch(pessoasActions.setPessoa(pessoa))
    }

    const FichaCadastral = (id_pessoa) => {
        navigate('/pessoa/fichacadastral', {state: id_pessoa})

        // let formDataI
        // let formDataII


        // clienteAxios.get(`/pessoa/lista/id/${id_pessoa}`)
        //     .then(resposta => {
        //         const id_pessoa = resposta.data.id_pessoa
        //         formDataI = resposta.data

        //         clienteAxios.get(`/pessoacomplemento/lista/id/${id_pessoa}`)
        //             .then(resposta => {
        //                 if (resposta.data.length === 0) {
        //                     formDataII = {}
        //                 } else {
        //                     formDataII = resposta.data[0]
        //                 }

        //                 PessoaFichaCadastralPdf(formDataI, formDataII)

        //             })
        //             .catch(err => {
        //                 console.log('Erro ao buscar ', err)
        //             })
        //     })
        //     .catch(err => {
        //         console.log('Erro ao buscar ', err)
        //     })
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
                    <h2>Pessoasxxx</h2>
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
                        pessoas.map(pessoa => (
                            <div style={{ background: 'white' }}>
                                <div className='pessoa-list__item' key={pessoa.id_pessoa} onClick={() => clickHandle(pessoa.id_pessoa)} >
                                    <li
                                        className={icones && id === pessoa.id_pessoa ? 'pessoa-list__linha pessoa-list__bold' : 'pessoa-list__linha'}

                                    >{pessoa.nome}
                                    </li>

                                    {icones && id === pessoa.id_pessoa &&
                                        <ListaIcones
                                            onClick1={() => goToForm(pessoa)}
                                            onClick2={() => FichaCadastral(pessoa.id_pessoa)}
                                            onClick3={() => deletePessoaHandler(pessoa.id_pessoa)}
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
                            pessoas.map((pessoa, index) => (
                                <div style={{ background: 'white' }}>

                                    <div
                                        className={index > 0 && index % 38 === 0 ? 'pessoa-list__item page-break' : 'pessoa-list__item'}
                                        key={pessoa.id_pessoa}
                                        onClick={() => clickHandle(pessoa.id_pessoa)}
                                    >
                                        <li >
                                            {pessoa.nome}

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

export default PessoaLista;