import React from 'react'
import Card from '../../../../components/Card'

import './Empreend_Modelo.css'

const EmpreendimentoModelo = ({ logo, fachada }) => {


    return (
        <div className="intra-empreend-container__card">

            <div className="intra-empreend-card">
                <Card stype ={{width: '95%'}}>
                    <a onClick={() => {}} href="#">
                        <div>
                            <div>
                                <img src={logo} className="intra-empreend-card-fluid" alt="foto" />
                            </div>
                            <div>
                                <img src={fachada} className="intra-empreend-card-fluid" alt="foto" />
                            </div>
                        </div>
                    </a>

                </Card>
            </div>

        </div>
    )
}

export default EmpreendimentoModelo