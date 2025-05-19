import React, { useState } from 'react'

// import './Mensagem.css'
import MensagemCub from './MensagemCub'
import MensagemText from './MensagemText'
import MensagemNiver from './MensagemNiver'
import MensagemNiver2 from './MensagemNiver2'
import MensagemImg from './MensagemImg'
import Empreend_Telefones from '../telefones/Empreend_Telefones'

const MensagensLista = () => {

    const [tamanhoTela, setTamanhoTela] = useState(window.innerWidth)

    window.addEventListener('resize', function () {
        setTamanhoTela(window.innerWidth)
    });

    return (
        <div>
            <MensagemCub />
            {
                tamanhoTela < 700
                    ? <div>
                        <Empreend_Telefones />
                    </div>
                    : null
            }

            {/* ************************ bolinho liliane */}
            <MensagemText
                titulo="Aniversário"
                data="19/05/2025"
                cor="#ff8026"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Liliane</span>,  comemorando seu aniversário, convida a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>, hoje, às 16:00, no 11º andar (recepção).
                </p>} />

            {/* ************************ niver Liliane */}
            <MensagemNiver
                titulo="Aniversário"
                data="19/05/2025"
                cor="#ff8026"
                img="img/aniv01.png"
                nome="LILIANE"
                local="(Diretoria)"
                dataExt="20/maio - Terça-feira"
            />


            {/* ************************ bolinho heliane */}
            <MensagemText
                titulo="Aniversário"
                data="28/04/2025"
                cor="#a7a3ab"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Marco</span>,  comemorando seu aniversário, convida a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>, hoje, às 16:00, no 11º andar (recepção).
                </p>} />

            {/* ************************ niver Heliane */}
            <MensagemNiver
                titulo="Aniversário"
                data="28/04/2025"
                cor="#a7a3ab"
                img="img/aniv04.png"
                nome="HELIANE"
                local="(Financeiro)"
                dataExt="26/abril - Sábado"
            />


            {/* ************************ bolinho Marco */}
            <MensagemText
                titulo="Aniversário"
                data="24/04/2025"
                cor="#ff8026"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Marco</span>,  comemorando seu aniversário, convida a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>, hoje, às 16:00, no 11º andar (recepção).
                </p>} />

            {/* ************************ niver Marco */}
            <MensagemNiver
                titulo="Aniversário"
                data="24/04/2025"
                cor="#ff8026"
                img="img/aniv08.png"
                nome="MARCO"
                local="(Diretor Técnico)"
                dataExt="24/Abril - Quinta-feira"
            />

            {/* ************************ bolinho Valentina */}
            <MensagemText
                titulo="Aniversário"
                data="14/03/2025"
                cor="#a7a3ab"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Valentina</span>, comemorando o seu aniversário, convida a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>, hoje, às 16:00, no 11º andar (recepção).
                </p>} />



            {/* ************************ niver Valentina */}
            <MensagemNiver
                titulo="Aniversário"
                data="14/03/2025"
                cor="#a7a3ab"
                img="img/aniv11.png"
                nome="VALENTINA"
                local="(Filha da Lidia)"
                dataExt="14/março - Sexta-feira"
            />


            {/* ************************ Expediente - Carnaval */}
            <MensagemText
                titulo="Expediente - Carnaval"
                data="13/02/2025"
                cor="#ff8026"
                texto={
                    <div className="card-text" style={{ fontSize: '1.5rem', color: 'blue' }}>

                        <br />
                        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: "#1a181b" }}>Administração/Assistência Técnica: </span>
                        <br /><br />
                        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4c4c4c' }}>Encerramento:</span>

                        <div style={{ display: 'flex', marginLeft: 40 }}>
                            <div style={{ marginTop: '20px', fontSize: '1.5rem', flex: 1 }}>
                                <div style={{ width: '400px' }}><span style={{ color: "#403d43", fontSize: '1.3rem' }}>Dia 28/02/2025</span></div>
                                <div style={{ width: '400px' }}><span style={{ color: "#403d43", fontSize: '1.3rem' }}>Sexta-feira - No horário normal </span></div>
                            </div>

                        </div>

                        <br />
                        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4c4c4c' }}>Retorno:</span>

                        <div style={{ display: 'flex', marginLeft: 40 }}>
                            <div style={{ marginTop: '20px', fontSize: '1.5rem', flex: 1 }}>
                                <div style={{ width: '400px' }}><span style={{ color: "#403d43", fontSize: '1.3rem' }}>Dia 05/03/2025</span></div>
                                <div style={{ width: '400px' }}><span style={{ color: "#403d43", fontSize: '1.3rem' }}>Quarta-feira - 13:30 </span></div>
                            </div>

                        </div>




                        <br />

                    </div>

                } />

            {/* ************************ bolinho Sueli */}
            <MensagemText
                titulo="Aniversário"
                data="05/02/2025"
                cor="#a7a3ab"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Sueli</span>,  comemorando o seu aniversário, convida a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>, hoje, às 16:00, no 11º andar (recepção).
                </p>} />



            {/* ************************ niver Sueli */}
            <MensagemNiver
                titulo="Aniversário"
                data="05/02/2025"
                cor="#a7a3ab"
                img="img/aniv01.png"
                nome="SUELI"
                local="(RH)"
                dataExt="05/fevereiro - Quarta-feira"
            />

            {/* ************************ bolinho Carine */}
            <MensagemText
                titulo="Aniversário"
                data="25/11/2024"
                cor="#ff8026"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Carine</span>,  comemorando seu aniversário, convida a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>, hoje, às 16:00, no 11º andar (recepção).
                </p>} />


            {/* ************************ niver Carine */}
            <MensagemNiver
                titulo="Aniversário"
                data="25/11/2024"
                cor="#ff8026"
                img="img/aniv11.png"
                nome="CARINE"
                local="(Recepção)"
                dataExt="24/novembro - Domingo"
            />


            {/* ************************ bolinho cinira */}
            <MensagemText
                titulo="Aniversário"
                data="18/11/2024"
                cor="#a7a3ab"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Cinira</span>,  comemorando o seu aniversário, convida a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>, hoje, às 16:00, no 11º andar (recepção).
                </p>} />



            {/* ************************ niver Cinira */}
            <MensagemNiver
                titulo="Aniversário"
                data="18/11/2024"
                cor="#a7a3ab"
                img="img/aniv04.png"
                nome="CINIRA"
                local="(Contabilidade)"
                dataExt="15/novembro - Sexta-feira"
            />



            {/* ************************ Expediente - Fim de Ano */}
            <MensagemText
                titulo="Expediente - Fim de Ano"
                data="12/11/2024"
                cor="#ff8026"
                texto={
                    <div className="card-text" style={{ fontSize: '1.5rem', color: 'blue' }}>

                        <br />
                        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: "#1a181b" }}>Administração/Assistência Técnica: </span>
                        <br /><br />
                        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4c4c4c' }}>Encerramento:</span>

                        <div style={{ display: 'flex', marginLeft: 40 }}>
                            <div style={{ marginTop: '20px', fontSize: '1.5rem', flex: 1 }}>
                                <div style={{ width: '400px' }}><span style={{ color: "#403d43", fontSize: '1.3rem' }}>Dia 18/12/2024</span></div>
                                <div style={{ width: '400px' }}><span style={{ color: "#403d43", fontSize: '1.3rem' }}>Quarta-feira - No horário normal </span></div>
                            </div>

                        </div>

                        <br />
                        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4c4c4c' }}>Retorno:</span>

                        <div style={{ display: 'flex', marginLeft: 40 }}>
                            <div style={{ marginTop: '20px', fontSize: '1.5rem', flex: 1 }}>
                                <div style={{ width: '400px' }}><span style={{ color: "#403d43", fontSize: '1.3rem' }}>Dia 08/01/2025</span></div>
                                <div style={{ width: '400px' }}><span style={{ color: "#403d43", fontSize: '1.3rem' }}>Quarta-feira - No horário normal </span></div>
                            </div>

                        </div>




                        <br />

                    </div>

                } />

            {/* ************************ bolinho David  */}
            <MensagemText
                titulo="Aniversário"
                data="11/11/2024"
                cor="#a7a3ab"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>David</span>, comemorando o seu aniversário, convida a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>, hoje, às 16:00, no 11º andar (recepção).
                </p>} />

            {/* ************************ niver David */}
            <MensagemNiver
                titulo="Aniversário"
                data="11/11/2024"
                cor="#a7a3ab"
                img="img/aniv08.png"
                nome="DAVID"
                local="(Compras)"
                dataExt="11/novembro - Segunda-feira"
            />

            {/* ************************ bolinho eugenio-cida */}
            <MensagemText
                titulo="Aniversários"
                data="24/09/2024"
                cor="#ff8026"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Eugênio e Cida</span>, comemorando os seus aniversários, convidam a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>, hoje, às 15:30, no 11º andar (recepção).
                </p>} />

            {/* ************************ niver Eugenio e Cida */}
            <MensagemNiver2
                titulo="Aniversários"
                data="24/09/2024"
                cor="#ff8026"
                img="img/aniv12.png"
                nome="EUGÊNIO"
                local="(Engenharia)"
                nome2="MARIA APARECIDA"
                local2="(Copa)"
                dataExt="24/setembro - Terça-feira"
            />

            {/* ************************ bolinho Steffany */}
            <MensagemText
                titulo="Aniversário"
                data="03/09/2024"
                cor="#a7a3ab"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Steffany</span>,  comemorando o seu aniversário, convida a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>, hoje, às 16:00, no 11º andar (recepção).
                </p>} />



            {/* ************************ niver Steffany */}
            <MensagemNiver
                titulo="Aniversário"
                data="03/09/2024"
                cor="#a7a3ab"
                img="img/aniv11.png"
                nome="STEFFANY"
                local="(Marketing)"
                dataExt="03/Setembro - Terça-feira"
            />

            {/* ************************ bolinho Tania */}
            <MensagemText
                titulo="Aniversário"
                data="12/08/2024"
                cor="#ff8026"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Tania</span>,  comemorando seu aniversário, convida a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>, hoje, às 16:00, no 11º andar (recepção).
                </p>} />


            {/* ************************ niver Tania */}
            <MensagemNiver
                titulo="Aniversário"
                data="12/08/2024"
                cor="#ff8026"
                img="img/aniv04.png"
                nome="TANIA"
                local="(Financeiro)"
                dataExt="12/agosto - Segunda-feira"
            />

            {/* ************************ bolinho Ana Clara */}
            <MensagemText
                titulo="Aniversário"
                data="05/08/2024"
                cor="#a7a3ab"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Ana Clara</span>,  comemorando o seu aniversário, convida a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>, hoje, às 16:00, no 11º andar (recepção).
                </p>} />



            {/* ************************ niver Ana Clara */}
            <MensagemNiver
                titulo="Aniversário"
                data="05/08/2024"
                cor="#a7a3ab"
                img="img/aniv04.png"
                nome="ANA CLARA"
                local="(Engenharia)"
                dataExt="05/agosto - Segunda-feira"
            />

            {/* ************************ bolinho antonio */}
            <MensagemText
                titulo="Aniversário"
                data="02/08/2024"
                cor="steelblue"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Antônio</span>,  comemorando seu aniversário, convida a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>, hoje, às 16:00, no 11º andar (recepção).
                </p>} />

            {/* ************************ niver Antonio */}
            <MensagemNiver
                titulo="Aniversário"
                data="02/08/2024"
                cor="steelblue"
                img="img/aniv11.png"
                nome="ANTÔNIO"
                local="(Compras)"
                dataExt="02/agosto - Sexta-feira"
            />
            {/* ************************ niver Fabio */}
            <MensagemNiver
                titulo="Aniversário"
                data="01/07/2024"
                cor="#28A745"
                img="img/aniv01.png"
                nome="FÁBIO"
                local="(Diretoria)"
                dataExt="01/Julho - Segunda-feira"
            />

            {/* ************************ bolinho Amilton */}
            <MensagemText
                titulo="Aniversário"
                data="13/06/2024"
                cor="steelblue"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Amilton</span>,  comemorando seu aniversário, convida a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>
                    , hoje, às 16:00, no 11º andar (recepção).
                </p>} />

            {/* ************************ niver Amilton */}
            <MensagemNiver
                titulo="Aniversário"
                data="13/06/2024"
                cor="steelblue"
                img="img/aniv11.png"
                nome="AMILTON"
                local="(TI)"
                dataExt="13/junho - Quinta-feira"
            />


            {/* ************************ Expediente - Feriado de Corpus Christi */}

            <MensagemText
                titulo="Expediente - Feriado de Corpus Christi"
                data="27/05/2024"
                cor="#28A745"
                texto={
                    <div className="card-text" style={{ fontSize: '1.5rem' }}>
                        <br />


                        <div style={{ marginTop: '10px' }}>
                            <span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>Administração / Assistência Técnica:</span>

                        </div>

                        <div style={{ display: 'flex', marginLeft: 40 }}>
                            <div style={{ marginTop: '20px', fontSize: '1.2rem', flex: 1 }}>
                                <div style={{ display: 'flex' }}>
                                    <div style={{ width: '150px' }}><span style={{ color: 'blue', fontSize: '1.3rem' }}>Encerramento</span></div>
                                    <div><span style={{ marginLeft: 30, fontSize: '1.3rem' }}>Dia 29/MAI/2024, quarta-feira, às 18:00 </span></div>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <div style={{ width: '150px' }}><span style={{ color: 'blue', fontSize: '1.3rem' }}>Retorno</span></div>
                                    <div><span style={{ marginLeft: 30, fontSize: '1.3rem' }}>Dia 03/JUN/2024, segunda-feira, às 08:00 </span></div>
                                </div>

                                {/* <div style={{ width: '200px' }}><span style={{ color: 'blue', fontSize: '1.3rem' }}>Assistência Técnica </span></div> */}
                            </div>

                        </div>


                        <div style={{ marginTop: '30px' }}>
                            <span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>Obras (BLISS):</span>

                        </div>

                        <div style={{ display: 'flex', marginLeft: 40 }}>
                            <div style={{ marginTop: '20px', fontSize: '1.2rem', flex: 1 }}>
                                <div style={{ display: 'flex' }}>
                                    <div style={{ width: '200px' }}><span style={{ color: 'blue', fontSize: '1.3rem' }}>Expediente normal</span></div>
                                    <div><span style={{ marginLeft: 30, fontSize: '1.3rem' }}>Expediente normal</span></div>
                                </div>



                                {/* <div style={{ width: '200px' }}><span style={{ color: 'blue', fontSize: '1.3rem' }}>Assistência Técnica </span></div> */}
                            </div>

                        </div>
                        <div className="card-text" style={{ fontSize: '1.1em' }}>
                            <div >

                            </div>
                        </div>
                        <br />

                    </div>

                } />





            {/* ************************ bolinho heliane */}
            <MensagemText
                titulo="Aniversário"
                data="26/04/2024"
                cor="steelblue"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Heliane</span>,  comemorando seu aniversário, convida a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>
                    , hoje, às 15:45, no 11º andar (recepção).
                </p>} />

            {/* ************************ niver Heliane */}
            <MensagemNiver
                titulo="Aniversário"
                data="26/04/2024"
                cor="steelblue"
                img="img/aniv08.png"
                nome="HELIANE"
                local="(Financeiro)"
                dataExt="26/abril - Sexta-feira"
            />


            {/* ************************ bolinho Marco */}
            <MensagemText
                titulo="Aniversário"
                data="24/04/2024"
                cor="#28A745"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Marco</span>,  comemorando seu aniversário, convida a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>, hoje, às 16:00, no 11º andar (recepção).
                </p>} />

            {/* ************************ niver Marco */}
            <MensagemNiver
                titulo="Aniversário"
                data="24/04/2024"
                cor="#28A745"
                img="img/aniv08.png"
                nome="MARCO"
                local="(Diretor Técnico)"
                dataExt="24/Abril - Quarta-feira"
            />

            {/* ************************ bolinho sueli */}
            <MensagemText
                titulo="Aniversário"
                data="05/02/2024"
                cor="steelblue"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Sueli</span>,  comemorando seu aniversário, convida a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>, hoje, às 15:30, no 11º andar (recepção).
                </p>} />

            {/* ************************ niver sueli */}
            <MensagemNiver
                titulo="Aniversário"
                data="05/02/2023"
                cor="steelblue"
                img="img/aniv01.png"
                nome="SUELI"
                local="(RH)"
                dataExt="05/fevereiro - Segunda-feira"
            />

            {/* ************************ Expediente - Carnaval */}
            <MensagemText
                titulo="Expediente - Carnaval"
                data="01/02/2024"
                cor="red"
                texto={
                    <div className="card-text" style={{ fontSize: '1.5rem' }}>
                        <br />


                        <div style={{ marginTop: '10px' }}>
                            <span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>Administração:</span>

                        </div>

                        <div style={{ display: 'flex', marginLeft: 40 }}>
                            <div style={{ marginTop: '20px', fontSize: '1.2rem', flex: 1 }}>
                                <div style={{ display: 'flex' }}>
                                    <div style={{ width: '200px' }}><span style={{ color: 'blue', fontSize: '1.3rem' }}>Encerramento</span></div>
                                    <div><span style={{ marginLeft: 30, fontSize: '1.3rem' }}>Dia 09/FEV/2024, sexta-feira, às 17:30 </span></div>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <div style={{ width: '200px' }}><span style={{ color: 'blue', fontSize: '1.3rem' }}>Retorno</span></div>
                                    <div><span style={{ marginLeft: 30, fontSize: '1.3rem' }}>Dia 14/FEV/2024, quarta-feira, às 13:30 </span></div>
                                </div>

                                {/* <div style={{ width: '200px' }}><span style={{ color: 'blue', fontSize: '1.3rem' }}>Assistência Técnica </span></div> */}
                            </div>

                        </div>


                        <div style={{ marginTop: '30px' }}>
                            <span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>Obras (BLISS) / Assistência Técnica:</span>

                        </div>

                        <div style={{ display: 'flex', marginLeft: 40 }}>
                            <div style={{ marginTop: '20px', fontSize: '1.2rem', flex: 1 }}>
                                <div style={{ display: 'flex' }}>
                                    <div style={{ width: '200px' }}><span style={{ color: 'blue', fontSize: '1.3rem' }}>Expediente normal</span></div>
                                    <div><span style={{ marginLeft: 30, fontSize: '1.3rem' }}>Não haverá paradas nos dias 12 (segunda),</span></div>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <div style={{ width: '200px' }}><span style={{ color: 'blue', fontSize: '1.3rem' }}></span></div>
                                    <div><span style={{ marginLeft: 30, fontSize: '1.3rem' }}> 13 (terça) e 14 (quarta) </span></div>
                                </div>


                                {/* <div style={{ width: '200px' }}><span style={{ color: 'blue', fontSize: '1.3rem' }}>Assistência Técnica </span></div> */}
                            </div>

                        </div>
                        <div className="card-text" style={{ fontSize: '1.1em' }}>
                            <div >

                            </div>
                        </div>
                        <br />

                    </div>

                } />

            {/* ************************ niver Leydi */}
            <MensagemNiver
                titulo="Aniversário"
                data="11/01/2024"
                cor="steelblue"
                img="img/aniv08.png"
                nome="LEIDY"
                local="(Marketing)"
                dataExt="11/Janeiro - Quinta-feira"
            />

            {/* ************************ bolinho Paulao */}
            <MensagemText
                titulo="Aniversário"
                data="11/12/2023"
                cor="#28A745"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Paulão</span>,  comemorando seu aniversário, convida a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>
                    , hoje, às 16:00, no 11º andar (recepção).
                </p>} />

            {/* ************************ niver Paulao */}
            <MensagemNiver
                titulo="Aniversário"
                data="11/12/2023"
                cor="#28A745"
                img="img/aniv01.png"
                nome="PAULÃO"
                local="(Comercial)"
                dataExt="11/Dezembro - Segunda-feira"
            />



            {/* ************************ bolinho Carine */}
            <MensagemText
                titulo="Aniversário"
                data="24/11/2023"
                cor="steelblue"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Carine</span>,  comemorando seu aniversário, convida a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>
                    , hoje, às 16:00, no 11º andar (recepção).
                </p>} />

            {/* ************************ niver Carine */}
            <MensagemNiver
                titulo="Aniversário"
                data="24/11/2023"
                cor="steelblue"
                img="img/aniv08.png"
                nome="CARINE"
                local="(Recepção)"
                dataExt="24/novembro - Sexta-feira"
            />

            {/* ************************ bolinho cinira */}
            <MensagemText
                titulo="Aniversário"
                data="14/11/2023"
                cor="#28A745"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Cinira</span>,  antecipando a comemoração do seu aniversário, convida a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>, hoje, às 16:00, no 11º andar (recepção).
                </p>} />



            {/* ************************ niver Cinira */}
            <MensagemNiver
                titulo="Aniversário"
                data="14/11/2023"
                cor="#28A745"
                img="img/aniv04.png"
                nome="CINIRA"
                local="(Contabilidade)"
                dataExt="15/novembro - Quarta-feira"
            />




            {/* ************************ niver David */}
            <MensagemNiver
                titulo="Aniversário"
                data="10/11/2022"
                cor="steelblue"
                img="img/aniv08.png"
                nome="DAVID"
                local="(Compras)"
                dataExt="11/novembro - Sábado"
            />

            {/* ************************ bolinho eugenio-cida */}
            <MensagemText
                titulo="Aniversários"
                data="25/09/2023"
                cor="#28A745"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Eugênio e Cida</span>, comemorando os seus aniversários, convidam a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>, hoje, às 16:00, no 11º andar (recepção).
                </p>} />

            {/* ************************ niver Eugenio e Cida */}
            <MensagemNiver2
                titulo="Aniversários"
                data="25/09/2023"
                cor="#28A745"
                img="img/aniv12.png"
                nome="EUGÊNIO"
                local="(Engenharia)"
                nome2="MARIA APARECIDA"
                local2="(Copa)"
                dataExt="24/setembro - Domingo"
            />

            {/* ************************ bolinho Lidia */}
            <MensagemText
                titulo="Aniversário"
                data="15/09/2023"
                cor="steelblue"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Lidia</span>,  comemorando seu aniversário, convida a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>, hoje, às 15:30, no 11º andar (recepção).
                </p>} />

            {/* ************************ niver Lidia */}
            <MensagemNiver
                titulo="Aniversário"
                data="15/09/2023"
                cor="steelblue"
                img="img/aniv01.png"
                nome="LIDIA"
                local="(Engenharia)"
                dataExt="15/setembro - Sexta-feira"
            />

            {/* ************************ bolinho tania */}
            <MensagemText
                titulo="Aniversário"
                data="11/08/2023"
                cor="#28A745"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Tania</span>,  comemorando seu aniversário, convida a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>, hoje, às 15:30, no 11º andar (recepção).
                </p>} />


            {/* ************************ niver Tania */}
            <MensagemNiver
                titulo="Aniversário"
                data="11/08/2023"
                cor="#28A745"
                img="img/aniv04.png"
                nome="TANIA"
                local="(Financeiro)"
                dataExt="12/agosto - Sábado"
            />

            {/* ************************ bolinho Antônio */}
            <MensagemText
                titulo="Aniversário"
                data="02/08/2023"
                cor="steelblue"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Antônio</span>,  comemorando seu aniversário, convida a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>, hoje, às 16:00, no 11º andar (recepção).
                </p>} />

            {/* ************************ niver Antônio */}
            <MensagemNiver
                titulo="Aniversário"
                data="02/08/2023"
                cor="steelblue"
                img="img/aniv01.png"
                nome="ANTÔNIO"
                local="(Compras)"
                dataExt="02/agosto - Quarta-feira"
            />


            {/* ************************ bolinho amilton */}
            <MensagemText
                titulo="Aniversário"
                data="13/06/2023"
                cor="#28A745"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Amilton</span>,  comemorando seu aniversário, convida a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>
                    , hoje, às 16:00, no 11º andar (recepção).
                </p>} />

            {/* ************************ niver amilton */}
            <MensagemNiver
                titulo="Aniversário"
                data="13/06/2023"
                cor="#28A745"
                img="img/aniv11.png"
                nome="AMILTON"
                local="(TI)"
                dataExt="13/junho - Terça-feira"
            />

            {/* ************************ bolinho heliane */}
            <MensagemText
                titulo="Aniversário"
                data="26/04/2023"
                cor="steelblue"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Heliane</span>,  comemorando seu aniversário, convida a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>
                    , hoje, às 16:00, no 11º andar (recepção).
                </p>} />

            {/* ************************ niver Heliane */}
            <MensagemNiver
                titulo="Aniversário"
                data="26/04/2023"
                cor="steelblue"
                img="img/aniv08.png"
                nome="HELIANE"
                local="(Financeiro)"
                dataExt="26/abril - Quarta-feira"
            />

            {/* ************************ bolinho Marco */}
            <MensagemText
                titulo="Aniversário"
                data="20/04/2023"
                cor="#28A745"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Marco</span>,  comemorando seu aniversário, convida a
                    todos para um
                    <span className='intra-card__texto-bolo'> bolinho especial</span>
                    , nesta segunda-feira, às 09:00, no 11º andar (copa).
                </p>} />

            {/* ************************ niver Marco */}
            <MensagemNiver
                titulo="Aniversário"
                data="20/04/2023"
                cor="#28A745"
                img="img/aniv08.png"
                nome="MARCO"
                local="(Diretor Técnico)"
                dataExt="24/Abril - Segunda-feira"
            />

            {/* ************************ Expediente - Carnaval */}
            <MensagemText
                titulo="Expediente - Carnaval"
                data="13/02/2023"
                cor="red"
                texto={
                    <div className="card-text" style={{ fontSize: '1.5rem' }}>
                        <br />
                        <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Encerramento:</span>

                        <div style={{ display: 'flex', marginLeft: 40 }}>
                            <div style={{ marginTop: '20px', fontSize: '1.5rem', flex: 1 }}>
                                <div style={{ width: '200px' }}><span style={{ color: 'blue', fontSize: '1.3rem' }}>Admininistração </span></div>
                                <div style={{ display: 'flex' }}>
                                    <div style={{ width: '200px' }}><span style={{ color: 'blue', fontSize: '1.3rem' }}>Assistência Técnica</span></div>
                                    <div><span style={{ marginLeft: 30, fontSize: '1.3rem' }}>Dia 17/FEV/2023, sexta-feira, no horário normal </span></div>
                                </div>
                                {/* <div style={{ width: '200px' }}><span style={{ color: 'blue', fontSize: '1.3rem' }}>Assistência Técnica </span></div> */}
                            </div>

                        </div>

                        <div style={{ marginTop: '30px' }}>
                            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Retorno:</span>

                        </div>

                        <div style={{ display: 'flex', marginLeft: 40 }}>
                            <div style={{ marginTop: '20px', fontSize: '1.2rem', flex: 1 }}>
                                <div style={{ display: 'flex' }}>
                                    <div style={{ width: '200px' }}><span style={{ color: 'blue', fontSize: '1.3rem' }}>Administração</span></div>
                                    <div><span style={{ marginLeft: 30, fontSize: '1.3rem' }}>Dia 22/FEV/2023, quarta-feira, às 12:00 </span></div>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <div style={{ width: '200px' }}><span style={{ color: 'blue', fontSize: '1.3rem' }}>Assistência Técnica</span></div>
                                    <div><span style={{ marginLeft: 30, fontSize: '1.3rem' }}>Dia 22/FEV/2023, quarta-feira, às 08:00 </span></div>
                                </div>

                                {/* <div style={{ width: '200px' }}><span style={{ color: 'blue', fontSize: '1.3rem' }}>Assistência Técnica </span></div> */}
                            </div>

                        </div>
                        <br />
                        <br />
                        <div className="card-text" style={{ fontSize: '1.1em' }}>
                            <div >
                                <div >As obras (BLISS), neste período, terão expediente normal.</div>

                            </div>
                        </div>
                        <br />

                    </div>

                } />


            {/* ************************ bolinho sueli */}
            <MensagemText
                titulo="Aniversário"
                data="06/02/2023"
                cor="steelblue"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Sueli</span>,  comemorando seu aniversário, convida a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>, hoje, às 16:00, no 11º andar (recepção).
                </p>} />

            {/* ************************ niver sueli */}
            <MensagemNiver
                titulo="Aniversário"
                data="06/02/2023"
                cor="steelblue"
                img="img/aniv01.png"
                nome="SUELI"
                local="(RH)"
                dataExt="05/fevereiro - Domingo"
            />

            {/* ************************ bolinho luize */}
            <MensagemText
                titulo="Aniversário"
                data="19/01/2023"
                cor="#28A745"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Luize</span>,  comemorando seu aniversário, convida a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>, hoje, às 16:00, no 11º andar (recepção).
                </p>} />


            {/* ************************ niver luize */}
            <MensagemNiver
                titulo="Aniversário"
                data="19/01/2023"
                cor="#28A745"
                img="img/aniv04.png"
                nome="LUIZE"
                local="(Secretária)"
                dataExt="19/janeiro - Quinta-feira"
            />

            {/* ************************ bolinho Paulao */}
            <MensagemText
                titulo="Aniversário"
                data="10/01/2023"
                cor="steelblue"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Michelli</span>,  comemorando antecipadamente seu aniversário, convida a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>
                    , hoje, às 16:00, no 11º andar (recepção).
                </p>} />

            {/* ************************ niver Paulao */}
            <MensagemNiver
                titulo="Aniversário"
                data="10/01/2023"
                cor="steelblue"
                img="img/aniv11.png"
                nome="MICHELLI"
                local="(Incorporações)"
                dataExt="12/Janeiro - Quinta-feira"
            />

            {/* ************************ Confraternização */}
            <MensagemText
                titulo="Confraternização"
                data="12/12/2022"
                cor="red"
                texto={
                    <div>
                        <br />
                        <div className="card-text" style={{ fontSize: '1.1em' }}>
                            <div >
                                <div >A diretoria convida você para um almoco de confraternização na quarta-feira, dia 14/12,
                                    no horário das 12:00 às 14:00, no escritório da empresa.<br /><br /> Contamos com sua presença. </div>

                            </div>
                        </div>
                        <br />
                    </div>

                } />

            {/* ************************ bolinho Paulao */}
            <MensagemText
                titulo="Aniversário"
                data="12/12/2022"
                cor="steelblue"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Paulão</span>,  comemorando seu aniversário, convida a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>
                    , hoje, às 16:00, no 11º andar (recepção).
                </p>} />

            {/* ************************ niver Paulao */}
            <MensagemNiver
                titulo="Aniversário"
                data="12/12/2022"
                cor="steelblue"
                img="img/aniv08.png"
                nome="PAULÃO"
                local="(Comercial)"
                dataExt="11/Dezembro - Domingo"
            />

            {/* ************************ Expediente - Jogos do Brasil - Oitavas */}
            <MensagemText
                titulo="Expediente - Jogos do Brasil - Brasil X Croácia"
                data="07/12/2022"
                cor="green"
                texto={
                    <div className="card-text" style={{ fontSize: '1.5rem', color: 'blue' }}>

                        <br />
                        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'green' }}>Administração: </span>
                        <br /><br />
                        <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Dia 09/12/2022 <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}> - (Sexta-feira):</span></span>

                        <div style={{ display: 'flex', marginLeft: 40 }}>
                            <div style={{ marginTop: '20px', fontSize: '1.5rem', flex: 1 }}>
                                <div style={{ width: '400px' }}><span style={{ color: 'green', fontSize: '1.3rem' }}>Das 08:00 às 11:00 </span></div>
                                <div style={{ width: '450px' }}><span style={{ color: 'green', fontSize: '1.3rem' }}>Retorno às 14:15 - Se NÃO houver prorrogação </span></div>
                                <div style={{ width: '400px' }}><span style={{ color: 'green', fontSize: '1.3rem' }}>Retorno às 15:15 - Se HOUVER prorrogação </span></div>
                                <div style={{ width: '400px' }}><span style={{ color: 'green', fontSize: '1.3rem' }}>Encerramento às 17:30 </span></div>
                            </div>

                        </div>

                        <br />

                    </div>

                } />

            {/* ************************ Expediente - Jogos do Brasil - Oitavas */}
            <MensagemText
                titulo="Expediente - Jogos do Brasil - Brasil X Coreia do Sul"
                data="05/12/2022"
                cor="green"
                texto={
                    <div className="card-text" style={{ fontSize: '1.5rem', color: 'blue' }}>

                        <br />
                        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'green' }}>Administração: </span>
                        <br /><br />
                        <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Dia 05/12/2022 <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}> - (Segunda-feira):</span></span>

                        <div style={{ display: 'flex', marginLeft: 40 }}>
                            <div style={{ marginTop: '20px', fontSize: '1.5rem', flex: 1 }}>
                                <div style={{ width: '400px' }}><span style={{ color: 'green', fontSize: '1.3rem' }}>Das 08:00 às 12:00 - Horário Normal </span></div>
                                <div style={{ width: '400px' }}><span style={{ color: 'green', fontSize: '1.3rem' }}>Retorno às 13:00 - Encerramento às 14:30 </span></div>
                            </div>

                        </div>





                        <br />

                    </div>

                } />

            {/* ************************ Expediente - Fim de Ano */}
            <MensagemText
                titulo="Expediente - Fim de Ano"
                data="29/11/2022"
                cor="red"
                texto={
                    <div className="card-text" style={{ fontSize: '1.5rem', color: 'blue' }}>

                        <br />
                        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'blue' }}>Administração/Assistência Técnica: </span>
                        <br /><br />
                        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4c4c4c' }}>Encerramento:</span>

                        <div style={{ display: 'flex', marginLeft: 40 }}>
                            <div style={{ marginTop: '20px', fontSize: '1.5rem', flex: 1 }}>
                                <div style={{ width: '400px' }}><span style={{ color: 'green', fontSize: '1.3rem' }}>Dia 16/12/2022</span></div>
                                <div style={{ width: '400px' }}><span style={{ color: 'green', fontSize: '1.3rem' }}>Sexta-feira - No horário normal </span></div>
                            </div>

                        </div>

                        <br />
                        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4c4c4c' }}>Retorno:</span>

                        <div style={{ display: 'flex', marginLeft: 40 }}>
                            <div style={{ marginTop: '20px', fontSize: '1.5rem', flex: 1 }}>
                                <div style={{ width: '400px' }}><span style={{ color: 'green', fontSize: '1.3rem' }}>Dia 09/01/2023</span></div>
                                <div style={{ width: '400px' }}><span style={{ color: 'green', fontSize: '1.3rem' }}>Segunda-feira - No horário normal </span></div>
                            </div>

                        </div>




                        <br />

                    </div>

                } />


            {/* ************************ Expediente - Jogos do Brasil - Fase de Grupos */}
            <MensagemText
                titulo="Expediente - Jogos do Brasil - Fase de Grupos"
                data="21/11/2022"
                cor="green"
                texto={
                    <div className="card-text" style={{ fontSize: '1.5rem', color: 'blue' }}>

                        <br />
                        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'green' }}>Administração: </span>
                        <br /><br />
                        <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Dia 24/11/2022 <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}> - (Quinta-feira):</span></span>

                        <div style={{ display: 'flex', marginLeft: 40 }}>
                            <div style={{ marginTop: '20px', fontSize: '1.5rem', flex: 1 }}>
                                <div style={{ width: '400px' }}><span style={{ color: 'green', fontSize: '1.3rem' }}>Das 08:00 às 12:00 - Horário Normal </span></div>
                                <div style={{ width: '400px' }}><span style={{ color: 'green', fontSize: '1.3rem' }}>Retorno às 13:00 - Encerramento às 14:30 </span></div>
                            </div>

                        </div>

                        <div style={{ marginTop: '30px' }}>
                            <br />
                            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Dia 28/11/2022<span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}> - (Segunda-feira):</span></span>

                            <div style={{ display: 'flex', marginLeft: 40 }}>
                                <div style={{ marginTop: '20px', fontSize: '1.5rem', flex: 1 }}>
                                    <div style={{ width: '400px' }}><span style={{ color: 'green', fontSize: '1.3rem' }}>Das 08:00 às 12:00 - Horário Normal </span></div>
                                    <div style={{ width: '400px' }}><span style={{ color: 'green', fontSize: '1.3rem' }}>Retorno às 15:15 - Encerramento às 18:00 </span></div>
                                </div>

                            </div>

                        </div>

                        <div style={{ marginTop: '30px' }}>
                            <br />
                            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Dia 02/12/2022<span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}> - (Sexta-feira):</span></span>

                            <div style={{ display: 'flex', marginLeft: 40 }}>
                                <div style={{ marginTop: '20px', fontSize: '1.5rem', flex: 1 }}>
                                    <div style={{ width: '400px' }}><span style={{ color: 'green', fontSize: '1.3rem' }}>Das 08:00 às 12:00 - Horário Normal </span></div>
                                    <div style={{ width: '400px' }}><span style={{ color: 'green', fontSize: '1.3rem' }}>Retorno às 13:00 - Encerramento às 14:30 </span></div>
                                </div>

                            </div>

                        </div>


                        <br />

                    </div>

                } />

            {/* ************************ bolinho david-cinira */}
            <MensagemText
                titulo="Aniversários"
                data="14/11/2022"
                cor="#28A745"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>David</span>, comemorando seu aniversário ocorrido na sexta-feira
                    e <span className='intra-card__texto-nome'>Cinira</span>,
                    antecipando a comemoração de seu aniversário, que acontece amanhã, convidam a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>, hoje, às 16:00, no 11º andar (recepção).
                </p>} />

            {/* ************************ niver Cinira */}
            <MensagemNiver
                titulo="Aniversário"
                data="14/11/2022"
                cor="#28A745"
                img="img/aniv04.png"
                nome="CINIRA"
                local="(Contabilidade)"
                dataExt="15/novembro - Terça-feira"
            />

            {/* ************************ niver David */}
            <MensagemNiver
                titulo="Aniversário"
                data="11/11/2022"
                cor="steelblue"
                img="img/aniv08.png"
                nome="DAVID"
                local="(Compras)"
                dataExt="11/novembro - Sexta-feira"
            />

            {/* ************************ bolinho eugenio-cida */}
            <MensagemText
                titulo="Aniversários"
                data="22/09/2022"
                cor="#28A745"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Eugênio e Cida</span>, antecipando a comemoração dos seus aniversários, convidam a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>, hoje, às 16:00, no 11º andar (recepção).
                </p>} />

            {/* ************************ niver Eugenio e Cida */}
            <MensagemNiver2
                titulo="Aniversários"
                data="22/09/2022"
                cor="#28A745"
                img="img/aniv12.png"
                nome="EUGÊNIO"
                local="(Engenharia)"
                nome2="MARIA APARECIDA"
                local2="(Copa)"
                dataExt="24/setembro - Sábado"
            />

            {/* ************************ bolinho Lidia */}
            <MensagemText
                titulo="Aniversário"
                data="15/09/2022"
                cor="steelblue"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Lidia</span>,  comemorando seu aniversário, convida a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>
                    , hoje, às 16:00, no 11º andar (recepção).
                </p>} />

            {/* ************************ niver Lidia */}
            <MensagemNiver
                titulo="Aniversário"
                data="15/09/2022"
                cor="steelblue"
                img="img/aniv11.png"
                nome="LIDIA"
                local="(Assistência Técnica)"
                dataExt="15/Setembro - Quinta-feira"
            />

            {/* ************************ bolinho tania */}
            <MensagemText
                titulo="Aniversário"
                data="12/08/2022"
                cor="#28A745"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Tania</span>,  comemorando seu aniversário, convida a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>, hoje, às 15:30, no 11º andar (recepção).
                </p>} />


            {/* ************************ niver Tania */}
            <MensagemNiver
                titulo="Aniversário"
                data="12/08/2022"
                cor="#28A745"
                img="img/aniv04.png"
                nome="TANIA"
                local="(Financeiro)"
                dataExt="12/agosto - Sexta-feira"
            />


            {/* ************************ bolinho Antônio */}
            <MensagemText
                titulo="Aniversário"
                data="02/08/2022"
                cor="steelblue"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Antônio</span>,  comemorando seu aniversário, convida a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>
                    , hoje, às 16:00, no 11º andar (recepção).
                </p>} />

            {/* ************************ niver Antônio */}
            <MensagemNiver
                titulo="Aniversário"
                data="02/08/2022"
                cor="steelblue"
                img="img/aniv01.png"
                nome="ANTÔNIO"
                local="(Compras)"
                dataExt="02/Agosto - Terça-feira"
            />

            {/* ************************ niver Fabio */}
            <MensagemNiver
                titulo="Aniversário"
                data="01/07/2022"
                cor="#28A745"
                img="img/aniv08.png"
                nome="FABIO"
                local="(Presidência)"
                dataExt="01/julho - Sexta-feira"
            />

            {/* ************************ bolinho amilton */}
            <MensagemText
                titulo="Aniversário"
                data="13/06/2022"
                cor="steelblue"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Amilton</span>,  comemorando seu aniversário, convida a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>
                    , hoje, às 16:00, no 11º andar (recepção).
                </p>} />

            {/* ************************ niver amilton */}
            <MensagemNiver
                titulo="Aniversário"
                data="13/06/2022"
                cor="steelblue"
                img="img/aniv11.png"
                nome="AMILTON"
                local="(TI)"
                dataExt="13/Junho - Segunda-feira"
            />


            {/* ************************ Expediente - Feriado de Corpus Christi */}
            <MensagemText
                titulo="Expediente - Feriado de Corpus Christi"
                data="08/06/2022"
                cor="steelblue"
                texto={
                    <div className="card-text" style={{ fontSize: '1.5rem' }}>
                        <br />
                        <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Encerramento:</span>

                        <div style={{ display: 'flex', marginLeft: 40 }}>
                            <div style={{ marginTop: '20px', fontSize: '1.5rem', flex: 1 }}>
                                <div style={{ width: '200px' }}><span style={{ color: 'blue', fontSize: '1.3rem' }}>Admininistração </span></div>
                                <div style={{ width: '200px' }}><span style={{ color: 'blue', fontSize: '1.3rem' }}>Assistência Técnica </span></div>
                                <div style={{ display: 'flex' }}>
                                    <div style={{ width: '200px' }}><span style={{ color: 'blue', fontSize: '1.3rem' }}>Obras (Bliss)</span></div>
                                    <div><span style={{ marginLeft: 30, fontSize: '1.3rem' }}>Dia 15/JUN/2022, quarta-feira, no horário normal </span></div>
                                </div>
                                {/* <div style={{ width: '200px' }}><span style={{ color: 'blue', fontSize: '1.3rem' }}>Assistência Técnica </span></div> */}
                            </div>

                        </div>

                        <div style={{ marginTop: '30px' }}>
                            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Retorno:</span>

                        </div>

                        <div style={{ display: 'flex', marginLeft: 40 }}>
                            <div style={{ marginTop: '20px', fontSize: '1.2rem', flex: 1 }}>
                                <div style={{ width: '200px' }}><span style={{ color: 'blue', fontSize: '1.3rem' }}>Admininistração </span></div>
                                <div style={{ width: '200px' }}><span style={{ color: 'blue', fontSize: '1.3rem' }}>Assistência Técnica </span></div>
                                <div style={{ display: 'flex' }}>
                                    <div style={{ width: '200px' }}><span style={{ color: 'blue', fontSize: '1.3rem' }}>Obras (Bliss)</span></div>
                                    <div><span style={{ marginLeft: 30, fontSize: '1.3rem' }}>Dia 20/JUN/2022, segunda-feira, no horário normal </span></div>
                                </div>
                                {/* <div style={{ width: '200px' }}><span style={{ color: 'blue', fontSize: '1.3rem' }}>Assistência Técnica </span></div> */}
                            </div>

                        </div>
                        <br />

                    </div>

                } />

            {/* ************************ bolinho liliane */}
            <MensagemText
                titulo="Aniversário"
                data="25/05/2022"
                cor="#28A745"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Liliane</span>,  em comemoração ao seu aniversário, está oferecendo um
                    <span className='intra-card__texto-bolo'> bolinho</span>
                    , hoje, às 14:00, no 11º andar (copa).
                </p>} />

            {/* ************************ niver Liliane */}
            <MensagemNiver
                titulo="Aniversário"
                data="20/05/2022"
                cor="#28A745"
                img="img/aniv01.png"
                nome="LILIANE"
                local="(Diretoria)"
                dataExt="20/maio - Sexta-feira"
            />


            {/* ************************ bolinho heliane */}
            <MensagemText
                titulo="Aniversário"
                data="26/04/2022"
                cor="steelblue"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Heliane</span>,  comemorando seu aniversário, convida a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>
                    , hoje, às 16:00, no 11º andar (recepção).
                </p>} />

            {/* ************************ niver Heliane */}
            <MensagemNiver
                titulo="Aniversário"
                data="26/04/2022"
                cor="steelblue"
                img="img/aniv08.png"
                nome="HELIANE"
                local="(Financeiro)"
                dataExt="26/abril - Terça-feira"
            />

            {/* ************************ bolinho marco */}
            <MensagemText
                titulo="Aniversário"
                data="25/04/2022"
                cor="#28A745"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Marco</span>,  comemorando seu aniversário, convida a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>
                    , hoje, às 15:45, no 11º andar (recepção).
                </p>} />

            {/* ************************ niver MArco */}
            <MensagemNiver
                titulo="Aniversário"
                data="25/04/2022"
                cor="#28A745"
                img="img/aniv11.png"
                nome="MARCO"
                local="(Engenharia)"
                dataExt="24/abril - Domingo"
            />

            {/* ************************ Expediente - Feriado */}
            <MensagemText
                titulo="Expediente - Feriado"
                data="14/04/2022"
                cor="steelblue"
                texto={
                    <div className="card-text" style={{ fontSize: '1.5rem' }}>
                        <br />
                        <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Encerramento:</span>

                        <div style={{ display: 'flex', marginLeft: 40 }}>
                            <div style={{ marginTop: '20px', fontSize: '1.5rem', flex: 1 }}>
                                <div style={{ width: '200px' }}><span style={{ color: 'blue', fontSize: '1.3rem' }}>Admininistração </span></div>
                                <div style={{ display: 'flex' }}>
                                    <div style={{ width: '200px' }}><span style={{ color: 'blue', fontSize: '1.3rem' }}>Obras (Bliss)</span></div>
                                    <div><span style={{ marginLeft: 30, fontSize: '1.3rem' }}>Dia 20/ABR/2022, quarta-feira, no horário normal </span></div>
                                </div>
                                {/* <div style={{ width: '200px' }}><span style={{ color: 'blue', fontSize: '1.3rem' }}>Assistência Técnica </span></div> */}
                            </div>

                        </div>

                        <div style={{ marginTop: '30px' }}>
                            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Retorno:</span>

                        </div>

                        <div style={{ display: 'flex', marginLeft: 40 }}>
                            <div style={{ marginTop: '20px', fontSize: '1.2rem', flex: 1 }}>
                                <div style={{ width: '200px' }}><span style={{ color: 'blue', fontSize: '1.3rem' }}>Admininistração </span></div>
                                <div style={{ display: 'flex' }}>
                                    <div style={{ width: '200px' }}><span style={{ color: 'blue', fontSize: '1.3rem' }}>Obras (Bliss)</span></div>
                                    <div><span style={{ marginLeft: 30, fontSize: '1.3rem' }}>Dia 25/ABR/2022, segunda-feira, no horário normal </span></div>
                                </div>
                                {/* <div style={{ width: '200px' }}><span style={{ color: 'blue', fontSize: '1.3rem' }}>Assistência Técnica </span></div> */}
                            </div>

                        </div>
                        <br />

                    </div>

                } />


            {/* ************************ Expediente - Carnaval 2022 */}
            <MensagemText
                titulo="Expediente - Carnaval"
                data="09/02/2022"
                cor="red"
                texto={
                    <div className="card-text" style={{ fontSize: '1.5rem' }}>
                        <br />
                        <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Encerramento:</span>

                        <div style={{ display: 'flex', marginLeft: 40 }}>
                            <div style={{ marginTop: '20px', fontSize: '1.5rem', flex: 1 }}>
                                <div style={{ width: '200px' }}><span style={{ color: 'blue', fontSize: '1.3rem' }}>Admininistração </span></div>
                                <div style={{ display: 'flex' }}>
                                    <div style={{ width: '200px' }}><span style={{ color: 'blue', fontSize: '1.3rem' }}>Obras </span></div>
                                    <div><span style={{ marginLeft: 30, fontSize: '1.3rem' }}>Dia 25/FEV/2022, sexta-feira, no horário normal </span></div>
                                </div>
                                <div style={{ width: '200px' }}><span style={{ color: 'blue', fontSize: '1.3rem' }}>Assistência Técnica </span></div>
                            </div>

                        </div>

                        <div style={{ marginTop: '30px' }}>
                            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Retorno:</span>

                        </div>

                        <div style={{ display: 'flex', marginLeft: 40 }}>
                            <div style={{ marginTop: '20px', fontSize: '1.2rem', flex: 1 }}>
                                <div style={{ width: '200px' }}><span style={{ color: 'blue', fontSize: '1.3rem' }}>Admininistração </span></div>
                                <div style={{ display: 'flex' }}>
                                    <div style={{ width: '200px' }}><span style={{ color: 'blue', fontSize: '1.3rem' }}>Obras </span></div>
                                    <div><span style={{ marginLeft: 30, fontSize: '1.3rem' }}>Dia 02/MAR/2022, quarta-feira, no horário normal </span></div>
                                </div>
                                <div style={{ width: '200px' }}><span style={{ color: 'blue', fontSize: '1.3rem' }}>Assistência Técnica </span></div>
                            </div>

                        </div>
                        <br />

                    </div>

                } />

            {/* ************************ bolinho sueli */}
            <MensagemText
                titulo="Aniversário"
                data="07/02/2022"
                cor="#28A745"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Sueli</span>,  comemorando seu aniversário, convida a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>
                    , hoje, às 16:00, no 11º andar (recepção).
                </p>} />

            {/* ************************ niver Sueli */}
            <MensagemNiver
                titulo="Aniversário"
                data="07/02/2022"
                cor="#28A745"
                img="img/aniv04.png"
                nome="SUELI"
                local="(RH)"
                dataExt="05/fevereiro - Sábado"
            />

            {/* ************************ niver Luize */}
            <MensagemNiver
                titulo="Aniversário"
                data="19/01/2022"
                cor="steelblue"
                img="img/aniv11.png"
                nome="LUIZE"
                local="(Secretária)"
                dataExt="19/janeiro - Quarta-feira"
            />

            {/* ************************ niver Michelli */}
            <MensagemNiver
                titulo="Aniversário"
                data="12/01/2022"
                cor="#28A745"
                img="img/aniv08.png"
                nome="MICHELLI"
                local="(Comercial)"
                dataExt="12/janeiro - Quarta-feira"
            />

            {/* ************************ fim de ano 2021 */}
            <MensagemImg
                titulo="Confraternização de Fim de Ano"
                data="13/12/2021"
                cor="red"
                img="img/fim de ano 2021.jpg"
            />

            {/* ************************ bolinho paulao */}
            <MensagemText
                titulo="Aniversário"
                data="10/12/2021"
                cor="steelblue"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Paulão</span>,  comemorando antecipadamente seu aniversário, convida a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>, hoje, às 16:30, no 11º andar (recepção).
                </p>} />

            {/* ************************ niver Paulão */}
            <MensagemNiver
                titulo="Aniversário"
                data="10/12/2021"
                cor="steelblue"
                img="img/aniv11.png"
                nome="PAULÃO"
                local="(Comercial)"
                dataExt="11/dezembro - Sábado"
            />


            {/* ************************ Expediente - Fim de Ano 2021 */}
            <MensagemText
                titulo="Expediente - Fim de Ano"
                data="02/12/2021"
                cor="red"
                texto={
                    <div className="card-text" style={{ fontSize: '1.5rem' }}>
                        <br />
                        <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Encerramento:</span>

                        <div style={{ marginTop: '20px', fontSize: '1.2rem', display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                            <div style={{ width: '200px' }}><span style={{ color: 'blue', fontSize: '1.2rem' }}>Admininistração e <br /> Assistência Técnica : </span></div>
                            <div><span>Dia 17/DEZ/2021, sexta-feira, no horário normal </span></div>
                        </div>
                        <br />
                        <div style={{ fontSize: '1.2rem', display: 'flex', justifyContent: 'start' }}>
                            <div style={{ width: '200px' }}><span style={{ color: 'green', fontSize: '1.2rem' }}>Obras : </span></div>
                            <div><span>Dia 17/DEZ/2021, sexta-feira, no horário normal </span></div>
                        </div>
                        <div style={{ marginTop: '30px' }}>
                            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Retorno:</span>

                        </div>

                        <div style={{ marginTop: '20px', fontSize: '1.2rem', display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                            <div style={{ width: '200px' }}><span style={{ color: 'blue', fontSize: '1.2rem' }}>Admininistração e <br /> Assistência Técnica : </span></div>
                            <div><span>Dia 10/JAN/2022, segunda-feira, no horário normal </span></div>
                        </div>
                        <br />

                        <div style={{ fontSize: '1.2rem', display: 'flex', justifyContent: 'start' }}>
                            <div style={{ width: '200px' }}><span style={{ color: 'green', fontSize: '1.2rem' }}>Obras : </span></div>
                            <div><span>Dia 03/JAN/2022, segunda-feira, no horário normal </span></div>
                        </div>
                        <br />

                    </div>

                } />


            {/* ************************ bolinho cinira */}
            <MensagemText
                titulo="Aniversário"
                data="16/11/2021"
                cor="#28A745"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Cinira</span>,  comemorando seu aniversário, convida a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>, hoje, às 16:00, no 11º andar (recepção).
                </p>} />



            {/* ************************ niver Cinira */}
            <MensagemNiver
                titulo="Aniversário"
                data="16/11/2021"
                cor="#28A745"
                img="img/aniv04.png"
                nome="CINIRA"
                local="(Contabilidade)"
                dataExt="15/novembro - Segunda-feira"
            />


            {/* ************************ niver David */}
            <MensagemNiver
                titulo="Aniversário"
                data="11/11/2021"
                cor="steelblue"
                img="img/aniv08.png"
                nome="DAVID"
                local="(Compras)"
                dataExt="11/novembro - Quinta-feira"
            />

            {/* ************************ bolinho eugenio-cida */}
            <MensagemText
                titulo="Aniversários"
                data="23/09/2021"
                cor="#28A745"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Eugênio e Cida</span>, antecipando a comemoração dos seus aniversários, convidam a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>, hoje, às 16:30, no 11º andar (recepção).
                </p>} />

            {/* ************************ niver Eugenio e Cida */}
            <MensagemNiver2
                titulo="Aniversários"
                data="23/09/2021"
                cor="#28A745"
                img="img/aniv12.png"
                nome="EUGÊNIO"
                local="(Engenharia)"
                nome2="MARIA APARECIDA"
                local2="(Copa)"
                dataExt="24/setembro - Sexta-feira"
            />


            {/* ************************ bolinho lidia */}
            <MensagemText
                titulo="Aniversário"
                data="15/09/2021"
                cor="#steelblue"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Lidia</span>, comemorando seu aniversário, convida a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>, hoje, às 16:30, no 11º andar (recepção).
                </p>} />

            {/* ************************ niver Lidia */}
            <MensagemNiver
                titulo="Aniversário"
                data="15/09/2021"
                cor="steelblue"
                img="img/aniv11.png"
                nome="LIDIA"
                local="(NAC)"
                dataExt="15/setembro - Quarta-feira"
            />

            {/* ************************ bolinho tania */}
            <MensagemText
                titulo="Aniversário"
                data="12/08/2021"
                cor="#28A745"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Tania</span>,  comemorando seu aniversário, convida a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>, hoje, às 16:00, no 11º andar (recepção).
                </p>} />


            {/* ************************ niver Tania */}
            <MensagemNiver
                titulo="Aniversário"
                data="12/08/2021"
                cor="#28A745"
                img="img/aniv04.png"
                nome="TANIA"
                local="(Financeiro)"
                dataExt="12/agosto - Quinta-feira"
            />

            {/* ************************ bolinho antonio */}
            <MensagemText
                titulo="Aniversário"
                data="04/08/2021"
                cor="steelblue"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Antônio</span>,  comemorando seu aniversário, convida a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>, hoje, às 16:00, no 11º andar (recepção).
                </p>} />

            {/* ************************ niver Antonio */}
            <MensagemNiver
                titulo="Aniversário"
                data="02/08/2021"
                cor="steelblue"
                img="img/aniv01.png"
                nome="ANTÔNIO"
                local="(Compras)"
                dataExt="02/agosto - Segunda-feira"
            />

            {/* ************************ bolinho Liliane */}
            <MensagemText
                titulo="Aniversário"
                data="21/05/2021"
                cor="steelblue"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Liliane</span>,  comemorando seu aniversário, convida a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>, hoje, às 16:00, no 11º andar (recepção).
                </p>} />

            {/* ************************ niver Liliane */}
            <MensagemNiver
                titulo="Aniversário"
                data="20/05/2021"
                cor="steelblue"
                img="img/aniv01.png"
                nome="LILIANE"
                local="(Diretoria)"
                dataExt="20/maio - Quinta-feira"
            />

            {/* ************************ bolinho heliane */}
            <MensagemText
                titulo="Aniversário"
                data="26/04/2021"
                cor="#28A745"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Heliane</span>, comemorando seu aniversário, convida a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>, hoje, às 16:00, no 11º andar (recepção).
                </p>} />

            {/* ************************ niver Heliane */}
            <MensagemNiver
                titulo="Aniversário"
                data="26/04/2021"
                cor="#28A745"
                img="img/aniv04.png"
                nome="HELIANE"
                local="(Financeiro)"
                dataExt="26/abril - Segunda-feira"
            />

            {/* ************************ niver Michelli */}
            <MensagemNiver
                titulo="Aniversário"
                data="12/01/2022"
                cor="#28A745"
                img="img/aniv08.png"
                nome="MICHELLI"
                local="(Comercial)"
                dataExt="12/janeiro - Quarta-feira"
            />



            {/* ************************ bolinho marco */}
            <MensagemText
                titulo="Aniversário"
                data="23/04/2021"
                cor="steelblue"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Marco</span>, comemorando antecipadamente seu aniversário, convida a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>, hoje, às 15:00, no 11º andar (recepção).
                </p>} />

            {/* ************************ niver Marco */}
            <MensagemNiver
                titulo="Aniversário"
                data="23/04/2021"
                cor="steelblue"
                img="img/aniv08.png"
                nome="MARCO"
                local="(Engenharia)"
                dataExt="24/abril - Sábado"
            />



            {/* ************************  sexta feira santa 2021 */}
            <MensagemText
                titulo="Expediente semana santa"
                data="30/03/2021"
                cor="red"
                texto={
                    <p className="card-text" style={{ fontSize: '1.1em', textAlign: 'justify' }}>
                        <br />
                        Em função do feriado da Sexta-feira Santa
                        <br />

                        encerraremos nosso expediente na quinta-feira, dia 01/04/2021, às 16:00.
                        <br />
                        <br />
                    </p>
                } />

            {/* ************************ bolinho sueli */}
            <MensagemText
                titulo="Aniversário"
                data="04/02/2021"
                cor="steelblue"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Sueli</span>,  comemorando seu aniversário, convida a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>, hoje, às 15:30, no 11º andar (recepção).
                </p>} />

            {/* ************************ niver Sueli */}
            <MensagemNiver
                titulo="Aniversário"
                data="04/02/2021"
                cor="steelblue"
                img="img/aniv01.png"
                nome="SUELI"
                local="(RH)"
                dataExt="04/fevereiro - Sexta-feira"
            />



            {/* ************************ Expediente - Carnaval 2021 */}
            <MensagemText
                titulo="Expediente - Carnaval"
                data="03/02/2021"
                cor="red"
                texto={
                    <div className="card-text" style={{ fontSize: '1.5rem' }}>
                        <br />
                        <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Encerramento:</span>

                        <div style={{ marginTop: '20px', fontSize: '1.2rem', display: 'flex', justifyContent: 'start' }}>
                            <div style={{ width: '200px' }}><span style={{ color: 'blue', fontSize: '1.2rem' }}>Admin/Obras (Bliss) : </span></div>
                            <div><span>Dia 12/FEV/2021, sexta-feira, no horário normal </span></div>
                        </div>

                        <div style={{ fontSize: '1.2rem', display: 'flex', justifyContent: 'start' }}>
                            <div style={{ width: '200px' }}><span style={{ color: 'green', fontSize: '1.2rem' }}>Assistência Técnica : </span></div>
                            <div><span>Dia 12/FEV/2021, sexta-feira, no horário normal </span></div>
                        </div>
                        <div style={{ marginTop: '30px' }}>
                            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Retorno:</span>

                        </div>

                        <div style={{ marginTop: '20px', fontSize: '1.2rem', display: 'flex', justifyContent: 'start' }}>
                            <div style={{ width: '200px' }}><span style={{ color: 'blue', fontSize: '1.2rem' }}>Admin/Obras (Bliss) : </span></div>
                            <div><span>Dia 17/FEV/2021, quarta-feira, no horário normal </span></div>
                        </div>

                        <div style={{ fontSize: '1.2rem', display: 'flex', justifyContent: 'start' }}>
                            <div style={{ width: '200px' }}><span style={{ color: 'green', fontSize: '1.2rem' }}>Assistência Técnica : </span></div>
                            <div><span>Dia 15/FEV/2021, segunda-feira, no horário normal </span></div>
                        </div>
                        <br />

                    </div>

                } />


            {/* ************************ bolinho luize */}
            <MensagemText
                titulo="Aniversário"
                data="19/01/2021"
                cor="#28A745"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Luize</span>,  comemorando seu aniversário, convida a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>, hoje, às 16:00, no 11º andar (recepção).
                </p>} />



            {/* ************************ niver Luize */}
            <MensagemNiver
                titulo="Aniversário"
                data="19/01/2021"
                cor="#28A745"
                img="img/aniv04.png"
                nome="LUIZE"
                local="(Secretária)"
                dataExt="19/janeiro - Terça-feira"
            />




            {/* ************************ bolinho paulao */}
            <MensagemText
                titulo="Aniversário"
                data="11/12/2020"
                cor="steelblue"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Paulão</span>,  comemorando seu aniversário, convida a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>, hoje, às 16:00, no 11º andar (recepção).
                </p>} />

            {/* ************************ niver Paulão */}
            <MensagemNiver
                titulo="Aniversário"
                data="11/12/2020"
                cor="steelblue"
                img="img/aniv11.png"
                nome="PAULÃO"
                local="(Comercial)"
                dataExt="11/dezembro - Sexta-feira"
            />

            {/* ************************ Expediente - Fim de Ano 2020 */}
            <MensagemText
                titulo="Expediente - Fim de Ano"
                data="18/11/2020"
                cor="red"
                texto={
                    <div className="card-text" style={{ fontSize: '1.5rem' }}>
                        <br />
                        <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Encerramento:</span>

                        <div style={{ marginTop: '20px', fontSize: '1.2rem', display: 'flex', justifyContent: 'start' }}>
                            <div style={{ width: '200px' }}><span style={{ color: 'blue', fontSize: '1.2rem' }}>Administração : </span></div>
                            <div><span>Dia 18/DEZ/2020, sexta-feira, no horário normal </span></div>
                        </div>

                        <div style={{ fontSize: '1.2rem', display: 'flex', justifyContent: 'start' }}>
                            <div style={{ width: '200px' }}><span style={{ color: 'green', fontSize: '1.2rem' }}>Obras : </span></div>
                            <div><span>Dia 18/DEZ/2020, sexta-feira, no horário normal </span></div>
                        </div>
                        <div style={{ marginTop: '30px' }}>
                            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Retorno:</span>

                        </div>

                        <div style={{ marginTop: '20px', fontSize: '1.2rem', display: 'flex', justifyContent: 'start' }}>
                            <div style={{ width: '200px' }}><span style={{ color: 'blue', fontSize: '1.2rem' }}>Administração : </span></div>
                            <div><span>Dia 11/JAN/2021, segunda-feira, no horário normal </span></div>
                        </div>

                        <div style={{ fontSize: '1.2rem', display: 'flex', justifyContent: 'start' }}>
                            <div style={{ width: '200px' }}><span style={{ color: 'green', fontSize: '1.2rem' }}>Obras : </span></div>
                            <div><span>Dia 11/JAN/2021, segunda-feira, no horário normal </span></div>
                        </div>
                        <br />

                    </div>

                } />


            {/* ************************ bolinho cinira */}
            <MensagemText
                titulo="Aniversário"
                data="13/11/2020"
                cor="steelblue"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Cinira</span>, comemorando antecipadamente seu aniversário, convida a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>, hoje, às 16:00, no 11º andar (recepção).
                </p>} />

            {/* ************************ niver Cinira */}
            <MensagemNiver
                titulo="Aniversário"
                data="13/11/2020"
                cor="steelblue"
                img="img/aniv06.png"
                nome="CINIRA"
                local="(Contabilidade)"
                dataExt="15/novembro - Domingo"
            />


            {/* ************************ niver David */}
            <MensagemNiver
                titulo="Aniversário"
                data="11/11/2020"
                cor="#28A745"
                img="img/aniv01.png"
                nome="DAVID"
                local="(Compras)"
                dataExt="11/novembro - Quarta-feira"
            />

            {/* ************************ niver Rudmar */}
            <MensagemNiver
                titulo="Aniversário"
                data="29/09/2020"
                cor="steelblue"
                img="img/aniv08.png"
                nome="RUDMAR"
                local="(Assistência Técnica)"
                dataExt="29/setembro - Terça-feira"
            />

            {/* ************************ niver Eugenio e Cida */}
            <MensagemNiver2
                titulo="Aniversários"
                data="24/09/2020"
                cor="#28A745"
                img="img/aniv12.png"
                nome="EUGÊNIO"
                local="(Engenharia)"
                nome2="MARIA APARECIDA"
                local2="(Copa)"
                dataExt="24/setembro - Quinta-feira"
            />



            {/* ************************  niver cota */}
            <MensagemText
                titulo="Aniversário"
                data="13/08/2020"
                cor="red"
                texto={
                    <p className="card-text" style={{ fontSize: '1.1em', textAlign: 'justify' }}>
                        <br />
                        Bom dia colaboradores !
                        <br />
                        <br />
                        46 anos de vida. Parabéns por fazer parte
                        da história de Santa Catarina.
                        <br />
                        <br />
                        A Diretoria
                    </p>
                } />

            {/* ************************ niver Tania */}
            <MensagemNiver
                titulo="Aniversário"
                data="12/08/2020"
                cor="#28A745"
                img="img/aniv04.png"
                nome="TANIA"
                local="(Financeiro)"
                dataExt="12/agosto - Quarta-feira"
            />

            {/* ************************ niver Fábio */}
            <MensagemNiver
                titulo="Aniversário"
                data="01/07/2020"
                cor="steelblue"
                img="img/aniv11.png"
                nome="FÁBIO"
                local="(Diretoria)"
                dataExt="01/julho - Quarta-feira"
            />

            {/* ************************ niver Amilton */}
            <MensagemNiver
                titulo="Aniversário"
                data="15/06/2020"
                cor="#28A745"
                img="img/aniv01.png"
                nome="AMILTON"
                local="(TI)"
                dataExt="13/junho - Sábado"
            />

            {/* ************************ bolinho paulao */}
            <MensagemText
                titulo="Aniversário"
                data="11/12/2020"
                cor="steelblue"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Paulão</span>,  comemorando seu aniversário, convida a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>, hoje, às 16:00, no 11º andar (recepção).
                </p>} />

            {/* ************************ niver Paulão */}
            <MensagemNiver
                titulo="Aniversário"
                data="11/12/2020"
                cor="steelblue"
                img="img/aniv11.png"
                nome="PAULÃO"
                local="(Comercial)"
                dataExt="11/dezembro - Sexta-feira"
            />

            {/* ************************ niver Liliane */}
            <MensagemNiver
                titulo="Aniversário"
                data="20/05/2020"
                cor="steelblue"
                img="img/aniv04.png"
                nome="LILIANE"
                local="(Diretoria)"
                dataExt="20/maio - Quarta-feira"
            />

            {/* ************************ niver Aline */}
            <MensagemNiver
                titulo="Aniversário"
                data="04/05/2020"
                cor="#28A745"
                img="img/aniv12.png"
                nome="ALINE"
                local="(Engenharia)"
                dataExt="04/maio - Segunda-feira"
            />

            {/* ************************ niver Heliane */}
            <MensagemNiver
                titulo="Aniversário"
                data="27/04/2020"
                cor="steelblue"
                img="img/aniv11.png"
                nome="HELIANE"
                local="(Financeiro)"
                dataExt="26/abril - Domingo"
            />

            {/* ************************ niver Marco */}
            <MensagemNiver
                titulo="Aniversário"
                data="24/04/2020"
                cor="#28A745"
                img="img/aniv01.png"
                nome="MARCO"
                local="(Engenharia)"
                dataExt="24/abril - Sexta-feira"
            />


            {/* ************************ Expediente - Recesso COVID-19 */}
            <MensagemText
                titulo="Recesso COVID-19"
                data="18/03/2020"
                cor="red"
                texto={
                    <div className="card-text" style={{ fontSize: '1.5rem' }}>
                        <br />
                        <span style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Encerramento:</span>

                        <div style={{ marginTop: '20px', fontSize: '1.2rem', display: 'flex', justifyContent: 'start' }}>
                            <div style={{ width: '200px' }}><span style={{ color: 'blue', fontSize: '1.2rem' }}>Admin/Assist. Técnica : </span></div>
                            <div><span>Dia 18/MAR/2020, quarta-feira, às 15:30 </span></div>
                        </div>

                        <div style={{ fontSize: '1.2rem', display: 'flex', justifyContent: 'start' }}>
                            <div style={{ width: '200px' }}><span style={{ color: 'green', fontSize: '1.2rem' }}>Obras (BLISS) : </span></div>
                            <div><span>Dia 18/MAR/2020, quarta-feira, às 15:30 </span></div>
                        </div>
                        <div style={{ marginTop: '30px' }}>
                            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Retorno:</span>

                        </div>

                        <div style={{ marginTop: '20px', fontSize: '1.2rem', display: 'flex', justifyContent: 'start' }}>
                            <div style={{ width: '200px' }}><span style={{ color: 'blue', fontSize: '1.2rem' }}>Admin/Assist. Técnica : </span></div>
                            <div><span>Dia 25/MAR/2020, quarta-feira, no horário normal </span></div>
                        </div>

                        <div style={{ fontSize: '1.2rem', display: 'flex', justifyContent: 'start' }}>
                            <div style={{ width: '200px' }}><span style={{ color: 'green', fontSize: '1.2rem' }}>Obras (BLISS) : </span></div>
                            <div><span>Dia 30/MAR/2020, segunda-feira, no horário normal </span></div>
                        </div>
                        <br />

                    </div>

                } />



            {/* ************************ Expediente - Carnaval 2020 */}
            <MensagemText
                titulo="Expediente - Carnaval"
                data="18/02/2020"
                cor="red"
                texto={
                    <div className="card-text" style={{ fontSize: '1.5rem' }}>
                        <br />
                        <span style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Encerramento:</span>

                        <div style={{ marginTop: '20px', fontSize: '1.2rem', display: 'flex', justifyContent: 'start' }}>
                            <div style={{ width: '200px' }}><span style={{ color: 'blue', fontSize: '1.2rem' }}>Administração : </span></div>
                            <div><span>Dia 21/FEV/2020, sexta-feira, no horário normal </span></div>
                        </div>

                        <div style={{ fontSize: '1.2rem', display: 'flex', justifyContent: 'start' }}>
                            <div style={{ width: '200px' }}><span style={{ color: 'green', fontSize: '1.2rem' }}>Obras : </span></div>
                            <div><span>Dia 21/FEV/2020, sexta-feira, no horário normal </span></div>
                        </div>
                        <div style={{ marginTop: '30px' }}>
                            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Retorno:</span>

                        </div>

                        <div style={{ marginTop: '20px', fontSize: '1.2rem', display: 'flex', justifyContent: 'start' }}>
                            <div style={{ width: '200px' }}><span style={{ color: 'blue', fontSize: '1.2rem' }}>Administração : </span></div>
                            <div><span>Dia 26/FEV/2020, quarta-feira, às 13:30 </span></div>
                        </div>

                        <div style={{ fontSize: '1.2rem', display: 'flex', justifyContent: 'start' }}>
                            <div style={{ width: '200px' }}><span style={{ color: 'green', fontSize: '1.2rem' }}>Obras : </span></div>
                            <div><span>Dia 26/FEV/2020, quarta-feira, no horário normal </span></div>
                        </div>
                        <br />

                    </div>

                } />

            {/* ************************ niver Sueli */}
            <MensagemNiver
                titulo="Aniversário"
                data="05/02/2020"
                cor="#steelblue"
                img="img/aniv03.png"
                nome="SUELI"
                local="(Recursos Humanos)"
                dataExt="05/fevereiro - Quarta-feira"
            />

            {/* ************************ niver Luize */}
            <MensagemNiver
                titulo="Aniversário"
                data="20/01/2020"
                cor="#28A745"
                img="img/aniv01.png"
                nome="LUIZE"
                local="(Secretária)"
                dataExt="19/janeiro - Domingo"
            />

            {/* ************************ bolinho vanessa */}
            <MensagemText
                titulo="Aniversário"
                data="14/11/2019"
                cor="steelblue"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Cinira</span>, comemorando seu aniversário, convida a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>, hoje, às 16:30, no 11º andar (copa).
                </p>} />

            {/* ************************ niver Cinira */}
            <MensagemNiver
                titulo="Aniversário"
                data="14/11/2019"
                cor="steelblue"
                img="img/aniv06.png"
                nome="CINIRA"
                local="(Contabilidade)"
                dataExt="15/novembro - Sexta-feira"
            />

            {/* ************************ niver David */}
            <MensagemNiver
                titulo="Aniversário"
                data="11/11/2019"
                cor="#28A745"
                img="img/aniv03.png"
                nome="DAVID"
                local="(Compras)"
                dataExt="11/novembro - Segunda-feira"
            />

            {/* ************************ Expediente - Fim de Ano 2019 */}
            <MensagemText
                titulo="Expediente - Fim de Ano"
                data="07/11/2019"
                cor="red"
                texto={
                    <div className="card-text" style={{ fontSize: '1.5rem' }}>
                        <br />
                        <span style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Encerramento:</span>

                        <div style={{ marginTop: '20px', fontSize: '1.2rem', display: 'flex', justifyContent: 'start' }}>
                            <div style={{ width: '200px' }}><span style={{ color: 'blue', fontSize: '1.2rem' }}>Administração : </span></div>
                            <div><span>Dia 18/DEZ/2019, quarta-feira, no horário normal </span></div>
                        </div>

                        <div style={{ fontSize: '1.2rem', display: 'flex', justifyContent: 'start' }}>
                            <div style={{ width: '200px' }}><span style={{ color: 'green', fontSize: '1.2rem' }}>Obras : </span></div>
                            <div><span>Dia 20/DEZ/2019, sexta-feira, no horário normal </span></div>
                        </div>
                        <div style={{ marginTop: '30px' }}>
                            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Retorno:</span>

                        </div>

                        <div style={{ marginTop: '20px', fontSize: '1.2rem', display: 'flex', justifyContent: 'start' }}>
                            <div style={{ width: '200px' }}><span style={{ color: 'blue', fontSize: '1.2rem' }}>Administração : </span></div>
                            <div><span>Dia 06/JAN/2020, segunda-feira, no horário normal </span></div>
                        </div>

                        <div style={{ fontSize: '1.2rem', display: 'flex', justifyContent: 'start' }}>
                            <div style={{ width: '200px' }}><span style={{ color: 'green', fontSize: '1.2rem' }}>Obras : </span></div>
                            <div><span>Dia 06/JAN/2020, segunda-feira, no horário normal </span></div>
                        </div>
                        <br />

                    </div>

                } />

            {/* ************************ niver Grasy */}
            <MensagemNiver
                titulo="Aniversário"
                data="31/10/2019"
                cor="steelblue"
                img="img/aniv04.png"
                nome="GRASY"
                local="(Engenharia)"
                dataExt="31/outubro - Quinta-feira"
            />

            {/* ************************ niver Rudmar */}
            <MensagemNiver
                titulo="Aniversário"
                data="29/09/2019"
                cor="steelblue"
                img="img/aniv01.png"
                nome="RUDMAR"
                local="(Assistência Técnica)"
                dataExt="29/setembro - Domingo"
            />

            {/* ************************ niver eugenio cida */}
            <MensagemNiver2
                titulo="Aniversários"
                data="24/09/2019"
                cor="#28A745"
                img="img/aniv12.png"
                nome="EUGÊNIO"
                local="(Engenharia)"
                nome2="MARIA APARECIDA"
                local2="(Copa)"
                dataExt="24/setembro - Terça-feira"
            />

            {/* ************************ bolinho vanessa */}
            <MensagemText
                titulo="Aniversário"
                data="27/08/2019"
                cor="steelblue"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Vanessa</span>, comemorando seu aniversário, convida a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>, hoje, às 16:30, no 11º andar (copa).
                </p>} />
            {/* ************************ niver vanessa */}
            <MensagemNiver
                titulo="Aniversário"
                data="27/08/2019"
                cor="steelblue"
                img="img/aniv11.png"
                nome="VANESSA"
                local="(Engenharia)"
                dataExt="27/agosto - Terça-feira"
            />
            {/* ************************  niver cota */}
            <MensagemText
                titulo="Aniversário"
                data="13/08/2019"
                cor="red"
                texto={
                    <p className="card-text" style={{ fontSize: '1.1em', textAlign: 'justify' }}>
                        <br />
                        Bom dia colaboradores !
                        <br />
                        <br />
                        Hoje a Cota entra no seu 45º ano de vida.

                        Uma história que merece ser comemorada.

                        Somos umas das poucas incorporadoras da cidade com tantos

                        anos e atuante no mercado. Vários desafios e conquistas

                        já tivemos.

                        Parabéns para todos nós e obrigada por fazer parte desta história !

                        Hoje às 17 horas vamos nos reunir na copa para o famoso parabéns !
                        <br />
                        <br />
                        A Diretoria
                    </p>
                } />
            {/* ************************ bolinho tania */}
            <MensagemText
                titulo="Aniversário"
                data="12/08/2019"
                cor="green"
                texto={<p className="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span className='intra-card__texto-nome'>Tania</span>, comemorando seu aniversário, convida a
                    todos para aquele tradicional
                    <span className='intra-card__texto-bolo'> bolinho</span>, hoje, às 16:30, no 11º andar (copa).
                </p>} />
            {/* ************************ niver tania */}
            <MensagemNiver
                titulo="Aniversário"
                data="12/08/2019"
                cor="green"
                img="img/aniv11.png"
                nome="TANIA"
                local="(Financeiro)"
                dataExt="12/agosto - Segunda-feira"
            />
            {/* ************************ bolinho antonio */}
            <MensagemText
                titulo="Aniversário"
                data="07/08/2019"
                cor="steelblue"
                texto={
                    <div>
                        <p className="card-text" style={{ fontSize: '1.1em' }}>
                            <br />
                            <span className='intra-card__texto-nome'>Antônio</span>, que fez aniversário na última sexta-feira,
                            convida a
                            todos para comemorar com aquele tradicional
                            <span className='intra-card__texto-bolo'> bolinho</span>, hoje, às 16:30, no 11º andar (copa).
                        </p>
                    </div>
                } />
            {/* ************************ saida douglas */}
            <MensagemText
                titulo="Comunicado"
                data="16/07/2019"
                cor="red"
                texto={
                    <div>
                        <br />
                        <p className="card-text" style={{ fontSize: '1.2rem' }}>
                            Comunicamos que o Sr. DOUGLAS FERNANDO RODRIGUES
                            não faz mais parte do nosso quadro de funcionários.
                            <br />
                        </p>
                    </div>
                } />
            {/* ************************ corpus christi */}
            <MensagemText
                titulo="Corpus Christi"
                data="18/06/2019"
                cor="grey"
                texto={
                    <div>
                        <br />
                        <p className="card-text" style={{ fontSize: '1.2rem' }}>
                            Em razão do feriado de Corpus Christi, quinta-feira,
                            <br />
                            não haverá expediente no dia 21/JUN/2019 - sexta-feira.
                        </p>
                    </div>
                } />

            {/* ************************ corpus christi */}
            <MensagemImg
                titulo="Confraternização de Fim de Ano"
                data="22/12/2018"
                cor="red"
                img="img/fim ano 2018 02.PNG"
            />



        </div>
    )
}

export default MensagensLista