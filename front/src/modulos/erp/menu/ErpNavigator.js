import { useNavigate } from 'react-router-dom'

import { useEffect, useState } from 'react'
import { IoMdArrowDropright } from 'react-icons/io'
import { IconContext } from "react-icons";

import clienteAxios from '../../../config/axios'

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

    const navigate = useNavigate()

    const clickHandle = (ckNivel, id, nav, link) => {

        let elem


        
        const elems = document.querySelectorAll(`.${ckNivel}`)
        
        elems.forEach(element => {
            if (element.id !== id) {
                element.checked = false
            } else {    
                
            }
        })
        
        // Desmarca os subgrupos
        const grupo = document.querySelectorAll(`input[id*=${id}]`)
        for ( var i = 0 ; i < grupo.length ; i++ )
        if (id !== grupo[i].id) {
            grupo[i].checked = false

        }

        if (nav) {
            navigate(nav)
        }

        if (link) {
            window.open(link, '_blank')
        }

    }

    const IconeLabel = ({ item }) => {

        const ckNivel = item.id_recurso.length > 1 ? `nv${item.id_recurso.length}` : 'nv2'
        const ckId = `ck-${item.id_recurso}`
        const isSub = checkSubItems(item.id_recurso)
        const thisOnClick = () => clickHandle(ckNivel, ckId, item.nav, item.link)

        return (
            <>
                {
                    isSub &&
                    <input type='checkbox' id={ckId} className={`check ck-mostrar ${ckNivel}`}  />
                }

                <span className='erp-nav__alinha-icone'>
                    {
                        isSub && (
                            <>
                                <IconContext.Provider value={{ className: "ico" }}>
                                    <div>
                                        <IoMdArrowDropright
                                            size={20}
                                            color='black'
                                        />
                                    </div>
                                </IconContext.Provider>
                            </>
                        )
                    }
                    <label
                        htmlFor={ckId}
                        className='erp-nav__label'
                        id={`ck-${item.id_recurso}`}
                        onClick={thisOnClick}
                    >
                        {item.nm_recurso}
                    </label>
                </span>
            </>
        )
    }

    const clickFundoHandle = () => {
        const check = document.getElementById('erp-nav__ck-show')
        check.checked = false
    }

    const clearGroupCheckboxes = (ckId) => {
        const allChecks = document.querySelectorAll(`input[id^=${ckId}`)

        console.log('allChecks', allChecks)

    }
    
    const clearAllCheckboxes = () => {
        const allChecks = document.querySelectorAll('input[id^=ck-1')

        for ( var i = 0 ; i < allChecks.length ; i++ )
        allChecks[i].checked = false;

    }

    return (
        <div>
            <input id='erp-nav__ck-show' type='checkbox' style={{ display: 'none' }}/>
            <label htmlFor='erp-nav__ck-show' style={{ position: 'fixed', zIndex: 100 }} href='111'>
                <div className='erp-menu__icone-container' onClick={() => clearAllCheckboxes()} >
                    <span className='erp-menu__icone-hamburger'></span>
                </div>
            </label>
            <div id='erp-nav__dropdown-fundo' className='erp-nav__dropdown-fundo' onClick={() => clickFundoHandle()}></div>

            <nav className='erp-nav'>
                <ul className='erp-nav__ul'>
                    {
                        recursos.filter(nivel01 => nivel01.id_recurso < 100).map(nivel01 => (
                            <li key={nivel01.id_recurso} className='erp-nav__li'>
                                <IconeLabel item={nivel01} />
                                <ul className=' ul-mostrar'>
                                    {
                                        recursos.filter(nivel02 => nivel02.id_recurso > ((nivel01.id_recurso * 100)) && nivel02.id_recurso < ((nivel01.id_recurso * 100) + 100)).map(nivel02 => (
                                            <li key={nivel02.id_recurso} className='erp-nav__li'>
                                                <IconeLabel item={nivel02} />
                                                <ul className=' ul-mostrar'>
                                                    {
                                                        recursos.filter(nivel03 => nivel03.id_recurso > ((nivel02.id_recurso * 100)) && nivel03.id_recurso < ((nivel02.id_recurso * 100) + 100)).map(nivel03 => (
                                                            <li key={nivel03.id_recurso} className='erp-nav__li'>
                                                                <IconeLabel item={nivel03} />
                                                                <ul className=' ul-mostrar'>
                                                                    {
                                                                        recursos.filter(nivel04 => nivel04.id_recurso > ((nivel03.id_recurso * 100)) && nivel04.id_recurso < ((nivel03.id_recurso * 100) + 100)).map(nivel04 => (
                                                                            <li key={nivel04.id_recurso} className='erp-nav__li'>
                                                                                <IconeLabel item={nivel04} />
                                                                                <ul className=' ul-mostrar'>
                                                                                    {
                                                                                        recursos.filter(nivel05 => nivel05.id_recurso > ((nivel04.id_recurso * 100)) && nivel05.id_recurso < ((nivel04.id_recurso * 100) + 100)).map(nivel05 => (
                                                                                            <li key={nivel05.id_recurso} className='erp-nav__li'>
                                                                                                <IconeLabel item={nivel05} />
                                                                                                <ul className=' ul-mostrar'>
                                                                                                    {
                                                                                                        recursos.filter(nivel06 => nivel06.id_recurso > ((nivel05.id_recurso * 100)) && nivel06.id_recurso < ((nivel05.id_recurso * 100) + 100)).map(nivel06 => (
                                                                                                            <li key={nivel06.id_recurso} className='erp-nav__li'>
                                                                                                                <IconeLabel item={nivel06} />
                                                                                                            </li>
                                                                                                        ))
                                                                                                    }
                                                                                                </ul>
                                                                                            </li>
                                                                                        ))
                                                                                    }
                                                                                </ul>
                                                                            </li>
                                                                        ))
                                                                    }
                                                                </ul>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </li>
                        )
                        )
                    }
                </ul>
            </nav>
        </div>
    );
}

export default ErpNavigator;