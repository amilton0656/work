
import { items } from './ErpMenuItems'

const MenuItem = props => {
    return (
        <ul>
            <li>{props.item.title}</li>
        </ul>

    )
}

const Menu = () => {
    return (
        <div>
            {
                items.map(item => (
                    <MenuItem item={item} />
                ))
            }
        </div>
    );
}

export default Menu;