import React from 'react'
import './chat.css';
import ChatBody from './ChatBody'
import ChatInput from './ChatInput'
import Courses from './courses'

class Chat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            courseid: "test123",
            authorInstance: "Bob Ross",
            channelList: ["test111", "newid"],
            selected: 0
        }
    }

    render() {
        let {courseid, authorInstance, channelList, selected} = this.state
        return (
            <div id="chat-container">
                <Courses></Courses>
                <ChatBody course= {courseid} channel= {channelList[selected]} author={authorInstance}></ChatBody>
                <ChatInput course={courseid} channelChoice={0} channelList= {channelList} author={authorInstance}></ChatInput>
            </div>
        )
    }
    
}

export default Chat