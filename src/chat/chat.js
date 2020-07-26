import React from 'react'
import './chat.css';
import ChatBody from './ChatBody'
import ChatInput from './ChatInput'
import Courses from './courses'
import uniqid from 'uniqid'

function Chat() {
    let authorInstance = uniqid()
    return (
        <div id="chat-container">
            <Courses></Courses>
            <ChatBody author={authorInstance}></ChatBody>
            <ChatInput author={authorInstance}></ChatInput>
        </div>
    )
}

export default Chat