import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import clienteAxios from '../config/axios'
import Spinner from '../spinner/Spinner'
import Button from './Button'

import './listaAuxiliar.css' 

const Backdrop = props => {
    return (
        <div className="lista-aux__backdrop">
            {props.children}
        </div>
    )
}


const ListaAuxiliar = props => {

    const [data, setData] = useState([])
    const [dataAll, setDataAll] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [busca, setBusca] = useState('')

    const { api, field } = props

    const { token } = useSelector(state => state.login.login)

    const getData = (api) => {
        setIsLoading(true)
        clienteAxios.get(api, { headers: { Authorization: token } })
            .then(resposta => {
                setDataAll(resposta.data)
                setData(resposta.data)
                setIsLoading(false)
                console.log('ei chegou ', resposta.data)
            })
            .catch(err => {
                setIsLoading(false)
            })
    }

    useEffect(() => {
        getData(api)
    }, [])

    const searchHandle = busca => {

        const filtra = new Promise((resolve, reject) => {

            resolve(
                dataAll.filter(function (reg) {
                    const pp = reg[field]
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
        props.onClickSelection(reg)
        props.onClickClose()
    }

    if (data.lenght === 0) {
        return <div>
            Nenhum registro encontrado!
        </div>
    }

    return (
        <Backdrop setShowLista={props.setShowLista} >
            <div className='lista-aux__main'>
                <div className='lista-aux__container'>
                    {isLoading && <Spinner />}
                    <div className='lista-aux__busca'>

                        <div className='lista-aux__input-box'>
                            <label htmlFor="busca">Busca:</label>
                            <input
                                className='form-input lista-aux__input-busca'
                                id="busca"
                                name="busca"
                                onChange={textHandle}
                                value={busca}
                            />
                        </div>
                    </div>
                    <div className='lista-aux__container-lista'>
                        <ul className='lista-aux__lista'>
                            {
                                data.map((reg, i) => (
                                    <li key={i} className='lista-aux__linha' onClick={() => itemSelectedHandle(reg)}>{reg[field]}</li>
                                ))
                            }
                        </ul>

                    </div>
                    <div className='lista-aux__buttons'>

                        <div>
                            <Button
                                className='lista-aux__button'
                                bg='steelblue'
                                title='Selecionar'
                                onClick={() => itemSelectedHandle(null)}
                            />
                        </div>
                        <div>
                            <Button
                                className='lista-aux__button'
                                bg='gray'
                                title='Fechar'
                                onClick={() => props.onClickClose()}
                            />
                        </div>


                    </div>

                </div>
            </div>
        </Backdrop>

    )
}

export default ListaAuxiliar