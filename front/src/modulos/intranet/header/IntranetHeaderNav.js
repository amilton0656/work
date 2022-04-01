import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { IoMdArrowDropdown } from 'react-icons/io'

import './IntranetHeaderNav.css'

import {
    menuEmpreendimentos,
    menuAdministrativo,
    menuBancos,
    menuNoticias,
    menuOrgaos,
    menuUteis
} from './IntranetMenuItems';

const IntranetHeaderNav = () => {

    const navigate = useNavigate()

    const clickHandle = item => {
        const elems = document.querySelectorAll(`input[id*=ck-intra]`)
        for ( var i = 0 ; i < elems.length ; i++ )
        if (item !== (i + 1)) {
            elems[i].checked = false
        }
    }

    return (
        <ul className='intra-nav__dropdown'>
            <li key={1} className='intra-nav__dropdown-item'>
                <input id='ck-intranav01' type='checkbox' onClick={() => clickHandle(1)}/>
                <label htmlFor='ck-intranav01' href="#" className='intra-nav__dropdown-link'>
                    Empreendimentos<IoMdArrowDropdown size={20} color='black' /></label>
                <ul className='intra-nav__dropdown-submenu'>
                    {
                        menuEmpreendimentos.map((emp, i) => (
                            <li key={i} className='intra-nav__dropdown-submenu-item'>
                                <a href={emp.link} className='intra-nav__dropdown-submenu-link'>{emp.nome}</a>
                            </li>
                        ))
                    }
                </ul>
            </li>
            <li key={2} className='intra-nav__dropdown-item'>
                <input id='ck-intranav02' type='checkbox' onClick={() => clickHandle(2)} />
                <label htmlFor='ck-intranav02' href="#" className='intra-nav__dropdown-link'>
                    Administrativo<IoMdArrowDropdown size={20} color='black' /></label>
                <ul className='intra-nav__dropdown-submenu'>
                    {
                        menuAdministrativo.map((emp, i) => (
                            <li key={i} className='intra-nav__dropdown-submenu-item'>
                                <a href={emp.link} className='intra-nav__dropdown-submenu-link'>{emp.nome}</a>
                            </li>
                        ))
                    }
                </ul>
            </li>
            <li key={3} className='intra-nav__dropdown-item'>
                <input id='ck-intranav03' type='checkbox' onClick={() => clickHandle(3)} />
                <label htmlFor='ck-intranav03' href="#" className='intra-nav__dropdown-link'>
                    Notícias<IoMdArrowDropdown size={20} color='black' /></label>
                <ul className='intra-nav__dropdown-submenu'>
                    {
                        menuNoticias.map((emp, i) => (
                            <li key={i} className='intra-nav__dropdown-submenu-item'>
                                <a href={emp.link} className='intra-nav__dropdown-submenu-link' target="_blank">{emp.nome}</a>
                            </li>
                        ))
                    }
                </ul>
            </li>
            <li key={4} className='intra-nav__dropdown-item'>
                <input id='ck-intranav04' type='checkbox' onClick={() => clickHandle(4)} />
                <label htmlFor='ck-intranav04' href="#" className='intra-nav__dropdown-link'>
                    Bancos<IoMdArrowDropdown size={20} color='black' /></label>
                <ul className='intra-nav__dropdown-submenu'>
                    {
                        menuBancos.map((emp, i) => (
                            <li key={i} className='intra-nav__dropdown-submenu-item'>
                                <a href={emp.link} className='intra-nav__dropdown-submenu-link' target="_blank">{emp.nome}</a>
                            </li>
                        ))
                    }
                </ul>
            </li>
            <li key={5} className='intra-nav__dropdown-item'>
                <input id='ck-intranav05' type='checkbox' onClick={() => clickHandle(5)} />
                <label htmlFor='ck-intranav05' href="#" className='intra-nav__dropdown-link'>
                    Órgãos Públicos<IoMdArrowDropdown size={20} color='black' /></label>
                <ul className='intra-nav__dropdown-submenu'>
                    {
                        menuOrgaos.map((emp, i) => (
                            <li key={i} className='intra-nav__dropdown-submenu-item' >
                                <a href={emp.link} className='intra-nav__dropdown-submenu-link' target="_blank">{emp.nome}</a>
                            </li>
                        ))
                    }
                </ul>
            </li>
            <li key={6} className='intra-nav__dropdown-item'>
                <input id='ck-intranav06' type='checkbox' onClick={() => clickHandle(6)} />
                <label htmlFor='ck-intranav06' href="#" className='intra-nav__dropdown-link'>
                    Sites Úteis<IoMdArrowDropdown size={20} color='black' /></label>
                <ul className='intra-nav__dropdown-submenu'>
                    {
                        menuUteis.map((emp, i) => (
                            <li key={i} className='intra-nav__dropdown-submenu-item'>
                                <a href={emp.link} className='intra-nav__dropdown-submenu-link' target="_blank">{emp.nome}</a>
                            </li>
                        ))
                    }
                </ul>
            </li>
            <li key={7} className='intra-nav__dropdown-item' style={{paddingTop: '10px'}}>
                <Link className='intra-nav__dropdown-link' to='/erp'>Sistema</Link>
            </li>
        </ul>

    )
}

export default IntranetHeaderNav
