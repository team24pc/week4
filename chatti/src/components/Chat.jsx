import { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io('http://localhost:3001')

export default function Chat() {
    const [userName, setUserName] = useState('')
    const [messages, setMessages] = useState([])
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        socket.on('message', handleMessage)
        return () => {
            socket.off('message', handleMessage)
        }
    })

    const handleMessage = (message) => {
        setMessages((prev) => [...prev, message])
        console.log(messages)
    }

    const handleMessageSubmit = () => {
        if (inputValue.trim() !== ''){
            const currentTime = new Date().toLocaleDateString()
            socket.emit('message', {
                userName: userName,
                content: inputValue,
                time: currentTime
            })
            setInputValue('');
        }

    }
    
    return (
        <div>
                <input type="text" placeholder="사용자 이름" value={userName} onChange={(e) => setUserName(e.target.value)}/>
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                <button onClick={handleMessageSubmit} >submit</button>
            <div id="chat_log">
                {messages.map((msg, i) => <p key={i}>{msg.userName} : {msg.content} - {msg.time}</p>)}
            </div>
        </div>
    )
}