import React from 'react'
import './chat.css';
import ChatItem from './ChatItem'
import socketIOClient from 'socket.io-client'
import uniqid from 'uniqid'


const ENDPOINT = 'localhost:8000/'

class ChatBody extends React.Component {
    constructor(props) {
        super(props)
        this.messageList = []
        this.state = {
            list : []
        }
    }

    componentDidMount() {
        const socket = socketIOClient(ENDPOINT)
        socket.on('chat message', (msg) => {
            this.messageList.push(<ChatItem key={uniqid()} author="Bill Gates" content={msg}></ChatItem>)
            this.setState({
                list: this.messageList
            })
        })
    }

    render() {
        return (
            <div id="chat-body">
                {this.state.list}
            </div>
        )
    }
}

export default ChatBody;