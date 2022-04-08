import { useState } from 'react'
import Form from '../../components/Form'
import Input from '../../components/Input'
import Button from '../../components/Button'
import RadioBox from '../../components/RadioBox'
import InputNumber from '../../components/InputNumber'
import Textarea from '../../components/Textarea'
import { FiSearch } from 'react-icons/fi'

import './empreendimentoCad.css'

import ListaAuxiliar from '../../components/ListaAuxiliar'

const EmpreendimentoCadTab3 = props => {

    const [showAuxiliarEmpresas, setShowAuxiliarEmpresas] = useState(false)
    const [showAuxiliarEmpreiteiras, setShowAuxiliarEmpreiteiras] = useState(false)
    const [showAuxiliarEngenheiros, setShowAuxiliarEngenheiros] = useState(false)

    const clickEmpresaSelectedHandle = (reg) => {

        props.setFormDataAuxiliar({
            ...props.formDataAuxiliar,
            nomeEmpresa: reg.nome
        })
        props.setFormData({
            ...props.formData,
            id_pessoa: reg.id_pessoa
        })

    }

    const clickEmpreiteiraSelectedHandle = (reg) => {

        props.setFormDataAuxiliar({
            ...props.formDataAuxiliar,
            nomeEmpreiteira: reg.nome
        })
        props.setFormData({
            ...props.formData,
            id_pessoa: reg.id_pessoa
        })

    }

    const clickEngenheiroSelectedHandle = (reg) => {

        props.setFormDataAuxiliar({
            ...props.formDataAuxiliar,
            nomeEngenheiro: reg.nome
        })
        props.setFormData({
            ...props.formData,
            id_pessoa: reg.id_pessoa
        })

    }

    return (
        <>
            <Form className={props.classe2}>
                <fieldset className='empr-cad__fieldset'>
                    <legend> Informações da Medição </legend>
                    <div className='empr-cad__box-areas'>
                        {/* Valor Orçamento em CUB's */}
                        <InputNumber
                            label="Orçamento em CUB's:"
                            formData={props.formData}
                            setFormData={props.setFormData}
                            className='w150'
                            id="valor_orc"
                            name="valor_orc"
                            onChange={() => { }}
                        />

                        {/* M. Obra em CUB's */}
                        <InputNumber
                            label="M. Obra em CUB's:"
                            formData={props.formData}
                            setFormData={props.setFormData}
                            className='w150'
                            id="valor_mo"
                            name="valor_mo"
                            onChange={() => { }}
                        />
                    </div>

                    <div className='empr-cad__box-areas'>
                        {/* Imposto M. Obra */}
                        <InputNumber
                            label="Imposto M. Obra:"
                            formData={props.formData}
                            setFormData={props.setFormData}
                            className='w150'
                            id="imposto_mo"
                            name="imposto_mo"
                            onChange={() => { }}
                        />


                    </div>

                    <div className='empr-cad__box-areas'>
                        {/* Data base */}
                        <Input
                            label='Data base:'
                            type='text'
                            id='data_base'
                            name='data_base'
                            value={props.formData.data_base}
                            onChange={props.textHandler}
                            className='w150'
                        />

                        {/* Privativa */}
                        <Input
                            label='Duração em meses:'
                            type='number'
                            id='data_expedicao'
                            name='data_expedicao'
                            value={props.formData.data_expedicao}
                            onChange={props.textHandler}
                            className='w150'
                        />
                    </div>

                    <RadioBox
                        name='id_padrao_empreendimento'
                        label='Padrão da construção:'
                        direction='column'
                    >
                        <div className='form-radioBoxLinha'>
                            <input
                                type='radio'
                                name='id_padrao_empreendimento'
                                id="id_padrao_empreendimento1"
                                onChange={props.textHandle}

                                value={props.formData.id_padrao_empreendimento}
                                checked={props.formData.id_padrao_empreendimento.toString() === "1"}
                            /><label htmlFor="id_padrao_empreendimento1">Médio</label>
                        </div>
                        <div className='form-radioBoxLinha'>
                            <input
                                type='radio'
                                name='id_padrao_empreendimento'
                                id="id_padrao_empreendimento2"
                                onChange={props.textHandle}
                                value={props.formData.id_padrao_empreendimento}
                                checked={props.formData.id_padrao_empreendimento.toString() === "2"}
                            /><label htmlFor="id_padrao_empreendimento2">Standart</label>
                        </div>
                    </RadioBox>

                </fieldset>

                <fieldset className='empr-cad__fieldset'>
                    <legend> Custo </legend>

                    {/* Incorporação */}
                    <div className='empr-cad__box-areas'>
                        <InputNumber
                            label='Total (viab.):'
                            formData={props.formData}
                            setFormData={props.setFormData}
                            className='w150'
                            id="custototalviab"
                            name="custototalviab"
                            onChange={() => { }}
                        />
                        <InputNumber
                            label='CUB/m2 (viab.):'
                            formData={props.formData}
                            setFormData={props.setFormData}
                            className='w150'
                            id="cubporm2viab"
                            name="cubporm2viab"
                            onChange={() => { }}
                        />
                    </div>

                    <div className='empr-cad__box-areas'>
                        <InputNumber
                            label='Total (orçam.):'
                            formData={props.formData}
                            setFormData={props.setFormData}
                            className='w150'
                            id="custototal"
                            name="custototal"
                            onChange={() => { }}
                        />
                        <InputNumber
                            label='CUB/m2 (orçam.):'
                            formData={props.formData}
                            setFormData={props.setFormData}
                            className='w150'
                            id="cubporm2"
                            name="cubporm2"
                            onChange={() => { }}
                        />
                    </div>

                </fieldset>
                <fieldset className='empr-cad__fieldset'>
                    <legend> Percentuais </legend>
                    <div className='empr-cad__box-areas'>
                        <InputNumber
                            label='Tx VPL:'
                            formData={props.formData}
                            setFormData={props.setFormData}
                            className='w150'
                            id="taxa_vpl"
                            name="taxa_vpl"
                            onChange={() => { }}
                        />

                    </div>
                    <div className='empr-cad__box-areas'>
                        <InputNumber
                            label='Tx VPL neg. adm::'
                            formData={props.formData}
                            setFormData={props.setFormData}
                            className='w150'
                            id="taxa_vpl_negativo"
                            name="taxa_vpl_negativo"
                            onChange={() => { }}
                        />
                        <InputNumber
                            label='Valor VPL neg. adm:'
                            formData={props.formData}
                            setFormData={props.setFormData}
                            className='w150'
                            id="valor_vpl_negativo"
                            name="valor_vpl_negativo"
                            onChange={() => { }}
                        />
                    </div>
                    <div className='empr-cad__box-areas'>
                        <InputNumber
                            label='Juros bancários:'
                            formData={props.formData}
                            setFormData={props.setFormData}
                            className='w150'
                            id="juros_financiamento"
                            name="juros_financiamento"
                            onChange={() => { }}
                        />
                        <InputNumber
                            label='Desc. qdo inserido:'
                            formData={props.formData}
                            setFormData={props.setFormData}
                            className='w150'
                            id="desconto_qdoinserido"
                            name="desconto_qdoinserido"
                            onChange={() => { }}
                        />
                    </div>

                    <div className='empr-cad__box-areas'>
                        <InputNumber
                            label='Desc AV (bancária):'
                            formData={props.formData}
                            setFormData={props.setFormData}
                            className='w150'
                            id="desc_av_bancaria"
                            name="desc_av_bancaria"
                            onChange={() => { }}
                        />
                        <InputNumber
                            label='Desc AV (direta):'
                            formData={props.formData}
                            setFormData={props.setFormData}
                            className='w150'
                            id="desc_av_direta"
                            name="desc_av_direta"
                            onChange={() => { }}
                        />
                    </div>
                    <div className='empr-cad__box-areas'>
                        <InputNumber
                            label='Desc AV (dinheiro):'
                            formData={props.formData}
                            setFormData={props.setFormData}
                            className='w150'
                            id="desc_av_dinheiro"
                            name="desc_av_dinheiro"
                            onChange={() => { }}
                        />
                        <InputNumber
                            label='Desc AV (lojas):'
                            formData={props.formData}
                            setFormData={props.setFormData}
                            className='w150'
                            id="desc_av_lojas"
                            name="desc_av_lojas"
                            onChange={() => { }}
                        />
                    </div>

                    <div className='empr-cad__box-areas'>
                        <InputNumber
                            label='Desc AV (corretor):'
                            formData={props.formData}
                            setFormData={props.setFormData}
                            className='w150'
                            id="desconto_avista_corretor"
                            name="desconto_avista_corretor"
                            onChange={() => { }}
                        />
                        <InputNumber
                            label='Limite Desc AV:'
                            formData={props.formData}
                            setFormData={props.setFormData}
                            className='w150'
                            id="limitedescontoavista"
                            name="limitedescontoavista"
                            onChange={() => { }}
                        />
                    </div>
                    <div className='empr-cad__box-areas'>
                        <InputNumber
                            label='Desc AV (oportun.):'
                            formData={props.formData}
                            setFormData={props.setFormData}
                            className='w150'
                            id="desconto_oportunidade"
                            name="desconto_oportunidade"
                            onChange={() => { }}
                        />

                        <InputNumber
                            label='Bônus s/ MN:'
                            formData={props.formData}
                            setFormData={props.setFormData}
                            className='w150'
                            id="bonus_perc"
                            name="bonus_perc"
                            onChange={() => { }}
                        />
                    </div>


                </fieldset>
                <fieldset className='empr-cad__fieldset'>
                    <legend> Outros </legend>
                    <div className='empr-cad__box-areas'>
                        <Input
                            label='Qtde Unidades:'
                            type='number'
                            id='qtde_unidades'
                            name='qtde_unidades'
                            value={props.formData.qtde_unidades}
                            onChange={props.textHandler}
                            className='w150'
                        />
                        <Input
                            label='CUB:'
                            type='number'
                            id='id_indice'
                            name='id_indice'
                            value={props.formData.id_indice}
                            onChange={props.textHandler}
                            className='w150'
                        />
                    </div>
                    <div className='empr-cad__box-areas'>

                        <InputNumber
                            label='% Executado:'
                            formData={props.formData}
                            setFormData={props.setFormData}
                            className='w150'
                            id="percexecutado"
                            name="percexecutado"
                            onChange={() => { }}
                        />
                    </div>
                </fieldset>

                <fieldset className='empr-cad__fieldset'>
                    <legend> Informações bancárias </legend>
                    <div className='empr-cad__box-areas'>
                        <Input
                            label='Banco:'
                            type='text'
                            id='banco'
                            name='banco'
                            value={props.formData.banco}
                            onChange={props.textHandler}
                            className='w150'
                        />
                        <Input
                            label='Agência:'
                            type='text'
                            id='agencia'
                            name='agencia'
                            value={props.formData.agencia}
                            onChange={props.textHandler}
                            className='w150'
                        />
                    </div>
                    <div className='empr-cad__box-areas'>

                        <Input
                            label='Conta Corrente:'
                            type='text'
                            id='conta_corrente'
                            name='conta_corrente'
                            value={props.formData.conta_corrente}
                            onChange={props.textHandler}
                            className='w150'
                        />
                    </div>
                </fieldset>
                {/* Endereço do Pedido */}
                <Textarea
                    label='Endereço do Pedido:'
                    type='textarea'
                    id='endereco_pedido'
                    name='endereco_pedido'
                    value={props.formData.endereco_pedido}
                    onChange={props.textHandler}
                    rows='5'

                />




            </Form>

            {
                showAuxiliarEmpresas &&
                <ListaAuxiliar
                    heightDrop='1160px'
                    topLista='500px'
                    api='/pessoas/auxiliar'
                    field='nome'
                    onClickSelection={(reg) => clickEmpresaSelectedHandle(reg)}
                    onClickClose={() => setShowAuxiliarEmpresas(false)}
                />
            }

            {
                showAuxiliarEmpreiteiras &&
                <ListaAuxiliar
                    heightDrop='1160px'
                    topLista='500px'
                    api='/pessoas/auxiliar'
                    field='nome'
                    onClickSelection={(reg) => clickEmpreiteiraSelectedHandle(reg)}
                    onClickClose={() => setShowAuxiliarEmpreiteiras(false)}
                />
            }

            {
                showAuxiliarEngenheiros &&
                <ListaAuxiliar
                    heightDrop='1160px'
                    topLista='500px'
                    api='/pessoas/auxiliar'
                    field='nome'
                    onClickSelection={(reg) => clickEngenheiroSelectedHandle(reg)}
                    onClickClose={() => setShowAuxiliarEngenheiros(false)}
                />
            }

        </>

    );
}

export default EmpreendimentoCadTab3;