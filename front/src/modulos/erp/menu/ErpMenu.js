import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { IconContext } from "react-icons";
import ErpMenuIcone from './ErpMenuIcone';
import {
    items,
    subSimulacoes,
    subEmpreendimentos,
    subIncorporacao,
    subComercial,
    subEngenharia,
    subSuprimentos,
    subFinanceiro,
    subGerencial,
    subAdministracao,
    subSuporte,
    subUtilitarios,
    subQualidade,
    subSistema,
    subPessoas,
    subTeste,

    sub2AmericaOfficenter,
    sub2CityOfficeSquare
} from './ErpMenuItems'
import { IoMdArrowDropright } from 'react-icons/io'

import './erpMenu.css'

const clickHandle = (nivel, id) => {

    let elem

    const elems = document.querySelectorAll(nivel)

    elems.forEach(element => {
        if (element.id !== id) {
            element.checked = false
        } else {
            element.checked = !element.checked

            if (id === 'ck-02' && element.checked === true) {
                document.getElementById('ck-0201').checked = false
                document.getElementById('ck-0202').checked = false
                document.getElementById('ck-0203').checked = false
                document.getElementById('ck-0204').checked = false
                document.getElementById('ck-0205').checked = false
                document.getElementById('ck-0206').checked = false
                document.getElementById('ck-0207').checked = false
                document.getElementById('ck-0208').checked = false
                document.getElementById('ck-0209').checked = false
                document.getElementById('ck-0210').checked = false
            }
        }

    })

}

const Ico = ({ item, classe }) => {
    return (
        <>
            <input type='checkbox' id={`ck-${item.id}`} className={classe} style={{ display: 'none' }} />
            <span className='nerp-nav__alinha-icone'>
                <IconContext.Provider value={{ className: "ico" }}>
                    <div>
                        <IoMdArrowDropright
                            id={`ico-${item.id}`}
                            size={20}
                            color='black'
                        />
                    </div>
                </IconContext.Provider>

                <span htmlFor={`ck-${item.id}`} onClick={() => clickHandle(`.${classe}`, `ck-${item.id}`)} style={{ paddingBottom: '4px' }}>{item.title}</span>
            </span>
        </>
    )
}



const ItemNivel01 = ({ item }) => {

    return (
        <li key={item.id} id={`sub-${item.id}`} className='nerp-nav__li' >
            <Ico item={item} classe='nv01' />
            {item.id === '01' && <Nivel02 grupo={item.id} items={subSimulacoes} />}
            {item.id === '02' && <Nivel02 grupo={item.id} items={subEmpreendimentos} />}
            {item.id === '03' && <Nivel02 grupo={item.id} items={subIncorporacao} />}
            {item.id === '04' && <Nivel02 grupo={item.id} items={subComercial} />}
            {item.id === '05' && <Nivel02 grupo={item.id} items={subEngenharia} />}
            {item.id === '06' && <Nivel02 grupo={item.id} items={subSuprimentos} />}
            {item.id === '07' && <Nivel02 grupo={item.id} items={subFinanceiro} />}
            {item.id === '08' && <Nivel02 grupo={item.id} items={subGerencial} />}
            {item.id === '09' && <Nivel02 grupo={item.id} items={subAdministracao} />}
            {item.id === '10' && <Nivel02 grupo={item.id} items={subSuporte} />}
            {item.id === '11' && <Nivel02 grupo={item.id} items={subUtilitarios} />}
            {item.id === '12' && <Nivel02 grupo={item.id} items={subQualidade} />}
            {item.id === '13' && <Nivel02 grupo={item.id} items={subSistema} />}
            {item.id === '14' && <Nivel02 grupo={item.id} items={subPessoas} />}
            {item.id === '15' && <Nivel02 grupo={item.id} items={subTeste} />}
        </li>
    )
}

const Nivel02 = props => {

    const { grupo, items } = props

    return (
        <ul id={`nv-${grupo}`} className='nerp-nav__ul not-show'>
            {
                items.map(item => {
                    if (item.sub === true) {
                        return <ItemNivel02 item={item} />
                    } else {
                        if (item.navigate) {
                            return <SubMenuNavigate item={item} />
                        } else {
                            return <SubMenuLink item={item} />
                        }
                    }
                })
            }
        </ul>
    )
}

