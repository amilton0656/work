import { useSelector } from 'react-redux'

import Login from '../login/Login'
import ErpLayout from './ErpLayout'
import ErpMenu from './menu/ErpMenu'
import Menu from './menu/Menu'

const Erp = () => {

    const { auth } = useSelector(state => state.login.login)

    return ( 
        <>
            {!auth && <Login />}
            {auth && <Menu />}
        </>
     )
}
 
export default Erp