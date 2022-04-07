import { useState } from 'react'
import Form from '../../components/Form'
import Input from '../../components/Input'
import Button from '../../components/Button'
import RadioBox from '../../components/RadioBox'
import { FiSearch } from 'react-icons/fi'

import ListaAuxiliar from '../../components/ListaAuxiliar'

const EmpreendimentoCadTab1 = props => {

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
            <Form className={props.classe1}>

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
                            onChange={props.textHandle}

                            value={props.formData.empreend_status}
                            checked={props.formData.empreend_status.toString() === "1"}
                        /><label htmlFor="empreend_status1">Lançamento</label>
                    </div>
                    <div className='form-radioBoxLinha'>
                        <input
                            type='radio'
                            name='empreend_status'
                            id="empreend_status2"
                            onChange={props.textHandle}
                            value={props.formData.empreend_status}
                            checked={props.formData.empreend_status.toString() === "2"}
                        /><label htmlFor="empreend_status2">Em construção</label>
                    </div>
                    <div className='form-radioBoxLinha'>
                        <input
                            type='radio'
                            name='empreend_status'
                            id="empreend_status3"
                            onChange={props.textHandle}
                            value={props.formData.empreend_status}
                            checked={props.formData.empreend_status.toString() === "3"}
                        /><label htmlFor="empreend_status3">Concluído</label>
                    </div>
                    <div className='form-radioBoxLinha'>
                        <input
                            type='radio'
                            name='empreend_status'
                            id="empreend_status4"
                            onChange={props.textHandle}
                            value={props.formData.empreend_status}
                            checked={props.formData.empreend_status.toString() === "4"}
                        /><label htmlFor="empreend_status4">Terceiros</label>
                    </div>
                    <div className='form-radioBoxLinha'>
                        <input
                            type='radio'
                            name='empreend_status'
                            id="empreend_status5"
                            onChange={props.textHandle}
                            value={props.formData.empreend_status}
                            checked={props.formData.empreend_status.toString() === "5"}
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
                    value={props.formData.apelido}
                    onChange={props.textHandle}
                    onKeyDown={e => props.nextField(e.keyCode, 'nome')}
                />

                {/* Nome */}
                <Input
                    label='Nome:'
                    type='text'
                    id='nome'
                    name='nome'
                    next='endereco'
                    value={props.formData.nome}
                    onChange={props.textHandle}
                    onKeyDown={e => props.nextField(e.keyCode, 'endereco')}
                />

                {/* Endereço */}
                <Input
                    label='Endereço:'
                    type='text'
                    id='endereco'
                    name='endereco'
                    next='complemento'
                    value={props.formData.endereco}
                    onChange={props.textHandle}
                    onKeyDown={e => props.nextField(e.keyCode, 'complemento')}
                />

                {/* Complemento */}
                <Input
                    label='Complemento:'
                    type='text'
                    id='complemento'
                    name='complemento'
                    next='bairro'
                    value={props.formData.complemento}
                    onChange={props.textHandle}
                    onKeyDown={e => props.nextField(e.keyCode, 'bairro')}
                />

                {/* Bairro */}
                <Input
                    label='Bairro:'
                    type='text'
                    id='bairro'
                    name='bairro'
                    next='cep'
                    value={props.formData.bairro}
                    onChange={props.textHandle}
                    onKeyDown={e => props.nextField(e.keyCode, 'cep')}
                />

                {/* CEP */}
                <Input
                    label='CEP:'
                    type='text'
                    id='cep'
                    name='cep'
                    next='municipio'
                    value={props.formData.cep}
                    onChange={props.textHandle}
                    onKeyDown={e => props.nextField(e.keyCode, 'municipio')}
                />

                {/* Município */}
                <Input
                    label='Município:'
                    type='text'
                    id='municipio'
                    name='municipio'
                    next='tx_nomeform'
                    value={props.formData.municipio}
                    onChange={props.textHandle}
                    onKeyDown={e => props.nextField(e.keyCode, 'tx_nomeform')}
                />

                {/* UF */}
                <div className='form-inputBox'>
                    <label htmlFor="uf">UF:</label>
                    <select
                        className='form-input'
                        id="uf"
                        name="uf"
                        onChange={props.textHandle}
                        value={props.formData.uf}
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
                    value={props.formData.telefones}
                    onChange={props.textHandle}
                    onKeyDown={e => props.nextField(e.keyCode, 'email')}
                />

                {/* Email */}
                <Input
                    label='Email:'
                    type='text'
                    id='email'
                    name='email'
                    next='cep'
                    value={props.formData.email}
                    onChange={props.textHandle}
                    onKeyDown={e => props.nextField(e.keyCode, 'cep')}
                />

                <div className='form-input-box-with-icon'>
                    {/* Empresa */}
                    <Input
                        disabled
                        style={{ width: '90%' }}
                        label='Empresa:'
                        type='text'
                        id='nomeEmpresa'
                        name='nomeEmpresa'
                        next='nm_nick'
                        value={props.formDataAuxiliar.nomeEmpresa}
                        onChange={props.textHandle}
                        onKeyDown={e => props.nextField(e.keyCode, 'nm_nick')}
                    />
                    <div
                        className='form-input-box-with-icon__icon'
                        onClick={() => setShowAuxiliarEmpresas(!showAuxiliarEmpresas)}
                    ><FiSearch size={20} color='black' /></div>
                </div>

                <div className='form-input-box-with-icon'>
                    {/* Empreiteira */}
                    <Input
                        disabled
                        style={{ width: '90%' }}
                        label='Empreiteira:'
                        type='text'
                        id='nomeEmpreiteira'
                        name='nomeEmpreiteira'
                        next='nm_nick'
                        value={props.formDataAuxiliar.nomeEmpreiteira}
                        onChange={props.textHandle}
                        onKeyDown={e => props.nextField(e.keyCode, 'nm_nick')}
                    />
                    <div
                        className='form-input-box-with-icon__icon'
                        onClick={() => {
                            console.log('')
                            setShowAuxiliarEmpreiteiras(!showAuxiliarEmpreiteiras)
                        }}
                    ><FiSearch size={20} color='black' /></div>
                </div>

                <div className='form-input-box-with-icon'>
                    {/* Engenheiro(a) */}
                    <Input
                        disabled
                        style={{ width: '90%' }}
                        label='Engenheiro(a):'
                        type='text'
                        id='nomeEngenheiro'
                        name='nomeEngenheiro'
                        next='nm_nick'
                        value={props.formDataAuxiliar.nomeEngenheiro}
                        onChange={props.textHandle}
                        onKeyDown={e => props.nextField(e.keyCode, 'nm_nick')}
                    />
                    <div
                        className='form-input-box-with-icon__icon'
                        onClick={() => setShowAuxiliarEngenheiros(!showAuxiliarEngenheiros)}
                    ><FiSearch size={20} color='black' /></div>
                </div>


                <div style={{ marginTop: '20px', width: '100%', textAlign: 'center' }}>
                    <Button
                        className='w150'
                        title='Salvar'
                        onClick={props.onClickButton}
                    />
                </div>
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

export default EmpreendimentoCadTab1;