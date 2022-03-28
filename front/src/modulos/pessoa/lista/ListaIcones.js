import React, {  useEffect, useState} from 'react'

import { BsTrash } from 'react-icons/bs'
import { FaRegEdit } from 'react-icons/fa'
import { FaRegFilePdf } from 'react-icons/fa'

import './listaIcones.css'

const ListaIcones = props => {

  const [show, setShow] = useState(true)


  useEffect(() => {

    const check = document.getElementById('checkIcones')
    check.checked = true

  }, [])


  const cssClasses = ['lista-icones', show ? 'lista-open' : 'lista-closed']

  return (
    <>
      <input id='checkIcones' type='checkbox' />
    <div className='lista-icones'>
      {
        props.onClick1 &&
        <button className='lista-icones__button' onClick={props.onClick1}><FaRegEdit size={30} color='blue' /></button>
      }
      {
        props.onClick2 &&
        <button className='lista-icones__button' onClick={props.onClick2}><FaRegFilePdf size={30} color='grey' /></button>
      }
      {
        props.onClick3 &&
        <button className='lista-icones__button' onClick={props.onClick3}><BsTrash size={30} color='red' /></button>    
      }
    </div>
    </>
  );
}

export default ListaIcones;