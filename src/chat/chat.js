import React from 'react'
import './chat.css';
import ChatBody from './ChatBody'
import ChatInput from './ChatInput'
import Courses from './courses'

class Chat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            courseid: "MTQ3ODcyMzU4NTFa",
            authorInstance: "Bob Ross",
            channelList: [0, 1],
            selected: 0
        }
    }

    getCourseSelect = (num) => {
        this.setState({
            selected: num
        })
    }

    render() {
        let {courseid, authorInstance, channelList} = this.state
        console.log(channelList[this.state.selected])
        return (
            <div id="chat-container">
                <Courses click={(num) => this.getCourseSelect(num)}></Courses>
                <ChatBody course= {this.state.courseid} channel= {channelList[this.state.selected]} author={authorInstance}></ChatBody>
                <ChatInput course={courseid} channelChoice={this.state.selected} channelList= {channelList} author={authorInstance}></ChatInput>
            </div>
        )
    }
    
}

export default Chat