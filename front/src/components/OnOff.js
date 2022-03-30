import './onOff.css'

const OnOff = props => {

    return (
            <div className='on-off'>
                <input 
                    id='ck-on-off' 
                    type='checkbox' 
                    className='on-off__checkbox'
                    onClick={props.onClick}    
                />
                <label 
                    htmlFor='ck-on-off' 
                    className='on-off__button'
                ></label>
            </div>
    )
}

export default OnOff