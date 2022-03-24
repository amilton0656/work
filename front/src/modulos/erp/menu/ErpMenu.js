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
    sub2CityOfficeSquare,
    sub2GreenVillageResidence,
    sub2PuntaBlu,
    sub2PuntaBluMallBoutique,
    sub2PuntaBluResidence,
    sub2ImoveisTerceirosGrandeFpolis,
    sub2ImoveisTerceirosItajai,
    sub2ImoveisTerceirosBombinhas,
    sub2ShoppingMaxFloraLocacoes,
    sub2OutrosImoveis,
    sub2PuntaBluMallBoutiqueLocacoes,

    sub2Viabilidade,
    sub2PlanejamentoLancamento,

    sub2DocumentacaoEntrega,
    sub2Marketing,

    sub2Projeto,
    sub2Orcamento,
    sub2Cronograma,
    sub2Acompanhamento,
    sub2Obra,

    sub2ContasReceber,
    sub2ContasPagar,
    sub2IndicesEconomicos,
    sub2Contabilidade,
    sub2Simulacoes


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

            if (id === 'ck-0204' && element.checked === false) {
                document.getElementById('ck-020401').checked = false
                document.getElementById('ck-020402').checked = false
            }

            if (id === 'ck-020401' && element.checked === true) {
                document.getElementById('ck-020402').checked = false
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
        <ul key={`nv-${grupo}`} id={`nv-${grupo}`} className='nerp-nav__ul show not-show'>
            {
                items.map((item, i) => {
                    if (item.sub === true) {
                        return <ItemNivel02 key={i} item={item} />
                    } else {
                        if (item.navigate) {
                            return <SubMenuNavigate key={i} item={item} />
                        } else {
                            return <SubMenuLink key={i} item={item} />
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
            {item.id === '0203' && <Nivel03 grupo={item.id} items={sub2GreenVillageResidence} />}
            {item.id === '0204' && <Nivel03 grupo={item.id} items={sub2PuntaBlu} />}
            {item.id === '0205' && <Nivel03 grupo={item.id} items={sub2ImoveisTerceirosGrandeFpolis} />}
            {item.id === '0206' && <Nivel03 grupo={item.id} items={sub2ImoveisTerceirosItajai} />}
            {item.id === '0207' && <Nivel03 grupo={item.id} items={sub2ImoveisTerceirosBombinhas} />}
            {item.id === '0208' && <Nivel03 grupo={item.id} items={sub2ShoppingMaxFloraLocacoes} />}
            {item.id === '0209' && <Nivel03 grupo={item.id} items={sub2OutrosImoveis} />}
            {item.id === '0210' && <Nivel03 grupo={item.id} items={sub2PuntaBluMallBoutiqueLocacoes} />}

            {item.id === '0301' && <Nivel03 grupo={item.id} items={sub2Viabilidade} />}
            {item.id === '0302' && <Nivel03 grupo={item.id} items={sub2PlanejamentoLancamento} />}

            {item.id === '0404' && <Nivel03 grupo={item.id} items={sub2DocumentacaoEntrega} />}
            {item.id === '0405' && <Nivel03 grupo={item.id} items={sub2Marketing} />}

            {item.id === '0501' && <Nivel03 grupo={item.id} items={sub2Projeto} />}
            {item.id === '0504' && <Nivel03 grupo={item.id} items={sub2Orcamento} />}
            {item.id === '0506' && <Nivel03 grupo={item.id} items={sub2Cronograma} />}
            {item.id === '0507' && <Nivel03 grupo={item.id} items={sub2Acompanhamento} />}
            {item.id === '0509' && <Nivel03 grupo={item.id} items={sub2Obra} />}

            {item.id === '0601' && <Nivel03 grupo={item.id} items={sub2ContasReceber} />}
            {item.id === '0602' && <Nivel03 grupo={item.id} items={sub2ContasPagar} />}
            {item.id === '0606' && <Nivel03 grupo={item.id} items={sub2IndicesEconomicos} />}
            {item.id === '0609' && <Nivel03 grupo={item.id} items={sub2Contabilidade} />}
            {item.id === '0620' && <Nivel03 grupo={item.id} items={sub2Simulacoes} />}
            
        </li>
    )
}

const Nivel03 = props => {

    const { grupo, items } = props

    return (
        <ul key={`nv-${grupo}`} id={`nv-${grupo}`} className='nerp-nav__ul show not-show'>
            {
                items.map((item, i) => {
                    if (item.sub === true) {
                        return <ItemNivel03 key={i} item={item} />
                    } else {
                        if (item.navigate) {
                            return <SubMenuNavigate key={i} item={item} />
                        } else {
                            return <SubMenuLink key={i} item={item} />
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
            {item.id === '020401' && <Nivel04 grupo={item.id} items={sub2PuntaBluMallBoutique} />}
            {item.id === '020402' && <Nivel04 grupo={item.id} items={sub2PuntaBluResidence} />}


        </li>
    )
}

const Nivel04 = props => {

    const { grupo, items } = props

    return (
        <ul key={`nv-${grupo}`} id={`nv-${grupo}`} className='nerp-nav__ul show not-show'>
            {
                items.map((item, i) => {
                    if (item.sub === true) {
                        return <ItemNivel04 key={i} item={item} />
                    } else {
                        if (item.navigate) {
                            return <SubMenuNavigate key={i} item={item} />
                        } else {
                            return <SubMenuLink key={i} item={item} />
                        }
                    }
                })
            }
        </ul>
    )
}

const ItemNivel04 = ({ item }) => {
    console.log('nivel 04 ', item.id, item)
    return (
        <li key={item.id} className='nerp-nav__li'>
            <Ico item={item} classe='nv04' />
        </li>
    )
}
const Nivel05 = props => {

    const { grupo, items } = props

    return (
        <ul key={`nv-${grupo}`} id={`nv-${grupo}`} className='nerp-nav__ul show not-show'>
            {
                items.map((item, i) => {
                    if (item.sub === true) {
                        return <ItemNivel05 key={i} item={item} />
                    } else {
                        if (item.navigate) {
                            return <SubMenuNavigate key={i} item={item} />
                        } else {
                            return <SubMenuLink key={i} item={item} />
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
            <div id='nerp-nav__dropdown-fundo' className='nerp-nav__dropdown-fundo' onClick={() => clickFundoHandle()}></div>

            <nav className='nerp-nav'>
                <ul className='nerp-nav__ul'>
                    {
                        items.map((item, i) => {
                            if (item.sub === true) {
                                return <ItemNivel01 key={i} item={item} />
                            } else {
                                if (item.navigate) {
                                    return <SubMenuNavigate key={i} item={item} />
                                } else {
                                    return <SubMenuLink key={i} item={item} />
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