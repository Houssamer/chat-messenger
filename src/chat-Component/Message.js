import './Message.css'
import {forwardRef} from 'react'

const  Message = forwardRef((props, ref) => {
    const isUser = props.username === props.user;
    return (
        <div className="message" ref={ref}>
            <h4 className="message__name">{(!isUser) && props.username}</h4>
            <div className={(isUser ? "message__content__user" : "message__content")}>
                {props.message}
            </div>
        </div>
    )
})

export default Message 