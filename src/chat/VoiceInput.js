import React from 'react'
import './chat.css'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'

class VoiceInput extends React.Component {
    constructor(props) {
        super(props)
        this.socket = undefined
        this.state = {
            text: "Click to join..."
        }
    }

    handleClick = () => {
        let text = this.state.text
        let author = this.props.author
        if (this.state.text === "") {
            return false
        }
        this.setState({
            text: "Click to leave..."
        })
    }

    render() {
        return (
            <div id= "chat-input-container">
                <div onClick={this.handleClick} id= "chat-input">{this.state.text}</div>
                <button onClick={this.handleClick} id="chat-send">
                    <ArrowUpwardIcon id="send-icon">
                    </ArrowUpwardIcon>
                </button>

            </div>
        )
    }
}

export default VoiceInput