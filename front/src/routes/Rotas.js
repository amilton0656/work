import { Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import Login from '../modulos/login/Login'
import Erp from '../modulos/erp/Erp'
import IntranetLayout from '../modulos/intranet/IntranetLayout'

import EmprestimoLayout from '../modulos/emprestimo/EmprestimoLayout'
import EmprestimoSAC from '../modulos/emprestimo/sac/EmprestimoSAC'
import EmprestimoSACLista from '../modulos/emprestimo/sac/EmprestimoSACLista'
import EmprestimoSACListaPDF from '../modulos/emprestimo/sac/EmprestimoSACListaPDF'
import EmprestimoPrice from '../modulos/emprestimo/price/EmprestimoPrice'
import EmprestimoPriceLista from '../modulos/emprestimo/price/EmprestimoPriceLista'
import EmprestimoSACListaMob from '../modulos/emprestimo/sac/EmprestimoSACListaMob'
import EmprestimoPriceListaPDF from '../modulos/emprestimo/price/EmprestimoPriceListaPDF'

import PessoaLista from '../modulos/pessoa/lista/PessoaLista'
import PessoaCadDados from '../modulos/pessoa/dados/PessoaCadDados'
import PessoaFichaCadastral from '../modulos/pessoa/lista/PessoaFichaCadastral'

import RecursoCad from '../modulos/recurso/RecursoCad'
import RecursoLista from '../modulos/recurso/RecursoLista'

import UsuarioCad from '../modulos/usuario/UsuarioCad'
import UsuarioLista from '../modulos/usuario/UsuarioLista'
import UsuarioRecursoLista from '../modulos/usuario/UsuarioRecursoLista'

import EmpresaCad from '../modulos/empresa/EmpresaCad'
import EmpresaLista from '../modulos/empresa/EmpresaLista'

import EmpreendimentoCad from '../modulos/empreendimento/EmpreendimentoCad'
import EmpreendimentoLista from '../modulos/empreendimento/EmpreendimentoLista'

import PropostaCad from '../modulos/proposta/PropostaCad'

import ErpNavigator from '../modulos/erp/menu/ErpNavigator'

import TesteScroll from '../modulos/testes/TesteScroll'
import Menu01 from '../exemplos/menus/Menu01'
import FundoModal from '../modulos/testes/FundoModal'
import ExMensagem from '../components/mensagem/ExMensagem'
import InputButton from '../components/InputWithButton'
import PrintPrint from '../components/PrintPrint'
import TesteReport from '../exemplos/TesteReport'
import Teste from '../modulos/testes/Teste'
import TesteSiengeLista from '../modulos/sienge/TesteSiengeLista'


const Rotas = () => {

    const navi = useNavigate()

    useEffect(() => {
        navi('/')
    }, [])

    return (
        <>
            <Routes>
                <Route path="/" element={<IntranetLayout />} />

                <Route path="/login" element={<Login />} />

                <Route path="/erp" element={<Erp />} />

                <Route path="/emprestimosac" element={<EmprestimoSAC />} />
                <Route path="/emprestimosac/lista" element={<EmprestimoSACLista />} />
                <Route path="/emprestimosac/listapdf" element={<EmprestimoSACListaPDF />} />

                <Route path="/emprestimo" element={<EmprestimoLayout />} />
                <Route path="/emprestimoprice" element={<EmprestimoPrice />} />
                <Route path="/emprestimoprice/lista" element={<EmprestimoPriceLista />} />
                <Route path="/emprestimoprice/listapdf" element={<EmprestimoPriceListaPDF />} />

                <Route path="/pessoa/lista" element={<PessoaLista />} />
                <Route path="/pessoa/formdados" element={<PessoaCadDados />} />
                <Route path="/pessoa/fichacadastral" element={<PessoaFichaCadastral />} />

                <Route path="/usuario/lista" element={<UsuarioLista />} />     
                <Route path="/usuario/formdados" element={<UsuarioCad />} />
                <Route path="/usuario/recursos" element={<UsuarioRecursoLista />} />

                <Route path="/recurso/lista" element={<RecursoLista />} />
                <Route path="/recurso/formdados" element={<RecursoCad />} />

                <Route path="/empresa/lista" element={<EmpresaLista />} />
                <Route path="/empresa/formdados" element={<EmpresaCad />} />

                <Route path="/empreendimento/lista" element={<EmpreendimentoLista />} />
                <Route path="/empreendimento/formdados" element={<EmpreendimentoCad />} />

                <Route path="/proposta/formdados" element={<PropostaCad />} />

                <Route path="/erp/navigator" element={<ErpNavigator />} />

                <Route path="/teste" element={<Teste />} />
                <Route path="/menu" element={<Menu01 />} />

                <Route path="/sienge" element={<TesteSiengeLista />} />

            </Routes>

        </>
    );
}

export default Rotas