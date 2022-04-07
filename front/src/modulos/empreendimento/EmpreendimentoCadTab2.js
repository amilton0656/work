import { useState } from 'react'
import Form from '../../components/Form'
import Input from '../../components/Input'
import Button from '../../components/Button'
import RadioBox from '../../components/RadioBox'
import InputNumber from '../../components/InputNumber'
import { FiSearch } from 'react-icons/fi'

import './empreendimentoCad.css'

import ListaAuxiliar from '../../components/ListaAuxiliar'

const EmpreendimentoCadTab2 = props => {

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
                    <legend> Áreas </legend>
                    <div className='empr-cad__box-areas'>
                        {/* Privativa (aptos) */}
                        <InputNumber
                            label='Privativa (aptos):'
                            formData={props.formData}
                            setFormData={props.setFormData}
                            className='w150'
                            id="financ_valor"
                            name="financ_valor"
                            onChange={() => { }}
                        />

                        {/* Privativa */}
                        <InputNumber
                            label='Privativa:'
                            formData={props.formData}
                            setFormData={props.setFormData}
                            className='w150'
                            id="financ_valor"
                            name="financ_valor"
                            onChange={() => { }}
                        />
                    </div>

                    <div className='empr-cad__box-areas'>
                        {/* Equivalente */}
                        <InputNumber
                            label='Equivalente:'
                            formData={props.formData}
                            setFormData={props.setFormData}
                            className='w150'
                            id="financ_valor"
                            name="financ_valor"
                            onChange={() => { }}
                        />

                        {/* Total */}
                        <InputNumber
                            label='Total:'
                            formData={props.formData}
                            setFormData={props.setFormData}
                            className='w150'
                            id="financ_valor"
                            name="financ_valor"
                            onChange={() => { }}
                        />
                    </div>

                </fieldset>

                <fieldset className='empr-cad__fieldset'>
                    <legend> Documentação </legend>

                    {/* Incorporação */}
                    <div className='empr-cad__box-areas'>
                        <Input
                            className='w150'
                            label='Incorporação:'
                            type='text'
                            id='nome'
                            name='nome'
                            next='endereco'
                            value={props.formData.nome}
                            onChange={props.textHandle}
                            onKeyDown={e => props.nextField(e.keyCode, 'endereco')}
                        />
                        <Input
                            label='Data:'
                            type='date'
                            id='data_expedicao'
                            name='data_expedicao'
                            value={props.formData.data_expedicao}
                            onChange={props.textHandler}
                            className='w150'
                        />
                    </div>

                    {/* Alvará */}
                    <div className='empr-cad__box-areas'>
                        <Input
                            className='w150'
                            label='Alvará:'
                            type='text'
                            id='nome'
                            name='nome'
                            next='endereco'
                            value={props.formData.nome}
                            onChange={props.textHandle}
                            onKeyDown={e => props.nextField(e.keyCode, 'endereco')}
                        />
                        <Input
                            label='Data:'
                            type='date'
                            id='data_expedicao'
                            name='data_expedicao'
                            value={props.formData.data_expedicao}
                            onChange={props.textHandler}
                            className='w150'
                        />
                    </div>

                    {/* Projeto */}
                    <div className='empr-cad__box-areas'>
                        <Input
                            className='w150'
                            label='Projeto:'
                            type='text'
                            id='nome'
                            name='nome'
                            next='endereco'
                            value={props.formData.nome}
                            onChange={props.textHandle}
                            onKeyDown={e => props.nextField(e.keyCode, 'endereco')}
                        />
                        <Input
                            label='Data:'
                            type='date'
                            id='data_expedicao'
                            name='data_expedicao'
                            value={props.formData.data_expedicao}
                            onChange={props.textHandler}
                            className='w150'
                        />
                    </div>

                    {/* Matrícula */}
                    <div className='empr-cad__box-areas'>
                        <Input
                            className='w150'
                            label='Matrícula:'
                            type='text'
                            id='nome'
                            name='nome'
                            next='endereco'
                            value={props.formData.nome}
                            onChange={props.textHandle}
                            onKeyDown={e => props.nextField(e.keyCode, 'endereco')}
                        />
                        <Input
                            label='Num. Ofício:'
                            type='text'
                            id='data_expedicao'
                            name='data_expedicao'
                            value={props.formData.data_expedicao}
                            onChange={props.textHandler}
                            className='w150'
                        />
                    </div>

                    {/* Habite-se */}
                    <div className='empr-cad__box-areas'>
                        <Input
                            className='w150'
                            label='Habite-se:'
                            type='text'
                            id='nome'
                            name='nome'
                            next='endereco'
                            value={props.formData.nome}
                            onChange={props.textHandle}
                            onKeyDown={e => props.nextField(e.keyCode, 'endereco')}
                        />
                        <Input
                            label='Data:'
                            type='date'
                            id='data_expedicao'
                            name='data_expedicao'
                            value={props.formData.data_expedicao}
                            onChange={props.textHandler}
                            className='w150'
                        />
                    </div>

                    {/* LAP */}
                    <div className='empr-cad__box-areas'>
                        <Input
                            className='w150'
                            label='LAP:'
                            type='text'
                            id='nome'
                            name='nome'
                            next='endereco'
                            value={props.formData.nome}
                            onChange={props.textHandle}
                            onKeyDown={e => props.nextField(e.keyCode, 'endereco')}
                        />
                        <Input
                            label='Data:'
                            type='date'
                            id='data_expedicao'
                            name='data_expedicao'
                            value={props.formData.data_expedicao}
                            onChange={props.textHandler}
                            className='w150'
                        />
                    </div>

                    {/* Órgão Emissor */}
                    <Input
                        // className='w150'
                        label='Órgão Emissor:'
                        type='text'
                        id='nome'
                        name='nome'
                        next='endereco'
                        value={props.formData.nome}
                        onChange={props.textHandle}
                        onKeyDown={e => props.nextField(e.keyCode, 'endereco')}
                    />

                </fieldset>
                <fieldset className='empr-cad__fieldset'>
                    <legend> Outros </legend>

                    <Input
                            className='w150'
                            label='Início:'
                            type='date'
                            id='nome'
                            name='nome'
                            next='endereco'
                            value={props.formData.nome}
                            onChange={props.textHandle}
                            onKeyDown={e => props.nextField(e.keyCode, 'endereco')}
                        />
                    {/* Conclusão */}
                    <div className='empr-cad__box-areas'>
                    <Input
                            label='Conclusão (Eng):'
                            type='date'
                            id='data_expedicao'
                            name='data_expedicao'
                            value={props.formData.data_expedicao}
                            onChange={props.textHandler}
                            className='w150'
                        />
                        <Input
                            label='Conclusão (Prop):'
                            type='date'
                            id='data_expedicao'
                            name='data_expedicao'
                            value={props.formData.data_expedicao}
                            onChange={props.textHandler}
                            className='w150'
                        />
                    </div>

                    {/* Tipo Contabilidade */}
                <RadioBox
                    name='empreend_status'
                    label='Tipo Contabilidade:'
                    direction='column'
                >
                    <div className='form-radioBoxLinha'>
                        <input
                            type='radio'
                            name='empreend_status'
                            id="empreend_status1"
                            onChange={props.textHandle}

                            value={props.formData.empreend_status}
                            checked={props.formData.empreend_status.toString() === "1"}
                        /><label htmlFor="empreend_status1">Terreno adquirido para venda</label>
                    </div>
                    <div className='form-radioBoxLinha'>
                        <input
                            type='radio'
                            name='empreend_status'
                            id="empreend_status2"
                            onChange={props.textHandle}
                            value={props.formData.empreend_status}
                            checked={props.formData.empreend_status.toString() === "2"}
                        /><label htmlFor="empreend_status2">Terreno decorrente de loteamento</label>
                    </div>
                    <div className='form-radioBoxLinha'>
                        <input
                            type='radio'
                            name='empreend_status'
                            id="empreend_status3"
                            onChange={props.textHandle}
                            value={props.formData.empreend_status}
                            checked={props.formData.empreend_status.toString() === "3"}
                        /><label htmlFor="empreend_status3">Lote oriundo de desmembramento de terreno</label>
                    </div>
                    <div className='form-radioBoxLinha'>
                        <input
                            type='radio'
                            name='empreend_status'
                            id="empreend_status4"
                            onChange={props.textHandle}
                            value={props.formData.empreend_status}
                            checked={props.formData.empreend_status.toString() === "4"}
                        /><label htmlFor="empreend_status4">Unidade resultante de incorporação imobiliária</label>
                    </div>
                    <div className='form-radioBoxLinha'>
                        <input
                            type='radio'
                            name='empreend_status'
                            id="empreend_status5"
                            onChange={props.textHandle}
                            value={props.formData.empreend_status}
                            checked={props.formData.empreend_status.toString() === "5"}
                        /><label htmlFor="empreend_status5">Prédio construído/em construção para venda</label>
                    </div>
                    <div className='form-radioBoxLinha'>
                        <input
                            type='radio'
                            name='empreend_status'
                            id="empreend_status5"
                            onChange={props.textHandle}
                            value={props.formData.empreend_status}
                            checked={props.formData.empreend_status.toString() === "5"}
                        /><label htmlFor="empreend_status5">Outras</label>
                    </div>
                </RadioBox>
                    </fieldset>



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

export default EmpreendimentoCadTab2;