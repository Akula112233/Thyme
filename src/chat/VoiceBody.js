import React from 'react'
import './chat.css';
import ChatItem from './ChatItem'
import socketIOClient from 'socket.io-client'
import uniqid from 'uniqid'

class VoiceBody extends React.Component {
    constructor(props) {
        super(props)
        this.pTags = []
        this.state = {
            memberList: this.props.membersList,
            renderArray: []
        }
    }

    componentDidMount() {
        console.log('dfhknldlmfhjfdh')
        console.log(this.props)
        console.log(this.props.membersList)
        this.pTags = this.state.memberList.map(member => {
                return ( <h3>{member}</h3>)
            }
        )
        this.setState({renderArray: this.pTags})
    }



    render() {
        return (
            <div>
                <h2> Joined Users </h2>
                {this.state.renderArray}
            </div>
        )
    }
}

export default VoiceBody;