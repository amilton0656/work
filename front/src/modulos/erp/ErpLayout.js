
import ErpNavigator from './menu/ErpNavigator';
import fundo from '../../img/fundo-erp01.jpg'

import './erpLayout.css'


const ErpLayout = () => {

    return (
        <main className='erp-main'>
            <div className='erp-initial'>
                <div className='erp-logo__container'>
                    <img className='erp-logo' src='img/cota-logo.jpg' />
                <div className='erp-title'>
                Sistema Interno
                </div>
                </div>

            </div>
            <ErpNavigator show={true} />
        </main>
    );
}

export default ErpLayout;