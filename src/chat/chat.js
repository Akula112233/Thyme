import React, {Component} from 'react'
import './chat.css';
import ChatBody from './ChatBody'
import ChatInput from './ChatInput'
import Courses from './courses'
import uniqid from 'uniqid'
import DrawingBody from "./DrawingBody";
import VoiceBody from "./VoiceBody";
import VoiceInput from "./VoiceInput";

class Chat extends Component{
    constructor(props) {
        super(props);
        this.state = {
            authorInstance: props.author,
            currentCourse: props.currentCourseID,
            currentRoomType: 2,
            currentRoomId: 2,
            allRooms: props.allRooms,
        }
    }

    changeDropdownHandler(index){
        let roomType = this.state.allRooms[index].roomType
        let roomId = this.state.allRooms[index].roomId
        this.setState({currentRoomType: roomType, currentRoomId: roomId})
    }

    render() {
        let body = null;
        let input = null;
        let idContainter = null;
        if(this.state.currentRoomType ===0){
            body = <ChatBody author={this.state.authorInstance}/>
            input = <ChatInput author={this.state.authorInstance}/>
            idContainter = "chat-container";
        }
        else if(this.state.currentRoomType === 1){
            let listOfMembers = this.state.allRooms[this.state.currentRoomId].members
            console.log(listOfMembers)
            body = <VoiceBody author={this.state.authorInstance} membersList={listOfMembers}/>
            input = <VoiceInput author={this.state.authorInstance}/>
            idContainter = "voice-container";
        }
        else if(this.state.currentRoomType === 2){
            body = <DrawingBody id={"drawing-style"}/>
            idContainter = "chat-container";
        }
        console.log(body)


        return (
            <div id={idContainter}>
                <Courses currentRoomId={this.state.currentRoomId} currentRoomType={this.state.currentRoomType} dropdownHandler={(index) => {this.changeDropdownHandler(index)}}/>
                {body}
                {input}
            </div>
        )
    }
}

export default Chat