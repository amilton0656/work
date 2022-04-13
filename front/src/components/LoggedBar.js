import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './loggedBar.css'
import { loginActions } from '../store/loginReducers'

const LoggedBar = props => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const usuario = useSelector(state => state.login.login.usuario)
    const empresa = props.empresa || 'COTA Empreendimentos Imobiliários Ltda'
    const auth = useSelector(state => state.login.login.auth)
    
    useEffect(() => {
        if (!auth) {
            navigate(-1)
        }
    }, [])


    const logout = () => {
        dispatch(loginActions.logout())
        navigate('/erp')
    }



    return ( 
        <div className="log-bar__container">
            <div className='log-bar__empresa'>{empresa}</div>
            <div className='log-bar__usuario'>{usuario}</div>
            <div className='log-bar__logout' onClick = {() => logout()}>Desconectar</div>

        </div>
     );
}
 
export default LoggedBar;