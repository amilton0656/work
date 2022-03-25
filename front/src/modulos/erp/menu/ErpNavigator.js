import { useEffect, useState } from 'react'

import clienteAxios from '../../../config/axios'

import ErpMenuIcone from './ErpMenuIcone'

import './erpNavigator.css'

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

    const clickFundoHandle = () => {
        const check = document.getElementById('nerp-nav__ck-show')
        check.checked = false
    
    }

    const Item = props => {
        const itemAtual = props.itemAtual

        return (
            <div style={{ background: 'white' }}>
                <div className='pessoa-list__item' key={itemAtual.id_recurso} >
                    <li key={itemAtual.id_recurso} className='pessoa-list__linha'> {checkSubItems(itemAtual.id_recurso) ? '+' : ''}{itemAtual.nm_recurso}
                        {props.children}
                    </li>
                </div>
            </div>
        )
    }

    return (
        <div>
            <input id='nerp-nav__ck-show' type='checkbox' style={{ display: 'none' }} />
            <label htmlFor='nerp-nav__ck-show' style={{ position: 'fixed', zIndex: 100 }} >
                <ErpMenuIcone />
            </label>
            <div id='nerp-nav__dropdown-fundo' className='nerp-nav__dropdown-fundo' onClick={() => clickFundoHandle()}></div>

            <nav className='nerp-nav'>
                <ul className='pessoa-list__container-list'>
                    {
                        recursos.filter(nivel01 => nivel01.id_recurso < 100).map(nivel01 => (
                            <div style={{ background: 'white' }}>
                                <div className='pessoa-list__item' key={nivel01.id_recurso} >
                                    <li key={nivel01.id_recurso} className='pessoa-list__linha'>{checkSubItems(nivel01.id_recurso) ? '+' : ' '} {nivel01.nm_recurso}
                                        {
                                            recursos
                                                .filter(nivel02 => nivel02.id_recurso > ((nivel01.id_recurso * 100)) && nivel02.id_recurso < ((nivel01.id_recurso * 100) + 100))
                                                .map(nivel02 => (
                                                    <Item itemAtual={nivel02} >
                                                        {
                                                            recursos
                                                                .filter(nivel03 => nivel03.id_recurso > ((nivel02.id_recurso * 100)) && nivel03.id_recurso < ((nivel02.id_recurso * 100) + 100))
                                                                .map(nivel03 => (
                                                                    <Item itemAtual={nivel03} >
                                                                        {
                                                                            recursos
                                                                                .filter(nivel04 => nivel04.id_recurso > ((nivel03.id_recurso * 100)) && nivel04.id_recurso < ((nivel03.id_recurso * 100) + 100))
                                                                                .map(nivel04 => (
                                                                                    <Item itemAtual={nivel04} >
                                                                                        {
                                                                                            recursos
                                                                                                .filter(nivel05 => nivel05.id_recurso > ((nivel04.id_recurso * 100)) && nivel05.id_recurso < ((nivel04.id_recurso * 100) + 100))
                                                                                                .map(nivel05 => (
                                                                                                    <Item itemAtual={nivel05} >

                                                                                                    </Item>
                                                                                                ))
                                                                                        }
                                                                                    </Item>
                                                                                ))
                                                                        }
                                                                    </Item>
                                                                ))
                                                        }
                                                    </Item>
                                                ))
                                        }

                                    </li>


                                </div>
                            </div>
                        )
                        )
                    }
                </ul>
            </nav>
        </div>
    );
}

export default ErpNavigator;