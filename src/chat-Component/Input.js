import './Input.css'
import send from '../icons/send.svg'

function Input(props) {
    return (
        <form className="input__form" onSubmit={props.Click}>
            <input 
                type="text"
                placeholder="Type your message"
                value={props.value}
                onChange={props.Change}
                className="input__input"
            />
            <img 
                src={send} 
                alt="send" 
                className="input__img" 
                type="submit" 
                onClick={props.Click} 
            />
        </form>
    )
}

export default Input 