import React, {Component} from 'react';
import Chat from './chat/chat'
import SideBar from './sidebar/sidebar'
import './App.css';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            author: props.author,
            allCoursesList: props.allCoursesList,
            currentCourseID: props.allCoursesList[0].id,
            allRooms: props.allRooms
        }
    }

    changeCurrentCourseID = (courseID, index) => {
        let tempAllCourses = [...this.state.allCoursesList];
        for(let i = 0; i < tempAllCourses.length; i++){
            if(tempAllCourses[i].id === this.state.currentCourseID){
                tempAllCourses[i].selected = false
                break;
            }
        }
        tempAllCourses[index].selected = true
        let tempAllRooms = []
        if(courseID === "MTQ3ODcyMzU4NTFa"){
            tempAllRooms = [
                {
                    roomId: 0,
                    roomType: 0,
                    members:[
                        "Jerald",
                        "John",
                        "Montique",
                        "Diego"
                    ]
                },
                {
                    roomId: 1,
                    roomType: 0,
                    members:[
                        "Henry",
                        "James",
                        "Montique",
                        "Jimothy",
                        "John"
                    ]
                },
                {
                    roomId: 0,
                    roomType: 1,
                    members:[
                        "Montique",
                        "Diego"
                    ]
                },
                {
                    roomId: 1,
                    roomType: 1,
                    members:[
                        "Henry",
                        "Jimothy"
                    ]
                },
                {
                    roomId: 0,
                    roomType: 2,
                    members:[]
                },
                {
                    roomId: 1,
                    roomType: 2,
                    members:[]
                },

            ]
        }
        else if (courseID === "MTE4NzM2NTQ5MzA1"){
            tempAllRooms = [
                {
                    roomId: 0,
                    roomType: 0,
                    members:[
                        "Jerald",
                        "John",
                        "Montique",
                        "Diego"
                    ]
                },
                {
                    roomId: 1,
                    roomType: 0,
                    members:[
                        "Henry",
                        "James",
                        "Montique",
                        "Jimothy",
                        "John"
                    ]
                },
                {
                    roomId: 0,
                    roomType: 1,
                    members:[
                        "Montique",
                        "Diego"
                    ]
                },
                {
                    roomId: 1,
                    roomType: 1,
                    members:[
                        "Henry",
                        "Jimothy"
                    ]
                },
                {
                    roomId: 0,
                    roomType: 2,
                    members:[]
                },
                {
                    roomId: 1,
                    roomType: 2,
                    members:[]
                },
            ]
        }
        else if(courseID === "MTE4NzMyMzg3NjYy"){
            tempAllRooms = [
                {
                    roomId: 0,
                    roomType: 0,
                    members:[
                        "Jerald",
                        "John",
                        "Montique",
                        "Diego"
                    ]
                },
                {
                    roomId: 1,
                    roomType: 0,
                    members:[
                        "Henry",
                        "James",
                        "Montique",
                        "Jimothy",
                        "John"
                    ]
                },
                {
                    roomId: 0,
                    roomType: 1,
                    members:[
                        "Montique",
                        "Diego"
                    ]
                },
                {
                    roomId: 1,
                    roomType: 1,
                    members:[
                        "Henry",
                        "Jimothy"
                    ]
                },
                {
                    roomId: 0,
                    roomType: 2,
                    members:[]
                },
                {
                    roomId: 1,
                    roomType: 2,
                    members:[]
                },
            ]
        }
        this.setState({currentCourseID: courseID, allCoursesList: tempAllCourses})
        console.log("Current Course is Now: " + this.state.currentCourseID.toString())
    }

    render() {
        // let allCoursesList = this.state.allCoursesList ?? this.allCoursesList
      return (
        <div className="App">
          <Chat allRooms={this.state.allRooms} allCourses={this.state.allCoursesList} author={this.state.author} changeCurrentCourseID={this.changeCurrentCourseID} currentCourse={this.state.currentCourseID}/>
          <SideBar allCourses={this.state.allCoursesList} author={this.state.author} changeCurrentCourseID={this.changeCurrentCourseID}/>
        </div>
      );
    }
}

export default App;
