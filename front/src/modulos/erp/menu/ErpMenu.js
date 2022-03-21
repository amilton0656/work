import { useNavigate } from 'react-router-dom'
import './erpMenu.css'
import {
    items,
    subEmpreendimentos,
    subIncorporacao,
    subSimulacoes,
    subPessoas,
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

    sub2AmericaOfficenter

} from './ErpMenuItems'

import { IoMdArrowDropright } from 'react-icons/io'


const SubMenu = ({ items }) => {

    const navigate = useNavigate()

    const clickHandle = (path) => {
        if (path) {
            navigate(path)
        }
    }

    const onClickHandle = () => {}

    const abc = 1

    return (
        <>
            {
                items.map(item => {
                    {
                        if (!item.sub) {
                            return  <li><div onClick={() => clickHandle(item.navigate, navigate)}>{item.title}</div></li>
                        } else {
                            return (
                                <li onClick={() => onClickHandle(`ck-${item.id}`)}>
                                <input type='checkbox' id={`ck-${item.id}`} style={{ display: 'none' }} />
                                <span style={{ display: 'flex', alignItems: 'center' }}><IoMdArrowDropright
                                    id={`ico-${item.id}`}
                                    size={20}
                                    color='black'
                                />
                                    <span>{item.title}</span>
                                </span>
                                <ul className='erp-submenu' id={`sub-${item.id}`} >
                                    {item.id === '0101' && <SubMenu items={sub2AmericaOfficenter} />}
                                    </ul>
                                    </li>
                            )
                        }
                    }

                }

                        // <li><div onClick={() => clickHandle(item.navigate, navigate)}>{item.title}</div></li>
   

                )
            }
        </>
    )
}

const SubMenu2 = ({ items }) => {

    const navigate = useNavigate()

    const clickHandle = (path) => {
        if (path) {
            navigate(path)
        }
    }

    return (
        <>
            {
                items.map(item => (
                    <li><div onClick={() => clickHandle(item.navigate, navigate)}>{item.title}</div></li>
                ))
            }
        </>
    )
}

const ErpMenu = props => {



    const onClickHandle = id => {

        const elems = document.querySelectorAll('input')
        elems.forEach(element => {
            if (element.id !== id) {
                element.checked = false
            } else {
                element.checked = !element.checked
            }
        });
    }

    return (
        <>
            <nav className="erp-nav">
                <ul>
                    {
                        items.map(item => (
                            <li onClick={() => onClickHandle(`ck-${item.id}`)}>
                                <input type='checkbox' id={`ck-${item.id}`} style={{ display: 'none' }} />
                                <span style={{ display: 'flex', alignItems: 'center' }}><IoMdArrowDropright
                                    id={`ico-${item.id}`}
                                    size={20}
                                    color='black'
                                />
                                    <span>{item.title}</span>
                                </span>
                                <ul className='erp-submenu' id={`sub-${item.id}`} >
                                    {item.id === '0101' && <SubMenu items={subSimulacoes} />}
                                    {item.id === '0102' && <SubMenu items={subEmpreendimentos} />}
                                    {item.id === '0103' && <SubMenu items={subIncorporacao} />}
                                    {item.id === '0104' && <SubMenu items={subComercial} />}
                                    {item.id === '0105' && <SubMenu items={subEngenharia} />}
                                    {item.id === '0106' && <SubMenu items={subSuprimentos} />}
                                    {item.id === '0107' && <SubMenu items={subFinanceiro} />}
                                    {item.id === '0108' && <SubMenu items={subGerencial} />}
                                    {item.id === '0109' && <SubMenu items={subAdministracao} />}
                                    {item.id === '0110' && <SubMenu items={subSuporte} />}
                                    {item.id === '0111' && <SubMenu items={subUtilitarios} />}
                                    {item.id === '0112' && <SubMenu items={subQualidade} />}
                                    {item.id === '0113' && <SubMenu items={subSistema} />}
                                    {item.id === '0114' && <SubMenu items={subPessoas} />}
                                </ul>
                            </li>

                        ))
                    }

                </ul>
            </nav>
        </>
    )
}

export default ErpMenu;