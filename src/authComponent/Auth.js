import './Auth.css'
import user from '../icons/user.svg'

function Auth(props) {
    return (
        <div className="auth__content">
            <img src={user} alt="user" className="user__img" />
            <h3 className="user">Your name :</h3>
            <form className="auth__form">
                <input 
                    type="text" 
                    value={props.userName}
                    placeholder="name"
                    onChange={props.Change}
                    className="auth__input"
                />
                <button className="auth__button" onClick={props.Click}>Login</button>
            </form>
        </div>
    )
}

export default Auth 