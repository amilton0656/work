import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import './IntranetHeader.css'
import logo from './img/logo-intra.png'
import predio from './img/predios.png'
import { FiMenu } from 'react-icons/fi'
import IntranetHeaderNav from './IntranetHeaderNav'
import IntranetDropdown from './IntranetDropdown'
import Modal from '../../../components/Modal'

import {
    menuEmpreendimentos,
    menuAdministrativo,
    menuBancos,
    menuNoticias,
    menuOrgaos,
    menuUteis,
    IntranetDropdownItems
} from './IntranetMenuItems';
import { FaRegBell, FaRegIdBadge } from 'react-icons/fa'

const style = {
    backgroundImage: `url(${logo})`
}



const MenuDropdown = props => {

    const navigate = useNavigate()

    const onClickHandle = (item) => {
        if (item === 7) {
            navigate('/erp')
        }
    }

    return (


        <nav id='intra-header__mob_dropdown' className='intra-header__nav-dropdown-mob'>
            <ul className='intra-header__nav-dropdown-mob-ul'>
                {
                    IntranetDropdownItems.map((item) => (
                        <li key={item.idItem} className='intra-header__nav-dropdown-mob-ul-li' onClick={() => onClickHandle(item.idItem)}>
                            <input id={`ck-${item.dropdown}`} type='checkbox' style={{ display: 'none' }} />
                            <label htmlFor={`ck-${item.dropdown}`} className='intra-header__nav-dropdown-mob-ul-li-label'>{item.title}</label>
                            {item.idItem === 1 && <SubMenuDropdown item={item} lista={menuEmpreendimentos} />}
                            {item.idItem === 2 && <SubMenuDropdown item={item} lista={menuAdministrativo} />}
                            {item.idItem === 3 && <SubMenuDropdown item={item} lista={menuNoticias} />}
                            {item.idItem === 4 && <SubMenuDropdown item={item} lista={menuBancos} />}
                            {item.idItem === 5 && <SubMenuDropdown item={item} lista={menuOrgaos} />}
                            {item.idItem === 6 && <SubMenuDropdown item={item} lista={menuUteis} />}
                        </li>
                    ))
                }
            </ul>
        </nav>


    )
}

const SubMenuDropdown = (props) => {
    return (

        <div id={`ck-${props.item.dropdown}-submenu`} onClick={() => {
            const check = document.getElementById(`ck-${props.item.dropdown}`)
            check.checked = false
        }}>
            <div>
                {/* <div className='intra-header__nav-dropdown-mob-ul-li-label-sub' style={{ height: '50px', padding: '20px' }}>
                {`<<<   Menu Intranet`}
                </div> */}
                <div
                    className='intra-header__nav-dropdown-mob-ul-li-label'
                    style={{
                        height: '50px',
                        padding: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        color: 'lightgreen',
                    }}

                >
                    <span style={{ display: 'block' }}>{props.item.title}</span>
                </div>

            </div>
            <ul className='intra-header__nav-dropdown-mob-ul' style={{ paddinTop: '50px' }}>


                {
                    props.lista.map((item, index) =>
                    (
                        <li key={index} className='ck-Empreendimentos__submenu-ul-li-sub'>
                            <a href={item.link} target="_blank" className='intra-header__nav-dropdown-mob-ul-li-label-sub' style={{ marginLeft: '30px' }}>{item.nome}</a>
                        </li>
                    )
                    )
                }
            </ul>
        </div>
    )

}



const IntranetHeader = () => {

    useEffect(() => {
        var lastScrollTop = 0
        const navbar = document.getElementById('intra-header_navbar')
        window.addEventListener('scroll', () => {
            fechaSubs()
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop
            if (scrollTop > lastScrollTop) {
                navbar.style.top = '-80px'
            } else {
                navbar.style.top = '0'
            }
            lastScrollTop = scrollTop
        }
        )

    }, [])

    const onClickButtonHandle = () => {

        const menuButton = document.getElementById('intra-header__nav-input-mob')

        if (!menuButton.checked) {
            IntranetDropdownItems.map((item) => {
                const check = document.getElementById(`ck-${item.dropdown}`)
                check.checked = false

            }
            )

        }

    }

    const onClickButtonHandle2 = () => {

        const check = document.getElementById('intra-header__nav-input-mob')
        check.checked = false

    }

    const fechaSubs = () => {
        const elems = document.querySelectorAll(`input[id*=ck-intra]`)
        for (var i = 0; i < elems.length; i++)
            elems[i].checked = false
    }

    return (
        <>
            <nav id='intra-header_navbar' className='intra-header__main' >
                {/* style={{ backgroundImage: `url(${predio})` }} */}
                <div className='intra-header__container-logo'>
                    <img src={logo} alt="" className="intra-header__logo" />
                </div>
                <nav className='intra-header__nav'>
                    <IntranetHeaderNav />
                </nav>

                <div className='intra-header__button-container' onClick={() => onClickButtonHandle()}>
                    <input id='intra-header__nav-input-mob' type='checkbox' />
                    <label htmlFor='intra-header__nav-input-mob' style={{ height: '60px' }}><FiMenu id="intra-header__button-menu" size={35} /></label>
                    <div id='intra-header__fundo' className='intra-header__dropdown-fundo' onClick={() => onClickButtonHandle2()}></div>
                    <MenuDropdown />
                </div>
            </nav>

        </>
    )
}

export default IntranetHeader