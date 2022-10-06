import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import clienteAxios from '../../config/axios'
import {decode as base64_decode, encode as base64_encode} from 'base-64';



const TesteSiengeLista = () => {

    const [dataAll, setDataAll] = useState([])

    const token = ''

    const getData = (api) => {
        clienteAxios.get(api, { headers: { Authorization: token } })
            .then(resposta => {
                setDataAll(resposta.data)
            })
            .catch(err => {
            })
    }



    useEffect(() => {
        getData('/sienge')
    }, [])

    console.log(dataAll)

    return (
        <>
            {
                dataAll.map((reg, i) => (
                    <div key={i}> ----      {reg.name} - {reg.cpf}</div>
                ))

            }
            <div>
                Teste Sienge 
            </div>

        </>
    );
}

export default TesteSiengeLista;