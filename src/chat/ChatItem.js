import React from 'react'
import './chat.css'

function ChatItem(props) {
    if (props.type == 1) {
        return (
            <div style={{marginTop: props.marginTop}}className= "chat-item">
                <div className= "chat-item-content-container">
                    <p style={{display: props.display}} className= "chat-item-author">{props.author.toUpperCase()}</p>
                    <div className= "chat-background">
                        <p className= "chat-item-content">{props.content}</p>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div style={{marginTop: props.marginTop}}className= "chat-item">
            <div className= "chat-item-content-container">
                <p style={{display: props.display}} className= "chat-item-author">{props.author.toUpperCase()}</p>
                <div style={{backgroundColor: "rgba(28, 55, 91, 0.8)"}}className= "chat-background">
                    <p style={{color: "white"}} className= "chat-item-content">{props.content}</p>
                </div>
            </div>
        </div>
    )
    
}

export default ChatItem;