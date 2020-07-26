import React from 'react'
import './chat.css'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'

import socketIOClient from 'socket.io-client'
import { db } from '../firebase/firebase'
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
        if (this.state.text == "") {
            return false
        }

        let text = this.state.text
        let author = this.props.author
        db.collection("courses").where("courseid", "==", this.props.course).get().then(snapshot => { 
            snapshot.forEach(doc => {
                db.collection("courses").doc(doc.id).collection("channels").where("channelid", "==", this.props.channelList[this.props.channelChoice]).get().then(channels => {
                    channels.forEach(channel => {
                        console.log(channel.id)
                        let nextNum = channel.data().nummessages
                        db.collection("courses").doc(doc.id).collection("channels").doc(channel.id).collection("messages").doc(nextNum + "").set({
                            author,
                            text
                        })
                        db.collection("courses").doc(doc.id).collection("channels").doc(channel.id).update({
                            nummessages: nextNum + 1
                        })  
                    })
                })
                
            })
            
        })

        this.setState({
            text: ""
        })
        this.socket.emit('sendMessage', text, author)
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.handleClick()
        }
    }

    render() {
        return (
            <div id= "chat-input-container">
                <input onKeyPress={this.handleKeyPress} autoComplete="off" placeholder= "Type your message..." value={this.state.text} onChange= {this.handleChange} id= "chat-input">
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