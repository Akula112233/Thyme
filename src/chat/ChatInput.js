import React from 'react'
import './chat.css'

import socketIOClient from 'socket.io-client'
const ENDPOINT = 'localhost:8000/'

class ChatInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    handleClick = () => {
        const socket = socketIOClient(ENDPOINT)
        let text = this.state.text
        this.setState({
            text: ""
        })
        socket.emit('sendMessage', text)
    }

    render() {
        return (
            <div id= "chat-input-container">
                <input value={this.state.text} onChange= {this.handleChange} id= "chat-input">
                </input>
                <button onClick={this.handleClick} id= "chat-send">
                    Send
                </button>
            </div>
        )
    }
}

export default ChatInput