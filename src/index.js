import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "typeface-roboto";
import App from './App';

let allCoursesList = [];
let allRooms = [];
let author = "";

function begin () {
    author = "Bob Ross";
    // pulled from the user
    allCoursesList = [
        {courseTitle: 'Anatomy', selected: true, id: "MTQ3ODcyMzU4NTFa", imageLink: "https://lh6.googleusercontent.com/-7Ww0toY0P1s/VN0op12wi-I/AAAAAAAAAVs/GUcBQ4yvdPw/w984-h209-no/164_windows_ltblue.jpg"},
        {courseTitle: 'History', selected: false, id: "MTE4NzM2NTQ5MzA1", imageLink: "https://gstatic.com/classroom/themes/img_read.jpg"},
        {courseTitle: 'Calculus', selected: false, id: "MTE4NzMyMzg3NjYy", imageLink: "https://gstatic.com/classroom/themes/img_reachout.jpg"},
    ]

    for (let i = 0; i < allCoursesList.length; i++){
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        allCoursesList[i].backgroundColor = randomColor
    }

    allRooms = [
      {
        roomId: 0,
        roomType: 0
      },
      {
        roomId: 1,
        roomType: 0
      }
    ]
}

begin()


ReactDOM.render(
  <React.StrictMode>
    <App allCoursesList={allCoursesList} author={author} allRooms= {allRooms}/>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

