import React from 'react'
import './chat.css';
import ChatItem from './ChatItem'
import socketIOClient from 'socket.io-client'
import uniqid from 'uniqid'
import {db} from '../firebase/firebase'
import { Scrollbars } from 'react-custom-scrollbars'


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
            // finds matching course in the catalog
            db.collection("courses").where("courseid", "==", this.props.course).get().then((snapshot) => {
                // grabs the course
                snapshot.forEach(course => {
                    // grabs the channels from the course course
                    db.collection("courses").doc(course.id).collection("channels").where("channelid", "==", this.props.channel).get().then((channelList) => {
                        channelList.forEach(channel => {
                            db.collection("courses").doc(course.id).collection("channels").doc(channel.id).collection("messages").get().then(messages => {
                                messages.forEach(doc => {
                                    if (this.state.prevAuthor == doc.data().author) {
                                        if (this.props.author == doc.data().author) {
                                            this.messageList.push(<ChatItem type={2} marginTop="5px" display="none" key={uniqid()} author={doc.data().author} content={doc.data().text}></ChatItem>)
                                        } else {
                                            this.messageList.push(<ChatItem type={1} marginTop="5px" display="none" key={uniqid()} author={doc.data().author} content={doc.data().text}></ChatItem>)
                                        }
                                    } else {
                                        if (this.props.author == doc.data().author) {
                                            this.messageList.push(<ChatItem type={2} marginTop="7.5px" display="block" key={uniqid()} author={doc.data().author} content={doc.data().text}></ChatItem>)
                                        }
                                        else {
                                            this.messageList.push(<ChatItem type={1} marginTop="7.5px" display="block" key={uniqid()} author={doc.data().author} content={doc.data().text}></ChatItem>)
                                        }
                                    }
                                    this.setState({
                                        list: this.messageList,
                                        prevAuthor: doc.data().author
                                    })
                                })  
                            })
                        })
                        
                    })
                })
            })
        
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
            })
        })
    }

    render() {
        return (
            <div id="chat-body">
                <Scrollbars>
                    <div style={{position: "relative", marginRight: "15px"}}>
                        {this.state.list}
                    </div>
                </Scrollbars>
            </div>
        )
    }
}

export default ChatBody;