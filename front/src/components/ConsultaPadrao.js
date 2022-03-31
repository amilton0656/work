import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import clienteAxios from '../config/axios'
import Spinner from '../spinner/Spinner'
import Button from './Button'
import ListaIcones from '../modulos/pessoa/lista/ListaIcones'

const ConsultaPadrao = props => {
    
    const [data, setData] = useState([])
    const [dataAll, setDataAll] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [busca, setBusca] = useState('')
    const [icones, setIcones] = useState(false)
    const [id, setId] = useState('')

    const { api, fieldId, fieldName, fieldAux } = props

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
    }, [])

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

    const clickHandle = id => {

    }

    const goToForm = item => {

    }
    
    const FichaCadastral = id => {

    }  
    
    const deletePessoaHandle = id => {

    }

    return (
        <>
            <div className='pessoa-list__layout'>
                {isLoading && <Spinner />}
                <div className='pessoa-list__header'>
                    <h2>{props.title}</h2>
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
                                onClick={() => {}}
                            />
                        </div>
                        <div>
                            <Button
                                className='pessoa-list__header-button'
                                bg='grey'
                                title='Sair'
                                onClick={() => {}}
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
                                onChange={textHandle}
                                value={busca}
                            />
                        </div>
                    </div>
                </div>
                <ul className='pessoa-list__container-list'>

                    {
                        data.map((reg, i) => (
                            <div style={{ background: 'white' }}>
                                <div className='pessoa-list__item' key={i} onClick={() => clickHandle(reg[fieldId])} >
                                    <li
                                        className={icones && id === reg[fieldId] ? 'pessoa-list__linha pessoa-list__bold' : 'pessoa-list__linha'}

                                    >{reg[fieldName]}
                                    </li>

                                    {icones && id === reg[fieldId] &&
                                        <ListaIcones
                                            onClick1={() => goToForm(reg)}
                                            onClick2={() => FichaCadastral(reg[fieldId])}
                                            onClick3={() => deletePessoaHandle(reg[fieldId])}
                                        />
                                    }

                                </div>
                            </div>
                        )
                        )
                    }
                </ul>
            </div>
           
        </>
    );
}

export default ConsultaPadrao;