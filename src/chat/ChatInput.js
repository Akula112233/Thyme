import React from 'react'
import './chat.css'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'

import socketIOClient from 'socket.io-client'
const ENDPOINT = 'https://ec2-52-91-127-119.compute-1.amazonaws.com:8000/'

class ChatInput extends React.Component {
    constructor(props) {
        super(props)
        this.socket = undefined
        this.state = {
            text: ""
        }
    }

    componentDidMount() {
        this.socket = socketIOClient(ENDPOINT)
    }

    handleChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    handleClick = () => {
        let text = this.state.text
        let author = this.props.author
        if (this.state.text == "") {
            return false
        }
        this.setState({
            text: ""
        })
        this.socket.emit('sendMessage', text, author)
    }

    render() {
        return (
            <div id= "chat-input-container">
                <input autoComplete="off" placeholder= "Type your message..." value={this.state.text} onChange= {this.handleChange} id= "chat-input">
                </input>
                <button onClick={this.handleClick} id= "chat-send">
                    <ArrowUpwardIcon id="send-icon">

                    </ArrowUpwardIcon>
                </button>
                
            </div>
        )
    }
}

export default ChatInput