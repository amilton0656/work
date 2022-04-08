import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import clienteAxios from '../../config/axios'
import Form from '../../components/Form'
import Input from '../../components/Input'
import Button from '../../components/Button'
import RadioBox from '../../components/RadioBox'
import { FiSearch } from 'react-icons/fi'
import EmpreendimentoCadTab1 from './EmpreendimentoCadTab1'
import EmpreendimentoCadTab2 from './EmpreendimentoCadTab2'
import EmpreendimentoCadTab3 from './EmpreendimentoCadTab3'

const classes = ''

const Header = props => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const getOutHandle = () => {
        navigate(-1)
    }
    return (
        <div className='pessoa-container__header-buttons'>
            <h2 className='pessoa-main__title'>Cadastro de Empreendimentos</h2>

            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <Button
                    className='w150'
                    bg='transparent'
                    c='white'
                    title='<<<  Voltar'
                    onClick={getOutHandle}
                    style={{ textAlign: 'right' }}
                    span='btn-span-right'
                />
            </div>
        </div>
    )
}

const EmpreendimentoCad = props => {

    const dispatch = useDispatch()

    const initialState = {
        nome: '',
        endereco: '',
        complemento: '',
        bairro: '',
        municipio: '',
        uf: '',
        cep: '',
        telefones: '',
        email: '',

        area_total: null,
        area_equivalente: null,
        data_inicio: null,
        data_conclusao: null,
        data_habitese: null,
        num_incorporacao: '',
        num_alvara: '',
        num_projeto: '',
    engenheiro: '',
    crea: '',
    tipo: '0',
        referencia: null,
        juros_financiamento: null,
        id_empreiteira: null,
        id_empresa: null,
        taxa_vpl: null,
        custo_adm: '0',
    corretagem_perc: null,
        bonus_perc: null,
    terceiros: null,
        empreend_status: '1',
        id_indice: null,
        taxa_vpl_negativo: null,
        desc_av_bancaria: null,
        area_privativa: null,
        qtde_unidades: null,
        apelido: '',
    incorporacao: null,
        percexecutado: null,
        limitedescontoavista: null,
        antigo: '0',
        desconto_oportunidade: null,
        ctb_tipo: '0',
        ctb_scp: '0',
        ctb_enviado: '0',
        desconto_qdoinserido: null,
        id_engenheiro: null,
        custoobraencerrado: '0',
        valor_vpl_negativo: null,
        desconto_avista_corretor: null,
        area_privativa_aptos: null,
        desc_av_dinheiro: null,
        encerrado: '0',
        desc_av_direta: null,
        desc_av_lojas: null,
        data_conclusao2: null,
        id_padrao_empreendimento: '0',
    valor_cub: null,
    valor_contrato: null,
    percentual_mo: null,
    percentual_material: null,
    valor_taxas_impostos: null,
        custototal: null,
        cubporm2: null,
        custototalviab: null,
        cubporm2viab: null,
    valor_taxas_impostos_material: null,
        endereco_pedido: '',
    tabweb_bancaria: '',
    tabweb_direta: '',
    tabweb_bancaria_cota: '',
    tabweb_direta_cota: '',
        nagarantia: '0',
        incorporacao_data: null,
        projeto_data: null,
        alvara_data: null,
        matricula_num: '',
        matricula_num_ofic_reg_imov: '',
        lap_num: '',
        lap_data: null,
        lap_orgao: '',
        banco: '',
        agencia: '',
        conta_corrente: '',
        habitese_num: '',
    duracao_meses: null,
        valor_orc: null,
        valor_mo: null,
        imposto_mo: null,
        data_base: null,

    }

    const initialStateAuxiliar = {
        nomeEmpresa: '',
        nomeEmpreiteira: '',
        nomeEngenheiro: ''
    }


    const { token } = useSelector(state => state.login.login)

    const navigate = useNavigate()

    const location = useLocation()

    const id_empreendimento = location.state

    const [formData, setFormData] = useState(initialState)
    const [formDataAuxiliar, setFormDataAuxiliar] = useState(initialStateAuxiliar)

    const [toggleState, setToggleState] = useState(1);

    useEffect(() => {

        if (id_empreendimento) {
            clienteAxios.get(`/empreendimento/${id_empreendimento}`, { headers: { Authorization: token } })
                .then(resposta => {
                    resposta.data.fg_somente_seus = resposta.data.fg_somente_seus === null ? 0 : resposta.data.fg_somente_seus
                    setFormData(resposta.data)
                })
                .catch(err => {
                    console.log('Erro ao buscar ', err)
                })
        }
    }, [])

    const addHandle = event => {

        event.preventDefault()

        clienteAxios.post('/empreendimento/add', formData, { headers: { Authorization: token } })
            .then(resposta => {
                navigate('/empreendimento/lista', { state: true })
            })
            .catch(err => {
                console.log('Erro ao cadastrar ', err)
            })
    }

    const editHandle = event => {

        event.preventDefault()

        clienteAxios.put('/empreendimento/upd', formData, { headers: { Authorization: token } })
            .then(resposta => {
                navigate('/empreendimento/lista', { state: true })
            })
            .catch(err => {
                console.log('Erro ao atualizar')
            })

    }


    const onKeyPressHandle = e => {
        if (e.which === 13 || e.keyCode == 13) {
            alert('digitou enter')
        }
    }

    const textHandle = (event) => {

        let dataEntered = event.target.value

        if (event.target.name === 'nm_empreendimento' ||
            event.target.name === 'apelido') {
            dataEntered = event.target.value.toUpperCase()
        }

        if (event.target.name === 'fg_somente_seus') {
            dataEntered = event.target.value === false ? '0' : '1'
        }

        setFormData({
            ...formData,
            [event.target.name]: dataEntered
        })
    }

    const nextField = (keyCode, field) => {
        if (keyCode == 13) {
            document.getElementById(field).focus()
        }
    }

    const onClickButton = id_empreendimento ? editHandle : addHandle

    const toggleTab = (index) => {
        setToggleState(index)
    }

    const classe = 'form-form form-form__no-top-border form-form__tab-content'
    const classeActive = ' form-form__tab-active-content'

    const classe1 = toggleState === 1 ? classe + classeActive : classe
    const classe2 = toggleState === 2 ? classe + classeActive : classe
    const classe3 = toggleState === 3 ? classe + classeActive : classe

    return (
        <div className='pessoa-container'>
            <main className='pessoa-main'>
                <Header />
                <div className='form-form__top-header'>
                    <button
                        className={toggleState === 1 ? "form-form__tabs form-form__active-tabs" : "form-form__tabs"}
                        onClick={() => toggleTab(1)}
                    >
                        Tab 1
                    </button>
                    <button
                        className={toggleState === 2 ? "form-form__tabs form-form__active-tabs" : "form-form__tabs"}
                        onClick={() => toggleTab(2)}
                    >
                        Tab 2
                    </button>
                    <button
                        className={toggleState === 3 ? "form-form__tabs form-form__active-tabs" : "form-form__tabs"}
                        onClick={() => toggleTab(3)}
                    >
                        Tab 3
                    </button>

                </div>

                <EmpreendimentoCadTab1
                    classe1={classe1}
                    textHandle={textHandle}
                    nextField={nextField}
                    onClickButton={onClickButton}
                    formData={formData}
                    setFormData={setFormData}
                    formDataAuxiliar={formDataAuxiliar}
                    setFormDataAuxiliar={setFormDataAuxiliar}
                />

                <EmpreendimentoCadTab2
                    classe2={classe2}
                    textHandle={textHandle}
                    nextField={nextField}
                    onClickButton={onClickButton}
                    formData={formData}
                    setFormData={setFormData}
                    formDataAuxiliar={formDataAuxiliar}
                    setFormDataAuxiliar={setFormDataAuxiliar}
                />

                <EmpreendimentoCadTab3
                    classe2={classe3}
                    textHandle={textHandle}
                    nextField={nextField}
                    onClickButton={onClickButton}
                    formData={formData}
                    setFormData={setFormData}
                    formDataAuxiliar={formDataAuxiliar}
                    setFormDataAuxiliar={setFormDataAuxiliar}
                />



            </main>
        </div>
    );
}

export default EmpreendimentoCad;