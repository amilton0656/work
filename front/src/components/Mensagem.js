
import './mensagem.css'
import Card from './Card'

const Mensagem = props => {


    const styles={
        width: props.w || '300px',
        heigh: props.h || '300px',
        background: props.bg || 'white',
        color: props.c || 'black',
        position: 'absolute',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        transition: 'all 0.5s ease'
    }

    return (
        <div className='msg-main' onClick={props.onClick}>
            <Card styles = {styles}>
                {props.children}
            </Card>


        </div>
    )
}

export default Mensagem