import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import clienteAxios from '../../config/axios'
import Form from '../../components/Form'
import Input from '../../components/Input'
import Button from '../../components/Button'
import RadioBox from '../../components/RadioBox'

const classes = ''

const Header = props => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const getOutHandle = () => {
        navigate(-1)
    }
    return (
        <div className='pessoa-container__header-buttons'>
            <h2 className='pessoa-main__title'>Cadastro de Empreendimntos</h2>

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
        id_empreendimento: null,
        taxa_vpl: null,
        custo_adm: null,
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
        antigo: null,
        desconto_oportunidade: null,
        ctb_tipo: null,
        ctb_scp: null,
        ctb_enviado: null,
        desconto_qdoinserido: null,
        id_engenheiro: null,
        custoobraencerrado: null,
        valor_vpl_negativo: null,
        desconto_avista_corretor: null,
        area_privativa_aptos: null,
        desc_av_dinheiro: null,
        encerrado: null,
        desc_av_direta: null,
        desc_av_lojas: null,
        data_conclusao2: null,
        id_padrao_empreendimento: null,
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
        nagarantia: false,
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


    const { token } = useSelector(state => state.login.login)

    const navigate = useNavigate()

    const location = useLocation()

    const id_empreendimento = location.state

    const [formData, setFormData] = useState(initialState)
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

    let classe1 = 'form-form form-form__no-top-border form-form__tab-content'
    if (toggleState === 1) {
        classe1 = classe1 + ' form-form__tab-active-content'
    }

    let classe2 = 'form-form form-form__no-top-border form-form__tab-content'
    if (toggleState === 2) {
        classe2 = classe2 + ' form-form__tab-active-content'
    }

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
                <Form className={classe1}>

                    {/* Situação */}
                    <RadioBox
                        name='empreend_status'
                        label='Situação:'
                        direction='column'
                    >
                        <div className='form-radioBoxLinha'>
                            <input
                                type='radio'
                                name='empreend_status'
                                id="empreend_status1"
                                onChange={textHandle}

                                value={formData.empreend_status}
                                checked={formData.empreend_status.toString() === "1"}
                            /><label htmlFor="empreend_status1">Lançamento</label>
                        </div>
                        <div className='form-radioBoxLinha'>
                            <input
                                type='radio'
                                name='empreend_status'
                                id="empreend_status2"
                                onChange={textHandle}
                                value={formData.empreend_status}
                                checked={formData.empreend_status.toString() === "2"}
                            /><label htmlFor="empreend_status2">Em construção</label>
                        </div>
                        <div className='form-radioBoxLinha'>
                            <input
                                type='radio'
                                name='empreend_status'
                                id="empreend_status3"
                                onChange={textHandle}
                                value={formData.empreend_status}
                                checked={formData.empreend_status.toString() === "3"}
                            /><label htmlFor="empreend_status3">Concluído</label>
                        </div>
                        <div className='form-radioBoxLinha'>
                            <input
                                type='radio'
                                name='empreend_status'
                                id="empreend_status4"
                                onChange={textHandle}
                                value={formData.empreend_status}
                                checked={formData.empreend_status.toString() === "4"}
                            /><label htmlFor="empreend_status4">Terceiros</label>
                        </div>
                        <div className='form-radioBoxLinha'>
                            <input
                                type='radio'
                                name='empreend_status'
                                id="empreend_status5"
                                onChange={textHandle}
                                value={formData.empreend_status}
                                checked={formData.empreend_status.toString() === "5"}
                            /><label htmlFor="empreend_status5">Vendido</label>
                        </div>
                    </RadioBox>

                    {/* Apelido */}
                    <Input
                        className='w200'
                        label='Apelido:'
                        type='text'
                        id='apelido'
                        name='apelido'
                        next='nome'
                        value={formData.apelido}
                        onChange={textHandle}
                        onKeyDown={e => nextField(e.keyCode, 'nome')}
                    />

                    {/* Nome */}
                    <Input
                        label='Nome:'
                        type='text'
                        id='nome'
                        name='nome'
                        next='endereco'
                        value={formData.nome}
                        onChange={textHandle}
                        onKeyDown={e => nextField(e.keyCode, 'endereco')}
                    />

                    {/* Endereço */}
                    <Input
                        label='Endereço:'
                        type='text'
                        id='endereco'
                        name='endereco'
                        next='complemento'
                        value={formData.endereco}
                        onChange={textHandle}
                        onKeyDown={e => nextField(e.keyCode, 'complemento')}
                    />

                    {/* Complemento */}
                    <Input
                        label='Complemento:'
                        type='text'
                        id='complemento'
                        name='complemento'
                        next='bairro'
                        value={formData.complemento}
                        onChange={textHandle}
                        onKeyDown={e => nextField(e.keyCode, 'bairro')}
                    />

                    {/* Bairro */}
                    <Input
                        label='Bairro:'
                        type='text'
                        id='bairro'
                        name='bairro'
                        next='cep'
                        value={formData.bairro}
                        onChange={textHandle}
                        onKeyDown={e => nextField(e.keyCode, 'cep')}
                    />

                    {/* CEP */}
                    <Input
                        label='CEP:'
                        type='text'
                        id='cep'
                        name='cep'
                        next='municipio'
                        value={formData.cep}
                        onChange={textHandle}
                        onKeyDown={e => nextField(e.keyCode, 'municipio')}
                    />

                    {/* Município */}
                    <Input
                        label='Município:'
                        type='text'
                        id='municipio'
                        name='municipio'
                        next='tx_nomeform'
                        value={formData.municipio}
                        onChange={textHandle}
                        onKeyDown={e => nextField(e.keyCode, 'tx_nomeform')}
                    />

                    {/* UF */}
                    <div className='form-inputBox'>
                        <label htmlFor="uf">UF:</label>
                        <select
                            className='form-input'
                            id="uf"
                            name="uf"
                            onChange={textHandle}
                            value={formData.uf}
                        >
                            <option value="SC">SANTA CATARINA</option>
                            <option value="AC">ACRE</option>
                            <option value="AL">ALAGOAS</option>
                            <option value="AP">AMAPÁ</option>
                            <option value="AM">AMAZONAS</option>
                            <option value="BA">BAHIA</option>
                            <option value="CE">CEARÁ</option>
                            <option value="DF">DISTRITO FEDERAL</option>
                            <option value="ES">ESPÍRITO SANTO</option>
                            <option value="GO">GOIÁS</option>
                            <option value="MA">MARANHÃO</option>
                            <option value="MT">MATO GROSSO</option>
                            <option value="MS">MATO GROSSO DO SUL</option>
                            <option value="MG">MINAS GERAIS</option>
                            <option value="PA">PARÁ</option>
                            <option value="PB">PARAÍBA</option>
                            <option value="PR">PARANÁ</option>
                            <option value="PE">PERNAMBUCO</option>
                            <option value="PI">PIAUÍ</option>
                            <option value="RJ">RIO DE JANEIRO</option>
                            <option value="RN">RIO GRANDE DO NORTE</option>
                            <option value="RS">RIO GRANDE DO SUL</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                        </select>
                    </div>

                    {/* Telefones */}
                    <Input
                        label='Telefones:'
                        type='text'
                        id='telefones'
                        name='telefones'
                        next='email'
                        value={formData.telefones}
                        onChange={textHandle}
                        onKeyDown={e => nextField(e.keyCode, 'email')}
                    />

                    {/* Email */}
                    <Input
                        label='Email:'
                        type='text'
                        id='email'
                        name='email'
                        next='cep'
                        value={formData.email}
                        onChange={textHandle}
                        onKeyDown={e => nextField(e.keyCode, 'cep')}
                    />


                    <div style={{ marginTop: '20px', width: '100%', textAlign: 'center' }}>
                        <Button
                            className='w150'
                            title='Salvar'
                            onClick={onClickButton}
                        />
                    </div>
                </Form>
                <Form className={classe2}>

                    {/* Situação */}
                    <RadioBox
                        name='empreend_status'
                        label='Situação:'
                        direction='column'
                    >
                        <div className='form-radioBoxLinha'>
                            <input
                                type='radio'
                                name='empreend_status'
                                id="empreend_status1"
                                onChange={textHandle}

                                value={formData.empreend_status}
                                checked={formData.empreend_status.toString() === "1"}
                            /><label htmlFor="empreend_status1">Lançamento</label>
                        </div>
                        <div className='form-radioBoxLinha'>
                            <input
                                type='radio'
                                name='empreend_status'
                                id="empreend_status2"
                                onChange={textHandle}
                                value={formData.empreend_status}
                                checked={formData.empreend_status.toString() === "2"}
                            /><label htmlFor="empreend_status2">Em construção</label>
                        </div>
                        <div className='form-radioBoxLinha'>
                            <input
                                type='radio'
                                name='empreend_status'
                                id="empreend_status3"
                                onChange={textHandle}
                                value={formData.empreend_status}
                                checked={formData.empreend_status.toString() === "3"}
                            /><label htmlFor="empreend_status3">Concluído</label>
                        </div>
                        <div className='form-radioBoxLinha'>
                            <input
                                type='radio'
                                name='empreend_status'
                                id="empreend_status4"
                                onChange={textHandle}
                                value={formData.empreend_status}
                                checked={formData.empreend_status.toString() === "4"}
                            /><label htmlFor="empreend_status4">Terceiros</label>
                        </div>
                        <div className='form-radioBoxLinha'>
                            <input
                                type='radio'
                                name='empreend_status'
                                id="empreend_status5"
                                onChange={textHandle}
                                value={formData.empreend_status}
                                checked={formData.empreend_status.toString() === "5"}
                            /><label htmlFor="empreend_status5">Vendido</label>
                        </div>
                    </RadioBox>
                    </Form>
            </main>
        </div>
    );
}

export default EmpreendimentoCad;