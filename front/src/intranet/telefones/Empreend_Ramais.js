import React, { useState } from 'react'

const Empreend_Ramais = () => {

    const [mostrar, xMostrar] = useState(false)

    return (
        <div>

            <div className="intra-card btn"
                style={{
                    background: 'steelBlue',
                    // width: '100%',
                    padding: '7px',
                    fontSize: '20px',
                    marginBottom: '4px',
                    fontWeigt: 'bold',
                    marginTop: '0',
                    justifyContent: 'flex-start',
                    color: 'white'
                }}
                onClick={() => xMostrar(!mostrar)}

            >Ramais <span style={{ padding: '5px' }}><i class="fas fa-phone"></i></span>

            </div>

            {
                mostrar
                    ? <div style={{ marginTop: '10px' }}>
                        <ul class="list-group">
                            <li class="list-group-item">250 - Amilton</li>
                            <li class="list-group-item">246 - Antônio</li>
                            <li class="list-group-item">203 - Cinira</li>
                            <li class="list-group-item">224 - Copa</li>
                            <li class="list-group-item">252 - David</li>
                            <li class="list-group-item">208 - Eugênio</li>
                            <li class="list-group-item">215 - Fabio</li>
                            <li class="list-group-item">201 - Heliane</li>
                            <li class="list-group-item">248 - Lidia</li>
                            <li class="list-group-item">211 - Liliane</li>
                            <li class="list-group-item">&nbsp;&nbsp;9 - Luize</li>
                            <li class="list-group-item">210 - Marco</li>
                            <li class="list-group-item">213 - Michelli</li>
                            <li class="list-group-item">212 - Paulão</li>
                            <li class="list-group-item">214 - S. Reuniões</li>
                            <li class="list-group-item">255 - Sueli</li>
                            <li class="list-group-item">202 - Tânia</li>
                            {/* <li class="list-group-item">207 - Vanessa</li>
                            <li class="list-group-item">210 - Zezo</li>
                            <li class="list-group-item">239 - Grasy</li>
                            <li class="list-group-item">237 - Eugênio</li>
                            <li class="list-group-item">246 - Marco</li> */}
                        </ul>

                    </div>
                    : null
            }
        </div>
    )
}

export default Empreend_Ramais