import React from 'react'
import './chat.css'

function ChatItem(props) {
    return (
        <div className= "chat-item">
            <div className= "profile-picture">
            </div>
            <div className= "chat-item-content-container">
                <p className= "chat-item-author">{props.author}</p>
                <p className= "chat-item-content">{props.content}</p>
            </div>
        </div>
    )
}

export default ChatItem;