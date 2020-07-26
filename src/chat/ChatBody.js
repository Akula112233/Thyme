import React from 'react'
import './chat.css';
import ChatItem from './ChatItem'
import socketIOClient from 'socket.io-client'
import uniqid from 'uniqid'
import db from '../firebase/firebase'


const ENDPOINT = 'https://ec2-52-91-127-119.compute-1.amazonaws.com:8000/'

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
                if (this.props.author == msg.author) {
                    this.messageList.push(<ChatItem type={2} marginTop="5px" display="none" key={uniqid()} author={msg.author} content={msg.message}></ChatItem>)
                } else {
                    this.messageList.push(<ChatItem type={1} marginTop="5px" display="none" key={uniqid()} author={msg.author} content={msg.message}></ChatItem>)
                }
            } else {
                if (this.props.author == msg.author) {
                    this.messageList.push(<ChatItem type={2} marginTop="7.5px" display="block" key={uniqid()} author={msg.author} content={msg.message}></ChatItem>)
                } else {
                    this.messageList.push(<ChatItem type={1} marginTop="7.5px" display="block" key={uniqid()} author={msg.author} content={msg.message}></ChatItem>)
                }
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