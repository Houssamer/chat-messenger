import './App.css';
import {useState, useEffect} from 'react';
import Auth from './authComponent/Auth'
import Messages from './chat-Component/Messages';
import Input from './chat-Component/Input';
import { db } from './firebase';
import firebase from 'firebase';


function App() {
  const [usernameInput, setUsernameInput] = useState('');
  const [userName, setUserName] = useState('');
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');


  useEffect(() => {
    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, messagesInfo: doc.data()})))
    })
  }, [])
  

  function handleChangeUser(event) {
    setUsernameInput(event.target.value);
  }

  function handleClickUser(event) {
    event.preventDefault();
    setUserName(usernameInput);
    setUsernameInput('');
  }

  function handleChanegInput(event) {
    setMessageInput(event.target.value);
  }

  function handleClickInput(event) {
    event.preventDefault();
    db.collection('messages').add({
      username: userName,
      text: messageInput,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setMessageInput('');
  }

  return (
    <div className="App">
      <div className="auth" style={{display: userName && 'none'}}>
        <h1>Welcome to RIAD-chat-App</h1>
        <Auth userName={usernameInput} Change={handleChangeUser} Click={handleClickUser} />
      </div>
      <div className="chat" style={{display: !userName && 'none'}}>
        <h1>RIAD-chat-App</h1>
        <h3 className="welcome">Welcome {userName} </h3>
        <Messages messages={messages} User={userName} />
        <Input value={messageInput} Change={handleChanegInput} Click={handleClickInput} />
      </div>
    </div>
  );
}

export default App;
