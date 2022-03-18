import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import clienteAxios from '../../../config/axios'
import { dataFormatada } from '../../../util/util'

import './pessoaFichaCadastral.css'

const PessoaFichaCadastral = () => {

    const [formDataI, setFormDataI] = useState({})
    const [formDataII, setFormDataII] = useState({})

    const { token } = useSelector(state => state.login.login)

    const location = useLocation()

    const id_pessoa = location.state

    console.log('state ', location.state)

    const getDados = (id_pessoa) => {

        clienteAxios.get(`/pessoa/${id_pessoa}`, { headers: { Authorization: token } })
            .then(resposta => {
                const id_pessoa = resposta.data.id_pessoa
                setFormDataI(resposta.data)

                clienteAxios.get(`/pessoacomplemento/id/${id_pessoa}`, { headers: { Authorization: token } })
                    .then(resposta => {
                        if (resposta.data.length === 0) {
                            setFormDataII({})
                        } else {
                            setFormDataII(resposta.data[0])
                        }

                        // PessoaFichaCadastral(formDataI, formDataII)

                    })
                    .catch(err => {
                        console.log('Erro ao buscar ', err)
                    })
            })
            .catch(err => {
                console.log('Erro ao buscar ', err)
            })
    }

    useEffect(() => {
        getDados(id_pessoa)
    }, [])

    const tipoPessoax = formDataI.tipo_pessoa === 2 ? 'Jurídica' : 'Física'
    const sexox = formDataII.sexo === 1 ? 'Masculino' : 'Feminino'

    let estadoCivilx
    switch (formDataII.estado_civil) {
        case 1:
            estadoCivilx = 'Solteiro(a)'
            break
        case 2:
            estadoCivilx = 'Casado(a)'
            break
        case 3:
            estadoCivilx = 'Separado(a)'
            break
        case 4:
            estadoCivilx = 'Divorciado(a)'
            break
        case 5:
            estadoCivilx = 'Viúvo(a)'
            break
    }

    let regimeCasamentox
    switch (formDataII.estado_civil) {
        case 1:
            regimeCasamentox = 'Comunhão Universal de Bens'
            break
        case 2:
            regimeCasamentox = 'Comunhão Parcial de Bens'
            break
        case 3:
            regimeCasamentox = 'Separação de Bens'
            break
        case 4:
            regimeCasamentox = 'Outros'
            break
    }

    const uniaoEstavelx = formDataII.uniao_estavel === 0 ? 'Não' : 'Sim'

    const dados = [
        { title: 'Tipo de Pesssoa:', value: tipoPessoax },
        { title: 'CPF:', value: formDataI.cpf_cnpj },
        { title: 'Nome:', value: formDataI.nome },
        { title: 'CEP:', value: formDataI.cep },
        { title: 'Endereço:', value: formDataI.endereco },
        { title: 'Complemento:', value: formDataI.complemento },
        { title: 'Bairro:', value: formDataI.bairro },
        { title: 'Município:', value: formDataI.municipio },
        { title: 'UF:', value: formDataI.uf },

        { title: 'Data de Nascimento:', value: formDataII.data_nascimento },
        { title: 'Nacionalidade:', value: formDataII.nacionalidade },
        { title: 'Sexo:', value: sexox },
        { title: 'Estado Civil:', value: estadoCivilx },
        { title: 'União Estável:', value: uniaoEstavelx },
        { title: 'Nome do Cônjuge:', value: formDataII.conjuge_nome },
        { title: 'CPF do Cônjuge:', value: formDataII.conjuge_cpf },
        { title: 'Regime de Casamento:', value: regimeCasamentox },
        { title: 'Data do Casamento:', value: formDataII.data_casamento },
        // { Pacto Antenupcial: 'UF:', value: formDataII.uf },
        { title: 'Profissão:', value: formDataII.profissao },
        { title: 'Número de dependentes:', value: formDataII.numero_dependentes },
        { title: 'Número do RG:', value: formDataII.rg },
        { title: 'Data da Expedição:', value: formDataII.data_expedicao },
        { title: 'Órgão Emissor:', value: formDataII.orgao_emissor_uf },
        { title: 'Empresa onde trabalha:', value: formDataII.empresa_nome },
        { title: 'Tempo na empresa:', value: formDataII.tempo_empresa },
        { title: 'Cargo:', value: formDataII.cargo },
        { title: 'Renda Familiar:', value: formDataII.remuneracao },
    ]

    const renda = [
        { title: 'Percentual:', value: formDataII.financ_valor },
        { title: 'Prazo:', value: formDataII.financ_prazo },
        { title: 'Descrição:', value: formDataII.financ_descricao },
    ]

    return (
        <div className='pessoa-ficha__main'>
            <div className='pessoa-ficha__titulo'>
                Ficha Cadastral
            </div>
            {
                dados.map(linha => (
                    <div className='pessoa-ficha__linha-container'>
                        <div className='pessoa-ficha__linha-title'>{linha.title}</div>
                        <div className='pessoa-ficha__linha-value'>{linha.value}</div>
                    </div>



                ))
            }
            <div>
                <label className='pessoa-ficha__subtitle'>Comprometimento da Renda Familiar</label>
                <div>
                    {
                        renda.map(linha => (
                            <div className='pessoa-ficha__linha-container'>
                                <div className='pessoa-ficha__linha-title'>{linha.title}</div>
                                <div className='pessoa-ficha__linha-value'>{linha.value}</div>
                            </div>



                        ))
                    }

                </div>
                <div className='pessoa-ficha__assinatura-container'>

                        <span style={{fontSize: '0.7rem', paddingBottom: '10px'}}>Florianópolis, {dataFormatada()}</span>
                        <span className='pessoa-ficha__assinatura'>{formDataI.nome}</span>


                </div>
            </div>

        </div>
    );
}

export default PessoaFichaCadastral;