import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './loggedBar.css'
import { loginActions } from '../store/loginReducers'

const LoggedBar = props => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logout = () => {
        console.log('enviou...')
        dispatch(loginActions.logout())
        navigate('/erp')
    }

    if (!useSelector(state => state.login.login.auth)) {
        logout()
    }

    const usuario = useSelector(state => state.login.login.usuario)
    const empresa = props.empresa || 'COTA Empreendimentos Imobiliários Ltda'
    return ( 
        <div className="log-bar__container">
            <div className='log-bar__empresa'>{empresa}</div>
            <div className='log-bar__usuario'>{usuario}</div>
            <div className='log-bar__logout' onClick = {() => logout()}>Desconectar</div>

        </div>
     );
}
 
export default LoggedBar;