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
                            id="area_privativa_aptos"
                            name="area_privativa_aptos"
                            onChange={() => { }}
                        />

                        {/* Privativa */}
                        <InputNumber
                            label='Privativa:'
                            formData={props.formData}
                            setFormData={props.setFormData}
                            className='w150'
                            id="area_privativa"
                            name="area_privativa"
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
                            id="area_equivalente"
                            name="area_equivalente"
                            onChange={() => { }}
                        />

                        {/* Total */}
                        <InputNumber
                            label='Total:'
                            formData={props.formData}
                            setFormData={props.setFormData}
                            className='w150'
                            id="area_total"
                            name="area_total"
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
                            id='num_incorporacao'
                            name='num_incorporacao'
                            next='endereco'
                            value={props.formData.num_incorporacao}
                            onChange={props.textHandle}
                            onKeyDown={e => props.nextField(e.keyCode, 'endereco')}
                        />
                        <Input
                            label='Data:'
                            type='date'
                            id='incorporacao_data'
                            name='incorporacao_data'
                            value={props.formData.incorporacao_data}
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
                            id='num_alvara'
                            name='num_alvara'
                            next='endereco'
                            value={props.formData.num_alvara}
                            onChange={props.textHandle}
                            onKeyDown={e => props.nextField(e.keyCode, 'endereco')}
                        />
                        <Input
                            label='Data:'
                            type='date'
                            id='alvara_data'
                            name='alvara_data'
                            value={props.formData.alvara_data}
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
                            id='num_projeto'
                            name='num_projeto'
                            next='endereco'
                            value={props.formData.num_projeto}
                            onChange={props.textHandle}
                            onKeyDown={e => props.nextField(e.keyCode, 'endereco')}
                        />
                        <Input
                            label='Data:'
                            type='date'
                            id='projeto_data'
                            name='projeto_data'
                            value={props.formData.projeto_data}
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
                            id='matricula_num'
                            name='matricula_num'
                            next='endereco'
                            value={props.formData.matricula_num}
                            onChange={props.textHandle}
                            onKeyDown={e => props.nextField(e.keyCode, 'endereco')}
                        />
                        <Input
                            label='Num. Ofício:'
                            type='text'
                            id='matricula_num_ofic_reg_imov'
                            name='matricula_num_ofic_reg_imov'
                            value={props.formData.matricula_num_ofic_reg_imov}
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
                            id='habitese_num'
                            name='habitese_num'
                            next='endereco'
                            value={props.formData.habitese_num}
                            onChange={props.textHandle}
                            onKeyDown={e => props.nextField(e.keyCode, 'endereco')}
                        />
                        <Input
                            label='Data:'
                            type='date'
                            id='data_habitese'
                            name='data_habitese'
                            value={props.formData.data_habitese}
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
                            id='lap_num'
                            name='lap_num'
                            next='endereco'
                            value={props.formData.lap_num}
                            onChange={props.textHandle}
                            onKeyDown={e => props.nextField(e.keyCode, 'endereco')}
                        />
                        <Input
                            label='Data:'
                            type='date'
                            id='lap_data'
                            name='lap_data'
                            value={props.formData.lap_data}
                            onChange={props.textHandler}
                            className='w150'
                        />
                    </div>

                    {/* Órgão Emissor */}
                    <Input
                        // className='w150'
                        label='Órgão Emissor:'
                        type='text'
                        id='lap_orgao'
                        name='lap_orgao'
                        next='endereco'
                        value={props.formData.lap_orgao}
                        onChange={props.textHandle}
                        onKeyDown={e => props.nextField(e.keyCode, 'endereco')}
                    />

                </fieldset>
                <fieldset className='empr-cad__fieldset'>
                    <legend> Outros </legend>

                    <Input
                        className='w150'
                        label='Início da Obra:'
                        type='date'
                        id='data_inicio'
                        name='data_inicio'
                        next='endereco'
                        value={props.formData.data_inicio}
                        onChange={props.textHandle}
                        onKeyDown={e => props.nextField(e.keyCode, 'endereco')}
                    />
                    {/* Conclusão */}
                    <div className='empr-cad__box-areas'>
                        <Input
                            label='Conclusão (Eng):'
                            type='date'
                            id='data_conclusao'
                            name='data_conclusao'
                            value={props.formData.data_conclusao}
                            onChange={props.textHandler}
                            className='w150'
                        />
                        <Input
                            label='Conclusão (Prop):'
                            type='date'
                            id='data_conclusao2'
                            name='data_conclusao2'
                            value={props.formData.data_conclusao2}
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
                                name='ctb_tipo'
                                id="ctb_tipo1"
                                onChange={props.textHandle}

                                value={props.formData.ctb_tipo}
                                checked={props.formData.ctb_tipo.toString() === "1"}
                            /><label htmlFor="ctb_tipo1">Terreno adquirido para venda</label>
                        </div>
                        <div className='form-radioBoxLinha'>
                            <input
                                type='radio'
                                name='ctb_tipo'
                                id="ctb_tipo2"
                                onChange={props.textHandle}
                                value={props.formData.ctb_tipo}
                                checked={props.formData.ctb_tipo.toString() === "2"}
                            /><label htmlFor="ctb_tipo2">Terreno decorrente de loteamento</label>
                        </div>
                        <div className='form-radioBoxLinha'>
                            <input
                                type='radio'
                                name='ctb_tipo'
                                id="ctb_tipo3"
                                onChange={props.textHandle}
                                value={props.formData.ctb_tipo}
                                checked={props.formData.ctb_tipo.toString() === "3"}
                            /><label htmlFor="ctb_tipo3">Lote oriundo de desmembramento de terreno</label>
                        </div>
                        <div className='form-radioBoxLinha'>
                            <input
                                type='radio'
                                name='ctb_tipo'
                                id="ctb_tipo4"
                                onChange={props.textHandle}
                                value={props.formData.ctb_tipo}
                                checked={props.formData.ctb_tipo.toString() === "4"}
                            /><label htmlFor="ctb_tipo4">Unidade resultante de incorporação imobiliária</label>
                        </div>
                        <div className='form-radioBoxLinha'>
                            <input
                                type='radio'
                                name='ctb_tipo'
                                id="ctb_tipo5"
                                onChange={props.textHandle}
                                value={props.formData.ctb_tipo}
                                checked={props.formData.ctb_tipo.toString() === "5"}
                            /><label htmlFor="ctb_tipo5">Prédio construído/em construção para venda</label>
                        </div>
                        <div className='form-radioBoxLinha'>
                            <input
                                type='radio'
                                name='ctb_tipo'
                                id="ctb_tipo5"
                                onChange={props.textHandle}
                                value={props.formData.ctb_tipo}
                                checked={props.formData.ctb_tipo.toString() === "5"}
                            /><label htmlFor="ctb_tipo5">Outras</label>
                        </div>
                    </RadioBox>

                    {/* Enviado para contabilidade */}
                    <div className='form-checkboxBox'>
                        <input
                            type='checkbox'
                            className='form-input'
                            id="ctb_enviado"
                            name="ctb_enviado"
                            defaultChecked={props.formData.ctb_enviado.toString() === '0' ? false : true}
                            onChange={props.textHandler}
                            value={props.formData.ctb_enviado}
                        />
                        <label htmlFor="ctb_enviado">Enviado para contabilidade</label>
                    </div>

                    {/* SCP */}
                    <div className='form-checkboxBox'>
                        <input
                            type='checkbox'
                            className='form-input'
                            id="ctb_scp"
                            name="ctb_scp"
                            defaultChecked={props.formData.ctb_scp.toString() === '0' ? false : true}
                            onChange={props.textHandler}
                            value={props.formData.ctb_scp}
                        />
                        <label htmlFor="ctb_scp">SCP</label>
                    </div>

                    {/* Custo Obra Encerrado */}
                    <div className='form-checkboxBox'>
                        <input
                            type='checkbox'
                            className='form-input'
                            id="custoobraencerrado"
                            name="custoobraencerrado"
                            defaultChecked={props.formData.custoobraencerrado.toString() === '0' ? false : true}
                            onChange={props.textHandler}
                            value={props.formData.custoobraencerrado}
                        />
                        <label htmlFor="custoobraencerrado">Custo da obra encerrado</label>
                    </div>

                    {/* Custo Administrativo  */}
                    <div className='form-checkboxBox'>
                        <input
                            type='checkbox'
                            className='form-input'
                            id="custo_adm"
                            name="custo_adm"
                            defaultChecked={props.formData.custo_adm.toString() === '0' ? false : true}
                            onChange={props.textHandler}
                            value={props.formData.custo_adm}
                        />
                        <label htmlFor="custo_adm">Custo administrativo</label>
                    </div>

                    {/* Antigo  */}
                    <div className='form-checkboxBox'>
                        <input
                            type='checkbox'
                            className='form-input'
                            id="antigo"
                            name="antigo"
                            defaultChecked={props.formData.antigo.toString() === '0' ? false : true}
                            onChange={props.textHandler}
                            value={props.formData.antigo}
                        />
                        <label htmlFor="antigo">Antigo</label>
                    </div>
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