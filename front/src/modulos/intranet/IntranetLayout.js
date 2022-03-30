import React, { useState } from 'react'

import './IntranetLayout.css'
import IntranetHeader from './header/IntranetHeader'

import MensagensLista from './body/mensagens/MensagensLista'
import EmpreendsLista from './body/empreendimentos/EmpreendsLista'



const IntranetLayout = () => {



    const closeSubsHandle = () => {
        const elems = document.querySelectorAll(`input[id*=ck-intra]`)
        for ( var i = 0 ; i < elems.length ; i++ ) {
            elems[i].checked = false
        }
    }

    return (
        <>
            <div className='intra-main'  >

                <IntranetHeader />

                <div className='intra-body' onClick={() => closeSubsHandle()}>

                    <div className="intra-noticias">
                        <MensagensLista />
                    </div>

                    <div className="intra-empreendimentos">
                        <h1>Empreendimentos</h1>
                        <EmpreendsLista />
                    </div>
                </div>


                {/* <div className='intra-body'>

                    {
                        tamanhoTela > 700
                            ?
                            <div>
                                <div className="intra-noticias">

                                    <MensagensLista />
                                </div>
                                <div className="intra-empreendimentos">

                                    <EmpreendsLista />
                                </div>
                            </div>
                            :
                            <div>
                                <div className='intra-noticias'>

                                    <MensagensLista />
                                </div>
                                <div className="intra-empreendimentos">

                                    <div>
                                        <h3 style={{ textAlign: 'center' }}>Empreendimentos</h3>
                                    </div>

                                    <EmpreendsLista />
                                </div>
                            </div>
                    }
                </div> */}

            </div>
        </>
    )
}


export default IntranetLayout





