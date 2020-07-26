import React, {useState} from 'react'
import './chat.css'
import socketIOClient from 'socket.io-client'

const ENDPOINT = 'localhost:8000/'
const socket = socketIOClient(ENDPOINT)


function Courses() {
    const [clientCount, setClientCount] = useState(0)

    socket.on('num clients', (num) => {
        setClientCount(num)
    })

    return (
        <div className= "course-info-container">
            <div className= "course-writeup">
                <h1 className= "course-title">
                    Test
                </h1>
                <p className= "people-count"><span>69 Members</span> • <span>{clientCount / 3} Online</span></p>
            </div>
            
            
        </div>
    )
}

export default Courses