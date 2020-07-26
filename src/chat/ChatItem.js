import React from 'react'
import './chat.css'

function ChatItem(props) {
    return (
        <div style={{marginTop: props.marginBot}}className= "chat-item">
            <div className= "chat-item-content-container">
                <p style={{display: props.display}} className= "chat-item-author">{props.author.toUpperCase()}</p>
                <div className= "chat-background">
                    <p className= "chat-item-content">{props.content}</p>
                </div>
            </div>
        </div>
    )
}

export default ChatItem;