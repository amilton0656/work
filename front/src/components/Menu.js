
import './menu.css'
import { items } from './MenuItems'
import { IoMdArrowDropright } from 'react-icons/io'

const Menu = props => {
    return ( 
        <nav className="menu-nav">
            <ul>
           {
               items.map((item, i) => (
                <li key={i}>
                    <span>{item.title}</span><span><IoMdArrowDropright size={25} color='black' style={{paddingTop: '6px'}} /></span></li>
               ))
           }

            </ul>
        </nav>
     );
}
 
export default Menu;