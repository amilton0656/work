
import Modal from '../../components/Modal'
import Card from '../../components/Card';

const style = {
    width: '300px',
    height: '300px',
    background: 'white',

    

}

const FundoModal = () => {
    return ( 
        <>
        <Modal onClick={() => alert('clicou')}>
            <div style = {style}>
                Teste Modal
            </div>
            
        </Modal>

        </>
     );
}
 
export default FundoModal;