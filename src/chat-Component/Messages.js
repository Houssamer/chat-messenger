import './Messages.css'
import Message from './Message'
import FlipMove from 'react-flip-move'

function Messages(props) {
    return (
        <div className="messages">
            <FlipMove>
                {props.messages.map(message => {
                    return <Message 
                                message={message.messagesInfo.text} 
                                username={message.messagesInfo.username}  
                                user={props.User}
                                key={props.messages.id}
                            />
                })}
            </FlipMove>
        </div>
    )
}

export default Messages 