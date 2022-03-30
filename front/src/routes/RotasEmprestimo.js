import { Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import EmprestimoSAC from '../modulos/emprestimo/sac/EmprestimoSAC'
import EmprestimoPrice from '../modulos/emprestimo/price/EmprestimoPrice'

const RotasEmprestimo = () => {

    const navi = useNavigate()

    useEffect(() => {
        navi('/emprestimo')
    }, [])

    return (
        <>
            <Routes>
            <Route path="/emprestimosac" element={<EmprestimoSAC />} />
            <Route path="/emprestimoprice" element={<EmprestimoPrice />} />
            </Routes>
            </>
    )
}

export default RotasEmprestimo
