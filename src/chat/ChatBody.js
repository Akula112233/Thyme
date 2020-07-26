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
            list : [],
            prevAuthor: "undefined"
        }
    }

    componentDidMount() {
        const socket = socketIOClient(ENDPOINT)
        socket.on('chat message', (msg) => {
            if (this.state.prevAuthor == msg.author) {
                this.messageList.push(<ChatItem marginTop="0" display="none" key={uniqid()} author="Bill Gates" content={msg.message}></ChatItem>)
            } else {
                this.messageList.push(<ChatItem marginTop="" display="" key={uniqid()} author="Bill Gates" content={msg.message}></ChatItem>)
            }
            this.setState({
                list: this.messageList,
                prevAuthor: msg.author
            }, () => {
                console.log(msg)
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