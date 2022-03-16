import React, { useState, useEffect } from 'react'

import clienteAxios from '../../../../config/axios'

import Spinner from '../../../../spinner/Spinner'
import { convertToReal } from '../../../../util/util'

import './MensagemCubPeriodo.css'

import PrintPrint from '../../../../components/PrintPrint'



const MensagemCubPeriodo = () => {


    const [meses, setMeses] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        indices()

    }, [])

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

    const printHandle = () => {

    }

    const conteudo = (
        <div id='cub-periodo-print' style={{ marginTop: '15px', width: '100%' }}>
            <div className='printable' style={{ display: 'flex', justifyContent: 'space-between' }}>
                {/* <h3 className='printable title'>Cub dos últimos 12 meses</h3> */}
                <button style={{border: 'none', background: 'transparent' }} onClick={printHandle}>Imprimir</button>
            </div>

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



    if (!meses.length > 0) return null

    return (
        <div>
            {conteudo}
            {conteudo2}

        </div>

    )



}

export default MensagemCubPeriodo

