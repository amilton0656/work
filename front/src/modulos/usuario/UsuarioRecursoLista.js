import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import clienteAxios from '../../config/axios'

import ConsultaPadrao from '../../components/ConsultaPadrao'
import LoggedBar from '../../components/LoggedBar'

import './usuarioRecursoLista.css'

const UsuarioRecursoLista = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([])
    const [flg, setFlg] = useState(0)
    const [dataOrdem, setDataOrdem] = useState([])

    const { token } = useSelector(state => state.login.login)
    const id_usuario = useSelector(state => state.login.login.id_usuario)

    const navigate = useNavigate()

    const updHandle = usuRec => {

        console.log(usuRec)

        // event.preventDefault()

        clienteAxios.post('/usuariorecurso', usuRec , { headers: { Authorization: token } })
            .then(resposta => {
                // navigate('/usuario/lista', { state: true })
            })
            .catch(err => {
                console.log('Erro ao cadastrar ', err)
            })
    }

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

                if (item.id_recurso.length > 2) { multi = 100000000 }
                if (item.id_recurso.length > 4) { multi = 1000000 }
                if (item.id_recurso.length > 6) { multi = 10000 }
                if (item.id_recurso.length > 8) { multi = 100 }
                if (item.id_recurso.length > 10) { multi = 1 }

                indOrdem = (item.id_recurso * multi) + 1000000000000

                ordem.push({ indOrdem, ...item })
                setDataOrdem(ordem)
            })

            ordem.sort((a, b) => {
                if (a.indOrdem > b.indOrdem) { return 1 }
                if (a.indOrdem < b.indOrdem) { return -1 }
                return 0
            })

            return ordem

        }

    }

    useEffect(() => {
        getData(`/usuariorecursosall/${id_usuario}`)
    }, [])

    const clickHandle = (id_recurso) => {
        setData([])
        const index = data.findIndex((item) => item.id_recurso.toString() === id_recurso.toString() )

        const xxx = data
        xxx[index] = {...xxx[index], id: xxx[index].id ? null : xxx[index].id_recurso}

        setData(xxx)
        setFlg(flg+1)

        updHandle({id_usuario, id_recurso})

        // setData(xxx)


    }
    
    
    console.log(data)

    return (
        <>
            <div>
                <div>{flg}</div>
                {
                    data.map(item => (
                        <li
                            className={item.id > 0 ? 'usu-rec__linha usu-rec__bold' : 'usu-rec__linha'}
                            onClick={() => clickHandle(item.id_recurso)}
                        >
                            <div style={{ width: '100px', marginLeft: '10px' }}>{item.id}</div>
                            <div style={{ width: '100px', marginLeft: '10px' }}>{item.id_recurso}</div>
                            <div>{item.nm_recurso}</div>
                        </li>
                    ))
                }
            </div>
        </>
    );
}

export default UsuarioRecursoLista;