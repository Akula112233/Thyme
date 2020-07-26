import React from 'react'
import './chat.css';
import ChatBody from './ChatBody'
import ChatInput from './ChatInput'
import Courses from './courses'


function Chat() {
    return (
        <div id="chat-container">
            <Courses></Courses>
            <ChatBody></ChatBody>
            <ChatInput></ChatInput>
        </div>
    )
}

export default Chat