import React, { useState, useEffect } from 'react'

import clienteAxios from '../../../../config/axios'

import Spinner from '../../../../spinner/Spinner'
import { convertToReal } from '../../../../util/util'
import PrintPrint from '../../../../components/PrintPrint'
import { AiOutlineClose } from 'react-icons/ai'
import { AiFillPrinter } from 'react-icons/ai'

import './MensagemCubPeriodo.css'
import ProponenteCadDados from '../../../pessoa/dados/PessoaCadDados'




const MensagemCubPeriodo = props => {


    const [meses, setMeses] = useState([])
    const [loading, setLoading] = useState(true)
    const [print, setPrint] = useState(false)

    useEffect(() => {

        indices()

    }, [])

    useEffect(() => {
        setPrint(false)
    }, [print])

    const indices = () => {

        console.log('entrou no indices')

        const dataAtual = new Date()
        const mesAtual = dataAtual.getMonth() + 1
        const anoAtual = dataAtual.getFullYear()
        const dataOne = (anoAtual - 1) + '-' + (mesAtual) + '-01'



        const dataTwo = (anoAtual) + '-' + (mesAtual) + '-01'

        setLoading(true)

        clienteAxios.post('/indicesintranetperiodo',
            {
                dataOne,
                dataTwo
            }
        )
            .then(resposta => {
                setMeses(resposta.data)
                setLoading(false)

            })
            .catch(err => {
            })
    }

    // const printHandle = () => {
    //     setPrint(true)
    //     setPrint(false)
    //     setTimeout(() => {
    //     }, 1000);
    // }

    const conteudo = (
        <div id='cub-periodo-print' style={{ marginTop: '15px', width: '100%' }}>

            <div className='printable'>
                <div className='intra-cub__tab'>
                    <div className='intra-cub__tab-cab'>Mês</div>
                    <div className='intra-cub__tab-cab'>Res-Valor</div>
                    <div className='intra-cub__tab-cab'>%</div>
                    <div className='intra-cub__tab-cab'>Com-Valor</div>
                    <div className='intra-cub__tab-cab'>%</div>
                </div>
                <div>
                </div>
            </div>


        </div>
    )

    const conteudo2 = meses.map(mes => (
        <div className='intra-cub__tab'>
            <div>{mes.indice_data.substring(5, 7)}/{mes.indice_data.substring(0, 4)}</div>
            <div>{convertToReal(mes.resvalor)}</div>
            <div>{convertToReal(mes.resindice)}</div>
            <div>{convertToReal(mes.comvalor)}</div>
            <div>{convertToReal(mes.comindice)}</div>
        </div>
    ))

    const titulo = (
        <div className="intra-cub__titulo" style={{ fontSize: '1rem' }}>
            <h3 style={{ textAlign: 'center' }}>CUB dos últimos 12 meses</h3>
        </div>
    )



    if (!meses.length > 0) return null

    return (
        <div>
            {titulo}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <button
                        className='intra-cub__periodo-button'
                        onClick={() => setPrint(true)}>
                        <span style={{ marginRight: '20px', color: 'grey' }}>
                            Imprimir
                        </span>
                        <AiFillPrinter size={20} color='grey'
                        /></button>

                </div>
                <div>
                    <button
                        className='intra-cub__periodo-button'
                        onClick={() => props.setMostrarMais(false)}>
                        <span style={{ marginRight: '20px', paddingTop: '3px', color: 'grey' }}>
                            Fechar
                        </span>
                        <AiOutlineClose size={20} color='grey'
                        /></button>
                </div>
            </div>
            {conteudo}
            {conteudo2}

            {
                print &&
                <PrintPrint>
                    <div style={{ padding: '30px ' }}>
                        {titulo}
                        {conteudo}
                        {conteudo2}

                    </div>
                </PrintPrint>
            }


        </div>

    )



}

export default MensagemCubPeriodo

