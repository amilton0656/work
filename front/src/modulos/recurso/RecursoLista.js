import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import clienteAxios from '../../config/axios'
import Swal from 'sweetalert2'
import Spinner from '../../spinner/Spinner'
import Button from '../../components/Button'
import { isMobile } from '../../util/util'
import PrintPrint from '../../components/PrintPrint'
import Cabecalho from '../../components/Cabecalho'
// import './pessoaLista.css'

import Teste from '../testes/Teste'

import { pessoasActions } from '../../store/pessoaReducers'

const nomeEmpresa = 'COTA Empreendimentos Imobiliários Ltda'

const RecursoLista = () => {

    const [recursos, setRecursos] = useState([])
    const [recursosEditados, setRecursosEditados] = useState([])


    const atualizar = () => {
        clienteAxios.get('/recursos')
            .then(resposta => {
                setRecursos(resposta.data)
                console.log('resp ', resposta.data)
                // let editados = []
                // resposta.data.map((item) => {
                //     let num = parseInt(item.id_recurso_recurso)
                //     if (num < 100) {
                //         num = 10000000000 + (num * 100000000)
                //     } else if (num < 10000) {
                //         num = 10000000000 + (num * 1000000)
                //     } else if (num < 1000000) {
                //         num = 10000000000 + (num * 10000)
                //     } else if (num < 100000000) {
                //         num = 10000000000 + (num * 100)
                //     } else if (num < 10000000000) {
                //         num = 10000000000 + num
                //     }

                //     editados.push({ id: item.id_recurso, idEdit: num, nome: item.nm_recurso })
                //     console.log(num)
                // })
                // console.log(editados.sort(function (a, b) {
                //     return a.id - b.id;
                // }))
                // console.log('editados', editados)
                // setRecursos(editados)
            })
            .catch(err => {
            })
    }

    useEffect(() => {
        atualizar()
    }, [])

    useEffect(() => {


    }, [recursos])

    // if (!recursos.length > 0) {
    //     return null
    // } else {

    //     // const nivel01 = recursos.filter(item => item.id_recurso < 100)
    //     // console.log('nivel01', nivel01)


    // }





    return (
        <>
            <div className='pessoa-list__layout'>
                {recursos.length > 0 && <Teste lista={recursos} />}

                <ul className='pessoa-list__container-list'>
                    {
                        recursos.filter(nivel01 => nivel01.id_recurso < 100).map(nivel01 => (
                            <div style={{ background: 'white' }}>
                                <div className='pessoa-list__item' key={nivel01.id_recurso} >
                                    <li key={nivel01.id_recurso} className='pessoa-list__linha'> {nivel01.id_recurso} - {nivel01.nm_recurso}
                                        {
                                            recursos.filter(nivel02 => nivel02.id_recurso > ((nivel01.id_recurso * 100)) && nivel02.id_recurso < ((nivel01.id_recurso * 100) + 100)).map(nivel02 => (
                                                <div style={{ background: 'white' }}>
                                                    <div className='pessoa-list__item' key={nivel02.id_recurso} >
                                                    <li key={nivel02.id_recurso} className='pessoa-list__linha'> {nivel02.id_recurso} - {nivel02.nm_recurso}
                                                            {
                                                                recursos.filter(nivel03 => nivel03.id_recurso > ((nivel02.id_recurso * 100)) && nivel03.id_recurso < ((nivel02.id_recurso * 100) + 100)).map(nivel03 => (
                                                                    <div style={{ background: 'white' }}>
                                                                        <div className='pessoa-list__item' key={nivel03.id_recurso} >
                                                                        <li key={nivel03.id_recurso} className='pessoa-list__linha'> {nivel03.id_recurso} - {nivel03.nm_recurso}
                                                                                {
                                                                                    recursos.filter(nivel04 => nivel04.id_recurso > ((nivel03.id_recurso * 100)) && nivel04.id_recurso < ((nivel03.id_recurso * 100) + 100)).map(nivel04 => (
                                                                                        <div style={{ background: 'white' }}>
                                                                                            <div className='pessoa-list__item' key={nivel04.id_recurso} >
                                                                                            <li key={nivel04.id_recurso} className='pessoa-list__linha'> {nivel04.id_recurso} - {nivel04.nm_recurso}
                                                                                                    {
                                                                                                        recursos.filter(nivel05 => nivel05.id_recurso > ((nivel04.id_recurso * 100)) && nivel05.id_recurso < ((nivel04.id_recurso * 100) + 100)).map(nivel05 => (
                                                                                                            <div style={{ background: 'white' }}>
                                                                                                                <div className='pessoa-list__item' key={nivel05.id_recurso} >
                                                                                                                <li key={nivel05.id_recurso} className='pessoa-list__linha'> {nivel05.id_recurso} - {nivel05.nm_recurso}
                                                                                                                    </li>


                                                                                                                </div>
                                                                                                            </div>
                                                                                                        ))
                                                                                                    }
                                                                                                </li>


                                                                                            </div>
                                                                                        </div>
                                                                                    ))
                                                                                }
                                                                            </li>


                                                                        </div>
                                                                    </div>
                                                                ))
                                                            }
                                                        </li>


                                                    </div>
                                                </div>
                                            ))
                                        }

                                    </li>


                                </div>
                            </div>
                        )
                        )
                    }
                </ul>
            </div>

        </>
    );
}

export default RecursoLista;