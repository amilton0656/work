
import './cabecalho.css'

const Cabecalho = props => {

    const now = new Date
    const dayName = new Array ("domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado")
    const monName = new Array ("janeiro", "fevereiro", "março", "abril", "Maio", "junho", "agosto", "outubro", "novembro", "dezembro")
    const diaSemana = dayName[now.getDay()]
    const dia = now.getDate ()
    const mes = monName [now.getMonth()]
    const ano = now.getFullYear ()


    return (
        <>
        <div style = {props.pagina > 1 ? {height: '30px'} : {}}></div>
        <div className="cabecalho-main">
            <div className="cabecalho-logo">
                Logo
            </div>
            <div className="cabecalho-container">
                <div className="cabecalho-linha">
                    <span>{props.nomeEmpresa}</span>
                    <span>Página: {props.pagina}</span>


                </div>
                <div className="cabecalho-linha">
                    <span>{props.tituloDocumento}</span>
                    <span style ={{fontSize: '0.8rem'}}>{`${diaSemana}, ${dia} de ${mes} de ${ano}`}</span>


                </div>
            </div>

        </div>
        </>
    );
}

export default Cabecalho;