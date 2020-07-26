import React, {useState} from 'react'
import './chat.css'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { styled } from '@material-ui/core/styles';
import socketIOClient from 'socket.io-client'

const ENDPOINT = 'https://ec2-52-91-127-119.compute-1.amazonaws.com:8000/'
const socket = socketIOClient(ENDPOINT)
const SelectBlock = styled(Select)({
    height: '35px',
    backgroundColor: '#1C375B',
    fontSize: '12px',
    padding: 0,
    paddingLeft: '10px',
    color: '#ffffff',
    fontFamily: 'Roboto',
    marginRight: '15px',
    borderRadius: "10px"
})

class Courses extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clientCount: 0,
            selectedOption: {
                value: 0,
                type: 0
            }
        }
    }
       
    handleSelect = (e) =>{
        this.setState({
            selectedOption: e.target.value
        }, () => {
            this.props.click(this.state.selectedOption)
        })
    }

    render() {
        socket.on('num clients', (num) => {
            this.setState({
                clientCount: num
            })
        })

        return (
            <div className= "course-info-container">
                <div className= "course-writeup">
                    <h1 className= "course-title">
                        Test
                    </h1>
                    <p className= "people-count"><span>69 Members</span> • <span>{this.state.clientCount / 3} Online</span></p>
                </div>
                <SelectBlock value= {this.state.selectedOption} onChange= {(e) => this.handleSelect(e)} disableUnderline>
                    <MenuItem value= {{value: 0, type: 0}}># General</MenuItem>
                    <MenuItem value= {{value: 1, type: 0}}># Study Help</MenuItem>
                </SelectBlock>
                
            </div>
        )
    }
    
}

export default Courses