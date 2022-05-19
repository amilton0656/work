import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import clienteAxios from '../../config/axios'

import './usuarioRecursos.css'

const UsuarioRecursos = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([])
    const [dataOrdem, setDataOrdem] = useState([])

    const { token } = useSelector(state => state.login.login)

    const getData = (api) => {
        setIsLoading(true)
        clienteAxios.get(api, { headers: { Authorization: token } })
            .then(resposta => {
                ordenar(resposta.data)
                setData(ordenar(resposta.data))
                setIsLoading(false)
            })
            .catch(err => {
                setIsLoading(false)
            })
    }

    const ordenar = (data) => {
        if (data.length > 0) {

            let ordem = []
            data.map(item => {
        
                let indOrdem
                let multi = 10000000000
                
                if (item.id_recurso.length > 2) {multi = 100000000}
                if (item.id_recurso.length > 4) {multi = 1000000}
                if (item.id_recurso.length > 6) {multi = 10000}
                if (item.id_recurso.length > 8) {multi = 100}
                if (item.id_recurso.length > 10) {multi = 1}
                
                indOrdem = (item.id_recurso * multi) + 1000000000000
                
                ordem.push({indOrdem, ...item})
                setDataOrdem(ordem)
            })
            
            ordem.sort((a, b) => {
                if (a.indOrdem > b.indOrdem) { return 1}
                if (a.indOrdem < b.indOrdem) { return -1}
                return 0
            })

            return ordem
    
        }

    }

    useEffect(() => {
        getData('/recursos')
}, [])

    return ( 
        <div>
            {
                data.map(item => (
                    <li className='usu-rec__linha'>
                        <div style={{width: '30px', marginLeft: '10px', paddingRight: '10px'}}><input type="checkbox" /></div>
                        <div style={{width: '100px'}}>{item.id_recurso}</div>
                        <div>{item.nm_recurso}</div>
                    </li>
                ))
            }
        </div>
     )
}
 
export default UsuarioRecursos