import { useNavigate } from 'react-router-dom'

import ConsultaPadrao from '../../../components/ConsultaPadrao'
import LoggedBar from '../../../components/LoggedBar'

const PessoaLista = () => {
    
    const navigate = useNavigate()

    const goToForm = (reg) => {

        const id = reg ? reg.id_pessoa : null
        navigate('/pessoa/formdados', { state: id })
    }

    const deleteHandle = (reg) => {
        console.log('del', reg)
    }

    return (
        <>
        <LoggedBar />
        <ConsultaPadrao
            title = 'Pessoas'
            api = '/pessoas'
            fieldId = 'id_pessoa'
            fieldName = 'nome'
            fieldAux = ''
            onClick1 = {() => goToForm(null)}
            onClick2 = {() => {}}
            onClick3 ={() => navigate('/erp', { replace: true })}

            onClick11 = {(reg) => goToForm(reg)}  //edit
            onClick12 = {() => {}}  //pdf
            onClick13 = {(reg) => deleteHandle(reg)}  //del

            nomeEmpresa='COTA Empreendimentos Imobiliários Ltda.'
            tituloDocumento='Relação de Usuários'

        />
    </>
    );
}

export default PessoaLista;