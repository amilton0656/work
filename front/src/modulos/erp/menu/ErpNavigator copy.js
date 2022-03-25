import { useEffect, useState } from 'react'

import clienteAxios from '../../../config/axios'

import Teste from '../../testes/Teste'

const nomeEmpresa = 'COTA Empreendimentos Imobiliários Ltda'

const ErpNavigator = () => {

    const [recursos, setRecursos] = useState([])

    const atualizar = () => {
        clienteAxios.get('/recursos')
            .then(resposta => {
                setRecursos(resposta.data)
            })
            .catch(err => {
            })
    }

    useEffect(() => {
        atualizar()
    }, [])

    const checkSubItems = (nivel) => {
        if (recursos.filter(item => item.id_recurso > ((nivel * 100)) && item.id_recurso < ((nivel * 100) + 100)).length > 0) {
            return true
        } else {
            return false
        }
    }

    const Item = props => {
        const itemAnterior = props.itemAnterior
        const itemAtual = props.itemAtual

        return (
            recursos.filter(itemAtual => itemAtual.id_recurso > ((itemAnterior.id_recurso * 100)) && itemAtual.id_recurso < ((itemAnterior.id_recurso * 100) + 100)).map(itemAtual => (
                <div style={{ background: 'white' }}>
                    <div className='pessoa-list__item' key={itemAtual.id_recurso} >
                        <li key={itemAtual.id_recurso} className='pessoa-list__linha'> {checkSubItems(itemAtual.id_recurso) ? '+' : ''}{itemAtual.nm_recurso}
                            {props.children}
                        </li>
                    </div>
                </div>
            ))
        )
    }

    return (
        <div className='pessoa-list__layout'>
            {recursos.length > 0 && <Teste lista={recursos} />}

            <ul className='pessoa-list__container-list'>
                {
                    recursos.filter(nivel01 => nivel01.id_recurso < 100).map(nivel01 => (
                        <div style={{ background: 'white' }}>
                            <div className='pessoa-list__item' key={nivel01.id_recurso} >
                                <li key={nivel01.id_recurso} className='pessoa-list__linha'>{checkSubItems(nivel01.id_recurso) ? '+' : ' '} {nivel01.nm_recurso}
                                    {
                                        recursos.filter(nivel02 => nivel02.id_recurso > ((nivel01.id_recurso * 100)) && nivel02.id_recurso < ((nivel01.id_recurso * 100) + 100)).map(nivel02 => (
                                            <div style={{ background: 'white' }}>
                                                <div className='pessoa-list__item' key={nivel02.id_recurso} >
                                                    <li key={nivel02.id_recurso} className='pessoa-list__linha'> {checkSubItems(nivel02.id_recurso) ? '+' : ''}{nivel02.nm_recurso}
                                                        {
                                                            recursos.filter(nivel03 => nivel03.id_recurso > ((nivel02.id_recurso * 100)) && nivel03.id_recurso < ((nivel02.id_recurso * 100) + 100)).map(nivel03 => (
                                                                <div style={{ background: 'white' }}>
                                                                    <div className='pessoa-list__item' key={nivel03.id_recurso} >
                                                                        <li key={nivel03.id_recurso} className='pessoa-list__linha'>{checkSubItems(nivel03.id_recurso) ? '+' : ''} {nivel03.nm_recurso}
                                                                            {
                                                                                recursos.filter(nivel04 => nivel04.id_recurso > ((nivel03.id_recurso * 100)) && nivel04.id_recurso < ((nivel03.id_recurso * 100) + 100)).map(nivel04 => (
                                                                                    <div style={{ background: 'white' }}>
                                                                                        <div className='pessoa-list__item' key={nivel04.id_recurso} >
                                                                                            <li key={nivel04.id_recurso} className='pessoa-list__linha'>{checkSubItems(nivel04.id_recurso) ? '+' : ''} {nivel04.nm_recurso}
                                                                                                {
                                                                                                    recursos.filter(nivel05 => nivel05.id_recurso > ((nivel04.id_recurso * 100)) && nivel05.id_recurso < ((nivel04.id_recurso * 100) + 100)).map(nivel05 => (
                                                                                                        <div style={{ background: 'white' }}>
                                                                                                            <div className='pessoa-list__item' key={nivel05.id_recurso} >
                                                                                                                <li key={nivel05.id_recurso} className='pessoa-list__linha'>{checkSubItems(nivel05.id_recurso) ? '+' : ''} {nivel05.nm_recurso}
                                                                                                                </li>


                                                                                                            </div>
                                                                                                        </div>
                                                                                                    ))
                                                                                                }
                                                                                            </li>


                                                                                        </div>
                                                                                    </div>
                                                                                ))
                                                                            }
                                                                        </li>


                                                                    </div>
                                                                </div>
                                                            ))
                                                        }
                                                    </li>


                                                </div>
                                            </div>
                                        ))
                                    }

                                </li>


                            </div>
                        </div>
                    )
                    )
                }
            </ul>
        </div>
    );
}

export default ErpNavigator;