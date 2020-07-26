import React from 'react'
import './chat.css';
import ChatBody from './ChatBody'
import ChatInput from './ChatInput'
import Courses from './courses'
import { render } from '@testing-library/react';

class Chat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            courseid: this.props.currentCourseID,
            authorInstance: this.props.author,
            channelList: this.props.allRooms,
            selected: 0,
            currentRoomType: 0,
            body : <ChatBody course= {this.props.currentCourseID} channel= {this.props.allRooms[0].roomId} author={this.props.author}></ChatBody>,
            input : <ChatInput course={this.props.currentCourseID} channelChoice={0} channelList= {this.props.allRooms} author={this.props.author}></ChatInput>,
            idContainer : "chat-container"
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentCourseID == this.props.currentCourseID) {
            return false
        }

        this.setState({
            courseid: this.props.currentCourseID,
            authorInstance: this.props.author,
            channelList: this.props.allRooms
        }, () => {
            let {authorInstance, channelList} = this.state
            if (this.state.currentRoomType === 0) {
                this.setState({
                    body : <ChatBody course= {this.state.courseid} channel= {channelList[this.state.selected].roomId} author={authorInstance}></ChatBody>,
                    input : <ChatInput course={this.state.courseid} channelChoice={this.state.selected} channelList= {channelList} author={authorInstance}></ChatInput>,
                    idContainer : "chat-container"
                })
            } else if (this.state.currentRoomType === 1) {
                // this.setState({
                //     body : <ChatBody course= {this.state.courseid} channel= {channelList[this.state.selected].roomId} author={authorInstance}></ChatBody>,
                //     input : <ChatInput course={courseid} channelChoice={this.state.selected} channelList= {channelList} author={authorInstance}></ChatInput>,
                //     idContainer : "chat-container"
                // })
            } else if (this.state.currentRoomType == 2) {
                // body = <DrawingBody id={"drawing-style"}/>
                this.setState({
                    idContainer: "chat-container"
                })
            }
        })
    }

    getCourseSelect = (num) => {
        this.setState({
            selected: num.value,
            currentRoomType: num.type
        })
    }

    render() {
        return (
            <div id={this.state.idContainer}>
                <Courses click={(num) => this.getCourseSelect(num)}></Courses>
                {this.state.body}
                {this.state.input}
            </div>
        )
    }
    
}

export default Chat