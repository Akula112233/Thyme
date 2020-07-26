import React from 'react';
import Chat from './chat/chat'
import SideBar from './sidebar/sidebar'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      author: this.props.author,
      allCoursesList: this.props.allCoursesList,
      currentCourseID: this.props.allCoursesList[0].id,
      allRooms: this.props.allRooms
    }
  }

  changeCurrentCourseID = (courseID, index) => {
    let tempAllCourses = [...this.state.allCoursesList]
    for(let i = 0; i < tempAllCourses.length; i++){
      if(tempAllCourses[i].id === this.state.currentCourseID){
          tempAllCourses[i].selected = false
          break;
      }
    }
    tempAllCourses[index].selected = true

    this.setState({
      currentCourseID: courseID,
      allCoursesList: tempAllCourses
    })
  }

  render() {
    return (
      <div className="App">
        <Chat allRooms={this.state.allRooms} currentCourseID={this.state.currentCourseID} author={this.props.author}></Chat>
        <SideBar allCourses={this.state.allCoursesList} author= {this.state.author} changeCurrentCourseID= {this.changeCurrentCourseID}></SideBar>
      </div>
    )
  }
}

export default App;
