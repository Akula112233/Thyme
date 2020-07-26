import React from 'react'
import './chat.css';
import ChatItem from './ChatItem'
import socketIOClient from 'socket.io-client'
import uniqid from 'uniqid'


const ENDPOINT = 'localhost:8000/'

class DrawingBody extends React.Component {
    render() {
        return (
            <div>
                <iframe id="drawing-style" src={'https://socketio-whiteboard-zmx4.herokuapp.com/'}/>
                {/*credit to https://socket.io/ ^^ */}
            </div>
        )
    }
}

export default DrawingBody;