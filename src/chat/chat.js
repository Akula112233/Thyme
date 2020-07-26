import React from 'react'
import './chat.css';
import ChatBody from './ChatBody'
import ChatInput from './ChatInput'



function Chat() {
    return (
        <div id="chat-container">
            <ChatBody></ChatBody>
            <ChatInput></ChatInput>
        </div>
    )
}

export default Chat