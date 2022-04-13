import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import clienteAxios from '../../config/axios'
import { useSelector } from 'react-redux'

import ConsultaPadrao from '../../components/ConsultaPadrao'

const EmpreendimentoLista = () => {

    const [atualizar, setAtualizar] = useState(1)

    const navigate = useNavigate()

    const { token } = useSelector(state => state.login.login)

    const goToForm = (reg) => {

        const id = reg ? reg.id_empreendimento : null

        console.log('id    ..', id)

        navigate('/empreendimento/formdados', { state: id })
    }

    const deleteHandle = id => {
        Swal.fire({
            title: 'Tem certeza?',
            text: "Você está excluindo este registro!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'OK, excluído!'
        }).then((result) => {
            if (result.isConfirmed) {
                clienteAxios.delete(`/empreendimento/del/${id}`, { headers: { Authorization: token } })
                    .then(resposta => {
                        setAtualizar(2)
                    })
                    .catch(err => {
                        // dispatch(descargaEmpreendimentosError())
                    })

                Swal.fire(
                    'Excluído!'
                )
            }
        })

    }

    return (
        <>
            <ConsultaPadrao
                atualizar={atualizar}
                title = 'Empreendimentos'
                api = '/empreendimentos'
                fieldId = 'id_empreendimento'
                fieldName = 'nome'
                fieldAux = ''
                onClick1 = {() => goToForm(null)}
                onClick2 = {() => {}}
                onClick3 ={() => navigate('/erp', { replace: true })}

                onClick11 = {(reg) => goToForm(reg)}  //edit
                onClick12 = {() => {}}  //pdf
                onClick13 = {(reg) => deleteHandle(reg)}  //del

                nomeEmpresa='COTA Empreendimentos Imobiliários Ltda.'
                tituloDocumento='Relação de Empreendimentos'

            />
        </>
    );
}

export default EmpreendimentoLista;