import { Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import Erp from '../modulos/erp/Erp'
import IntranetLayout from '../modulos/intranet/IntranetLayout'

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


import ErpNavigator from '../modulos/erp/menu/ErpNavigator'

import TesteScroll from '../modulos/testes/TesteScroll'
import Menu01 from '../exemplos/menus/Menu01'
import FundoModal from '../modulos/testes/FundoModal'
import ExMensagem from '../components/mensagem/ExMensagem'
import InputButton from '../components/InputWithButton'
import PrintPrint from '../components/PrintPrint'
import TesteReport from '../exemplos/TesteReport'
import Teste from '../modulos/testes/Teste'


const Rotas = () => {

    const navi = useNavigate()

    useEffect(() => {
        navi('/')
    }, [])

    return (
        <>
            <Routes>
                <Route path="/" element={<IntranetLayout />} />

                <Route path="/erp" element={<Erp />} />

                <Route path="/emprestimosac" element={<EmprestimoSAC />} />
                <Route path="/emprestimosac/lista" element={<EmprestimoSACLista />} />
                <Route path="/emprestimosac/listapdf" element={<EmprestimoSACListaPDF />} />

                <Route path="/emprestimoprice" element={<EmprestimoPrice />} />
                <Route path="/emprestimoprice/lista" element={<EmprestimoPriceLista />} />
                <Route path="/emprestimoprice/listapdf" element={<EmprestimoPriceListaPDF />} />

                <Route path="/pessoa/lista" element={<PessoaLista />} />
                <Route path="/pessoa/formdados" element={<PessoaCadDados />} />
                <Route path="/pessoa/fichacadastral" element={<PessoaFichaCadastral />} />

                <Route path="/recurso/lista" element={<RecursoLista />} />
                <Route path="/recurso/formdados" element={<RecursoCad />} />

                <Route path="/erp/navigator" element={<ErpNavigator />} />

                <Route path="/teste" element={<Teste />} />
                <Route path="/menu" element={<Menu01 />} />

            </Routes>

        </>
    );
}

export default Rotas