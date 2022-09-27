import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {decode as base64_decode, encode as base64_encode} from 'base-64';



const TesteSiengeLista = () => {

    const [dataAll, setDataAll] = useState([])
    const [rrr, setrrr] = useState('999')

let encoded = base64_encode('xcotaemp-api:O5n3fO1Qi9HTm5JJgShjauNe53isi0s9');
let decoded = base64_decode(encoded);





    const api = 'https://api.sienge.com.br/cotaemp/public/api/v1/customers'

    const token = `cotaemp-api:O5n3fO1Qi9HTm5JJgShjauNe53isi0s9`
    const encodedToken = base64_encode('cotaemp-api:O5n3fO1Qi9HTm5JJgShjauNe53isi0s9')
    axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*'; 
    const headers = { 
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Authorization': 'Basic ' + encodedToken,
};


    // const getData =
    
    //     axios.get('https://api.sienge.com.br/cotaemp/public/api/v1/customers', { 'Access-Control-Allow-Origin' : '*', 'Authorization': 'Basic ' + encodedToken }
    //     )
    //         .then(resposta => {
    //             setDataAll(resposta.data)

    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })

            



    useEffect(() => {
        setrrr('entrou')
        console.log('enrou useeffect')

            axios.get('https://api.postmon.com.br/v1/cep/88080-250', 
            {
                headers: {
                  'Authorization': `Basic ${encodedToken}` ,
                //   'Access-Control-Allow-Origin': 'https://api.postmon.com.br',
                //   'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                }
            }
            )
                .then(resposta => {
                    // const { logradouro, bairro, cidade, estado } = resposta.data
                    setDataAll(resposta.data)
                    setrrr('sim')
    
                })

                .catch(err => {

                    setrrr('nao')
                })
    
        
        // axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
        // axios.get('https://api.sienge.com.br/cotaemp/public/api/v1/customers', {  }
        // )
        //     .then(resposta => {
        //         setDataAll(resposta.data)

        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
    }, [])

    return (
        <>
            {
                // dataAll.map((reg, i) => (
                //     <div style={{ background: 'white' }}></div>
                // ))

            }
            <div>
                Teste Sienge {rrr}
            </div>

        </>
    );
}

export default TesteSiengeLista;