const ItemNivel02 = ({ item }) => {
    return (
        <li key={item.id} className='nerp-nav__li'>
            <Ico item={item} classe='nv02' />
            {item.id === '0201' && <Nivel03 grupo={item.id} items={sub2AmericaOfficenter} />}
            {item.id === '0202' && <Nivel03 grupo={item.id} items={sub2CityOfficeSquare} />}


        </li>
    )
}

const Nivel03 = props => {

    const { grupo, items } = props

    return (
        <ul id={`nv-${grupo}`} className='nerp-nav__ul not-show'>
            {
                items.map(item => {
                    if (item.sub === true) {
                        return <ItemNivel03 item={item} />
                    } else {
                        if (item.navigate) {
                            return <SubMenuNavigate item={item} />
                        } else {
                            return <SubMenuLink item={item} />
                        }
                    }
                })
            }
        </ul>
    )
}

const ItemNivel03 = ({ item }) => {
    return (
        <li key={item.id} className='nerp-nav__li'>
            <Ico item={item} classe='nv03' />
            {/* {item.id === '020101' && <Nivel04 grupo={item.id} items={sub2AmericaOfficenterMais} />} */}


        </li>
    )
}

const Nivel04 = props => {

    const { grupo, items } = props

    return (
        <ul id={`nv-${grupo}`} className='nerp-nav__ul not-show'>
            {
                items.map(item => {
                    if (item.sub === true) {
                        return <ItemNivel04 item={item} />
                    } else {
                        if (item.navigate) {
                            return <SubMenuNavigate item={item} />
                        } else {
                            return <SubMenuLink item={item} />
                        }
                    }
                })
            }
        </ul>
    )
}

const ItemNivel04 = ({ item }) => {
    return (
        <li key={item.id} className='nerp-nav__li'>
            <Ico item={item} classe='nv04' />
        </li>
    )
}
const Nivel05 = props => {

    const { grupo, items } = props

    return (
        <ul id={`nv-${grupo}`} className='nerp-nav__ul not-show'>
            {
                items.map(item => {
                    if (item.sub === true) {
                        return <ItemNivel05 item={item} />
                    } else {
                        if (item.navigate) {
                            return <SubMenuNavigate item={item} />
                        } else {
                            return <SubMenuLink item={item} />
                        }
                    }
                })
            }
        </ul>
    )
}

const ItemNivel05 = ({ item }) => {
    return (
        <li key={item.id} className='nerp-nav__li'>
            <Ico item={item} classe='nv05' />
            {/* {item.id === '010201' && <Nivel02 items={sub2AmericaOfficenter} />} */}
        </li>
    )
}


const SubMenuNavigate = ({ item }) => {
    const navigate = useNavigate()
    return (
        <li key={item.id} className='nerp-nav__li nerp-nav__space' onClick={() => navigate(item.navigate)}>{item.title}</li>
    )
}

const SubMenuLink = ({ item }) => {
    return (
        <li key={item.id} id={`sub-${item.id}`} className='nerp-nav__li nerp-nav__space'><a href={item.link} target="_blank">{item.title}</a></li>
    )
}

const clickFundoHandle = () => {
    const check = document.getElementById('nerp-nav__ck-show')
    check.checked = false

}

// Menu = Nivel 01
const ErpMenu = ({ show }) => {

    useEffect(() => {
        const elem = document.getElementById('nerp-nav__ck-show')
        elem.checked = false
    }, [])

    return (
        <div>
            <input id='nerp-nav__ck-show' type='checkbox' style={{ display: 'none' }} />
            <label htmlFor='nerp-nav__ck-show' style={{ position: 'fixed', zIndex: 100 }} >
                <ErpMenuIcone />
            </label>
            <div id='nerp-nav__dropdown-fundo' className='nerp-nav__dropdown-fundo'  onClick={() => clickFundoHandle()}></div>

            <nav className='nerp-nav'>
                <ul className='nerp-nav__ul'>
                    {
                        items.map(item => {
                            if (item.sub === true) {
                                return <ItemNivel01 item={item} />
                            } else {
                                if (item.navigate) {
                                    return <SubMenuNavigate item={item} />
                                } else {
                                    return <SubMenuLink item={item} />
                                }
                            }
                        })
                    }
                </ul>
            </nav>
        </div>


    )

}

export default ErpMenu;