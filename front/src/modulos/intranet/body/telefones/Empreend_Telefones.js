import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import clienteAxios from '../../../../config/axios'

import { FiSearch } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'

import Input from '../../../../components/Input'
import Card from '../../../../components/Card'
import InputWithButton from '../../../../components/InputWithButton'

import Empreend_TelefonesNome from './Empreend_TelefonesNome'

import './Empreend_Telefones.css'
import ProponenteCadDados from '../../../pessoa/dados/PessoaCadDados'


const Empreend_Telefones = ({ history }) => {

    const [telefones, setTelefones] = useState([])
    const [mostrar, setMostrar] = useState(false)
    const [nomeAbuscar, setNomeAbuscar] = useState('')
    const [mostrarTelefones, setMostrarTelefones] = useState(false)
    const [print, setprint] = useState(false)

    const onSubmit = (e) => {

        e.preventDefault()
        console.log('foi telefone')

        clienteAxios.get(`/agendatelefonica/${nomeAbuscar}`)
            .then(resposta => {
                setMostrar(true)
                const contatos = resposta.data[0]
                setTelefones(contatos.contatos)
                setMostrarTelefones(true)
            })
            .catch(err => {
                console.log(err)
            })
    }


    const limparTelefones = () => (
        setNomeAbuscar(''),
        setMostrarTelefones(false)
    )

    const onChangeHandle = e => {
        setNomeAbuscar(e.target.value)
   
    }

    return (
        <div>
            <div className="intra-fones__main">
                <Card styles={{ background: '#7FFFD4' }}>

                    <form className='intra-fones__form'>
                        {/* <div className='intra-fones__busca-container'>
                            <div className='intra-fones__input-container'>
                                <label>Buscar Telefone:</label>
                                <input
                                    type="text"
                                    class="intra-fones__input"
                                    value={nomeAbuscar}
                                    onChange={e => setNomeAbuscar(e.target.value)}
                                />
                            </div>
                            <button type="submit" className='intra-fones__button intra-fones__button-inside'><FiSearch size={20} color='black' style={{margin: '40px 0 0 10px'}} /></button>

                        </div> */}
                        <InputWithButton
                            label = 'Buscar Telefone:'
                            id = 'nomeAbuscar'
                            value={nomeAbuscar}
                            onChange={onChangeHandle}
                            onClick={onSubmit}
                        >
                        <FiSearch size={20} color='black'/>
                        </InputWithButton>
                    </form>



                </Card>

            </div>

            {
                mostrarTelefones
                    ?
                    <div style={{ marginTop: '10px' }}>

                        <Card >
                            {mostrarTelefones &&
                                <div className='intra-fones__fecharfones-Container' onClick={() => limparTelefones()}>
                                    <button type="button" className='intra-fones__button' 
                                    ><span style={{ marginRight: '20px', paddingTop: '3px', color: 'grey' }}>Fechar</span>  <AiOutlineClose size={20} color='grey' /></button>

                                </div>

                            }
                            {
                                telefones
                                    ? telefones.map(pessoa => (
                                        mostrarTelefones
                                            ? <Empreend_TelefonesNome contatos={pessoa} />
                                            : null
                                    ))
                                    : <div style={{ padding: '10px', textAlign: 'center' }}>Nada encontrado</div>
                            }
                        </Card>
                    </div>
                    : null
            }

        </div>
    )
}
export default Empreend_Telefones