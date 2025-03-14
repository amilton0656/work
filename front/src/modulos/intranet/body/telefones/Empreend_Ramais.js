import React, { useState } from 'react'
import { FaPhone } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

import './Empreend_Ramais.css'
import './Empreend_Telefones.css'
import Card from '../../../../components/Card'

const Empreend_Ramais = () => {

    const [mostrar, setMostrar] = useState(false)

    const clickFecharHandle = () => {
        const elem = document.getElementById('ckk-intra__ramais')
        elem.checked = false
    }

    return (
        <div>
            <input type='checkbox' id='ckk-intra__ramais' />
            <label
                className='intra-ramais__button'
                htmlFor='ckk-intra__ramais' style={{ marginRight: '20px' }}
            >
                <span style={{ marginRight: '20px' }}>Ramais</span>
                <FaPhone size={25} color='white' />
            </label>

            <div className="intra-ramais__card" onClick={() => setMostrar(!mostrar)}

            >


                {
                    1
                        ? <div className=''>
                            <Card styles={{ background: '#FAF0E6' }}>
                                <div onClick={clickFecharHandle}>
                                    <button type="button" style={{ width: '100%', border: 'none' }} onClick={() => setMostrar(!mostrar)}
                                    ><div className='intra-ramais__button-fechar' ><span style={{ fontSize: '1rem' }}>Fechar</span><AiOutlineClose size={20} color='grey' /></div>  </button>

                                </div>

                                <ul class="intra-ramais__items">
                                    <li>250 - Amilton</li>
                                    <li>207 - Ana Clara</li>
                                    <li>246 - Antônio</li>
                                    <li>212 - Camilla</li>
                                    <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9 - Carine</li>
                                    <li>203 - Cinira</li>
                                    <li>224 - Copa</li>
                                    <li>252 - David</li>
                                    <li>208 - Eugênio</li>
                                    <li>215 - Fabio</li>
                                    <li>213 - Guilherme</li>
                                    <li>201 - Heliane</li>
                                    <li>248 - Lidia</li>
                                    <li>211 - Liliane</li>
                                    <li>210 - Marco</li>
                                    <li>214 - Sala de Reuniões</li>
                                    <li>237 - Steffany</li>
                                    <li>255 - Sueli</li>
                                    <li>202 - Tânia</li>
                                    {/* <li>207 - Vanessa</li>
                            <li>210 - Zezo</li>
                            <li>239 - Grasy</li>
                            <li>237 - Eugênio</li>
                        <li>246 - Marco</li> */}
                                </ul>
                            </Card>

                        </div>
                        : null
                }
            </div>
        </div>
    )
}

export default Empreend_Ramais