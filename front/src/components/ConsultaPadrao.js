import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import clienteAxios from '../config/axios'
import Spinner from '../spinner/Spinner'
import Button from './Button'
import ListaIcones from '../modulos/pessoa/lista/ListaIcones'
import PrintPrint from './PrintPrint'
import Cabecalho from './Cabecalho'

import './consultaPadrao.css'

const ConsultaPadrao = props => {
    
    const [data, setData] = useState([])
    const [dataAll, setDataAll] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [busca, setBusca] = useState('')
    const [icones, setIcones] = useState(false)
    const [id, setId] = useState('')
    const [print, setPrint] = useState(false)

    let pagina = 0

    const { api, fieldId, fieldName, fieldAux,
            nomeEmpresa, tituloDocumento } = props

    const { token } = useSelector(state => state.login.login)

    const getData = (api) => {
        setIsLoading(true)
        clienteAxios.get(api, { headers: { Authorization: token } })
            .then(resposta => {
                setDataAll(resposta.data)
                setData(resposta.data)
                setIsLoading(false)
            })
            .catch(err => {
                setIsLoading(false)
            })
    }

    useEffect(() => {
        getData(api)
    }, [props.atualizar])

    const searchHandle = busca => {

        const filtra = new Promise((resolve, reject) => {

            resolve(
                dataAll.filter(function (reg) {
                    const pp = reg[fieldName]
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
                setData(res)
            }
            )
    }

    const textHandle = (event) => {
        setBusca(event.target.value.toUpperCase())
        searchHandle(event.target.value.toUpperCase())
    }

    const itemSelectedHandle = reg => {
        props.auxSelected(reg)
        props.setShowLista(false)
    }

    const clickHandle = (idClicked) => {

        if (idClicked === id) {
            setIcones(!icones)
        } else {
            setIcones(true)
            setId(idClicked)

        }

    }

    useEffect(() => {
        setPrint(false)
    }, [print])

    return (
        <>
            <div className='consulta-padrao__layout'>
                {isLoading && <Spinner />}
                <div className='consulta-padrao__header'>
                    <div className='consulta-padrao__title'>{props.title}</div>
                    <div className='consulta-padrao__header-buttons'>

                        <div>
                            <Button
                                className='consulta-padrao__header-button'
                                bg='lightgreen'
                                c='green'
                                title='Novo'
                                onClick={props.onClick1}
                            />
                        </div>
                        <div>
                            <Button
                                className='consulta-padrao__header-button'
                                bg='green'
                                title='Imprimir'
                                onClick={() => setPrint(true)}
                            />
                        </div>
                        <div>
                            <Button
                                className='consulta-padrao__header-button'
                                bg='grey'
                                title='Sair'
                                onClick={props.onClick3}
                            />
                        </div>

                    </div>
                    <div className='consulta-padrao__busca'>

                        <div className='consulta-padrao__input-box'>
                            <label htmlFor="busca">Busca:</label>
                            <input
                                className='form-input consulta-padrao__input-busca'
                                id="busca"
                                name="busca"
                                onChange={textHandle}
                                value={busca}
                            />
                        </div>
                    </div>
                </div>
                <ul className='consulta-padrao__container-list'>

                    {
                        data.map((reg, i) => (
                            <div style={{ background: 'white' }}>
                                <div className='consulta-padrao__item' key={i} onClick={() => clickHandle(reg[fieldId])} >
                                    <li
                                        className={icones && id === reg[fieldId] ? 'consulta-padrao__linha consulta-padrao__bold' : 'consulta-padrao__linha'}

                                    >{reg[fieldName]}
                                    </li>

                                    {icones && id === reg[fieldId] &&
                                        <ListaIcones
                                            onClick1={() => props.onClick11(reg)}
                                            onClick2={() => props.onClick12(reg[fieldId])}
                                            onClick3={() => props.onClick13(reg[fieldId])}
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
                            tituloDocumento={tituloDocumento}
                            pagina = {++pagina}
                        />
                        {
                            data.map((reg, index) => (
                                <div style={{ background: 'white' }}>

                                    <div
                                        className={index > 0 && index % 38 === 0 ? 'consulta-padrao__item page-break' : 'consulta-padrao__item'}
                                        key={reg[fieldId]}
                                        onClick={() => clickHandle(reg[fieldId])}
                                    >
                                        <li >
                                        {reg[fieldName]}

                                        </li>

                                    </div>
                                        {index > 0 && index % 38 === 0 &&
                                            <Cabecalho
                                                nomeEmpresa={nomeEmpresa}
                                                tituloDocumento={tituloDocumento}
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

export default ConsultaPadrao;