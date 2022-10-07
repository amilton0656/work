import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import clienteAxios from '../../config/axios'
import {decode as base64_decode, encode as base64_encode} from 'base-64';



const TesteSiengeLista = () => {

    const [dataAll, setDataAll] = useState([])
    const [sieCount, sieCountSet] = useState(1000)
    const [sieOffset, OffsetSet] = useState(0)
    const [sieLimit, sieLimitSet] = useState(0)


    const token = ''

    const getData = (api) => {
        clienteAxios.get(api, { headers: { Authorization: token }, 
            params : { 'limit': 2, 'enterpriseId': 8, 'offset': 0 } })
            .then(resposta => {
                setDataAll(resposta.data.results)
                sieCountSet(resposta.data.resultSetMetadata.count)
                OffsetSet(resposta.data.resultSetMetadata.offset)
                sieLimitSet(resposta.data.resultSetMetadata.limit)
            })
            .catch(err => {
            })
    }



    useEffect(() => {
        getData('/sienge')
    }, [])



    return (
        <>
        {
            // metadata.offset
        }
            {
                dataAll.map((reg, i) => (
                    <div key={i}> ----      {reg.name} - {reg.commercialStock}</div>
                    // <div key={i}> ----      {reg.name} - {reg.cpf}</div>
                ))

            }
            <div>
                Teste Sienge 
            </div>

        </>
    );
}

export default TesteSiengeLista;